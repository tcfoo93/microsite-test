export const AppConstants = {
	get appName() {
		return 'microsite-test'
	}
}

export const AppConstantRoutes = {
	routes: {
		get defaultModule() {
			return this.slideShow.url
		},
		get slideShow() {
			return {
				get url() {
					return '/slideshow'
				}
			}
		},
		get routeToPrevious() {
			return '../'
		}
	}
}