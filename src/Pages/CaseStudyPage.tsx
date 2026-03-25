import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageTransition } from '../Components/Layout/PageTransition';
import { CaseStudyHero } from '../Components/Casestudy/CaseStudyHero';
import { ContextRole } from '../Components/Casestudy/ContextRole';
import { Problem } from '../Components/Casestudy/Problem';
import { Solution } from '../Components/Casestudy/Solution';
import { KeyFeatures } from '../Components/Casestudy/KeyFeatures';
import { OutcomesTakeaways } from '../Components/Casestudy/OutcomesTakeaways';
import { FallingElements } from '../Components/Projects/FallingElements';
import { WhatILearned } from '../Components/Casestudy/WhatILearned';
import { SeeItLive } from '../Components/Casestudy/SeeItLive';
import { Footer } from '../Components/Layout/Footer';

export const CaseStudyPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    const projectName = slug
      ?.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    document.title = `${projectName} - Alex Robaczewski`;
  }, [slug]);

  // Bloom Wellness Case Study
  if (slug === 'bloom-wellness') {
    return (
      <PageTransition>
        {/* Hero Section */}
        <CaseStudyHero
          company="Bloom"
          role="Web Developer"
          duration="Nov. 2025 - Present"
          technologies={['React', 'TypeScript', 'Cloudflare Pages']}
          skill="Operational Workflow Optimization"
          logoImage="/bloom/bloomlogo.svg"
          backgroundImage="/bloom/bloombackground.svg"
          backgroundColor="#f6f8ef"
          textColor="#00461e"
          companyFont="'Arial MT', Arial, sans-serif"
          demoUrl="https://landing.bloom-wellness.com/"
          // No GitHub - private project
          fallingElements={
            <FallingElements 
              images={['/bloom/leaf.svg', '/bloom/lily.svg']} 
              count={15}
            />
          }
        />

        {/* Context & Role Section */}
        <ContextRole
          context="During Bloom Wellness' transition from AYR in four Illinois locations, the business needed simple digital tools to improve internal workflows and clearly communicate the brand change to customers."
          role="I designed and built the full frontend experience for these tools, including a tip calculator for staff and a landing/promo code page for customers. My responsibilities covered the full implementation process, from UI design and React development to business logic and deployment across Netlify and Cloudflare Pages."
          screenshot="/bloom/bloom-context.png"
          accentColor="#00461e"
        />

        {/* Problem Section */}
        <Problem
          problems={[
            'Manual tip distribution required weekly calculations by management, creating a time-consuming and repetitive workflow.',
            'Calculations were performed by hand based on employees, hours worked and total tips, increasing the risk of human error.',
            'Customers lacked clear communication during the transition from AYR to Bloom Wellness, leading to confusion around the brand change.',
            "Stores had no system for engaging customers outside the building, limiting opportunities for promotions and new customer traffic.",
          ]}
          screenshot="/bloom/calculator-problem.png"
          accentColor="#00461e"
        />

        {/* Solution Section */}
        <Solution
          paragraphs={[
            "To address these challenges, I designed and deployed a small set of focused web tools, each built to solve a specific operational or customer-facing problem. Rather than creating one overly complex system, I approached the project as a lightweight digital toolkit: an internal calculator to automate tip distribution, a transition landing page to support customer communication, and a QR-driven promo code experience to bring external traffic into the store.",
            "Each tool was designed to be simple, fast, and easy to access in a real retail environment. The frontend experiences were built in React and deployed as lightweight web applications using Netlify and Cloudflare Pages, allowing them to be launched quickly and maintained efficiently."
          ]}
          videoSrc="/bloom/bloom-solution.mp4"
          accentColor="#00461e"
        />

        {/* Key Features Section */}
        <KeyFeatures
          features={[
            {
              title: 'Tip Distribution Calculator',
              bullets: [
                'Automatically calculates tip distribution based on hours worked',
                'Eliminates manual calculations and reduces risk of errors',
                'Simple interface designed for quick daily staff use'
              ],
              screenshot: '/bloom/calc-feature.png'
            },
            {
              title: 'Transition Landing Page',
              bullets: [
                'Communicates the transition from AYR to Bloom Wellness',
                'Sent out to every customer of Ayr\'s in Illinois reaching over 100000 people',
                'Clear messaging guiding customers during the brand change'
              ],
              screenshot: '/bloom/landing-feature.png'
            },
            {
              title: 'QR Promo Code Experience',
              bullets: [
                'Customers scan a QR code outside the store to access a promotion',
                'Age verification gate ensures compliance with 21+ requirements',
                'Reveals a stackable 10% discount code redeemable in-store or online'
              ],
              screenshot: '/bloom/promo-feature.png'
            }
          ]}
          accentColor="#00461e"
        />

        {/* Impact Section */}
        <OutcomesTakeaways
          impact={[
            'Reduced tip distribution time from approximately 1 hour to around 15 minutes by automating weekly calculations.',
            'Simplified internal workflows by replacing manual tip calculations with a consistent digital tool.',
            'Provided clear communication for customers during the transition from AYR to Bloom Wellness.',
            'Introduced the stores first external promotional system, allowing customers outside the store to access stackable discounts through a QR-based experience.'
          ]}
          accentColor="#00461e"
          backgroundSvg="/bloom/bloom-outline.svg"
        />

        {/* What I learned Section */}
        <WhatILearned
          bullets={[
            'Building Software for Real Workflows — Learned how to identify operational inefficiencies and design simple tools that improve real-world processes.',
            'Rapid Development & Deployment — Built and deployed production-ready applications using React, TypeScript, and Tailwind, hosting tools through Netlify and Cloudflare Pages.',
            'Designing for Real Users — Focused on creating interfaces that are simple and intuitive for staff and customers interacting with the tools in a retail environment.',
            'Solving Business Problems with Code — Applied software development to streamline internal workflows and improve customer communication during a company transition.'
          ]}
          accentColor="#00461e"
        />
        <SeeItLive
          demoUrl="https://landing.bloom-wellness.com/"
          accentColor="#00461e"
        />
        <Footer/>
      </PageTransition>
    );
  }

  // Robo's Wishlist Case Study
  if (slug === 'robos-wishlist') {
    return (
      <PageTransition>
        {/* Hero Section */}
        <CaseStudyHero
          company="Robo's Wishlist"
          role="Full-Stack Developer"
          duration="Aug. 2025 - Nov. 2025"
          technologies={['Next.js', 'TypeScript', 'Redux']}
          skill="Full-Stack System Architecture"
          logoImage="/robo/roboslogo.svg"
          backgroundImage="/robo/robosbackground.svg"
          backgroundColor="#1a1a1a"
          textColor="#ffffff"
          companyFont="'Dancing Script', cursive"
          logoAnimation="wiggle"
          addShadow={true}
          demoUrl="https://robos-wishlist.vercel.app/"
          githubUrl="https://github.com/Arobaczewski/RobosWishlist"
        />

        {/* Context & Role Section */}
        <ContextRole
          context="Robo's Wishlist is a portfolio project created to explore full-stack ecommerce development and demonstrate realistic user workflows, state management, and authentication systems. The project functions as a fully operational online shopping platform, mimicking the structure and behavior of production ecommerce applications."
          role="I designed and developed the entire application, including the user-facing shopping experience, backend API routes, authentication logic, cart and favorites functionality, and full checkout flow. My responsibilities covered frontend design, database structure, API development, state management implementation, and deploying the application to Vercel."
          screenshot="/robo/robos-context.png"
          accentColor="#B069DB"
        />

        {/* Problem Section */}
        <Problem
          problems={[
            'Building secure user authentication and session management for accounts, login, and persistent user state across the application.',
            'Designing a scalable, production-ready architecture that supports guest users, authenticated users, and complex ecommerce workflows.',
            'Managing global application state across cart functionality, favorites, product browsing, and user sessions using Redux.',
            'Implementing realistic ecommerce features such as saved addresses, order history, guest checkout, and shopping cart persistence to mirror real-world ecommerce systems.',
          ]}
          screenshot="/robo/robos-problem.png"
          accentColor="#B069DB"
        />

        {/* Solution Section */}
        <Solution
          paragraphs={[
            "To address these challenges, I developed Robo's Wishlist as a full-stack ecommerce application modeled after real production shopping platforms. The application supports user account creation, secure authentication with JWT and bcrypt, and persistent user sessions that maintain cart and favorites data across devices and login sessions.",
            "I structured the project using Next.js API routes to handle backend logic, implemented Redux for global state management across cart, favorites, and user actions, and built a complete shopping flow including product browsing, filtering, cart management, checkout, guest checkout, and order completion. The frontend was designed using React and Tailwind, the application uses file-based JSON for storage, and the project was deployed to Vercel with modern full-stack architecture patterns."
          ]}
          videoSrc="/robo/robos-solution.mp4"
          accentColor="#B069DB"
        />
        {/* Key Features Section */}
        <KeyFeatures
          features={[
            {
              title: 'Secure User Authentication',
              bullets: [
                'Account creation and login system built using JWT and bcrypt',
                'Password hashing and token-based authentication handled through Next.js API routes',
                'Secure session handling allowing users to maintain authenticated shopping sessions, previous orders and save/edit personal info for checkout use'
              ],
              screenshot: '/robo/robos-profile-feature.png'
            },
            {
              title: 'Product Catalog System',
              bullets: [
                'Dynamic product catalog allowing users to browse items across multiple categories',
                'Individual product pages displaying pricing, images, and product details',
                'Clean ecommerce-style UI designed for easy product discovery'
              ],
              screenshot: '/robo/robos-product-feature.png'
            },
            {
              title: 'Cart & Checkout System',
              bullets: [
                'Users can add items to their cart, update quantities, and review totals',
                'Checkout flow simulates a real ecommerce purchasing experience',
                'Cart state persists across the application using Redux state management'
              ],
              screenshot: '/robo/robo-feature-3.png'
            }
          ]}
          accentColor="#B069DB"
        />

        {/* Impact Section */}
        <OutcomesTakeaways
          impact={[
            'Built a production-ready ecommerce application with realistic shopping workflows, user authentication, cart and favorites functionality, and full checkout flow.',
            'Implemented secure user authentication using JWT and bcrypt, managing hashed passwords, session tokens, and user-specific data.',
            'Used Redux to manage global application state, coordinating cart functionality, favorites, product filtering, and user interactions across the platform.',
            'Demonstrated full-stack development capabilities, building a complete ecommerce system with frontend React design, backend API routes, and modern deployment practices.'
          ]}
          accentColor="#B069DB"
          backgroundSvg="/robo/robos-impact-background.png"
        />

        {/* What I learned Section */}
        <WhatILearned
          bullets={[
            'Authentication & Security — Implemented secure user authentication using JWT and bcrypt, managing password hashing and token-based user sessions.',
            'State Management for Ecommerce Systems — Used Redux to manage global application state across cart functionality, favorites, and user interactions.',
            'Full Ecommerce User Workflows — Designed and implemented realistic shopping flows including product browsing, cart management, favorites systems, and checkout experiences.',
            'Modern Full-Stack Architecture — Built and deployed the application using Next.js, React, TypeScript, and API routes, structuring the project like a production-ready ecommerce platform.'
          ]}
          accentColor="#B069DB"
        />
        <SeeItLive
          demoUrl="https://robos-wishlist.vercel.app/"
          githubUrl="https://github.com/Arobaczewski/RobosWishlist"
          accentColor="#B069DB"
        />
        <Footer/>
      </PageTransition>
    );
  }

  // WeatherBeatz Case Study
  if (slug === 'weatherbeatz') {
    return (
      <PageTransition>
        {/* Hero Section */}
        <CaseStudyHero
          company="WeatherBeatz"
          role="Software Developer"
          duration="June 2025 - Aug. 2025"
          technologies={['React', 'Spotify API', 'Openweather API']}
          skill="API Integration & Algorithm Design"
          logoImage="/weatherbeatz/weatherbeatzlogo.svg"
          backgroundVideo="/weatherbeatz/weatherbeatzbackground.mp4"
          backgroundColor="#0f172a"
          textColor="#ffffff"
          companyFont="'Orbitron', sans-serif"
          demoUrl="https://weatherbeatz.netlify.app/"
          githubUrl="https://github.com/Arobaczewski/WeatherBeats"
        />

        {/* Context & Role Section */}
        <ContextRole
          context="WeatherBeatz is a technical API project built to explore how real-time data can be transformed into a personalized user experience. The application uses browser geolocation and live weather data to generate Spotify playlists that reflect the mood of the user's current environment."
          role="I designed and developed the full application, including the frontend interface, weather-based playlist generation logic, Spotify OAuth integration, and playlist creation flow. My responsibilities included building the API-driven user experience, designing the filtering system for reliable playlist generation, and deploying the application to Netlify."
          screenshot="/weatherbeatz/weatherbeatz-context.png"
          accentColor="#7d7f7c"
        />

        {/* Problem Section */}
        <Problem
          problems={[
            'Translating real-world weather conditions into meaningful music characteristics and genres that reflect the mood of the environment.',
            'Generating playlists using the Spotify API, which does not directly support weather-based recommendations or consistent song retrieval.',
            'Ensuring the application can reliably generate the requested playlist size (10, 20, or 30 songs) despite API limitations and regional track availability.',
            "Coordinating multiple external systems — geolocation, weather data, and Spotify authentication — into a seamless user experience.",
          ]}
          screenshot="/weatherbeatz/weatherbeatz-problem.png"
          accentColor="#7d7f7c"
        />

        {/* Solution Section */}
        <Solution
          paragraphs={[
            "To address these challenges, I developed WeatherBeatz as an API-driven application that transforms real-time weather conditions into a personalized music playlist. The application retrieves the user's location through browser geolocation, uses the OpenWeatherMap API to determine current weather conditions, and translates that information into musical characteristics such as mood, genre, and artist style.",
            "Using these inputs, a custom playlist generation algorithm creates multiple Spotify search queries from different angles to increase track diversity and reliability. The system filters results based on availability, removes duplicates, applies user preferences such as playlist length and explicit content filtering, and compiles the final track list. Users can then generate a playlist, preview tracks, and save a newly created playlist directly to their Spotify account using Spotify OAuth."
          ]}
          videoSrc="/weatherbeatz/weatherbeatz-solution.mp4"
          accentColor="#7d7f7c"
        />

        {/* Key Features Section */}
        <KeyFeatures
          features={[
            {
              title: 'Weather-Driven Music Context',
              bullets: [
                'Uses browser geolocation and the OpenWeatherMap API to retrieve real-time weather data based on the user\'s location.',
                'Translates weather conditions into a contextual music mood description and genre selection.',
                'Provides users with a preview of the musical direction before generating a playlist.'
              ],
              screenshot: '/weatherbeatz/weatherbeatz-feature-1.png'
            },
            {
              title: 'Custom Playlist Generation Algorithm',
              bullets: [
                'Custom algorithm maps weather conditions to genres, moods, and artist styles to guide playlist creation.',
                'Generates multiple Spotify search queries to improve track diversity and reliability.',
                'Filters results to remove duplicates, ensure artist variety, and reliably generate playlists of 10, 20, or 30 songs.'
              ],
              screenshot: '/weatherbeatz/weatherbeatz-feature-2.png'
            },
            {
              title: 'Spotify Integration & Playlist Creation',
              bullets: [
                'Users authenticate with Spotify OAuth to enable playlist creation.',
                'Generated playlists can be saved directly to the user\'s Spotify account.',
                `Saved playlists use dynamic naming such as "{Location} – {Weather} Vibes" to reflect the environment where they were created.`
              ],
              screenshot: '/weatherbeatz/weatherbeatz-feature-3.png'
            }
          ]}
          accentColor="#7d7f7c"
        />

        {/* Impact Section */}
        <OutcomesTakeaways
          impact={[
            'Developed an API-driven application that transforms real-time weather data into personalized music playlists using the OpenWeatherMap API and Spotify API.',
            'Designed a playlist generation algorithm capable of producing reliable playlists of 10, 20, or 30 songs despite API limitations and regional track availability.',
            'Implemented Spotify OAuth authentication and automated playlist creation, allowing users to save dynamically generated playlists directly to their Spotify accounts.',
            'Built a location-aware experience using browser geolocation, enabling the application to generate playlists tailored to the user\'s current environment.'
          ]}
          accentColor="#7d7f7c"
          backgroundSvg="/weatherbeatz/weatherbeatz-impact-background.png"
        />
       
        {/* What I learned Section */}
        <WhatILearned
          bullets={[
            'API Orchestration & Data Integration — Learned how to coordinate multiple external systems, combining browser geolocation, the OpenWeatherMap API, and the Spotify API to power a single user experience.',
            'Algorithm Design for Data-Driven Features — Designed a playlist generation system that translates weather conditions into genres, moods, and search queries while ensuring reliable playlist creation.',
            'OAuth Authentication Workflows — Implemented Spotify OAuth to allow users to authenticate securely and save generated playlists directly to their accounts.',
            'Building Context-Aware Applications — Gained experience designing applications that respond dynamically to real-world data such as location, weather conditions, and user preferences.'
          ]}
          accentColor="#7d7f7c"
        />
        <SeeItLive
          demoUrl="https://weatherbeatz.netlify.app/"
          githubUrl="https://github.com/Arobaczewski/WeatherBeats"
          accentColor="#7d7f7c"
        />
        <Footer/>
      </PageTransition>
    );
  }

  // Fallback
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Case Study Coming Soon</h1>
      </div>
      <Footer/>
    </PageTransition>
  );
};