/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-curly-spacing */
const request = require("supertest");

describe("Server", () => {
  test("It should make a GET request", async () => {
    await request('http://localhost:3004')
      .get('/api/items')
      .expect(200);
  });
});
