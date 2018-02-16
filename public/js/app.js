'use strict';

$(document).ready(function () {
  var $responseContainer = $('#response-container');
  var $infoContainer = $('#info-container');
  var $currentIndex = 0;
  var $listOfImages = $('.starwars-image');
  $listOfImages.on('click', function (event) {
    $infoContainer.innerHTML = '';
    event.preventDefault();
    $listOfImages.each(function (el) {
      if ($listOfImages[el] === event.target) {
        var thisImage = $listOfImages[el];
        var thisIndex = el;
        $currentIndex = thisIndex;
        var characterInfoRequest = new XMLHttpRequest();
        characterInfoRequest.open('GET', 'https://swapi.co/api/people/');
        characterInfoRequest.onload = bringInfo;
        characterInfoRequest.onerror = handleError;
        characterInfoRequest.send();
      }
    });
  });

  $('#special-button').one('click', function () {
    var characterInfoRequest = new XMLHttpRequest();
    characterInfoRequest.open('GET', 'https://swapi.co/api/people/');
    characterInfoRequest.onload = bringInfo;
    characterInfoRequest.onerror = handleError;
    characterInfoRequest.send();
  });

  function bringInfo(event) {
    // debugger;
    var data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.results);
    var response = data.results;
    var character = data.results[$currentIndex];
    var name = character.name;
    var gender = character.gender;
    var height = character.height;
    var birthYear = character.birth_year;
    // debugger;
    var $modal = '<div id="modal1" class="modal"><div class="modal-content"><h4>' + name + '</h4><ul><li><span>Gender: </span>' + gender + '</li><li><span>Height: </span>' + height + '</li><li><span>Birth Year: </span>' + birthYear + '</li></ul></div><div class="modal-footer">\n    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Cerrar</a></div</div>';
    // // return $container;
    // let $container = document.createElement('div');        
    // let $li = document.createElement('li');
    // $li.innerHTML = `<div><span>Name: </span><span>${name}</span></div><div><span>Gender: </span><span>${gender}</span></div><div><span>Height: </span><span>${height}</span></div><div><span>Birth Year: </span><span>${birthYear}</span></div>`;
    // $container.append($li);
    // $container.className = 'character-container col s12 m6 l3';
    // $infoContainer.append($container);
    $infoContainer.append($modal);
    return $('#modal1').modal();
  };

  function handleError() {
    console.log('Se ha presentado un error');
  };
});