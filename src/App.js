import './App.css';
import { CursorProvider } from './components/Utils/CursorContext';
import GsapCursor from './components/Utils/GsapCursor';
import AuthenticatedRoutes from './routes/AuthenticatedRoutes';

function App() {
  return (
    <CursorProvider>
      <div className="cursor"></div>
      <div className="cursor2"></div>
      <GsapCursor />
      <AuthenticatedRoutes />
    </CursorProvider>
  );
}

export default App;
