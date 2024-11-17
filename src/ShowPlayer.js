import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { showplayer } from './clipsObj.js';
import { showInformation, shows } from './informationObj.js';
import Footer from "./Footer.js";

const ShowPlayer = () => {
    const { show } = useParams();
    var clipCount = 0;
    return (
        <div id="showplayer" style={{backgroundColor: `${showInformation[show].color}`}}>
            <div className="header" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${showInformation[show].background})`}}>
                <h1>{`${showplayer[show].name} (${showInformation[show].year})`}</h1>
            </div>
            <div className="content">
                { showplayer[show].episodes.map((episode) => {
                    return (
                        <div className="episodeContent">
                            <div className="episode">
                                <h2 className="">{episode.title} - Season {episode.season} Episode {episode.episode}</h2><br />
                                <p>{episode.context}</p><br />
                            </div>
                            <div className="clips">
                            {episode.clips.map((clip) => {
                                clipCount++;
                                return (
                                    <div className="clip">
                                        <div className="clipHeader">
                                            <h3>Clip #{clipCount} ({clip.timestamp})</h3>
                                            <p className="clipTitle">{clip.context}</p><br />
                                        </div>
                                        <div className="videoContent">
                                            <video src={`${process.env.PUBLIC_URL}/${clip.clip}`} controls>
                                            Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="highlights">
                                            <h3>Highlights</h3>
                                            <ul className="clipPoints">
                                                {clip.points.map((point) => {
                                                    return (<li>{point}</li>);
                                                })}
                                            </ul>
                                        </div>
                                </div>)
                            })}
                            </div>
                        </div>  
                    ); 
                })}
                <div className="clipAnalysis">
                    <h3>Overall Analysis</h3><br/>
                    {showplayer[show].analysis}
                </div>
            </div>
            <div className="buttons">
                <Link to="/"><button style={{backgroundColor: `${showInformation[show].buttonColor}`}}>◄ Back to Timeline</button></Link>
                <Link to={`/show-information/${shows[(parseInt(showInformation[show].id) + 1) % 5].link}`}><button style={{backgroundColor: `${showInformation[show].buttonColor}`}}>Next Show ►</button></Link>  
            </div>
            <Footer/>
        </div>
    );
}
 
export default ShowPlayer;