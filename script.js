$(document).ready(function(){

  const animSquere = $('div');

  $('#buttonClik').click(function(){
      animSquere.animate({
          marginLeft: '100px', 
          width: '100px', 
          height: '100px'
      }, 3000, function(){
          $('#square').animate({
            'background-color': 'blue'
          }, 5000, function(){
          $('#square').append('<p>Animacja zakończona</p>')   
          });
        
      });
      
  });

});
 
