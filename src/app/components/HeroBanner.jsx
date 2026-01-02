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
          A <span>Taste of Home,</span> Delivered to Your Doorstep.
        </h2>
        
        <div className="funfacts">
          <div className="col-md-3 col-sm-6 col-lg-3">
            <div className="fact-box">
              <i className="brd-rd50">
                <img
                  src="/assets/images/menu_icon.png"
                  alt="menu_icon"
                  itemProp="image"
                />
              </i>
              <div className="fact-inner">
                <strong>
                  <span className="counter">28</span>
                </strong>
                <h5>Menu Sets</h5>
              </div>
            </div>
            {/* Fact Box */}
          </div>
          <div className="col-md-3 col-sm-6 col-lg-3">
            <div className="fact-box">
              <i className="brd-rd50">
                <img
                  src="/assets/images/veg_icon.png"
                  alt="veg_icon"
                  itemProp="image"
                />
              </i>
              <div className="fact-inner">
                <strong>
                  <span className="counter">14</span>
                </strong>
                <h5>Veg Menu</h5>
              </div>
            </div>
            {/* Fact Box */}
          </div>
          <div className="col-md-3 col-sm-6 col-lg-3">
            <div className="fact-box">
              <i className="brd-rd50">
                <img
                  src="/assets/images/nonveg_icon.png"
                  alt="nonveg_icon"
                  itemProp="image"
                />
              </i>
              <div className="fact-inner">
                <strong>
                  <span className="counter">14</span>
                </strong>
                <h5>Non-Veg Menus</h5>
              </div>
            </div>
            {/* Fact Box */}
          </div>
          <div className="col-md-3 col-sm-6 col-lg-3">
            <div className="fact-box">
              <i className="brd-rd50">
                <img
                  src="/assets/images/customer_icon.png"
                  alt="customer_icon"
                  itemProp="image"
                />
              </i>
              <div className="fact-inner">
                <strong>
                  <span className="counter">2</span>K
                </strong>
                <h5>Customers</h5>
              </div>
            </div>
            {/* Fact Box */}
          </div>
        </div>
        {/* Fun Facts */}
      </div>
      <img
        className="left-scooty-mockup"
        src="/assets/images/restaurant-mockup1.png"
        alt="restaurant-mockup1.png"
        itemProp="image"
      />
      <img
        className="bottom-clouds-mockup"
        src="/assets/images/clouds.png"
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