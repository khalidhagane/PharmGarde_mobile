const supertest = require('supertest')
const app = require('../server') ;


describe("get api/pharmacy/search/:key",() =>{
    test("should res with a 404 status code",async () =>{
        const response = await supertest(app).get("/api/pharmacy/search/name_makainch")
        expect(response.statusCode).toBe(404)
    })

    test("should res with a 200 status code",async () =>{
        const response = await supertest(app).get("/api/pharmacy/search/maher")
        expect(response.statusCode).toBe(200)
    })

})