import express from 'express';

import resourceRoutes from './routes/resourceRoutes';
import topicRoutes from './routes/topicRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/resources', resourceRoutes);
app.use('/topics', topicRoutes);
app.use('/users', userRoutes);



app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
