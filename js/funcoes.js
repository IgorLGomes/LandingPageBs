xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "db/db-content.xml", false)
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("postagem");


function funcaoConteudo() {
    document.write("Roteiros Podcasts")

    for (n = 0; n < x.length; n++) {
        document.write("<div id='noticiaBloco'><img src='img/blog_images/" + x[n].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "'width='250'><div id='noticiaTexto'><div id='noticiaTitulo'><a href='./post.html?posicao=" + n + "'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
            "</a></div>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0, 250) + "...</div></div>");
    }
}   

function funcaoPostagem() {
    url = new URL(window.location.href);
    //posicao = 0
    parametro = url.searchParams;
    i = parametro.get("posicao");
    document.write("<div id='background-texto'><div id='postagemBloco'>" + "<div id='postagemTitulo'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</div><div id='postagemContent'><img src='img/blog_images/" + x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "'width='500'>" +
        "<p>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_2")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_3")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_4")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_5")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_6")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_7")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_8")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_9")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_10")[0].childNodes[0].nodeValue + "</p>" +
        "</div></div></div>");
}