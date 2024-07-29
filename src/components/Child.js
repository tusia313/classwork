// import Parent from "./Parent" 
const Child = ({ setName }) => {
    return (

        <div className="child">I am a child :)
            <input onChange={(e) => {
                console.log(e)
                setName(e.target.value)
            }} />
        </div>
    )
}


export default Child