import React from 'react';
import SeasonDisplay from './components/SeasonDisplay';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    // Helper method
    conditionRender() {
        if (this.state.lat) return <SeasonDisplay lat={this.state.lat} />;
        if (this.state.errorMessage)
            return (
                <ErrorMessage>Error: {this.state.errorMessage}</ErrorMessage>
            );
        return <Loader>Please accept the location request...</Loader>;
    }

    render() {
        return <div>{this.conditionRender()}</div>;
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }
}

export default App;
