import InstructorsComponent from "@/app/components/(sub-pages)/Description";
import HeroSection from "@/app/components/(sub-pages)/HeroSection";
import SkillsSectionComponent from "@/app/components/(sub-pages)/SkillsSection";

const HomePage = () => {
  const hero = {
    image: {
      src: '/robotics_image.jpeg',
      alt: 'Robotics Hero Image',
    },
    title: 'Explore the World of Robotics!',
    description: 'Welcome to our robotics course for kids! Robotics combines the fields of science, technology, engineering, and mathematics (STEM) to design, build, and program robots. With robotics, you can bring your creations to life and explore the fascinating world of automation and artificial intelligence. Get ready to embark on an exciting journey into the realm of robotics!',
    features: [
      { title: 'Interactive Learning', description: 'Engaging and interactive lessons designed specifically for kids to learn robotics concepts with ease.' },
      { title: 'Hands-on Projects', description: 'Practice what you learn by building and programming your own robots to perform various tasks and challenges.' },
      { title: 'Expert Guidance', description: 'Receive personalized guidance from experienced instructors who will mentor you every step of the way.' },
      { title: 'Creative Exploration', description: 'Explore your creativity and problem-solving skills as you design and innovate with robotics technology.' },
    ],
    extraDescription: 'Join us on this thrilling journey to explore the world of robotics and unleash your potential as a future engineer or scientist!',
    ctaButton: {
      label: 'Get Started',
    },
    downloadButton: {
      label: 'Download Curriculum',
    },
    rating: '4.9/5',
    contentTitle: 'What You Will Learn:',
    contentList: [
      'Introduction to robotics and automation',
      'Understanding robot components and mechanisms',
      'Programming robots using block-based or text-based languages',
      'Solving challenges and completing tasks with your robots',
      'Exploring advanced topics such as sensors, artificial intelligence, and machine learning',
    ],
  };

  const courseData = {
    title: 'Robotics for Kids',
    description:
      'In this course, kids will dive into the exciting world of robotics and learn how to design, build, and program their own robots. From simple mechanisms to complex automation systems, students will develop essential STEM skills while exploring the endless possibilities of robotics technology.',
    skills: [
      'Learn the basics of robotics and engineering concepts',
      'Understand how to design and build robots using mechanical and electronic components',
      'Develop programming skills to control and automate robot movements and actions',
      'Enhance problem-solving skills through hands-on robotics challenges and projects',
      'Gain confidence in using robotics technology to tackle real-world problems and innovate for the future',
    ],
    imageSource: '/robotics_image.jpeg',
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
