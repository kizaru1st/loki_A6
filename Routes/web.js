const express = require('../node_modules/express');
const adminRouter = require('./admin')
const app = express();

app.listen(5000, () => {
    console.log("Server is running");
});

app.use(adminRouter);

app.route('/')
    .get((req, res) => {
        res.send("Halaman Home");
    })

app.post('/', (req, res) => {
    res.send('Post Req')
 });
    // Tambah 3 Method HTTP (Post, Put, Delete)