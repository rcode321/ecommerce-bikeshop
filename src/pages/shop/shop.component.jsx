import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import shopBanner from "../../assets/yomex-owo-GAN9zxqj5f4-unsplash.jpg";

import "./shop.styles.scss";

const ShopPage = ({ match }) => (
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
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
