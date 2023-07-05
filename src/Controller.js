import React,{useState} from 'react';
function Controller(props){
    function complete(e){
        props.add(e.target.value);
        remove(e);
    }
    function remove(e){
        props.remove(e.target.value);
    }
    const chart=props.contents.map((ele,index)=><tr key={index}>
            <td>{ele.name}</td>
            <td>{ele.desc}</td>
            <td>
                <button type="submit" value={ele} onClick={complete}>Complete</button>
                <button type="submit" value={ele} onClick={remove}>Remove</button>
            </td>
            
        </tr>
        );
    return chart;
}
export default Controller;