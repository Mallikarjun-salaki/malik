var form = document.querySelector("form")
form.addEventListener("submit",()=>{
    var uname =document.getElementById("uname").value
    var pass =document.getElementById("passw").value
    event.preventDefault()
    localStorage.setItem("username", uname)
    localStorage.setItem("password",pass)

    window.open("./login.html")
})

