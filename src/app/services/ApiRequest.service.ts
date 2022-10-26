import { getConfig } from '@src/MicrositeTest.config'
import _ from 'lodash'

export default class ApiRequest {
	getUrl(url: string, params: Array<any> = []) {
		if (process.env.NODE_ENV === 'development' && process.env.mockdata) {
			return url
		}
		params = Array.isArray(params) ? params : [params]
		for (let i = 0; i < params.length; ++i) {
			url = url.replace(/\{[a-zA-Z-_]{1,1023}\}/, params[i])
		}
		return url
	}
	getPathConfig() {
		const result = {
			get backgroundVideoUrl () {
				return { url: 'https://www.w3schools.com/html/mov_bbb.mp4', method: 'GET' }
			}
		}
		return result
	}
}
