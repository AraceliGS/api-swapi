$(document).ready(() => {
  const $responseContainer = $('#response-container');
  $('#special-button').one('click', () => {
    const characterInfoRequest = new XMLHttpRequest();
    characterInfoRequest.open('GET', 'https://swapi.co/api/people/');
    characterInfoRequest.onload = bringInfo;
    characterInfoRequest.onerror = handleError;
    characterInfoRequest.send();
  });

  function bringInfo() {
    // debugger;
    const data = JSON.parse(this.responseText);
    console.log(data.results);
    const character = data.results[0];
    const name = character.name;
    const gender = character.gender;
    const height = character.height;
    const birthYear = character.birth_year;
    /* const homeplanet = JSON.parse(this.open('https://swapi.co/api/planets/1/', sendHomeworldInfo));   
    const sendHomeworldInfo = (request, response) => {
      const data = request.name;
      response.send(data);
    }; */

    let $container = document.createElement('div');        
    let $li = document.createElement('li');
    $li.innerHTML = `<div><span>Name: </span><span>${name}</span></div><div><span>Gender: </span><span>${gender}</span></div><div><span>Height: </span><span>${height}</span></div><div><span>Birth Year: </span><span>${birthYear}</span></div>`;
    $container.append($li);
    $container.className = 'character-container col s12 m6 l4';
    $responseContainer.append($container);
  };

  function handleError() {
    console.log('Se ha presentado un error');
  };
});
