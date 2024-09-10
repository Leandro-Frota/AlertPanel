import express from "express";
import RoomController from "../controller/roomController.js";
import EmployeeRegister from "../controller/employeeRegister.js"

const router = express.Router();

router.post('/room-register', RoomController.registerRoom)
router.get('/rooms', RoomController.getRegisterRoom)

export default router


