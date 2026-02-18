import axios from 'axios';
import lodash from 'lodash';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';

// This line is way too long and exceeds the 100 character limit which should trigger the max line length error rule in the linter configuration that we have set up
console.log('This should not be here');

function Component() {
  // Bad import order - should be sorted
  const data = {
    apple: 2,
    banana: 3,
    zebra: 1,
  };

  // Use var instead of const/let
  const x = 10;

  // Debugger statement
  debugger;

  // Missing semicolon (if semi: always is enforced)
  const y = 20;

  // === vs ==
  if (x == 10) {
    console.log('Use === instead of ==');
  }

  // no-var violation
  console.log('You should use const/let');
}
