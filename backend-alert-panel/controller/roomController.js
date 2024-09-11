import { getDB } from "../config/db.js"
import RoomRepository from "../repositories/roomRespository.js";


const RoomController = {
    registerRoom: async (req, res) => {
        const {floor, number, studentsCapacity, resources} = req.body;

        if (!floor || !number || !studentsCapacity) {
            return res.status(400).send('Invalid data');
        }

        const db = await getDB();
        
        RoomRepository.createRoom(db, {
            floor,
            number,
            studentsCapacity,
            resources
        });

        res.status(201).send('Room registered successfully');
    },



    getRegisterRoom:(req,res)=>{
        res.send("Salas criadas")
    }
    
}

export default RoomController