let many, point, sale, btn1, btn2, total;

window.onload=function() {
    many=document.querySelector("#many");
    point=document.querySelector("#point");
    sale=document.querySelector("#sale");
    btn1=document.querySelector("#btn1");
    btn2=document.querySelector("#btn2");
    total=document.querySelector("#total");

    btn1.addEventListener("click", function() {
        
        let ea = Number(many.value);
        let org=320*ea;
        let sa ,won;
        
        if(org >= 30000) {
            sa = org*0.03;
            won = org-sa;
        }
        else
            sa=0;
        
        sale.innerHTML=parseInt(sa);
        point.innerHTML=parseInt(ea*320%100);
        total.innerHTML=won;

    })
}