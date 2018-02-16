$(document).ready(() => {
  const $responseContainer = $('#response-container');
  const $infoContainer = $('#info-container');
  let $currentIndex = 0;
  let $listOfImages = $('.starwars-image');
  $listOfImages.on('click', (event) => {
    $infoContainer.innerHTML = '';
    event.preventDefault();
    $listOfImages.each(function(el) {
      if ($listOfImages[el] === event.target) {
        let thisImage = $listOfImages[el];
        let thisIndex = el; 
        $currentIndex = thisIndex;
        var characterInfoRequest = new XMLHttpRequest();
        characterInfoRequest.open('GET', 'https://swapi.co/api/people/');
        characterInfoRequest.onload = bringInfo;
        characterInfoRequest.onerror = handleError;
        characterInfoRequest.send();
      }
    });
  });
  
  function bringInfo(event) {
    // debugger;
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.results);
    let response = data.results;
    let character = data.results[$currentIndex];
    const name = character.name;
    const gender = character.gender;
    const height = character.height;
    const birthYear = character.birth_year;
    // debugger;
    let $modal = `<div id="modal1" class="modal"><div class="modal-content"><h4>${name}</h4><ul><li><span>Gender: </span>${gender}</li><li><span>Height: </span>${height}</li><li><span>Birth Year: </span>${birthYear}</li></ul></div><div class="modal-footer">
    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Cerrar</a></div</div>`;       
    $infoContainer.append($modal);
    return $('#modal1').modal();
  };

  function handleError() {
    console.log('Se ha presentado un error');
  };
});