import React,{useState} from 'react';
function Controller(props){
    function complete(e){
        props.add(e.target.value);
        remove(e);
    }
    function remove(e){
        props.remove(e.target.value);
    }
    const chart=props.contents.map((ele,index)=><li key={index}>{ele}<button type="submit" value={ele} onClick={complete}>Complete</button><button type="submit" value={ele} onClick={remove}>Remove</button></li>);
    return <div>
    <table>
        <ol>{chart}</ol>
    </table>
    </div>;
}
export default Controller;