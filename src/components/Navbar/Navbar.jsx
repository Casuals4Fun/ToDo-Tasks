import './Navbar.css'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>
                    <span>T</span>ask <span>T</span>racker
                </h1>
                <a href='https://github.com/Shubham-Lal/React-Task-Tracker' target='_blank' rel='noopener noreferrer'>
                    <p>Source code</p>
                    <FaGithub size={25} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar