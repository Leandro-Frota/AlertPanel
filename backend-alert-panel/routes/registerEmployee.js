import express from "express";
import EmployeeRegister from "../controller/employeeRegister.js"

const router = express.Router();


router.get('/register', EmployeeRegister.getEmployee)

export default router


