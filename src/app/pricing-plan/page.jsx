import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Pricing Plan",
};

export default function PricingPlanPage() {
  return (
    <>
      <PageBanner
        title="Pricing Plan"
        subtitle="A Greate Restaurant Website"
        background="/assets/images/topbg.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          // { label: "Search", href: "/restaurants#restaurants-search-banner" },
          { label: "Price Table" },
        ]}
      />
      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="sec-box">
                  <div className="row">
                    {/* Price Box 1 */}
                    <div className="col-md-4 col-sm-6 col-lg-4">
                      <div
                        className="price-box brd-rd12 text-center active wow fadeIn"
                        data-wow-delay="0.2s"
                        style={{ backgroundImage: "url(/assets/images/price-bg.png)" }}
                      >
                        <div className="price-header">
                          <h1 itemProp="headline">
                            <sup>$</sup>99
                          </h1>
                          <h6 itemProp="headline">MONTHLY</h6>
                          <h3 itemProp="headline">Standard</h3>
                        </div>

                        <ul className="price-body">
                          <li>1 Hosting</li>
                          <li>2Gb Storage</li>
                          <li>1 PSD</li>
                          <li>1 WP Installation</li>
                          <li>1 Domain</li>
                          <li>1Gb Bandwidth</li>
                        </ul>

                        <a className="brd-rd4" href="#" itemProp="url">
                          LEARN MORE
                        </a>
                      </div>
                    </div>

                    {/* Price Box 2 */}
                    <div className="col-md-4 col-sm-6 col-lg-4">
                      <div
                        className="price-box text-center wow fadeIn"
                        data-wow-delay="0.4s"
                        style={{ backgroundImage: "url(/assets/images/price-bg.png)" }}
                      >
                        <div className="price-header">
                          <h1 itemProp="headline">
                            <sup>$</sup>99
                          </h1>
                          <h6 itemProp="headline">MONTHLY</h6>
                          <h3 itemProp="headline">Standard</h3>
                        </div>

                        <ul className="price-body">
                          <li>1 Hosting</li>
                          <li>2Gb Storage</li>
                          <li>1 PSD</li>
                          <li>1 WP Installation</li>
                          <li>1 Domain</li>
                          <li>1Gb Bandwidth</li>
                        </ul>

                        <a className="brd-rd4" href="#" itemProp="url">
                          LEARN MORE
                        </a>
                      </div>
                    </div>

                    {/* Price Box 3 */}
                    <div className="col-md-4 col-sm-6 col-lg-4">
                      <div
                        className="price-box text-center wow fadeIn"
                        data-wow-delay="0.6s"
                        style={{ backgroundImage: "url(/assets/images/price-bg.png)" }}
                      >
                        <div className="price-header">
                          <h1 itemProp="headline">
                            <sup>$</sup>99
                          </h1>
                          <h6 itemProp="headline">MONTHLY</h6>
                          <h3 itemProp="headline">Standard</h3>
                        </div>

                        <ul className="price-body">
                          <li>1 Hosting</li>
                          <li>2Gb Storage</li>
                          <li>1 PSD</li>
                          <li>1 WP Installation</li>
                          <li>1 Domain</li>
                          <li>1Gb Bandwidth</li>
                        </ul>

                        <a className="brd-rd4" href="#" itemProp="url">
                          LEARN MORE
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* row end */}
                </div>
                {/* sec-box */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
