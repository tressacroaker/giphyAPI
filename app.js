$(document).ready(function(){


$("#subButton").click(function(){
  $(".gifList").empty();
  var text = $("#inputText").val();
  var plusText = text.replace(/[" "]/g, "+");
  $.ajax ({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/search?q=" + plusText + "&api_key=dc6zaTOxFJmzC"
  }).then(function(response){
    for (var i = 0; i < response.data.length; i++) {
      $(".gifList").append('<img src="' + response.data[i].images.original.url +'"/>');
    }
  });


});








});
