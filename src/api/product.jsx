import instance from "./config";

async function getSelectedProduct(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/productById',
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            data: payload
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

async function getProductByCategories(payload, page) {
    try{
        const result = await instance({
            method: 'post',
            url:`/productByCategorie?page=${page}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            data: payload
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

async function getCategories() {
    try{
        const result = await instance({
            method: 'post',
            url:'/categorieProduct',
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

async function getSubCategories(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/subcategorieProduct',
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            data: payload
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

async function getCmmApparelProducts(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/productByCmmApparel',
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

async function getCrasherMusicMerchandiseProducts(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:`/productByCrasherMusicMerchandise?page=${payload}`,
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
    getSelectedProduct,
    getProductByCategories,
    getCategories,
    getSubCategories,
    getCmmApparelProducts,
    getCrasherMusicMerchandiseProducts,
}