import { useState, useEffect } from "react";
import { Table, Tag, Button, Row, Col } from "antd";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.scss";
import DateSearch from "../components/dateSearch";
import { Client } from "../api";
import SearchFields from "../components/searchFields";
const Log = () => {
  const [data, setData] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [filters, setFilters] = useState([]);
  const direction = ["ascend", "descend", "ascend"];

  const f = (i) => {
    let fSchema = [];
    let filterdata = [];
    data?.map((item) => {
      const f = filterdata.indexOf(item[i]);

      f === -1 && filterdata.push(item[i]);
      fSchema = filterdata?.map((item) => ({
        text: item,
        value: item,
      }));
      // setFilters(fSchema);
    });
    return fSchema;
  };

  const columns = [
    {
      width: 150,
      title: "At",
      dataIndex: "at",
      key: "at",
      render: (text) => <a>{text}</a>,
      filters: f("at"),
      filterSearch: true,
      onFilter: (value, record) => record.at?.includes(value),
      sorter: (a, b) => a.at - b.at,

      sortDirections: direction,
    },
    {
      width: 150,
      title: "Message Type",
      key: "msgType",
      dataIndex: "msgType",

      sortDirections: direction,
      filters: f("msgType"),
      filterSearch: true,
      onFilter: (value, record) => record.msgType?.includes(value),
      render: (tags) => (
        <>
          <Tag
            color={
              tags === "send"
                ? "#52c41a"
                : tags === "receive"
                ? "#096dd9"
                : tags === "info"
                ? "#fadb14"
                : tags === "warn"
                ? "#fa541c"
                : tags === "io-timeout"
                ? "#cf1322"
                : tags === "connect"
                ? "#391085"
                : tags === "version"
                ? "#c41d7f"
                : tags === "commit"
                ? "#434343"
                : "default"
            }
            key={tags}
          >
            {tags}
          </Tag>
        </>
      ),
    },
    {
      width: 150,
      title: "realm",
      dataIndex: "realm",
      key: "realm",
      filters: f("realm"),
      filterSearch: true,
      onFilter: (value, record) => record.realm?.includes(value),
      sorter: (a, b) => a.realm - b.realm,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 0 : mti",
      key: "mti",
      dataIndex: "mti",
      filters: f("mti"),
      filterSearch: true,
      onFilter: (value, record) => record.mti?.includes(value),
      sorter: (a, b) => a.mti - b.mti,

      sortDirections: direction,
      render: (tags) => (
        <>
          <Tag color={tags === "1100" ? "#f50" : "#87d068"} key={tags}>
            {tags}
          </Tag>
        </>
      ),
    },

    {
      width: 150,
      title: " 39 : response_code",
      key: "response_code",
      dataIndex: "response_code",

      sortDirections: direction,
      filters: f("response_code"),
      filterSearch: true,
      onFilter: (value, record) => record.response_code?.includes(value),
    },
    {
      width: 150,
      title: " 24 : function_code",
      key: "function_code",
      dataIndex: "function_code",

      sortDirections: direction,
      filters: f("function_code"),
      filterSearch: true,
      onFilter: (value, record) => record.function_code?.includes(value),
    },
    {
      width: 150,
      title: " 2 : pan",
      key: "pan",
      dataIndex: "pan",

      filters: f("pan"),
      filterSearch: true,
      onFilter: (value, record) => record.pan?.includes(value),
      sorter: (a, b) => a.pan - b.pan,

      sortDirections: direction,
    },

    {
      width: 150,
      title: " 7 : transmission_date_and_time",
      key: "transmission_date_and_time",
      dataIndex: "transmission_date_and_time",

      filters: f("transmission_date_and_time"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.transmission_date_and_time?.includes(value),
      sorter: (a, b) =>
        a.transmission_date_and_time - b.transmission_date_and_time,

      sortDirections: direction,
    },

    {
      width: 150,
      title: " 11 : stan",
      dataIndex: "stan",
      key: "stan",
      filters: f("stan"),
      filterSearch: true,
      onFilter: (value, record) => record.stan?.includes(value),
      sorter: (a, b) => a.stan - b.stan,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 18 : mcc",
      key: "mcc",
      dataIndex: "mcc",

      filters: f("mcc"),
      filterSearch: true,
      onFilter: (value, record) => record.mcc?.includes(value),
      sorter: (a, b) => a.mcc - b.mcc,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 3 : processing_code",
      key: "processing_code",
      dataIndex: "processing_code",
      sorter: (a, b) => a.processing_code.length - b.processing_code.length,
      filters: f("processing_code"),
      filterSearch: true,
      onFilter: (value, record) => record.processing_code?.includes(value),
      sorter: (a, b) => a.processing_code - b.processing_code,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 4 : transaction_amount",
      key: "transaction_amount",
      dataIndex: "transaction_amount",

      filters: f("processing_code"),
      filterSearch: true,
      onFilter: (value, record) => record.transaction_amount?.includes(value),
      sorter: (a, b) => a.transaction_amount - b.transaction_amount,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 23 : application_pan_sequence_number",
      key: "application_pan_sequence_number",
      dataIndex: "application_pan_sequence_number",

      filters: f("application_pan_sequence_number"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.application_pan_sequence_number?.includes(value),
      sorter: (a, b) =>
        a.application_pan_sequence_number - b.application_pan_sequence_number,

      sortDirections: direction,
    },

    {
      width: 150,
      title: " 12 : local_transaction_time",
      key: "local_transaction_time",
      dataIndex: "local_transaction_time",
      filters: f("system_trace_audit_number"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.system_trace_audit_number?.includes(value),
      sorter: (a, b) =>
        a.system_trace_audit_number - b.system_trace_audit_number,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 14 : expiration_date",
      key: "expiration_date",
      dataIndex: "expiration_date",

      filters: f("expiration_date"),
      filterSearch: true,
      onFilter: (value, record) => record.expiration_date?.includes(value),
      sorter: (a, b) => a.expiration_date - b.expiration_date,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 25 : point_of_service_condition_code",
      key: "point_of_service_condition_code",
      dataIndex: "point_of_service_condition_code",

      filters: f("point_of_service_condition_code"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.point_of_service_condition_code?.includes(value),
      sorter: (a, b) =>
        a.point_of_service_condition_code - b.point_of_service_condition_code,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 19: acquiring_institution_country_code",
      key: "acquiring_institution_country_code",
      dataIndex: "acquiring_institution_country_code",

      filters: f("acquiring_institution_country_code"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.acquiring_institution_country_code?.includes(value),
      sorter: (a, b) =>
        a.acquiring_institution_country_code -
        b.acquiring_institution_country_code,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 43: card_acceptor_namelocation",
      key: "card_acceptor_namelocation",
      dataIndex: "card_acceptor_namelocation",

      filters: f("card_acceptor_namelocation"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.card_acceptor_namelocation?.includes(value),
      sorter: (a, b) =>
        a.card_acceptor_namelocation - b.card_acceptor_namelocation,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 52 : personal_identification_number_data",
      key: "personal_identification_number_data",
      dataIndex: "personal_identification_number_data",

      filters: f("personal_identification_number_data"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.personal_identification_number_data?.includes(value),
      sorter: (a, b) =>
        a.personal_identification_number_data -
        b.personal_identification_number_data,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 53 : security_related_control_information",
      key: "security_related_control_information",
      dataIndex: "security_related_control_information",

      filters: f("security_related_control_information"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.security_related_control_information?.includes(value),
      sorter: (a, b) =>
        a.security_related_control_information -
        b.security_related_control_information,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 49 : transaction_currency_code",
      key: "transaction_currency_code",
      dataIndex: "transaction_currency_code",

      filters: f("transaction_currency_code"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.transaction_currency_code?.includes(value),
      sorter: (a, b) =>
        a.transaction_currency_code - b.transaction_currency_code,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 35 : track_2_data",
      key: "track_2_data",
      dataIndex: "track_2_data",
      filters: f("track_2_data"),
      filterSearch: true,
      onFilter: (value, record) => record.track_2_data?.includes(value),
      sorter: (a, b) => a.track_2_data - b.track_2_data,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 22 : point_of_service_entry_mode",
      key: "point_of_service_entry_mode",
      dataIndex: "point_of_service_entry_mode",

      filters: f("point_of_service_entry_mode"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.point_of_service_entry_mode?.includes(value),
      sorter: (a, b) =>
        a.point_of_service_entry_mode - b.point_of_service_entry_mode,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 32 : acquiring_institution_identification_code",
      key: "acquiring_institution_identification_code",
      dataIndex: "acquiring_institution_identification_code",

      filters: f("acquiring_institution_identification_code"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.acquiring_institution_identification_code?.includes(value),
      sorter: (a, b) =>
        a.acquiring_institution_identification_code -
        b.acquiring_institution_identification_code,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 37 : rrn",
      key: "rrn",
      dataIndex: "rrn",

      filters: f("rrn"),
      filterSearch: true,
      onFilter: (value, record) => record.rrn?.includes(value),
      sorter: (a, b) => a.rrn - b.rrn,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 41 : card_acceptor_terminal_identification",
      key: "card_acceptor_terminal_identification",
      dataIndex: "card_acceptor_terminal_identification",

      filters: f("card_acceptor_terminal_identification"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.card_acceptor_terminal_identification?.includes(value),
      sorter: (a, b) =>
        a.card_acceptor_terminal_identification -
        b.card_acceptor_terminal_identification,

      sortDirections: direction,
    },
    {
      width: 150,
      title: " 42 : card_acceptor_identification_code",
      key: "card_acceptor_identification_code",
      dataIndex: "card_acceptor_identification_code",

      filters: f("card_acceptor_identification_code"),
      filterSearch: true,
      onFilter: (value, record) =>
        record.card_acceptor_identification_code?.includes(value),
      sorter: (a, b) =>
        a.card_acceptor_identification_code -
        b.card_acceptor_identification_code,

      sortDirections: direction,
    },

    {
      width: 150,
      title: "f_55",
      key: "f_55",
      dataIndex: "f_55",

      filters: f("f_55"),
      filterSearch: true,
      onFilter: (value, record) => record.f_55?.includes(value),
      sorter: (a, b) => a.f_55 - b.f_55,

      sortDirections: direction,
    },
    {
      width: 150,
      title: "f_60",
      key: "f_60",
      dataIndex: "f_60",

      filters: f("f_60"),
      filterSearch: true,
      onFilter: (value, record) => record.f_60?.includes(value),
      sorter: (a, b) => a.f_60 - b.f_60,

      sortDirections: direction,
    },
  ];

  const getAll = async () => {
    setLoading(true);
    await Client.get(`api/lagotto/fields`)
      .then((res) => {
        setFiles(res.data.data);

        setLoading(false);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    getAll();
  }, []);
  useEffect(() => {
    setData(files);
  }, [files]);
  const getSpecCount = async (date) => {
    setLoading(true);
    await Client.post(`api/lagotto/fields-period`, date)
      .then((res) => {
        setFiles(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const getFrom = async (date) => {
    setLoading(true);
    await Client.post(`api/lagotto/fields-period`, date)
      .then((res) => {
        setFiles(res.data.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getSearchField = async (obj) => {
    setLoading(true);
    await Client.post(`api/lagotto/fields-search`, obj)
      .then((res) => {
        setFiles(res.data.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar defaultSelectedKeys={"3"}>
      <main className={styles.main}>
        <Table
          pagination={{pageSize:100}}
          title={() => (
            <div className="site-calendar-demo-card">
              <Row justify="space-around ">
                <Col sm={24} lg={12} xl={12}>
                  <DateSearch getFrom={getFrom} getSpecCount={getSpecCount} />
                </Col>
                <Col sm={24} lg={12} xl={12}>
                  <SearchFields getSearchField={getSearchField} />
                </Col>
              </Row>
              <Row gutter={[48, 48]} style={{ marginBottom: 20 }}>
                <Col>
                  <Button onClick={getAll}>Clear </Button>
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
export default Log;
