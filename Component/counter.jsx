import React from "react";

function Counter(props){
    // useState
const [value, setValue] = React.useState(props.index);

const handleIncrement = () =>{
 setValue(value + 2)  
}    

const handleDecrement = ()=>{
setValue(value - 2)
}

return <div>
<div>{value}</div>
<button onClick={handleIncrement}>+ Plus</button>
<button onClick={handleDecrement}>- Minus</button>
</div>
}

export default Counter