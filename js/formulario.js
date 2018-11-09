var config = {
    headers: {
        'Authorization': 'Basic YWRtaW5TZW5haTphZG1pblNlbmFpQDEyMw=='
        , 'Content-Type': 'application/json'
        , 'X-Atlassian-Token': 'nocheck'
        , 'Access-Control-Allow-Origin': '*'
    }
};

function cadastrar() {

    var summary = document.getElementById('summary').value;
    var description = document.getElementById('description').value;

    const data = {
        "fields": {
            "project":
            {
                "key": "CDA"
            },
            "summary": summary,
            "description": description,
            "issueType": {
                "name": "Servidor"
            }
        }
    }

    // console.log(JSON.stringify(data));

    axios.post("http://jira-homolog.brq.com/rest/api/2/issue", JSON.stringify(data), config)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}