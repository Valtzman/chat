import React from 'react'

import { Block } from '../../../components'
import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Button } from '../../../components'
import { Link } from 'react-router-dom'

function LoginFormComp() {
	const onFinish = (values) => {
		console.log('Received values of form: ', values)
	}
	return (
		<>
			<div className="auth__top">
				<h2>Войти в аккаунт</h2>
				<p>Пожалуйста, войдите в свой аккаунт</p>
			</div>
			<Block>
				<Form
					// onSubmit={handleSubmit}
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						name="username"
						rules={[{ required: true, message: 'Please input your Username!' }]}
						// validateStatus={validateField('email', touched, errors)}
						// help={!touched.email ? '' : errors.email}
						// hasFeedback
					>
						<Input
							id="email"
							prefix={<UserOutlined className="site-form-item-icon" />}
							size="large"
							placeholder="E-Mail"
							// value={values.email}
							// onChange={handleChange}
							// onBlur={handleBlur}
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
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
					<Form.Item>
						{/* {isSubmitting && !isValid && <span>Ошибка!</span>} */}
						<Button
							// disabled={isSubmitting}
							// onClick={handleSubmit}
							htmlType="submit"
							className="login-form-button"
							type="primary"
							size="large"
						>
							Войти в аккаунт
						</Button>
					</Form.Item>
					<Link className="auth__register-link" to="/register">
						Зарегистрироваться
					</Link>
				</Form>
			</Block>
		</>
	)
}

export default LoginFormComp
