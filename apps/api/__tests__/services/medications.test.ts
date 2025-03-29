import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { createServer } from "../../src/server";
import { apiVersion, endPoint } from "../../src/utils/endPoint";
import HttpStatusCode from "../../src/utils/HttpStatusCode";

const checkMedicationProperty = (medication: any) => {
  expect(medication).toHaveProperty("id");
  expect(medication).toHaveProperty("name");
  expect(medication).toHaveProperty("description");
  expect(medication).toHaveProperty("expirationDate");
  expect(medication).toHaveProperty("tag");
  expect(medication).toHaveProperty("prescription");
};

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
  it("should return the right schema for medication response", async () => {
    const response = await request(createServer()).get(
      `${apiVersion}${endPoint.medicationEndPoint.ALL_MEDICATIONS}`
    );
    const bodyResponse: [] = response?.body?.data;
    expect(response.status).toBe(HttpStatusCode.OK);
    expect(Array.isArray(bodyResponse)).toBe(true);
    bodyResponse.forEach((medication: any) => {
      checkMedicationProperty(medication);
    });
  });
});
