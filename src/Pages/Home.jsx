import Header from "../components/Header";
import Banner from "../components/Banner";
import Courses from "../components/Courses";
import Topers from "../components/Topers"
import Testimoneals from "../components/Testimoneals"
import OurTeam from "../components/OurTeam"
import About from "../components/AboutUs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home(){
    return(
        <div>
            <Header/>
            <Banner/>
            <Courses/>
            <Topers/>
            <Testimoneals/>
            <OurTeam/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
}; 