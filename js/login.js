//window.document.onload() = function () {

var config = {
    headers: {
        "Accept": "application/json"
        , 'Content-Type': 'application/json'
    }
};

const btnLogin = document.querySelector("#btn-login");

btnLogin.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('ei');
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    const envio = {
        "email": email,
        "senha": senha
    }

    data = JSON.stringify(envio);

    axios.post("http://localhost:8080/service/rest/auth/jwt", data, config)
        .then(function (response) {
            localStorage.setItem('token', 'Bearer ' + response.data.token);
            location.href="inicio.html";
        })
        .catch(function (error) {
            console.log(error.response);
            alert("Email ou Senha incorretos");
        });
});