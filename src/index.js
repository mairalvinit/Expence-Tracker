import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import {Provider} from './context/context';
import App from './App';
import './index.css'
dotenv.config();
const {React_App_SPEECHLY_ID } = process.env;
// eslint-disable-next-line
const appId = `${React_App_SPEECHLY_ID}`

ReactDOM.render(
    <SpeechProvider appId={appId} language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>
,document.getElementById("root"));