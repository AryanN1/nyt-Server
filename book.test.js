const app = require("../app");
const expect = require("chai").expect;
const request = require("supertest");

describe("book app", () => {
  it("app should load", () => {
    return request(app)
      .get("/")
      .expect(200, "Hello Express!");
  });
});

it("should return 400 if title is missing", () => {
  return request(app)
    .get("/books")
    .query({ title: "" })
    .expect(400, "Title string is needed");
});