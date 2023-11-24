

import {useState} from 'react'


export default function Textform() {
   

   const handleonchange= (event)=>{
        setText(event.target.value);
}
const handleonclick2=()=>{}


const handleonclick= ()=>{
    let l =Text.toUpperCase();
    setText(l);
}
    const handleonclick1= ()=>{
        let u =Text.toLowerCase();
        setText(u);
    }
    

    const[Text, setText] = useState(" ")

  return (
    <>

    <div className=" mb-3">
    <textarea className="form-control" value={Text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button type="button" class="btn btn-primary mb-2" onClick={handleonclick} >UPPERCASE</button>
    <button type="button" class="btn btn-primary mb-2 mx-2" onClick={handleonclick1}>LOWERCASE</button>
    <button type="button" class="btn btn-primary mb-2 mx-2" onClick={handleonclick2}>WORD COUNT</button>
    </div>
    


</>

  )
}
