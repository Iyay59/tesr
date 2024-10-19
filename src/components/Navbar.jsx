import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="p-4">
        <div className="flex flex-col gap-4">
            <Link to="/">Home</Link>
            <Link to="/movie">movie</Link>
        </div>
    </div>
  )
}

export default Navbar