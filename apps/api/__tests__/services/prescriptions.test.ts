import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { createServer } from "../../src/server";
import { apiVersion, endPoint } from "../../src/utils/endPoint";
import HttpStatusCode from "../../src/utils/HttpStatusCode";

let medicationsId: any = [];

const payload = {
  doctorName: "Dr. Test",
  description: "This is a test",
  medication: medicationsId,
};

const checkPrescriptionProperty = (prescription: any) => {
  expect(prescription).toHaveProperty("id");
  expect(prescription).toHaveProperty("createdAt");
  expect(prescription).toHaveProperty("description");
  expect(prescription).toHaveProperty("doctorName");
  expect(prescription).toHaveProperty("medications");
};

describe("Check Prescription Service", () => {
  it("should return success status code", async () => {
    const response = await request(createServer()).get(
      `${apiVersion}${endPoint.prescriptionEndPoint.ALL_PRESCRIPTION}`
    );
    expect(response.status).toBe(HttpStatusCode.OK);
  });
  it("should return not found status code", async () => {
    const response = await request(createServer()).get(
      `${apiVersion}${endPoint.prescriptionEndPoint.ALL_PRESCRIPTION}unkown`
    );
    expect(response.status).toBe(HttpStatusCode.NOT_FOUND);
  });

  it("should return the right schema for the response", async () => {
    const response = await request(createServer()).get(
      `${apiVersion}${endPoint.prescriptionEndPoint.ALL_PRESCRIPTION}`
    );
    const bodyResponse: [] = response?.body?.data;
    expect(response.status).toBe(HttpStatusCode.OK);
    expect(Array.isArray(bodyResponse)).toBe(true);
    bodyResponse.forEach((prescription: any) => {
      checkPrescriptionProperty(prescription);
    });
  });

  it.skip("should create a prescription and return status 201", async () => {
    const response = await request(createServer())
      .post(`${apiVersion}${endPoint.prescriptionEndPoint.CREATE_PRESCRIPTION}`)
      .send(payload)
      .expect(201);
    const responseBody = response?.body;
    expect(responseBody.success).toBe(true);
    checkPrescriptionProperty(responseBody.data);
  });
  it.skip("should fail when wrong id medicaments", async () => {
    medicationsId = [
      {
        id: "21963dbf-f971-wrong-id-d343a0bd7a32",
      },
    ];
    const response = await request(createServer())
      .post(`${apiVersion}${endPoint.prescriptionEndPoint.CREATE_PRESCRIPTION}`)
      .send(payload)
      .expect(201);
    const responseBody = response?.body;
    expect(responseBody.success).toBe(true);
    checkPrescriptionProperty(responseBody.data);
  });
});
