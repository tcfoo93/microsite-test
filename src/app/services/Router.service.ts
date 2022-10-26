import { AppConstantRoutes } from '@src/MicrositeTest.constants'
import { NavigateFunction } from 'react-router-dom'

interface IRouteToFn {
	navigate: NavigateFunction
	modulePaths: {
		readonly [key: string]: string
	}
}

export const generateRouteToFn = (params: IRouteToFn) => {
	const navigate = params.navigate

	return async (routeTo: string, stateParams?: any) => {
		if (routeTo === AppConstantRoutes.routes.routeToPrevious) {
			navigate(-1)
			return
		}
		const modulePaths = _.values(params.modulePaths)
		const path = !_.includes(modulePaths, routeTo) ? `../${routeTo}` : routeTo // `/${landing}/${routeTo}`

		navigate(path, {
			state: {
				...(stateParams || {})
			}
		})
	}
}
