import * as React from "react";
import { act } from "react-dom/test-utils";
import * as ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "./core/ioc/ioc.react";
import { container } from "./core/ioc/ioc";

describe("App", function () {
  it("should display pass in number", function () {
    let divContainer = document.createElement("div");
    const queryClient = new QueryClient();
    document.body.appendChild(divContainer);
    act(() => {
      ReactDOM.render(
        <Provider container={container}>
          <QueryClientProvider client={queryClient}>
            <Router>
              <App />
            </Router>
          </QueryClientProvider>
        </Provider>,
        divContainer
      );
    });
    const header = divContainer.querySelector(".header");
    expect(header?.textContent).toBe(" Podcaster ");
  });
});
