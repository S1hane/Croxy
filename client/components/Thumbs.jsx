import React from 'react';
import PropTypes from 'prop-types';

class Thumbs extends React.Component {
  constructor(props) {
    super(props);
    this.thumbClick = this.thumbClick.bind(this);
  }

  thumbClick(event) {
    event.preventDefault();
    const { thumbs } = this.props;
    thumbs(event.target.name);
  }

  render() {
    const { images, thumbClass } = this.props;
    if (thumbClass[0] === 'image-modalThumb') {
      const imageArray = [];
      let subArray = [];
      for (let i = 0; i < images.length; i += 1) {
        if ((i + 1) % 3 === 0) {
          subArray.push(images[i]);
          imageArray.push(subArray);
          subArray = [];
        } else {
          subArray.push(images[i]);
        }
      }
      if (images.length % 3 === 0) {
        return (
          <div className="image-modalCol2">
            <div className="image-modalThumbBox">
              {imageArray.map((triplet, index) => (
                <div key={triplet[0] + (Math.random() * Math.floor(100))}>
                  <div id="thumbCouple" className="image-thumbCouple">
                    <div name={index * 3} role="button" tabIndex={0} onClick={this.thumbClick} onKeyUp={this.thumbClick}>
                      <img name={index * 3} className={thumbClass[0]} alt="noimage" src={triplet[0]} />
                    </div>
                    <div name={index * 3 + 1} role="button" tabIndex={0} onClick={this.thumbClick} onKeyUp={this.thumbClick}>
                      <img name={index * 3 + 1} className={thumbClass[1]} alt="noimage" src={triplet[1]} />
                    </div>
                  </div>
                  <div name={index * 3 + 2} role="button" tabIndex={0} onClick={this.thumbClick} onKeyUp={this.thumbClick}>
                    <img name={index * 3 + 2} id="thumbMain" className={thumbClass[2]} alt="noimage" src={triplet[2]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
      return (
        <div className="image-modalCol2">
          <div className="image-modalThumbBox">
            {imageArray.map((triplet, index) => (
              <div key={triplet[0] + (Math.random() * Math.floor(100))}>
                <div className="image-thumbCouple">
                  <div name={index * 3} role="button" tabIndex={0} onClick={this.thumbClick} onKeyUp={this.thumbClick}>
                    <img name={index * 3} className={thumbClass[0]} alt="noimage" src={triplet[0]} />
                  </div>
                  <div name={index * 3 + 1} role="button" tabIndex={0} onClick={this.thumbClick} onKeyUp={this.thumbClick}>
                    <img name={index * 3 + 1} className={thumbClass[1]} alt="noimage" src={triplet[1]} />
                  </div>
                </div>
                <div name={index * 3 + 2} role="button" tabIndex={0} onClick={this.thumbClick} onKeyUp={this.thumbClick}>
                  <img name={index * 3 + 2} className={thumbClass[2]} alt="noimage" src={triplet[2]} />
                </div>
              </div>
            ))}
            <div className="image-thumbCouple">
              {subArray.map((image, index) => (
                <div name={index + imageArray.length} role="button" tabIndex={0} onClick={this.thumbClick} onKeyUp={this.thumbClick} key={image + (Math.random() * Math.floor(100))}>
                  <img name={index + imageArray.length} className={thumbClass[0]} alt="noimage" src={image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="image-col1">
        {images.map((image, index) => (
          <div name={index} role="button" tabIndex={0} onClick={this.thumbClick} onKeyUp={this.thumbClick} key={image + (Math.random() * Math.floor(100))}>
            <img name={index} className={thumbClass[index]} alt="noimage" src={image} />
          </div>
        ))}
      </div>
    );
  }
}

Thumbs.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbClass: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbs: PropTypes.func.isRequired,
};

export default Thumbs;
