
"use client"
import { Plus, User, Pen } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import ScreenModal from "@/components/ScreenModal/ScreenModal";
import EmployeeFormModalContent from "@/components/EmployeeFormModalContent/EmployeeFormModalContent";

export default function Employees(){

    

    const [openedModal, setOpenModal]= useState(false)

    const [employeeToEdit, setEmployeeToEdit] = useState(null)

    const [employees, setEmployees] = useState([
        {
            name: "Ricardo",
            cpf :"123.456.789-00",
            birthday: "01/01/1900",
            email: "ricardo@gmail.com",
            phone: "(11) - 999999999",
            role: "Dev",
        },
     
    ])

    function setModal(bool, employee){
        setOpenModal(bool);
        setEmployeeToEdit(employee);
        
    }

    function setNewEmployees(newEmployee){
        const newRegister = [...employees,newEmployee]
        setEmployees(newRegister)

    }
    console.log(employees)



    return (
        <main className="flex min-h-screen gap-4 flex-grow flex-col items-start justify-start p-6">
             {openedModal && <ScreenModal onClose = {()=> setOpenModal(false)}>
                <EmployeeFormModalContent setNewEmployees={setNewEmployees} employee={employeeToEdit}/>
                </ScreenModal>}
            <h1 className="text-2xl font-bold">Colaboradores </h1>
            <div onClick={()=>{setModal(true)}}  className="cursor-pointer flex p-2 border border-green-500 rounded">
                <Plus size={20} className=" text-esmerald-800"/>
                <p className="text-esmerald-800">Adicionar colaborador</p>
            </div>
            <div className="flex flex-col gap-2">
                {employees.map((employee)=>(
                    <div key={employee.name} className="flex p-2 gap-1">
                        <User size={20} className="text-esmerald-8080"/>
                        <p>{employee.name}</p>
                        <Pen onClick={()=> setModal(true,employee)} size={20} className="text-esmerald-800 cursor-pointer"/>
                    </div>
                ))}
            </div>

        </main>
    )
}