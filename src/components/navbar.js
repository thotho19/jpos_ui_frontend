import { useState } from "react";
import Link from "next/link";
import {
  PieChartTwoTone,
  ContainerTwoTone,
  LeftCircleTwoTone,
  FolderOpenTwoTone,
  FilterTwoTone,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import styles from "../styles/Home.module.scss";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Navbar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={props.defaultSelectedKeys}
        >
          <Menu.Item
            key="1"
            icon={
              <PieChartTwoTone
                twoToneColor="  #36cfc9"
                style={{ fontSize: "25px" }}
              />
            }
          >
            <Link href="/dashboard">
              <a className={styles.navItem}>DashBoard</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            key="2"
            icon={
              <FolderOpenTwoTone
                twoToneColor="#EECA02"
                style={{ fontSize: "25px" }}
              />
            }
          >
            <Link href="/uploadLog">
              <a className={styles.navItem}>Upload Logs</a>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={
              <ContainerTwoTone
                twoToneColor="#9254de"
                style={{ fontSize: "25px" }}
              />
            }
          >
            <Link href="/log">
              <a className={styles.navItem}> Log</a>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<FilterTwoTone style={{ fontSize: "25px" }} />}
          >
            <Link href="/filterLog">
              <a className={styles.navItem}> Filter</a>
            </Link>
          </Menu.Item>
          {typeof window !== "undefined" && localStorage.getItem("token") && (
            <Menu.Item
              key="5"
              icon={
                <LeftCircleTwoTone
                  twoToneColor="  #52c41a"
                  style={{ fontSize: "25px" }}
                />
              }
              onClick={logout}
            >
              <Link href="/">
                <a className={styles.navItem}> Sign out</a>
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>{props.children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Navbar;
