const srcLocation = require('../../srcLocation');
const connection = require('../dbconnection')
const path = require('path');
const express = require('express');
const router = express.Router();

router.use('/files', require('./fileRouter'));

router.use('/api', require('./apiRouter'));



router.get('/',(req, res) =>{
    res.sendFile(path.join(srcLocation, './view/html/home.html'));
}); 

router.get('/historia', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/historia.html'));
});

router.get('/ananas', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/ananas.html'));
});

router.get('/anteroQuental', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/anteroQuental.html'));
});

router.get('/antonioBorges', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/antonioBorges.html'));
});

router.get('/auditorio', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/auditorio.html'));
});

router.get('/centros-interpretacao', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/centroInterpretacao.html'));
});

router.get('/caldeira', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/caldeira.html'));
});

router.get('/expolab', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/expolab.html'));
});

router.get('/pocosMosteiros', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/pocosMosteiros.html'));
});

router.get('/praiaAguaDalto', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/praiaAguaDalto.html'));
});

router.get('/praiaDoFogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/praiaDoFogo.html'));
});

router.get('/teatro', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/teatro.html'));
});

router.get('/terraNostra', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/terraNostra.html'));
});

//////////////////////Jardins e ParqueS/////////////////////////////////////

router.get('/jardins-parques', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/jardins&parques/jardinsParques.html'));
});

//////////////////////Museus e Centros/////////////////////////////////////

router.get('/museus-centros', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/museusCentros/museusCentros.html'));
});

//////////////////////Visita e Explora/////////////////////////////////////

router.get('/visitaExplora', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/visitaExplora/visitaExplora.html'));
});

router.get('/visitaExplora-2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/visitaExplora/visitaExplora2.html'));
});

//////////////////////Zonas Balneares/////////////////////////////////////

router.get('/zonasBalneares', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/zonasBal/zonasBalneares.html'));
});

//////////////////////Exp e atv/////////////////////////////////////

router.get('/canoagem', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/canoagem.html'));
});

router.get('/iatismo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/iatismo.html'));
});

router.get('/passeioBike', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/passeioDeBike.html'));
});

router.get('/surf', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/surf.html'));
});

router.get('/trilhos', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/trilhos.html'));
});

router.get('/wakeboard', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/wakeboard.html'));
});

router.get('/mergulho', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/mergulho.html'));
});

router.get('/observacaoAves', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/observacaoAves.html'));
});

router.get('/observacaoCetaceos', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/observacaoCetaceos.html'));
});

router.get('/passeioCavalo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/passeioDeCavalo.html'));
});


router.get('/parapente', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/parapente.html'));
});

router.get('/golf', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/golf.html'));
});

router.get('/canyoning', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/canyoning.html'));
});

router.get('/experienciasAtividades', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/expAtiv.html'));
});

router.get('/experienciasAtividades-Ar', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/expAtivAr.html'));
});

router.get('/experienciasAtividades-Mar', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/ExpAtiv/expAtivMar.html'));
});

router.get('/fabricaCha', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/fabricaDeCha.html'));
});

router.get('/sessao', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/login.html'));
});

router.get('/equipa', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/equipa/team.html'));
});

router.get('/register', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/register.html'));
});

//////////////////////////////////////// alojamento

router.get('/alojamento-1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/alojamento_pag.html'));
});

router.get('/alojamento-2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/alojamento_pag2.html'));
});

router.get('/alojamento-3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/alojamento_pag3.html'));
});

router.get('/lagoa', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/lagoa.html'));
});

router.get('/nordeste', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/nordeste.html'));
});

router.get('/ponta-delgada', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/pontaDelgada.html'));
});

router.get('/ribeira-grande', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/ribeiraGrande.html'));
});

router.get('/vila-franca', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/vilaFranca.html'));
});

router.get('/vila-povoacao', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/vilaPovoacao.html'));
});

router.get('/quinta', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/lagoa/quinta.html'));
});

router.get('/skybar', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/lagoa/skybar.html'));
});

router.get('/termo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/lagoa/termo.html'));
});

router.get('/thomas', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/pontaDelgada/thomas.html'));
});

router.get('/atlanticoApartments', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/ribeiraGrande/atlatico.html'));
});

router.get('/hotelVerde', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/ribeiraGrande/hotelVerde.html'));
});

router.get('/quintaPastor', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/ribeiraGrande/quintaPastor.html'));
});

router.get('/casaDoCampo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/nordeste/casaDoCampo.html'));
});

router.get('/perola', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/nordeste/perola.html'));
});

router.get('/atlantic', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/pontaDelgada/atlantic.html'));
});

router.get('/hotelVip', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/pontaDelgada/hotelvip.html'));
});

router.get('/beijamar', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/vilaFranca/beijamar.html'));
});

router.get('/casaMarina', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/vilaFranca/casaMarina.html'));
});

router.get('/vivenda', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/vilaFranca/vivenda.html'));
});

router.get('/casaAuri', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/vilaPovoacao/casaauri.html'));
});

router.get('/quintaPalmeiras', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/vilaPovoacao/quintaPalmeira.html'));
});

router.get('/valeEncantos', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/hotel/vilaPovoacao/valeEncantos.html'));
});

router.get('/cInfoPontaDelgada', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 1;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoLagoa', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 3;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoNordeste', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 4;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoPovoacao', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 5;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoRibeiraGrande', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 6;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoVFdoCampo', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 7;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoAtividadesTerra', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription FROM activity_cards WHERE activitiesID = 1;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoAtividadesMar', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription FROM activity_cards WHERE activitiesID = 2;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoAtividadesAr', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription FROM activity_cards WHERE activitiesID = 3;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoCentrosInterpretacao', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription FROM visit_explore_cards WHERE visit_exploreID = 1;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoMuseusCentros', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription FROM visit_explore_cards WHERE visit_exploreID = 2;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoJardinsParques', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription FROM visit_explore_cards WHERE visit_exploreID = 3;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

router.get('/cInfoZonasBalneares', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription FROM visit_explore_cards WHERE visit_exploreID = 4;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

module.exports = router