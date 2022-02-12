import { HashRouter } from "react-router-dom";
import AppHeader from "./components/Router/AppHeader";
import RouterOutlet from "./components/Router/RouterOutlet";

function App() {
  return (
    <HashRouter>
      <AppHeader />
      <RouterOutlet />
    </HashRouter>
  );
}

export default App;
