// import React from 'react';
// import ReactDOM from 'react-dom';
// import Voting from './componets/Voting';

// const pair = ['Trainspotting', '28 days later'];

// ReactDOM.render(
// 	<Voting pair={pair}/>,
// 	document.getElementById('app')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
);
