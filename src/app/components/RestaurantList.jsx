import RestaurantCard from "./RestaurantCard";

export default function RestaurantList() {
  return (
    <div className="col-md-9 col-sm-12 col-lg-9">
      <div className="restorans-list">
        <div className="restorans-title">
          <h3>Order food online in London</h3>
        </div>

        <div className="restorans-wrap">
          <div className="row mrg20">
            
            {/* STATIC CARDS AS TEMPLATE */}
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />

          </div>
        </div>
      </div>
    </div>
  );
}
