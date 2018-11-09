function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if (window.location.href.indexOf(parameter) > -1) {
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}

window.onload = function () {
    var mytext = getUrlParam('id', 'Empty');
    console.log(mytext);
    localStorage.setItem('idChamado', mytext);
}

let issues;
let field;
let status;

var chamadoId = localStorage.getItem('idChamado');
var token = parseJwt(localStorage.getItem('token'));

let config = {
    headers: { 'Authorization': token.tokenBRQ }
};

const tabela = document.getElementById('tableBody');

axios.get("http://jira-homolog.brq.com/rest/api/2/issue/" + chamadoId, config)
    .then(function (response) {
        let issues = response.data;
        let key = response.data.key;
        let description = response.data.fields.description;
        
        //console.log(issues);
        console.log(key);
        console.log(description);

    })
    .catch(function (error) {
        console.log(error);
    });