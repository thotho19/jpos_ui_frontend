import { useRouter } from "next/router";
import { Form, Input, Button, Checkbox } from "antd";
import styles from "../styles/Home.module.scss";

const Login = () => {
  const router = useRouter();
  const onFinish = (values) => {
    localStorage.setItem("token", "Success");
    router.replace("./dashboard");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.contLogin}>
      <Form
        className={styles.login}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        size="large"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
