let url_string = window.location.href;
let url = new URL(url_string);
let breedId = url.searchParams.get("breedId");

let breedPromise = superagent.get(`https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=${breedId}`);
breedPromise.then(function(res) {
    let dogInfo = res.body[0];
    dogInfo.breeds[0].weight = dogInfo.breeds[0].weight['imperial'];
    dogInfo.breeds[0].height = dogInfo.breeds[0].height['imperial'];
    dogInfo.breeds[0] = JSON.stringify(dogInfo.breeds[0]);
    let result = dogInfo.breeds[0];
    result = result.split(',').join('\n').split('"').join(' ');
    result = result.slice(1, result.length - 1);


    let container = document.getElementById('container');
    let paragraph = document.getElementById('paragraph');

    let img = document.createElement('img');
    img.src = dogInfo.url;

    let p = document.createElement('p');
    p.innerText = result;

    paragraph.appendChild(p);
    container.appendChild(img);
})