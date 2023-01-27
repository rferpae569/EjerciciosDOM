window.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
    let minimo=1;
    let maximo=20;
    let aleatorio= Math.round(Math.random()*(maximo-minimo)+parseInt(minimo));

    let ul=document.querySelector("ul");
    const cambiar=document.getElementById("ul");

    for(let i=1;i<aleatorio;i++){
        let lista=document.createElement("li");
        let atributo=prompt("Escribe una palabra");
        lista.setAttribute('data-palabra', atributo); 
        lista.textContent=i;
        ul.insertAdjacentElement("afterbegin",lista);
    }

cambiar.addEventListener("click", function(event){
        const target = event.target;
        let cambio=target.getAttribute('data-palabra');
        let texto=target.textContent;

        target.setAttribute('data-palabra',texto);
        target.textContent=cambio;
        target.innerText=target.textContent;
    });
},5000);
});