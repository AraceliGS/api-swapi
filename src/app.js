$(document).ready(() => {
  const $responseContainer = $('#response-container');
  const $infoContainer = $('#info-container');
  let $modals = $('.modal');
  $modals.each((el) => {
    let modal = $modals[el].id;
    console.log(modal);
    $(`#${modal}`).modal();
    $modals[el].click(function() {
      console.log('Soy yo');
      const characterInfoRequest = new XMLHttpRequest();
      characterInfoRequest.open('GET', 'https://swapi.co/api/people/');
      characterInfoRequest.onload = bringInfo;
      characterInfoRequest.onerror = handleError;
      characterInfoRequest.send();
    });
  });
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
    console.log(data);
    console.log(data.results);
    let character = data.results.forEach(function(el) {
      const name = el.name;
      const gender = el.gender;
      const height = el.height;
      const birthYear = el.birth_year;
      // // debugger;
      // let $container = document.createElement('div');        
      // let $h4 = document.createElement('h4');
      // $h4.innerText = name;
      // $container.innerHTML = `${$h4}<div><span>Gender: </span><span>${gender}</span></div><div><span>Height: </span><span>${height}</span></div><div><span>Birth Year: </span><span>${birthYear}</span></div>`;
      // $container.append($('.modal-content'));
  
      // return $container;
      let $container = document.createElement('div');        
      let $li = document.createElement('li');
      $li.innerHTML = `<div><span>Name: </span><span>${name}</span></div><div><span>Gender: </span><span>${gender}</span></div><div><span>Height: </span><span>${height}</span></div><div><span>Birth Year: </span><span>${birthYear}</span></div>`;
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