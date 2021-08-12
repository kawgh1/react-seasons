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

## Benefits of Class-Based Components
1. Easier to read code organization
2. Can use 'State' --> easier to handle user input
3. Understands lifecycle events --> easier to do things when the app first starts

## Rules of State in React
1. Only useable with **Class Components**
   - technically can be used with functional components using the 'Hooks' system
2. You will confuse 'props' with State : (
3. 'State' is a JS Object that contains data strictly relevant to a singular Component
4. Updating 'State' on a Component causes the Component to (almost) instantly re-render
5. State must be initialized when a Component is first created
6. State can **only** be updated using the function **'setState()'**
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


### Anytime you want to re-render a Component you call setState()

### Conditional Rendering

File: index.js

    ...
    render() {

        // 3 possible states
        // Error Message and No Latitude - show error message
        // No Error Message and Latitude - show Latitude
        // No Error Message and No Latitude - show loading...

        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <div>Latitude: {this.state.latitude}</div>
        }

        return <div>Loading...</div>
    }

## Component LifeCycle

### 1. constructor()
   - good place to do one-time setup
     - Don't make API calls or fetches in the constructor - do that in componentDidMount - best practice
### 2. render()
   - *Component content visible on screen*
   - Avoid doing anything here besides returning JSX, because render() will be called ***a lot***
     - So no fetching, not API calls, not data calls, just returning JSX to display on screen, that's it
### 3. componentDidMount
   - *sit and wait for Component State updates...*
   - good place to do data-loading, fetching from APIs, etc. when there's only one API call
   - **componentDidMount is only called once in the Component LifeCycle**
     - so any code that needs to run more than once should not go here
### 4. componentDidUpdate
   - *sit and wait until this Component is no longer shown...*
   - good place to do more data-loading when state/props change when there will be multiple API calls
     - ex) if we're making a call every time a user clicks a button - place that API call here because every click will be a componentDidUpdate
### 5. componentWillUnmount
   - called anytime a Component is removed from the screen
   - good place to do clean up ( especially for non-React stuff) 