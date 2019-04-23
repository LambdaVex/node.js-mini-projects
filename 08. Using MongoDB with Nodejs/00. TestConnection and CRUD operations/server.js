
const MongoClient   = require('mongodb').MongoClient;

const client = new MongoClient('mongodb://localhost:27017');

client.connect((err) => {

    if (err) {

        console.log("There has been an error");

    } else{
		console.log ("Connected succesfully!");
	}
	
	const db = client.db('test'); // if not exist it will be created 
	
	/* You can do this: db.collection('myCollection') */

	// you can use insertmany
	db.collection('myCollection').insertOne({name: 'ali', age: 28}, (err, result)=>{
		//result.ops.length==1; // should be
		
		/* This bit is inside the top bit to ensure that ali will be returned (Async) */
		db.collection('myCollection').find({}).toArray((err, result)=>{
			// aLL DOCS
		});
	});
	
	/* You can use unset to remove, you can use update Many*/
	db.collection('myCollection').updateOne({name: 'ali'},{$set : {age:42}}, (err, result)=>{
		
	});
	db.collection('myCollection').delete({name: 'ali'}, (err, result)=>{
		
	});
	
	client.close();
});

