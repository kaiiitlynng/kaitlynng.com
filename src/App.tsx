import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Placeholder label="About" />} />
        <Route path="/more" element={<Placeholder label="&more" />} />
      </Route>
    </Routes>
  )
}
