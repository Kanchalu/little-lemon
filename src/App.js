import './App.css';
import Header from './components/Header'; // Importing from the new folder
import Hero from './components/Hero';     // Importing from the new folder
import Specials from './components/Specials'; // Importing from the new folder

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Specials />
            {/* Other components will go here */}
        </div>
    );
}

export default App;