import React, { Component } from "react";
import SellerSpaceHeader from "../components/sellerSpaceHeader";
import MyArticles from "../components/myArticles";
class Sellerspace extends Component {
  render() {
    return (
      <div>
        <SellerSpaceHeader history={this.props.history} />
        <MyArticles  history={this.props.history}/>
      </div>
    );
  }
}
export default Sellerspace;
