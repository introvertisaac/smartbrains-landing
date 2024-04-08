import InstructorsComponent from "@/app/components/(sub-pages)/Description";
import HeroSection from "@/app/components/(sub-pages)/HeroSection";
import SkillsSectionComponent from "@/app/components/(sub-pages)/SkillsSection";

const HomePage = () => {
  const hero = {
    image: {
      src: '/html-hero.png',
      alt: 'HTML Hero Image',
    },
    title: 'Discover the World of HTML!',
    description: 'Welcome to our HTML coding course for kids! Unleash your creativity and build the web of tomorrow. With HTML, you can design and create your own websites from scratch. Get ready to dive into the exciting world of coding!',
    features: [
      { title: 'Interactive Lessons', description: 'Engaging and interactive lessons designed specifically for kids to learn HTML with ease.' },
      { title: 'Hands-on Projects', description: 'Practice what you learn with fun projects that unleash your creativity.' },
      { title: 'Expert Guidance', description: 'Receive personalized guidance from experienced instructors every step of the way.' },
      { title: 'Real-world Skills', description: 'Develop valuable skills that can set you up for success in the digital age.' },
    ],
    extraDescription: 'Join us on this exciting journey to unlock the power of HTML and unleash your potential as a future web developer!',
    ctaButton: {
      label: 'Get Started',
    },
    downloadButton: {
      label: 'Download Curriculum',
    },
    rating: '5/5',
    contentTitle: 'What You Will Learn:',
    contentList: [
      'Basic HTML tags and elements',
      'Creating web pages and structures',
      'Adding text, images, and links',
      'Understanding the fundamentals of web design',
      'Building your own portfolio website',
    ],
  };

  const courseData = {
    title: 'HTML Coding for Kids',
    description:
      'In this course, kids will learn the fundamentals of HTML, the language used to create and structure web pages. From basic tags to building their own websites, students will develop essential coding skills while unleashing their creativity.',
    skills: [
      'Learn to create and structure web pages using HTML',
      'Understand the role of HTML in web development',
      'Develop problem-solving skills through hands-on coding projects',
      'Enhance creativity by designing and building their own websites',
      'Gain confidence in using HTML to express ideas and create digital content',
    ],
    imageSource: '/guy-walkin.gif',
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
