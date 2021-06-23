const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudDB1',(err) =>{
    if(!err){
        console.log("Connection Succeeded...");
    }else{
        console.log("error in DB connection "+JSON.stringify(err,undefined,2));
    }
});
module.exports  = mongoose;
