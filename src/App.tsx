

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllNotes from './components/AllNotes'
import UpdateNote from './components/UpdateNotes'
import Header from './components/Header'
import SaveNote from './components/SaveNote'
import NotFound from './components/NotFound'

function App() {
  

  return (
      <BrowserRouter>
    
      
      <Header/>
        <div className="flex-1 w-full p-10">
      <Routes>

        <Route path="/" element={<AllNotes/>}/>
        <Route path="/notes" element={<AllNotes/>}/>
        <Route path="/new-note" element={<SaveNote/>}/>
        <Route path="/notes/:id" element={<UpdateNote/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
        </div>
      

      
      
      </BrowserRouter>
  )
}

export default App
