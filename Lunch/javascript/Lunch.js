// JSON data 형식 (key와 value로 구성)
// key와 value는 :(콜론)으로 연결함.
// data와 data는 ,(콤마)로 연결함.
const dataA={
    kind:["","한식","분식","중식","양식","기타"],

    kor:["","김찌","순찌","비빔밥"],
    korImg:["","img1.jpeg","img2.jpeg","img3.jpeg"],
    korprice:[0, 8000, 8500, 9000],

    bun:["","라면","김밥","떡볶이"],
    bunImg:["","img4.jpeg","img5.jpeg","img6.jpeg"],
    bunprice:[0, 3000, 3500, 7000],

    cha:["","짜장","짬뽕","볶음밥"],
    chaImg:["","img7.jpeg","img8.jpeg","img9.jpeg"],
    chaprice:[0, 8000, 8500, 9000],

    eur:["","파스타","피자","타코"],
    eurImg:["","img10.jpeg","img11.jpeg","img12.jpeg"],
    eurprice:[0, 8500, 9500, 10000],
};

let no, i, count;

window.onload=function(){

}

$(function(){

    // 고르기 버튼
    $(".start").on("click",function(){
        // count=Math.random()*100 + 1;    // 1~99 사이의 숫자 생성
        count=parseInt(Math.random()*3 + 1);    // 1~3 사이의 숫자 생성
        // console.log(count+"번 선택됨")
        $(".wrap3 li").css("background","white").css("color","black");
        $(".box"+count).css("background","black").css("color","white");

        if(no==1) {
            $(".pic").attr("src","img/"+dataA.korImg[count]);
            $(".text").text(dataA.korprice[count]+"원");
        }
        else if(no==2) {
            $(".pic").attr("src","img/"+dataA.bunImg[count]);
            $(".text").text(dataA.binprice[count]+"원");
        }
        else if(no==3) {
            $(".pic").attr("src","img/"+dataA.chaImg[count]);
            $(".text").text(dataA.chaprice[count]+"원");
        }
        else if(no==4) {
            $(".pic").attr("src","img/"+dataA.eurImg[count]);
            $(".text").text(dataA.eurprice[count]+"원");
        }
    })

    // 다시 고르기 버튼
    $(".again").on("click",function(){
        count=0; no=0;
        $(".wrap3 li").css("background","white").css("color","black");
    })
})

// HTML onchange function
function func_ch(js){
    no=js.selectedIndex;
    $(".box0").text(dataA.kind[no]+" 선택함");
    kind_func(no);
}
function kind_func(js){
    if(js==1){
        for(i=1; i<dataA.kor.length; i++){
            $(".box"+i).text(dataA.kor[i]);
        }
    }
    else if(js==2){
        for(i=1; i<dataA.kor.length; i++){
            $(".box"+i).text(dataA.bun[i]);
        }
    }
    else if(js==3){
        for(i=1; i<dataA.kor.length; i++){
            $(".box"+i).text(dataA.cha[i]);
        }
    }
    else if(js==4){
        for(i=1; i<dataA.kor.length; i++){
            $(".box"+i).text(dataA.eur[i]);
        }
    }
    $(".wrap3 li").css("background","white").css("color","black");
}