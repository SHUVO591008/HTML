




document.getElementById("test").addEventListener("click",()=>window.scrollTo({

    top:30,
    behavior:"smooth",

}))




$(document).ready(function(){

$(".form-control").click(function(){
	$(".form-control").css("background-color", "#343a40");
})

});


$(document).ready(function () {
   $("#search-icon").click(function () {
      $("#demo").slideDown();

   });

   $("#close").click(function () {
      $("#demo").slideUp();

   });
});






