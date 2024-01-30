window.onload=function() {

}
$(function() {
    let i=0;

    $(".prevB").click(function() {
        if(i<4) {
            i++;
            $(".logo_box").animate({"left":"-=1000px"},500);
        }
    })

    $(".nextB").click(function() {
        if(i>0) {
            i--;
            $(".logo_box").animate({"left":"+=1000px"},500);
        }
    })
})
$(function() {
    let count=3;
    $(".at5_disp").text(count+" / 5");
    $(".opt li:eq(2)").css("background","red");

    $(".prev5B").on("click", function() {
        if(count>1) {
            $(".at5_msg").hide();
            $(".opt li:eq("+(count-2)+")").css("background","red");
            $(".opt li:eq("+(count-1)+")").css("background","white");
            count--;
            $(".at5_disp").text(count+" / 5");
            $(".img5").animate({"left":"+=500px"},500);
        }
        else {
            $(".at5_msg").show();
            $(".at5_msg_tip").text("왼쪽에");
        }
    })

    $(".next5B").on("click", function() {
        if(count<5) {
            $(".at5_msg").hide();
            $(".opt li:eq("+count+")").css("background","red");
            $(".opt li:eq("+(count-1)+")").css("background","white");
            count++;
            $(".at5_disp").text(count+" / 5");
            $(".img5").animate({"left":"-=500px"},500);
        }
        else {
            $(".at5_msg").show();
            // show : 나타나게 해라.
            $(".at5_msg_tip").text("오른쪽에");
        }
    })
    $(".at5_close").on("click", function() {
        $(".at5_msg").hide();
    })

})