import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginFormComp from '../../modules/LoginForm/components/LoginFormComp'
import RegisterForm from '../../modules/LoginForm/components/RegisterForm'

import './Auth.scss'

function Auth() {
	return (
		<Switch>
			<section className="auth">
				<div className="auth__content">
					<Route exact path={['/', '/login']}>
						<LoginFormComp />
					</Route>
					<Route exact path="/register">
						<RegisterForm />
					</Route>
				</div>
			</section>
		</Switch>
	)
}

export default Auth
