import React, { Component } from 'react';
import InTeam from './InTeam';
import NoTeam from './NoTeam';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            inTeam: false
        }
    }

// CRIAR FUNÇÃO 'isOnTeam()' para definir o estado do this.state.inTeam

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