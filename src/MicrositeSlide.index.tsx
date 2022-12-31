import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './MicrositeSlide.app'
import { AppConstants } from './MicrositeSlide.constants'
import { IAppProps, IAppState } from './MicrositeSlide.interface'
import '@assets/styles/main.scss'

export default function MicrositeSlide(props: IAppProps) {
	const activeRule = '/'
	const [state] = useState<IAppState>({
		activeRule
	})

	return <App {...state} />
}

export async function bootstrap(props?: any) {
	if ((window as any).__POWERED_BY_QIANKUN__) {
		// eslint-disable-next-line camelcase
		console.log('__POWERED_BY_QIANKUN__')
	}
}

export async function mount(props?: any) {
	const ctn = props?.container || undefined
	const id = `${AppConstants.appName}-root`
	const rootNode = ctn ? ctn.querySelector(`#${id}`) : document.getElementById(id)
	const root = createRoot(rootNode)

	root.render(<MicrositeSlide {...props} />)
}

export async function unmount(props?: any) {
	return props;
}

export async function update(props: any) { 
	return props; 
}