fetch("https://raw.githubusercontent.com/amit-negi-23/Server/main/furniture.json").then((response)=>response.json()).then((data)=>{
    console.log(data)
})