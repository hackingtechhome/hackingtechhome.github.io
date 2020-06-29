let buttons = document.getElementsByTagName("button")
for(let i = 0 ; i< buttons.length; i++){
    let buttonclicked = buttons[i]
    setTimeout(buttonclicked.addEventListener("click",()=>{
        window.location = "form.html"
    }),"5000")
}