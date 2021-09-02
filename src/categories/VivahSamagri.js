import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import jsPDF from "jspdf";

const VivahSamagri = (props) => {
  const title = "विवाह सामग्री";

  const [items, setItems] = useState([
    { id: 1, name: "तांबे का लोटा", qty: "2", unit: "पीस", check: true },
    { id: 2, name: "चौकी", qty: "2", unit: "पीस", check: true },
    { id: 3, name: "पाटा", qty: "2", unit: "पीस", check: true },
    {
      id: 4,
      name: "रोली/मौली, अवीर, गुलाल, चंदन, सिंदूर, इत्र, रूई, माचिस, अगरबत्ती, कपूर, लौंग, इलायची, दीपक",
      qty: "-",
      unit: "-",
      check: true,
    },
    { id: 5, name: "जनेउ", qty: "5", unit: "पीस", check: true },
    { id: 6, name: "नारियल", qty: "2", unit: "पीस", check: true },
    { id: 7, name: "सुपाडी", qty: "15", unit: "पीस", check: true },
    { id: 8, name: "हल्दी गाठ", qty: "16", unit: "पीस", check: true },
    { id: 9, name: "दोना", qty: "1", unit: "पैकेट", check: true },
    { id: 10, name: "हल्दी पाउडर", qty: "25", unit: "ग्राम", check: true },
    { id: 11, name: "मेहंदी", qty: "50", unit: "ग्राम", check: true },
    { id: 12, name: "फल", qty: "21", unit: "पीस", check: true },
    { id: 13, name: "फूल", qty: "0.5", unit: "किलो ग्राम", check: true },
    { id: 14, name: "माला छोटी", qty: "5", unit: "पीस", check: true },
    {
      id: 15,
      name: "दूर्वा, तुलसी",
      qty: "-",
      unit: "-",
      check: true,
    },
    { id: 16, name: "पान का पत्ता", qty: "21", unit: "पीस", check: true },
    { id: 17, name: "गुड़", qty: "-", unit: "-", check: true },
    { id: 18, name: "धनिया", qty: "-", unit: "-", check: true },
    {
      id: 19,
      name: "प्रसाद(पेड़ा)",
      qty: "0.5",
      unit: "किलो ग्राम",
      check: true,
    },
    { id: 20, name: "मधु", qty: "50", unit: "ग्राम", check: true },
    { id: 21, name: "दही", qty: "50", unit: "ग्राम", check: true },
    { id: 22, name: "चांदी का सिक्का", qty: "2", unit: "पीस", check: true },
    { id: 23, name: "पंचमेवा", qty: "250", unit: "ग्राम", check: true },
    {
      id: 24,
      name: "लाल, सफ़ेद - कपड़ा",
      qty: "1.15",
      unit: "मीटर",
      check: true,
    },
    { id: 25, name: "चावल", qty: "2", unit: "किलो ग्राम", check: true },
    { id: 26, name: "गेहूँ", qty: "0.5", unit: "किलो ग्राम", check: true },
    {
      id: 27,
      name: "हरी मूंग दाल",
      qty: "0.5",
      unit: "किलो ग्राम",
      check: true,
    },
    { id: 28, name: "शंख:", qty: "1", unit: "-", check: true },
    { id: 29, name: "सुवा", qty: "1", unit: "पीस", check: true },
    { id: 30, name: "खुटिया", qty: "4", unit: "पीस", check: true },
    { id: 31, name: "तोरण, थांंब", qty: "-", unit: "-", check: true },
    { id: 32, name: "चावलों की खील", qty: "200", unit: "ग्राम", check: true },
    // { id: 33, name: "बतासा", qty: "100", unit: "ग्राम", check: true },
    { id: 34, name: "समीपत्र:", qty: "-", unit: "-", check: true },
    { id: 35, name: "बतासा", qty: "100", unit: "ग्राम", check: true },
    { id: 36, name: "पीतल का टोप", qty: "2", unit: "पीस", check: true },
    { id: 37, name: "पीतल का लोटा", qty: "1", unit: "पीस", check: true },
    { id: 38, name: "पीतल का काटोरी", qty: "2", unit: "पीस", check: true },
    { id: 39, name: "सुखा गट", qty: "2", unit: "पीस", check: true },
    { id: 40, name: "धोती", qty: "2", unit: "-", check: true },
    { id: 41, name: "कुर्ते का कपडा", qty: "2", unit: "-", check: true },
    { id: 42, name: "गमछा", qty: "2", unit: "-", check: true },
    { id: 43, name: "बनियांन", qty: "2", unit: "-", check: true },
    { id: 44, name: "रुमाल", qty: "2", unit: "-", check: true },
    { id: 45, name: "घी", qty: "0.5", unit: "लीटर", check: true },
    { id: 46, name: "मिट्टी के दीपक", qty: "10", unit: "पीस", check: true },
    { id: 47, name: "आम की लकड़ी", qty: "1", unit: "किलो ग्राम", check: true },
    { id: 48, name: "हवन कुंड", qty: "1", unit: "-", check: true },
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
                          <span className="title">गणेश पूजन</span>
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link to="/vivahsamagri" className="nav-link ">
                          <span className="title">विवाह सामग्रि</span>
                          <span className="selected"></span>
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link to="/grhpravesh" className="nav-link ">
                          <span className="title">गृह प्रवेश</span>
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link to="/satyanarayanpoojan" className="nav-link ">
                          <span className="title">Satyanarayan Poojan</span>
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link to="/grahshanti" className="nav-link ">
                          <span className="title">Grah Shanti</span>
                        </Link>
                      </li> */}
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
                                  min="0"
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
                                  <option value="पीस">पीस</option>
                                  <option value="किलो ग्राम">किलो ग्राम</option>
                                  <option value="ग्राम">ग्राम</option>
                                  <option value="लीटर">लीटर</option>
                                  <option value="पैकेट">पैकेट</option>
                                  <option value="बोतल">बोतल</option>
                                  <option value="मीटर">मीटर</option>
                                  <option value="-">-</option>
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
)(withRouter(VivahSamagri));
