const menuA = [    
    "딸기주스", "아이스크림", "아이스 아메리카노", 
    "디저트", "망고주스", "팥빙수", 
];
const imgA = [
    "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", 
    "img5.jpg", "img6.jpg",
];
const textA = [
    "딸기는 여름 과일 아니고 겨울 과일 입니다.",
    "아이스크림을 많이 먹으면 ...",
    "33","44", "55", "66"
];

const priceA =[
    0, 100, 200, 300, 400, 500, 600
]; 
const calA = [
    0, 10, 15, 22, 35, 17, 85
]





window.onload=function() {
    for(i=0; i<menuA.length; i++) {
        $("#menu"+(i+1)).text(menuA[i]);
    }
}

$(function() {
    $(".menu li").on("click", function() {
        no=$(this).index();
        // 여기서 no는 변수 이름.
        // 여기서 this는 click한 li.
        count=no;
        $("#pic").attr("src", "img/"+imgA[no]);

        $(".disp").text(count+" / 6");
        $("#pic").attr("src", "img/"+imgA[count]);

        $("#text1").text("상품 : "+menuA[count]);
        $("#text2").text("가격 : "+priceA[count+1]);
        $("#text3").text("영양 : "+calA[count+1]);
    })





    let count=0;

    $(".prevB").on("click", function() {
        if(count>0)
            count--;
        else
            count=6;

        $(".disp").text(count+" / 6");
        $("#pic").attr("src", "img/"+imgA[count]);

        $("#text1").text("상품 : "+menuA[count]);
        $("#text2").text("가격 : "+priceA[count+1]);
        $("#text3").text("영양 : "+calA[count+1]);
    });

    $(".nextB").on("click", function() {
        if(count<6)
            count++;
        else
            count=0;

        $(".disp").text(count+" / 6");
        $("#pic").attr("src","img/"+imgA[count]);
        // attr : jQuery에서 속성 바꿔주는 명령어. 
        // attr(a,b) : a를 b로 바꿔라.

        $("#text1").text("상품 : "+menuA[count]);
        $("#text2").text("가격 : "+priceA[count+1]);
        $("#text3").text("영양 : "+calA[count+1]);
    });
})