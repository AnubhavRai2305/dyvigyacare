import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DetailTemplate from '../components/common/DetailTemplate';
import { projectsData } from '../data/content';

const ProjectPage = () => {
  const { projectId } = useParams();
  
  const projectData = projectsData[projectId];
  
  if (!projectData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="project-page-wrapper">
      <DetailTemplate data={projectData} type="project" />
    </div>
  );
};

export default ProjectPage;
