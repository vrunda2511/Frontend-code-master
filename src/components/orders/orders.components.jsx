import React, { Component } from 'react'
import OrderCard from './order-card.components';
import "./orders.styles.css"



export default class Orders extends Component {
    


    constructor(props){
        super(props);

        this.state = {
            orders: [],
            modalShow : false
        }
    }

   

    componentDidMount(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          var customer_id=26;
          fetch("http://localhost:4000/api/Vieworder/"+customer_id, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ orders : data}))
            .catch(error => console.log('error', error));
    }




    render() {
        return (
            <div >
                 <div className='header'>
                     Your Orders
                     </div>
                     <div className='container-fluid, row nthcard, lissst'>
                {this.state.orders.map(({ placeorder_id, ...otherOrderProps}) => (
               <div key={placeorder_id} className='orderCard'>
                 <OrderCard key={placeorder_id} {...otherOrderProps}/>
               </div>
                 ))}
                 </div>
            </div>
        )
    }
}
