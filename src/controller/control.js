function validaRegisto(){
    if(document.getElementById("username").value != "" && document.getElementById("username").value != null &&
       document.getElementById("password").value != "" && document.getElementById("password").value != null &&
       document.getElementById("passwordConfirmacao").value != "" && document.getElementById("passwordConfirmacao").value != null &&
       document.getElementById("password").value == document.getElementById("passwordConfirmacao").value)
       return true;
    else
        alert("introduza os dados de registo corretamente");
        return false;
}

async function register(){

    if(validaRegisto()){
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': localStorage.getItem("token")
            },
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
                level:"admin"
            })
        }
    
        await fetch('http://localhost:3001/api/admin/admins', options)
        .then((res) => {
            if(res.status == 200){
                document.getElementById("listaAdmins").innerHTML = ""
                fillAdmins();
                document.getElementById("username").value = ""
                document.getElementById("password").value = ""
                document.getElementById("passwordConfirmacao").value = ""
                document.getElementById("msgErro").style.display = "none"}
            else{
                document.getElementById("username").value = ""
                document.getElementById("password").value = ""
                document.getElementById("passwordConfirmacao").value = ""
                document.getElementById("msgErro").style.display = "block" 
            }
          })
          .catch((error) => console.log(error));
          
    }      
}
function getNavbar() {
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3001/navbar')
        .then(res => res.text())
        .then((html) => {
            nbar.innerHTML += html
        })
        .catch(function(err) {
            alert('Ocorreu um problema...')
        })
}

function getNavbarLogout() {
    const nbar = document.getElementById('nbarlo')
    fetch('http://localhost:3001/navbarLogout')
        .then(res => res.text())
        .then((html) => {
            nbar.innerHTML += html
        })
        .catch(function(err) {
            alert('Ocorreu um problema...')
        })
}

function getFooter() {
    const foot = document.getElementById('foot')
    fetch('http://localhost:3001/footer')
        .then(res => res.text())
        .then((html) => {
            foot.innerHTML += html
        })
        .catch(function(err) {
            alert('Ocorreu um problema...')
        })
}

function insertCardsPontaDelgada() {
    fetch('http://localhost:3001/cInfoPontaDelgada')
        .then(res => res.json())
        .then(data => insertCardInfoResto(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsLagoa() {
    fetch('http://localhost:3001/cInfoLagoa')
        .then(res => res.json())
        .then(data => insertCardInfoResto(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsNordeste() {
    fetch('http://localhost:3001/cInfoNordeste')
        .then(res => res.json())
        .then(data => insertCardInfoNordeste(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsPovoacao() {
    fetch('http://localhost:3001/cInfoPovoacao')
        .then(res => res.json())
        .then(data => insertCardInfoResto(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsRibeiraGrande() {
    fetch('http://localhost:3001/cInfoRibeiraGrande')
        .then(res => res.json())
        .then(data => insertCardInfoResto(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsVFdoCampo(){
    fetch('http://localhost:3001/cInfoVFdoCampo')
        .then(res => res.json())
        .then(data => insertCardInfoResto(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsAtividadesTerra(){
    fetch('http://localhost:3001/cInfoAtividadesTerra')
    .then(res => res.json())
    .then(data => insertCardInfoAtividades(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}


function insertCardsAtividadesMar(){
    fetch('http://localhost:3001/cInfoAtividadesMar')
    .then(res => res.json())
    .then(data => insertCardInfoAtividades(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardsAtividadesAr(){
    fetch('http://localhost:3001/cInfoAtividadesAr')
    .then(res => res.json())
    .then(data => insertCardInfoAtividades(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardsCentrosdeInterpretacao(){
    fetch("http://localhost:3001/cInfoCentrosInterpretacao")
    .then(res => res.json())
    .then(data => insertCardInfoResto(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardsMuseusCentros(){
    fetch('http://localhost:3001/cInfoMuseusCentros')
    .then(res => res.json())
    .then(data => insertCardInfoResto(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardsJardinsParques(){
    fetch('http://localhost:3001/cInfoJardinsParques')
    .then(res => res.json())
    .then(data => insertCardInfoResto(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardsZonasBalneares(){
    fetch('http://localhost:3001/cInfoZonasBalneares')
    .then(res => res.json())
    .then(data => insertCardInfoResto(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardInfoNordeste(data) {
    const cardInfo = document.getElementById('cardInfosNordeste')
    cardInfo.innerHTML = ''
    try {
        for (let i = 0; i < data.length; i++) {
            let cardImage = data[i].cardImage
            let cardTitle = data[i].cardTitle
            let cardDescription = data[i].cardDescription
            cardInfo.innerHTML +=
                `<div class="col-md"> 
                    <div class="card" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;">
                        <img class="card-img-top" src="${cardImage}" style="width:auto; height: 180px; object-fit: cover; ">
                        <h2>${cardTitle}</h2>
                        <p style="text-align: center;">${cardDescription}</p>
                        <div class="d-flex justify-content-center">
                        </div>
                </div>`
        }
    } catch (e) {

    }
}

function insertCardInfoResto(data) {
    const cardInfo = document.getElementById('cardInfosResto')
    cardInfo.innerHTML = ''
    try {
        for (let i = 0; i < data.length; i++) {
            let cardImage = data[i].cardImage
            let cardTitle = data[i].cardTitle
            let cardDescription = data[i].cardDescription
            cardInfo.innerHTML +=
                `<div class="col-md-4"> 
                    <div class="card" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;">
                        <img class="card-img-top" src="${cardImage}" style="width:auto; height: 180px; object-fit: cover; ">
                        <h2>${cardTitle}</h2>
                        <p style="text-align: center;">${cardDescription}</p>
                        <div class="d-flex justify-content-center">
                        </div>
                </div>`
        }
    } catch (e) {

    }
}

function insertCardInfoAtividades(data) {
    const cardInfo = document.getElementById('cardInfosAtividades')
    cardInfo.innerHTML = ''
    try {
        for (let i = 0; i < data.length; i++) {
            let cardImage = data[i].cardImage
            let cardTitle = data[i].cardTitle
            let cardDescription = data[i].cardDescription
            cardInfo.innerHTML +=
                `<div class="col-md-3">
                    <div class="card" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;">
                        <img class="card-img-top" src="${cardImage}" style="width:auto; height: 180px; object-fit: cover; ">
                        <h2>${cardTitle}</h2>
                        <p style="text-align: center;">${cardDescription}</p>
                        <div class="d-flex justify-content-center">
                        </div>
                </div>`
        }
    } catch (e) {

    }
}
