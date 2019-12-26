import React from 'react';

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Projetos from "./containers/Projetos/Projetos";

function App() {
  return (
    <div>
      <Layout>
        <Projetos />
      </Layout>
    </div>
  );
}

export default App;
