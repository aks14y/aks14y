import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Landing from "@/layout/Landing";

const Home = () => {
  return (
    <div style={{backgroundColor : "#f7fcff"}}>
      <Navbar/>
      <Landing/>
      <Footer/> 
    </div>
  );
}

export default Home;