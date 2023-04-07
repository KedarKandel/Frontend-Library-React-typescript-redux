//libraries import
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

// import from redux
import { RootState, AppDispatch } from './redux/store'
import { fetchBooksThunk } from './redux/reducers/bookSlice'

// import of components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import HomePage from './pages/homePage/HomePage'

function App() {
  const user = useSelector((state: RootState) => state.user.currentUser)
  const dispatch = useDispatch<AppDispatch>()

  //render books when the app loads for the first time
  useEffect(() => {
    dispatch(fetchBooksThunk())
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
