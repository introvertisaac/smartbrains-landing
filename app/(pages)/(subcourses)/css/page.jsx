import InstructorsComponent from "@/app/components/(sub-pages)/Description";
import HeroSection from "@/app/components/(sub-pages)/HeroSection";
import SkillsSectionComponent from "@/app/components/(sub-pages)/SkillsSection";

const HomePage = () => {
  const hero = {
    image: {
      src: '/css1.jpeg',
      alt: 'CSS Hero Image',
    },
    title: 'Unleash Your Creativity with CSS!',
    description: 'Welcome to our CSS coding course for kids! CSS (Cascading Style Sheets) is the magic behind beautiful and stylish websites. With CSS, you can bring your web pages to life by adding colors, fonts, layouts, and animations. Get ready to embark on an exciting journey into the world of web design!',
    features: [
      { title: 'Creative Design', description: 'Learn how to style and design web pages to express your unique creativity.' },
      { title: 'Interactive Lessons', description: 'Engaging and interactive lessons designed specifically for kids to learn CSS with ease.' },
      { title: 'Hands-on Projects', description: 'Practice what you learn with fun projects that allow you to customize and personalize your creations.' },
      { title: 'Expert Guidance', description: 'Receive personalized guidance from experienced instructors every step of the way.' },
    ],
    extraDescription: 'Join us on this creative journey to unlock the power of CSS and unleash your potential as a future web designer!',
    ctaButton: {
      label: 'Get Started',
    },
    downloadButton: {
      label: 'Download Curriculum',
    },
    rating: '4.8/5',
    contentTitle: 'What You Will Learn:',
    contentList: [
      'Understanding CSS syntax and selectors',
      'Styling text, backgrounds, and borders',
      'Creating layouts and positioning elements',
      'Adding animations and transitions',
      'Designing responsive websites for all devices',
    ],
  };

  const courseData = {
    title: 'CSS Styling for Kids',
    description:
      'In this course, kids will learn the fundamentals of CSS, the language used to style and design web pages. From changing colors to creating complex layouts, students will develop essential design skills while unleashing their creativity.',
    skills: [
      'Learn to style and design web pages using CSS',
      'Understand the role of CSS in web development',
      'Develop problem-solving skills through hands-on coding projects',
      'Enhance creativity by designing and customizing web elements',
      'Gain confidence in using CSS to create visually appealing websites',
    ],
    imageSource: '/css.jpeg',
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
