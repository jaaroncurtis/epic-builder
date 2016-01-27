var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://"+(process.env.IP || "0.0.0.0")+":27017/test";

exports.initialize = function(router){
    console.log("w/in controllers.js");
    
    router.get('/', function(req, httpr) {
        MongoClient.connect(uri, function(err, db) {
          if(err) {
            httpr.json({ message: 'error connecting', err: err });
            return;
          }
          var collection = db.collection('api-test');
          collection.find().toArray(function(err, items) {
              debugger;
            httpr.json({ message: 'items found', body: items });
          });
        });
    });
    router.post('/', function(req, httpr){
        MongoClient.connect(uri, function(err, db) {
          if(err) {
            httpr.json({ message: 'error connecting', err: err });
            return;
          }
          var collection = db.collection('api-test');
          collection.insert(req.body, {w:1}, function(err, res){
            if(err){
                httpr.json({ message: 'error inserting', err: err });
                return;
            }
            httpr.json({ message: 'hooray! welcome to our api!', body:req.body, result: res });
          });
        });
        
        
    });
};