import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiVite,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiSpring
} from 'react-icons/si'
import { FaJava, FaPython } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'
import { TbApi } from 'react-icons/tb'

// Maps a skill's exact label (from resumeData.js) to an icon component + a
// brand color. Anything not listed here just renders without an icon.
export const SKILL_ICONS = {
  HTML: { icon: SiHtml5, color: '#e34f26' },
  CSS: { icon: SiCss, color: '#1572b6' },
  JavaScript: { icon: SiJavascript, color: '#f7df1e' },
  React: { icon: SiReact, color: '#61dafb' },
  Vite: { icon: SiVite, color: '#bd34fe' },
  Java: { icon: FaJava, color: '#e76f00' },
  Python:{icon:FaPython,color:'#3776AB'},
  Spring: { icon: SiSpring, color: '#6db33f' },
  'Node.js': { icon: SiNodedotjs, color: '#3c873a' },
  'Express.js': { icon: SiExpress, color: '#9d7cff' },
  'REST APIs': { icon: TbApi, color: '#1aa179' },
  'JWT Auth': { icon: MdSecurity, color: '#9d7cff' },
  MySQL: { icon: SiMysql, color: '#4479a1' },
  MongoDB: { icon: SiMongodb, color: '#47a248' }
}
