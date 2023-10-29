var ALERT_TITLE = "Vamos te encaminhar para o seu perfil.";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();
        window.location.href = "perfil.html";
        return false; }

    alertObj.style.display = "block";
    
}

function removeCustomAlert() {
document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
    }
    function ful(){
    alert('Obrigado por entrar em contato conosco! Responderemos em breve.');
    }
    







    // Função para contador de visitas (usando localStorage)
function incrementarContador() {
    let visitas = localStorage.getItem('visitas') || 0;
    visitas++;
    localStorage.setItem('visitas', visitas);
    document.getElementById('contador-visitas').textContent = `Número de visitas: ${visitas}`;
}

// Chame a função de incrementarContador quando a página for carregada
window.addEventListener('load', incrementarContador);