document.getElementById('form').addEventListener('submit',(e)=>{

    e.preventDefault()

    let name = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value

    postData('/test/user',{
        name : name,
        lastName : lastName

    })

    // let information = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body : JSON.stringify({
    //         name : name,
    //         lastName : lastName
    //     })
    // }

    // console.log("sending")

    // fetch('/test/user',information)
    // .then((res)=>{
    //     console.log(res.json())
        
    // })
    
})



async function postData (url = "", data = {}){

    let information = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    }

    const responce = await fetch(url,information)
    const responceInfo = await responce.json()
    console.log(responceInfo)


}