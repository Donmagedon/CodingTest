const displayVersionEl = document.getElementById("display")
async function getPackageJSON(){
    const URI = "https://codingtest-2ve2.onrender.com"
    try {
        const request =  await fetch(URI,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        return  request.json()
    } catch (error) {
        throw new Error(error)
    }
}
window.addEventListener("load",async (e)=>{
    const packageObj = await  getPackageJSON()
    displayVersionEl.innerText = packageObj.version
})