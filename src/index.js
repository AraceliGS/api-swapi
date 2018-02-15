$(document).ready(() => {
  let $email = $('#email');
  let $password = $('#password');
  /* Validando el correo */
  var checkingEmail = $email.on('input', function(event) {
    console.log(event.target.value);
    console.log($(this).val());
    const PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATTERNEMAIL.test($(this).val()));
  });
  /* Validando la contraseña*/ 
  /*
  Minimo 6 caracteres
Al menos una letra mayúscula
Al menos una letra minucula
Al menos un dígito
No espacios en blanco
Al menos 1 caracter especial

Ejemplo: Abc34*
  */
  var checkingPassword = $password.on('input', function(event) {
    console.log(event.target.value);
    const PATTERNPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,}$/;
    console.log(PATTERNPASSWORD.test($(this).val()));
    if ($email.val().length !== 0 && PATTERNPASSWORD.test($(this).val()) === true) {
      $('#register-button').removeAttr('disabled');
    }
  });
});
