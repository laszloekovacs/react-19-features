import { useState } from 'react'
import { useFormStatus } from 'react-dom'

const Submit = () => {
	// needs to be in its own component
	const status = useFormStatus()

	return (
		<div className='grid gap-8 py-8'>
			<div>
				<button
					type='submit'
					disabled={status.pending}
					className='border-1 border border-black px-2 py-1 min-w-[12ch] inline-block font-semibold'>
					{status.pending ? 'submitting' : 'send'}
				</button>
			</div>

			<small>
				<p>useFormStatus return value</p>
				<pre>{JSON.stringify(status, null, 2)}</pre>
			</small>
		</div>
	)
}

export const ExampleFormAction = () => {
	const [posts, setPosts] = useState([])

	const postMessage = async formData => {
		// regular formdata
		const name = formData.get('name')
		const message = formData.get('message')

		// delay
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve()
			}, 2000)
		})

		setPosts(posts => [...posts, { name, message }])
	}

	return (
		<div className='max-w-[30ch]'>
			<h1 className='text-2xl my-4'>Form Aciton, Status</h1>
			<form action={postMessage}>
				<div className='grid mb-4'>
					<label>Username</label>
					<input
						name='name'
						title='user'
						className='border border-1 p-1 border-gray-700 mt-2'
					/>
				</div>
				<div className='grid'>
					<label>Message</label>
					<textarea
						name='message'
						title='message'
						className='border border-1 p-1 border-gray-700 mt-2'
					/>
				</div>

				<Submit />
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
