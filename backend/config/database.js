const mongoose = require('mongoose');
exports.dbConn= async ()=>{
    try{
        const dbURL= "---------------- Paste your MongoDB collection URL here ----------------------"
        await mongoose.connect(dbURL,{useNewURLParser: true, useUnifiedTopology:true})
        console.log("************** Database is connected **************")
    }
    catch{(err)=>console.log(err)};
}
