var form = document.querySelector("form")
form.addEventListener("submit",()=>{
    var uname1 =document.getElementById("uname").value
    var pass1 =document.getElementById("passw").value
    event.preventDefault()
   var storedusername = localStorage.getItem("username",uname1)
   var storedpsswd = localStorage.getItem("password",pass1)
    
    if(uname1===storedusername && pass1===storedpsswd){
        window.open("./sucessful.html")
    }
    else{
        window.open("./error.html")
    }

})




