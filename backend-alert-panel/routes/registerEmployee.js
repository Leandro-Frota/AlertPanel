import express from "express";
import EmployeeController from "../controller/employeeController.js"

const router = express.Router();


router.post('/register', EmployeeController.registerEmployee)

export default router


