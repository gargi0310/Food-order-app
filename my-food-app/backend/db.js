const mongoose = require('mongoose');

const mongoURI = "mongodb://chaivilla:gargi0310@ac-4lebtuf-shard-00-00.kfwqqyi.mongodb.net:27017,ac-4lebtuf-shard-00-01.kfwqqyi.mongodb.net:27017,ac-4lebtuf-shard-00-02.kfwqqyi.mongodb.net:27017/chaivillamern?ssl=true&replicaSet=atlas-dm45ss-shard-0&authSource=admin&retryWrites=true&w=majority"

const mongoDB =async() =>{
    
    try{
    mongoose.set('strictQuery', false)
    await mongoose.connect(mongoURI)
    console.log('Mongo connected!')
    const fetched_data = await mongoose.connection.db.collection("food_item");
    // fetched_data.find({}).toArray( function(err, data){
    //     if(err) console.log(err);
    //     else console.log(data);
    // })
    let data = await fetched_data.find({}).toArray()
    // console.log(data);
    }
    catch(error){
        console.log(error)
    }
}

module.exports = mongoDB;

// await mongoose.connect(mongoURI, { useNewParser:true }, async(err, result)=>{
//     if(err) console.log('---', err)

//     else{
//         console.log("Connected");
//         const fetched_data = await mongoose.connection.db.collection("food_item");
//     }
// });