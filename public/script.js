fetch('/api/v1/pets').then(response => response.json()).then((data) => {
    for(let i =0; i < data.length; i++){
        const pTag = document.createElement('p');
        pTag.innerText = data[i];
        document.querySelector('body').append(pTag);
    }
})