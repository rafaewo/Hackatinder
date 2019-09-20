import React, { Component } from 'react';
import InTeam from './InTeam';
import NoTeam from './NoTeam';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            inTeam: true
        }
    }

// CRIAR FUNÇÃO QUE ATUALIZE O STATE: quando o usuário clicar para sair

    render(){
        return(
            <div>
                {this.state.inTeam
                    ? <InTeam />
                    : <NoTeam />
                }
            </div>
        );
    } 
}

export default Home;