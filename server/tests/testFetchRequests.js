//for text data
fetch("http://localhost:3000/user/login",{method: 'POST'}).then(res=>res.text()).then(txt=>console.log(txt)).error(err=>console.log(err))
//for json data
fetch("http://localhost:3000/user/login",{method: 'POST'}).then(res=>res.json()).then(json=>console.log(json)).error(err=>console.log(err))