

function encriptar(){
    let input = document.getElementById("input");
    var query = input.value.split("");
    var querylen = input.value.trim();
    if (querylen == 0){
        alert("No ingresaste ningun texto a encriptar");
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
    }else{
        if (tiene_mayusculas(querylen)==0){
            document.getElementById("muneco").style.display = "none";
            for (var i=0; i<= query.length; i=i+1){
                if(query[i]=="o"){
                query.splice(i,1,"ober");
                }
                if(query[i]=="a"){
                    query.splice(i,1,"ai");
                }
                if(query[i]=="i"){
                    query.splice(i,1,"imes");
                }
                if(query[i]=="e"){
                    query.splice(i,1,"enter");
                }
                
                if(query[i]=="u"){
                    query.splice(i,1,"ufat");
                }
                
            }
            return copiar=document.getElementById("copy").value=query.join("");
        }else{
            alert("El texto contiene mayusculas y deben ser todas minusculas. Convertire las mayusculas en minusculas. Vuelva a selsccionar encriptar.")
            document.getElementById("input").value = document.getElementById("input").value.toLowerCase();
            document.getElementById("input").focus();
            document.getElementById("input").select();
        }
    }
        
}


function desencriptar(){
    let input = document.getElementById("input");
    var query = input.value.split("");
    var querylen = input.value.trim();
    if (querylen == 0){
        alert("No ingresaste ningun texto a desencriptar");
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
    }else{
        if (tiene_mayusculas(querylen)==0){
            document.getElementById("muneco").style.display = "none";
            
            for (var i=0; i<= query.length; i=i+1){
                if(query[i]=="o"){
                    query.splice(i,4,"o");
                }
                if(query[i]=="a"){
                    query.splice(i,2,"a");
                }
                if(query[i]=="i"){
                    query.splice(i,4,"i");
                }
                if(query[i]=="e"){
                    query.splice(i,5,"e");
                }
                
                if(query[i]=="u"){
                    query.splice(i,4,"u");
                }   
            }
            return copiar= document.getElementById("copy").value=query.join("");
        }else{
            alert("El texto contiene mayusculas y deben ser todas minusculas. Convertire las mayusculas en minusculas. Vuelva a selsccionar encriptar.")
            document.getElementById("input").value = document.getElementById("input").value.toLowerCase();
            document.getElementById("input").focus();
            document.getElementById("input").select();
        }
    }
}
        



function copy(){
    var copytext = document.getElementById("copy");
    const div= document.getElementById("body")
    copytext.select();
    document.execCommand("copy");
    const element0= document.createElement("div");
    var copiarta = document.getElementById("copy").value
    document.getElementById("input").value = copiarta
    document.getElementById("input").focus();
    document.getElementById("input").select();
    var borrarta = document.getElementById("copy").value = '';
    document.getElementById("muneco").style.display = "block";
    div.appendChild(element0);

}




function tiene_mayusculas(texto){
   var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
   for(i=0; i<texto.length; i++){
      if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}