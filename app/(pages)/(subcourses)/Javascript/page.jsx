import InstructorsComponent from "@/app/components/(sub-pages)/Description";
import HeroSection from "@/app/components/(sub-pages)/HeroSection";
import SkillsSectionComponent from "@/app/components/(sub-pages)/SkillsSection";

const HomePage = () => {
  const hero = {
    image: {
      src: '/js.jpeg',
      alt: 'JavaScript Hero Image',
    },
    title: 'Unlock the Magic of JavaScript!',
    description: 'Welcome to our JavaScript coding course for kids! JavaScript is the language of the web, and with its superpowers, you can create interactive and dynamic websites, games, and applications. Get ready to dive into the world of coding and bring your ideas to life with JavaScript!',
    features: [
      { title: 'Interactive Learning', description: 'Engaging and interactive lessons designed specifically for kids to learn JavaScript with ease.' },
      { title: 'Hands-on Projects', description: 'Practice what you learn with fun projects that allow you to create your own interactive web pages and games.' },
      { title: 'Expert Guidance', description: 'Receive personalized guidance from experienced instructors who will mentor you every step of the way.' },
      { title: 'Creative Freedom', description: 'Explore your creativity and build anything you can imagine with the power of JavaScript.' },
    ],
    extraDescription: 'Join us on this exciting journey to unlock the magic of JavaScript and unleash your potential as a future web developer!',
    ctaButton: {
      label: 'Get Started',
    },
    downloadButton: {
      label: 'Download Curriculum',
    },
    rating: '4.6/5',
    contentTitle: 'What You Will Learn:',
    contentList: [
      'Fundamentals of JavaScript programming',
      'Working with variables, data types, and operators',
      'Manipulating the DOM (Document Object Model) to create dynamic web pages',
      'Implementing interactivity and event handling',
      'Building basic web applications and games',
    ],
  };

  const courseData = {
    title: 'JavaScript Coding for Kids',
    description:
      'In this course, kids will learn the fundamentals of JavaScript, the language used to add interactivity and functionality to websites. From creating animations to building interactive games, students will develop essential coding skills while unleashing their creativity with JavaScript.',
    skills: [
      'Learn the basics of JavaScript programming',
      'Understand how JavaScript is used to create dynamic web content',
      'Develop problem-solving skills through hands-on coding projects',
      'Enhance creativity by building interactive web applications and games',
      'Gain confidence in using JavaScript to bring their ideas to life',
    ],
    imageSource: '/sub-pages/javascript.jpg',
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
