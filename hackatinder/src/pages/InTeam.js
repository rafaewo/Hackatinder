import React, { Component } from 'react';

class InTeam extends Component {
    
    render(){
        return(
            <div>
                <h1 className=" lh-copy pa3 ph0-l bb tc b--black-10">Time: Nome do Time</h1>
                <h3 className="ma1 tc ph0-l b--black-10">Equipe</h3>
                <main className="mw6 center pa3">
                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/5.jpg" alt="imgx" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 mr1 f5-ns fw6 di lh-title black mv0">Participante X </h1>
                            <span className="f7 ma1 ph2 pv1 bg-light-purple white">Backend</span>
                        </div>
                    </article>

                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/3.jpg" alt="imgy" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 mr1 f5-ns fw6 di lh-title black mv0">Participante Y</h1>
                            <span className="f7 ma1 ph2 pv1 bg-light-purple white">Fullstack</span>
                        </div> 
                    </article>

                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/4.jpg" alt="imgz" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 mr1 f5-ns fw6 di lh-title black mv0">Participante Z</h1>
                            <span className="f7 ma1 ph2 pv1 bg-light-purple white">Design</span>
                            <span className="f7 ma1 ph2 pv1 bg-light-purple white">Frontend</span>
                        </div>
                    </article>

                    <div className='tc mt4 '>
                        <a className="f6 link dim mh4 br-pill ph3 pv2 mb2 dib white bg-gray tracked shadow-1" href='/searchTeam'>Editar</a>
                        <a className="f6 link dim mh4 br-pill ph3 pv2 mb2 dib white bg-gray tracked shadow-1" href='/searchCrew'>Sair</a>
                    </div>

                </main>
            </div>
        
        );
    } 
}

export default InTeam;