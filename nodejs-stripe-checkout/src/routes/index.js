const { Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_RAWwqPMn2mFquGwCJq5tVflk00KccuIuaZ');

router.get('/', (req, res) => {
    res.render('index');
})

router.post('/checkout', async (req, res) => {
   const customer = await stripe.customers.create({
       email: req.body.stripeEmail,
       source: req.body.stripeToken 
   });
  const charge = await stripe.charges.create({
      amount: '1000',
      currency: 'usd',
      customer: customer.id,
      description: 'You are buying Guitar Tango Book'
   });
   console.log(charge.id);
   // Final Show a sucess view
   res.render('download');             
}); 

module.exports = router;