export interface ISliderState {
	loaded: boolean	
	slide: number
	backgroudVideo?: string
	carouselItems?: Array<JSX.Element>
}

export interface ICarouselContent {
	title: string
	content: string
}

export interface ISlideOneProps {
	state: ISliderState
	setState: (value: ISliderState) => void;
}

export interface ISlideTwoProps {
	state: ISliderState
	setState: (value: ISliderState) => void;
}