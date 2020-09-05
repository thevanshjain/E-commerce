import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =  ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HO4QMDdMK2sVU2NoMEz0PJM6CbQTlgP1zfj47vxT0RGQhuKsG2YmtTXSo6Sp0L0zCKOBv5gakQpHkeTt4X7I33M00pGDEdNgb'

const onToken = token => {
    console.log(token);
    alert("Payment Successful");
}
    return(
        <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your Total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
         />
    );
};

export default StripeCheckoutButton;