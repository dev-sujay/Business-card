import Footer from "./components/footer";
import Header from "./components/header";
import Article from "./components/article";
import Profile from "./components/profile";
import Btns from "./components/btns";
import './index.css'

export default function App() {
  return (
    <div className="container">
      <Profile />
      <section className="desc">
        <Header />
        <Btns />
        <Article />
      <Footer />
      </section>
    </div>

  )
}