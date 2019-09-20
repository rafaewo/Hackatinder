import React, { Component } from 'react';

class NoTeam extends Component {
    
    render(){

        return(
            // Aqui é o cartão foto-nome-skills do usuário, podemos reaproveitar para quando clicar na info do buscando pessoas, transformar em um componente depois
            <div className='mt5'>
                <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <div className="tc">
                        <img src="http://tachyons.io/img/avatar_1.jpg" alt="caty" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                        <h1 className="f3 mb2">Nome do usuário</h1>
                        <p className="f6 dim mr1 br-pill ph3 pv2 mb2 dib white bg-black shadow-1">skill</p>
                        <p className="f6 dim mr1 br-pill ph3 pv2 mb2 dib white bg-black shadow-1">skill</p>
                        <p className="f6 dim mr1 br-pill ph3 pv2 mb2 dib white bg-black shadow-1">skill</p>
                    </div>
                </article>
                <p className='f2 tc'>Você ainda não tem uma equipe.</p>
                
                <div className='flex tc justify-around'>
                    <a className="f5 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box " href='/CreateTeam'>Criar</a>
                    <a className="f5 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box" href='/searchTeam'>Procurar</a>
                </div>
            </div>
        
        );
    } 
}

export default NoTeam;