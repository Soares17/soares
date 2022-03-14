const srcLocation = require('../../../srcLocation');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/scripts.js',(req, res) =>{
    res.sendFile(path.join(srcLocation, './controller/scripts.js'))
});

router.get('/aguaDalto', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/agua_dalto_beach.jpg'))

});

router.get('/anteroQuental', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/antero_quental.jpg'))

});

router.get('/antonioBorges', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/antonio-borges-garden.jpg'))

});

router.get('/atlanticGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantic_galeria1.jpg'))

});

router.get('/atlanticGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantic_galeria2.jpg'))

});

router.get('/atlanticGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantic_galeria3.jpg'))

});

router.get('/atlanticGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantic_galeria4.jpg'))

});

router.get('/atlanticGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantic_galeria5.jpg'))

});

router.get('/atlanticGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantic_galeria6.jpg'))

});

router.get('/atlanticGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantic_galeria7.jpg'))

});

router.get('/atlantic', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantic.jpg'))

});

router.get('/atlanticoGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantico_galeria1.jpg'))

});

router.get('/atlanticoGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantico_galeria2.jpg'))

});

router.get('/atlanticoGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantico_galeria3.jpg'))

});

router.get('/atlanticoGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantico_galeria4.jpg'))

});

router.get('/atlanticoGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantico_galeria5.jpg'))

});

router.get('/atlanticoGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantico_galeria6.jpg'))

});

router.get('/atlanticoGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantico_galeria7.jpg'))

});

router.get('/atlanticoGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantico_galeria8.jpg'))

});

router.get('/atlanticoGaleria9', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlantico_galeria9.jpg'))

});

router.get('/atlanticos', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/atlaticos.jpg'))

});

router.get('/auditorioUniv', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/auditorio_univ.jpg'))

});

router.get('/auriGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/auri_galeria1.jpg'))

});

router.get('/auriGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/auri_galeria2.jpg'))

});

router.get('/auriGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/auri_galeria3.jpg'))

});

router.get('/auriGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/auri_galeria4.jpg'))

});

router.get('/auriGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/auri_galeria5.jpg'))

});

router.get('/auriGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/auri_galeria6.jpg'))

});

router.get('/auriGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/auri_galeria7.jpg'))

});

router.get('/auriGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/auri_galeria8.jpg'))

});

router.get('/auri', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/auri.jpg'))

});

router.get('/backgroundAlojamento', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/background_Alojamento.png'))

});

router.get('/backgroundExperienciasAtividades', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/background_Experiencia_Atividade.png'))

});

router.get('/backgroundVisitaExplora', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/background_Visita_Explor.png'))

});

router.get('/beijaMarGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/beija_mar_galeria1.jpg'))

});

router.get('/beijaMarGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/beija_mar_galeria2.jpg'))

});

router.get('/beijaMarGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/beija_mar_galeria3.jpg'))

});

router.get('/beijaMarGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/beija_mar_galeria4.jpg'))

});

router.get('/beijaMarGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/beija_mar_galeria5.jpg'))

});

router.get('/beijaMarGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/beija_mar_galeria6.jpg'))

});

router.get('/beijaMarGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/beija_mar_galeria7.jpg'))

});

router.get('/beijaMarGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/beija_mar_galeria8.jpg'))

});

router.get('/beijaMarGaleria9', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/beija_mar_galeria9.jpg'))

});

router.get('/beija', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/beija.jpg'))

});

router.get('/caldeiraVelha', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/caldeira_velha.jpg'))

});

router.get('/canoagem', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/canoagem.jpg'))

});

router.get('/canyoning', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/canyoing.jpg'))

});

router.get('/cardObservacaoAves', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/card_Observacao_aves.jpg'))

});

router.get('/carousel1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/carousel_1.jpg'))

});

router.get('/carousel2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/carousel_2.jpg'))

});

router.get('/carousel3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/carousel_3.png'))

});

router.get('/carousel4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/carousel_4.png'))

});

router.get('/carousel5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/carousel_5.png'))

});

router.get('/carousel6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/carousel_6.png'))

});

router.get('/carousel7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/carousel_7.png'))

});

router.get('/carousel8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/carousel_8.png'))

});

router.get('/carousel9', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/carousel_9.png'))

});

router.get('/carousel10', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/carousel_10.png'))

});

