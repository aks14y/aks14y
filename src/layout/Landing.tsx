import AboutMe from "@/components/AboutMe"
import Footer from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Container } from "@nextui-org/react"

const Landing = () => {
  return (
    <Container>
      <Navbar />
      <AboutMe />
      <Footer/> 
    </Container>
  )
}

export default Landing