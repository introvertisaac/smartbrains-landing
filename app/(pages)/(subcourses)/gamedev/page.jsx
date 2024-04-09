import InstructorsComponent from "@/app/components/(sub-pages)/Description";
import HeroSection from "@/app/components/(sub-pages)/HeroSection";
import SkillsSectionComponent from "@/app/components/(sub-pages)/SkillsSection";

const HomePage = () => {
  const hero = {
    image: {
      src: '/sub-pages/gamedev.jpg',
      alt: 'Game Development Hero Image',
    },
    title: 'Embark on an Adventure with Game Development!',
    description:
      'Welcome to our game development course for kids! Are you ready to create your own exciting and interactive games? With our game development course, you can turn your imagination into reality and build amazing games that you can play and share with your friends and family. Get ready for an adventure like no other!',
    features: [
      {
        title: 'Engaging Lessons',
        description:
          'Interactive lessons designed specifically for kids to learn game development in a fun and exciting way.',
      },
      {
        title: 'Hands-on Projects',
        description:
          'Practice what you learn by creating your own games, from simple puzzles to action-packed adventures.',
      },
      {
        title: 'Expert Guidance',
        description:
          'Receive personalized guidance from experienced instructors who will mentor you every step of the way.',
      },
      {
        title: 'Creative Freedom',
        description:
          'Let your imagination run wild as you design characters, worlds, and gameplay mechanics for your games.',
      },
    ],
    extraDescription:
      'Join us on this thrilling journey to unlock the power of game development and unleash your potential as a future game designer!',
    ctaButton: {
      label: 'Get Started',
    },
    downloadButton: {
      label: 'Download Curriculum',
    },
    rating: '4.7/5',
    contentTitle: 'What You Will Learn:',
    contentList: [
      'Fundamentals of game development and programming concepts',
      'Creating game environments, characters, and animations',
      'Implementing gameplay mechanics and interactivity using coding languages like JavaScript',
      'Testing and debugging your games to ensure they work smoothly',
      'Publishing your games and sharing them with others',
    ],
    backgroundImage: {
      src: '/page-bg.svg',
    },
  };

  const courseData = {
    title: 'Game Development for Kids',
    description:
      'In this course, kids will learn the fundamentals of game development and programming, empowering them to create their own games from scratch. From designing characters to coding gameplay mechanics, students will develop essential skills while bringing their game ideas to life in the digital world.',
    skills: [
      'Learn the basics of game development and programming concepts',
      'Design characters, environments, and gameplay mechanics for your games',
      'Develop problem-solving skills through hands-on coding projects',
      'Enhance creativity by building unique and engaging games',
      'Gain confidence in game development and coding to pursue future projects',
    ],
    imageSource: '/sub-pages/gamedev.png',
  };
  
  

    return (
      <div>
        <HeroSection hero={hero} />
        <InstructorsComponent />
        <SkillsSectionComponent {...courseData} />

        {/* Other components */}
      </div>
    );
  };

export default HomePage;
