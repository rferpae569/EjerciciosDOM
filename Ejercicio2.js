function vnombre(){
    var correcto=true;
    
    var nombre=document.getElementById("nombre").value;
    const exprenom=/^([A-Z][a-zA-Z]+\s)+([A-Z][a-zA-Z]+\s)+([A-Z][a-zA-Z]+$)/;

    if(nombre==null || !exprenom.test(nombre)){
        correcto=false;
        return correcto;
    }

    return correcto;
}

function vemail(){
    var correcto=true;

    var email=document.getElementById("email").value;
    const expremail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(email==null || !expremail.test(email)){
        correcto=false;
        return correcto;
    }

    return correcto;
}

function vanio(){
    var correcto=true;

    const numero=new Date();

    const anio=document.getElementById("anio").value;

    if(anio==null || anio > numero.getFullYear()){
        correcto=false;
        return correcto;
    }

    return correcto
}

function vsexo(){
    var correcto=true;

    var sexo=document.getElementById("sexo").value;
    const expresex=/[H]|[M]/;

    if(sexo==null || !expresex.test(sexo)){
        correcto=false;
        return correcto;
    }

    return correcto;
}

function visbn(){
    var correcto=true;

    var isbn=document.getElementById("isbn").value;
    const expreisbn=/^([0-9]{3})+([-]?)+([0-9]{1})+([-]?)+([0-9]{2})+([-]?)+([0-9]{6})+([-]?)+([0-9])/;

    if(!expreisbn.test(isbn)){
        correcto=false;
        return correcto;
    }

    return correcto;
}

function escribirnombre(){

    if(vnombre()==true){
        document.getElementById("celdanombre").innerHTML=document.getElementById("nombre").value;
    }else{
        document.getElementById("celdanombre").innerHTML="<p style=color:red>Nombre incorrecto</p>";
    }
    
}

function escribiremail(){
    if(vemail()==true){
        document.getElementById("celdaemail").innerHTML=document.getElementById("email").value;
    }else{
        document.getElementById("celdaemail").innerHTML="<p style=color:red>Email incorrecto</p>";
    }
}

function escribiranio(){
    if(vanio()==true){
        document.getElementById("celdaanio").innerHTML=document.getElementById("anio").value;
    }else{
        document.getElementById("celdaanio").innerHTML="<p style=color:red>Año incorrecto</p>";
    }
}

function escribirsexo(){
    if(vsexo()==true){
        document.getElementById("celdasexo").innerHTML=document.getElementById("sexo").value;
    }else{
        document.getElementById("celdasexo").innerHTML="<p style=color:red>Sexo incorrecto</p>";
    }
}

function escribirisbn(){
    if(visbn()==true){
        document.getElementById("celdaisbn").innerHTML=document.getElementById("isbn").value;
    }else{
        document.getElementById("celdaisbn").innerHTML="<p style=color:red>Isbn incorrecto</p>";
    }
}        