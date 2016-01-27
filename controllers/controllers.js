exports.initialize = function(router){
    console.log("w/in controllers.js");
    
    router.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
    });
    router.post('/', function(req, res){
        res.json({ message: 'hooray! welcome to our api!', body:req.body });
    });
};