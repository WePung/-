let Num = prompt("1보다 큰 숫자를 입력하세요.");
let sum = 0;
for(let i = 0; i < Num; i++){
    if(i > 1){
        if(i % 2 == 0){
        sum = sum + i;
        document.writeln(i +"-----"+ sum +"<br>");
    }
    }
}