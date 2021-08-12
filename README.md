Seasons app

### Tools used

- Semantic UI CDN
    - https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

- Geolocation API
    - Easy way to get user's location from the browser itself for free
    - no need to pay for Google Maps API
    - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

## Rules of React Class-Based Components
1. Must be a JavaScript Class
2. Must extend (subclass) **React.Component**
3. Must define a 'render(...)' method that returns some amount of JSX

## Rules of State in React
1. Only useable with **Class Components**
   - technically can be used with functional components using the 'Hooks' system
2. You will confuse 'props' with State : (
3. 'State' is a JS Object that contains data strictly relevant to a singular Component
4. Updating 'State' on a Component causes the Component to (almost) instantly re-render
5. State must be initialized when a Component is first created
6. State can **only** be updating using the function **'setState()'**
    - Trying to update State using regular JavaScript and not setState() is a very common mistake
    - Ex)

File: index.js

    class App extends Component {

        constructor(props) {
            super(props);

            this.state = { latitude: null };

            // call Geolocation API from inside the browser
            window.navigator.geolocation.getCurrentPosition(

                // success function callback
                (position) => {
                    // to update State, we call setState - we dont try to change the latitude variable
                    this.setState({ latitude: position.coords.latitude });

                    // Never ever ever do this below - a direct assignment to our State object
                    this.state.latitude = position.coords.latitude