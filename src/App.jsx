import { ExampleContext } from './ExampleContext'
import { ExamplePromise } from './ExamplePromise'
import { ExampleUse } from './ExampleUse'
import { ExampleFormAction } from './ExampleFormAction'
import { ExampleFormState } from './ExampleFormState'

function App() {
	return (
		<div className='p-8 grid grid-cols-2 gap-8'>
			<ExampleUse />
			<ExamplePromise />
			<ExampleContext />
			<ExampleFormAction />
			<ExampleFormState />
		</div>
	)
}

export default App
