import { Component } from 'react';
import BodyPart from './components/bodyPart';
import Card from './components/card';
import Describe from './components/describe';
import Footer from './components/footer';
import Heading from './components/heading';
import ngoItem from './NgoItem.json';

// states in react : it is most important concept in react 


class App extends Component{

//     state={
//         counter:1,
//         heading:"card components"
//     }
    
// // user arrow function , bind(),constructor
        
//     handlerClick =()=>{
//         let localCounter = this.state.counter;
//         this.setState({
//             counter:localCounter+1,
//             heading:"add elements in the card"
//         });
//     }

    // state = {
    //     name : "login__form"
    // }
    
    // loginHandler = ()=>{
    //     this.setState({
    //         name:"active"
    //     });
    // }

    state = {
        items:ngoItem
    }
    render(){
        
        return(
        <>
            <Heading/>
            <BodyPart/>
           
            <Card cardList={this.state.items}/>
            <Describe/>
            <Footer/>
        </>
        );
    }
    
}

export default App;