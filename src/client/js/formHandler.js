function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://api.openweathermap.org/data/2.5/weather?q=91763&appid=750c257ad74cd91d9a1d54e0c739b736')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = "hey " + data.main.temp;
    })
}

export { handleSubmit }

