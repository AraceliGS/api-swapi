'use strict';

$(document).ready(function () {
  var $containerSwapi = $('.container-swapi');
  $containerSwapi.append('<div class="row margin-top-row"/>');

  $.ajax({
    url: 'https://swapi.co/api/people/?page=1&format=json',
    contentType: 'application/json',
    method: 'GET',
    success: function success(response) {
      console.log(response.results);

      $.each(response.results, function (i, obj) {
        $containerSwapi.find('.row').append('<div class="container-image col s6 col m2"/>');
        $containerSwapi.find('.container-image').eq(i).append('<img src="#" class="responsive-img modal-trigger" id="#myModal"/>');
        $containerSwapi.find('.container-image').eq(i).append('<p class="img-name center-align"/>');
        $containerSwapi.find('img').eq(i).attr('src', 'https://starwars-visualguide.com/assets/img/characters/' + (i + 1) + '.jpg');
        /* $containerSwapi.find('img').eq(i).attr('data-name', response.results[i].name);
        $containerSwapi.find('img').eq(i).attr('data-gender', response.results[i].gender); 
        $containerSwapi.find('img').eq(i).attr('data-height',response.results[i].height);
        $containerSwapi.find('img').eq(i).attr('data-birth',response.results[i].birth_year);*/
        $containerSwapi.find('p').eq(i).text(response.results[i].name);
      });
    },
    fail: function fail(request) {
      if (request) {
        alert(request.message);
      }
    }
  });

  // Modales
  /* $containerSwapi.on('click', '.responsive-img', function() {
    }); */
});