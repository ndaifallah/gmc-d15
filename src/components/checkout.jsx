import React, { Component } from "react";
import { Card, Input, Button } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      adress: "",
    };
  }
  render() {
    console.log(this.props);
    return (
      <div className="site-card-border-less-wrapper">
        <Card title="Mes Achats" bordered={false} style={{ width: 400 }}>
          <h3>
            Merci de bien vouloir verifiez vos achats et effectuer les etapes
            ci-dessous
          </h3>
          <div>Mes achats:</div>
          <p>Total:</p>
          <p>Sous-Total:</p>
          <Input
            size="large"
            placeholder="First name"
            prefix={<UserOutlined />}
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <br />
          <br />
          <Input
            placeholder="Last name"
            prefix={<UserOutlined />}
            onChange={(event) =>
              this.setState({ lastName: event.target.value })
            }
          />
          <br />
          <br />
          <Input
            size="small"
            placeholder="Adress"
            prefix={<HomeOutlined />}
            onChange={(event) => this.setState({ adress: event.target.value })}
          />
          <br />
          <br />
          <Button
            type="primary"
            block
            /* onClick={(e) => {
              console.log(this.props);
              this.props.history.push("/thanks", {
                name: this.state.name,
                lastName: this.state.lastName,
                adress: this.state.adress,
              });
            }}*/
          >
            Buy
          </Button>
        </Card>
      </div>
    );
  }
}

export default Checkout;
