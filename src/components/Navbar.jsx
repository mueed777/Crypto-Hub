/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 799) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"></Avatar>
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined></MenuOutlined>
        </Button>
      </div>

      {activeMenu && (
        <Menu>
          <Menu.Item icon={<HomeOutlined></HomeOutlined>} key={1}>
            <Link
              to="/"
              onClick={() => screenSize < 799 && setActiveMenu(!activeMenu)}
            >
              Home
            </Link>
          </Menu.Item>

          <Menu.Item icon={<FundOutlined></FundOutlined>} key={2}>
            <Link
              to="/cryptocurrencies"
              onClick={() => screenSize < 799 && setActiveMenu(!activeMenu)}
            >
              Cryptocurrencies
            </Link>
          </Menu.Item>

          <Menu.Item
            icon={<MoneyCollectOutlined></MoneyCollectOutlined>}
            key={3}
          >
            <Link
              to="/exchanges"
              onClick={() => screenSize < 799 && setActiveMenu(!activeMenu)}
            >
              Exchanges
            </Link>
          </Menu.Item>

          <Menu.Item icon={<BulbOutlined></BulbOutlined>} key={4}>
            <Link
              to="/news"
              onClick={() => screenSize < 799 && setActiveMenu(!activeMenu)}
            >
              News
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
