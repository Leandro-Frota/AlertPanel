import { ROOMS_COLLECTION,ROOMS_REGISTERS } from "../utils/constants/collections.js";

const RoomRepository = {
    async createRoom(db, room) {
        await db.collection(ROOMS_REGISTERS).insertOne(room);
    },
    async getRooms(db) {
        return await db.collection(ROOMS_REGISTERS).find().toArray();
    },
    async getRoomById(db, id) {
        return await db.collection(ROOMS_REGISTERS).findOne({ _id: id });
    },
    async updateRoom(db, id, room) {
        await db.collection(ROOMS_REGISTERS).updateOne({ _id: id }, { $set: room });
    }
}

export default RoomRepository;