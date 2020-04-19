require("dotenv").load();

import app from './app';

app.listen(process.env.PORT || 3333);