import React, { Component } from 'react';

class Btc extends Component {

    state = {
        crypto: {}
    }   

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            this.setState({crypto: result})
        })
    }

    render() {
      return (
        <div class="bitcoin">
            <br/>
            {this.state.crypto.chartName}
            <br/>
            <br/>
            Valeur: {this.state.crypto.bpi?this.state.crypto.bpi.EUR.rate:"chargement"}€
            <br/>
            Mis à jour le: {this.state.crypto.time?this.state.crypto.time.updated:"chargement"}
            <br/>
            <br/>
        </div>
      );
    }
}

export default Btc;