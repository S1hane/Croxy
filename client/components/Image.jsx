/* eslint-disable no-underscore-dangle */
import React from 'react';
import axios from 'axios';
import Thumbs from './Thumbs';
import Modal from './Modal';

class Image extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      images: [],
      thumbClass: [],
      modalThumbClass: [],
      main: 0,
      modalMain: 0,
      favorite: false,
      showModal: false,
    };
    this.getItems = this.getItems.bind(this);
    this.thumbClick = this.thumbClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.leftModalClick = this.leftModalClick.bind(this);
    this.rightModalClick = this.rightModalClick.bind(this);
    this.modalThumbs = this.modalThumbs.bind(this);
    this.mainClick = this.mainClick.bind(this);
    this.changeFav = this.changeFav.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems(itemId) {
    const { id, main } = this.state;
    // const item = itemId || id;
    const item = Math.floor(Math.random() * Math.floor(10000000));
    axios.get(`/api/items/${item}`)
      .then(({ data }) => {
        const thumbsArray = [];
        const modalThumbsArray = [];
        for (let i = 0; i < data.images.length; i += 1) {
          if (i === main) {
            thumbsArray.push('image-thumbMain');
          } else {
            thumbsArray.push('image-thumb');
          }
          if ((i + 1) % 3 === 0) {
            modalThumbsArray.push('image-modalThumbMain');
          } else {
            modalThumbsArray.push('image-modalThumb');
          }
        }
        this.setState({
          id: data._id,
          images: data.images,
          favorite: data.favorite,
          thumbClass: thumbsArray,
          modalThumbClass: modalThumbsArray,
        });
      });
  }

  thumbClick(index) {
    if (document.getElementById('main')) {
      setTimeout(() => document.getElementById('main').setAttribute('class', 'image-main'), 500);
      document.getElementById('main').setAttribute('class', 'image-main image-fadeIn');
    }
    const { thumbClass } = this.state;
    thumbClass[thumbClass.indexOf('image-thumbMain')] = 'image-thumb';
    thumbClass[index] = 'image-thumbMain';
    this.setState({ main: Number(index), thumbClass });
  }

  leftClick() {
    if (document.getElementById('main')) {
      setTimeout(() => document.getElementById('main').setAttribute('class', 'image-main'), 500);
      document.getElementById('main').setAttribute('class', 'image-main image-fadeIn');
    }
    const { images, main, thumbClass } = this.state;
    thumbClass.push(thumbClass.shift());
    const max = images.length;
    if (main === 0) {
      this.setState({ main: max - 1 });
    } else {
      this.setState({ main: main - 1 });
    }
  }

  rightClick() {
    if (document.getElementById('main')) {
      setTimeout(() => document.getElementById('main').setAttribute('class', 'image-main'), 500);
      document.getElementById('main').setAttribute('class', 'image-main image-fadeIn');
    }
    const { images, main, thumbClass } = this.state;
    thumbClass.unshift(thumbClass.pop());
    const max = images.length;
    if (main === max - 1) {
      this.setState({ main: 0 });
    } else {
      this.setState({ main: main + 1 });
    }
  }

  leftModalClick() {
    const { modalMain, images } = this.state;
    const max = images.length;
    if (modalMain === 0) {
      this.setState({ modalMain: max - 1 });
    } else {
      this.setState({ modalMain: modalMain - 1 });
    }
  }

  rightModalClick() {
    const { modalMain, images } = this.state;
    const max = images.length;
    if (modalMain === max - 1) {
      this.setState({ modalMain: 0 });
    } else {
      this.setState({ modalMain: modalMain + 1 });
    }
  }

  modalThumbs(index) {
    this.setState({ modalMain: Number(index) });
  }

  mainClick(event) {
    event.preventDefault();
    const { showModal, main } = this.state;
    this.setState({ showModal: !showModal, modalMain: main });
  }

  changeFav(event) {
    event.preventDefault();
    const { id, favorite } = this.state;
    axios.patch(`/api/items/${id}`, { favorite })
      .then(() => {
        this.getItems();
      });
  }

  render() {
    const {
      images, main, thumbClass, modalThumbClass,
      showModal, modalMain, favorite,
    } = this.state;
    let favoriteButton;
    let fav;
    if (favorite) {
      favoriteButton = <path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" />;
      fav = 'image-fav';
    } else {
      favoriteButton = <path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" />;
      fav = 'image-notFav';
    }
    return (
      <div className="image-grid">

        <Thumbs thumbClass={thumbClass} images={images} thumbs={this.thumbClick} />

        <div className="image-col2">
          <button onClick={this.leftClick} className="image-left" type="button">
            <svg viewBox="0 0 24 24">
              <path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z" />
            </svg>
          </button>
          <span onClick={this.mainClick} name="main" role="button" tabIndex={0} onKeyUp={this.mainClick}><img id="main" name="main" className="image-main" alt="noimage" src={images[main]} /></span>
          <button onClick={this.rightClick} className="image-right" type="button">
            <svg viewBox="0 0 24 24">
              <path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z" />
            </svg>
          </button>
          <button onClick={this.changeFav} className={fav} type="button">
            <svg viewBox="0 0 24 24">
              {favoriteButton}
            </svg>
          </button>
        </div>

        <Modal
          thumbClass={modalThumbClass}
          images={images}
          main={modalMain}
          showModal={showModal}
          onClose={this.mainClick}
          left={this.leftModalClick}
          right={this.rightModalClick}
          modalThumbs={this.modalThumbs}
        />

      </div>
    );
  }
}
export default Image;
