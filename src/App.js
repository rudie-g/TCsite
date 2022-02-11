import './App.css';
import Hero from './components/Hero'
import CalendarDisplay from './components/CalendarDisplay'
import Footer from './components/Footer'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Hero />
      <Info />
      <CalendarDisplay />
      <Footer />
    </div>
  );
}

export default App;
