const request = require('supertest');
const { server, app} = require('../index');
const mongoose = require('mongoose');

describe('GET api/tasks', () => {
    it('it should return 200 ok', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toEqual(200);
    });

     it('it should return Object ok', async () => {
        const res = await request(app).get('/api/tasks');
        expect(typeof res.body).toBe('object');
        expect(Array.isArray(res.body)).toBe(true);
    });

  });

  afterAll(async() => {
    await mongoose.connection.close();
    await server.close();
  });