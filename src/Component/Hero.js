import {useState} from 'react'


export default function About() {
const [myStyle,setMyStyle] =useState({
    // background : 'black',
    color : 'white',
    padding : '23px',
    height : '80vh',
})

const [btnText,setBtnText] = useState("Enable Dark Mode")

const toggleStyle =()=>{
    if(myStyle.color == 'black'){
        setMyStyle
        ({
            // background : '#1a1919',
            color : 'white',
            padding : '23px',
            height : '80vh',
    })
    setBtnText("Enable Light Mode")
}
    else {
        setMyStyle(
            {
                background : 'white',
            color : 'black',
            padding : '23px',
            height : '80vh',
            fonts : "poppins"
            }
        )
        setBtnText("Enable Dark Mode")
    }
    
}




    let Lefth = {
        marginLeft : '0px',
        marginTop : '50px', 
    }
    let leftp ={
        marginLeft : '0px',
        marginTop  : '10px', 

    }
  return (
   <>
   <div className="hero" style={myStyle}>
    <div className="leftside">
    <h1 style={Lefth}>THIS IS DARK MODE<br/> TOGGLE
        WEBSITE
    </h1>
    <p style={leftp}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Provident quibusdam pariatur labore quis, laudantium tempore.</p>
    </div>
    <div className="right">
    <button type="button"  onClick={toggleStyle} className="btn btn-primary">{btnText}</button>

    </div>
   </div>
   
   </>
  )
}