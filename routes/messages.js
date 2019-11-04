var express = require('express')
var path = require('path')
var router = express.Router()
var ws = require('ws')
var mysql = require('mysql2')

// create MySQL pool
var pool = mysql.createPool({
    host:'localhost',
    port:'33061',
    user:'admin',
    password:'123',
    database:'db_message',
    waitForConnections: true,
    connectionLimit:10,
    queueLimit:0
})

// API to get all message has been sent out 
router.get('/:sender_id', (req,res)=>{    
    pool.execute("SELECT * FROM messages WHERE sender_id = ?",[req.params.sender_id],function(err,rows){
        if(err){
            res.status(500).send({
                code:500,
                message:err
            })
            return false
        }else{
            let message = "No Data Available"
            if(rows.length > 0){
                message = "List messages of id " +req.params.sender_id
            }
            res.status(200).send({
                code:200,
                message,
                data: rows
            })
        }


    })
})


//ws client for sending message to client
const wsClient = new ws('ws://localhost:3333/ws')

// API to create new message, insert to database and broadcast to websocket client
router.post('/',(req,res)=>{
    const msg_text = [req.body.sender_id, req.body.recipient_id, req.body.msg_text]
    pool.execute("INSERT INTO messages (sender_id,recipient_id,msg_text) VALUES (?,?,?)",msg_text,function(err,results){
        if(err){
            res.status(500).send({
                code:500,
                message:err
            })
        }else{
            //get latest message detail
            pool.execute("SELECT * FROM messages WHERE id = ?",[results.insertId],function(err,resLast){
                // broadcast message to client in JSON format
                wsClient.send(JSON.stringify(resLast))
            })
            res.status(201).send({
                code:201,
                message:"Message Sent"
            })
        }
    })

})

module.exports = router