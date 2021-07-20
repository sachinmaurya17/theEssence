
import './heading.css';

// let isUserRegister = true;

// let navbarColor;

// if(isUserRegister){
//     navbarColor ="navbar-main";
// }
// else{
//     navbarColor = "navbar"
// }

// inline css using object

// let styles = {
//     mainHeading :{
//         color:"red",
//         backgroundColor:"yellow"
//     },
//      ... statements 
// }


const Heading = () => {
    return (
        <>
            <nav className="navbar flex">
                <a className="nav-link" href="?">theEssence</a>
                {/* <button className ="primary-btn">click me</button> */}
                <ul className="nav-tabs flex">
                    <li className="nav-items">Home</li>
                    <li className="nav-items">Production</li>
                    <li className="nav-items">Services</li>
                    <li className="nav-items">Contact Us</li>

                </ul>
                <button className="login__btn">Login</button>
            </nav>
        </>
    );
};

// js code 





export default Heading;