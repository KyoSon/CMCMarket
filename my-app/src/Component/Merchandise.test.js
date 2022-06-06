import { act, fireEvent, getAllByTestId, render, screen } from "@testing-library/react";
import App, { AppContext } from '../App';
import Merchandise from './Merchandise'


describe("<Merchandise />", () => {
    const basket = { Id: 1, Name: 'Banana', Count: 2, Price: 2.99, Rate: 1.00 };

    beforeEach(() => {
        render(
            <AppContext.Provider value={{ basket }}>
                <Merchandise merchandise={basket} />
            </AppContext.Provider>
        );
    });

    describe("Test merchandise function", () => {
        it("Click substractFromInput button", () => {
            act(async () => {
                const substractFromInputEl = screen.getByTestId("substractFromInput");
                const inputValueEl = screen.getByTestId("inputValue");

                await fireEvent.click(substractFromInputEl);
                expect(inputValueEl.value).toBe(1);

                const totalMoneyEl = screen.getByTestId("totalMoney");
                expect(totalMoneyEl.innerHTML).toContain("12.99");
            });
        });

        it("Click addToInput button", () => {
            act(async () => {
                const addToInputEl = screen.getByTestId("addToInput");
                const inputValueEl = screen.getByTestId("inputValue");

                await fireEvent.click(addToInputEl);
                expect(inputValueEl.value).toBe(3);

                const totalMoneyEl = screen.getByTestId("totalMoney");
                expect(totalMoneyEl.innerHTML).toContain("18.97");
            });
        });
    });
})