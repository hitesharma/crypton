
const apiError = (err) => {
    if(err.response.status === 401){
        throw new Error('Invalid api key -- Get @ https://nomics.com');
    }else if(err.response.status === 404){
        throw new Error('api key not responding');
    }else{
        throw new Error('Something fishy, check internet conection');
    }
}

module.exports = {apiError};