import { MdFacebook } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./index.css";

export const SocialMedia = () => {
  return (
    <ul className="social-media list-unstyled d-flex gap-3">
      <li>
        <a href="/">
          <MdFacebook className="icon" />
        </a>
      </li>
      <li>
        <a href="/">
          <AiOutlineTwitter className="icon" />
        </a>
      </li>
      <li>
        <a href="/">
          <FaYoutube className="icon" />
        </a>
      </li>
      <li>
        <a href="/">
          <RiInstagramFill className="icon" />
        </a>
      </li>
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h2 className="fw-bold mb-4">Contact the Publisher</h2>
            <p className="mb-2">mike@runo.com</p>
            <p>+944 450 904 505</p>
          </div>

          <div className="col-md-3">
            <h2 className="fw-bold mb-4">Explorate</h2>
            <p>About</p>
            <p>Partners</p>
            <p>Job Opportunities</p>
            <p>Advertise</p>
            <p>Membership</p>
          </div>

          <div className="col-md-3">
            <h2 className="fw-bold mb-4">Headquarter</h2>
            <p className="mb-0">
              191 Middleville Road, NY 1001, Sydney Australia
            </p>
          </div>

          <div className="col-md-3">
            <h2 className="fw-bold mb-4">Connections</h2>
            <SocialMedia />
          </div>
        </div>
      </div>

      <div className="bottom-section py-3 bg-secondary">
        <div className="container d-flex justify-content-between">
          <p className="mb-0 fs-6">2021 | Healthy Bonding Publisher Studio</p>
          <p className="mb-0 fw-bold">Subscribe Now</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
