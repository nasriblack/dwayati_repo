import { z } from "zod";

export const prescriptionSchema = z.object({
  doctorName: z
    .string()
    .min(1, { message: "the doctor name must be at least 1 characters long" })
    .max(30, {
      message: "the doctor name cannot be longer than 30 characters",
    }),
  description: z
    .string()
    .min(1, { message: "the description must be at least 1 characters long" }),
});

export const MedicationSchema = z.object({
  name: z
    .string({
      required_error: "Please enter",
    })
    .min(1, { message: "the name must be at least 1 characters long" })
    .max(30, {
      message: "the name cannot be longer than 30 characters",
    }),
  expirationDate: z.string({
    required_error: "Please enter",
    invalid_type_error: "Please add Date like this YYYY-MM-DDT00:00:00.000Z",
  }),
});
