import {render} from "@testing-library/react";
import Home from "./Home";

describe("Home page component", () => {
    test("Rendered Input", () => {
        const {getByTestId} = render(<Home/>);
        const input = getByTestId("input");

        expect(input).toBeTruthy();
    })

    test("Rendered Button", () => {
        const {getByTestId} = render(<Home/>);
        const button = getByTestId("narrow");

        expect(button).toBeTruthy();
    })
});