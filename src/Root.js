import React from 'react';
// import Clock from './Clock';
// import Folder from './Folder';
// import Weather from './Weather';
// import AutoComplete from './Auto';
import { BrowserRouter } from 'react-router-dom';
import Widgets from './Widgets';

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

const Root = () => (
  <BrowserRouter>
    <Widgets folders={folders} names={names} />
  </BrowserRouter>
);

export default Root;
// {/* <div><Clock />
//     <Folder folders={folders} />
//     <Weather />
//     <AutoComplete names={names} /></div> */}
