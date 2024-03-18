
import { Route, Routes } from 'react-router';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import AppLayout from './pages/AppLayout';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='product' element={<ProductPage/>} />
        </Route>
       
        <Route path='appLayout' element={<AppLayout/>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
