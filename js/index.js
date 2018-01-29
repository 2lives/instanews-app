$(".storygrid").hide();
$(".loadinggif").hide();

$("#options").on("change", function() {
$('.storygrid').empty();
$('#heading'/*header*/).attr('class', 'top') 
  $(".storygrid")
    .delay(2000)
    .fadeIn();
  $('.loadinggif')
  .fadeIn(1000).fadeOut(1000);

  
 var val = $(this).val();
  loadContent(val);
});

function loadContent(value) {
  var url = "https://api.nytimes.com/svc/topstories/v2/" + value + ".json";
  url +=
    "?" +
    $.param({
      "api-key": "c2cdfd9418b14bab99be7dd7925d88ac"
    });

  $.ajax({
    url: url,
    method: "GET"
  })
    .done(function(data) {
      var i = 0;
      while  (i <= 11) {
        
        var html = '';
      if (data.results[i].multimedia[4].url) {
        html += '<a target="_blank" href="data.results[i].url" class= "tile">';
        html += '<img src="';
        html += data.results[i].multimedia[4].url;
        html += '"/>';
        html += '<p> "';
        html += data.results[i].abstract;
        html += '"</p>'; 
        html += '</a>'; 
        
        $('.storygrid').append(html);

        i++;

        console.log(data.results);
      }    
      }
      })


    .fail(function(err) {
      throw err;
    });
}

