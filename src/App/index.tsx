import * as React from "react";
import { Layout, Menu, Icon, Row, Col } from "antd";

import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

export default class App extends React.Component {
  public render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={200}>
          <div
            style={{
              color: "#FFF",
              padding: 20,
              textAlign: "center"
            }}
          >
            <strong>Paradiddle</strong>
          </div>

          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["2"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="book" />Lessons
                </span>
              }
            >
              <Menu.Item key="1">Create New</Menu.Item>
              <Menu.Item key="2">View All</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout style={{ background: "#f0f2f5" }}>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Row>
              <Col offset={20} xs={4} style={{ textAlign: "right", padding: "20px" }}>
                <Icon type="user" style={{ fontSize: "1.5rem" }} />
              </Col>
            </Row>
          </Header>

          <Content
            style={{
              background: "#fff",
              padding: 15,
              margin: 15,
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
