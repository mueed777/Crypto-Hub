/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import "./App.css";
import {
  Navbar,
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  Homepage,
  News,
} from "./components/import";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar></Navbar>
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/news" element={<News />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
