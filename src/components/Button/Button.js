import './Button.scss'
import { Button as BaseButton } from 'antd'

import React from 'react'
import classNames from 'classnames'

function Button(props) {
	return (
		<div>
			<BaseButton
				{...props}
				className={classNames('button', props.className, {
					'button--large': props.size === 'large',
				})}
			/>
		</div>
	)
}

export default Button
