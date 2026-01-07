"use client";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./PopularFood.module.css";

const PopularFood = () => {
  // Embla
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vegMenu, setVegMenu] = useState([]);
  const [vegLoading, setVegLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/usermenu/list-menu?type=non-veg`
        );
        const json = await res.json();

        const list = json?.data || [];

        // 🔀 Random 5 items
        const randomFive = [...list]
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);

        setMenu(randomFive);
      } catch (err) {
        console.error("Menu fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [API_URL]);

  useEffect(() => {
    const fetchVegMenu = async () => {
      try {
        const res = await fetch(`${API_URL}/api/usermenu/list-menu?type=veg`);
        const json = await res.json();

        // 🔥 TAKE FIRST 8 ITEMS
        setVegMenu((json?.data || []).slice(0, 8));
      } catch (err) {
        console.error("Veg menu fetch error:", err);
      } finally {
        setVegLoading(false);
      }
    };

    fetchVegMenu();
  }, [API_URL]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section>
      <div className="block grayish low-opacity">
        <div
          className="fixed-bg"
          style={{ backgroundImage: "url(/assets/images/pattern.png)" }}
        />

        <div className="top-mockup">
          <img src="/assets/images/mockup2.png" alt="" />
        </div>

        <div className="container">
          <div className="row">
            {/* ===== TITLE ===== */}
            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
              <div className="filters-wrapper">
                <div className="title1-wrapper text-center">
                  <div className="title1-inner">
                    <span>Your Favourite Food</span>
                    <h2 itemProp="headline">Popular This Month</h2>
                    <b>In Your Area</b>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== LEFT SLIDER ===== */}
            <div className="col-md-4 col-xs-12">
              <div className={styles.emblaWrapper}>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <div className={styles.embla} ref={emblaRef}>
                      <div className={styles.emblaContainer}>
                        {menu.map((item) => (
                          <div className={styles.emblaSlide} key={item._id}>
                            <div className="dish-item">
                              <figure>
                                <img
                                  src={
                                    item.images?.[0] ||
                                    "/assets/images/dish-caro1.jpg"
                                  }
                                  alt={item.menuName}
                                  style={{ width: "100%" }}
                                />
                              </figure>

                              <div className="item-meta">
                                <img
                                  src="/assets/images/restaurant-logo2.png"
                                  alt=""
                                />
                                <div>
                                  <span>{item.menuType}</span>
                                  <p>{item.mealType}</p>
                                </div>
                              </div>

                              <div className="caro-dish-name">
                                <h4>{item.menuName}</h4>
                                <span>Available Now</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ARROWS */}
                    <button className={styles.emblaPrev} onClick={scrollPrev}>
                      ‹
                    </button>
                    <button className={styles.emblaNext} onClick={scrollNext}>
                      ›
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* ===== RIGHT CONTENT (UNCHANGED) ===== */}
            <div className="col-md-8 col-xs-12">
              <div className="popular-of-month">
                <div className="row">
                  {vegLoading ? (
                    <p>Loading...</p>
                  ) : (
                    vegMenu.map((item, index) => (
                      <div
                        key={item._id}
                        className="col-md-6 col-sm-6 col-xs-12"
                      >
                        <div
                          className="pop-dish wow fadeIn"
                          data-wow-delay={`${(index + 1) * 0.1}s`}
                        >
                          {/* IMAGE + BADGE */}
                          <div className="poplr-dish poplr-inline">
                            <img
                              src={
                                item.images?.[0] ||
                                "/assets/images/round-pic1.jpg"
                              }
                              alt={item.menuName}
                            />
                            <div className="poplr-text">
                              <span>{item.menuName}</span>
                          
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="rite-meta">
                {/* <a href="#" className="view-more">
                  view more food
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-mockup">
          <img src="/assets/images/mockup1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default PopularFood;
