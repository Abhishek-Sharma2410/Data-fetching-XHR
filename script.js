let apiFunc = () => {
    let apiHtml = document.getElementById('api').value;
    let apiname = "https://api.github.com/users/" + apiHtml;
    console.log(apiname);
    let xhr = new XMLHttpRequest();
    let data;
    xhr.open('GET', apiname);
    xhr.onload = () => {
        if(xhr.status >= 200 || xhr.status < 300){
            data = JSON.parse(xhr.responseText);
            let name = document.getElementById("name");
            let followers = document.getElementById("followers");
            console.log(data);
            name.innerHTML = data.name;
            followers.innerHTML = data.followers;
        }
        else{
            console.log("failed to fetch data");
        }
    }

    xhr.onerror = () => {
        console.log("Failed to fetch response");
    }

    xhr.send();
}
let button = document.getElementById('getData');
button.addEventListener('click', apiFunc);