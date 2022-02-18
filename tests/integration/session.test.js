const { User } = require("../entities/User");
const request = require('supertest');

const app = require("../../src/server");

escribe('Authentication', () => {
    it('Receive JWT in Authentication', async () => {

        const user = await User();

        const response = await request(app)
            .post('/login')
            .send({
                email: user.email,
                senha: '12345'
            })

        expect(response.status).toBe(200);
    })
});