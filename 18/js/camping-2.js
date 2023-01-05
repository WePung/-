const lat = 37.55684;
const lng = 126.91404;

var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(lat, lng),
        level: 14
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 

var clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 10
});

const  url = 'http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=FSYGYSHOVs2%2BJnU1JYGsvu95uuPcadpsYhM84SzqBz17%2BOWXXCO4eHbhLP4efKKIz8PLbyO6tf93i5ajseadFg%3D%3D&MobileOS=ETC&MobileApp=appTest&numOfRows=291&_type=json';

fetch(url)
.then(res => res.json())
.then(json => {
  const data = json.response.body.items.item;
var markers = [];

for(let i = 0; i < data.length; i++) {  
  var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX)
  });

  markers.push(marker);

  var infowindow = new kakao.maps.InfoWindow( {
      content : data[i].facltNm
  });
  kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));  
  kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));   
}

function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);          
    };
}

function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

clusterer.addMarkers(markers);
});