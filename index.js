const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://dbUser:m4mm8d08TTheXDmL@cluster0-txf1p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.post('/addProduct', (req, res) => {
    const product = req.body;
    console.log(product);
    client.connect(err => {
        const collection = client.db("onlineStore").collection("products");
        // perform actions on the collection object
        collection.insertOne(product, (err, res) => {
            console.log("Successfully Inserted", res);
            //res.send(product);
        });
        client.close();
    });
})

// const ecomerceDBUser = "e-comerceDBUser";
// const pass = "VoGpnEu1fg030W3P";
// const dbUser = "dbUser";
// const pass2 = "m4mm8d08TTheXDmL";
// const pass1 = "V8PAwNXVUxB7zV2d"
// const uri = "mongodb+srv://dbUser:m4mm8d08TTheXDmL@cluster0-txf1p.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

// const users = ["Rajib", 'Maruf', 'Toma', 'Maya', 'Bushra'];
// Database connection 

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dbUser:m4mm8d08TTheXDmL@cluster0-qlxdc.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("onlineStore").collection("products");
//     // perform actions on the collection object
//     collection.insertOne({
//         name: "Laptop",
//         price: 2000,
//         stock: 300
//     }, (err, res) => {
//         console.log("Successfully Inserted");
//     })
//     client.close();
// });


app.get('/', (req, res) => {
    const fruit = {
        name: 'apple',
        price: 222
    }
    res.send(fruit);
});

app.get('/fruits/apple', (req, res) => {
    res.send({fruit: 'appple', quantity: 200, price: 230});
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    //console.log(req.query.sort);
    const name = users[id];
    res.send({id, name});
});

// app.post('/addProduct', (req, res) => {
//     const product = req.body;
//     console.log(product);
//     client.connect(err => {
//         const collection = client.db("onlineStore").collection("products");
//         // perform actions on the collection object
//         collection.insertOne(product, (err, res) => {
//             console.log("Successfully Inserted", res);
//             //res.send(product);
//         });
//         client.close();
//     });
// })



app.listen(4000, () => console.log('Listening to port 4000'));