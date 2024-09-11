import { getDB } from "../config/db.js"

import EmployeeRepository from "../repositories/employeeRepository.js";

const EmployeeController = {
       
            registerEmployee: async (req, res) => {
                const {name, cpf, dateBorn, email, phone, office} = req.body;
        
                if (!name || !cpf || !dateBorn) {
                    return res.status(400).send('Invalid data');
                }
        
                const db = await getDB();
                
                EmployeeRepository.createRoom(db, {
                    name,
                    cpf,
                    dateBorn,
                    email,
                    phone,
                    office
                });
        
                res.status(201).send('Employee registered successfully');
            }
}

export default EmployeeController