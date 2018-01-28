  $('.storygrid').hide();



  $('#options').on('change', function(){

  $('.storygrid').delay(3000).show();
  
});
  var value = $('#options').val()
  var url = "https://api.nytimes.com/svc/topstories/v2/" + value + ".json";
  url += '?' + $.param({
  'api-key': "033cf8ec92ed4c98b1eb0c9e33364101"
});

$.ajax({
  url: url,
  method: 'GET',
})
  .done(function(data) {
    

   for (var i = 0; i < 12; i++) {

    $('.storygrid').append("<div>" + data.results [i].abstract + data.results [i].multimedia[3].url + "</div>" 
  //  "<div>" + <img src='data.results [i].multimedia[4]'/> + "</div>"
 
  
   );
  }

 console.log(data) 
  

 
 })

.fail(function(err) {
  throw err
  });

