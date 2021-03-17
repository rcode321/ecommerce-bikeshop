import React from "react";

import SHOP_DATA from "./shop.data.js";

import shopBanner from "../../assets/yomex-owo-GAN9zxqj5f4-unsplash.jpg";
import CollectionPreview from "../../components/collection-preview/collection-preview";

import "./shop.styles.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <div className="shopPageContainerTitle">
          <h1 className="shopPageTitle">SHOP NOW</h1>
          <p className="shopPageSubtitle">
            Featuring our latest collections and releases.
          </p>
        </div>
        <div className="shopPageContainer">
          <div className="overlay"></div>
          <img className="shopBanner" src={shopBanner} alt="shopBanner" />
        </div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
