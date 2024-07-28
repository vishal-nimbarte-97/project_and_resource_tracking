const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const statusRoutes = require('./routes/statusRoutes');
const projectUserRoutes = require('./routes/projectUserRoutes');
const issueTypeRoutes = require('./routes/issueTypeRoutes');
const issueRoutes = require('./routes/issueRoutes');
const commentRoutes = require('./routes/commentRoutes');
const attachmentRoutes = require('./routes/attachmentRoutes');
const labelRoutes = require('./routes/labelRoutes');
const issueLabelRoutes = require('./routes/issueLabelRoutes'); // Add this line

const { sequelize, connection } = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/projects', projectRoutes);
app.use('/users', userRoutes);
app.use('/statuses', statusRoutes);
app.use('/projectUsers', projectUserRoutes);
app.use('/issueTypes', issueTypeRoutes);
app.use('/issues', issueRoutes);
app.use('/comments', commentRoutes);
app.use('/attachments', attachmentRoutes);
app.use('/labels', labelRoutes);
app.use('/issueLabels', issueLabelRoutes); // Add this line

// app.get('/', (req, res) => {
//     res.send("Hello, World!");
// });

app.listen(port, async () => {
    try {
        await connection();
        await sequelize.sync({ force: false });
        console.log('Database synchronized successfully.');
        console.log(`Server is running on port http://localhost:${port}`);
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});
