import ordersHistory from "../../assets/data/orders-history.json";
import { Card, Table, Tag } from "antd";

const OrderHistory = () => {
  
  const renderOrderStatus = (orderStatus) => {
    if (orderStatus === "Delivered") {
      return <Tag color="green">{orderStatus}</Tag>;
    } else if (orderStatus === "Declined") {
      return <Tag color="red">{orderStatus}</Tag>;
    }
  };

  const tableColumns = [
    {
      title: "Order ID",
      dataIndex: "orderID",
      key: "orderID",
    },
    {
      title: "Delivery Address",
      dataIndex: "deliveryAddress",
      key: "deliveryAddress",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$ ${price}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: renderOrderStatus,
    },
  ];
  return (
    <Card title="Order History" style={{ margin: 20 }}>
      <Table
        dataSource={ordersHistory}
        columns={tableColumns}
        rowKey={"orderID"}
      />
    </Card>
  );
};

export default OrderHistory;
