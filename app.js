$(document).ready(function(){
  var listofgifs;

  function findGif(thing) {
    $(".gifList").remove();
    $(".listContainer").append(`<div class="gifList"></div>`)
    $.get("http://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=dc6zaTOxFJmzC")
    .done(function(response){
      listofgifs = response.data;
      for (var i = 0; i < listofgifs.length; i++) {
    $(".gifList").append(`<img src="` +
     listofgifs[i].images.downsized_medium.url
     + `">`)
      }
    });
  }

  // function findGif(thing) {
  //   $(".gifList").remove();
  //   $(".listContainer").append(`<div class="gifList"></div>`)
  //   $.ajax({
  //     url: "http://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=dc6zaTOxFJmzC"
  //   }).done(function(response){
  //     listofgifs = response.data;
  //     for (var i = 0; i < listofgifs.length; i++) {
  //   $(".gifList").append(`<img src="` +
  //    listofgifs[i].images.downsized_medium.url
  //    + `">`)
  //     }
  //   });
  // }

  $("#subButton").click(function(){
    findGif($("input:text").val());
  })

});
