export default function SidebarFilters() {
  return (
    <div className="sidebar left">
      <div className="widget style2 Search_filters wow fadeIn">
        <h4 className="widget-title2 sudo-bg-red">Search Filters</h4>
        <div className="widget-data">
          <ul>
            <li><a href="#">Fast Food</a> <span>30</span></li>
            <li><a href="#">North Indian</a> <span>28</span></li>
            <li><a href="#">Chinese</a> <span>25</span></li>
            <li><a href="#">Bakery</a> <span>11</span></li>
            <li><a href="#">Mughlai</a> <span>7</span></li>
            <li><a href="#">Pizza</a> <span>6</span></li>
            <li><a href="#">Ice Cream</a> <span>6</span></li>
            <li><a href="#">Rolls</a> <span>6</span></li>
            <li><a href="#">Cafe</a> <span>5</span></li>
            <li><a href="#">Italian</a> <span>5</span></li>
          </ul>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="widget style2 quick_filters wow fadeIn">
        <h4 className="widget-title2 sudo-bg-red">Quick Filters</h4>
        <div className="widget-data">
          <ul>
            <li><span className="radio-box"><input type="radio" name="filter" id="f1" /><label htmlFor="f1">Promotions</label></span></li>
            <li><span className="radio-box"><input type="radio" name="filter" id="f2" /><label htmlFor="f2">Bookmarked</label></span></li>
            <li><span className="radio-box"><input type="radio" name="filter" id="f3" /><label htmlFor="f3">Pure veg</label></span></li>
            <li><span className="radio-box"><input type="radio" name="filter" id="f4" /><label htmlFor="f4">Free Delivery</label></span></li>
            <li><span className="radio-box"><input type="radio" name="filter" id="f5" /><label htmlFor="f5">Online Payments</label></span></li>
          </ul>
        </div>
      </div>

      {/* Price Filters */}
      <div className="widget style2 quick_filters wow fadeIn">
        <h4 className="widget-title2 sudo-bg-red">Quick Filters</h4>
        <div className="widget-data">
          <ul>
            <li><span className="radio-box"><input type="radio" name="filter2" id="p1" /><label htmlFor="p1">No minimum order</label></span></li>
            <li><span className="radio-box"><input type="radio" name="filter2" id="p2" /><label htmlFor="p2">Up to ₹150</label></span></li>
            <li><span className="radio-box"><input type="radio" name="filter2" id="p3" /><label htmlFor="p3">Up to ₹250</label></span></li>
            <li><span className="radio-box"><input type="radio" name="filter2" id="p4" /><label htmlFor="p4">Up to ₹500</label></span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
