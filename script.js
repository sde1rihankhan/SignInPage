let nextPage = document.querySelector(".contant8")
let inputs = document.querySelectorAll(".contant2")


nextPage.addEventListener("click",()=>{
    let value = []
    let isValue = false

    inputs.forEach(input =>{
        value.push(input.value)
        if(input.value ===""){
            isValue= true
            input.style.border = "2px solid red"
        }
    })

    inputs.forEach(input =>{
        input.addEventListener("click",()=>{
        input.style = "none"
        })
    })

    if(isValue){
        alert("Please fill inputs!")
        return
    }

    localStorage.setItem("userdata", JSON.stringify(value))
    console.log(value);

    window.location.href = "http://127.0.0.1:5502/Musicart/homePage/index.html"
    inputs.forEach(input =>{
        input.value = ""
    })
})

// function newPage(){
//     window.location.href = "http://127.0.0.1:5502/Musicart/homePage/index.html"
// }