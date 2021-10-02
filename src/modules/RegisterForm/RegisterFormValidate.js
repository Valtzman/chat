import { withFormik } from 'formik'
import validateForm from '../../utils/validate'
// import get from 'lodash/get';

import RegisterForm from '../LoginForm/components/RegisterForm'

export default withFormik({
	validate: values => {
		let errors = {};
		validateForm({ isAuth: false, values, errors });
		return errors;
	  },
	handleSubmit: (values, { setSubmitting, props }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}, 1000)
	},
	displayName: 'RegisterForm',
})(RegisterForm)
