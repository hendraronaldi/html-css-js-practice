$(document).ready(function(){
    $("#toggle").click(function() {
        if ($(this).is(":checked")) {
            $(".price-yearly").show();
            $(".price-monthly").hide();
        } else {
            $(".price-yearly").hide();
            $(".price-monthly").show();
        }
    });
});