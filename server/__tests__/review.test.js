const app = require('../server')
const request = require('supertest')



describe(" /Review"  , () => {

    // TEST POST REVIEW : (200 => All Good !)
    describe('POST Review', () => {
        it('Should Respond with a 200 statusCode', async () => {
            const res = await request(app)
            .post('/api/review/63cfe522af13b2f222c0aad7')
            .send({
                review: 2
            })
            expect(res.statusCode).toBe(200)
        })
    });
    // TEST POST REVIEW id not found in db : (404 => Null id )
    describe('POST Review', () => {
        it('Should Respond with a 404 statusCode Because the id doesnt exist in db ', async () => {
            const res = await request(app)
            .post(`/api/review/${null}`)
            .send({
                review: 2
            })
            expect(res.statusCode).toBe(404)
        })
    });
    // TEST POST REVIEW : (400 => Value is Null )
    describe('POST Review', () => {
        it('Should Respond with a 400 statusCode Because the value is null ', async () => {
            const res = await request(app)
            .post('/api/review/63cfe522af13b2f222c0aad7')
            .send({
                review: null
            })
            expect(res.statusCode).toBe(400)
        })
    });
    // TEST POST REVIEW : (400 => String data should be number)
    describe('POST Review', () => {
        it('Should Respond with a 400 statusCode Because the value is String  ', async () => {
            const res = await request(app)
            .post('/api/review/63cfe522af13b2f222c0aad7')
            .send({
                review: "sjdkqsd"
            })
            expect(res.statusCode).toBe(400)
        })
    });

    // TEST GET REVIEW (200 => all Good !) : 
    describe('Get Review', () => {
        it('Should Respond with a 200 statusCode', async () => {
            const res = await request(app)
            .get('/api/review/63cfe522af13b2f222c0aad7')
            expect(res.statusCode).toBe(200)
        })
    });
    // TEST GET REVIEW ( 404 => Null ID): 
    describe('Get Review', () => {
        it('Should Respond with a 404 statusCode bcs the id is null', async () => {
            const res = await request(app)
            .get(`/api/review/${null}`)
            expect(res.statusCode).toBe(404)
        })
    });
    // TEST GET REVIEW (404 => Empty ID ): 
    describe('Get Review', () => {
        it('Should Respond with a 404 statusCode bcs the id is empty', async () => {
            const res = await request(app)
            .get('/api/review/')
            expect(res.statusCode).toBe(404)
        })
    });
    // TEST GET REVIEW ( 404 => Random ID ): 
    describe('Get Review', () => {
        it('Should Respond with a 404 statusCode bcs the id is empty', async () => {
            const res = await request(app)
            .get('/api/review/6ksqvdisqd667')
            expect(res.statusCode).toBe(404)
        })
    });
})


