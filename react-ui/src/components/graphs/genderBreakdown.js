import React    from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';

export default class GenderBreakdown extends React.Component {

  constructor() {
    super();
    this.state = {
      femaleArtistCount: 0,
      maleArtistCount: 0
    };
  }

  componentWillMount() {
    this.getArtistCount("female", "femaleArtistCount");
    this.getArtistCount("male", "maleArtistCount");
  }

  render() {
    // Sets up gender breakdown graph
    var artistGenderBreakdown =
      <div>
        <VictoryPie
          innerRadius={100}
          labelRadius={120}
          colorScale={["tomato", "orange"]}
          style={{ labels: { fill: "white" } }}
          labels={(d) => d.y}
          labelComponent={<VictoryTooltip
            x={200} y={250}
            orientation="top"
            pointerLength={0}
            cornerRadius={50}
            width={100}
            height={100}
            flyoutStyle={{ fill: "black" }}
            />}
          data={[
            { x: 'Female', y: this.state.femaleArtistCount, label: '27% Women'},
            { x: 'Male', y: this.state.maleArtistCount, label: '73% Men' }
          ]}
        />
      </div>

    return (
      <div className="col-md-4">
        <div className="graph white-container-style">
          <h3 className="graph-header">Artists</h3>
          <div className="row">
            <div className="graph-img-div">
              { artistGenderBreakdown }
            </div>
          </div>
        </div>
      </div>
    );
  }

  getArtistCount(gender, counter) {
    fetch(`/api/collection/artists/?gender=${gender}`)
      .then(res => res.json())
      .catch(e => e)
      .then(res => this.setState({ [counter]: res.count }));
  }
}
