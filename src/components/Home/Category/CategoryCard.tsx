"use client";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Avatar, Card, Col, Image, Row, Skeleton } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetServicesQuery } from "@/redux/features/services/serviceApi";
import { Content, Header } from "antd/es/layout/layout";

const { Meta } = Card;

const CategoryCard = () => {
  const [loading, setLoading] = useState(true);

  const { data } = useGetServicesQuery({});

  return (
    <>
      <Row gutter={16}>
        {data?.map((service: any) => (
          <div key={service.id}>
            <Col lg={4} md={3} sm={2} xs={1}>
              <Card
                style={{ width: 200, marginTop: 16 }}
                cover={
                  <Image
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <Meta title={service.title} />
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </>
  );
};

export default CategoryCard;
