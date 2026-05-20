import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import ServiceDetailLayout from './ServiceDetailLayout';

const ServiceJvPage = () => {
  const service = SERVICES_DATA.find(s => s.id === 'jv-proposals');
  return <ServiceDetailLayout service={service} />;
};

export default ServiceJvPage;
