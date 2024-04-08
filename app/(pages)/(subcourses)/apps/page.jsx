import InstructorsComponent from "@/app/components/(sub-pages)/Description";
import HeroSection from "@/app/components/(sub-pages)/HeroSection";
import SkillsSectionComponent from "@/app/components/(sub-pages)/SkillsSection";

const HomePage = () => {
  const hero = {
    image: {
      src: '/android1.jpeg',
      alt: 'App Development Hero Image',
    },
    title: 'Get Creative with App Development!',
    description: 'Welcome to our app development course for kids! Have you ever dreamed of creating your own mobile apps and bringing your ideas to life? With our app development course, you can turn those dreams into reality. Get ready to unleash your creativity and build amazing apps that you can share with the world!',
    features: [
      { title: 'Interactive Learning', description: 'Engaging and interactive lessons designed specifically for kids to learn app development with ease.' },
      { title: 'Hands-on Projects', description: 'Practice what you learn by building real-world apps and games that showcase your creativity.' },
      { title: 'Expert Guidance', description: 'Receive personalized guidance from experienced instructors who will mentor you every step of the way.' },
      { title: 'Creative Freedom', description: 'Explore your imagination and bring your ideas to life through coding and app development.' },
    ],
    extraDescription: 'Join us on this exciting journey to unlock the power of app development and unleash your potential as a future app developer!',
    ctaButton: {
      label: 'Get Started',
    },
    downloadButton: {
      label: 'Download Curriculum',
    },
    rating: '4.9/5',
    contentTitle: 'What You Will Learn:',
    contentList: [
      'Fundamentals of app development and programming concepts',
      'Creating interactive user interfaces for mobile apps',
      'Implementing functionality and features using coding languages like JavaScript',
      'Testing and debugging your apps to ensure they work smoothly',
      'Publishing your apps to app stores and sharing them with others',
    ],
  };

  const courseData = {
    title: 'App Development for Kids',
    description:
      'In this course, kids will learn the fundamentals of app development and programming, empowering them to create their own mobile apps and games. From designing user interfaces to coding interactive features, students will develop essential skills while bringing their ideas to life in the digital world.',
    skills: [
      'Learn the basics of app development and programming concepts',
      'Understand how to design and create user-friendly interfaces for mobile apps',
      'Develop problem-solving skills through hands-on coding projects',
      'Enhance creativity by building unique and engaging apps and games',
      'Gain confidence in app development and coding to pursue future projects',
    ],
    imageSource: '/android.jpeg',
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
