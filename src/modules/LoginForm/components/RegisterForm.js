import React, { useState } from 'react'

import { Block } from '../../../components'
import { Form, Input } from 'antd'
import {
	UserOutlined,
	LockOutlined,
	SafetyOutlined,
	MailOutlined,
	CheckCircleTwoTone,
} from '@ant-design/icons'
import { Button } from '../../../components'
import { Link } from 'react-router-dom'

function RegisterForm(props) {
	const [success, setSuccess] = useState(false)
	const {
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
		isSubmitting,
	} = props

	const onFinish = (values) => {
		console.log('Received values of form: ', values)
	}
	return (
		<>
			<div className="auth__top">
				<h2>Регистрация</h2>
				<p>Для входа в чат вам нужно зарегистрироваться</p>
			</div>
			<Block>
				{!success ? (
					<Form
						// onSubmit={handleSubmit}
						name="normal_login"
						className="login-form"
						initialValues={{ remember: true }}
						onFinish={onFinish}
					>
						<Form.Item
							name="email"
							rules={[
								{ required: true, message: 'Please input your Username!' },
							]}
							// validateStatus={validateField('email', touched, errors)}
							// help={!touched.email ? '' : errors.email}
							// hasFeedback
						>
							<Input
								id="email"
								prefix={<MailOutlined className="site-form-item-icon" />}
								size="large"
								placeholder="E-Mail"
								// value={values.email}
								// onChange={handleChange}
								// onBlur={handleBlur}
							/>
						</Form.Item>

						<Form.Item
							name="nickname"
							tooltip="What do you want others to call you?"
							rules={[
								{
									required: true,
									message: 'Please input your nickname!',
									whitespace: true,
								},
							]}
						>
							<Input
								size="large"
								placeholder="Имя"
								prefix={<UserOutlined className="site-form-item-icon" />}
							/>
						</Form.Item>

						<Form.Item
							name="password"
							rules={[
								{ required: true, message: 'Please input your password!' },
							]}
							// validateStatus={validateField('password', touched, errors)}
							// help={!touched.password ? '' : errors.password}
							// hasFeedback
						>
							<Input
								id="password"
								prefix={<LockOutlined className="site-form-item-icon" />}
								size="large"
								type="password"
								placeholder="Пароль"
								// value={values.password}
								// onChange={handleChange}
								// onBlur={handleBlur}
							/>
						</Form.Item>

						<Form.Item
							name="Подтвердите пароль"
							dependencies={['password']}
							hasFeedback
							rules={[
								{
									required: true,
									message: 'Please confirm your password!',
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve()
										}

										return Promise.reject(
											new Error(
												'The two passwords that you entered do not match!'
											)
										)
									},
								}),
							]}
						>
							<Input.Password
								size="large"
								placeholder="Подтвердите пароль"
								prefix={<SafetyOutlined className="site-form-item-icon" />}
							/>
						</Form.Item>

						<Form.Item>
							{/* {isSubmitting && !isValid && <span>Ошибка!</span>} */}
							<Button
								// disabled={isSubmitting}
								onClick={handleSubmit}
								htmlType="submit"
								className="login-form-button"
								type="primary"
								size="large"
							>
								Зарегистрироваться
							</Button>
						</Form.Item>
						<Link className="auth__register-link" to="/login">
							Войти в аккаунт
						</Link>
					</Form>
				) : (
					<div className="auth__success-block">
						<div>
							<CheckCircleTwoTone style={{ fontSize: '50px', color: '#08c' }} />
						</div>
						<h2>Подтвердите свой аккаунт</h2>
						<p>
							На Вашу почту отправлено письмо с ссылкой на подтверждение
							аккаунта.
						</p>
					</div>
				)}
			</Block>
		</>
	)
}

export default RegisterForm
