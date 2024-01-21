import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-between bg-[#D9D9D9]'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </>
  )
}

export default App
