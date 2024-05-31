var loader = document.getElementById("startloader");

window.addEventListener("load", function(){
    this.setTimeout(function(){
        loader.style.display = "none";
    }, 1500);
});