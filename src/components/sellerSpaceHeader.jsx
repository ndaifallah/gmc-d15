import React, { Component } from "react";
import { PageHeader } from "antd";

class SellerSpaceHeader extends Component {
  render() {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          onBack={(e) => {
            console.log(this.props);
            this.props.history.push("/home");
          }}
          title="My Space"
          subTitle="This is a subtitle"
        />
        ,
      </div>
    );
  }
}

export default SellerSpaceHeader;
