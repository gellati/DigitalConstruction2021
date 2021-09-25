export const calculateResult = ({
  inhabitantsSliderValue,
  floorsSliderValue,
  totalM2SliderValue,
  buildingAreasliderValue,
  balconyPrecentageSliderValue,
  totalRoomCountSliderValue,
}) => {
  const result =
    parseInt(inhabitantsSliderValue) +
    parseInt(floorsSliderValue) +
    parseInt(totalM2SliderValue) +
    parseInt(buildingAreasliderValue) +
    parseInt(balconyPrecentageSliderValue) +
    parseInt(totalRoomCountSliderValue);
  return result;
};
