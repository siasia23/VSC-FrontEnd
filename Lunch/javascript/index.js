const dataA={
    kind:["","한식","분식","중식","양식","기타"],

    kor:["","김치찌게","순두부","비빔밥"],
    korImg:["","kim.jpeg","sun.jpeg","bibi.jpeg"],
    korprice:[0, 8000, 8500, 9000],

    bun:["","라면","김밥","국수"],
    bunImg:["","men.jpeg","kimbab.jpeg","kuk.jpeg"],
    bunprice:[0, 3000, 3500, 7000],
    
    cha:["","자장면","짬뽕","볶음밥"],
    chaImg:["","jajang.jpeg","jjam.jpeg","bbobb.jpeg"],
    chaprice:[0, 8000, 8500, 9000],
    
    eur:["","돈가스","함박스택","생선가스"],
    eurImg:["","img7.jpeg","img14.jpeg","img10.jpeg"],
    eurprice:[0, 8500, 9500, 10000],
};
let no, i, count;
window.onload=function() {

}
$(function() {
    $(".start").on("click", function() {
        // count=Math.random()*100 + 1; // 1~99사이의 숫자 생성
        count=parseInt( Math.random()*3 + 1 ); // 1~3사이의 숫자 생성
            
        $(".wrap li").css("background","white").css("color","black");   // 모든 li 원래 배경
        $(".box"+count).css("background","black").css("color","white"); // 선택 배경

        // no=콤보박스(음식종류 번호),  count(종류-실제 음식 번호)
        if(no==1)
            $(".pic").attr("src","img2/" + dataA.korImg[count]);
        else if(no==2)
            $(".pic").attr("src","img2/" + dataA.bunImg[count]);
        else if(no==3)
            $(".pic").attr("src","img2/" + dataA.chaImg[count]);
        else if(no==4)
            $(".pic").attr("src","img2/" + dataA.eurImg[count]);

    })
    // 다시하기 버튼 클릭하면 count와 콤보박스(no) 취소가 초기화
    $(".again").on("click", function() {
        count=0; no=0;
        $(".wrap li").text("")
                    .css("background","white")
                    .css("color","black");
    })



})
function func_ch(js) {
    no=js.selectedIndex;    
    $(".box0").text(dataA.kind[no] + " 선택");
    kind_func(no);    
}
function kind_func(js) {
    if(js==1) {
        for(i=1; i<dataA.kor.length; i++) {
            $(".box"+i).text(dataA.kor[i]);
        }
    }
    else if(js==2) {
        for(i=1; i<dataA.kor.length; i++) {
            $(".box"+i).text(dataA.bun[i]);
        }
    }
    else if(js==3) {
        for(i=1; i<dataA.kor.length; i++) {
            $(".box"+i).text(dataA.cha[i]);
        }
    }
    else if(js==4) {
        for(i=1; i<dataA.kor.length; i++) {
            $(".box"+i).text(dataA.eur[i]);
        }
    }

}