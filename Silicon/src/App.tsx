import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function App() {
  const theme = useContext(ThemeContext);
  if (!theme) return ;
  console.log('the,e', theme);
  return (
    <>
      <div className={`h-screen w-screen flex flex-col justify-between ${theme.mode.background}`}>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </>
  )
}

export default App
