import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './MicrositeTest.app'
import { AppConstants } from './MicrositeTest.constants'
import { IAppProps, IAppState } from './MicrositeTest.interface'
import '@assets/styles/main.scss'

export default function MicrositeTest(props: IAppProps) {
	const activeRule = '/'
	const [state] = useState<IAppState>({
		activeRule
	})

	return <App {...state} />
}

export async function bootstrap(props?: any) {
	return props;
}

export async function mount(props?: any) {
	const ctn = props?.container || undefined
	const id = `${AppConstants.appName}-root`
	const rootNode = ctn ? ctn.querySelector(`#${id}`) : document.getElementById(id)
	const root = createRoot(rootNode)

	root.render(<MicrositeTest {...props} />)
}

export async function unmount(props?: any) {
	return props;
}

export async function update(props: any) { 
	return props; 
}