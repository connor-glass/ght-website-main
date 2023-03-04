import { Link } from 'react-router-dom';

const Navbar = () => {
    const logo = <img src={require("./white_logo_transparent_background_icon.png")} alt="logo" />;


    return ( 
     
        <nav className="navbar">
            <Link to="/" className="logo">{ logo }</Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/RequestConsultation">Request Consultation</Link>
                
            </div>
        </nav>
       
     );
}

export default Navbar;