import React from 'react';

function Display(props){
    const arr=props.data;
    // const list=arr.map((ele,index)=><li key={index}>{ele}</li>);
    return <div>{arr}</div>;
}
export default Display;