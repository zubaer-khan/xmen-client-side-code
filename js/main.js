document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const xmenName = document.querySelector('input').value
    try{
        const response = await fetch(`https://x-men-api.cyclic.app/api/${xmenName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = 'Real name: ' + data.realName
        document.querySelector('p').innerText = 'Powers: ' + data.powers
    }catch(error){
        console.log(error)
    }
}