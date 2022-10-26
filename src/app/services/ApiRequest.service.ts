export default class ApiRequest {
	getPathConfig() {
		const result = {
			get backgroundVideoUrl () {
				return { url: 'https://www.w3schools.com/html/mov_bbb.mp4', method: 'GET' }
			}
		}
		return result
	}
}
