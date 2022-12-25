let Num = parseInt(prompt("숫자를 입력해주세요"));
function Then(num){
    if(num == 0){
        alert(`${num}은 0입니다`);
    }else if(num > 0){
        alert(`${num}은 양수 입니다`);
    }else if(num < 0){
        alert(`${num}은 음수 입니다`);
    }else{
        alert(`${num}은 숫자가 아닙니다`);
    }
}
Then(Num);