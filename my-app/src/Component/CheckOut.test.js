import { act, fireEvent, getAllByTestId, render, screen } from "@testing-library/react";
import CheckOut from "./CheckOut";
import App, { AppContext } from '../App';
import Merchandise from './Merchandise'

describe("<CheckOut />", () => {
    const baskets = [{ Id: 1, Name: 'Banana', Count: 2, Price: 2.99, Rate: 1.00 }, { Id: 2, Name: 'Milk', Count: 1, Price: 5.99, Rate: 1.00 }];

    beforeEach(() => {
        render(
            <AppContext.Provider value={{ baskets }}>
                <CheckOut />
            </AppContext.Provider>
        );
    });

    describe("Test is have two merchandise items", () => {
        it("Check merchandise items ", () => {
            const bananaEl = screen.getByText("Banana");
            expect(bananaEl).toBeTruthy();
            const potatoEl = screen.getByText("Milk");
            expect(potatoEl).toBeTruthy();

        });
    });
})