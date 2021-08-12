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

    render() {
        // call Geolocation API from inside the browser
        // this takes 3-4 seconds so we need to use React Classes instead of functions
        window.navigator.geolocation.getCurrentPosition(

            // success function callback
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return <div>Latitude:
            <SeasonDisplay></SeasonDisplay></div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);