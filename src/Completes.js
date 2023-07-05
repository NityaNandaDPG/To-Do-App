import React from 'react';
function Completes(props){
    const arr=props.data;
    const list=arr.map((ele,index)=><li key={index}>{ele}</li>);
    return <table>
    <ol>{list}</ol>
    </table>
}
export default Completes;