const axios = require('axios');

axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
  })
    .then(function (response) {
        let temp = []
        response.data.forEach(element => {
        temp.push(element.name)
      });
      console.log(temp);
    })
    .catch(function(err){
        console.log(err.message);
    })