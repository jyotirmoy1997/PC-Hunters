require("dotenv").config()

const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51M5STpSAOI0qYTbSoJQWxJYJB7TA5dCzMGIblYSXeMWJWu7VyZikm9TIkrpJzCtXuY5SpI99b1h13w1hPIj3KHCf00I4pcmXAk');

// const payment = async (req, res) => {
//     console.log("Payment Route")
//     const {product, token} = req.body
//     const idempotencyKey = uuidv4()

//     return stripe.customers.create({
//         email : token.email,
//         source : token.id
//     })
//     .then(customer => stripe.charges.create({}, idempotencyKey))
//     .then(result => res.status(200).json(result)) 
//     .catch(err => console.log(err))
// }



// const payment = async (req, res) => {
//     console.log("Key ", process.env.STRIPE_SECRET_KEY)
//     console.log("Payment Route")
//     const {product, token} = req.body
//     console.log(product, token)
//     const idempotencyKey = uuidv4()

//     try {
//         const customer = await stripe.customers.create({
//             email : token.email,
//             source : token.id
//         });
//         const result = await stripe.charges.create({
//             amount : product.price * 100,
//             currency : 'usd',
//             customer : customer.id,
//             receipt_email : token.email,
//             description : `purchase of ${product.name}`
//         }, {idempotencyKey});
//         return res.status(200).json(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

const payment = async (req, res) => {

        const {products} = req.body
        console.log(products)

        // const idempotencyKey = uuidv4()
    
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types : ['card'],
                mode : 'payment',
                success_url : 'http://localhost:5173',
                cancel_url : 'http://localhost:5173',
                line_items : products.map((product) => {
                    return {
                        price_data : {
                            currency : 'inr',
                            product_data : {
                                name : product.name
                            },
                            unit_amount : 1000 * 100
                        },
                        quantity : 1
                    }
                })
            })
            res.status(200).json({url : session.url})
        } catch (err) {
            console.log(err);
        }
    }


module.exports = payment