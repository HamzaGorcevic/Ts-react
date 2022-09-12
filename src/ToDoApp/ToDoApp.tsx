
import React, { useState } from "react"
import { Appl, Form,Input,Button } from "./styling"
import ToDoTask from "./toDoTask"

export interface Props{
    value:string,
    num:number
}
const ToDoApp:React.FC = ()=>{
    const [track,setTrack] = useState<Props[]>([])
    const[num,setNum] = useState<number>(0)
    const[value,setValue] = useState<string>('')

    const taskToDelete = (taskName:string):void=>{
        setTrack(track.filter((el)=>(el.value !== taskName)))
    }
    return <Appl>
        <Form>
            <Input type={'text'} onChange={(el)=>{setValue(el.target.value)}}/>
            <Input type={'number'} onChange={(el)=>{setNum(Number(el.target.value))}} />
            <Button onClick={()=>{setTrack([...track,{value,num}])}}>Add</Button>
        </Form>
        {track.map((value:Props,num:number)=>{
            return  <ToDoTask key={num}  task={value}  taskToDelete={taskToDelete}/>
            
            
        })}
    </Appl>
}
export default ToDoApp