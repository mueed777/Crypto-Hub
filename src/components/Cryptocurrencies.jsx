/* eslint-disable react/prop-types */
import { Card, Col, Input, Row } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useEffect, useState } from "react";

const Cryptocurrencies = ({ isSimplified }) => {
  const count = isSimplified ? 10 : 500;
  const { data, isFetching, error } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filterData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

    setCryptos(filterData);
  }, [data, search]);

  if (isFetching) return "Loading...";

  if (error) return "Something went wrong!!!";

  // console.log("🤑🤑🤑🤑🤑🤑🤑Cryptos:", data);
  // data?.data?.coins.map((coin) => {
  //   console.log(coin.name);
  // });
  // console.log("🤑🤑🤑🤑🤑🤑🤑Cryptos:", cryptos.name);

  return (
    <>
      {!isSimplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearch(e.target.value)}
          ></Input>
        </div>
      )}

      <Row className="cypto-card-container" gutter={[32, 32]}>
        {cryptos?.map((currency) => (
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
