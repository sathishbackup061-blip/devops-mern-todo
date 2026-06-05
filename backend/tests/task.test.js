const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../index");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET api/tasks", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/tasks");

    expect(res.statusCode).toBe(200);
  });

  it("should return an array of tasks", async () => {
    const res = await request(app).get("/api/tasks");

    expect(Array.isArray(res.body)).toBe(true);
  });
});