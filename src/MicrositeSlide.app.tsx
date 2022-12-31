import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppConstants } from './MicrositeSlide.constants'
import { IAppState } from './MicrositeSlide.interface'

const SlideShowModule = lazy(() => import(`@src/app/modules/SlideShow/SlideShow.module`))

const App = (props: IAppState) => {
	return (
		<Suspense fallback={<span />}>
			<BrowserRouter basename={'/slide'}>
				<div className={`${AppConstants.appName}-app-root`}>
					<SlideShowModule index={true}/>
				</div>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
