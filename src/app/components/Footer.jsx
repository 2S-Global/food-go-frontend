"use client";

const Footer = () => {
  return (
    <>
  <footer>
    <div className="block top-padd80 bottom-padd80 dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12">
            <div className="footer-data">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div
                    className="widget about_widget wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="logo">
                      <h1 itemProp="headline">
                        <a href="#" title="Home" itemProp="url">
                          <img
                            src="/assets/images/logo.png"
                            alt="logo.png"
                            itemProp="image"
                          />
                        </a>
                      </h1>
                    </div>
                    <p itemProp="description">
                      Food Ordering is a Premium HTML Template. Best choice for
                      your online store. Let purchase it to enjoy now
                    </p>
                    <div className="social2">
                      <a
                        className="brd-rd50"
                        href="#"
                        title="Facebook"
                        itemProp="url"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                      <a
                        className="brd-rd50"
                        href="#"
                        title="Google Plus"
                        itemProp="url"
                        target="_blank"
                      >
                        <i className="fa fa-google-plus" />
                      </a>
                      <a
                        className="brd-rd50"
                        href="#"
                        title="Twitter"
                        itemProp="url"
                        target="_blank"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                      <a
                        className="brd-rd50"
                        href="#"
                        title="Pinterest"
                        itemProp="url"
                        target="_blank"
                      >
                        <i className="fa fa-pinterest" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div
                    className="widget information_links wow fadeIn"
                    data-wow-delay="0.2s"
                  >
                    <h4 className="widget-title" itemProp="headline">
                      INFORMATION
                    </h4>
                    <ul>
                      <li>
                        <a href="#" title="" itemProp="url">
                          Careers
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemProp="url">
                          Investor Relations
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemProp="url">
                          Press Releases
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemProp="url">
                          Shop with Points
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemProp="url">
                          More Branches
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div
                    className="widget customer_care wow fadeIn"
                    data-wow-delay="0.3s"
                  >
                    <h4 className="widget-title" itemProp="headline">
                      CUSTOMER CARE
                    </h4>
                    <ul>
                      <li>
                        <a href="#" title="" itemProp="url">
                          Returns
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemProp="url">
                          Shipping Info
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemProp="url">
                          Gift Cards
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemProp="url">
                          Size Guide
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemProp="url">
                          Money Back
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div
                    className="widget get_in_touch wow fadeIn"
                    data-wow-delay="0.4s"
                  >
                    <h4 className="widget-title" itemProp="headline">
                      GET IN TOUCH
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-map-marker" /> 123 New Design Str,
                        ABC Building, melbourne, Australia.
                      </li>
                      <li>
                        <i className="fa fa-phone" /> (0044) 8647 1234 587
                      </li>
                      <li>
                        <i className="fa fa-envelope" />
                        <a href="#" title="" itemProp="url">
                          hello@yourdomain.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Data */}
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="bottom-bar dark-bg text-center">
    <div className="container">
      <p itemProp="description">
        � 2021
        <a
          className="red-clr"
          href="http://webinane.com/"
          title="Webinane"
          itemProp="url"
          target="_blank"
        >
          WEBINANE
        </a>
        . All Rights Reserved
      </p>
    </div>
  </div>
</>

  );
}

export default Footer;