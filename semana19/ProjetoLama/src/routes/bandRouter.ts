import { BandController } from "./../controller/BandController";
import express from "express";

export const bandRouter = express.Router();

const bandController = new BandController();

bandRouter.post("/register", bandController.createBand);
bandRouter.get("/details", bandController.getBandDetails);
