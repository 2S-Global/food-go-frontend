// "use client";
import Image from "next/image";
import PageBanner from "@/app/components/PageBanner";
import BreadCrumbs from "@/app/components/Breadcrumbs";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

//   if (!post) return <div>404 – Not Found</div>;

  return (
    <>
      <PageBanner
        title="Blog Detail"
        subtitle="A Greate Restaurant Website"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          // { label: "Search", href: "/restaurants#restaurants-search-banner" },
          { label: "Blog Detail" },
        ]}
      />

      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-box">
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    {/* BLOG DETAIL WRAPPER */}
                    <div className="blog-detail-wrapper">
                      {/* MAIN THUMB */}
                      <div
                        className="blog-detail-thumb wow fadeIn"
                        data-wow-delay="0.2s"
                      >
                        <Image
                          src="/assets/images/blog-detial-img2-1.jpg"
                          alt="blog-detail-img"
                          width={1200}
                          height={700}
                        />
                      </div>

                      {/* META INFO */}
                      <div className="blog-detail-info">
                        <span className="post-detail-date red-clr">
                          <i className="fa fa-clock-o"></i> August 10, 2017
                        </span>
                        <div className="post-meta">
                          <span>
                            <i className="fa fa-eye red-clr"></i> 95 Views
                          </span>
                          <span>
                            <i className="fa fa-comment-o red-clr"></i> 5
                            Comments
                          </span>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <h1 itemProp="headline">
                        Tried Their Amazing Grilled Ham
                      </h1>

                      <p itemProp="description">
                        Rennie White, an advertising manager in New York City,
                        leaves for work 10 minutes later these days because she
                        no longer has to wait in line for coffee at a Dunkin'
                        Donuts outlet...
                      </p>

                      <blockquote>
                        <p itemProp="headline">
                          Michel ivauedaus rutrum mi utercture aliquam In
                          habitasse platore dictumst. Integer sagittis vulputate
                          similique sunt in culpa qui officia deserunt.
                        </p>
                      </blockquote>

                      <p itemProp="description">
                        Rennie White, an advertising manager in New York City...
                      </p>

                      {/* IMAGE INSIDE CONTENT */}
                      <p
                        className="wow fadeIn"
                        data-wow-delay="0.2s"
                        itemProp="description"
                      >
                        <a
                          href="/assets/images/blog-detial-img2-2.jpg"
                          data-fancybox="gallery"
                        >
                          <Image
                            src="/assets/images/blog-detial-img2-2.jpg"
                            alt="blog detail image"
                            width={1000}
                            height={600}
                          />
                        </a>
                      </p>

                      <p itemProp="description">
                        <span className="big-letter">R</span>
                        ennie White, an advertising manager in New York City...
                        <a
                          className="alignnone wow fadeIn"
                          data-wow-delay="0.2s"
                          href="/assets/images/blog-detial-img2-3.jpg"
                          data-fancybox="gallery"
                        >
                          <Image
                            src="/assets/images/blog-detial-img2-3.jpg"
                            alt="blog"
                            width={1000}
                            height={600}
                          />
                        </a>
                        Ennie White, an advertising manager in New York City...
                      </p>

                      {/* TAGS */}
                      <div className="post-tags red-clr">
                        <span>Tags:</span>
                        <a href="#">#fish</a>,<a href="#">#pasta</a>,
                        <a href="#">#soups</a>
                      </div>

                      {/* CATEGORY */}
                      <div className="post-cate red-clr">
                        <span>Category:</span>
                        <a href="#" title="Italian cuisine">
                          Italian cuisine
                        </a>
                      </div>

                      {/* SHARE */}
                      <div className="post-share">
                        <span>Share:</span>
                        <a className="brd-rd2" href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a className="brd-rd2" href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a className="brd-rd2" href="#">
                          <i className="fa fa-pinterest"></i>
                        </a>
                        <a className="brd-rd2" href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a className="brd-rd2" href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                        <a className="brd-rd2" href="#">
                          <i className="fa fa-vimeo"></i>
                        </a>
                      </div>

                      {/* NEXT / PREV LINK */}
                      <div className="post-next-prev">
                        <a className="prev-post" href="#">
                          <i className="fa fa-angle-left"></i> PREV
                        </a>{" "}
                        -
                        <a className="next-post" href="#">
                          NEXT <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </div>

                    {/* AUTHOR INFO */}
                    <div className="author-info-wrapper">
                      <h3 className="title4">
                        <span className="sudo-bottom sudo-bg-red">About</span>{" "}
                        The Author
                      </h3>

                      <div className="author-box">
                        <Image
                          className="brd-rd50"
                          src="/assets/images/author-img.jpg"
                          alt="author"
                          width={120}
                          height={120}
                        />

                        <div className="author-info">
                          <h4>
                            <a href="#">Mr.John Cristopher</a>
                          </h4>
                          <p>
                            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. uni harum quidem sed rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilares impedit quo repellendus eligendi optio cumque nihilare impedit quo minus id quod maxime.
                          </p>
                          <a
                            className="red-clr"
                            href="#"
                            title="webinane.com"
                          >
                            webinane.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* COMMENTS */}
                    <div className="comments-wrapper">
                      <h3 className="title4">
                        <span className="sudo-bottom sudo-bg-red">Comm</span>
                        ents (2)
                      </h3>

                      <ul className="comments-thread">
                        {/* COMMENT 1 */}
                        <li>
                          <div className="comment">
                            <Image
                              className="brd-rd50"
                              src="/assets/images/comment1.jpg"
                              alt="comment1"
                              width={80}
                              height={80}
                            />
                            <div className="comment-info">
                              <h4>
                                <a href="#">Johny Rewalt</a>
                              </h4>
                              <i>
                                17 August 2021 at 12.00pm /{" "}
                                <a
                                  className="comment-reply-link red-clr"
                                  href="#"
                                >
                                  Reply
                                </a>
                              </i>
                              <p>
                                Similique sunt in culpa qui officia deserunt
                                mollitia animi...Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. uni harum quidem sed rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilares impedit quo repellendus eligendi optio cumque nihilare impedit quo minus id quod maxime.
                              </p>
                            </div>
                          </div>

                          {/* REPLY */}
                          <ul className="comment-reply">
                            <li>
                              <div className="comment">
                                <Image
                                  className="brd-rd50"
                                  src="/assets/images/comment2.jpg"
                                  alt="comment2"
                                  width={80}
                                  height={80}
                                />
                                <div className="comment-info">
                                  <h4>
                                    <a href="#">Rewalt Johny</a>
                                  </h4>
                                  <i>
                                    17 August 2021 at 08.00pm /{" "}
                                    <a
                                      className="comment-reply-link red-clr"
                                      href="#"
                                    >
                                      Reply
                                    </a>
                                  </i>
                                  <p>
                                    Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. uni harum quidem sed rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilares impedit quo repellendus eligendi optio cumque nihilare impedit quo minus id quod maxime.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* LEAVE COMMENT */}
                    <div className="leav-comment-wrapper">
                      <h3 className="title4">
                        <span className="sudo-bottom sudo-bg-red">Leave</span> a
                        Reply
                      </h3>

                      <form className="reply-form">
                        <div className="row">
                          <div className="col-md-4 col-sm-6 col-lg-12">
                            <input
                              className="brd-rd2"
                              type="text"
                              placeholder="Your Name"
                            />
                          </div>

                          <div className="col-md-4 col-sm-6 col-lg-12">
                            <input
                              className="brd-rd2"
                              type="email"
                              placeholder="Your Email"
                            />
                          </div>

                          <div className="col-md-4 col-sm-12 col-lg-12">
                            <input
                              className="brd-rd2"
                              type="text"
                              placeholder="Subject"
                            />
                          </div>

                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <textarea
                              className="brd-rd2"
                              placeholder="Message"
                            ></textarea>
                          </div>

                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <button className="brd-rd3 red-bg" type="submit">
                              SEND MESSAGE
                            </button>
                          </div>
                        </div>
                      </form>
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
