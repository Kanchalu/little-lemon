import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Card from './components/Card';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Specials />
            <Testimonials />
            <About />
            <Footer />
            {/* Other components will go here */}
        </div>
    );
}

export default App;