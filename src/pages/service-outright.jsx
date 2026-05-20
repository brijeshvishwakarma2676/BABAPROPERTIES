import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import ServiceDetailLayout from './ServiceDetailLayout';

const ServiceOutrightPage = () => {
  const service = SERVICES_DATA.find(s => s.id === 'outright-deals');
  return <ServiceDetailLayout service={service} />;
};

export default ServiceOutrightPage;
