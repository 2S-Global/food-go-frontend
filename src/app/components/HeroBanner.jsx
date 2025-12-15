"use client";
import Link from "next/link";

const HeroBanner = () =>{
  
return(
    <section>
  <div className="block">
    <div
      style={{ backgroundImage: "url(assets/images/group-2.jpg)" }}
      className="fixed-bg"
    />
    <div className="restaurant-searching text-center">
      <div className="restaurant-searching-inner">
        <h2 itemProp="headline">
          Order <span>Food Online From</span> the Best Restaurants
        </h2>
        <form className="restaurant-search-form brd-rd2">
          <div className="row mrg10">
            <div className="col-md-6 col-sm-5 col-lg-5 col-xs-12">
              <div className="input-field brd-rd2">
                <input
                  className="brd-rd2"
                  type="text"
                  placeholder="Restaurant Name"
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xs-12">
              <div className="input-field brd-rd2">
                <i className="fa fa-map-marker" />
                <input
                  className="brd-rd2"
                  type="text"
                  placeholder="Search Location"
                />
                <i className="fa fa-location-arrow" />
              </div>
            </div>
            <div className="col-md-2 col-sm-3 col-lg-3 col-xs-12">
              <button className="brd-rd2 red-bg" type="submit">
                SEARCH
              </button>
            </div>
          </div>
        </form>
        <div className="funfacts">
          <div className="col-md-3 col-sm-6 col-lg-3">
            <div className="fact-box">
              <i className="brd-rd50">
                <img
                  src="assets/images/fact-icon1.png"
                  alt="fact-icon1"
                  itemProp="image"
                />
              </i>
              <div className="fact-inner">
                <strong>
                  <span className="counter">137</span>
                </strong>
                <h5>Restaurant</h5>
              </div>
            </div>
            {/* Fact Box */}
          </div>
          <div className="col-md-3 col-sm-6 col-lg-3">
            <div className="fact-box">
              <i className="brd-rd50">
                <img
                  src="assets/images/fact-icon2.png"
                  alt="fact-icon2"
                  itemProp="image"
                />
              </i>
              <div className="fact-inner">
                <strong>
                  <span className="counter">158</span>
                </strong>
                <h5>People Served</h5>
              </div>
            </div>
            {/* Fact Box */}
          </div>
          <div className="col-md-3 col-sm-6 col-lg-3">
            <div className="fact-box">
              <i className="brd-rd50">
                <img
                  src="assets/images/fact-icon3.png"
                  alt="fact-icon3"
                  itemProp="image"
                />
              </i>
              <div className="fact-inner">
                <strong>
                  <span className="counter">659</span>K
                </strong>
                <h5>Happy Service</h5>
              </div>
            </div>
            {/* Fact Box */}
          </div>
          <div className="col-md-3 col-sm-6 col-lg-3">
            <div className="fact-box">
              <i className="brd-rd50">
                <img
                  src="assets/images/fact-icon4.png"
                  alt="fact-icon4"
                  itemProp="image"
                />
              </i>
              <div className="fact-inner">
                <strong>
                  <span className="counter">235</span>
                </strong>
                <h5>Regular users</h5>
              </div>
            </div>
            {/* Fact Box */}
          </div>
        </div>
        {/* Fun Facts */}
      </div>
      <img
        className="left-scooty-mockup"
        src="assets/images/restaurant-mockup1.png"
        alt="restaurant-mockup1.png"
        itemProp="image"
      />
      <img
        className="bottom-clouds-mockup"
        src="assets/images/clouds.png"
        alt="clouds.png"
        itemProp="image"
      />
    </div>
    {/* Restaurant Searching */}
  </div>
</section>

)

}

export default HeroBanner;