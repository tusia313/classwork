import Child from './Child'
import { useState } from 'react'

const Parent = () => {
    const [name, setName] = useState("Bogdan")
    return(
        <div className = "parent">I am a Parent {name}
        <Child setName = {setName}/>
        </div>
    )
}
export default Parent