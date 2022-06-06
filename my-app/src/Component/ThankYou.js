import { Link } from "react-router-dom"

const ThankYou = () => {
    return (
        <div>
            <h3>Your order is confirmed.
                Thank you very much.</h3>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default ThankYou