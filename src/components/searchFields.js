import { Input, Button, Form, Row, Col } from "antd";

const SearchFields = ({ getSearchField }) => {
  const onFinish = (values) => {
    const searchField = {};
    for (const item in values) {
      if (values[item] !== undefined) {
        let value = values[item];
        searchField[item] = value;
      }
    }
    getSearchField(searchField);
    //console.log(searchField);
  };
  return (
    <Form onFinish={onFinish}>
      <Row gutter={[16, 48]}>
        <Col xs={24} sm={12} lg={12} xxl={6}>
          <Form.Item label="mti" name="mti">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} lg={12} xxl={6}>
          <Form.Item label="msgType" name="msgType">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} lg={12} xxl={6}>
          <Form.Item label="rrn" name="rrn">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} lg={12} xxl={6}>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Col>
      </Row>
      {/* <Col>
        <Form.Item
          label="card_acceptor_terminal_identification"
          name="card_acceptor_terminal_identification"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="card_acceptor_identification_code"
          name="card_acceptor_identification_code"
        >
          <Input />
        </Form.Item>
      </Col> */}
    </Form>
  );
};
export default SearchFields;
