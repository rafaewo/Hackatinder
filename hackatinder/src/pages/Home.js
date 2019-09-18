import React, { Component } from 'react';

class Home extends Component {

    // tem equipe ? path home da equipe : path home alone
    render(){
        return(
            // Aqui é o cartão foto-nome-skills do usuário, podemos reaproveitar quando clicar na info do buscando pessoas
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                    <h1 className="f3 mb2">Nome do usuário</h1>
                    <div className="ph3">
                        <p className="f6 br-pill ph3 pv2 mb2 dib white bg-black">skill</p>
                    </div>
                </div>
            </article>
        );
    }
}

export default Home;