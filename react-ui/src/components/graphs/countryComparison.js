import React from 'react';
import { VictoryChart, VictoryStack, VictoryBar, VictoryAxis, VictoryLegend, VictoryContainer } from 'victory';

const myDataset = [
  [
      {x: "Photography", y: 4165},
      {x: "Architecture & Design", y: 63},
      {x: "Painting & Sculpture", y: 408},
      {x: "Media Arts", y: 14}
  ],
  [
      {x: "Photography", y: 638},
      {x: "Architecture & Design", y: 844},
      {x: "Painting & Sculpture", y: 66},
      {x: "Media Arts", y: 0}
  ]
];

export default class CountryComparison extends React.Component {
  transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map((data) => {
      return data.map((datum, i) => {
        return {x: datum.x, y: (datum.y / totals[i]) * 100};
      });
    });
  }

  render() {
    const dataset = this.transformData(myDataset);
    const countryComparison =
    <div>
      <VictoryChart
        height={400} width={400}
        domainPadding={{x: 30, y: 20}}
        animate={{ duration: 2000 }}
      >
        <VictoryContainer><VictoryLegend
          data={[
          {name: 'US', symbol: { type: 'square'}},
          {name: 'Europe', symbol: { type: 'square'}}
          ]}
          gutter={5}
          colorScale={["tomato", "orange"]}
          padding={{left:60, top: 20}}
        /></VictoryContainer>
        <VictoryStack
          colorScale={["tomato", "orange"]}
        >
          {dataset.map((data, i) => {
            return <VictoryBar data={data} key={i}/>;
          })}
        </VictoryStack>
        <VictoryAxis dependentAxis
          tickFormat={(tick) => `${tick}%`}
        />
        <VictoryAxis
          tickFormat={["Photography", "Architecture", "Painting", "Media Arts"]}
        />
      </VictoryChart>
    </div>

    return (
      <div className="col-md-4">
        <div className="graph white-container-style">
          <h3 className="graph-header">United States vs European Art</h3>
          <div className="row">
            <div className="graph-img-div">
              { countryComparison }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
