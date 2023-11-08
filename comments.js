// Create web server
// http://localhost:3000
// http://localhost:3000/coments
// http://localhost:3000/coments/1

// Require modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// Create app
const app = express();