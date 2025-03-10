let menu = document.getElementById("head");
menu.addEventListener("click", ()=>{
    let app =  document.getElementById("app");
    if(app.style.display === "none" || app.style.display === ""){
        app.style.display = "grid";
    } else{
        app.style.display = "none"
    }
});