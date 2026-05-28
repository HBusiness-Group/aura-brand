import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from '@components/layout/Layout'
import Home from '@pages/Home'
import Collection from '@pages/Collection'
import Story from '@pages/Story'
import Contact from '@pages/Contact'

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/story"      element={<Story />} />
            <Route path="/contact"    element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  )
}
