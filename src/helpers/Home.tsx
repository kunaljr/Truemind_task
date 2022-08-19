export const getData = () => {
    return fetch(`https://apimocha.com/truemind/schemes`,{
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(err =>console.log(err))
} 