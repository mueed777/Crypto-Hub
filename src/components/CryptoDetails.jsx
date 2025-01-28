/* eslint-disable no-unused-vars */
import {
  CheckOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  StopOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import millify from "millify";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { Col, Select, Row, Typography } from "antd";
import { useState } from "react";
import { Option } from "antd/es/mentions";
import HTMLReactParser from "html-react-parser";
import Title from "antd/es/typography/Title";
// import { Title } from "antd/es/typography/Title";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimePeriod] = useState("7d");
  const { data, isFetching, error } = useGetCryptoDetailsQuery(coinId);
  if (isFetching) return "Loading crypto details.........";
  if (error) return "Error to get crypto details.......";

  console.log("👻👻👻👻👻👻👻👻👻Crypto details: ", data);

  const cryptoDetails = data.data.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price ? millify(cryptoDetails.price) : "N/A"}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Rank",
      value: cryptoDetails?.rank || "N/A",
      icon: <NumberOutlined />,
    },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume ? millify(cryptoDetails.volume) : "N/A"}`, // TODO: volume undefined
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${cryptoDetails?.marketCap ? millify(cryptoDetails.marketCap) : "N/A"}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails?.allTimeHigh?.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.approvedSupply ? ( // TODO: approvedSupply undefnied
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails?.totalSupply)}`, // TODO: totalSupply undefined
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails?.circulatingSupply)}`, // TODO: circulatingSupply undefined
      icon: <ExclamationCircleOutlined />,
    },
  ];

  // console.log("Crypto numberOfMarkets !!!!!", cryptoDetails?.name);

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title className="coin-name">
          {cryptoDetails.name} ({cryptoDetails?.symbol || "--"}) Price
        </Title>
        <p>
          {cryptoDetails.name} live price in US dollars. View value statistics,
          market cap and supply
        </p>
      </Col>
      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Time Period"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>

      {/* Line chart */}

      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <h1 className="coin-details-heading">
              {cryptoDetails.name} Value Statistics
            </h1>
            <p>An overview showing the stats of {cryptoDetails.name}</p>
          </Col>

          {stats.map(({ icon, title, value }, index) => (
            <Col key={index} className="coin-stats">
              <Col className="coin-stats-name">
                <p>{icon}</p>
                <p>{title}</p>
              </Col>
              <strong>{value}</strong>
            </Col>
          ))}
        </Col>

        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <h1 className="coin-details-heading">Other Statistics</h1>
            <p>An overview showing the stats of all cryptocurrencies</p>
          </Col>

          {genericStats.map(({ icon, title, value }, index) => (
            <Col key={index} className="coin-stats">
              <Col className="coin-stats-name">
                <p>{icon}</p>
                <p>{title}</p>
              </Col>
              <strong>{value}</strong>
            </Col>
          ))}
        </Col>
      </Col>

      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} lclassName="coin-details-heading">
            What is {cryptoDetails.name}?
          </Title>
          <h3>{HTMLReactParser(cryptoDetails.description)}</h3>
        </Row>

        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {cryptoDetails.name} Links
          </Title>
          {cryptoDetails.links.map((link, index) => (
            <Row className="coin-link" key={index}>
              <Title level={5} className="link-name">
                {link.type}
              </Title>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
