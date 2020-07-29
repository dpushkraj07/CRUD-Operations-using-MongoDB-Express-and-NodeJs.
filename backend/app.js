const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const mongoose =  require("mongoose")
const todo = require('./models/todo')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type,Accept")
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS,PUT")
    next();
});

mongoose.connect('mongodb+srv://Pushkraj_07:student123@cluster0.acw1m.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDb Connected!")
}).catch(()=>{
    console.log("Not connected!!")
})

app.get('/myTodos',(req, res, next) => {
    console.log("todo api called.");
    todo.find().then(docs => {
        res.status(200).json({
            message: "Todos fetch successfully",
            todo: docs
        });
    }).catch(error => {
        res.status(400).json({
            message: "Todos can not be fetched."
        });
    });
})

app.post('/todo',(req, res, next) => {
    const obj = new todo({
        title: req.body.title
    })
    console.log(obj);
    obj.save().then(() => {
        res.status(201).json({
            message: "Todo inserted successfull."
        })
    }).catch(()=> {
        res.status(400).json({
            message: "Something went wrong."
        })
    })
   
})

app.delete('/todo/:id',(req, res, next) => {
    todo.deleteOne({_id: req.params.id}).then(() => {
        res.status(201).json({
            message: "todo deleted successfully"
        })
    }).catch(()=> {
        res.status(400).json({
            message: "Something went wrong."
        })
    })
})

app.put('/todo/:id',(req, res, next) => {
    let obj = {
        title : req.body.title
    }
    todo.findOneAndUpdate({_id: req.params.id},{$set: obj}, (err, doc, result) => {
        res.status(201).json({
            message: "Todo updated successfully"
        })
    })
})
module.exports = app;