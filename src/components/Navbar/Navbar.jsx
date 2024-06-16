import './Navbar.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>
                    <span>T</span>ask <span>T</span>racker
                </h1>
                <a href='https://play.google.com/store/apps/details?id=com.casuals4fun.todotasks' target='_blank' rel='noopener noreferrer'>
                    <p>Download</p>
                    <IoLogoGooglePlaystore size={25} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar