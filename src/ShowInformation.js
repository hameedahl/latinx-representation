import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { showInformation, shows } from './informationObj.js';
import Footer from "./Footer.js";

const ShowInformation = () => {
    const { show } = useParams();
    return (
        <div id="showInfo" style={{backgroundColor: `${showInformation[show].color}`}}>
            <div className="header" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${showInformation[show].background})`}}>
                <h1>{`${showInformation[show].name} (${showInformation[show].year})`}</h1>
            </div>
            <div className="content">
                <h2>Summary</h2><br />
                <div className="summary">
                    <div className="sumPoster"><img src={`${process.env.PUBLIC_URL}/images/${showInformation[show].poster}`} alt="" /></div> 
                    <div className="sumText">{showInformation[show].summary}<br /></div>
                </div>
                <h2>Historical Context</h2> <br />
                {showInformation[show].context}<br/>
                <div className="buttons">
                    <Link to="/"><button style={{backgroundColor: `${showInformation[show].buttonColor}`}}>◄ Back to Timeline</button></Link>
                    <Link to={`/show-player/${show}`}><button style={{backgroundColor: `${showInformation[show].buttonColor}`}}>Watch Clips 📺</button></Link>
                    <Link to={`/show-information/${shows[(parseInt(showInformation[show].id) + 1) % 5].link}`}><button style={{backgroundColor: `${showInformation[show].buttonColor}`}}>Next Show ►</button></Link>  
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default ShowInformation;