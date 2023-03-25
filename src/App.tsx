//libraries import

import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

// components import
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

// pages import
import BookListPage from './pages/BookListPage'
import BookPage from './pages/BookPage'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { RootState } from './redux/store'

function App() {
  const user = useSelector((state: RootState) => state.user.currentUser)
  console.log(user)

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* //protected routes */}
        {user && (
          <>
            <Route path="/bookListPage" element={<BookListPage />} />
            <Route path="/book/:id" element={<BookPage />} />
            <Route path="/cart" element={<CartPage />} />
          </>
        )}
        {/* //error route */}
        <Route path="/*" element={<div className="errorPage">No such link found. 404 Error</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
