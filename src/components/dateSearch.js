import { useState } from "react";
import { Button, Row, Col, Input, DatePicker } from "antd";
const DateSearch = ({ getFrom, getSpecCount }) => {
  const [date, setDate] = useState({
    from: "",
    to: "",
  });
  let allFrom = "",
    allTo = "";
  const onChangeOne = (e) => {
    let d = "";
    if (e !== null) {
      d = new Date(e._d);
      d = {
        year: d.getFullYear(),
        month: ("0" + (d.getMonth() + 1)).slice(-2),
        day: ("0" + d.getDate()).slice(-2),
      };

      setDate({ from: d });
    }

    setDate({ from: d });
  };
  const onChange = (e) => {
    if (e !== null) {
      allFrom = new Date(e[0] ? e[0]._d : "");
      allTo = new Date(e[1] ? e[1]._d : "");

      allFrom = {
        year: allFrom.getFullYear(),
        month: ("0" + (allFrom.getMonth() + 1)).slice(-2),
        day: allFrom.getDate(),
      };
      allTo = {
        year: allTo.getFullYear(),
        month: ("0" + (allTo.getMonth() + 1)).slice(-2),
        day: allTo.getDate(),
      };

      setDate({ from: allFrom, to: allTo });
    }
    setDate({ from: allFrom, to: allTo });
  };
  return (
    <>
      <Row gutter={[8, 48]} style={{ marginBottom: 20 }}>
        <Col xs={24} sm={12} lg={10}>
          <Input.Group compact>
            <DatePicker
              style={{ width: "70%" }}
              onChange={onChangeOne}
              // showTime={true}
            />
          </Input.Group>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Button onClick={() => getFrom(date)}>
            Get mti count from this date
          </Button>
        </Col>
      </Row>
      <Row gutter={[8, 48]} style={{ marginBottom: 20 }}>
        <Col xs={24} sm={12} lg={10}>
          <Input.Group compact>
            <DatePicker.RangePicker
              style={{ width: "70%" }}
              onChange={onChange}
            />
          </Input.Group>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Button onClick={() => getSpecCount(date)}>
            Get specefic Range mti Count
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default DateSearch;
