import twitLogob from "../assets/twitlogob.png";
import faceLogob from "../assets/facelogob.png";
import instaLogob from "../assets/instalogob.png";
import barrybee from "../assets/barrybee.png";
import "../componentstyles/Footer.css";

const Footer = () => {
  return (
    <footer className="FooterFull">
      <div className="wrapper_footer_top">
        <div className="BarryBee footer_card">
          <img
            className="barrybeeimage"
            src={barrybee}
            alt="Barry B. Benson from A Bee Movie"
          />
        </div>
        <div className="BeesLinks footer_card">
          <div className="BeesLinksTitle">
            <u>
              <strong>The Bee's Keys</strong>
            </u>
          </div>
          <div className="BeesLinks2">
            <div>About Us</div>
            <div>Why The Bee's Knees?</div>
            <div>Discord</div>
            <div>Careers</div>
          </div>
        </div>
        <div className="BeesServices footer_card">
          <div className="BeesHelpTitle">
            <u>
              <strong>Bee's Services</strong>
            </u>
          </div>
          <div className="BeesHelp2">
            <div>API</div>
            <div>Sell on The Bee's Knees</div>
            <div>FAQ</div>
          </div>
        </div>
        <div className="BeesUser footer_card">
          <div className="BeesUserTitle">
            <u>
              <strong>Information</strong>
            </u>
          </div>
          <div className="BeesUser2">
            <div>T's and C's</div>
            <div>Privacy Policy</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="BeesSocials footer_card">
          <div className="twitLogo">
            <img src={twitLogob} alt="twitter logo"></img>
          </div>
          <div className="faceLogo">
            <img src={faceLogob} alt="facebook logo"></img>
          </div>
          <div className="instaLogo">
            <img src={instaLogob} alt="instagram logo"></img>
          </div>
        </div>
      </div>
      <div className="wrapper_footer_bottom">
        <div className="Copyright">
          © 2022 thebeesknees.net. All Rights Reserved
        </div>
        <div className="Protections">
          This site is protected by reCAPTCHA and Joe Mama's Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
