import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';

// functional based React Component

// const App = () => {

//     // call Geolocation API from inside the browser
//     // this takes 3-4 seconds so we need to use React Classes instead of functions
//     window.navigator.geolocation.getCurrentPosition(
//         // success function callback
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return <div>Hi there
//         <SeasonDisplay></SeasonDisplay>
//     </div>
// }


class App extends React.Component {
    // before any Component is created, its constructor() method is called
    // thus, it's a great place to initialize State for that Component
    constructor(props) {
        super(props); // super(props) must be called everytime we write a Component constructor

        this.state = { latitude: null };

        // call Geolocation API from inside the browser
        // this takes 3-4 seconds so we need to use React Classes instead of functions
        window.navigator.geolocation.getCurrentPosition(

            // success function callback
            (position) => {
                // to update State, we call setState - we dont try to change the latitude variable
                this.setState({ latitude: position.coords.latitude });

                // Never ever ever do this below - a direct assignment to our State object
                // this.state.latitude = position.coords.latitude
            },
            (err) => console.log(err)
        );
    }

    // React says we have to define render()!!
    render() {


        return <div>Latitude: {this.state.latitude}
            <SeasonDisplay></SeasonDisplay></div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);