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
    let character = data.results.forEach(function(el) {
      const name = el.name;
      const gender = el.gender;
      const height = el.height;
      const birthYear = el.birth_year;

      let $container = document.createElement('div');        
      let $li = document.createElement('li');
      $li.innerHTML = `<div><span>Name: </span><span>${name}</span></div><div><span>Gender: </span><span>${gender}</span></div><div><span>Height: </span><span>${height}</span></div><div><span>Birth Year: </span><span>${birthYear}</span></div>`;
      $container.append($li);
      $container.className = 'character-container col s12 m6 l3';
      $responseContainer.append($container);

      return $container;
    });
    /* const homeplanet = JSON.parse(this.open('https://swapi.co/api/planets/1/', sendHomeworldInfo));   
    const sendHomeworldInfo = (request, response) => {
      const data = request.name;
      response.send(data);
    }; */
  };

  function handleError() {
    console.log('Se ha presentado un error');
  };
});
