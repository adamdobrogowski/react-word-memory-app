import Layout from "./components/layouts/Layout.jsx";
import Welcome from "./components/layouts/Welcome.jsx";
import Dashboard from "./components/layouts/Dashboard.jsx";
import Challenge from "./components/layouts/Challenge.jsx";

function App() {
  const selectedPage = 1; // 0: Welcome, 1: Dashboard, 2: Challenge
  const pages = {
    0: <Welcome />,
    1: <Dashboard />,
    2: <Challenge />,
  };

  return <Layout>{pages[selectedPage]}</Layout>;
}

export default App;
