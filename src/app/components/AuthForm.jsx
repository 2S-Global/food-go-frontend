"use client";
import Link from "next/link";

export default function AuthForm({ type }) {
  const isLogin = type === "login";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(type.toUpperCase(), "FORM SUBMITTED");
  };

  return (
    <div className="sign-popup-wrapper brd-rd5">
      <div className="sign-popup-inner brd-rd5">
        <div className="sign-popup-title text-center">
          <h4>{isLogin ? "SIGN IN" : "SIGN UP"}</h4>
          <span>with your social network</span>
        </div>

        <div className="popup-social text-center">
          <a className="facebook brd-rd3"><i className="fa fa-facebook"></i> Facebook</a>
          <a className="google brd-rd3"><i className="fa fa-google-plus"></i> Google</a>
          <a className="twitter brd-rd3"><i className="fa fa-twitter"></i> Twitter</a>
        </div>

        <span className="popup-seprator text-center">
          <i className="brd-rd50">or</i>
        </span>

        <form className="sign-form" onSubmit={handleSubmit}>
          <div className="row">

            {/** USERNAME / EMAIL FIELD */}
            <div className="col-md-12">
              <input
                className="brd-rd3"
                type="text"
                placeholder={isLogin ? "Username or Email" : "Username"}
                required
              />
            </div>

            {/** EMAIL FIELD IN REGISTER ONLY */}
            {!isLogin && (
              <div className="col-md-12">
                <input
                  className="brd-rd3"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
            )}

            {/** PASSWORD FIELD */}
            <div className="col-md-12">
              <input
                className="brd-rd3"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            {/** SUBMIT BUTTON */}
            <div className="col-md-12">
              <button className="red-bg brd-rd3" type="submit">
                {isLogin ? "SIGN IN" : "REGISTER NOW"}
              </button>
            </div>

            {/** FOOTER LINKS */}
            <div className="col-md-12">
              {isLogin ? (
                <>
                  <Link className="sign-btn" href="/register">
                    Not a member? Sign up
                  </Link>
                  <a className="recover-btn" href="#">
                    Recover my password
                  </a>
                </>
              ) : (
                <>
                  <Link className="sign-btn" href="/login">
                    Already Registered? Sign in
                  </Link>
                  <a className="recover-btn" href="#">
                    Recover my password
                  </a>
                </>
              )}
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
