import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/header";
import Introduction from "./components/introduction";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Introduction />
        </main>
      </div>
    </Router>
  );
}

export default App;
