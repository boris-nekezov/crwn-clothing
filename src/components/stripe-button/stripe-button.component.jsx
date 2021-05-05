import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51Ing6nLIz9SnHBTAX3Kc11kdIvG8VqrbM4szs3FIMr8qefpjHgPR6jsv6wgEU0SDiUkhGyQTNFe5m7HON4x3Dp2P00jSHlDNtC';

	const onToken = token => {
		console.log(token);
		alert('Payment Successfull!');
	};

	return (
		<StripeCheckout
			labe="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
