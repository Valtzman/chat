import React from 'react'
import './Message.scss'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import classNames from 'classnames'

import checkedSvg from '../../assets/img/readed.svg'
import noreadedSvg from '../../assets/img/noreaded.svg'

function Message({ avatar, user, text, date, isMe, isReaded, attachments, isTyping }) {
	return (
		<div className={classNames('message', { 
			'message--isme': isMe, 
			'message--is-typing': isTyping
			})}>
			<div className="message__content">
				<div className="message__avatar">
					<img src={avatar} alt={`Avatar ${user.fullname}`} />
				</div>
				<div className="message__info">
					{(text || isTyping) && (
					<div className="message__bubble">
							 <div className="message__text">
								<p>{text}</p>
							{isTyping && <div className="message__typing">
								<span />
                  				<span />
                  				<span />
							</div>}
						</div>
					</div>)}
					<div className="message__attachments">
						{attachments &&
							attachments.map((item) => (
								<div className="message__attachments-item">
									<img src={item.url} alt={item.filename} />
								</div>
							))}
					</div>
					{date && <span className="message__date">
						{isMe &&
							(isReaded ? (
								<img src={checkedSvg} alt="Checked icon" />
							) : (
								<img src={noreadedSvg} alt="Noreaded icon" />
							))}
						{formatDistanceToNow(
							date,
							{ includeSeconds: true },
							{ addSuffix: true }
						)}
					</span>}
				</div>
			</div>
		</div>
	)
}

Message.defaultProps = {
	user: {},
}

export default Message
