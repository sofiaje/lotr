import './App.css'
import Characters from './pages/characters/characters'
import Header from './Components/Header'
import Footer from './Components/Footer'




function App() {

  return (
    <div className="flex flex-col h-screen items-center text-white">
      <Header />
      <main className='flex flex-col grow p-4 w-full max-w-7xl'>
        <Characters />
      </main>
      <Footer />
    </div>
  )
}

export default App
