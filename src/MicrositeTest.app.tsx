import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppConstants } from './MicrositeTest.constants'
import { IAppState } from './MicrositeTest.interface'

const SlideShowModule = lazy(() => import(`@src/app/modules/SlideShow/SlideShow.module`))

const App = (props: IAppState) => {
	return (
		<Suspense fallback={<span />}>
			<BrowserRouter basename={props.activeRule}>
				<div className={`${AppConstants.appName}-app-root`}>
					<SlideShowModule index={true}/>
				</div>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
