var MongoClient=require('mongodb').MongoClient;
var url="mongodb+srv://Hamid_Hussain:hamid50028@cluster0.bzz4w.mongodb.net/mydb?retryWrites=true&w=majority";
var client=new MongoClient(url,{useUnifiedTopology:true});

client.connect(function(err,db){
	if(err) throw err;
	var dbo=db.db("mydb");
	dbo.collection("products").find().toArray(function(err,result){
		if (err) throw err;
		console.log(result);
		db.close();
	});
});

