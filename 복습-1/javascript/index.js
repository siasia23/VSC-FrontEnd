let i;

window.onload=function() {

/*  짝홀 맞추기의 변수
    let btn1=document.querySelector("#btn1");
    let num1=document.querySelector("#num1");
    let result1=document.querySelector("#result1");
*/

/*  짝홀 맞추기 (onclick 사용)
    btn1.onclick=function() {
        i = Number(num1.value);
        if(i%2 == 0)
            result1.innerHTML="짝수";
        else
            result1.innerHTML="홀수";
    }
*/

/*  짝홀 맞추기 (addEventListener 사용)
    btn1.addEventListener("click", function() {
    // "click" 이라는 event를 실행한다. 실무에서 onclick 대신 사용.
        su = Number(num1.value);
        if(su%2 == 0)
            result1.innerHTML="짝수";
        else 
            result1.innerHTML="홀수";
    })
*/

/* 3의 배수 맞추기
    let btn2=document.querySelector("#btn2");
    let num2=document.querySelector("#num2");
    let result2=document.querySelector("#result2");

    btn2.addEventListener("click", function() {
        i = Number(num2.value);
        if(i%3 == 0)
            result2.innerHTML="3의 배수";
        else
            result2.innerHTML="3의 배수 아님";
    })
*/

/*  성인 여부 맞추기
    let btn3=document.querySelector("#btn3");
    let num3=document.querySelector("#num3");
    let result3=document.querySelector("#result3");

    btn3.addEventListener("click", function() {
        i = Number(num3.value);
        if (i >= 1 && i <= 19)
            result3.innerHTML="미성년";
        else
            result3.innerHTML="성인";
    })
*/

/*  합격 여부 맞추기
    let btn4=document.querySelector("#btn4");
    let num4=document.querySelector("#num4");
    let result4=document.querySelector("#result4");

    btn4.addEventListener("click", function() {
        i = Number(num4.value);
        if (i>100 || i<0)
            result4.innerHTML="";
        else if (i>=80 && i<=100)
            result4.innerHTML="합격";
        else
            result4.innerHTML="불합격";
    })
*/

/*  학점 계산기 (if문 사용)
    let btn5=document.querySelector("#btn5");
    let num5=document.querySelector("#num5");
    let result5=document.querySelector("#result5");

    btn5.addEventListener("click", function() {
        i = Number(num5.value);
        if (i >= 90)
            result5.innerHTML = "A";
        else if (i >= 80)
            result5.innerHTML = "B";
        else if (i >= 70)
            result5.innerHTML = "C";
        else
            result5.innerHTML = "F";
    })
*/

/*  학점 계산기 (switch문 사용)
    let btn5=document.querySelector("#btn5");
    let num5=document.querySelector("#num5");
    let result5=document.querySelector("#result5");

    btn5.addEventListener("click", function() {
        let grade;
        i = Number(num5.value);
        i = parseInt(i/10);
        // 10으로 나누고 정수로 만들라는 의미이므로, 소수점을 없애라는 뜻과 같음.
        switch (i) {
            case 10: grade="A";break;
            case 9: grade="A";break;
            case 8: grade="B";break;
            case 7: grade="C";break;
            default: grade="F";

            // switch의 break는 if의 else if 기능
            // switch의 default는 if의 else 기능
        }
        result5.innerHTML=grade;
    })
*/
}