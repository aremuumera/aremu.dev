import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import Header from './components/header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './components/loader';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <BrowserRouter>
       
        <Suspense fallback={<Loader />}>
        {/* <Header /> */}
          <Routes>
            <Route path="/" element={<DelayedLoaderRoute />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function DelayedLoaderRoute() {
  return <DelayedLoader delay={3000} />;
}

function DelayedLoader({ delay }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide loader after specified delay
    }, delay);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [delay]);

  return showLoader ? <Loader /> : <Layout />;
}

export default App;
