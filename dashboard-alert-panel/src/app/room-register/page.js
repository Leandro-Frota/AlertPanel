"use client"
import InputLabel from "@/components/InputLabel/InputLabel";
import { Pen, Trash } from "@phosphor-icons/react/dist/ssr";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function RoomRegister(){
    const [roomFields, setRoomFields] = useState([
       
    ]);



    function switchEditable(fieldIdx){
        const newRoomFields = roomFields.map((field,idx)=>{
            const isEmpity = field.value === "";
            if(idx === fieldIdx){
                return {
                    ...field,
                    editable : !isEmpity ? !field.editable : field.editable
                }

                }else{
                    return{
                        ...field,
                        editable: false
                    }
                }
            }
            
        )

        setRoomFields(newRoomFields);
    
    }

    function addField(){
        if(roomFields.every(field => !field.editable && field.value)){
            setRoomFields ([...roomFields, {editable: true, value: ""}])
            
        }
    }

    function deleteField(e){
        
            const newRoomFieldsFilter = roomFields.filter((field,id)=> id !== Number(e.target.id))
                       
            setRoomFields(newRoomFieldsFilter)    
    
        }

        function onChangeField(e,idx){
            const newRoomFields = roomFields.map((field, fieldIdx)=>{
                if(fieldIdx === idx){
                    return{
                        ...field,
                        value: e.target.value

                    }
                }
                return field;
            })
            setRoomFields(newRoomFields)
        }

   
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
                        <input  onChange={(event) => onChangeField(event,fieldIdx)}  className="flex gap-2 disabled:bg-gray-300" disabled={!field.editable}/>
                        <Pen onClick={()=> switchEditable(fieldIdx)} size={20} className="text-esmerald-800 cursor-pointer"/>
                        <Trash id={fieldIdx} onClick={deleteField} size={20} className="text-esmerald-800 cursor-pointer"/>
                    </div>
             })}

        </main>
    )
}