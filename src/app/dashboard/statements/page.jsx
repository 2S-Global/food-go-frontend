"use client";

import Link from "next/link";

export default function StatementsPage() {
  return (
    <div className="tabs-wrp brd-rd5">
      <h4 itemProp="headline">STATEMENTS</h4>
      <div className="select-wrap-inner">
        <div className="select-wrp2" />
        <div className="select-wrp2">
          <select>
            <option>Select Date Range</option>
            <option>Select Date Range</option>
            <option>Select Date Range</option>
          </select>
        </div>
      </div>
      <div className="statement-table">
        <table>
          <thead>
            <tr>
              <th>TRANSACTION ID</th>
              <th>ORDER ID</th>
              <th>DATE</th>
              <th>DETAIL</th>
              <th>AMOUNT</th>
              <th>VIEW</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#30737723</td>
              <td>8720</td>
              <td>Aug 17,2017</td>
              <td>Order - Misumisu Thai</td>
              <td>
                <span className="red-clr">$35.97</span>
              </td>
              <td>
                <Link
                  href={`/order-details/8720`}
                  className="view-order-btn"
                  title="View Order Details"
                >
                  <i className="fa fa-eye" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>#30737723</td>
              <td>8720</td>
              <td>Aug 17,2017</td>
              <td>Order - Misumisu Thai</td>
              <td>
                <span className="red-clr">$35.97</span>
              </td>
              <td>
                <Link
                  href={`/order-details/8720`}
                  className="view-order-btn"
                  title="View Order Details"
                >
                  <i className="fa fa-eye" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>#30737723</td>
              <td>8720</td>
              <td>Aug 17,2017</td>
              <td>Order - Misumisu Thai</td>
              <td>
                <span className="red-clr">$35.97</span>
              </td>
              <td>
                <Link
                  href={`/order-details/8720`}
                  className="view-order-btn"
                  title="View Order Details"
                >
                  <i className="fa fa-eye" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Statement Table */}
      <div className="pagination-wrapper text-center style2">
        <ul className="pagination justify-content-center">
          <li className="page-item prev">
            <a className="page-link brd-rd2" href="#" itemProp="url">
              PREV
            </a>
          </li>
          <li className="page-item">
            <a className="page-link brd-rd2" href="#" itemProp="url">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link brd-rd2" href="#" itemProp="url">
              2
            </a>
          </li>
          <li className="page-item active">
            <span className="page-link brd-rd2">3</span>
          </li>
          <li className="page-item">
            <a className="page-link brd-rd2" href="#" itemProp="url">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link brd-rd2" href="#" itemProp="url">
              5
            </a>
          </li>
          <li className="page-item">........</li>
          <li className="page-item">
            <a className="page-link brd-rd2" href="#" itemProp="url">
              18
            </a>
          </li>
          <li className="page-item next">
            <a className="page-link brd-rd2" href="#" itemProp="url">
              NEXT
            </a>
          </li>
        </ul>
      </div>
      {/* Pagination Wrapper */}
    </div>
  );
}
