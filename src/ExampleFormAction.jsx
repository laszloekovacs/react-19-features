import { useState } from 'react'

export const ExampleFormAction = () => {
	const [posts, setPosts] = useState([])

	const postMessage = formData => {
		const name = formData.get('name')
		const message = formData.get('message')

		setPosts(posts => [...posts, { name, message }])
	}

	return (
		<div>
			<form action={postMessage}>
				<label>Username</label>
				<input name='name' title='user' />
				<br />

				<label>Message</label>
				<textarea name='message' title='message' />

				<input type='submit' />
			</form>

			<ul>
				{posts.map((post, index) => (
					<li key={index}>
						<strong>{post.name}</strong>
						<p>{post.message}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
