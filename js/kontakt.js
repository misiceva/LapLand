function provera(){
var ime = document.forms["form2"]["unosImePrezime"].value;
var email = document.forms["form2"]["unosEmail"].value;
var komentar = document.forms["form2"]["comments"].value;
if ((ime == "") || (email == "") || (komentar == "") ) {
    alert('Niste popunili sva polja');
} else {
    alert('Poslali ste zahtev');
}

}

$(function(){
    $(".draggable").draggable();
});

/*NE RADI*/
$( function() {
    $(".map-responsive").resizable();
  } );

$( function() {
    $( "#selektuj" ).selectable();
  } );
  
  $( function() {
    $( "#resizable" ).resizable();
  } );

  $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );

  $( function() {
    $( "#novodugme" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );

 

  $( "input" ).labels().addClass( "ui-state-highlight" )

  $( "#promeniBoju" ).click(function() {
    $( ".divForme" ).animate({
      color: "green",
      backgroundColor: "rgb( 20, 20, 20 )"
    });
  });