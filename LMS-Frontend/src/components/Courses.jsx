import aicard from '../assets/aicard.png'
import fullstack from '../assets/fullstackcard.webp'
import uiux from '../assets/uiuxcard.jpeg'
import reactcard from '../assets/reactcard.png'
import nodejs from '../assets/nodejscard.jpeg'
import quality from '../assets/testingcard.jpeg'
import cyber from '../assets/cybercard.webp'
import blockchain from '../assets/blockchaincard.jpeg'

const coursesData = [
  {
    imageSrc: aicard,
    title: 'Course 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageSrc: fullstack,
    title: 'Course 2',
    description: 'Pellentesque ac libero in orci varius dictum.',
  },
  {
    imageSrc: uiux,
    title: 'Course 3',
    description: 'Vestibulum faucibus ligula non nulla tristique, eget malesuada mi euismod.',
  },
  {
    imageSrc: reactcard,
    title: 'Course 4',
    description: 'Suspendisse potenti. Vestibulum non tellus eu elit suscipit scelerisque.',
  },
  {
    imageSrc: nodejs,
    title: 'Course 5',
    description: 'Fusce auctor dui a erat mattis, eu vehicula velit efficitur.',
  },
  {
    imageSrc: quality,
    title: 'Course 6',
    description: 'Mauris at odio vel ex suscipit facilisis.',
  },
  {
    imageSrc: cyber,
    title: 'Course 7',
    description: 'Mauris at odio vel ex suscipit facilisis.',
  },
  {
    imageSrc: blockchain,
    title: 'Course 8',
    description: 'Mauris at odio vel ex suscipit facilisis.',
  },
];

function Courses() {
  return (
    <div className='pt-20 md:pt-20'>
    <div className="flex  flex-col items-center">
        <div className="section-title mb-8 flex" data-aos="fade-up">
          <h1 className="text-xl md:text-3xl font-bold md:font-bold text-center">My Courses</h1>
        </div>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4 md:ml-20 md:mr-10">
      {coursesData.map((course, index) => (
        <div
          key={index}
          className="w-[90%] mb-20 h-full bg-white rounded-xl overflow-hidden shadow-lg flex flex-col"
        >
          <img
            className="w-full h-48 "
            src={course.imageSrc}
            alt={course.title}
          />
          <div className="px-4 py-2 flex-grow">
            <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Courses;
