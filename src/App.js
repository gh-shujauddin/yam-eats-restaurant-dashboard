import { Layout, Image, Button } from "antd";
import SideMenu from "./components/SideMenu";
import AppRoutes from "./components/AppRoutes";
import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

const { Sider, Content, Footer } = Layout;
function App({ signOut }) {
  return (
    <Layout>
      <Sider
        style={{
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
            preview={false}
          />

          <SideMenu />
        </div>

        <Button danger style={{ margin: 10 }} onClick={signOut}>
          Sign Out
        </Button>
      </Sider>
      <Layout>
        <Content style={{}}>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Yam Eats Restaurant Dashboard © 2024
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withAuthenticator(App);
