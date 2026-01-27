import { ThemeProvider } from "./components/theme-provider"
import './i18n';
import { Header } from "./components/layout/header"
import { Hero } from "./components/sections/hero"
import { About } from "./components/sections/about"
import { Services } from "./components/sections/services"
import { Skills } from "./components/sections/skills"
import { Experience } from "./components/sections/experience"
import { Projects } from "./components/sections/projects"
import { Testimonials } from "./components/sections/testimonials"
import { Contact } from "./components/sections/contact"
import { Footer } from "./components/sections/footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">

        <Header />

        <main className="flex flex-col gap-0 pt-16">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </main>

        <Footer />

      </div>
    </ThemeProvider>
  )
}

export default App
