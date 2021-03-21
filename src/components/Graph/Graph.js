import { useState, useCallback, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

function Graph(props) {
  const [dataSet, setData] = useState([]);
  const people = props.store.graphR;
  const [test, setTest] = useState([]);
  const test2 = props.store.graphR;
  const dispatch = useDispatch();
  const info = { taco: 'taco' };
  //storing people from reducer
  let ethnicityKeyValues = {};
  let data = [];
  let buttData = [
    { name: 'butt', value: 2 },
    { name: 'buttox', value: 6 },
  ];

  const dataUpdate = () => {
    const ethnicity = people.map((person) => person.ethnicity);
    //selecting ethnicity property for each person

    for (let i = 0; i < ethnicity.length; i++) {
      let count = ethnicity[i];
      ethnicityKeyValues[count] = (ethnicityKeyValues[count] || 0) + 1;
      //counting how many times an ethnicity is referenced for value
    }

    for (const [key, value] of Object.entries(ethnicityKeyValues)) {
      //storing ethnicity and count in an array of objects
      //pie chart requires a data object with "name" and "value" keys.
      data.push({ name: key, value: value });
    }
  };

  const testFunction2 = () => {
    console.log('function fired');
    //think of the payload as a keyword as opposed to the key waiting for a value
    //when we call "payload" we're expecting an object to be passed.
    //info here is an object {taco: 'taco'}
    //if I don't pass an object, then whatever gets passed will be treated as the key waiting for a value
    //For example, payload: "taco"  will appear on the server as {taco: ''}
    dispatch({ type: 'TEST_POST', payload: info });
  };

  useEffect(() => {
    testFunction2();
  }, []);

  dataUpdate();

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
        >{`Total: ${value}`}</text>
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
    <ResponsiveContainer width="95%" height={700}>
      <PieChart width={500} height={500}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={dataSet}
          cx={300}
          cy={170}
          innerRadius={140}
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
export default connect(mapStoreToProps)(Graph);
