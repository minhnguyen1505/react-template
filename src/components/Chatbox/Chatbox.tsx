import React, { Component } from "react";
import Message from "./Message";
import "./Chatbox.scss";

export default class Chatbox extends Component {
  render() {
    return (
      <div className="chatbox">
        <div className="chatbox__outer">
          <div className="chatbox__inner">
            <div className="chat-titlebar">
              <div className="chat-titlebar__outer">
                <div className="chat-titlebar__inner">
                  <div className="avatar">
                    <a
                      className="avatar__link"
                      href="https://www.facebook.com/profile.php?id=100006902562238"
                    >
                      <div className="avatar__image">
                        <img
                          src="https://scontent.fhph1-2.fna.fbcdn.net/v/t31.0-1/cp0/p60x60/26220410_2036967636543302_189946391717444754_o.jpg?_nc_cat=103&amp;_nc_ohc=AK2U1V62UnEAX9_mNBV&amp;_nc_ht=scontent.fhph1-2.fna&amp;oh=d2440b7b5beebc52b25bd13f21f7fb2f&amp;oe=5ECA2944"
                          width="28"
                          height="28"
                          alt=""
                          className="img"
                        />
                      </div>
                    </a>
                    <div className="avatar__status online"></div>
                  </div>
                  <div className="chat-titlebar__wrapper">
                    <div className="user-info">
                      <div className="username">
                        <a href="https://www.facebook.com/profile.php?id=100006902562238">
                          <span>Chung Nguyen</span>
                        </a>
                      </div>
                      <div className="status">Đang hoạt động</div>
                    </div>
                    <div className="tools">
                      <div className="tool">
                        <div className="tool__wrapper" id="chatTabVideoButton">
                          <a href="#">
                            <i className="dripicons-camcorder"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tool">
                        <div className="tool__wrapper" id="chatTabVoiceButton">
                          <a href="#">
                            <i className="dripicons-microphone"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tool">
                        <div
                          className="tool__wrapper"
                          id="chatTabSettingButton"
                        >
                          <a href="#">
                            <i className="dripicons-toggles"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tool">
                        <a href="#">
                          <i className="dripicons-cross"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chatframe">
              <div className="chatframe__wrapper">
                <div className="chatframe__overscroll">
                  <div className="chatframe__content">
                    <div
                      className="chatframe__init"
                      style={{ display: "none" }}
                    >
                      <div className="_4po7">
                        <div className="accessible_elem _2kwv">
                          Bắt đầu cuộc trò chuyện
                        </div>
                        <div className="_1xdl">
                          <span
                            className="loading img _55ym _55yn _55yo"
                            role="progressbar"
                            aria-valuetext="Đang tải..."
                            aria-busy="true"
                          ></span>
                        </div>
                      </div>
                    </div>

                    <div className="chatframe__chat">
                      <div className="_4po9">
                        {/* <time className="_5w-5">
                          <span className="_5w-6">T5 20:17</span>
                        </time> */}

                        <div className="_4tdt _ua1">
                          <div className="_31o4">
                            <div aria-hidden="true" className="_6--1">
                              <a
                                aria-label="Chung Nguyen - Thứ Năm 20:17chiều"
                                data-hover="tooltip"
                                data-tooltip-content="Chung Nguyen - Thứ Năm 20:17chiều"
                                data-tooltip-position="right"
                                className="_2yg8"
                                data-hovercard="/ajax/hovercard/chat.php?id=100006902562238&amp;type=chat"
                                href="https://www.facebook.com/profile.php?id=100006902562238"
                              >
                                <div className="_1gyw _55lt">
                                  <img
                                    width="28"
                                    height="28"
                                    alt=""
                                    className="img"
                                    src="https://scontent.fhph1-2.fna.fbcdn.net/v/t31.0-1/cp0/p60x60/26220410_2036967636543302_189946391717444754_o.jpg?_nc_cat=103&amp;_nc_ohc=AK2U1V62UnEAX9_mNBV&amp;_nc_ht=scontent.fhph1-2.fna&amp;oh=d2440b7b5beebc52b25bd13f21f7fb2f&amp;oe=5ECA2944"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>

                          <div className="_ua2">
                            <div className="_4tdv">
                              {" "}
                              {/* message */}
                              <Message content="that's right"/>
                              {/* end message */}
                            </div>
                          </div>
                        </div>

                        <div className="_4tdt _ua0">
                          <div className="_ua2">
                            <div className="_4tdv">
                              <div className="_5wd4 _1nc6">
                                <div className="._1dlq _h8t">
                                  <div
                                    className="_5wd9 direction_ltr clearfix"
                                    data-tooltip-content="Thứ Năm 20:17chiều"
                                    data-hover="tooltip"
                                    data-tooltip-position="right"
                                  >
                                    <div className="_1e-x _n4o">
                                      <div className="_3_bl">
                                        <div className="_3_bp"></div>
                                        <div className="_5w1r _3_om _5wdf">
                                          <div className="_4gx_">
                                            <div className="_1aa6">
                                              <div className="">
                                                <span className="_5yl5">
                                                  <span>
                                                    trình lên thoy chứ tiền chưa
                                                    lên
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <span className="_40fu" data-hover="none">
                                        <span className="_1z_2 _2u_d">
                                          <span className="_8sow">
                                            <button
                                              data-tooltip-content="Bày tỏ cảm xúc"
                                              data-hover="tooltip"
                                              data-tooltip-position="above"
                                              data-tooltip-alignh="center"
                                              className="_8sop _5zvq"
                                              aria-label="Bày tỏ cảm xúc"
                                              data-testid="react_to_message_button"
                                            >
                                              <i className="img sp_OzXfMioWn3- sx_8e5ac5"></i>
                                            </button>
                                          </span>
                                          <span className="_8sow">
                                            <button
                                              data-tooltip-content="Khác"
                                              data-hover="tooltip"
                                              data-tooltip-position="above"
                                              data-tooltip-alignh="center"
                                              className="_8sop _2rvp"
                                              aria-label="Khác"
                                            >
                                              <i className="img sp_1xGvg2WAnAI sx_f2dd75"></i>
                                            </button>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="_40qi"></div>
                              </div>
                              <div className="_5wd4 _1nc6">
                                <div className="._1dlq _h8t">
                                  <div
                                    className="_5wd9 direction_ltr clearfix"
                                    data-tooltip-content="Thứ Năm 20:17chiều"
                                    data-hover="tooltip"
                                    data-tooltip-position="right"
                                  >
                                    <div className="_1e-x _n4o">
                                      <div className="_3_bl">
                                        <div className="_3_bp"></div>
                                        <div className="_5w1r _3_om _5wdf">
                                          <div className="_4gx_">
                                            <div className="_1aa6">
                                              <div className="">
                                                <span className="_5yl5">
                                                  <span>
                                                    định jump phát nữa deal
                                                    double
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <span className="_40fu" data-hover="none">
                                        <span className="_1z_2 _2u_d">
                                          <span className="_8sow">
                                            <button
                                              data-tooltip-content="Bày tỏ cảm xúc"
                                              data-hover="tooltip"
                                              data-tooltip-position="above"
                                              data-tooltip-alignh="center"
                                              className="_8sop _5zvq"
                                              aria-label="Bày tỏ cảm xúc"
                                              data-testid="react_to_message_button"
                                            >
                                              <i className="img sp_OzXfMioWn3- sx_8e5ac5"></i>
                                            </button>
                                          </span>
                                          <span className="_8sow">
                                            <button
                                              data-tooltip-content="Khác"
                                              data-hover="tooltip"
                                              data-tooltip-position="above"
                                              data-tooltip-alignh="center"
                                              className="_8sop _2rvp"
                                              aria-label="Khác"
                                            >
                                              <i className="img sp_1xGvg2WAnAI sx_f2dd75"></i>
                                            </button>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="_40qi"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="_4tdt _ua1">
                          <div className="_31o4">
                            <div aria-hidden="true" className="_6--1">
                              <a
                                aria-label="Chung Nguyen - Thứ Năm 20:18chiều"
                                data-hover="tooltip"
                                data-tooltip-content="Chung Nguyen - Thứ Năm 20:18chiều"
                                data-tooltip-position="right"
                                className="_2yg8"
                                data-hovercard="/ajax/hovercard/chat.php?id=100006902562238&amp;type=chat"
                                href="https://www.facebook.com/profile.php?id=100006902562238"
                              >
                                <div className="_1gyw _55lt">
                                  <img
                                    width="28"
                                    height="28"
                                    alt=""
                                    className="img"
                                    src="https://scontent.fhph1-2.fna.fbcdn.net/v/t31.0-1/cp0/p60x60/26220410_2036967636543302_189946391717444754_o.jpg?_nc_cat=103&amp;_nc_ohc=AK2U1V62UnEAX9_mNBV&amp;_nc_ht=scontent.fhph1-2.fna&amp;oh=d2440b7b5beebc52b25bd13f21f7fb2f&amp;oe=5ECA2944"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="_ua2">
                            <div className="_4tdv">
                              <div className="_5wd4 _1nc7 _2cnu">
                                <div className="._1dlq _h8t">
                                  <div className="_5wd9 direction_ltr clearfix">
                                    <div className="_1e-x _n4o">
                                      <div className="_3_bl">
                                        <div className="_3_bp"></div>
                                        <div className="_5w1r _3_om _5wdf">
                                          <div className="_4gx_">
                                            <div className="_1aa6">
                                              <div className="">
                                                <span className="_5yl5">
                                                  <span>đúng goy</span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <span className="_40fu" data-hover="none">
                                        <span className="_1z_2 _2u_d">
                                          <span className="_8sow">
                                            <button
                                              data-tooltip-content="Bày tỏ cảm xúc"
                                              data-hover="tooltip"
                                              data-tooltip-position="above"
                                              data-tooltip-alignh="center"
                                              className="_8sop _5zvq"
                                              aria-label="Bày tỏ cảm xúc"
                                              data-testid="react_to_message_button"
                                            >
                                              <i className="img sp_OzXfMioWn3- sx_8e5ac5"></i>
                                            </button>
                                          </span>
                                          <span className="_8sow">
                                            <button
                                              data-tooltip-content="Khác"
                                              data-hover="tooltip"
                                              data-tooltip-position="above"
                                              data-tooltip-alignh="center"
                                              className="_8sop _2rvp"
                                              aria-label="Khác"
                                            >
                                              <i className="img sp_1xGvg2WAnAI sx_f2dd75"></i>
                                            </button>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="_40qi"></div>
                              </div>
                              <div className="_5wd4 _1nc7 _2cnu">
                                <div className="._1dlq _h8t">
                                  <div className="_5wd9 direction_ltr clearfix">
                                    <div className="_1e-x _n4o">
                                      <div className="_3_bl">
                                        <div className="_3_bp"></div>
                                        <div className="_5w1r _3_om _5wdf">
                                          <div className="_4gx_">
                                            <div className="_1aa6">
                                              <div className="">
                                                <span className="_5yl5">
                                                  <span>phải thế chứ</span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <span className="_40fu" data-hover="none">
                                        <span className="_1z_2 _2u_d">
                                          <span className="_8sow">
                                            <button
                                              data-tooltip-content="Bày tỏ cảm xúc"
                                              data-hover="tooltip"
                                              data-tooltip-position="above"
                                              data-tooltip-alignh="center"
                                              className="_8sop _5zvq"
                                              aria-label="Bày tỏ cảm xúc"
                                              data-testid="react_to_message_button"
                                            >
                                              <i className="img sp_OzXfMioWn3- sx_8e5ac5"></i>
                                            </button>
                                          </span>
                                          <span className="_8sow">
                                            <button
                                              data-tooltip-content="Khác"
                                              data-hover="tooltip"
                                              data-tooltip-position="above"
                                              data-tooltip-alignh="center"
                                              className="_8sop _2rvp"
                                              aria-label="Khác"
                                            >
                                              <i className="img sp_1xGvg2WAnAI sx_f2dd75"></i>
                                            </button>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="_40qi"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="_4gd0">
                          <div className="_510g _510e seen">
                            <div className="_510h"></div>
                            <span className="_510f">Đã xem lúc 20:30</span>
                          </div>
                        </div>

                        <div className="accessible_elem _2kwv">
                          Kết thúc cuộc trò chuyện
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_2hc2">
                <div></div>
              </div>
              <div className="_4g6x">
                <div className="_4g6y">
                  <div className="_4g6z _4g71">Kéo liên kết/file vào đây</div>
                  <div className="_4g6z _4g6- _4g6_">Thả tệp tại đây</div>
                  <div className="_4g6z _4g6- _4g70">Thả liên kết tại đây</div>
                </div>
              </div>
              <div
                className="fbNubFlyoutFooter"
                data-testid="composer_root"
                style={{ display: "none" }}
              >
                <div className="_1d4_" role="presentation">
                  <div className="_552h">
                    <div className="">
                      <span className="_mh6" id="cch_f3b4be6c5db3c54">
                        <div>
                          <div className="_5rp7 _5rp8">
                            <div className="_1p1t">
                              <div className="_1p1v" id="placeholder-eohu">
                                Nhập tin nhắn...
                              </div>
                            </div>
                            <div className="_5rpb">
                              <div
                                aria-autocomplete="list"
                                aria-controls="js_1bo"
                                aria-describedby="placeholder-eohu"
                                aria-expanded="false"
                                className="notranslate _5rpu"
                                role="combobox"
                              >
                                <div data-contents="true">
                                  <div
                                    data-block="true"
                                    data-editor="eohu"
                                    data-offset-key="9v4a5-0-0"
                                  >
                                    <div
                                      data-offset-key="9v4a5-0-0"
                                      className="_1mf _1mj"
                                    >
                                      <span data-offset-key="9v4a5-0-0">
                                        <br data-text="true" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <ul className="_552n _22v_ _6jv5 _6jv6">
                    <li
                      className="_13f-"
                      data-testid="composer_photo_uploader_root"
                    >
                      <form
                        action="https://upload.facebook.com/ajax/mercury/upload.php"
                        className="_vzk _4uld"
                        title="Thêm ảnh"
                        method="post"
                      >
                        <input type="hidden" name="attach_id" />
                        <input type="hidden" name="images_only" value="true" />
                        <div
                          className="_6gd _m _4q60 _3rzn _6a"
                          data-testid="photo_upload_button"
                        >
                          <span className="_4q61 _6gb _6wm4 _6ge _6jtn">
                            <i className="hidden_elem"></i>
                            <input
                              type="file"
                              className="_n _2__f _4e5e"
                              data-testid="photo_input"
                              name="attachment[]"
                              accept="image/*"
                              title="Thêm ảnh"
                            />
                          </span>
                        </div>
                      </form>
                    </li>
                    <li className="_6gd _13ge">
                      {" "}
                      <a className="_6gb _6wm4 _6gf _6jtm" href="#"></a>{" "}
                    </li>
                    <li className="_6gd _13gf">
                      {" "}
                      <a className="_6gb _6wm4 _6gs _6jtq" href="#"></a>{" "}
                    </li>
                    <li className="_6gd _13gg">
                      {" "}
                      <a className="_6gb _6wm4 _3oxr _6jtr" href="#"></a>{" "}
                    </li>
                    <li className="_6gd _13ga">
                      {" "}
                      <a className="_6gb _6wm4 _4cf0 _6jtp" href="#"></a>{" "}
                    </li>
                    <li className="_13gd">
                      <form
                        action="https://upload.facebook.com/ajax/mercury/upload.php"
                        className="_vzk _4uld"
                        title="Thêm file"
                        method="post"
                      >
                        <input type="hidden" name="attach_id" />
                        <input type="hidden" name="images_only" value="false" />
                        <div
                          className="_6gd _m _4q60 _3rzn _6a"
                          data-testid="photo_upload_button"
                        >
                          <span className="_4q61 _6gb _6wm4 _6gg _6jto">
                            <i className="hidden_elem"></i>
                            <input
                              type="file"
                              className="_n _2__f _4e5e"
                              data-testid="photo_input"
                              name="attachment[]"
                              accept="*"
                              title="Thêm file"
                            />
                          </span>
                        </div>
                      </form>
                    </li>
                    <li className="_6gd _13gk">
                      <span className="_6gb _6wm4 _5yhk _6jtu"></span>
                    </li>
                    <li className="_6gd _5ep3 _13gi">
                      <a
                        aria-label="Gửi lượt thích"
                        className="_5j_u _6gb _6wm4"
                        data-testid="send_a_like_button"
                        role="button"
                        title="Gửi lượt thích"
                        href="#"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
