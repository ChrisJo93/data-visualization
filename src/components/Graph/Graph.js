import { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { PieChart, Pie, Cell } from 'recharts';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

function Graph(props) {
  console.log(props.store.graphR);

  const peopleList = props.store.graphR.map();

  const data = [
    props.store.graphR,
    // { name: 'Group A', value: 'black' },
    // { name: 'Group B', value: 'green' },
    // { name: 'Group C', value: 300 },
    // { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default connect(mapStoreToProps)(Graph);
