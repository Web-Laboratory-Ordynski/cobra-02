let submit = document.getElementById('submit');
let input = document.getElementById('breed');
let dogs;

let dogPromise = superagent.get("https://api.thedogapi.com/v1/breeds");
dogPromise.then(function(res) {
    dogs = res.body;
    let breedData = document.getElementById('breed_data');
    let docFrag = document.createDocumentFragment();
    dogs.forEach(elem => {
        let option = document.createElement('option');
        option.value = elem.name;
        docFrag.appendChild(option);
    })
    breedData.appendChild(docFrag);
})

submit.addEventListener('click', function(event) {
    event.preventDefault();
    let neededDog = document.getElementById("breed").value;
    let apiPromise = superagent.get("https://api.thedogapi.com/v1/breeds");
    apiPromise
        .then(function(res) {
            let dogsString = res.body;
            let dogId;
            dogsString.forEach(element => {
                if (element['name'].toLowerCase() === neededDog.toLowerCase()) {
                    dogId = element['id'];
                }
            });
            return dogId;
        })
        .then(function(dogId) {
            let breedPromise = superagent.get(`https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=${dogId}`);
            breedPromise
                .then(function(res) {
                    let result = res.body[0];
                    let container = document.getElementById('container');
                    let documentFragment = document.createDocumentFragment();

                    document.getElementById("breed").value = '';
                    container.innerHTML = '';

                    let p = document.createElement('p');
                    p.innerText = `Name : ${result.breeds[0].name} \n
                    Weight : ${result.breeds[0].weight.imperial} \n Height : ${result.breeds[0].height.imperial} \n 
                    Life span : ${result.breeds[0].life_span} \n 
                    Bred for : ${result.breeds[0].bred_for} \n Temperament : ${result.breeds[0].temperament}`;
                    documentFragment.appendChild(p);

                    let img = document.createElement('img');
                    img.src = result.url;
                    documentFragment.appendChild(img);

                    container.appendChild(documentFragment);
                })
        })
})