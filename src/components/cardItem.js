
import './cardItem.css';

const CardItem = (props) =>{
    console.log(props);
    return(
        <>
            <div className="cardItem">
                <img className="cardItem__images" src={props.cardDetails.images} alt="" />
                <h1 className ="cardItem__heading-h1">{props.cardDetails.name}</h1>
                <h3 className="cardItem__heading">{props.cardDetails.quotes}</h3>
                <button className="cardItem__btn">{props.cardDetails.donation}</button>
            </div>

        </>
    );
};

export default CardItem;