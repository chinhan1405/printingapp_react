import Footer from './common/Footer';
import Navbar from './common/Navbar';
import Home from './homepage/Home';
import Documents from './show_document/Documents';
import ConfigPrint from './config_print/ConfigPrint';
import PrintConfirm from './print_confirm/PrintConfirm';
import PrintTrack from './printTrack/printTrack' 
import { GlobalStateProvider } from './GlobalStateContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Router() {
    return (
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path='/configprint' element={<ConfigPrint />} />
                    <Route path='/printconfirm/' element={<PrintConfirm />} />
                    <Route path='/printtrack' element={<PrintTrack />} />
                </Routes>
            </BrowserRouter>
        
    );
  }




function App() {
    return (
        <div>
            <GlobalStateProvider>
                <Navbar />
                <Router />
                <Footer />
            </GlobalStateProvider>
        </div>
    );
}

export default App;
