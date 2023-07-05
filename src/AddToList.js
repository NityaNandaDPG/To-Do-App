import React,{useState} from 'react';
import Task from './Task';
function AddToList(props){
    // const [element, setElement]=useState(props.data);
    const [name,setName]=useState('');
    const [desc,setDesc]=useState('');
    
    function handleName(e){
        setName(e.target.value);
    }
    function handleDesc(e){
        setDesc(e.target.value);
    }
    function handleTime(){
        let current=new Date();
        var date=current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
        var time=current.getHours()+":"+current.getMinutes()+":"+current.getSeconds();
        return date+' '+time;  
    }

    function handleSubmit(e){
        const time=handleTime();
        const t=new Task(name,desc,time);
        props.add(t);
        setName('');
        setDesc('');
        e.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleName} placeholder="Enter Task Here"/>
        <input type="text" value={desc} onChange={handleDesc} placeholder="Enter Description"/>
        <input type="submit" value="Add"/>
    </form>
}
export default AddToList;
