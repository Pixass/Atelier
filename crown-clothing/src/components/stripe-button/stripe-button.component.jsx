import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton =({price}) => {
	const priceForStripe = price * 100;
	const publishablekey = 'pk_test_51GvgmrKmztZ6LaMOujKHk6CJiCegDRsxxsePFE1sT9uEJoqWsO0Zie9IiNMWr2dQH3wvHA1GU1CpNcgBViHFsQAc00ZvPN0w64'

 const onToken = token => {
	console.log(token);
	alert('Payment Succeful');
}

return (
	<StripeCheckout
	  label = 'Pay Now'
	  name = 'CRWN Clothing Ltd.'
	  billingAdress
	  shippingAddress
	  image = 'https://svgshare.com/i/Cuz.svg'
	  description = {`Your total is $${price}`}
	  amount = {priceForStripe}
	  panelLabel = 'Pay Now'
	  token = {onToken}
	  stripeKey = {publishablekey}
	  />

  );


};


export default StripeCheckoutButton;