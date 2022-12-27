const toggle_txt = document.querySelector("#toggle_txt");
const toggle_btn = document.querySelector("#toggle_btn");
let i = 0;

toggle_btn.onclick = () => {
    if(i == 0){
    toggle_txt.style.display = "block";
    i++;
    }else if(i == 1){
        toggle_txt.style.display = "none";
        i--;
    }
}