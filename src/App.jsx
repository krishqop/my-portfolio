import React, { Suspense } from 'react'
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Qualification = React.lazy(() => import('./components/Qualification'));
const Project = React.lazy(() => import('./components/Project'));
const Navigation = React.lazy(() => import('./components/Navigation'));
const Contact = React.lazy(() => import('./components/Contact'));


import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>

    <Suspense fallback={<div>Loding portfolio...</div>}>
    
    <Navigation/>
    
        {/* <Link to={'/'}>Home</Link>{"  "}
        <Link to={'/about'}>About</Link>{"  "}
        <Link to={'/qualification'}>Qualification</Link>{"  "}
        <Link to={'/project'}>Project</Link>{"  "} */}
        {/* <Link to={'/Navigation'}>Navigation</Link>{"  "} */}

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/qualification' element={<Qualification/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/Contact' element={<Contact/>}/>

        </Routes>
    </Suspense>

    </BrowserRouter>
    </>
  )
}

export default App