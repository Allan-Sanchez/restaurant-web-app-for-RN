import { useState } from "react";
import { Route } from "wouter";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import Dishes from "./pages/dishes";

import Layout from "./components/ui/Layout";
function App() {
  return (
    <div className="flex bg-gray-100">
      <Layout />

      <main className="m-6">
        <Route path="/" component={Dashboard} />
        <Route path="/orders" component={Orders} />
        <Route path="/dishes" component={Dishes} />
      </main>
    </div>
  );
}

export default App;
