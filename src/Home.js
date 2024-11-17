import Footer from "./Footer";
import Timeline from "./Timeline";

const Home = () => {
    return (
        <div className="home">
            <div className="header" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/background13.jpg)`}}>
                <h1>The Evolution of Latina/o/x Representation in American Sitcoms</h1>
            </div>
            <div className="content">
                <p>Since the early 50s, when televisions became a staple in American homes, the 
                   government and show producers used it as a medium to establish what being American 
                   looks and sounds like. By analyzing episodes and discourse around these shows, 
                   this project will explore the evolution of Latinx representation in American 
                   sitcoms as well as the mannerisms and ideologies producers aimed to instill.
                </p><br/>
                <p style={{color: "#ff6a00"}}>Click on the below years to explore the shows this project tracks:</p>         
            </div>
            <Timeline></Timeline>
            <div className="content" style={{textAlign:"center"}}>
                <h2 style={{color: "#DB4377"}}>Why It Matters</h2><br />
                <p style={{margin:"auto", width:"65%"}}>
                    <em style={{color: "#ff6a00"}}>"What ends up on the screens in front of us has a profound impact on 
                    our sense of belonging and the belonging of other groups in our communities 
                    and nation (Bèltran 7)."</em>
                </p>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Home;