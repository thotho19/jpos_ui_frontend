import { useState, useEffect } from "react";
import { Table, Tag, Button, Row, Col } from "antd";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.scss";
import DateSearch from "../components/dateSearch";
import { Client } from "../api";
import SearchFields from "../components/searchFields";

const filterLog = () => {
  const [data, setData] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [filters, setFilters] = useState([]);
  const direction = ["ascend", "descend", "ascend"];

  // const f = (i) => {
  //   let fSchema = [];
  //   let filterdata = [];
  //   data?.map((item) => {
  //     const f = filterdata.indexOf(item[i]);

  //     f === -1 && filterdata.push(item[i]);
  //     fSchema = filterdata?.map((item) => ({
  //       text: item,
  //       value: item,
  //     }));
  //     // setFilters(fSchema);
  //   });
  //   return fSchema;
  // };

  const columns = [];

  useEffect(() => {
    setData(files);
  }, [files]);

  return (
    <Navbar defaultSelectedKeys={"4"}>
      <main className={styles.main}>
        <Table
          title={() => (
            <div className="site-calendar-demo-card">
              <Row gutter={[48, 48]} style={{ marginBottom: 20 }}>
                <Col>
                  <Button>filter Data </Button>
                </Col>
                <Col>
                  <Button>Clear </Button>
                </Col>
              </Row>
            </div>
          )}
          scroll={{ y: 640 }}
          bordered
          columns={columns}
          dataSource={data}
          className={styles.table}
          loading={loading}
        />
      </main>
    </Navbar>
  );
};
export default filterLog;
