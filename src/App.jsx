// import './App.css'
// import Header from './components/Header'
// import AdvanceRequest from './pages/AdvanceRequest'
// import Emergency from './pages/Emergency'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Registration from './pages/Registration'
// import Search from './pages/Search'

// function App() {


//   return (
//   <>
//   <Header/>
//   <Home/>
//   <Search/>
// <Emergency/>
// <AdvanceRequest/>
// <Login/>
// <Registration/>
//   </>
//   )
// }

// export default App

import './App.css'
import { Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Search from './pages/Search'
import Emergency from './pages/Emergency'
import AdvanceRequest from './pages/AdvanceRequest'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Profile from './pages/Profile'   // ✅ Profile page

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/advance-request" element={<AdvanceRequest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {/* ✅ USER PROFILE */}
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;







