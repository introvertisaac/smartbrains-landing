import InstructorsComponent from "@/app/components/(sub-pages)/Description";
import HeroSection from "@/app/components/(sub-pages)/HeroSection";
import SkillsSectionComponent from "@/app/components/(sub-pages)/SkillsSection";

const HomePage = () => {
  const hero = {
    image: {
      src: '/python_image.jpeg',
      alt: 'Python Hero Image',
    },
    title: 'Discover the Fun of Python Programming!',
    description: 'Welcome to our Python coding course for kids! Python is a powerful and versatile programming language used by developers around the world. With Python, you can create games, build websites, analyze data, and much more. Get ready to embark on an exciting journey into the world of coding!',
    features: [
      { title: 'Interactive Learning', description: 'Engaging and interactive lessons designed specifically for kids to learn Python programming with ease.' },
      { title: 'Hands-on Projects', description: 'Practice what you learn with fun projects that allow you to create your own programs and games.' },
      { title: 'Expert Guidance', description: 'Receive personalized guidance from experienced instructors who will mentor you every step of the way.' },
      { title: 'Creative Freedom', description: 'Explore your creativity and build anything you can imagine with the power of Python.' },
    ],
    extraDescription: 'Join us on this exciting journey to discover the fun of Python programming and unleash your potential as a future coder!',
    ctaButton: {
      label: 'Get Started',
    },
    downloadButton: {
      label: 'Download Curriculum',
    },
    rating: '4.8/5',
    contentTitle: 'What You Will Learn:',
    contentList: [
      'Fundamentals of Python programming',
      'Working with variables, data types, and operators',
      'Creating functions and control structures',
      'Building basic programs and games',
      'Introduction to data analysis and visualization',
    ],
  };

  const courseData = {
    title: 'Python Programming for Kids',
    description:
      'In this course, kids will learn the fundamentals of Python programming, the language known for its simplicity and readability. From writing simple scripts to building interactive games, students will develop essential coding skills while exploring the endless possibilities of Python.',
    skills: [
      'Learn the basics of Python programming',
      'Understand how Python is used for various applications such as game development, web development, and data analysis',
      'Develop problem-solving skills through hands-on coding projects',
      'Enhance creativity by building programs and games with Python',
      'Gain confidence in using Python to tackle real-world problems and projects',
    ],
    imageSource: '/python_image.jpeg',
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
