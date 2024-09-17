import instance from "./config";

async function getBrands() {
    try{
        const result = await instance({
            method: 'post',
            url:'/getBrands',
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        })
       
        if(result.data.status) {
            console.log(result.data.data)
            return result.data.data
        } else {
            throw result.data
        }
    }
    catch (error) {
        const message = []
        if(error.message) {
            message.push(message)
        }
        throw message
    }
}

export {
    getBrands
}