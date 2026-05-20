import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import ServiceDetailLayout from './ServiceDetailLayout';

const ServiceInventoryPage = () => {
  const service = SERVICES_DATA.find(s => s.id === 'new-inventory');
  return <ServiceDetailLayout service={service} />;
};

export default ServiceInventoryPage;
