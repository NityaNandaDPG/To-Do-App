import React,{useState} from 'react';
import AddToList from './AddToList';
import Controller from './Controller';
import './ToDo.css';
import Completes from './Completes';
function ToDo(){
    const [list,setList]=useState([]);
    const [list1,setList1]=useState([]);

    function addElement(e){
        const newlist=[...list];
        newlist.splice(1,0,e);
        setList(newlist);
    }

    function addComplete(e){
        const newlist1=[...list1];
        newlist1.splice(1,0,e);
        setList1(newlist1);
        removeElement(e);
    }

    function removeElement(e){
        let i=list.indexOf(e);
        list.splice(i,1);
        setList({...list});
    }

    return (
        <div>
        {console.log(list)}
        <AddToList add={addElement}/>
            <table className='table'>
                <thead>
                <tr>
                    {/* <th>Add New Task:</th>   */}
                    <th>Tasks</th>
                    <th>Description</th>
                    <th>Modify</th>
                </tr>
                </thead>
                <tbody>
                <Controller contents={list} add={addComplete} remove={removeElement}/>
                </tbody>
            </table>
            <table>
                <tbody><Completes data={list1}/></tbody>
            </table>
        </div>)
}
export default ToDo;