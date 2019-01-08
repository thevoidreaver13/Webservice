const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const mongo_string = "mongodb://localhost:27017/Webservice"

router.get('/show', function (req, res) {
    //res.end("Hi, show api");
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection("courses")
            .find()
            .toArray()
            .then(courses => {
                const output = { result: "ok", message: courses }
                res.json(output);
            });
        db.close();
    });
})

router.post('/add', function (req, res) {
    //res.end("Hi, show api:" + req.body.name);
    mongoClient.connect(mongo_string, function (err, db) {

        const data = { name: req.body.name };
        db.collection('courses')
            .insertOne(data, (err, result) => {
                if (err) throw err;
                const response = { result: 'ok', message: result.result.n + "Inserted" };
                res.json(response);
            });
        db.close();
    });
})

router.delete('/delete/:name', function (req, res) {
    //res.end("Hi, delete api:" + req.params.name);
    const query = { name: req.params.name };
    mongoClient.connect(mongo_string, function (err, db) {
        db.collection("courses")
            .deleteMany(query, function (err, result) {
                const response = { result: 'ok', message: result.result.n + "Delete" };
                res.json(response);
            })
    })
})

module.exports = router;