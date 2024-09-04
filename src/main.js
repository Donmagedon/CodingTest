async function getVersion(){
    const URI = "http://localhost:5500"
    try {
        const request = await fetch(URI,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.json()
    } catch (error) {
        throw new Error(error)
    }
}
window.addEventListener("load",async (e)=>{
    console.log(await getVersion())
})