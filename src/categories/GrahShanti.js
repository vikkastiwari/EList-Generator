import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import jsPDF from "jspdf";

const GrahShanti = (props) => {
  const title = "GRAH SHANTI";

  const [items, setItems] = useState([
    { id: 1, name: "Kalash", qty: "3", unit: "Piece", check: true },
    { id: 2, name: "Pata", qty: "2", unit: "Piece", check: true },
    { id: 3, name: "Nariyal", qty: "4", unit: "Piece", check: true },
    { id: 4, name: "Patl", qty: "5", unit: "Piece", check: true },
    { id: 6, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 7, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 8, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 9, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 10, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 11, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 12, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 13, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 14, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 15, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 16, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 17, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 18, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 19, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 21, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 22, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 23, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 24, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 25, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 26, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 27, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 28, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 29, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 30, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 32, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 33, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 34, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 35, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 36, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 37, name: "Ghee", qty: "2", unit: "Liter", check: true },
    { id: 38, name: "Ghee", qty: "2", unit: "Liter", check: true },
  ]);

  const [allCheck, setAllCheck] = useState(true);

  useEffect(() => {
    if (props.title === title) {
      const ids = props.items.map((i) => i.id);
      const list1 = [...props.items];
      const list2 = [...items];
      list2.forEach((l) => {
        if (!ids.includes(l.id)) {
          l.check = false;
          setAllCheck(false);
          list1.push(l);
        }
      });
      console.log(list1);
      list1.sort((a, b) => a.id - b.id);
      console.log(list1);
      setItems(list1);
    }

    let iftable = document.getElementById("mytable");
    if (iftable) iftable.remove();
    var tag = document.createElement("script");
    tag.async = false;
    tag.src = "/assets/js/pages/table/table_data.js";
    tag.id = "mytable";
    document.getElementsByTagName("body")[0].appendChild(tag);
  }, [props.items]);

  const nextPhase = () => {
    let trueData = [...items];
    trueData = trueData.filter((data) => data.check === true);
    props.newState({ title, items: trueData });
    props.history.push("/next");
  };

  const checkAll = (event) => {
    if (event.target.checked) {
      setAllCheck(true);
      let newList = [...items];
      newList = items.map((item) => {
        if (!item.check) {
          item.check = true;
        }
        return item;
      });
      setItems(newList);
    } else {
      setAllCheck(false);
      let newList = [...items];
      newList = items.map((item) => {
        if (item.check) {
          item.check = false;
        }
        return item;
      });
      setItems(newList);
    }
  };

  const quantityHandler = (event, id, property) => {
    let newList = [...items];
    newList.forEach((item, index) => {
      if (item.id === id) {
        newList[index][property] = event.target.value;
      }
    });
    setItems(newList);
  };

  const checkHandler = (event, id) => {
    let newList = [...items];
    newList.forEach((item, index) => {
      if (item.id === id) {
        newList[index].check = !newList[index].check;
      }
      if (!item.check) {
        setAllCheck(false);
      }
    });
    setItems(newList);
  };

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

                  <li className="nav-item active">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="material-icons">list</i>
                      <span className="title">Categories</span>
                      <span className="selected"></span>
                      <span className="arrow open"></span>
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item ">
                        <Link to="/ganeshpoojan" className="nav-link ">
                          <span className="title">Ganesh Poojan</span>
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link to="/vivahsamagri" className="nav-link ">
                          <span className="title">Vivah Samagri</span>
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
                      <li className="nav-item active">
                        <Link to="/grahshanti" className="nav-link ">
                          <span className="title">Grah Shanti</span>
                        </Link>
                      </li>
                    </ul>
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
                      <header>{title}</header>
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
                    <div className="card-body ">
                      <table
                        className="table table-striped table-bordered table-hover table-checkable order-column full-width"
                        id="example4"
                      >
                        <thead>
                          <tr>
                            <th>
                              <label className="rt-chkbox rt-chkbox-single rt-chkbox-outline">
                                <input
                                  id="checkAll"
                                  type="checkbox"
                                  className="group-checkable"
                                  data-set="#sample_1 .checkboxes"
                                  checked={allCheck}
                                  onChange={checkAll}
                                />
                                <span></span>
                              </label>
                            </th>
                            <th> Sr No. </th>
                            <th> Name </th>
                            <th> Quantity </th>
                            <th> Unit </th>
                          </tr>
                        </thead>
                        <tbody id="checkboxlist">
                          {items.map((item, index) => (
                            <tr className="odd gradeX" key={item.id}>
                              <td>
                                <label className="rt-chkbox rt-chkbox-single rt-chkbox-outline">
                                  <input
                                    type="checkbox"
                                    className="checkboxes"
                                    checked={item.check}
                                    onChange={(event) =>
                                      checkHandler(event, item.id)
                                    }
                                  />
                                  <span></span>
                                </label>
                              </td>
                              <td> {index + 1} </td>
                              <td> {item.name} </td>
                              <td>
                                <input
                                  type="number"
                                  id="quantity"
                                  value={item.qty}
                                  name="quantity"
                                  min="1"
                                  style={{ width: "50px" }}
                                  onChange={(event) =>
                                    quantityHandler(event, item.id, "qty")
                                  }
                                />
                              </td>
                              <td>
                                <select
                                  id="unit"
                                  name="units"
                                  style={{ width: "70px" }}
                                  value={item.unit}
                                  onChange={(event) =>
                                    quantityHandler(event, item.id, "unit")
                                  }
                                >
                                  <option value="Piece">Piece</option>
                                  <option value="Kilo Gram">Kilo Gram</option>
                                  <option value="Gram">Gram</option>
                                  <option value="Liter">Liter</option>
                                </select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="row p-b-20">
                        <div className="col-md-6 col-sm-6 col-6">
                          {/* <!-- 
                          <div className="btn-group">
                            <button id="addRow1" className="btn btn-info"> Add New <i className="fa fa-plus"></i>
                            </button>
                        </div> --> */}
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="btn-group pull-right">
                            <button
                              className="btn bg-success"
                              onClick={nextPhase}
                            >
                              Next <i className="fa fa-arrow-right"></i>
                            </button>
                          </div>
                          {/* <!-- 
                          <div className="btn-group pull-right">
                            <button className="btn btn-info  btn-outline"><i className="fa fa-file-pdf-o"></i> Save as PDF </button>
                        </div> --> */}
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

const mapDispatchToProps = (dispatch) => {
  return {
    newState: ({ title, items }) => dispatch({ type: "TITLE", title, items }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GrahShanti));
