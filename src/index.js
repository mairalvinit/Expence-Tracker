import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { SpeechProvider } from '@speechly/react-client';

import {Provider} from './context/context';
import App from './App';
import './index.css';

dotenv.config();

ReactDOM.render(
    <SpeechProvider appId={process.env.APP_ID} language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>
,document.getElementById("root"));