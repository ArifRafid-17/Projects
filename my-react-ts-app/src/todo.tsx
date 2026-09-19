export default Todo  // export korlam

// function Todo(props){
//     return <li>Do this work: {props.name} </li>
// }


// ekhane destructuring korsi. Evabe selected variable declare korte parbo 
// function Todo({name}){
//     return <li>Do this work: {name} </li>
// }

interface TodoPropType{
    task : string,
    time?: string
}


// function Todo(props: TodoPropType){
//     return <p>Task: {props.task} & Time: {props.time}</p> 
// }
function Todo({task, time}: TodoPropType){
    return <p>Task: {task} & Time: {time}</p> 
}