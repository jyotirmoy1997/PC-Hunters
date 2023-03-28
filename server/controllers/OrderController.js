const Order = require("../model/Order")

const addNewOrder = async (user, products) => {
    try {
        const userOrder = await Order.findOne({user : user})
        if(!userOrder){
            const newUserOrder = await Order.create({user : user, products})
        }
        else{
            const userOrderMap = new Map()
            const existingProducts = userOrder.products
            for(let i=0; i<existingProducts.length; i++){
                userOrderMap.set(existingProducts[i].product.toString(), i);
            }

            for(let item of products){
                if(userOrderMap.has(item.product)){
                    const index = userOrderMap.get(item.product)
                    userOrder.products[index].quantity += item.quantity
                }
                else{
                    userOrder.products.push(item)
                }
            }
            console.log(userOrder)
            await userOrder.save()
            // return res.status(200).json({orders : userOrder})
        }
    } catch (error) {
        console.log(error)
        // return res.status(500).json({msg : "Internal Server Error"})
    }
}

module.exports = {addNewOrder}