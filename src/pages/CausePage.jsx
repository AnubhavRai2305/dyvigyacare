import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DetailTemplate from '../components/common/DetailTemplate';
import { causesData } from '../data/content';

const CausePage = () => {
  const { causeId } = useParams();
  
  const causeData = causesData[causeId];
  
  if (!causeData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="cause-page-wrapper">
      <DetailTemplate data={causeData} type="cause" causeId={causeId} />
    </div>
  );
};

export default CausePage;
