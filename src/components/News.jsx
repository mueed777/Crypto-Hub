/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, Card, Col, List, Row } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Title from "antd/es/typography/Title";
import { Text } from "html-react-parser";
import moment from "moment";

const News = ({ isSimplified }) => {
  const demoImage =
    "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

  const count = isSimplified ? 9 : 200;
  const { data: cryptoNews, isFetching, error } = useGetCryptoNewsQuery();

  if (isFetching) return "Loading API...........";
  if (error)
    return "Error fetching data. Possibly exceeded API's rate limit......";

  console.log("🚀🚀🚀🚀🚀🚀Cypto News: ", cryptoNews);
  // console.log("🤨🤨🤨🤨🤨🤨Cypto News: ", cryptoNews?.data[0]);

  const displayedNews = cryptoNews.data.slice(0, count);

  return (
    <Row gutter={[24, 24]}>
      {displayedNews.map((news, index) => (
        <Col xs={24} sm={24} md={12} lg={12} xl={8} key={index}>
          <Card
            className="news-card"
            hoverable
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title
                  className="news-title"
                  style={{ fontSize: "17px", padding: "1px" }}
                >
                  {news.title}
                </Title>
                <img
                  src={news?.thumbnail || demoImage}
                  alt="news"
                  style={{ width: "40%", height: "20%", borderRadius: "3px" }}
                />
              </div>
              <p>
                {news.description.length > 400
                  ? `${news.description.substring(0, 400)}...`
                  : news.description}
              </p>
              <div className="provider-container" style={{ marginTop: "auto" }}>
                <strong>
                  {moment(news.createdAt).format("ddd, D MMM YYYY")}
                </strong>

                <strong>{moment(news.createdAt).format("h:mm a")}</strong>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
