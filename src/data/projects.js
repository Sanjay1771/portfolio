import projectSmartSpend from '../assets/project_smartspend.png';
import projectRecipe from '../assets/project_recipe.png';
import projectPlanner from '../assets/project_planner.png';
import projectFaceTracker from '../assets/project_healthcare.png';
import projectIotHealth from '../assets/project_iot_health.png';
import projectIotFall from '../assets/project_iot_fall.png';

const projects = [
  {
    id: 1,
    title: 'SmartSpend Expense Manager',
    description: 'A Flutter-powered expense tracker with smart categories, detailed analytics, and comprehensive financial reports to help users take control of their spending.',
    image: projectSmartSpend,
    tags: ['Flutter', 'Dart', 'SQLite'],
    liveUrl: null,
    githubUrl: 'https://github.com/Sanjay1771/expense-tracker-app.git',
    featured: true,
  },
  {
    id: 2,
    title: 'Recipe Finder App',
    description: 'A beautiful React application to search, discover, and save recipes via external APIs. Features smart filtering, favorites, and a clean responsive interface.',
    image: projectRecipe,
    tags: ['React.js', 'JavaScript', 'API', 'Supabase'],
    liveUrl: null,
    githubUrl: 'https://github.com/Sanjay1771/recipe-finder-app.git',
    featured: true,
  },
  {
    id: 3,
    title: 'Smart Daily Planner',
    description: 'A premium productivity app for managing tasks, schedules, and priorities with an elegant Apple-inspired UI, calendar views, and real-time sync.',
    image: projectPlanner,
    tags: ['React.js', 'Material UI', 'Supabase'],
    liveUrl: null,
    githubUrl: 'https://github.com/Sanjay1771/smart-daily-planner.git',
    featured: true,
  },
  {
    id: 4,
    title: 'Face Tracker by AI-ML',
    description: 'Real-time face detection and tracking system built with computer vision and machine learning algorithms. Handles multiple faces with high accuracy and low latency.',
    image: projectFaceTracker,
    tags: ['Python', 'OpenCV', 'Machine Learning'],
    liveUrl: null,
    githubUrl: 'https://github.com/Sanjay1771/Face_Tracker_by_AI-ML.git',
    featured: true,
  },
  {
    id: 5,
    title: 'Smart Health Monitoring System',
    description: 'IoT-based elderly vital tracking system for remote care. Monitors physiological parameters and syncs data for real-time remote monitoring.',
    image: projectIotHealth,
    tags: ['IoT', 'Sensors', 'Embedded Systems'],
    liveUrl: null,
    githubUrl: 'https://github.com/Sanjay1771', // Placeholder link
    featured: true,
  },
  {
    id: 6,
    title: 'Wheelchair Fall Detection System',
    description: 'IoT fall detection system with instant SMS safety alerts. Built with accelerometer sensors to ensure immediate response during emergencies.',
    image: projectIotFall,
    tags: ['IoT', 'SMS', 'C++'],
    liveUrl: null,
    githubUrl: 'https://github.com/Sanjay1771', // Placeholder link
    featured: true,
  },
];

export default projects;
