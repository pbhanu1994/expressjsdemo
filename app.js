const express = require('express')
const app = express()

// app.get('/', (req, res) => res.send('Hello World'))

// app.post('/', function (req, res) {
//     res.send('Got a POST request')
//   })

// app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user')
//   })

// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
//   })

// app.get('/user/:ids', function(req, res) {
//     res.send('user ' + req.params.ids);
//   });

// exports.helloWorld = functions.https.onRequest((req, res) => {
//     res.send({
//         message: "Hello World!"
//     })
// });



app.use(function (req, res, next) {
    let key = req.query.key;

    if (key === 'rmit'){
        next()
    } else if (key === 'poorna') {
        next()
    }
    else {
        res.send({
            message: "unauthorized"
        })
    }
});

app.get('/endpoint', function (req, res) {
    res.send('root')
  })

app.listen(3000, () => console.log('Listening on port 3000..blah'))