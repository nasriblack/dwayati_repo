import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import PrescriptionRouter from './routes/prescription.routes'
import { errorHandler } from "./middleware/error-handler";
import medciationRouter from "./routes/medication.routes";

export const createServer = (): Express => {
  const app = express();
  app.disable('x-powered-by')
  app.use(morgan('dev'))
  app.use(urlencoded({extended:true}))
  app.use(json())
  app.use(cors())
  app.use('/api/v1', PrescriptionRouter)
  app.use('/api/v1', medciationRouter)

  app.use(errorHandler);
  // app
  //   .disable("x-powered-by")
  //   .use(morgan("dev"))
  //   .use(urlencoded({ extended: true }))
  //   .use(json())
  //   .use(cors())
  //   .get("/message/:name", (req, res:any) => {
  //     return res.json({ message: `hello ${req.params.name}` });
  //   })
  //   .get("/status", (_, res:any) => {
  //     return res.json({ ok: true });
  //   });

  return app;
};
