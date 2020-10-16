let apiPromise = superagent.get("https://api.thedogapi.com/v1/breeds");
apiPromise
    .then(function(res) {
        console.log(res);
        let dogsString = res.body
            .map(function(dog) {
                return dog;
            }).reduce(function(acc, currName) {
                let repeatedNames = acc.filter(function(breed) {
                    return breed.name.charAt(0) === currName.name.charAt(0);
                })

                if (repeatedNames.length >= 2) {
                    return acc
                } else {
                    return acc.concat(currName)
                }
            }, []);


        let list = document.getElementById('list');
        let dogsLength = dogsString.length;
        let documentFragment = document.createDocumentFragment();
        for (let i = 0; i < dogsLength; i++) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = `breed.html?breedId=${dogsString[i].id}`;
            a.text = dogsString[i].name;
            li.appendChild(a);
            documentFragment.appendChild(li);
        }
        list.appendChild(documentFragment);
    });