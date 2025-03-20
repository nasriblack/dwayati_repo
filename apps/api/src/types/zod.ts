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
