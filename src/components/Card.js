import { forwardRef } from "react"

const Card = ({ }, ref) => {
    return(
        <div ref={ref} className="card"></div>
    )
}
export default forwardRef(Card)