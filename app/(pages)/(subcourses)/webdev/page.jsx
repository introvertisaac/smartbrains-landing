import InstructorsComponent from "@/app/components/(sub-pages)/Description";
import HeroSection from "@/app/components/(sub-pages)/HeroSection";
import SkillsSectionComponent from "@/app/components/(sub-pages)/SkillsSection";

const HomePage = () => {
  const hero = {
    image: {
      src: '/sub-pages/webdev1.jpg',
      alt: 'Web Development Hero Image',
    },
    title: 'Embark on a Journey into Web Development!',
    description: 'Welcome to our web development course for kids! In this course, you will learn the building blocks of the web: HTML, CSS, and JavaScript. From designing web pages to adding interactivity and functionality, you will unleash your creativity and build amazing websites from scratch. Get ready to dive into the exciting world of coding!',
    features: [
      { title: 'Interactive Learning', description: 'Engaging and interactive lessons designed specifically for kids to learn web development concepts with ease.' },
      { title: 'Hands-on Projects', description: 'Practice what you learn by building your own websites and web applications using HTML, CSS, and JavaScript.' },
      { title: 'Expert Guidance', description: 'Receive personalized guidance from experienced instructors who will mentor you every step of the way.' },
      { title: 'Creative Freedom', description: 'Explore your creativity and design unique and personalized websites that showcase your skills and interests.' },
    ],
    extraDescription: 'Join us on this exciting journey to discover the power of web development and unleash your potential as a future web developer!',
    ctaButton: {
      label: 'Get Started',
    },
    downloadButton: {
      label: 'Download Curriculum',
    },
    rating: '4.9/5',
    contentTitle: 'What You Will Learn:',
    contentList: [
      'HTML: Structure your web pages and add content',
      'CSS: Style and design your web pages to make them visually appealing',
      'JavaScript: Add interactivity and functionality to your web pages',
      'Responsive Design: Make your websites look great on all devices',
      'Version Control: Learn how to manage and collaborate on your projects using Git and GitHub',
    ],
  };

  const courseData = {
    title: 'Web Development for Kids',
    description:
      'In this course, kids will learn the fundamentals of web development, including HTML, CSS, and JavaScript. From creating static web pages to building interactive web applications, students will develop essential coding and design skills while unleashing their creativity in the digital world.',
    skills: [
      'Learn HTML to structure web pages and add content',
      'Master CSS to style and design web pages to make them visually appealing',
      'Understand JavaScript to add interactivity and functionality to web pages',
      'Develop problem-solving skills through hands-on coding projects',
      'Gain confidence in web development to pursue future projects and interests',
    ],
    imageSource: '/sub-pages/webdev.jpg',
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
