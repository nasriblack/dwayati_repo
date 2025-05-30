import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import PrescriptionRouter from "./routes/prescription.routes";
import { errorHandler } from "./middleware/error-handler";
import medciationRouter from "./routes/medication.routes";
import { apiVersion, endPoint } from "./utils/endPoint";
import { notFoundHandler } from "./middleware/not-found";

export const createServer = (): Express => {
  const app = express();
  app.disable("x-powered-by");
  app.use(morgan("dev"));
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());
  app.use(apiVersion, PrescriptionRouter);
  app.use(apiVersion, medciationRouter);

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get(endPoint.otherEndPoint.CHECK_STATUS_TEST, (_, res: any) => {
      return res.json({ ok: true });
    });
  app.use(errorHandler);
  app.use(notFoundHandler);

  return app;
};
