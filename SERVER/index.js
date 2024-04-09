import Express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import client from "./routes/client";
import general from "./routes/general";
import management from "./routes/management";
import sales from "./routes/sales";


// configuration
dotenv.config();
app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());

// Routes
app.use("/client",clientRoutes);
app.use("/general",generalRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);
