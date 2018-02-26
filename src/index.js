$(document).ready(() => {
  let $email = $('#email');
  let $password = $('#password');
  let $okEmail;
  let $okPassword;
  /* Validando el correo */
  var checkingEmail = $email.on('input', function() {
    console.log($(this).val());
    const PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATTERNEMAIL.test($(this).val()));
    if ($('#email').val().length !== 0) {
      if (PATTERNEMAIL.test($(this).val()) === true) {
        $okEmail = true;
      } 
      if ($okEmail === true && $okPassword === true) {
        $('#register-button').removeAttr('disabled');
      } else {
        $('#register-button').attr('disabled', true);
      }
    } else {
      $('#register-button').attr('disabled', true);
    }
  });
  
  var checkingPassword = $password.on('input', function() {
    const PATTERNPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,}$/;
    console.log(PATTERNPASSWORD.test($(this).val()));
    if (PATTERNPASSWORD.test($(this).val()) === true) {
      $okPassword = true;
    }
    if ($okEmail === true && $okPassword === true) {
      $('#register-button').removeAttr('disabled');
    } else {
      $('#register-button').attr('disabled', true);
    }
  });
});


