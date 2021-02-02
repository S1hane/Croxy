import React from 'react';
import PropTypes from 'prop-types';
import Thumbs from './Thumbs';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showZoomModal: false,
    };
    this.thumbClick = this.thumbClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.zoom = this.zoom.bind(this);
  }

  componentDidMount() {
    let transform = '';
    if ((navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) !== -1) {
      transform = '-o-transform:';
    } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
      transform = 'transform:';
    } else if (navigator.userAgent.indexOf('Safari') !== -1) {
      transform = '-webkit-transform:';
    } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
      transform = '-moz-transform:';
    } else if ((navigator.userAgent.indexOf('MSIE') !== -1) || (!!document.documentMode === true)) { // IF IE > 10
      transform = '-ms-transform:';
    } else {
      transform = 'transform:';
    }
    document.body.addEventListener('mousemove', (e) => {
      if (document.body.getElementsByClassName('image-modalZoomMain')[0] !== undefined) {
        document.body.getElementsByClassName('image-modalZoomMain')[0].setAttribute('style', `${transform} translate(${-e.pageX + 500}px, ${-e.pageY + 500}px) scale(2);`);
        const box = document.getElementsByClassName('image-modalZoomBox')[0].querySelector(':hover');
        if (box === null) {
          this.setState({ showZoomModal: false });
        }
      }
    });
  }

  onClose(event) {
    this.setState({ showZoomModal: false });
    const { onClose } = this.props;
    if (onClose) {
      onClose(event);
    }
  }

  thumbClick(index) {
    const { modalThumbs } = this.props;
    modalThumbs(index);
  }

  leftClick() {
    const { left } = this.props;
    left();
  }

  rightClick() {
    const { right } = this.props;
    right();
  }

  zoom() {
    const { showZoomModal } = this.state;
    this.setState({ showZoomModal: !showZoomModal });
  }

  render() {
    const { showZoomModal } = this.state;
    const {
      showModal, images, main, thumbClass,
    } = this.props;
    if (!showModal) {
      return null;
    }
    if (!showZoomModal) {
      return (
        <div className="image-backGround">
          <div className="image-modalHeader">
            <button onClick={(event) => this.onClose(event)} className="image-modalClose" type="button">
              <svg viewBox="0 0 24 24">
                <path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z" />
              </svg>
            </button>
          </div>

          <div className="image-modalGrid">
            <div className="image-modelCarousel">
              <button onClick={this.leftClick} className="image-modalLeft" type="button">
                <svg viewBox="0 0 24 24">
                  <path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z" />
                </svg>
              </button>

              <span onClick={this.zoom} name="main" role="button" tabIndex={0} onKeyUp={this.zoom}>
                <img
                  className="image-modalMain"
                  alt="noimage"
                  src={images[main]}
                />
              </span>

              <div className="image-modalCol3">
                <button onClick={this.rightClick} className="image-modalRight" type="button">
                  <svg viewBox="0 0 24 24">
                    <path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z" />
                  </svg>
                </button>
              </div>
            </div>

            <Thumbs thumbClass={thumbClass} images={images} thumbs={this.thumbClick} />

          </div>
        </div>
      );
    }
    return (
      <div className="image-backGround">
        <div className="image-modalHeader">
          <button onClick={(event) => this.onClose(event)} className="image-modalClose" type="button">
            <svg viewBox="0 0 24 24">
              <path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z" />
            </svg>
          </button>
        </div>

        <div className="image-modalGrid">
          <span onClick={this.zoom} className="image-modalZoomBox" name="main" role="button" tabIndex={0} onKeyUp={this.zoom}>
            <img
              className="image-modalZoomMain"
              alt="noimage"
              src={images[main]}
            />
          </span>

          <Thumbs thumbClass={thumbClass} images={images} thumbs={this.thumbClick} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbClass: PropTypes.arrayOf(PropTypes.string).isRequired,
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  left: PropTypes.func.isRequired,
  modalThumbs: PropTypes.func.isRequired,
  right: PropTypes.func.isRequired,
  main: PropTypes.number.isRequired,
};

export default Modal;
