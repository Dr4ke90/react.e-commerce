import React from 'react'

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ide87LQHtHQbqQIli4i9fFd5RvgRcO0okhXW1BJAK614cRdp39ZsGWa8CmdXhefXJWsnTWUz6p5k1quNKuxu7Uc00MAvqyT2D';

   const onToken = token => {
        console.log(token)
        alert('Payment Succesfull')
    }

    return ( 
        <StripeCheckout 
        label="Pay Now"
        name='SIR Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}$`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        /> 
    );
}

export default StripeCheckoutButton;