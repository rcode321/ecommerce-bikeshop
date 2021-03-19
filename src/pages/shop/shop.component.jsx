import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import shopBanner from "../../assets/yomex-owo-GAN9zxqj5f4-unsplash.jpg";

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
    <CollectionsOverview />
  </div>
);

export default ShopPage;
