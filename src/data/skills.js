import {
  SiHtml5, SiCss as SiCss3, SiJavascript, SiReact, SiTailwindcss, SiMui,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase, SiSupabase,
  SiFlutter, SiDart, SiOpenjdk as SiJava, SiPython, SiGit, SiVscodium as SiVisualstudiocode,
  SiAndroidstudio, SiPostman,
} from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    icon: SiReact,
    color: '#61DAFB',
    items: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Material UI', icon: SiMui, color: '#007FFF' },
    ],
  },
  {
    category: 'Backend',
    icon: SiNodedotjs,
    color: '#339933',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
    ],
  },
  {
    category: 'Database',
    icon: SiMongodb,
    color: '#47A248',
    items: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    ],
  },
  {
    category: 'Mobile',
    icon: SiFlutter,
    color: '#02569B',
    items: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
    ],
  },
  {
    category: 'Languages',
    icon: SiJava,
    color: '#ED8B00',
    items: [
      { name: 'Java', icon: SiJava, color: '#ED8B00' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
  },
  {
    category: 'Tools',
    icon: SiGit,
    color: '#F05032',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
      { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

export default skills;
