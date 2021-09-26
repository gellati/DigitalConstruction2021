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
        floorplanPrice: '501978',
        floorplanCO2: '72036',
      });
      results.push({
        floorplanName: 'floorplan_1_2',
        floorplanPrice: '516218',
        floorplanCO2: '74726',
      });
    } else {
      results.push({
        floorplanName: 'floorplan_1_3',
        floorplanPrice: '507430',
        floorplanCO2: '75368',
      });
      results.push({
        floorplanName: 'floorplan_1_4',
        floorplanPrice: '481232',
        floorplanCO2: '74334',
      });
    }
  }

  if (totalM2SliderValueInt >= 500 && totalM2SliderValueInt < 620) {
    if (inhabitantsSliderValueInt > 20) {
      results.push({
        floorplanName: 'floorplan_2_1',
        floorplanPrice: '663190',
        floorplanCO2: '94736',
      });
      results.push({
        floorplanName: 'floorplan_2_2',
        floorplanPrice: '719674',
        floorplanCO2: '10700',
      });
    } else {
      results.push({
        floorplanName: 'floorplan_2_3',
        floorplanPrice: '663703',
        floorplanCO2: '97522',
      });
      results.push({
        floorplanName: 'floorplan_2_4',
        floorplanPrice: '594426',
        floorplanCO2: '94638',
      });
    }
  }

  if (totalM2SliderValueInt >= 620) {
    if (inhabitantsSliderValueInt > 20) {
      results.push({
        floorplanName: 'floorplan_3_1',
        floorplanPrice: '824402',
        floorplanCO2: '117436',
      });
      results.push({
        floorplanName: 'floorplan_3_2',
        floorplanPrice: '754236',
        floorplanCO2: '117436',
      });
    } else {
      results.push({
        floorplanName: 'floorplan_3_3',
        floorplanPrice: '727467',
        floorplanCO2: '18275',
      });
      results.push({
        floorplanName: 'floorplan_3_4',
        floorplanPrice: '695584',
        floorplanCO2: '112026',
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
