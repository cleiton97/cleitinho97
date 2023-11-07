import Banner from "./componetes/Banner";
import Courses from "./componetes/Courses";
import Footer from "./componetes/Footer";
import Header from "./componetes/Header";



export const revalidate=0
export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Courses/>
      <Footer/>
      
    </div>


  )
}