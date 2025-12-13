"use client";
import React from "react";


export default function SearchForm() {
  return (
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
            <i className="fa fa-map-marker"></i>
            <input
              className="brd-rd2"
              type="text"
              placeholder="Search Location"
            />
            <i className="fa fa-location-arrow"></i>
          </div>
        </div>

        <div className="col-md-2 col-sm-3 col-lg-3 col-xs-12">
          <button className="brd-rd2 red-bg" type="submit">
            SEARCH
          </button>
        </div>

      </div>
    </form>
  );
}
