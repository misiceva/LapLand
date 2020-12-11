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
    $("#draggable").draggable();
});