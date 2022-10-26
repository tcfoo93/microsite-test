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
  // TODO document why this async function 'bootstrap' is empty

}

export async function mount(props?: any) {
	const ctn = props?.container || undefined
	const id = `${AppConstants.appName}-root`
	const rootNode = ctn ? ctn.querySelector(`#${id}`) : document.getElementById(id)
	const root = createRoot(rootNode)

	root.render(<MicrositeTest {...props} />)
}

export async function unmount(props?: any) { /* TODO document why this async function 'unmount' is empty */ }

export async function update(props: any) { /* TODO document why this async function 'update' is empty */ }