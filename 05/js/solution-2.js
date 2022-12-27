const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btn = document.querySelector("#btn");
let result = document.querySelector("#result");
btn.onclick = () => {
  result.innerText = getGCD(num1.value, num2.value);
  console.log(GCD);
};

function getGCD(num1, num2){
    if(num1 > num2){
    for(let i = 0; i < num1; i++){
                    if(num1 % i == 0 && num2 % i == 0){
                        GCD = i;
                    }
                }
            return GCD;
    }else if(num2 > num1){
        for(let i = 0; i < num2; i++){
                        if(num1 % i == 0 && num2 % i == 0){
                            GCD = i;
                        }
                    }
        }
        return GCD;
    }