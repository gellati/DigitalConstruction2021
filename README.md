# Digital Construction 2021

Project repo for Digital Construction hackathon held 24-26.9.2021.

Different parameters that define the properties for a building floor are given with different sliders. Submitting the parameters calculates which floor plan(s) from a list fulfills the given criteria.

There are two methods for the selection of the floor plan. The first is with simple `if/else` statements, and the second is with [json-rules-engine](https://github.com/cachecontrol/json-rules-engine).

The result of the selection is an array of the form

    [
      {
        floorplanName: <name>,
        floorplanPrice: <price>,
        floorplanCO2: <co2>
      }
    ]

The rule engine only gave one result that fitted the given criteria, and therefore an `if/else` selection algorithm was used to get more options to choose from.

The data used for the rule engine

| Floorplan name | inhabitants | gross floor area (m2) | apartments on floor | apartment area | balcony area | facade balcony percentage (%) | price  | co2(kg) |
| -------------- | ----------- | --------------------- | ------------------- | -------------- | ------------ | ----------------------------- | ------ | ------- |
| floorplan_1_1  | 24          | 423                   | 12                  | 306            | 0            | 0                             | 501978 | 72036   |
| floorplan_1_2  | 18          | 423                   | 10                  | 278            | 32           | 29                            | 516218 | 74726   |
| floorplan_1_3  | 15          | 423                   | 8                   | 265            | 48           | 43                            | 507430 | 75368   |
| floorplan_1_4  | 11          | 423                   | 6                   | 267            | 68           | 57                            | 481232 | 74334   |
| floorplan_2_1  | 32          | 545                   | 16                  | 402            | 0            | 0                             | 663190 | 94736   |
| floorplan_2_2  | 26          | 545                   | 13                  | 390            | 40           | 22                            | 719674 | 107200  |
| floorplan_2_3  | 20          | 545                   | 11                  | 356            | 56           | 39                            | 663703 | 97522   |
| floorplan_2_4  | 16          | 545                   | 7                   | 339            | 105          | 67                            | 594426 | 94638   |
| floorplan_3_1  | 40          | 667                   | 20                  | 498            | 0            | 0                             | 824402 | 117436  |
| floorplan_3_2  | 28          | 667                   | 12                  | 500            | 32           | 19                            | 754236 | 116142  |
| floorplan_3_3  | 20          | 667                   | 8                   | 467            | 75           | 41                            | 727467 | 118275  |
| floorplan_3_4  | 16          | 667                   | 8                   | 443            | 104          | 64                            | 695584 | 112026  |

The folder structure is the following

- components, web components built with [React](https://reactjs.org/). Styling with [styled-components](https://styled-components.com/)
- data, constants and rules used in the calculation
- utils, routines to compute the suitable floor plan

This repo only has the barebones application. The product showcased at the hackathon can be seen at [https://hyperfractal.vercel.app/](https://hyperfractal.vercel.app/)

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-nddny8)
