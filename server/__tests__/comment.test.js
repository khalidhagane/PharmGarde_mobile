const app = require('../server')
const request = require('supertest')

describe('/Comment', () => {
    // Test POST COMMENT : (200 => All good !)
    describe('POST COMMENT', () => { 
        it('Should Respond with a 200 statusCode' ,async () => {
            const res = await request(app)
            .post('/api/comment/63cfe522af13b2f222c0aad7')
            .send({
                comment: "nice One"
            })
            expect(res.statusCode).toBe(200)
        })
     })
     // Test POST COMMENT id not found in db  : (404 => null id)
    describe('POST COMMENT', () => { 
        it('Should Respond with a 404 statusCode' ,async () => {
            const res = await request(app)
            .post(`/api/comment/${null}`)
            .send({
                comment: "nice One"
            })
            expect(res.statusCode).toBe(404)
        })
     })
     // Test POST COMMENT null data   : (400 => null data)
    describe('POST COMMENT', () => { 
        it('Should Respond with a 400 statusCode' ,async () => {
            const res = await request(app)
            .post(`/api/comment/63cfe522af13b2f222c0aad7`)
            .send({
                comment: null
            })
            expect(res.statusCode).toBe(400)
        })
     })

    // Test GET COMMENT  : ( 200 => give a id of Pharmacy)
    describe('GET COMMENT BY ID PHARMACY', () => { 
        it('Should Respond with a 200 statusCode' ,async () => {
            const res = await request(app)
            .get(`/api/comment/63cfe522af13b2f222c0aad7`)
            expect(res.statusCode).toBe(200)
        })
     })
     // Test GET COMMENT  : (404 => null id )
    describe('GET COMMENT BY ID PHARMACY', () => { 
        it('Should Respond with a 404 statusCode' ,async () => {
            const res = await request(app)
            .get(`/api/comment/${null}`)
            expect(res.statusCode).toBe(404)
        })
     })
     // Test GET COMMENT  : (404 => random id does not exist )
    describe('GET COMMENT BY ID PHARMACY', () => { 
        it('Should Respond with a 404 statusCode' ,async () => {
            const res = await request(app)
            .get(`/api/comment/78osqsqd78kjs8`)
            expect(res.statusCode).toBe(404)
        })
     })
     // Test GET COMMENT  : (404 => empty id  )
    describe('GET COMMENT BY ID PHARMACY', () => { 
        it('Should Respond with a 404 statusCode' ,async () => {
            const res = await request(app)
            .get(`/api/comment/`)
            expect(res.statusCode).toBe(404)
        })
     })
    // Test DELETE COMMENT  : (404 => empty id  )
    describe('DELETE COMMENT BY ID PHARMACY', () => { 
        it('Should Respond with a 404 statusCode' ,async () => {
            const res = await request(app)
            .delete(`/api/comment/`)
            expect(res.statusCode).toBe(404)
        })
     })
    // Test DELETE COMMENT  : (404 => random id  )
    describe('DELETE COMMENT BY ID PHARMACY', () => { 
        it('Should Respond with a 404 statusCode' ,async () => {
            const res = await request(app)
            .delete(`/api/comment/76kvhvdy87jhvc7`)
            expect(res.statusCode).toBe(404)
        })
     })
     // Test DELETE COMMENT  : (404 => null id  )
    describe('DELETE COMMENT BY ID PHARMACY', () => { 
        it('Should Respond with a 404 statusCode' ,async () => {
            const res = await request(app)
            .delete(`/api/comment/${null}`)
            expect(res.statusCode).toBe(404)
        })
     })
     // Test DELETE COMMENT  : (400 => All good !  )
    describe('DELETE COMMENT BY ID PHARMACY', () => { 
        it('Should Respond with a 400 statusCode' ,async () => {
            const res = await request(app)
            .delete(`/api/comment/63cfe522af13b2f222c0aad7`)
            expect(res.statusCode).toBe(400)
        })
     })

});
