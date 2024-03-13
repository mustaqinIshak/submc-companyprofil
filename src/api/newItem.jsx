import instance from "./config";

async function getIndex() {
    try{
        const result = await instance({
            method: 'post',
            url:'/newItem',
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        })
        if(result.data.status) {
            return result.data.data
        } else {
            throw result.data
        }
    }
    catch {
     
        const message = []
        if(error.message) {
            message.push(message)
        }
        throw message
    }
}


export {
    getIndex,
}