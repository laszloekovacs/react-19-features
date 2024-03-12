import { ExampleContext } from './ExampleContext'
import { ExamplePromise } from './ExamplePromise'
import { ExampleUse } from './ExampleUse'
import { ExampleFormAction } from './ExampleFormAction'
function App() {
	return (
		<div>
			<ExampleUse />
			<hr />
			<ExamplePromise />
			<hr />
			<ExampleContext />
			<hr />
			<ExampleFormAction />
		</div>
	)
}

export default App
