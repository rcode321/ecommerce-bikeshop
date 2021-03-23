import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import shopBanner from "../../assets/yomex-owo-GAN9zxqj5f4-unsplash.jpg";

import "./shop.styles.scss";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
