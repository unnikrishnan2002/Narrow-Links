let chai = require("chai")

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../src/index");

chai.should();

chai.use(chaiHttp);

describe("SMS", () => {
    describe("GET /api/sms", () => {
        it("should return 200 OK", (done) => {
        chai
            .request(server)
            .get("/api/sms")
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            done();
            });
        });
    })
    
    describe("POST /api/sms/twiliosms", () => {
        it("should return 200 OK", (done) => {
        chai
            .request(server)
            .post("/api/sms/twiliosms")
            .send({
                phoneNumber: "1234567890",
                data: "https://www.google.com"
            })
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            done();
            });
        });  
    
    })
})



