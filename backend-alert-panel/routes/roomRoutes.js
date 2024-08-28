import express from "express";
import RoomController from "../controller/roomController";

const router = express.Router();

router.post('/room', RoomController.registerRoom)

export default router


