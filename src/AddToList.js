import React,{useState} from 'react';
function AddToList(props){
    const [element, setElement]=useState(props.data);
    
    function handleChange(e){
        setElement(e.target.value);
    }
    function handleSubmit(e){
        props.add(element);
        setElement('');
        e.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" value={element} onChange={handleChange}/>
        <input type="submit" value="Add"/>
    </form>
}
export default AddToList;
