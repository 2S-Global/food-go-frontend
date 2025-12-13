// src/app/restaurants/[slug]/page.jsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import restaurants from "@/app/data/restaurantData";
import PageBanner from "@/app/components/PageBanner";
import BreadCrumbs from "@/app/components/Breadcrumbs";

export default function RestaurantDetailsPage() {
  const params = useParams();
  const slug = params?.slug;
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("menu");

  const restaurant = restaurants.find((r) => r.slug === slug);

  // Embla carousel for main gallery + thumbnails
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [thumbRef, thumbApi] = useEmblaCarousel({ containScroll: "trimSnaps", dragFree: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    // set initial
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  if (!restaurant) {
    return (
      <div className="container text-center py-20">
        <h2 className="text-3xl mb-4">Restaurant not found</h2>
        <button
          onClick={() => router.push("/restaurants")}
          className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Back to Restaurants
        </button>
      </div>
    );
  }

  return (
    <>
      <PageBanner title={restaurant.title} background="/assets/images/topbg.jpg" showSearchForm={false} />
      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Restaurants", href: "/restaurants" },
          { label: restaurant.title },
        ]}
      />

      <section>
        <div className="block gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="sec-box">
                  <div className="sec-wrapper">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="restaurant-detail-wrapper">
                          <div className="restaurant-detail-info">
                            <div className="restaurant-detail-thumb">
                              <div className="embla" ref={emblaRef}>
                                <div className="embla__container">
                                  {restaurant.gallery?.map((img, i) => (
                                    <div className="embla__slide" key={i}>
                                      <img
                                        className="brd-rd3"
                                        src={img}
                                        alt={`${restaurant.title} ${i + 1}`}
                                        itemProp="image"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="restaurant-detail-thumb-carousel" ref={thumbRef} style={{ marginTop: 12 }}>
                                {restaurant.gallery?.map((img, i) => (
                                  <button
                                    key={`thumb-${i}`}
                                    type="button"
                                    className={`thumb-item ${i === selectedIndex ? "is-selected" : ""}`}
                                    onClick={() => emblaApi?.scrollTo(i)}
                                    style={{ border: 'none', background: 'transparent', padding: 4 }}
                                  >
                                    <img
                                      className="brd-rd3"
                                      src={img}
                                      alt={`thumb-${i}`}
                                      itemProp="image"
                                      style={{ width: 80, height: 60, objectFit: 'cover' }}
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="restaurant-detail-title">
                              <h1 itemProp="headline">{restaurant.title}</h1>
                              <div className="info-meta">
                                <span>{restaurant.location || restaurant.address}</span>
                                <span>
                                  {restaurant.categories?.map((cat, i) => (
                                    <span key={i}>
                                      <a href="#" title="" itemProp="url">
                                        {cat}
                                      </a>
                                      {i < (restaurant.categories?.length || 0) - 1 ? ", " : ""}
                                    </span>
                                  ))}
                                </span>
                              </div>

                              <div className="rating-wrapper">
                                <a className="gradient-brd brd-rd2" href="#" title="" itemProp="url">
                                  <i className="fa fa-star" /> Rate <i>{restaurant.rating || "-"}</i>
                                </a>
                                <div className="rate-share brd-rd5">
                                  <div className="rating-box-wrapper">
                                    <span>Rate</span>
                                    <div className="rating-box">
                                      {Array.from({ length: 8 }).map((_, idx) => (
                                        <span key={idx} className={`brd-rd2 clr${idx + 1} ${idx < Math.round(restaurant.rating || 0) ? "on" : "off"}`} />
                                      ))}
                                      <i>{restaurant.rating || "-"}</i>
                                    </div>
                                  </div>
                                  <div className="share-wrapper">
                                    <div className="fb-share">
                                      <label className="switch">
                                        <input type="checkbox" />
                                        <span className="switch-slider brd-rd30" />
                                      </label>
                                      <a className="facebook brd-rd2" href="#" title="" itemProp="url">
                                        <i className="fa fa-facebook-square" /> Share on Facebook
                                      </a>
                                    </div>
                                    <div className="fb-share">
                                      <label className="switch">
                                        <input type="checkbox" />
                                        <span className="switch-slider brd-rd30" />
                                      </label>
                                      <a className="twitter brd-rd2" href="#" title="" itemProp="url">
                                        <i className="fa fa-twitter" /> Share on Twitter
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="restaurant-detail-tabs">
                              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className={`nav-link ${activeTab === "menu" ? "active" : ""}`} onClick={() => setActiveTab("menu")}>
                                  <a href="#tab1-1" data-toggle="tab"><i className="fa fa-cutlery" /> Menu</a>
                                </button>
                                <button className={`nav-link ${activeTab === "gallery" ? "active" : ""}`} onClick={() => setActiveTab("gallery")}>
                                  <a href="#tab1-2" data-toggle="tab"><i className="fa fa-picture-o" /> Gallery</a>
                                </button>
                                <button className={`nav-link ${activeTab === "reviews" ? "active" : ""}`} onClick={() => setActiveTab("reviews")}>
                                  <a href="#tab1-3" data-toggle="tab"><i className="fa fa-star" /> Reviews</a>
                                </button>
                                <button className={`nav-link ${activeTab === "book" ? "active" : ""}`} onClick={() => setActiveTab("book")}>
                                  <a href="#tab1-4" data-toggle="tab"><i className="fa fa-book" /> Book A Table</a>
                                </button>
                                <button className={`nav-link ${activeTab === "info" ? "active" : ""}`} onClick={() => setActiveTab("info")}>
                                  <a href="#tab1-5" data-toggle="tab"><i className="fa fa-info" /> Restaurant Info</a>
                                </button>
                              </div>

                              <div className="tab-content" id="nav-tabContent">
                                <div className={`tab-pane fade ${activeTab === "menu" ? "show active" : ""}`} id="nav-home">
                                  <form className="search-dish">
                                    <input type="text" placeholder="Search here" />
                                    <button type="submit"><i className="fa fa-search" /></button>
                                  </form>

                                  {restaurant.menuCategories?.map((category, catIdx) => (
                                    <div className="dishes-list-wrapper" key={catIdx}>
                                      <h4 className="title3" itemProp="headline">
                                        <span className="sudo-bottom sudo-bg-red">{category.name}</span>
                                      </h4>
                                      <span className="post-rate red-bg brd-rd2"><i className="fa fa-star-o" /> {category.rating}</span>
                                      <ul className="dishes-list">
                                        {category.items.map((item, i) => (
                                          <li className="wow fadeInUp" data-wow-delay={`0.${i + 1}s`} key={i}>
                                            <div className="featured-restaurant-box">
                                              <div className="featured-restaurant-thumb">
                                                <a href="#" title="" itemProp="url">
                                                  <img src={item.img} alt={item.name} itemProp="image" />
                                                </a>
                                              </div>
                                              <div className="featured-restaurant-info">
                                                <h4 itemProp="headline"><a href="#" title="" itemProp="url">{item.name}</a></h4>
                                                <span className="price">${item.price}</span>
                                                <p itemProp="description">{item.desc}</p>
                                                <ul className="post-meta">
                                                  <li><i className="fa fa-check-circle-o" /> Min order {restaurant.minOrder || "$50"}</li>
                                                  <li><i className="flaticon-transport" /> {restaurant.deliveryTime || "30min"}</li>
                                                </ul>
                                              </div>
                                              <div className="ord-btn">
                                                <a className="brd-rd2" href="#" title="Order Now" itemProp="url">Order Now</a>
                                              </div>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>

                                <div className={`tab-pane fade ${activeTab === "gallery" ? "show active" : ""}`} id="nav-profile">
                                  <div className="restaurant-gallery">
                                    <h4 className="title3" itemProp="headline"><span className="sudo-bottom sudo-bg-red">{restaurant.title}</span> Gallery</h4>
                                    <div className="remove-ext">
                                      <div className="row">
                                        {restaurant.gallery?.map((img, i) => (
                                          <div className="col-md-6 col-sm-6 col-lg-6" key={i}>
                                            <div className="restaurant-gallery-img">
                                              <a href={img} data-fancybox="gallery" title="" itemProp="url">
                                                <img src={img} alt={`gallery-${i}`} itemProp="image" />
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className={`tab-pane fade ${activeTab === "reviews" ? "show active" : ""}`}
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                >
                                  <div className="customer-review-wrapper">
                                    <h4 className="title3" itemProp="headline">
                                      <span className="sudo-bottom sudo-bg-red">Customer Reviews </span>
                                    </h4>
                                    <ul className="comments-thread customer-reviews">
                                      <li>
                                        <div className="comment">
                                          <img
                                            className="brd-rd50"
                                            src="/assets/images/review-img1.jpg"
                                            alt="review-img1.jpg"
                                            itemProp="image"
                                          />
                                          <div className="comment-info">
                                            <h4 itemProp="headline">
                                              <a href="#" title="" itemProp="url">
                                                John Mathur
                                              </a>
                                            </h4>
                                            <p itemProp="description">
                                              Lorem ipsum dolor sit amet, pri nusquam petentium at. In mutat
                                              omnes homero mea, pro delenit accusam eu
                                            </p>
                                            <span className="customer-rating">
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star" />
                                              <span>(4)</span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="comment">
                                          <img
                                            className="brd-rd50"
                                            src="/assets/images/review-img2.jpg"
                                            alt="review-img2.jpg"
                                            itemProp="image"
                                          />
                                          <div className="comment-info">
                                            <h4 itemProp="headline">
                                              <a href="#" title="" itemProp="url">
                                                John Mathur
                                              </a>
                                            </h4>
                                            <p itemProp="description">
                                              Lorem ipsum dolor sit amet, pri nusquam petentium at. In mutat
                                              omnes homero mea, pro delenit accusam eu
                                            </p>
                                            <span className="customer-rating">
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star" />
                                              <span>(4)</span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="comment">
                                          <img
                                            className="brd-rd50"
                                            src="/assets/images/review-img3.jpg"
                                            alt="review-img3.jpg"
                                            itemProp="image"
                                          />
                                          <div className="comment-info">
                                            <h4 itemProp="headline">
                                              <a href="#" title="" itemProp="url">
                                                John Mathur
                                              </a>
                                            </h4>
                                            <p itemProp="description">
                                              Lorem ipsum dolor sit amet, pri nusquam petentium at. In mutat
                                              omnes homero mea, pro delenit accusam eu
                                            </p>
                                            <span className="customer-rating">
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star" />
                                              <span>(4)</span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="your-review">
                                      <h4 className="title3" itemProp="headline">
                                        <span className="sudo-bottom sudo-bg-red">Write</span> Review Here
                                      </h4>
                                      <form className="review-form">
                                        <textarea
                                          className="brd-rd5"
                                          defaultValue={"Lorem ipsum dolor sit amet, pri nusquam petentium at. In mutatomnes homero mea, pro delenit accusam eu"}
                                        />
                                        <button className="brd-rd2 red-bg" type="submit">POST REVIEW</button>
                                        <div className="rate-box">
                                          <span>RATE US</span>
                                          <div className="rating-box">
                                            <span className="brd-rd2 clr1 on" />
                                            <span className="brd-rd2 clr2 on" />
                                            <span className="brd-rd2 clr3 on" />
                                            <span className="brd-rd2 clr4 on" />
                                            <span className="brd-rd2 clr5 on" />
                                            <span className="brd-rd2 clr6 on" />
                                            <span className="brd-rd2 clr7 off" />
                                            <span className="brd-rd2 clr8 off" />
                                            <i>4.0</i>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>

                                <div className={`tab-pane fade ${activeTab === "book" ? "show active" : ""}`} id="nav-tab5">
                                  <div className="book-table">
                                    <h4 className="title3" itemProp="headline"><span className="sudo-bottom sudo-bg-red">Book</span> This Restaurant Table</h4>
                                    <form>
                                      <div className="row">
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="input-field brd-rd2"><i className="fa fa-user" /> <input type="text" placeholder="NAME" /></div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="input-field brd-rd2"><i className="fa fa-phone" /> <input type="text" placeholder="PHONE" /></div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-lg-12">
                                          <button className="brd-rd2 red-bg" type="submit">POST PREVIEW</button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>

                                <div className={`tab-pane fade ${activeTab === "info" ? "show active" : ""}`} id="nav-tab6">
                                  <div className="restaurant-info-wrapper">
                                    <h3 className="title3" itemProp="headline"><span className="sudo-bottom sudo-bg-red">Info</span> About Restaurant</h3>
                                    <ul className="restaurant-info-list">
                                      <li><i className="fa fa-map-marker red-clr" /><strong>Address :</strong><span>{restaurant.address}</span></li>
                                      <li><i className="fa fa-phone red-clr" /><strong>Call us</strong><span>{restaurant.phone}</span></li>
                                      <li><i className="fa fa-envelope-o red-clr" /><strong>Email</strong><span>{restaurant.email}</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
