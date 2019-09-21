import React, { Component } from 'react';

const time = {
    nome: 'Hackaflix',
    quantidadeMembros: ''
}

const participante = [
    {
        nome:'Participante X',
        skill: 'Backend'
    },
    {
        nome:'Prt Y',
        skill: 'Fullstack'
    },
    {
        nome: 'Participante Z',
        skill: [
            'Design',
            'Frontend'
        ]
    }
]

class InTeam extends Component {    

    render(){
        return(
            <div>
                <h1 className=" lh-copy pa3 ph0-l bb tc b--black-10">Time: {time.nome}</h1>
                <h3 className="ma1 tc ph0-l b--black-10">Equipe</h3>
                <main className="mw6 center pa3">
                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/5.jpg" alt="imgx" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 mr1 f5-ns fw6 di lh-title black mv0">{participante[0].nome}</h1>
                            {/* PROBLEMA: MAIS DE UMA SKILL PRECISA SER RENDERIZADA SEPARADAMENTE */}
                            <span className="f7 ma1 code ph2 pv1 bg-light-purple white">{participante[0].skill}</span>
                        </div>
                    </article>

                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/3.jpg" alt="imgy" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 mr1 f5-ns fw6 di lh-title black mv0">{participante[1].nome}</h1>
                            <span className="f7 ma1 code ph2 pv1 bg-light-purple white">{participante[1].skill}</span>
                        </div> 
                    </article>

                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/4.jpg" alt="imgz" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 mr1 f5-ns fw6 di lh-title black mv0">{participante[2].nome}</h1>
                            <span className="f7 ma1 code ph2 pv1 bg-light-purple white">{participante[2].skill[0]}</span>
                            <span className="f7 ma1 code ph2 pv1 bg-light-purple white">{participante[2].skill[1]}</span>
                        </div>
                    </article>        

                </main>
                <div className="flex items-center justify-between pa4">
                    <a href="#0" className="f5 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box mr4">
                        <span className="pl1">Editar</span>
                    </a>
                    <a href="/searchCrew" className="f5 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box mr4">
                        <span className="pl1">Adicionar</span>
                    </a>
                    <a href="/NoTeam    " className="f5 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box">
                        <span className="pr1">Sair</span>
                    </a>
                </div>
            </div>
        );
    } 
}

export default InTeam;