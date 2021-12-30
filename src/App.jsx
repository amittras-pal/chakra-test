import AppHeader from "./components/Router/AppHeader";
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "./components/Router/RouterOutlet";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <RouterOutlet />
    </BrowserRouter>
  );
}

export default App;
