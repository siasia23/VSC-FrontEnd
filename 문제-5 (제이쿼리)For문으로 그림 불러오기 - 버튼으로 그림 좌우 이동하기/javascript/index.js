const imgA=[
    "img0", "img1", "img2", "img3", "img4"
]

$(function(){
    for(i=0; i<imgA.length; i++){
        $(".box li:eq("+i+")").css("background","url(img/"+imgA[i]+".jpg)")
        .css("backgroundSize","100% 100%");
    }
    for(i=0; i<6; i++){
        $(".sec2 div:eq("+i+")").css("background","url(img/"+imgA[i]+".jpg)")
        .css("backgroundSize","100% 100%");
    }

    let count=1;
    $(".page").text(count+" / 4");
    $(".left").click(function(){
        if(count>1) {
            count--;
            $(".page").text(count+" / 4");
            $(".sec2").animate({"left":"+=300px"},500);
        }
    })
    $(".right").click(function(){
        if(count<4) {
            count++;
            $(".page").text(count+" / 4");
            $(".sec2").animate({"left":"-=300px"},500);
        }
    })

    $(".box li").click(function(){ 
        $(".back").show();
        no=$(this).index(); 
        // 'click한 것'(this)의 index number 알아내라, 그것을 변수 no로 하겠다.
        $(".back_pic").attr("src","img/img"+no+".jpg");
        // attr : 속성 변환 jQuery 함수.
        // $(불러들일 요소의).attr("속성을","이 값으로 변환하라");
    })
    $(".back_close").click(function(){
        $(".back").hide();
    })
})
