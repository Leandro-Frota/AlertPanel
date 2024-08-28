export default function InputLabel ({label, defaultValue,employeeRegistered }){
    

    return <div className="flex flex-col gap-2">
        <label>{label}</label>
        <input type="text" onChange={(e)=> employeeRegistered(e.target.value)}   defaultValue={defaultValue} className="border-2 border-gray-300 rounded outline-none p-1"/>
    </div>

}