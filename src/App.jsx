import { ExampleContext } from './ExampleContext'
import { ExamplePromise } from './ExamplePromise'
import { ExampleUse } from './ExampleUse'
import { ExampleFormAction } from './ExampleFormAction'
import { ExampleFormState } from './ExampleFormState'

function App() {
	return (
		<div className='p-8 grid gap-4'>
			<ExampleUse />
			<hr />
			<ExamplePromise />
			<hr />
			<ExampleContext />
			<hr />
			<ExampleFormAction />
			<hr />
			<ExampleFormState />
		</div>
	)
}

export default App
