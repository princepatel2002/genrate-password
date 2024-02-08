const password=document.querySelector("#password")
const length=12
const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*+-!@#$%^&*()_+<>?/.,;:[]{}"


const genratePassword=()=>{
    let pass="";
    for(let i=0;i<=length;i++){
        var rand= Math.floor(Math.random()*char.length)
        pass += char.substring(rand, rand+1)

    }
    password.value=pass
    console.log(pass)

}
