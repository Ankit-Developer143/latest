const express = require("express");
const objectId = require("mongoose").Types.ObjectId;
const Employee = require("../models/employee");
const router = express.Router();


router.get('/',(req,res) =>{
    Employee.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log('Error retrieving employee'+JSON.stringify(err));
        }
    })
})


router.post('/',(req,res) =>{
    var emp = new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    });
    emp.save((err,doc) =>{
        if(!err){
           res.send(doc)
        }else{
            console.log(err);
        }
    });
})

router.get('/:id',(req,res) =>{
    Employee.findById(req.params.id,(err,doc) =>{
        if(!err){
            res.send(doc)
        }else{
            res.send(err)
        }

    })
})

router.put('/:id',(req,res) =>{
    var emp = {
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary

    }
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{ new: true },(err,doc) =>{
        if(!err){
            res.send(doc)
        }else{
            res.send("Id Not Available"+err)
        }
    })
    router.delete('/:id',(req,res) =>{
        Employee.findByIdAndDelete(req.params.id,(err,doc) =>{
            if(!err){
                res.send(doc)
            }
            else{
                res.send("There Is an Error :" +err)
            }
        })
    })
})

module.exports = router;




