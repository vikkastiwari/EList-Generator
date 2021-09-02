import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import jsPDF from "jspdf";
import moment from "moment";
import ejs from "ejs";

import { connect } from "react-redux";

const ref = React.createRef();

const Next = (props) => {
  //   const toPdf = () => {
  //     const pdf = new jsPDF();
  //     ejs.renderFile("./template.ejs", function (err, str) {
  //       console.log(str);
  //       console.log(err);
  //       pdf.html(str, {
  //         callback: function (doc) {
  //           doc.save(
  //             props.title + "_" + moment().format("DD/MM/YYYY").toString()
  //           );
  //         },
  //       });
  //     });
  //   };

  const toPdf = () => {
    var divContents = document.getElementById("print").innerHTML;
    var a = window.open("", "", "height=500, width=500");
    a.document.write("<html>");
    a.document.write("<body>");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.title = props.title;
    a.document.close();
    a.print();
  };

  useEffect(() => {
    let iftable = document.getElementById("mytable");
    if (iftable) iftable.remove();
    var tag = document.createElement("script");
    tag.async = false;
    tag.src = "/assets/js/pages/table/table_data.js";
    tag.id = "mytable";
    document.getElementsByTagName("body")[0].appendChild(tag);
  }, []);

  return (
    <div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white white-sidebar-color logo-white">
      <div className="page-wrapper">
        <div className="page-header navbar navbar-fixed-top">
          <div className="page-header-inner ">
            <div className="page-logo">
              <Link to="/">
                <img
                  alt="ganesh"
                  src="assets/img/ganesh.png"
                  style={{ width: "50px", height: "50px" }}
                />
                <span className="logo-default">EList</span>{" "}
              </Link>
            </div>

            <a
              href="javascript:;"
              className="menu-toggler responsive-toggler"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span></span>
            </a>
          </div>
        </div>

        <div className="page-container">
          <div className="sidebar-container">
            <div className="sidemenu-container navbar-collapse collapse fixed-menu">
              <div id="remove-scroll">
                <ul
                  className="sidemenu page-header-fixed p-t-20"
                  data-keep-expanded="false"
                  data-auto-scroll="true"
                  data-slide-speed="200"
                >
                  <li className="sidebar-toggler-wrapper hide">
                    <div className="sidebar-toggler">
                      <span></span>
                    </div>
                  </li>

                  <li className="nav-item ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="material-icons">list</i>
                      <span className="title">Download List</span>
                      <span className="selected"></span>
                      <span className="arrow left"></span>
                    </a>
                    {/* <ul className="sub-menu">
                      <li className="nav-item">
                        <Link to="/ganeshpoojan" className="nav-link ">
                          <span className="title">Ganesh Poojan</span>
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link to="/vivahsamagri" className="nav-link ">
                          <span className="title">Vivah Samagri</span>
                          <span className="selected"></span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/grhpravesh" className="nav-link ">
                          <span className="title">Grh Pravesh</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/satyanarayanpoojan" className="nav-link ">
                          <span className="title">Satyanarayan Poojan</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/grahshanti" className="nav-link ">
                          <span className="title">Grah Shanti</span>
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="page-content-wrapper">
            <div className="page-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-topline-red">
                    <div className="card-head">
                      <header>{props.title}</header>
                      {/* <div className="tools">
                        <a
                          className="fa fa-repeat btn-color box-refresh"
                          href="javascript:;"
                        ></a>
                        <a
                          className="t-collapse btn-color fa fa-chevron-down"
                          href="javascript:;"
                        ></a>
                        <a
                          className="t-close btn-color fa fa-times"
                          href="javascript:;"
                        ></a>
                      </div> */}
                    </div>
                    <table
                      className="table table-striped table-bordered table-hover table-checkable order-column full-width"
                      id="example4"
                      ref={ref}
                    >
                      <thead>
                        <tr
                          style={{
                            background: "#66d182",
                            width: "500",
                          }}
                        >
                          <th> क्रमांक </th>
                          <th> नाम </th>
                          <th> मात्रा </th>
                          <th> इकाई </th>
                        </tr>
                      </thead>
                      <tbody id="checkboxlist">
                        {props.items.map((item, index) => (
                          <tr className="odd gradeX" key={item.id}>
                            <td> {index + 1} </td>
                            <td> {item.name} </td>
                            <td>{item.qty}</td>
                            <td>{item.unit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div id="print" style={{ display: "none" }}>
                      {/* style={{ display: "none" }} */}
                      <div style={{ borderStyle: "double", padding: "15px" }}>
                        <div>
                          <div
                            style={{
                              textAlign: "right ",
                              marginBottom: "10px",
                            }}
                          >
                            {moment()
                              .format("DD/MM/YYYY - h:mm:ss a")
                              .toString()}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              textAlign: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div>
                              <img src="assets/img/ganes.png" alt="logo" />
                            </div>
                            <div>
                              <p style={{ fontSize: "large" }}>
                                <div
                                  style={{
                                    fontSize: "20px",
                                    color: "red",
                                  }}
                                >
                                  <b>|| श्री गणेशाय नमः ||</b>
                                </div>
                                <br />
                                यह सूची <b>
                                  आचार्य पंडित यमुनाप्रसाद तिवारी
                                </b>{" "}
                                द्वारा बनाई गई है <br />
                                <span style={{ fontSize: "15px" }}>
                                  गोरेगांव पश्चिम, मुंबई-400062
                                </span>
                                <br />
                                <span style={{ fontSize: "15px" }}>
                                  फ़ोन: +91 9892008867 / +91 8097708867
                                </span>
                              </p>
                            </div>
                            <div style={{ marginLeft: "16px" }}>
                              <img
                                src="assets/img/horoscope.png"
                                alt="logo"
                                class="logo-default"
                              />
                            </div>
                          </div>

                          <div style={{ textAlign: "center " }}>
                            <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                              {props.title} सूची
                            </p>
                          </div>
                        </div>

                        <hr />

                        <div>
                          <table
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif",
                              borderCollapse: "collapse",
                              width: "100%",
                            }}
                          >
                            <tr>
                              <th
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "8px",
                                  textAlign: "center",
                                }}
                              >
                                {" "}
                                क्रमांक
                              </th>
                              <th
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "8px",
                                  textAlign: "left",
                                }}
                              >
                                {" "}
                                नाम
                              </th>
                              <th
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "8px",
                                  textAlign: "left",
                                }}
                              >
                                {" "}
                                मात्रा
                              </th>
                              <th
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "8px",
                                  textAlign: "left",
                                }}
                              >
                                {" "}
                                इकाई
                              </th>
                            </tr>
                            {props.items.map((item, index) => (
                              <tr>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "center",
                                  }}
                                >
                                  {index + 1}
                                </td>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                  }}
                                >
                                  {item.name}
                                </td>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  {item.qty}
                                </td>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  {item.unit}
                                </td>
                              </tr>
                            ))}
                          </table>
                        </div>

                        <hr />
                        <div style={{ textAlign: "center" }}>
                          <span style={{ fontSize: "20px", color: "red" }}>
                            <b>|| शुभम भुयात ||</b>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="card-body ">
                      <div className="row p-b-20">
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="btn-group">
                            <button
                              id="addRow1"
                              className="btn bg-danger"
                              onClick={() => {
                                props.history.goBack();
                              }}
                            >
                              <i className="fa fa-arrow-left"></i> Back
                            </button>
                          </div>
                        </div>
                        <div></div>
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="btn-group pull-right">
                            <button
                              className="btn bg-success  btn-outline dropdown-toggle"
                              onClick={toPdf}
                            >
                              <i className="fa fa-print"></i> Download{" "}
                            </button>
                            {/* <button
                              onClick={window.print()}
                              class="btn bg-success btn-outline"
                              type="button"
                            >
                              <span>
                                <i class="fa fa-print"></i> Print
                              </span>{" "}
                            </button> */}
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

        <div className="page-footer">
          <div className="page-footer-inner">
            {" "}
            2021 &copy; EList by
            <a href="#" target="_top" className="makerCss">
              {" "}
              Vikas Tiwari
            </a>
          </div>
          <div className="scroll-to-top">
            <i className="material-icons">eject</i>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    title: state.title,
    items: state.items,
  };
};
export default connect(mapStateToProps)(withRouter(Next));
