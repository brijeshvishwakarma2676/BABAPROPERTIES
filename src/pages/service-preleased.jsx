import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import ServiceDetailLayout from './ServiceDetailLayout';

const ServicePreleasedPage = () => {
  const service = SERVICES_DATA.find(s => s.id === 'pre-leased');
  return <ServiceDetailLayout service={service} />;
};

export default ServicePreleasedPage;
