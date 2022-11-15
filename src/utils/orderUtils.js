export const createOrder = async (itemName, itemPrice) => {
    try {
        const response = await fetch( "http://localhost:5001/createOrder", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "itemName": itemName,
                "itemPrice": itemPrice
            })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const readOrders = async () => {
    try {
        const response = await fetch( "http://localhost:5001/readOrders", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
        const data = await response.json()
        // console.log(data.order)
        // const orderData = data.order.map(order => order.itemName, order.itemPrice)
        // return orderData
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const updateOrder = async (username, password) => {
    try {
        const response = await fetch( "http://localhost:5001/updateOrder", {
            method: "PUT",
    headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "filter":{
                        // Filter Goes here
                    },
                    "update":{
                        // Update goes here
                    }
                })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteOrder = async (orderId) => {
    try {
        const response = await fetch( "http://localhost:5001/deleteOrder", {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "orderId": orderId
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}