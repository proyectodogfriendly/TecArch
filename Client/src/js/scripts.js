const $ = window.$;
function initPart() {

    function d() {
        $(".alt").each(function() {
            $(this).css({
                "margin-top": -$(this).height() / 2 + "px"
            });
        });
 
    }
    d();
    
    $(window).on("resize", function() {
        d();
    });
	
 
     var n = $(".partcile-dec").data("parcount");
    $(".partcile-dec").jParticle({
        background: "#ffffff",
        color: "#ccc",
        border:"2px solid blue",
        particlesNumber: n,
        particle: {
            speed: 20
        }
    });


}
 
$(function() {
    initPart();
 
});