
function pesquisar(){
    console.log("ok")
let versao = document.getElementById("versao").value
let livro = document.getElementById("livro").value
let capitulo = document.getElementById("capitulo").value
let versiculo = document.getElementById("versiculo").value
$.ajax({
    url: "https://www.abibliadigital.com.br/api/verses/"+`${versao}`+"/"+`${livro}`+"/"+`${capitulo}`,
    dataType: "json",   
    type: 'GET',
    async: false,
    beforeSend: function () {},
    success: function (data) 
    {  
       
        $("#res").text(JSON.stringify(data.verses[`${versiculo- 1}`].text))
        console.log(data)

    }, 
    error: function (data) 
    {
         $("#res").text("api fora do ar, tente novamente mais tarde");
    }
    
             });
 



}   