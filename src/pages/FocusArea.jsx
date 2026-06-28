import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import FocusDetailTemplate from '../components/common/FocusDetailTemplate';
import { focusAreas } from '../data/content';

const FocusArea = () => {
  const { areaId } = useParams();
  
  // Find the focus area data based on the URL parameter
  const focusData = focusAreas[areaId];

  // If the parameter doesn't match any data, redirect to home
  if (!focusData) {
    return <Navigate to="/" replace />;
  }

  return (
    <FocusDetailTemplate
      title={focusData.title}
      description={focusData.desc}
      keyImpactStats={focusData.stats}
      imagePlaceholder={focusData.imagePlaceholder}
    />
  );
};

export default FocusArea;
