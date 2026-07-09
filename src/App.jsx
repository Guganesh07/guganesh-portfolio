import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Credentials from './components/Credentials.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


export default function App() {
  const [openProjectId, setOpenProjectId] = useState(null)

  const openProject = (id) => {
    setOpenProjectId(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeProject = () => {
    setOpenProjectId(null)
    requestAnimationFrame(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <div className="site">
      
      <Navbar />
      <main>
        {openProjectId ? (
          <ProjectDetail projectId={openProjectId} onBack={closeProject} />
        ) : (
          <>
            <Home />
            <About />
            <Credentials />
            <Skills />
            <Projects onOpenProject={openProject} />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
