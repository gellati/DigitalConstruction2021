import React from 'react';
import styled from 'styled-components';

const SliderComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0px 20x 0px;
`;

const SliderTitle = styled.div`
`;
const SliderWrapper = styled.div`
`;

const Slider = ({ name, min, max, value, onChange }) => {
  return (
    <SliderComponentWrapper>
      <SliderTitle>{name}</SliderTitle>
      <SliderWrapper>
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </SliderWrapper>
    </SliderComponentWrapper>
  );
};

export default Slider;
