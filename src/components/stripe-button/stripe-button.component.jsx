import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_vsRn6AIWpW7mqg27x4ckWnyI00cfDy5lrX";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Success!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Bikes2000 Ltd"
      billingAddress
      image="https://res.cloudinary.com/dlkrofont/image/upload/v1616135870/Bikes2000._di6zaq.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
