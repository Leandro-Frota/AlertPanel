const EmployeeRegister = {
        getEmployee : (req, res)=>{
            try{
                const employesRegistered = [{nome: "Leandro"}]
                res.send(employesRegistered)
            }catch{
                res.status(500)
                res.send(error.message)
            }
        },
}

export default EmployeeRegister