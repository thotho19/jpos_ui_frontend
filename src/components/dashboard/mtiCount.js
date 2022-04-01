import { useState, useEffect } from "react";
import DateSearch from "../dateSearch";
import { Row, Col, Button, Badge, Card } from "antd";
import { Client } from "../../api";

const MtiCount = () => {
  const colors = ["pink", "cyan", "green", "purple", "volcano", "magenta"];

  const [mtiCounts, setMtiCounts] = useState([]);
  const getAll = () => {
    Client.get(`/api/lagotto/count/mti`)
      .then((res) => {
        setMtiCounts(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getAll();
  }, []);
  const getSpecCount = async (date) => {
    await Client.post(`/api/lagotto/count/mti-period`, date)
      .then((res) => {
        setMtiCounts(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const getFrom = async (date) => {
    await Client.post(`/api/lagotto/count/mti-period`, date)
      .then((res) => {
        setMtiCounts(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <>
      <div className="site-calendar-demo-card">
        <DateSearch getSpecCount={getSpecCount} getFrom={getFrom} />

        <Row gutter={[48, 48]} style={{ marginBottom: 20 }}>
          <Col>
            <Button onClick={getAll}>Clear </Button>
          </Col>
        </Row>
      </div>
      <Row justify="space-around" gutter={[48, 48]}>
        {mtiCounts?.map((item, index) => (
          <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 4 }}>
            <Badge.Ribbon text={item.mti_count} color={colors[index]}>
              <Card title={<div style={{ margin: 5 }}>mti count </div>}>
                {item._id === "" ? "Null" : item._id}
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default MtiCount;
