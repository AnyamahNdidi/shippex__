import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Shipment {
  awbNumber: string;
  status: string;
}

const ShipmentList: React.FC = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [trackingNumber, setTrackingNumber] = useState('210173066689');

const fetchShipments = async () => {
  try {
    // Parameters in URL query
    // const params = {
    //   doctype: "AWB",
    //   filters: JSON.stringify({ name: ["like", "%210173066689%"] })
    // };

      const response = await axios.get('https://shippex-demo.bc.brandimic.com/api/method/frappe.client.get', {
          data: {
              doctype: 'AWB',
              filters: {
                  name: ['like', `%${trackingNumber}%`]
              }
          }
      });
      console.log(response)

    // if (response.status === 200) {
    //   const data = response.data;
    //   console.log(data);
    //   setShipments(data);
    // } else {
    //   console.error('Failed to fetch shipments', response.status);
    // }
  } catch (error) {
    console.error('Error fetching shipments ooo', error);
  }
};


  useEffect(() => {
    fetchShipments();
  }, []);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await fetchShipments();
    setIsRefreshing(false);
  };

  return (
    <div>
      <h1>Shipments</h1>
      <button onClick={onRefresh} disabled={isRefreshing}>
        {isRefreshing ? 'Refreshing...' : 'Refresh'}
      </button>
      <ul>
        {shipments.map((shipment, index) => (
          <li key={index}>
            AWB: {shipment.awbNumber} - Status: {shipment.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipmentList;
