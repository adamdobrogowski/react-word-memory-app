import Layout from "./components/layouts/Layout.jsx";
import Welcome from "./components/layouts/Welcome.jsx";
import Dashboard from "./components/layouts/Dashboard.jsx";
import Challenge from "./components/layouts/Challenge.jsx";

function App() {
  return (
    <Layout>
      <Welcome />
      <Dashboard />
      <Challenge />
    </Layout>
  );
}

export default App;
