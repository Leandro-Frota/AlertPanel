import {Bank} from "@phosphor-icons/react/dist/ssr"

const VARIANT = {
    green : 'bg-green-700 border-green-900',
    orange: 'bg-orange-500 border-orange-700'
}

export default function SmallCard({
        number = '209',
        variant = "green",
        onClick = ()=>{}
    }){
    return <div  onClick={onClick} className={` cursor-pointer flex-1 min-w-32 max-w-32 h-20 max-h-20  border-[2px] border-green-900 rounded-xl p-4
                           flex-col flex justify-center items-center text-white ${VARIANT[variant]}`}>
        <div className="flex">
            <Bank size={40} color = "white"/>
        </div>
        <div className="flex">
            {number}
        </div>
    </div>
}