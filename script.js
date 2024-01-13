function s() {
  var imie = document.getElementById('imie').value;
  var nazwisko = document.getElementById('nazwisko').value;
  var email = document.getElementById('email').value;
  var opis = document.getElementById('opis').value;
  var paragraf = document.getElementById('w');
  if (!document.getElementById('zap').checked) {
    paragraf.style.color = 'red';
    paragraf.innerHTML = 'Musisz zapoznać się z regulaminem';
  } else {
    paragraf.innerHTML = imie.toUpperCase() + ' ' + nazwisko.toUpperCase() + '<br>Treść twojej sprawy: ' + opis + '<br>Na podany adres e-mail zostanie wysłana oferta';
  }
}
