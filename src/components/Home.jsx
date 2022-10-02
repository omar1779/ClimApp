import Nav from "./Nav.jsx"
import Cards from "./Cards.jsx"
import "./Home.css"
import Footer from "./Footer.jsx"
export default function Home ({onSearch,cities , onClose}) {
    return(
    <div className="home">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose}
        />
        {cities.length === 0 && <Footer/> }
    </div>
    )
}