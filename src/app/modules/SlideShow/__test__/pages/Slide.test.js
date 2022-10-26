const { waitFor, render, fireEvent } = require("@testing-library/react");
const { createMemoryHistory } = require("history");
const { Router } = require("react-router-dom");
import Slide from '@modules/SlideShow/pages/Slide.tsx'

describe('Slide', () => {
    const renderPageWith = (params) => {
        const history = createMemoryHistory();
        history.push("/", params);

        return render(
            <Router location={history.location} navigator={history}>
                <Slide />
            </Router>
        )
    }

    beforeEach(()=>{
        renderPageWith();
    })

    it('page load successful', async () => {
        await waitFor(()=>{
            const mainContainer= document.querySelector('.main-container');
            expect(mainContainer).toBeInTheDocument()
        })
    })

    it('proceed second slide by clicing expand arrow', async () => {
        await waitFor(async ()=>{
            const expandArrow = document.querySelector('.img-expand-arrow');
            fireEvent.click(expandArrow);
            const slide2WithImageBackGround = document.querySelector('.background-image');
            expect(slide2WithImageBackGround).toBeInTheDocument()
        })
    })

    it('switch between 2 slide by clicking side indicator', async () => {
        await waitFor(async ()=>{
            const indicatorUnselected = () => document.querySelector('.indicator-unselected');

            //Switch slide 1 to 2
            fireEvent.click(indicatorUnselected());
            const slide2WithImageBackground = document.querySelector('.background-image');
            expect(slide2WithImageBackground).toBeInTheDocument()

            //Switch slide 2 to 1
            fireEvent.click(indicatorUnselected());
            const slide1WithVideoBackground = document.querySelector('.background-video');
            expect(slide1WithVideoBackground).toBeInTheDocument()
        })
    })
})