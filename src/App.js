import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };




    componentDidMount() {
        fetch('https://vpce-0bd02e6e0e09e7544-4e9yt2ud-us-east-1d.execute-api.us-east-1.vpce.amazonaws.com', {
          method: 'GET',
          headers: {
            'x-api-key': '7xggh6vvja',
            'Content-Type': 'application/json'
          }
        })
            .then(res => res.json())
            .then((data) => {this.setState({ contacts: data })})
            .catch(console.log)
    }

}

export default App;