import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import { ErrorBoundary } from 'react-error-boundary';


function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
    )
}

export default App;
