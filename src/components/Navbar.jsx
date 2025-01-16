/* eslint-disable no-unused-vars */
import React from "react";
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
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"></Avatar>
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className='menu-control-container'></Button> */}
      </div>

      <Menu>
        <Menu.Item icon={<HomeOutlined></HomeOutlined>} key={1}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item icon={<FundOutlined></FundOutlined>} key={2}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item icon={<MoneyCollectOutlined></MoneyCollectOutlined>} key={3}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>

        <Menu.Item icon={<BulbOutlined></BulbOutlined>} key={4}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
