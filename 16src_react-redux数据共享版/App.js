import React, {Component} from 'react';
import CountContainer from "./containers/Count";
import PersonContainer from "./containers/Person";

class App extends Component {
    render() {
        return (
            <div>
                <CountContainer/>
                <hr/>
                <PersonContainer/>
            </div>
        );
    }
}

export default App;
