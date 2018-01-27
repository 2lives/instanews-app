$('#options').on('change', function(){
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

   $('.storygrid').append("<div>"
    + data.results [i].multimedia[0] +//picture
    // + data.results [i].title  + //title
  "</div>"
  
   );
  }

 console.log(data) 
  

 
 })

.fail(function(err) {
  throw err
  });
});
