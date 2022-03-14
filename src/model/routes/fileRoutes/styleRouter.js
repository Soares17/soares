const srcLocation = require('../../../srcLocation');
const path = require('path');

const express = require('express');
const router = express.Router();

// Rotas de CSS

router.get('/index.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/index.css'))
})

router.get('/golf.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/golf.css'))
})

router.get('/alojamento.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/alojamento.css'))
})

router.get('/lagoa.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/lagoa.css'))
})

router.get('/quinta.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/lagoa/quinta.css'))
})

router.get('/skybar.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/lagoa/skybar.css'))
})

router.get('/termo.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/lagoa/termo.css'))
})

router.get('/cdc.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/nordeste/cdc.css'))
})

router.get('/perola.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/nordeste/perola.css'))
})

router.get('/atlantic.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/pd/atlantic.css'))
})

router.get('/thomas.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/pd/thomas.css'))
})

router.get('/atlatico.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/rb/atlatico.css'))
})

router.get('/hp.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/pd/hp.css'))
})

router.get('/nordeste.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/nordeste.css'))
})

router.get('/pd.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/pd.css'))
})

router.get('/rb.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/rb.css'))
})

router.get('/vf.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/vf.css'))
})

router.get('/vp.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/vp.css'))
})


router.get('/team.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/team.css'))
})

router.get('/psb.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/psb.css'))
})

router.get('/surf.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/surf.css'))
})

router.get('/wakeboard.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/wakeboard.css'))
})

router.get('/trilhos.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/trilhos.css'))
})

router.get('/iatismo.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/iatismo.css'))
})

router.get('/obsCtc.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/obsCtc.css'))
})

router.get('/parapente.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/parapente.css'))
})

router.get('/psd.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/psd.css'))
})

router.get('/mergulho.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/mergulho.css'))
})

router.get('/obsAves.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/obsAves.css'))
})


router.get('/canoagem.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/canoagem.css'))
})

router.get('/canyoning.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/canyoning.css'))
})

router.get('/expAtiv.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/expAtiv.css'))
})

router.get('/expAtivAr.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/expAtv/expAtivAr.css'))
})

router.get('/centroInterpretacao.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/centroInterpretação.css'))
})

router.get('/visitaExplora.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/visitaExplora.css'))
})

router.get('/style.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/style.css'))
})

router.get('/jardinsParques.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/jardinsParques.css'))
})

router.get('/museusCentros.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/museusCentros.css'))
})

router.get('/historia.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/historia.css'))
})

router.get('/login.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/login.css'))
})

router.get('/loginsignup.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/loginsignup.css'))
})
router.get('/news.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/news.css'))
})

router.get('/footer.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/footer.css'))
})

router.get('/navbar.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/nav.css'))
})

router.get('/hotelVerde.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/rb/hotelVerde.css'))
})

router.get('/qp.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/rb/qp.css'))
})

router.get('/beijamar.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/vf/beijamar.css'))
})

router.get('/cm.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/vf/cm.css'))
})

router.get('/vivenda.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/vf/vivenda.css'))
})

router.get('/ca.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/vp/ca.css'))
})

router.get('/quintaP.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/vp/quintaP.css'))
})

router.get('/ve.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/alojamento/vp/ve.css'))
})

module.exports = router;