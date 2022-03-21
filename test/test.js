// here three thing we have to test
// 1st is home page router or get request
// second is post request
// test other router which return 404 not found error


var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:5000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should return home page",function(done){

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false);
      done();
    });
  });

  it('it should sum two numbers', (done) => {
    server
    .post('/add')
    .send({num1:3, num2:21})
    .expect("content-type", /json/)
    .expect(201)
    .end(function(err, res){
        res.status.should.equal(201);
        res.body.error.should.equal(false);
        res.body.data.should.equal(24);
        done();
    });
  });

  it('it should return 404 error', (done)=> {
      server
      .get('/other')
      .expect("content-type", /json/)
      .expect(404)
      .end(function(err, res) {
          res.status.should.equal(404);
          res.body.message.should.equal('Page not found!');
          res.body.error.should.equal(true);
          done();
      })
  })
});