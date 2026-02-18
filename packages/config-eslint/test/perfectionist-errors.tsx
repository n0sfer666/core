import React, { useState } from 'react';

import MyComponentA from './MyComponentA';
import MyComponentZ from './MyComponentZ';
import helperUtilityA from './utils/helperUtilityA';
import helperUtilityB from './utils/helperUtilityB';

// This line is way too long and exceeds the 100 character limit which should trigger the max line length error when running linter
const veryLongObject = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };

type Props = {
  aField: string
  bField: number
  zField: string
};

// JSX props not sorted
function MyComponent(props: Props) {
  const { aField, bField, zField } = props;

  return (
    <div>
      <MyComponentA
        aProp={aField}
        bProp={bField}
        zProp={zField}
      />
    </div>
  );
}

export default MyComponent;
