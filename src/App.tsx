//libraries import

import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { RootState } from './redux/store'


import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import HomePage from './pages/homePage/HomePage'

const AppStyles = {
  maxWidth:"100%",
  minHeight:"100vh",
  backgroundColor:"#242424",
  
}

function App() {
  const user = useSelector((state: RootState) => state.user.currentUser)
  console.log(user)

  return (
    <div className='App' style={AppStyles}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
