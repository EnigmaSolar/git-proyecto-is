function verificaClave(){
    if(document.getElementById("password").value=="operario"){
        document.getElementById("enlace").setAttribute("href","/indexOp.html");
    }
    if(document.getElementById("password").value=="jefe"){
        document.getElementById("enlace").setAttribute("href","/indexJeP.html");
    }
    if(document.getElementById("password").value=="gerente"){
        document.getElementById("enlace").setAttribute("href","/indexGer.html");
    }
} 