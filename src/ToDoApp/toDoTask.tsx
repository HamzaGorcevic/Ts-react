import React from "react";
import { Button, TaskStyle, TextStyle } from "./styling";
import { Props } from "./ToDoApp";

interface TaskProps{
    task:Props,
    taskToDelete(taskName:string):void
}
const ToDoTask = ({task,taskToDelete}:TaskProps)=>{
    console.log(taskToDelete)
    return <TaskStyle >
        <TextStyle>
            {task.value}
        </TextStyle>
        <TextStyle>
            {task.num}
        </TextStyle>
    
        <Button onClick={()=>{taskToDelete(task.value)}}>Delete</Button>
        

    </TaskStyle>
}
export default ToDoTask