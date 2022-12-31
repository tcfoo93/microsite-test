import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppConstantRoutes } from '@src/MicrositeSlide.constants';
import { IModuleProps } from '@src/MicrositeSlide.interface';
const Slide = lazy(() => import(`./pages/Slide`))

function SlideShowModule(props:IModuleProps) {
	const { index } = props;
	return (
		<Routes>
			{index &&
				<Route index element={<Navigate to={AppConstantRoutes.routes.slideShow.url} />} />
			}
			<Route path={AppConstantRoutes.routes.slideShow.url} element={<Slide/>} />
		</Routes>
	)
}

export default SlideShowModule