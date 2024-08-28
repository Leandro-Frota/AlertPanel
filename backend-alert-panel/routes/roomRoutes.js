import express from "express";
import RoomController from "../controller/roomController.js";
import EmployeeRegister from "../controller/employeeRegister.js"

const router = express.Router();

router.post('/room', RoomController.registerRoom)
router.get('/room-register', RoomController.getRegisterRoom)

export default router


