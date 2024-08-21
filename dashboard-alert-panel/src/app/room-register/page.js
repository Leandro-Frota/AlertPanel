"use client"
import InputLabel from "@/components/InputLabel/InputLabel";
import { Pen, Trash } from "@phosphor-icons/react/dist/ssr";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function RoomRegister(){
    const [roomFields, setRoomFields] = useState([
        {
            editable: false,
            value: ""
        }
    ]);

    const [valueInput, setValueInput] = useState(false)

    function switchEditable(fieldIdx){
        const newRoomFields = roomFields.map((field,idx)=>{
            if(idx === fieldIdx){
                return {
                    ...field,
                    editable : !field.editable
                }
            }
            
            return field;
        })

        setRoomFields(newRoomFields);
    
    }

    function addField(){
        if(roomFields.every(field => !field.editable && valueInput)){
            setRoomFields ([...roomFields, {editable: false, value: ""}])
            setValueInput(false)
        }
    }

    function deleteField(fieldIdx){
        
            const newRoomFieldsFilter = roomFields.filter((field,id)=> (id !== fieldIdx || fieldIdx == 0))

                        
            setRoomFields(newRoomFieldsFilter)
            setValueInput(true)
            console.log(fieldIdx)   
            console.log(newRoomFieldsFilter)
            
            
        }

        console.log(valueInput)
    
    return (
        <main className="flex min-h-screen gap-4 flex-grow flex-col items-start justify-start p-6">
             <h1 className="text-2xl font-bold">Registrar sala </h1>
             <div className="flex gap-2">
                <InputLabel label="Número da sala"/>
                <InputLabel label="Andar da sala"/>
                <InputLabel label="Capacidade de alunos"/>
             </div>
             <div className="flex gap-2">
                <p>CheckList</p>
                <PlusCircle onClick={addField} size = {20} className="text-esmerald-800 cursor-pointer"/>

             </div>
             {roomFields.map((field,fieldIdx)=>{
                return <div className="flex gap-2" key={fieldIdx}>
                        <input onChange={() => setValueInput(true)}  className="flex gap-2 disabled:bg-gray-300" disabled={!field.editable}/>
                        <Pen onClick={()=> switchEditable(fieldIdx)} size={20} className="text-esmerald-800 cursor-pointer"/>
                        <Trash onClick={()=> deleteField(fieldIdx)} size={20} className="text-esmerald-800 cursor-pointer"/>
                    </div>
             })}

        </main>
    )
}