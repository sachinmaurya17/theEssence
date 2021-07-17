
import './heading.css';

const  Heading =()=>{
    return(
       <>
        <nav className = "navbar flex">
           <a className="nav-link">theEssence</a>
           {/* <button className ="primary-btn">click me</button> */}
           <ul className="nav-tabs flex">
               <li className="nav-items">Home</li>
               <li className="nav-items">Production</li>
               <li className="nav-items">Services</li>
               <li className="nav-items">Contact Us</li>

           </ul>
        </nav>
       </>
    );
};

// js code 

let btn = document.querySelector(".primary-btn");
console.log(btn)



export default Heading;