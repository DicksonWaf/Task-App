const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'taskmanager'
const ObjectID = mongodb.ObjectID
const id = new ObjectID()

MongoClient.connect(connectionURL, {useNewUrlParser:true},(error, client)=>{
    if(error){
        return console.log('unable to connecet')
    }
    const db = client.db(databaseName)
   /** db.collection('users').findOne({name:'Dickson'}, (error, user)=>{
        if(error){
            return conssole.log('Couldnt find user')
        }
        console.log(user)
    })
    db.collection('users').find({age:20}).count((error, count)=>{
        console.log(count)
    }) **/
    /**db.collection('users').insertMany([
        {name: "Alex",
        age:20
        },
        {
        name: "Dickson",
        age: 21
        }
    ], (error,result)=>{
        if(error){
            return console.log('Unable to insert documents')
        }
    })
    db.collection('tasks').insertMany([
        {description: "Watch netflix",
        complete:false
        },
        {
        description: "Build website",
        complete: true
        }
    ], (error,result)=>{
        if(error){
            return console.log('Unable to insert documents')
        }
    })**/
 const updatePromise = db.collection('users').updateOne({
     _id: new ObjectID('5dfd4c58a47f1b1988369b29')
 },{
     $set: {
         name:'Austin'
     }
 })
 updatePromise.then((result)=>{
    console.log(result)
 }).catch((error)=>{
    console.log(error)
 })
})