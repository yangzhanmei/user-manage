import React from 'react';
import Hello from './Hello';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
