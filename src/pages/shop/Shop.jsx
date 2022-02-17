import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import SHOP_DATA from "./ShopData";

export default class Shop extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page px-6">
        <h1 className="text-4xl font-bold">COLLECTIONS</h1>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
