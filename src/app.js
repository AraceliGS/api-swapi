$(document).ready(() => {
  const $containerSwapi = $('.container-swapi');
  $containerSwapi.append('<div class="row margin-top-row"/>');
  let $modalTitle = $('.modal-title');
  let $modalBody = $('.modal-body');
  $('#modal1').modal();
  $.ajax({
    url: 'https://swapi.co/api/people/?page=1&format=json',
    contentType: 'application/json',
    method: 'GET',
    success: function(response) {
      console.log(response.results);

      $.each(response.results, function(i, obj) {
        $containerSwapi.find('.row').append('<div class="container-image col s6 col m2"/>');
        $containerSwapi.find('.container-image').eq(i).append('<a href="#modal1" class="image-anchor modal-trigger"></a>');
        $containerSwapi.find('.image-anchor').eq(i).append('<img src="#" class="responsive-img"/>');
        $containerSwapi.find('.container-image').eq(i).append('<p class="img-name center-align"/>');
        $containerSwapi.find('img').eq(i).attr('src', 'https://starwars-visualguide.com/assets/img/characters/' + (i + 1) + '.jpg');
        $containerSwapi.find('img').eq(i).attr('data-name', response.results[i].name);
        $containerSwapi.find('img').eq(i).attr('data-gender', response.results[i].gender); 
        $containerSwapi.find('img').eq(i).attr('data-height', response.results[i].height);
        $containerSwapi.find('img').eq(i).attr('data-birth', response.results[i].birth_year);
        $containerSwapi.find('p').eq(i).text(response.results[i].name);
      });
    },
    fail: function(request) {
      if (request) {
        alert(request.message);
      }
    }
  });

  // Modales
  $containerSwapi.on('click', '.responsive-img', function() {
    $modalTitle.text('Know more about' + ' ' + $(this)[0].dataset.name);
    $modalTitle.addClass('center-align');
    $modalBody.empty().append('<div class="container-image-modal center-align"/>');
    $modalBody.find('.container-image-modal').empty().append('<img class="img-responsive">');
    $modalBody.find('img').attr('src', $(this)[0].src);
    $modalBody.append('<table class="data-character"></table>');
    $modalBody.find('.data-character').append(`<tr><th class="th-1 center-align">Name</th><th class="th-2 center-align">${$(this)[0].dataset.name}</th></tr>`);
    $modalBody.find('.data-character').append(`<tr><th class="th-1 center-align">Gender</th><th class="th-2 center-align">${$(this)[0].dataset.gender}</th><tr>`);
    $modalBody.find('.data-character').append(`<tr><th class="th-1 center-align">Height</th><th class="th-2 center-align">${$(this)[0].dataset.height}</th><tr>`);
    $modalBody.find('.data-character').append(`<tr><th class="th-1 center-align">Birth</th><th class="th-2 center-align">${$(this)[0].dataset.birth}</th><tr>`);

    console.log($(this)[0]);
    console.log($(this)[0].src); 
    console.log($(this)[0].dataset.name);
    console.log($(this)[0].dataset.gender);
    console.log($(this)[0].dataset.height);
    console.log($(this)[0].dataset.birth);  
  });
});