router.get('/casaCampoGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_campo_galeria1.jpg'))

});

router.get('/casaCampoGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_campo_galeria2.jpg'))

});

router.get('/casaCampoGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_campo_galeria3.jpg'))

});

router.get('/casaCampoGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_campo_galeria4.jpg'))

});

router.get('/casaCampoGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_campo_galeria5.jpg'))

});

router.get('/casaCampoGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_campo_galeria6.jpg'))

});

router.get('/casaCampoGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_campo_galeria7.jpg'))

});

router.get('/casaCampoGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_campo_galeria8.jpg'))

});

router.get('/casaDoCampo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casadocampo.jpg'))

});

router.get('/culturaAnanas', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/cultura_ananas.jpg'))

});

router.get('/casaMarinaGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_marina_galeria1.jpg'))

});

router.get('/casaMarinaGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_marina_galeria2.jpg'))

});

router.get('/casaMarinaGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_marina_galeria3.jpg'))

});

router.get('/casaMarinaGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_marina_galeria4.jpg'))

});

router.get('/casaMarinaGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_marina_galeria5.jpg'))

});

router.get('/casaMarinaGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_marina_galeria6.jpg'))

});

router.get('/casaMarinaGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_marina_galeria7.jpg'))

});

router.get('/casaMarinaGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_marina_galeria8.jpg'))

});

router.get('/casaMarinaGaleria9', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa_marina_galeria9.jpg'))

});

router.get('/casa', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/casa.jpg'))

});

router.get('/encantos', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/encantos.jpg'))

});

router.get('/expolab', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/expolab.jpg'))

});

router.get('/fabricaCha', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/fabrica_cha.jpg'))

});

router.get('/feijo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/feijo.jpeg'))

});

router.get('/golfe', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/golfe.jpg'))

});

router.get('/hotelVerdeGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/hotel_verde_galeria1.jpg'))

});

router.get('/hotelVerdeGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/hotel_verde_galeria2.jpg'))

});

router.get('/hotelVerdeGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/hotel_verde_galeria3.jpg'))

});

router.get('/hotelVerdeGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/hotel_verde_galeria4.jpg'))

});

router.get('/hotelVerdeGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/hotel_verde_galeria5.jpg'))

});

router.get('/hotelVerdeGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/hotel_verde_galeria6.jpg'))

});

router.get('/hotelVerdeGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/hotel_verde_galeria7.jpg'))

});

router.get('/hotelVerdeGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/hotel_verde_galeria8.jpg'))

});

router.get('/hotelVerdeGaleria9', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/hotel_verde_galeria9.jpg'))

});

router.get('/hotelVerde', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/hotelverde.jpg'))

});

router.get('/iatismo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/iatismo.jpg'))

});

router.get('/iatismo2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/iatismo2.jpg'))

});

router.get('/mergulho', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/mergulho.jpg'))

});

router.get('/observacaoCetaceos', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/Observacao_cataceos.jpg'))

});

router.get('/imagemInicial', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pagina_inicial.png'))
});

router.get('/palmeirasGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/palmeiras_galeria1.jpg'))

});

router.get('/iniciarSessao', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/iniciar_sessao.png'))

});

router.get('/palmeirasGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/palmeiras_galeria2.jpg'))

});

router.get('/palmeiras', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/palmeiras.jpg'))
});

router.get('/parapente', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/parapente.jpg'))
});

router.get('/passeiobike', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/passeio_bike.jpg'))
});

router.get('/passeiocavalo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/passeio_cavalo.jpg'))
});

router.get('/pastorGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria1.jpg'))
});

router.get('/pastorGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria2.jpg'))
});

router.get('/pastorGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria3.jpg'))
});

router.get('/pastorGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria4.jpg'))
});

router.get('/pastorGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria5.jpg'))
});

router.get('/pastorGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria6.jpg'))
});

router.get('/pastorGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria7.jpg'))
});

router.get('/pastorGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria8.jpg'))
});

router.get('/pastorGaleria9', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria9.jpg'))
});

router.get('/perolaGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria1.jpg'))
});

router.get('/perolaGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria2.jpg'))
});

router.get('/perolaGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria3.jpg'))
});

router.get('/perolaGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria4.jpg'))
});

router.get('/perolaGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria5.jpg'))
});

router.get('/perolaGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria6.jpg'))
});

