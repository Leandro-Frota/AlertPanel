import { EMPLOYEE_COLLECTION } from "../utils/constants/collections.js";

const EmployeeRepository = {
    async createRoom(db, employee) {
        await db.collection(EMPLOYEE_COLLECTION).insertOne(employee);
    },
    async getRooms(db) {
        return await db.collection(EMPLOYEE_COLLECTION).find().toArray();
    },
    async getRoomById(db, id) {
        return await db.collection(EMPLOYEE_COLLECTION).findOne({ _id: id });
    },
    async updateRoom(db, id, employee) {
        await db.collection(EMPLOYEE_COLLECTION).updateOne({ _id: id }, { $set: employee });
    }
}

export default EmployeeRepository;