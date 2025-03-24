import { beforeAll, afterAll, describe, it, expect } from "@jest/globals";
import request from "supertest";
import { createServer } from "../src/server"; // Adjust the path based on your project structure
import { endPoint } from "../src/utils/endPoint";

describe("Health Check", () => {
  it("should return 200 for health check", async () => {
    const response = await request(createServer()).get(
      endPoint.otherEndPoint.CHECK_STATUS_TEST
    );
    expect(response.status).toBe(200);
    // expect(response.body).toEqual({ status: "OK" });
  });
});
