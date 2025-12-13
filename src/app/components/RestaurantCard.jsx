import Link from "next/link";

export default function RestaurantCard({
  img,
  title,
  address,
  foodTypes = ["Apple Juice", "BB.Q"],
  minOrder = "$50",
  deliveryTime = "30min",
  payment = "Accepts cash & online payments",
  rating = "4.25",
  likes = "12",
  delay = "0.2s",
  slug, // <-- new prop for routing
}) {
  return (
    <div
      className="featured-restaurant-box with-bg style2 brd-rd12 wow fadeIn"
      data-wow-delay={delay}
    >
      <div className="featured-restaurant-thumb">
        <a href="#" title="">
          <img src={img} alt={title} />
        </a>
      </div>

      <div className="featured-restaurant-info">
        <span className="red-clr">{address}</span>

        <h4>
          <a href="#" title="">{title}</a>
        </h4>

        <span className="food-types">
          Type of food:{" "}
          {foodTypes.map((item, i) => (
            <a key={i} href="#" title="">{item}</a>
          ))}
        </span>

        <ul className="post-meta">
          <li><i className="fa fa-check-circle-o"></i> Min order {minOrder}</li>
          <li><i className="flaticon-transport"></i> {deliveryTime}</li>
          <li><i className="flaticon-money"></i> {payment}</li>
        </ul>

        <span className="post-rate yellow-bg brd-rd2">
          <i className="fa fa-star-o"></i> {rating}
        </span>

        <span className="post-likes style2 red-clr">
          <i className="fa fa-heart-o"></i> {likes}
        </span>

        {/* Updated button for routing */}
        <Link
          href={`/restaurants/${slug}`}
          className="brd-rd30"
          title="Order Online"
        >
          <i className="fa fa-angle-double-right"></i> Order Online
        </Link>
      </div>
    </div>
  );
}
