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

/*ne radi*/
  $( function() {
    var state = true;
    $( "#animacija2" ).on( "click", function() {
      if ( state ) {
        $( "#effect2" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect2" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );

  $( function() {
    $( document ).tooltip();
  } );