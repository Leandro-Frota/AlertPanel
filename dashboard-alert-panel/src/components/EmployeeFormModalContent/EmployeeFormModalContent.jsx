import { useState } from "react";
import InputLabel from "../InputLabel/InputLabel";

export default function EmployeeFormModalContent({employee,setNewEmployees}){
    const [employeeRegister, setEmployeeName]= useState({}) 

    
    function saveRegister(){
        setNewEmployees(employeeRegister)
    }
 
    function setName(employeeRegistered){
        
        setEmployeeName({...employeeRegister,name: employeeRegistered})
    }
    function setCpf(employeeRegistered){
        
        setEmployeeName({...employeeRegister,CPF: employeeRegistered})
    }
    function setDateBorn(employeeRegistered){
        
        setEmployeeName({...employeeRegister,DatadeNascimento: employeeRegistered})
    }

    function setEmail(employeeRegistered){
        
        setEmployeeName({...employeeRegister,Email: employeeRegistered})
    }

    function setPhone(employeeRegistered){
        
        setEmployeeName({...employeeRegister,Telefone: employeeRegistered})
    }

    function setOffice(employeeRegistered){
        
        setEmployeeName({...employeeRegister,Cargo: employeeRegistered})
    }



    console.log(employeeRegister)

    return <div className="flex flex-col gap-2">
        <div className="flex gap-2">
            <InputLabel employeeRegistered = {setName} label="Name" defaultValue={employee?.name}/>
            <InputLabel employeeRegistered= {setCpf} label="CPF" defaultValue={employee?.cpf}/>
            <InputLabel employeeRegistered= {setDateBorn}  label="Data de nascimento" defaultValue={employee?.birthday}/>

        </div>
        <div className="flex gap-2">
            <InputLabel employeeRegistered= {setEmail} label="E-mail" defaultValue={employee?.email}/>
            <InputLabel employeeRegistered= {setPhone} label="Telefone" defaultValue={employee?.phone}/>
            <div className="flex"></div>
            
        </div>
        <div className="flex gap-2">
            <InputLabel employeeRegistered= {setOffice} label="Cargo" defaultValue={employee?.role}/>
            <div className="flex"></div>
            <div className="flex"></div>
            
        </div>
        <div className="flex gap-2 self-end">
          <button onClick={saveRegister} className="bg-emerald-800 text-white p-2 rounded-full">Salvar</button>
        </div>
    </div>
}