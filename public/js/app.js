'use strict';

$(document).ready(function () {
  var $responseContainer = $('#response-container');
  var $infoContainer = $('#info-container');
  var $modals = $('.modal');
  $modals.each(function (el) {
    var modal = $modals[el].id;
    console.log(modal);
    $('#' + modal).modal();
    $modals[el].click(function () {
      console.log('Soy yo');
      var characterInfoRequest = new XMLHttpRequest();
      characterInfoRequest.open('GET', 'https://swapi.co/api/people/');
      characterInfoRequest.onload = bringInfo;
      characterInfoRequest.onerror = handleError;
      characterInfoRequest.send();
    });
  });
  $('#special-button').one('click', function () {
    var characterInfoRequest = new XMLHttpRequest();
    characterInfoRequest.open('GET', 'https://swapi.co/api/people/');
    characterInfoRequest.onload = bringInfo;
    characterInfoRequest.onerror = handleError;
    characterInfoRequest.send();
  });

  function bringInfo() {
    // debugger;
    var data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.results);
    var character = data.results.forEach(function (el) {
      var name = el.name;
      var gender = el.gender;
      var height = el.height;
      var birthYear = el.birth_year;
      // // debugger;
      // let $container = document.createElement('div');        
      // let $h4 = document.createElement('h4');
      // $h4.innerText = name;
      // $container.innerHTML = `${$h4}<div><span>Gender: </span><span>${gender}</span></div><div><span>Height: </span><span>${height}</span></div><div><span>Birth Year: </span><span>${birthYear}</span></div>`;
      // $container.append($('.modal-content'));

      // return $container;
      var $container = document.createElement('div');
      var $li = document.createElement('li');
      $li.innerHTML = '<div><span>Name: </span><span>' + name + '</span></div><div><span>Gender: </span><span>' + gender + '</span></div><div><span>Height: </span><span>' + height + '</span></div><div><span>Birth Year: </span><span>' + birthYear + '</span></div>';
      $container.append($li);
      $container.className = 'character-container col s12 m6 l3';
      $infoContainer.append($container);

      return $container;
    });
  };

  // function moreInfo(data) {

  // };

  function handleError() {
    console.log('Se ha presentado un error');
  };
});