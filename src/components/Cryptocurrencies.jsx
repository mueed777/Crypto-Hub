/* eslint-disable no-unused-vars */
import { Card, Col, Row } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import millify from "millify";

const Cryptocurrencies = () => {
  const { data, isFetching, error } = useGetCryptosQuery();
  const cryptos = data?.data?.coins;

  console.log("DATA HERE :", cryptos);

  return (
    <>
      <Row className="cypto-card-container" gutter={[32, 32]}>
        {cryptos.map((currency) => (
          // console.log("NAMEEE: ", currency.rank)
          // console.log("NAMEEE: ", currency.name)
          <Col
            key={currency.uuid}
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img className="crypto-image" src={currency.iconUrl}></img>
                }
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
