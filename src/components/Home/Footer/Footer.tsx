"use client";
import { Col, Flex, List, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
const FooterPage = () => {
  return (
    <div>
      <Footer style={{ textAlign: "center", backgroundColor: "ACACAC" }}>
        <Row gutter={16}>
          <Col
            lg={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              EventEmpire
            </p>
            <p>Social Media</p>
            <Flex gap="small" justify="center">
              <List>
                <FacebookOutlined
                  style={{
                    fontSize: "1.5rem",
                  }}
                />
              </List>
              <List>
                <TwitterOutlined
                  style={{
                    fontSize: "1.5rem",
                  }}
                />
              </List>
              <List>
                <LinkedinOutlined
                  style={{
                    fontSize: "1.5rem",
                  }}
                />
              </List>
              <List>
                <InstagramOutlined
                  style={{
                    fontSize: "1.5rem",
                  }}
                />
              </List>
            </Flex>
          </Col>
          <Col
            lg={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              EventEmpire
            </p>
            <List>Dhaka</List>
            <List>Rajshahi</List>
            <List>Khulna</List>
            <List>Chittagong</List>
            <List>Sylhet</List>
          </Col>
          <Col
            lg={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Suppliers
            </p>
            <List>Photographers</List>
            <List>Decorators</List>
            <List>venues Planner</List>
            <List>Designers</List>
            <List>Makeup Artists</List>
          </Col>
          <Col
            lg={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Quick Links
            </p>
            <List>About Us</List>
            <List>Careers</List>
            <List>Contact Us</List>
            <List>Privacy Policy</List>
            <List>Terms & Conditions</List>
          </Col>
        </Row>
        ©All Right Reserves to EventEmpire 2023
      </Footer>
    </div>
  );
};

export default FooterPage;
