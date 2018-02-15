'use strict';

$(document).ready(function () {
  var ul = $('#response-container');
  $('#special-button').one('click', function () {
    var characterInfoRequest = new XMLHttpRequest();
    characterInfoRequest.open('GET', 'https://swapi.co/api/people/');
    characterInfoRequest.onload = bringInfo;
    characterInfoRequest.onerror = handleError;
    characterInfoRequest.send();
  });

  function bringInfo() {
    debugger;
    var data = JSON.parse(this.responseText);
    console.log(data.results);
    var character = data.results[0];
    var name = character.name;
    var gender = character.gender;
    var height = character.height;
    var birthYear = character.birth_year;
    /* const homeplanet = JSON.parse(this.open('https://swapi.co/api/planets/1/', sendHomeworldInfo));   
    const sendHomeworldInfo = (request, response) => {
      const data = request.name;
      response.send(data);
    }; */

    // let $container = '<div class="col s12 m6 l4"></div>';          
    var $li = '<li></li>';
    $li.innerText = name;
    $container.append($li);
  };

  function handleError() {
    console.log('Se ha presentado un error');
  };
  /* characterInfoRequest.get(`https://swapi.co/api/people/1/`, sendCharacterInfo);
  const sendCharacterInfo = () => {
  */
});
/* window.on('load', (event) => {
    event.preventDefault();
    function getInfo() {

    }
  });
});*/