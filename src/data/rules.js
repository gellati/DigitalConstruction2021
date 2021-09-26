export const floorplan_1_1_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'greaterThanInclusive',
        value: 24,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 423,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'greaterThanInclusive',
        value: 12,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_1_1',
      floorplanPrice: 501978,
      floorplanCO2: 72036,
    },
  },
};
export const floorplan_1_2_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 18,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 423,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 10,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_1_2',
      floorplanPrice: 516218,
      floorplanCO2: 74726,
    },
  },
};
export const floorplan_1_3_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 15,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 423,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 8,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_1_3',
      floorplanPrice: 507430,
      floorplanCO2: 75368,
    },
  },
};
export const floorplan_1_4_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 11,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 423,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 6,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_1_4',
      floorplanPrice: 481232,
      floorplanCO2: 74334,
    },
  },
};

export const floorplan_2_1_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 32,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'greaterThan',
        value: 423,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 545,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 16,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_2_1',
      floorplanPrice: 663190,
      floorplanCO2: 94736,
    },
  },
};
export const floorplan_2_2_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 26,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'greaterThan',
        value: 423,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 545,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 13,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_2_2',
      floorplanPrice: 719674,
      floorplanCO2: 107200,
    },
  },
};
export const floorplan_2_3_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 20,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'greaterThan',
        value: 423,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 545,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 11,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_2_3',
      floorplanPrice: 663703,
      floorplanCO2: 97522,
    },
  },
};
export const floorplan_2_4_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 16,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'greaterThan',
        value: 423,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 545,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 7,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_2_4',
      floorplanPrice: 594426,
      floorplanCO2: 94638,
    },
  },
};
export const floorplan_3_1_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 40,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 667,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 20,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_3_1',
      floorplanPrice: 824402,
      floorplanCO2: 117436,
    },
  },
};
export const floorplan_3_2_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 28,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 667,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 12,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_3_2',
      floorplanPrice: 754236,
      floorplanCO2: 116142,
    },
  },
};
export const floorplan_3_3_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 20,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 667,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 8,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_3_3',
      floorplanPrice: 727467,
      floorplanCO2: 118275,
    },
  },
};
export const floorplan_3_4_rule = {
  conditions: {
    all: [
      {
        fact: 'inhabitantsSliderValue',
        operator: 'lessThanInclusive',
        value: 16,
      },
      {
        fact: 'totalM2SliderValue',
        operator: 'lessThanInclusive',
        value: 667,
      },
      {
        fact: 'totalRoomCountSliderValue',
        operator: 'lessThanInclusive',
        value: 8,
      },
    ],
  },
  event: {
    type: 'floor-property',
    params: {
      floorplanName: 'floorplan_3_4',
      floorplanPrice: 695584,
      floorplanCO2: 112026,
    },
  },
};
