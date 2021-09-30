import { withFormik } from 'formik'
// import get from 'lodash/get';

import RegisterForm from '../LoginForm/components/RegisterForm'

export default withFormik({
	validate: (values) => {
		let errors = {}
		if (!values.email) {
			errors.email = 'Required'
		} else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address'
		}

		return errors
	},
	handleSubmit: (values, { setSubmitting, props }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}, 1000)
	},
	displayName: 'RegisterForm',
})(RegisterForm)