router.get('/perolaGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria7.jpg'))
});

router.get('/perolaGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria8.jpg'))
});

router.get('/perola', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola.jpg'))
});

router.get('/pocosMosteiros', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pocos_mosteiros.jpg'))
});

router.get('/praiaFogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/praia_fogo.jpg'))
});

router.get('/quintaGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria1.jpg'))
});

router.get('/quintaGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria2.jpg'))
});

router.get('/quintaGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria3.jpg'))
});

router.get('/quintaGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria4.jpg'))
});

router.get('/quintaGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria5.jpg'))
});

router.get('/quintaGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria6.jpg'))
});

router.get('/quintaGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria7.jpg'))
});

router.get('/quintaGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria8.jpg'))
});

router.get('/quinta', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta.jpg'))
});

router.get('/quintaPastor', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quintapastor.jpg'))
});

router.get('/registo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/registo.png'))
});

router.get('/skybarGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria1.jpg'))
});

router.get('/skybarGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria2.jpg'))
});

router.get('/skybarGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria3.jpg'))
});

router.get('/skybarGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria4.jpg'))
});

router.get('/skybarGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria5.jpg'))
});

router.get('/skybarGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria6.jpg'))
});

router.get('/skybarGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria7.jpg'))
});

router.get('/skybarGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria8.jpg'))
});

router.get('/skybar', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar.jpg'))
});

router.get('/soares', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/soares.png'))
});

router.get('/surf', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/surf.jpg'))
});

router.get('/teatroMicalense', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/teatro_micalense.jpg'))
});

router.get('/termorGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria1.jpg'))
});

router.get('/termorGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria2.jpg'))
});

router.get('/termorGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria3.jpg'))
});

router.get('/termorGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria4.jpg'))
});

router.get('/termorGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria5.jpg'))
});

router.get('/termorGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria6.jpg'))
});

router.get('/termorGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria7.jpg'))
});

router.get('/termorGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria8.jpg'))
});

router.get('/termo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo.jpg'))
});

router.get('/terraNostra', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/Terra Nostra 1   43.jpg'))
});

router.get('/thomasGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria1.jpg'))
});

router.get('/thomasGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria2.jpg'))
});

router.get('/thomasGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria3.jpg'))
});

router.get('/thomasGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria4.jpg'))
});

router.get('/thomasGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria5.jpg'))
});

router.get('/thomasGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria6.jpg'))
});

router.get('/thomasGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria7.jpg'))
});

router.get('/thomasGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria8.jpg'))
});

router.get('/thomas', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas.jpg'))
});

router.get('/trilhos', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/trilhos.jpg'))
});

router.get('/valeGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria1.jpg'))
});

router.get('/valeGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria2.jpg'))
});

router.get('/valeGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria3.jpg'))
});

router.get('/valeGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria4.jpg'))
});

router.get('/valeGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria5.jpg'))
});

router.get('/valeGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria6.jpg'))
});

router.get('/valeGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria7.jpg'))
});

router.get('/valeGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria8.jpg'))
});

router.get('/vipGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria1.jpg'))
});

router.get('/vipGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria2.jpg'))
});

router.get('/vipGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria3.jpg'))
});

router.get('/vipGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria4.jpg'))
});

router.get('/vipGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria5.jpg'))
});

router.get('/vipGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria6.jpg'))
});

router.get('/vipGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria7.jpg'))
});

router.get('/vipGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria8.jpg'))
});

router.get('/vip', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip.jpg'))
});

router.get('/vivendaGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria1.jpg'))
});

router.get('/vivendaGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria2.jpg'))
});

router.get('/vivendaGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria3.jpg'))
});

router.get('/vivendaGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria4.jpg'))
});

router.get('/vivendaGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria5.jpg'))
});

router.get('/vivendaGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria6.jpg'))
});

router.get('/vivendaGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria7.jpg'))
});

router.get('/vivendaGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria8.jpg'))
});

router.get('/vivendaGaleria9', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria9.jpg'))
});

router.get('/vivenda', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda.jpg'))
});

router.get('/wakeboard', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/wakeboard.jpg'))
});


/*ahbasjgçasçlºsf */
module.exports = router;