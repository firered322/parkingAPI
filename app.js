const express = require("express");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', ()=> {
    console.log('Hi')
})

app.listen(PORT, () => {
  console.log(`App running at port: ${PORT}`);
});
