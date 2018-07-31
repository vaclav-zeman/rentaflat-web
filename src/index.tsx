import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import globalStyles from "./globalStyles";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

injectGlobal`${globalStyles}`;

registerServiceWorker();
