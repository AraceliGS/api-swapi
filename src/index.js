$(document).ready(() => {
  let $email = $('#email');
  let $password = $('#password');
  let $okEmail;
  /* Validando el correo */
  var checkingEmail = $email.on('input', function() {
    console.log($(this).val());
    const PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATTERNEMAIL.test($(this).val()));
    if (PATTERNEMAIL.test($(this).val()) === true) {
      $okEmail = true;
    }
  });
  
  var checkingPassword = $password.on('input', function() {
    const PATTERNPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,}$/;
    console.log(PATTERNPASSWORD.test($(this).val()));
    if ($okEmail === true && PATTERNPASSWORD.test($(this).val()) === true) {
      $('#register-button').removeAttr('disabled');
    } else {
      $('#register-button').attr('disabled', true);
    }
  });
});
