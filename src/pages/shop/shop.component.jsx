import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import shopBanner from "../../assets/yomex-owo-GAN9zxqj5f4-unsplash.jpg";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebabse/firebase.utils";
import "./shop.styles.scss";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      // console.log(collectionMap);
      // console.log(snapshot);
    });
  }

  render() {
    const { match } = this.props;
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
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
