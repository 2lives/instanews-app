"use strict";

$(".storygrid").hide();
// $(".loadinggif").hide();

$("#options").on("change", function () {
  $('.storygrid').empty();
  $('#heading' /*header*/).attr('class', 'top');
  $(".storygrid").delay(200).fadeIn();
  $('.loadinggif').show();

  var val = $(this).val();
  loadContent(val);
});

function loadContent(value) {
  var url = "https://api.nytimes.com/svc/topstories/v2/" + value + ".json";
  url += "?" + $.param({
    "api-key": "c2cdfd9418b14bab99be7dd7925d88ac"
  });

  $.ajax({
    url: url,
    method: "GET"
  }).done(function (data) {
    var i = 0;
    while (i <= 11) {

      var html = '';

      // console.log(data.results[i].multimedia);

      if (data.results[i].multimedia.length > 0) {
        html += '<a target="_blank" href="' + data.results[i].url + '" class= "tile">';
        html += '<img src="';
        html += data.results[i].multimedia[4].url;
        html += '"/>';
        html += '<p> "';
        html += data.results[i].abstract;
        html += '"</p>';
        html += '</a>';

        $('.storygrid').append(html);

        //   console.log(data.results);
      }

      i++;
    } // endwhile
  }).fail(function (err) {
    throw err;
  }).always(function () {
    $('.loadinggif').hide().delay(2000);
  });
}