import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { createServer } from "../../src/server";
import { apiVersion, endPoint } from "../../src/utils/endPoint";
import HttpStatusCode from "../../src/utils/HttpStatusCode";

let medicationId: any = [];
let prescriptionId: any = [];

describe("Test the whole process", () => {
  it("should create a medication without prescription", async () => {
    const medicationPayload = {
      name: "medication_test",
      description: "this is a test",
      expirationDate: "2026-06-30T00:00:00.000Z",
      tag: "test tag",
      prescription: prescriptionId,
    };

    const response = await request(createServer())
      .post(`${apiVersion}${endPoint.medicationEndPoint.CREATE_MEDICATION}`)
      .send(medicationPayload)
      .expect(201);

    expect(response.body.success).toBe(true);

    medicationId = [{ id: response.body.data.id }];
  });

  it("should create a prescription with medication ID", async () => {
    const prescriptionPayload = {
      doctorName: "Dr. Test",
      description: "This is a test",
      medications: medicationId,
    };

    const response = await request(createServer())
      .post(`${apiVersion}${endPoint.prescriptionEndPoint.CREATE_PRESCRIPTION}`)
      .send(prescriptionPayload)
      .expect(201);

    expect(response.body.success).toBe(true);
  });

  it("should update the medication", async () => {
    const response = await request(createServer())
      .put(`${apiVersion}/medication/${medicationId[0].id}`)
      .send({
        description: "this is an update",
      })
      .expect(200);

    expect(response.body.success).toBe(true);
  });
});

describe("Test and checking middelaware of Medication", () => {
  it("should fail when we create the same medication twice", async () => {
    const medicationPayload = {
      name: "medication_test",
      description: "this is a test",
      expirationDate: "2026-06-30T00:00:00.000Z",
      tag: "test tag",
      prescription: prescriptionId,
    };
    const response = await request(createServer())
      .post(`${apiVersion}${endPoint.medicationEndPoint.CREATE_MEDICATION}`)
      .send(medicationPayload)
      .expect(404);
    const responseBody = response?.body;
    expect(responseBody.success).toBe(false);
  });

  it("should fail when append a false id prescription", async () => {
    const medicationPayload = {
      name: "medication_test",
      description: "this is a test",
      expirationDate: "2026-06-30T00:00:00.000Z",
      tag: "test tag",
      prescription: [
        {
          id: "false_and_random_id",
        },
      ],
    };
    medicationId = [{ id: "this_is_random_fake_id" }];
    const response = await request(createServer())
      .post(`${apiVersion}${endPoint.medicationEndPoint.CREATE_MEDICATION}`)
      .send(medicationPayload)
      .expect(404);
    const responseBody = response?.body;
    expect(responseBody.success).toBe(false);
  });

  it("should fail when append a false schema structure", async () => {
    const prescriptionPayload = {
      doctorName: "Dr. Test",
      description: "This is a test",
      medications: [],
    };
    const response = await request(createServer())
      .post(`${apiVersion}${endPoint.medicationEndPoint.CREATE_MEDICATION}`)
      .send(prescriptionPayload)
      .expect(404);
    const responseBody = response?.body;
    expect(responseBody.success).toBe(false);
  });
});

describe("Test and checking middelware of Prescription", () => {
  it("should success without medication id", async () => {
    const prescriptionPayload = {
      doctorName: "Dr. Test",
      description: "This is a test",
      medications: [],
    };
    const response = await request(createServer())
      .post(`${apiVersion}${endPoint.prescriptionEndPoint.CREATE_PRESCRIPTION}`)
      .send(prescriptionPayload)
      .expect(201);
    const responseBody = response?.body;
    expect(responseBody.success).toBe(true);
  });

  it("should fail with falsy medication id", async () => {
    const prescriptionPayload = {
      doctorName: "Dr. Test",
      description: "This is a test",
      medications: [
        {
          id: "false_random_id",
        },
      ],
    };
    const response = await request(createServer())
      .post(`${apiVersion}${endPoint.prescriptionEndPoint.CREATE_PRESCRIPTION}`)
      .send(prescriptionPayload)
      .expect(404);
    const responseBody = response?.body;
    expect(responseBody.success).toBe(false);
  });

  it("should fail with falsy schema", async () => {
    const medicationPayload = {
      name: "medication_test",
      description: "this is a test",
      expirationDate: "2026-06-30T00:00:00.000Z",
      tag: "test tag",
      prescription: [],
    };
    const response = await request(createServer())
      .post(`${apiVersion}${endPoint.prescriptionEndPoint.CREATE_PRESCRIPTION}`)
      .send(medicationPayload)
      .expect(400);
    const responseBody = response?.body;
    expect(responseBody.success).toBe(false);
  });
});
