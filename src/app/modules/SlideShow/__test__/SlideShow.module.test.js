import SlideShow from "@modules/SlideShow/SlideShow.module";
import { waitFor,render } from "@testing-library/react";

jest.mock('react-router-dom');
jest.mock('@modules/SlideShow/pages/Slide')

describe('SlideShowModule', () => {   
    const props = {
        index: true
    }

    const renderPage = () => {
        return render(
            <SlideShow {...props} />
        )
    }

    it('init', async ()=>{
        renderPage();
        await waitFor(async ()=>{
            const routes = SlideShow(props);
            expect(routes.props.children.length).toBe(2);
            expect(routes.props.children[0].props.index).toBeTruthy();
        })
    })
})