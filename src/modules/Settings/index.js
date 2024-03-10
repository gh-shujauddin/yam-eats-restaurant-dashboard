import { Button, Card, Form, Input } from "antd";
import { useState } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

function Settings() {
  const [address, setAddress] = useState(null);
  const [coordinate, setCoordinate] = useState(null);

  const getAddressLatLng = async (address) => {
    setAddress(address);
    const geocodedAddress = await geocodeByAddress(address.label);
    const latLng = await getLatLng(geocodedAddress[0]);
    setCoordinate(latLng);
    console.log(latLng);
  };

  return (
    <Card title="Restaurant Details" style={{ margin: 20 }}>
      <Form wrapperCol={{ span: 8 }}>
        <Form.Item label="Restaurant name" required>
          <Input placeholder="Enter restaurant name here" />
        </Form.Item>
        <Form.Item label="Restaurant address" required>
          <GooglePlacesAutocomplete
            apiKey={"AIzaSyCN7hyU2yOff1Ges8FOkfu23vs4FI2neXg"}
            selectProps={{
              value: address,
              onChange: getAddressLatLng,
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Settings;
