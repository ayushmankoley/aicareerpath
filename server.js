// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Simple recommendation logic (replace with more sophisticated algorithm)
function generateRecommendations(userData) {
  const { skills, interests, workHistory } = userData;

  // Sample career paths based on skills and interests
  const careerPaths = [
    'Software Developer',
    'Data Analyst',
    'UX Designer',
    'Project Manager',
    'Digital Marketer',
  ].filter(path => 
    skills.toLowerCase().includes(path.toLowerCase()) || 
    interests.toLowerCase().includes(path.toLowerCase())
  );

  // Sample skills to develop
  const skillsToDevelop = [
    'Machine Learning',
    'Cloud Computing',
    'Agile Methodologies',
    'UI/UX Design',
    'Data Visualization',
  ].filter(skill => !skills.toLowerCase().includes(skill.toLowerCase()));

  return {
    careerPaths: careerPaths.length > 0 ? careerPaths : ['Software Developer', 'Data Analyst'],
    skillsToDevelop: skillsToDevelop.slice(0, 3),
  };
}

app.post('/api/recommend', (req, res) => {
  const userData = req.body;
  const recommendations = generateRecommendations(userData);
  res.json(recommendations);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});