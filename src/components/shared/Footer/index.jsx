import "../../../App.css";
const Footer = () => {
  return (
    <div className="  mt-5">
      <div className="mt-5 d-flex flex-column align-items-center justify-content-between  bg-white mb-2 p-2">
        <div className="  row w-100 m-2">
          <div className="col-sm-12 text-center">
            <div className="text-dark order-2 order-md-1">
              <span className="text-muted font-weight-bold mr-2">2022©</span>
              <a href="/" target="_blank" className="footerlink">
                Aquatic Xpress Shipping
              </a>
              <span className="text-muted font-weight-bold mr-2">
                - Developed by
              </span>
              <a
                href="https://mercurysols.org/"
                target="_blank"
                className="footerlink"
              >
                Mercurysols
              </a>
            </div>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-sm-12 text-center">
            <div className="text-dark order-2 order-md-1">
              <a
                target="_blank"
                className="footerlink"
                href="/home/PrivacyPolicy"
              >
                Privacy Policy
              </a>
              -
              <a
                target="_blank"
                className="footerlink"
                href="/home/TermsAndConditions"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
