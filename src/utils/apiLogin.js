export const handleResponse = (response) => {
    if (typeof response.data !== 'undefined'){
        throw response.data.errors
    } else{
        return response.data.user
    }
}