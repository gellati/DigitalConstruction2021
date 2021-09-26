import { Engine } from 'json-rules-engine';

import {
  floorplan_1_1_rule,
  floorplan_1_2_rule,
  floorplan_1_3_rule,
  floorplan_1_4_rule,
  floorplan_2_1_rule,
  floorplan_2_2_rule,
  floorplan_2_3_rule,
  floorplan_2_4_rule,
  floorplan_3_1_rule,
  floorplan_3_2_rule,
  floorplan_3_3_rule,
  floorplan_3_4_rule,
} from '../data/rules';

export const calculateResult = ({
  inhabitantsSliderValue,
  floorsSliderValue,
  totalM2SliderValue,
  buildingAreasliderValue,
  balconyPrecentageSliderValue,
  totalRoomCountSliderValue,
  setResult,
}) => {
  const results = [];

  const inhabitantsSliderValueInt = parseInt(inhabitantsSliderValue);
  const totalM2SliderValueInt = parseInt(totalM2SliderValue);

  if (totalM2SliderValueInt < 500) {
    if (inhabitantsSliderValueInt > 16) {
      results.push({
        floorplanName: 'floorplan_1_1',
        floorplanPrice: '11',
        floorplanCO2: '11',
      });
      results.push({
        floorplanName: 'floorplan_1_2',
        floorplanPrice: '12',
        floorplanCO2: '21',
      });
    } else {
      results.push({
        floorplanName: 'floorplan_1_3',
        floorplanPrice: '13',
        floorplanCO2: '31',
      });
      results.push({
        floorplanName: 'floorplan_1_4',
        floorplanPrice: '14',
        floorplanCO2: '41',
      });
    }
  }

  if (totalM2SliderValueInt >= 500 && totalM2SliderValueInt < 620) {
    if (inhabitantsSliderValueInt > 20) {
      results.push({
        floorplanName: 'floorplan_2_1',
        floorplanPrice: '21',
        floorplanCO2: '12',
      });
      results.push({
        floorplanName: 'floorplan_2_2',
        floorplanPrice: '22',
        floorplanCO2: '22',
      });
    } else {
      results.push({
        floorplanName: 'floorplan_2_3',
        floorplanPrice: '23',
        floorplanCO2: '32',
      });
      results.push({
        floorplanName: 'floorplan_2_4',
        floorplanPrice: '24',
        floorplanCO2: '42',
      });
    }
  }

  if (totalM2SliderValueInt >= 620) {
    if (inhabitantsSliderValueInt > 20) {
      results.push({
        floorplanName: 'floorplan_3_1',
        floorplanPrice: '31',
        floorplanCO2: '13',
      });
      results.push({
        floorplanName: 'floorplan_3_2',
        floorplanPrice: '32',
        floorplanCO2: '23',
      });
    } else {
      results.push({
        floorplanName: 'floorplan_3_3',
        floorplanPrice: '33',
        floorplanCO2: '33',
      });
      results.push({
        floorplanName: 'floorplan_3_4',
        floorplanPrice: '34',
        floorplanCO2: '43',
      });
    }
  }
  setResult(results);
};

export const ruleEngineResult = ({
  inhabitantsSliderValue,
  floorsSliderValue,
  totalM2SliderValue,
  buildingAreasliderValue,
  balconyPrecentageSliderValue,
  totalRoomCountSliderValue,
  setResult,
}) => {
  const engine = new Engine();

  engine.addRule(floorplan_1_1_rule);
  engine.addRule(floorplan_1_2_rule);
  engine.addRule(floorplan_1_3_rule);
  engine.addRule(floorplan_1_4_rule);
  engine.addRule(floorplan_2_1_rule);
  engine.addRule(floorplan_2_2_rule);
  engine.addRule(floorplan_2_3_rule);
  engine.addRule(floorplan_2_4_rule);
  engine.addRule(floorplan_3_1_rule);
  engine.addRule(floorplan_3_2_rule);
  engine.addRule(floorplan_3_3_rule);
  engine.addRule(floorplan_3_4_rule);

  const facts = {
    inhabitantsSliderValue: parseInt(inhabitantsSliderValue),
    floorsSliderValue: parseInt(floorsSliderValue),
    totalM2SliderValue: parseInt(totalM2SliderValue),
    buildingAreasliderValue: parseInt(buildingAreasliderValue),
    balconyPrecentageSliderValue: parseInt(balconyPrecentageSliderValue),
    totalRoomCountSliderValue: parseInt(totalRoomCountSliderValue),
  };

  engine.run(facts).then(({ events }) => {
    events.map((event) => {
      const floorplanName = event.params.floorplanName;
      const floorplanPrice = event.params.floorplanPrice;
      const floorplanCO2 = event.params.floorplanCO2;

      setResult([
        {
          floorplanName,
          floorplanPrice,
          floorplanCO2,
        },
      ]);
    });
  });
};
