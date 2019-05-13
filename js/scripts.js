function closeNav() 
{
    $("#mobile-menu").css("display","none");
    $("#mobile-navbar").css("display","block");
}
function openNav() 
{
    $("#mobile-menu").css("display","block");
    $("#mobile-menu").css("position","fixed");
    $("#mobile-menu").css("top","0");
    $("#mobile-menu").css("z-index","9999");
    $("#mobile-menu").css("width","100%");
    $("#mobile-navbar").css("display","none");
}

$(".mobile-nav-item").click(function(e) {

    
    closeNav();

});
