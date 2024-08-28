const RoomController = {
    registerRoom: (req, res)=>{
        res.send('Criando uma sala')
    },
    getRegisterRoom:(req,res)=>{
        res.send("Salas criadas")
    }
    
}

export default RoomController