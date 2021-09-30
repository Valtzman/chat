import React from 'react'
import './Message.scss'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import classNames from 'classnames'

import checkedSvg from '../../assets/img/readed.svg'

function Message({ avatar, user, text, date, isMe, isReaded }) {
	return (
		<div className={classNames('message', { 'message--isme': isMe })}>
			<div className="message__content">
				<div className="message__avatar">
					<img src={avatar} alt={`Avatar ${user.fullname}`} />
				</div>
				<div className="message__info">
					<div className="message__bubble">
						<div className="message__text">
							<p>{text}</p>
						</div>
					</div>

					<span className="message__date">
						<img src={checkedSvg} alt="Checked icon" />
						{formatDistanceToNow(
							date,
							{ includeSeconds: true },
							{ addSuffix: true }
						)}
					</span>
				</div>
			</div>
		</div>
	)
}

Message.defaultProps = {
	user: {},
}

export default Message
