import InstructorsComponent from "@/app/components/(sub-pages)/Description";
import HeroSection from "@/app/components/(sub-pages)/HeroSection";
import SkillsSectionComponent from "@/app/components/(sub-pages)/SkillsSection";

const HomePage = () => {
  const hero = {
    image: {
      src: '/scratch_image.jpeg',
      alt: 'Scratch Programming Hero Image',
    },
    title: 'Let Your Creativity Soar with Scratch!',
    description: 'Welcome to our Scratch programming course for kids! Scratch is a beginner-friendly programming language that allows you to create interactive stories, games, and animations. With Scratch, you can express your creativity and learn fundamental coding concepts in a fun and engaging way. Get ready to unleash your imagination!',
    features: [
      { title: 'Interactive Learning', description: 'Engaging and interactive lessons designed specifically for kids to learn Scratch programming with ease.' },
      { title: 'Hands-on Projects', description: 'Practice what you learn by creating your own interactive stories, games, and animations using Scratch blocks.' },
      { title: 'Creative Exploration', description: 'Explore your creativity and problem-solving skills as you design and share your projects with the Scratch community.' },
      { title: 'Safe and Supportive Environment', description: 'Join a supportive community of young creators and receive feedback and encouragement on your projects.' },
    ],
    extraDescription: 'Join us on this exciting journey to discover the magic of coding with Scratch and unleash your potential as a future programmer!',
    ctaButton: {
      label: 'Get Started',
    },
    downloadButton: {
      label: 'Download Curriculum',
    },
    rating: '4.8/5',
    contentTitle: 'What You Will Learn:',
    contentList: [
      'Introduction to Scratch programming environment and its features',
      'Creating and customizing sprites and backgrounds',
      'Using Scratch blocks to program animations, interactions, and events',
      'Building simple games, stories, and simulations',
      'Sharing and remixing projects with the Scratch community',
    ],
  };

  const courseData = {
    title: 'Scratch Programming for Kids',
    description:
      'In this course, kids will learn the basics of programming using Scratch, a visual programming language developed by MIT. From creating animations to building games, students will develop essential coding skills while having fun and expressing their creativity with Scratch.',
    skills: [
      'Learn the fundamentals of programming using Scratch blocks',
      'Understand basic coding concepts such as loops, conditionals, and variables',
      'Develop problem-solving skills through hands-on coding projects',
      'Enhance creativity by designing and sharing interactive stories, games, and animations',
      'Join a supportive community of young creators and receive feedback on your projects',
    ],
    imageSource: '/scratch_image.jpeg',
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
