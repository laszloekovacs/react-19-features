import { ExampleContext } from './ExampleContext'
import { ExamplePromise } from './ExamplePromise'
import { ExampleUse } from './ExampleUse'
import { ExampleFormAction } from './ExampleFormAction'
function App() {
	return (
		<div className='p-8'>
			<ExampleUse />
			<hr />
			<ExamplePromise />
			<hr />
			<ExampleContext />
			<hr />
			<ExampleFormAction />
			<hr />
		</div>
	)
}

export default App
