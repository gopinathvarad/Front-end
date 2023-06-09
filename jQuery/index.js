$("button").click(function(){
    $("h1").css("color", "purple");
})

$(document).keypress(function(event){
    $("h1").text(event.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
})

// Animation with jQuery !!!!
$("h1").on("click", function(){
    $("h1").hide();
})

$("h1").on("click", function(){
    $("h1").show();
})

$("h1").on("click", function(){
    $("h1").slideUp();
})

$("h1").on("click", function(){
    $("h1").slideDown();
})

$("h1").on("click", function(){
    $("h1").slideToggle();
})

// Animate method in jQuery

$("h1").on("click", function(){
    $("h1").animate({margin: "20%"});
})

// Multiple Animation in jQuery
$("h1").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})
