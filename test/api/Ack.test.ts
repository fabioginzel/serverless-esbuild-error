import supertest from 'supertest';
import app from '../../src/interface/http/app';

const request = supertest(app);

describe('ack', () => {
  it('retorna ack corretamente', async () => {
    const response = await request.get('/ack');

    expect(response.status).toBe(200);
    expect(response.body.ack).toEqual(expect.any(Number));
  });
});
