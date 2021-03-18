import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import shopBanner from "../../assets/yomex-owo-GAN9zxqj5f4-unsplash.jpg";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { selectCollections } from "../../redux/shop/shop.selectors";

import "./shop.styles.scss";

const ShopPage = ({ collections }) => (
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

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
