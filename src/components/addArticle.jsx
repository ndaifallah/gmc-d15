import React, { Component } from "react";
import { Card, Input, Cascader, Button } from "antd";
import UploadImg from "./uploadImg";
const { TextArea } = Input;
const genderOptions = [
  {
    value: "Homme",
    label: "Homme",
  },
  {
    value: "Femme",
    label: "Femme",
  },
];
const SizeOptions = [
  {
    value: "Small",
    label: "Small",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "Large",
    label: "Large",
  },
  {
    value: "Extra large",
    label: "Extra large",
  },
];
class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
    };
  }
  render() {
    return (
      <div
        style={{
          width: "500px",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15%",
          marginLeft: "30%",
          background: " rgba(255, 255, 255, 0.2)",
          borderRadius: " 16px",
          boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          webkitBackdropFilter: " blur(5px)",
          border: " 1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Card
          title="Publish new article"
          bordered={false}
          style={{ width: 500 }}
        >
          <h3>
            Please inter your article information by completing the list below.
          </h3>
          <Input
            placeholder="Name of the article"
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <br />
          <br />
          <TextArea
            rows={4}
            placeholder="Description"
            onChange={(event) =>
              this.setState({ description: event.target.value })
            }
          />
          <br />
          <br />
          <Cascader options={genderOptions} placeholder="Gender" />
          <br />
          <br />
          <Cascader options={SizeOptions} placeholder="Size" />
          <br />
          <br />
          <Input
            placeholder="Price"
            onChange={(event) => this.setState({ price: event.target.value })}
          />
          <br />
          <br />
          <UploadImg />
          <br />
          <Button type="primary" block>
            Publish
          </Button>
        </Card>
      </div>
    );
  }
}
export default AddArticle;
