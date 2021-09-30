import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Auth, Home } from './pages'

class App extends Component {
	render() {
		return (
			<Router>
				<>
					<Switch>
						<Route exact path={['/', '/login', '/register']}>
							<Auth />
						</Route>
						<Route exact path="/im">
							<Home />
						</Route>
					</Switch>
				</>
			</Router>
		)
	}
}

export default App
