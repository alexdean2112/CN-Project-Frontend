import twitLogob from '../components/images'
import faceLogob from '../components/images'
import instaLogob from '../components/images'
import barrybee from '../components/images'

const BeesFooter = () => {
    return (
        <div>
            <div className="BarryBee"><img src={barrybee}/></div>

            <div className="BeesFooter">
                <div className="FooterCards">
                    <div className="FooterLinks">
                        <div className="BeesLinksTitle"><u><strong>The Bee's Keys</strong></u></div>
                        <div className="BeesLinks2">
                        <div>About Us</div>
                        <div>Why The Bee's Knees?</div>
                        <div>Discord</div>
                        <div>Careers</div>
                    </div>
                </div>
                <div className="BeesServices">
                    <div className="BeesHelpTitle"><u><strong>Cat Services</strong></u></div>
                    <div className="BeesHelp2">
                        <div>API</div>
                        <div>Sell on The Bee's Knees</div>
                        <div>FAQ</div>
                    </div>
                </div>
                <div className="BeesUser">
                    <div className="BeesUserTitle"><u><strong>Information</strong></u></div>
                    <div className="BeesUser2">
                    <div>T's and C's</div>
                    <div>Privacy Policy</div>
                    <div>Contact</div>
                    </div>
                </div>
                <div className="BeesSocials">
                    <div className="twitLogo"><img src={twitLogob} alt="twitter logo"></img></div>
                    <div className="faceLogo"><img src={faceLogob} alt="facebook logo"></img></div>
                    <div className="instaLogo"><img src={instaLogob} alt="instagram logo"></img></div>
                </div>
                </div>
            </div>
            <div className="Copyright">© 2022 thebeesknees.net. All Rights Reserved</div>
            <div className="Protections">This site is protected by reCAPTCHA and Joe Mama's Privacy Policy</div>
        </div>
    )
}

export default BeesFooter;
