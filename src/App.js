import Main from "./pages/Main/Main";
import GlobalCSS from "./components/GlobalCSS/GlobalCSS";
import { config } from "./uiconfig";

import styled from "styled-components";

const CONTAINER = styled.div`
  width: 1100px;
  margin: 0 auto;

  @media only screen and (max-width: ${config.breakpoint.md}px) {
    width: 100%;
    padding: 0 15px;
  } ;
`;
function App() {
  return (
    <CONTAINER>
      <div className="App">
        <GlobalCSS />

        <Main />
      </div>
    </CONTAINER>
  );
}

export default App;
