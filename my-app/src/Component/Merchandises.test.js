import { act, fireEvent, getAllByTestId, render, screen } from "@testing-library/react";
import Merchandises from "./Merchandises";
import App, { AppContext } from '../App';
import Merchandise from './Merchandise'


describe("<Merchandises />", () => {
    const merchandises = [{ Id: 1, Name: 'Banana', Count: 2, Price: 2.99, Rate: 1.00 }, { Id: 2, Name: 'Potato', Count: 1, Price: 1.99, Rate: 1.00 }];

    beforeEach(() => {
        render(
            <AppContext.Provider value={{ merchandises }}>
                <Merchandises />
            </AppContext.Provider>
        );
    });

    describe("Test is have two merchandise items", () => {
        it("rendered description textbox ", () => {
            const BananaEl = screen.getByText("Banana");
            expect(BananaEl).toBeTruthy();
            const PotatoEl = screen.getByText("Potato");
            expect(PotatoEl).toBeTruthy();
        });
    });

})