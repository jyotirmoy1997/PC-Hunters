const Cart = require("../model/Cart")
const Product = require("../model/Product")

const getAllCartItems = async (req, res) => {
    res.send("Okay")
}

const addCartItem = async (req, res) => {
    const userId = req.body.user // assuming user ID is available in req.user.id
  const productId = req.body.product
  const quantity = req.body.quantity || 1
  const productPrice = (await Product.findOne({_id : productId})).price
  try {
    let cart = await Cart.findOne({ user: userId })

    if (cart) {
      // If cart exists, push the new product to the products array
      const productIndex = cart.products.findIndex(
        (p) => p.product.toString() === productId
      )

      if (productIndex > -1) {
        // If product exists in the cart, increase its quantity
        cart.products[productIndex].quantity += quantity
      } else {
        // If product does not exist in the cart, add it to the products array
        cart.products.push({ product: productId, quantity })
      }
      
    }
    else {
      // If cart does not exist, create a new cart and add the product to it
      cart = new Cart({
        user: userId,
        products: [{ product: productId, quantity }]
      })
    }
    cart.total += productPrice
    cart.count++
    // Save the cart and return the updated cart as the response
    await cart.save()
    console.log(cart)
    return res.status(201).json(cart)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: "Server error" })
  }
    
}

module.exports = {getAllCartItems, addCartItem}