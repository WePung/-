let Num1 = parseInt(prompt("첫 번째 숫자를 입력해주세요"));
let Num2 = parseInt(prompt("두 번째 숫자를 입력해주세요"));
let sum = 0;

function gcd(num1, num2){
if(num1 > num2){
for(let i = 0; i < num1; i++){
                if(num1 % i == 0 && num2 % i == 0){
                        sum = i;
                }
            }
        return sum;
}else if(num2 > num1){
    for(let i = 0; i < num2; i++){
                    if(num1 % i == 0 && num2 % i == 0){
                            sum = i;
                    }
                }
    }
    return sum;
}
document.write(`${Num1}과 ${Num2}의 최대공약수 - ${gcd(Num1, Num2)}`);