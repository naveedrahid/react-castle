//import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home';
import AuthenticatedRoutes from './routes/AuthenticatedRoutes';

function App() {
  return (
    <>
      <AuthenticatedRoutes />
    </>
  );
}

export default App;
