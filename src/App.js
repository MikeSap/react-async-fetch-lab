import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(astros => this.setState({astrosResp: astros}))
    }

    renderAstros = () => {
        debugger
        // console.log(this.state.astrosResp)
        // this.state.astrosResp.people.map(person => {
        //    return <p>{person.name}</p>
        // })
    }

    render() { 
        return ( 
            <div>
                {this.renderAstros}
            </div>
         );
    }
}
 
export default App;