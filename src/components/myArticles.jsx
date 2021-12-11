import React, { Component } from "react";
import { List, Card } from "antd";
import { Button } from "antd";

class MyArticles extends Component {
  render() {
    const data = [
      {
        title: "Article 1",
      },
      {
        title: "Article 2",
      },
      {
        title: "Article 3",
      },
      {
        title: "Article 4",
      },
    ];
    return (
      <div>
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ marginLeft: "2rem" }}> My Articles</h2>
          <Button type="primary" onClick={(e) => {
              console.log(this.props);
              this.props.history.push("/addarticle");
            }}>Add Article</Button>
        </div>
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                style={{
                  marginLeft: "2rem",
                }}
              >
                <Card title={item.title}>Article content</Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
export default MyArticles;
