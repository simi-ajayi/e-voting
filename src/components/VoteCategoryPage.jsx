// VoteCategoryPage.jsx
import React from 'react';
import VoteCategory from './VoteCategory';

const VoteCategoryPage = ({ category }) => {
  let nominees;
  switch (category) {
    case 'studentModel':
      nominees = studentModelNominees;
      break;
    case 'developer':
      nominees = developerNominees;
      break;
    case 'tailor':
      nominees = tailorNominees;
      break;
    default:
      nominees = [];
  }

  return (
    <div>
      <VoteCategory nominees={nominees} />
    </div>
  );
};

export default VoteCategoryPage;