import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import ResultArea from './ResultArea';
import {
  INHABITANTS_MIN,
  INHABITANTS_MAX,
  FLOORS_MIN,
  FLOORS_MAX,
  TOTAL_M2_MIN,
  TOTAL_M2_MAX,
  BUILDING_AREA_MIN,
  BUILDING_AREA_MAX,
  BALCONY_PERCENTAGE_MIN,
  BALCONY_PERCENTAGE_MAX,
  TOTAL_ROOM_COUNT_MIN,
  TOTAL_ROOM_COUNT_MAX,
  initialState,
} from '../data/constants';
import { calculateResult } from './../utils/calculator';

const SliderArea = styled.div`
  padding-top: 50px;
`;

const HeaderArea = styled.div`
  width: 80%;
  margin: 0 auto;
  paddingLeft: 10%;
  paddingRight: 10%;
`;

const SubmitButton = styled.button`

`;

const ResetButton = styled.button`

`;

const Dashboard = () => {
  const {
    initialInhabitants,
    initialFloors,
    initialTotalM2,
    initialBuildingArea,
    initialBalconyPercentage,
    initialTotalRoomCount,
  } = initialState;

  const [inhabitantsSliderValue, setInhabitantsSliderValue] =
    useState(initialInhabitants);
  const onInhabitantsSliderChange = (e) => {
    setInhabitantsSliderValue(e);
  };

  const [floorsSliderValue, setFloorsSliderValue] = useState(initialFloors);
  const onFloorsSliderChange = (e) => {
    setFloorsSliderValue(e);
  };
  const [totalM2SliderValue, setTotalM2SliderValue] = useState(initialTotalM2);
  const onTotalM2SliderChange = (e) => {
    setTotalM2SliderValue(e);
  };
  const [buildingAreasliderValue, setBuildingAreaSliderValue] =
    useState(initialBuildingArea);
  const onBuildingAreaSliderChange = (e) => {
    setBuildingAreaSliderValue(e);
  };
  const [balconyPrecentageSliderValue, setBalconyPrecentageSliderValue] =
    useState(initialBalconyPercentage);
  const onBalconyPrecentageSliderChange = (e) => {
    setBalconyPrecentageSliderValue(e);
  };
  const [totalRoomCountSliderValue, setTotalRoomCountSliderValue] = useState(
    initialTotalRoomCount
  );
  const onTotalRoomCountSliderChange = (e) => {
    setTotalRoomCountSliderValue(e);
  };

  const [showResult, setShowResult] = useState(false);

  const [result, setResult] = useState([]);

  const submitResult = () => {
    const result = calculateResult({
      inhabitantsSliderValue,
      floorsSliderValue,
      totalM2SliderValue,
      buildingAreasliderValue,
      balconyPrecentageSliderValue,
      totalRoomCountSliderValue,
      setResult,
    });
    //    setResult(result);
    setShowResult(true);
  };

  const resetValues = () => {
    setInhabitantsSliderValue(initialInhabitants);
    setFloorsSliderValue(initialFloors);
    setTotalM2SliderValue(initialTotalM2);
    setBuildingAreaSliderValue(initialBuildingArea);
    setBalconyPrecentageSliderValue(initialBalconyPercentage);
    setTotalRoomCountSliderValue(initialTotalRoomCount);
    setResult(null);
    setShowResult(false);
  };

  return (
    <div>
      <HeaderArea>
        <h1>HyperFractal</h1>
        <p>Please enter the parameters for the building floor.</p>
      </HeaderArea>
      <div>
        <SliderArea>
          <Slider
            name="Inhabitants"
            min={INHABITANTS_MIN}
            max={INHABITANTS_MAX}
            onChange={onInhabitantsSliderChange}
            value={inhabitantsSliderValue}
          />
          <Slider
            name="Floors"
            min={FLOORS_MIN}
            max={FLOORS_MAX}
            onChange={onFloorsSliderChange}
            value={floorsSliderValue}
          />
          <Slider
            name="Total m^2"
            min={TOTAL_M2_MIN}
            max={TOTAL_M2_MAX}
            onChange={onTotalM2SliderChange}
            value={totalM2SliderValue}
          />
          <Slider
            name="Building area"
            min={BUILDING_AREA_MIN}
            max={BUILDING_AREA_MAX}
            onChange={onBuildingAreaSliderChange}
            value={buildingAreasliderValue}
          />
          <Slider
            name="Balcoy percentage"
            min={BALCONY_PERCENTAGE_MIN}
            max={BALCONY_PERCENTAGE_MAX}
            onChange={onBalconyPrecentageSliderChange}
            value={balconyPrecentageSliderValue}
          />
          <Slider
            name="Total room count"
            min={TOTAL_ROOM_COUNT_MIN}
            max={TOTAL_ROOM_COUNT_MAX}
            onChange={onTotalRoomCountSliderChange}
            value={totalRoomCountSliderValue}
          />
        </SliderArea>

        <SubmitButton onClick={() => submitResult()}>Submit</SubmitButton>
        <ResetButton onClick={() => resetValues()}>Reset</ResetButton>
        {showResult && <ResultArea result={result} />}
      </div>
    </div>
  );
};

export default Dashboard;
