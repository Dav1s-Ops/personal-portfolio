import AccoladerImg from '../assets/accolader.png'
import WWVTImg from '../assets/wwvt.png';
import WhetherSweater from '../assets/whether-sweater.png';
import PersonalBlog from '../assets/PersonalBlog.png'
import OneBillionSec from '../assets/one-billion-seconds.png'

const projectList = [
  {
    img: PersonalBlog,
    title: 'Personal Blog',
    framework: 'Ruby on Rails',
    link: 'https://dw-blog-v3.fly.dev/',
    belink: 'https://github.com/Dav1s-Ops/dw-blog-v3',
  },
  {
    img: OneBillionSec,
    title: "Seconds I've Been Alive",
    framework: 'JavaScript // HTML // CSS',
    link: 'https://one-billion-seconds.vercel.app/',
    felink: 'https://github.com/Dav1s-Ops/one-billion-seconds',
  },
  {
    img: WhetherSweater,
    title: 'Whether Sweater',
    framework: 'React // Ruby on Rails',
    belink: 'https://github.com/Dav1s-Ops/whether_sweater_api',
    felink: 'https://github.com/Dav1s-Ops/whether-sweater-fe',
    link: 'https://whether-sweater-fe.vercel.app/',
  },
  {
    img: AccoladerImg,
    title: 'Accolader.io',
    framework: 'Ruby on Rails // AWS // Docker',
    link: 'https://accolader.io/'
  },
];

export default projectList;