const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app')

const {expect} = chai

chai.use(chaiHttp)
chai.should()
describe("Test Messages REST API",function(){
    describe("GET / ",function(){
        it('Should return 200 and return messages : "Message API"',function(done){
            chai
                .request(app)
                .get('/')
                .end(function(err,res){
                    expect(res.status).equal(200)
                    expect(res.body.message).equal("Message API")
                    return err?done(err):done()
                })
        })
    })

    describe("GET /messages/:sender_id",function(){
        it('Should return all messages sent by specific sender_id',function(done){
            const sender_id = 20
            chai.request(app)
                .get('/messages/'+sender_id)
                .end(function(err,res){
                    res.body.should.be.a('object')
                    expect(res.status).equal(200)
                    return err?done(err):done()
                })
        })
    })

    describe("POST /messages", function(){
        it('Should send messages from request', function(done){
            const msg_text = {
                sender_id : '10',
                recipient_id : '20',
                msg_text : "This is message text from testing"
            }
            chai.request(app)
                .post('/messages')
                .send(msg_text)
                .end(function(err,res){
                    expect(res.status).equal(201)
                    expect(res.body.message).equal("Message Sent")
                    return err?done(err):done()
                })
        })
    })

})
