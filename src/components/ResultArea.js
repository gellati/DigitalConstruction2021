import React from 'react';
import styled from 'styled-components';

const ResultWrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  margin: 0 auto;
  height: 50px;
  margin-bottom: 5%;
  display: block;
`;

const ResultArea = ({ result }) => {
  return (
    <ResultWrapper>
      {result[0] && <div>Your floor plan is {result[0].floorplanName}</div>}
    </ResultWrapper>
  );
};

export default ResultArea;
