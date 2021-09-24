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
  return <ResultWrapper>Your floor plan is {result}</ResultWrapper>;
};

export default ResultArea;
