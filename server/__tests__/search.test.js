const supertest = require('supertest')
const app = require('../server') ;


describe("get api/search/",() =>{
    test("should res with a 400 status code",async () =>{
        const response = await supertest(app).post("/api/search/maher").send({
           
        })
        expect(response.statusCode).toBe(400)
    })

})