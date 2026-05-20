import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import ServiceDetailLayout from './ServiceDetailLayout';

const ServiceLiaisoningPage = () => {
  const service = SERVICES_DATA.find(s => s.id === 'liaisoning');
  return <ServiceDetailLayout service={service} />;
};

export default ServiceLiaisoningPage;
