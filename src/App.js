import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import './App.css'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Children = () => <h1>Children</h1>
const Contact = () => <h1>Contact</h1>
const Menu = () => (
    <div>
        <h1>Menu</h1>
        <NavLink to="/menu/food">Food</NavLink>
        <NavLink to="/menu/drink">Drink</NavLink>
        <NavLink to="/menu/sides">Sides</NavLink>
        <Route
            path="/menu/:section"
            render={({match}) => <h2>{match.params.section}</h2>}
        />
    </div>

)

const NavLinks = () => (
    <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink exact activeClassName="active" to={{pathname: '/about'}}>About</NavLink>
        <NavLink rexact activeClassName="active" eplace to="/contact">Contact</NavLink>
        <NavLink  to="/sd1234">any</NavLink>
        <NavLink  to="/sdfgsdfghsd/asgawaewgawegw4">any2</NavLink>
        <NavLink  to="/menu">Menu</NavLink>
    </nav>
)

class App extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <NavLinks/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/child" children={Children}/>
                        <Route path="/menu" component={Menu}/>
                        <Route path="/:a?/:b?" render={({match}) => (
                            <h1>
                                paramA: {match.params.a}
                                <br/>
                                paramB: {match.params.b}
                            </h1>
                        )}/>
                    </Switch>
                </div>

            </Router>
        )
    }
}

export default App;
