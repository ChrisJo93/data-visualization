import { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { PieChart, Pie, Sector } from 'recharts';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Graph(props) {
  const people = props.store.graphR;
  //storing people entries

  let ethnicityKeyValues = {};
  //counting how many times an ethnicity is referenced
  //this count will be used for pie chart value
  let data = [];

  const dataUpdate = () => {
    const ethnicity = people.map((person) => person.ethnicity);
    //storing only ethnicity key values

    for (let i = 0; i < ethnicity.length; i++) {
      let count = ethnicity[i];
      ethnicityKeyValues[count] = (ethnicityKeyValues[count] || 0) + 1;
    }
    console.log(Object.keys(ethnicityKeyValues));
    console.log(Object.values(ethnicityKeyValues));

    const key = Object.keys(ethnicityKeyValues);
    const value = Object.values(ethnicityKeyValues);
    for (const keys of key) {
      for (const values of value) {
        data.push({ name: keys, value: values });
      }
    }
  };
  dataUpdate();

  // list = list.filter((elem, index, self) => self.findIndex(
  //   (t) => {return (t.x === elem.x && t.y === elem.y)}) === index)

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`PV ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}
export default connect(mapStoreToProps)(Graph);
