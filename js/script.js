var element = document.getElementById("app");
element.style.display = "none";

setTimeout(function(){
    var element = document.getElementById("app");
    var load = document.getElementById("load");
    element.style.display = "inline";
    load.style.display = "none";
},2500);