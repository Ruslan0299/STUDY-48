import {render, screen,  } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Post from "../components/Posts";

test ("Posts titles", async () => {
    render (<MemoryRouter> <Post/></MemoryRouter> );
    const titleElement = await screen.findAllByRole(/li/i);
    expect(titleElement.length).toBeGreaterThan(0);
})