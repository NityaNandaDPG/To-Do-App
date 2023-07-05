import React from 'react';
function Completes(props){
    const arr=props.data;





    const list=arr.map((ele,index)=><tr key={index}>
            <td>{ele.name}</td>
            <td>{ele.desc}</td>
            <td>
                <button type="submit" value={ele} >Complete</button>
                <button type="submit" value={ele} >Remove</button>
            </td>
        </tr>);
    return list;
}
export default Completes;