import React from 'react'

import { Message } from '../../components/'

import './Home.scss'

function Home() {
	return (
		<section className="Home">
			<Message
				avatar="https://i.pinimg.com/474x/a7/f5/3e/a7f53e97cdfd492fcccf3a7d2457771e--beautiful-redhead-red-heads.jpg"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda magni debitis consequuntur repudiandae pariatur, deserunt excepturi qui rerum omnis saepe officia soluta sapiente voluptate quaerat repellat recusandae explicabo ratione."
				date={new Date(2021, 8, 29, 14, 35)}
				isMe={true}
			/>
			<Message
				avatar="https://i.pinimg.com/474x/a7/f5/3e/a7f53e97cdfd492fcccf3a7d2457771e--beautiful-redhead-red-heads.jpg"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda magni debitis consequuntur repudiandae pariatur, deserunt excepturi qui rerum omnis saepe officia soluta sapiente voluptate quaerat repellat recusandae explicabo ratione."
				date={new Date(2021, 8, 29, 14, 35)}
				isMe={false}
				isReaded={true}
			/>
		</section>
	)
}

export default Home
