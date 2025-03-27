import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { createServer } from "../../src/server";
import { apiVersion, endPoint } from "../../src/utils/endPoint";
import HttpStatusCode from "../../src/utils/HttpStatusCode";

describe("Check Medications Service", () => {
  it("should return success status code", async () => {
    const response = await request(createServer()).get(
      `${apiVersion}${endPoint.medicationEndPoint.ALL_MEDICATIONS}`
    );
    expect(response.status).toBe(HttpStatusCode.OK);
  });
  it("should return not found status code", async () => {
    const response = await request(createServer()).get(
      `${apiVersion}${endPoint.prescriptionEndPoint.ALL_PRESCRIPTION}unkown`
    );
    expect(response.status).toBe(HttpStatusCode.NOT_FOUND);
  });
});
