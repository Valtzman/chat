import React from 'react'

import { Message } from '../../components/'

import './Home.scss'

function Home() {
	return (
		<section className="Home">
			<Message
				avatar="https://i.pinimg.com/474x/a7/f5/3e/a7f53e97cdfd492fcccf3a7d2457771e--beautiful-redhead-red-heads.jpg"
				text="Lorem ipsum"
				date={new Date(2021, 8, 29, 14, 35)}
				isMe={false}
			/>
			<Message
				avatar="https://i.pinimg.com/474x/a7/f5/3e/a7f53e97cdfd492fcccf3a7d2457771e--beautiful-redhead-red-heads.jpg"
				text="Lorem ipsum"
				date={new Date(2021, 8, 29, 14, 35)}
				isMe={true}
				isReaded={false}
				attachments={[
					{
						filename: 'photo1',
						url: 'https://media.istockphoto.com/photos/water-splash-picture-id182812025?b=1&k=20&m=182812025&s=170667a&w=0&h=Abe_bRg3NtpUBADmUHzYGMXiLhEmAKTCyTU9Lrpokro=',
					},
					{
						filename: 'girl',
						url: 'https://media.istockphoto.com/photos/strawberries-in-red-juice-splash-on-a-white-background-picture-id1245271118?b=1&k=20&m=1245271118&s=170667a&w=0&h=VUYsGa8FECu55OkYiAVcc1Aw-pLxCnbwJ253noRUuks=',
					},
				]}
			/>
		</section>
	)
}

export default Home
