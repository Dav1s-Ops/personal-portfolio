import AccoladerImg from '../assets/accolader.png'
import WWVTImg from '../assets/wwvt.png';
import WhetherSweater from '../assets/whether-sweater.png';
import PersonalBlog from '../assets/PersonalBlog.png'

const projectList = [
  {
    img: WhetherSweater,
    title: 'Whether Sweater',
    framework: 'React // Ruby on Rails',
    belink: 'https://github.com/Dav1s-Ops/whether_sweater_api',
    felink: 'https://github.com/Dav1s-Ops/whether-sweater-fe',
    link: 'https://whether-sweater-fe.vercel.app/',
  },
  {
    img: PersonalBlog,
    title: 'Personal Blog',
    framework: 'Ruby on Rails',
    link: 'https://dw-blog-v3.fly.dev/',
    belink: 'https://github.com/Dav1s-Ops/dw-blog-v3',
  },
  {
    img: AccoladerImg,
    title: 'Accolader.io',
    framework: 'Ruby on Rails // AWS // Docker',
    link: 'https://accolader.io/'
  },
  {
    img: WWVTImg,
    title: "World's Wonder View Tower",
    link: 'https://www.friendsofthegenoatower.org/'
  },
];

export default projectList;