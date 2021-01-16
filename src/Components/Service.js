const getcomments = () => {
    fetch("http://localhost:4200/RegisteredUsers").then(
        result => {
            console.log(result.json().then(finalResult => {
                console.log(finalResult);
                return finalResult;
            }).catch(error => { console.log(error) }))
        }
    ).catch(error => { console.log(error) })
}

const savecomments = (object) => {
    fetch("http://localhost:4200/RegisteredUsers", {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'content-type': 'application/json'
        }
    }).then((result) => { result.json() }).then((data) => console.log(data))
}


export { getcomments, savecomments }