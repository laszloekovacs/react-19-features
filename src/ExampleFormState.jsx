import { useFormState } from 'react-dom'

const action = (prevState, formData) => {
	const count = Number.parseInt(formData.get('count'))

	return prevState + count
}

export const ExampleFormState = () => {
	const [state, formAction] = useFormState(action, 0)

	return (
		<div>
			<h1 className='text-2xl mb-4'>Form State</h1>
			<form action={formAction} className='flex gap-2 mb-2'>
				<input
					type='number'
					name='count'
					className='border-black border border-1'
					defaultValue='2'
				/>
				<button
					type='submit'
					className='border border-1 border-black py-1 px-2 font-semibold'>
					Increment
				</button>
			</form>
			<p>Count: {state}</p>
		</div>
	)
}
