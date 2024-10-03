'use strict';

import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';

import DemoTimeline from 'demo';

const root = createRoot(document.getElementById('root'));
root.render(<DemoTimeline />);
