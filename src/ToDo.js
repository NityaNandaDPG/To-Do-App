import React,{useState} from 'react';
import AddToList from './AddToList';
import Controller from './Controller';
import './ToDo.css';
import Completes from './Completes';
import Task from './Task';
function ToDo(props){
    const [list,setList]=useState([]);
    const [list1,setList1]=useState([]);
    function addElement(e){
        // let current=new Date();
        // let date=current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
        // let time=current.getHours()+":" +current.getMinutes()+":"+current.getSeconds();
        // let full=e+' '+date+' '+time;

        setList([...list,e]);
    }
    function addComplete(e){
        setList1([...list1,e]);
        // removeElement(e);
    }
    function removeElement(e){
        let i=list.indexOf(e);
        list.splice(i,1);
        setList([...list]);
    }

    return (
        <table className="container">
        <tr className="heading">
            <th><h3>Add New Task:</h3></th>
            <th><h3>Pending Task:</h3></th>
            <th><h3>Complete Task:</h3></th>
        </tr>
        <tr>
            <td><AddToList add={addElement}/></td>
            <td><Controller contents={list} add={addComplete} remove={removeElement}/></td>
            <td><Completes data={list1}/></td>
        </tr>
        </table>)
}
export default ToDo;