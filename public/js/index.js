'use strict';

$(document).ready(function () {
  var $email = $('#email');
  var $password = $('#password');
  var $okEmail = void 0;
  /* Validando el correo */
  var checkingEmail = $email.on('input', function () {
    console.log($(this).val());
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATTERNEMAIL.test($(this).val()));
    if (PATTERNEMAIL.test($(this).val()) === true) {
      $okEmail = true;
    }
  });

  var checkingPassword = $password.on('input', function () {
    var PATTERNPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,}$/;
    console.log(PATTERNPASSWORD.test($(this).val()));
    if ($okEmail === true && PATTERNPASSWORD.test($(this).val()) === true) {
      $('#register-button').removeAttr('disabled');
    } else {
      $('#register-button').attr('disabled', true);
    }
  });
});