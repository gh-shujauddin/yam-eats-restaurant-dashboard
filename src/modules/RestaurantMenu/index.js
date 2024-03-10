import React from "react";
import dishes from "../../assets/data/dishes.json";
import { Button, Card, Table } from "antd";
import { Link } from "react-router-dom";

function RestaurantMenu() {
  const tableColumns = [
    {
      title: "Menu Items",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$ ${price}`,
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button danger>Remove</Button>,
    },
  ];

  const renderNewItemButton = () => {
    return (
      <Link to={"create"}>
        <Button type="primary">New Item</Button>
      </Link>
    );
  };

  return (
    <Card title="Menu" style={{ margin: 20 }} extra={renderNewItemButton()}>
      <Table dataSource={dishes} rowKey="id" columns={tableColumns}></Table>
    </Card>
  );
}

export default RestaurantMenu;
