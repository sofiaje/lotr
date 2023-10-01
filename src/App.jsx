import './App.css'
import Characters from './pages/characters/characters'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className='grow p-4'>
        <Characters />
      </main>
      <Footer />
    </div>
  )
}

export default App
