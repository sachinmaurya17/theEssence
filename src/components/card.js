import CardItem from "./cardItem";
import './card.css';
const Card = (props) =>{
    
    return(
        <>
            <div class="card">
            {props.cardList.map((item) => (
               /* <CardItem cardItem ={item}/> */
                <CardItem cardDetails = {item}/>
              
            ))}
            </div>
        </>
    );
}

export default Card;