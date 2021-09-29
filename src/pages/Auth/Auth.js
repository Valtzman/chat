import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginFormComp from '../../modules/LoginForm/components/LoginFormComp'
import RegisterForm from '../../modules/LoginForm/components/RegisterForm'

import './Auth.scss'

function Auth() {
	return (
		<section className="auth">
			<div className="auth__content">
				<Switch>
					<Route exact path={['/', '/login']}>
						<LoginFormComp />
					</Route>
					<Route path="/register">
						<RegisterForm />
					</Route>
				</Switch>
			</div>
		</section>
	)
}

export default Auth
