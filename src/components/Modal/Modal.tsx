import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Modal.scss";

let mousePosition: { x: number; y: number } | null;
const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  setTimeout(() => (mousePosition = null), 100);
};

if (
  typeof window !== "undefined" &&
  window.document &&
  window.document.documentElement
) {
  document.documentElement.addEventListener("click", getClickPosition);
}

interface ModalProps {
  title?: React.ReactNode | string;
  visible?: boolean;
  width?: string | number;
  centered?: boolean;
  confirmLoading?: boolean;
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  maskTransitionName?: string;
  transitionName?: string;
  closeIcon?: React.ReactNode;
}

export default class Modal extends Component<ModalProps> {
  static propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
  };
  static defaultProps = {
    width: 520,
    transitionName: "zoom",
    maskTransitionName: "fade",
    confirmLoading: false,
    visible: false
  };

  handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel(e);
    }
  };

  handleOk = (e: React.MouseEvent<HTMLElement>) => {
    const { onOk } = this.props;
    if (onOk) {
      onOk(e);
    }
  };

  RenderFooter = () => {
    const { okText, cancelText, confirmLoading } = this.props;
    return (
      <React.Fragment>
        <button type="button" className="ant-btn" onClick={this.handleCancel}>
          <span>cancelText</span>
        </button>
        <button
          type="button"
          className="ant-btn ant-btn-primary"
          onClick={this.handleOk}
        >
          <span>okText</span>
        </button>
      </React.Fragment>
    );
  };
  render() {
    const {
      title,
      visible,
      width,
      centered,
      confirmLoading,
      children,
      footer,
      maskTransitionName,
      transitionName,
      closeIcon
    } = this.props;

    const closeIconToRender = (
      <span className="close-x">
        <i
          className="close-icon"
          // type="close"
        />
      </span>
    );

    return (
      <React.Fragment>
        {/* {visible ? ( */}
        <div className="modal-root">
          <div className="modal-root__mask" onClick={this.handleCancel}></div>

          <div className="modal-root__wrapper modal-centered" role="dialog">
            <div role="document" className="modal-transition">
              <div className="modal-content">
                <button
                  type="button"
                  className="modal-close"
                  onClick={this.handleCancel}
                >
                  <span className="modal-close-x">
                    <i className="icon dripicons-cross"></i>
                  </span>
                </button>
                <div className="modal-header">
                  <div className="modal-title">{title}</div>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                  {footer === undefined ? <this.RenderFooter /> : footer}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ) : null} */}
      </React.Fragment>
    );
  }
}
