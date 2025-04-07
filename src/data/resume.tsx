import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
export const DATA = {
  name: "Niket Agarwal",
  initials: "DV",
  url: "https://yourdomain.com",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
  "Ill-stack dev who loves whipping up cool projects with code. I'm really into machine learning and devlopment, and I’m always down for a hackathon or some late-night coding. Right now, I'm all about diving into projects, doing research, and finding anything that helps me learn and grow!",
  summary:
    "As a third-year computer science student, I am passionate about development, particularly in web development and related fields. I have a keen interest in data science and aspire to be a software developer. I am proficient in Python, C++, Java, and other programming languages, which enable me to tackle diverse challenges effectively. My academic journey has equipped me with a solid understanding of both theoretical concepts and practical applications. I also possess strong problem-solving skills, particularly in data structures and algorithms (DSA), which I have honed through various competitive programming and project-based experiences. I am eager to leverage my skills to contribute to innovative projects and further enhance my expertise in software development.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQFzZHXS0TTknQ/profile-displayphoto-shrink_400_400/B56ZXpGYIcHoAg-/0/1743372518923?e=1749686400&v=beta&t=F8sY8t6mEpN73_2Fck4wMvx7wM1kYn5FbgHsfNUSGLE",
  skills: [
    // Programming Languages
    "Python",
    "JavaScript",
    "TypeScript",
    "C++",
    "Java",
    "C",
    "SQL",
    "PHP",
  
    // Frameworks & Libraries
    "React.js",
    "Next.js",
    "Express.js",
    "Flask",
    "Django",
    "FastAPI",
    "Node.js",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "OpenCV",
    "Librosa",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Tailwind CSS",
    "Bootstrap",
    "Chakra UI",
    "Redux",
    "Socket.io",
  
    // Tools & Technologies
    "Git",
    "GitHub",
    "Linux",
    "IntelliJ IDEA",
    "JavaFX",
    "MySQL Workbench",
    "VSCode",
    "Figma",
    "AWS",
    "Postman",
    "Docker",
    "Kubernetes",
    "WebSockets",
  
    // Databases
    "MySQL",
    "MongoDB",
    "Firebase",
    "PostgreSQL",
    "SQLite",
    "Redis",
    "Neo4j"
  ],
  
  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "niketagarwal653@gmail.com",
    tel: "+91 8619631019",
    social: {
      Resume: {
        name: "googleDrive",
        url: "https://drive.google.com/file/d/1G9gUJi4z3G7qR-Pgz_JjZwBSU6nBsU6z/view?usp=share_link",
        icon: "googleDrive",
        navbar: true,
      },
      linkedin: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/niket-agarwal-iiitd/",
        icon: "linkedin", // Placeholder for the SVG icon
        navbar: true,
      },
      leetcode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Niket_Agarwal/",
        icon: "leetcode",
        navbar: true,
      },
      github: {
        name: "GitHub",
        url: "https://github.com/Niketiiitd",
        icon: "github", // Placeholder for the SVG icon
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:niketagarwal653@gmail.com",
        icon: "mail", // Direct icon image source
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "MyAdmit.ai",
      href: "https://www.myadmit.ai",
      badges: [""],
      location: "USA(Remote)",
      title: "Software Developer",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQFjrgx20vllDg/company-logo_100_100/B4EZUK_5CLHcAQ-/0/1739646276087?e=1749081600&v=beta&t=5bXvwzOTjSrh05uy0X9tN4NKNovQSrHNEsoHN2szukE",
      start: "Jan 2025",
      end: "Present",
      description:
        "Contributed across the full stack, including frontend development, backend API integration, data collection for machine learning models, and model training. Deployed and maintained the company’s website on AWS, ensuring 99.9% uptime with a scalable infrastructure. Developed and optimized algorithms for college recommendations, resume parsing, and web scraping, resulting in a 30% boost in system efficiency. Improved frontend usability based on user feedback, leading to a 20% increase in user engagement, while also contributing to marketing initiatives and product scaling strategies.",
    },
    {
      company: "Usable Security Lab",
      href: "https://iiitd.ac.in",
      badges: [],
      location: "Delhi",
      title: "Undergraduate Researcher",
      logoUrl: "",
      start: "August 2024",
      end: "Present",
      description:
        "Engaged in various machine learning projects under the supervision of Arun Balaji Buduru, focusing on developing and applying models to address security challenges.\n Participated in lab meetings and discussions to explore machine learning techniques and their applications in usable security.",
    },
    
  ],
  education: [
    {
      school: "IIIT-Delhi",
      href: "https://iiitd.ac.in",
      degree: "B.Tech in Computer Science and Biosciences, CGPA: 7.72",
      logoUrl: "data:image/png;base64,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", // Replace with actual path to IIIT-Delhi logo
      start: "2022",
      end: "2026", // Adjust this according to your expected graduation year
  },
  {
      school: "Nav Uday Sr. Sec. School",
      href: "", // Adjust URL if there's a specific link
      degree: "High School",
      logoUrl: "", // Replace with actual path to school logo if available
      start: "2020",
      end: "2022",
  },
  {
    school: "Modern Public School",
    href: "", // Adjust URL if there's a specific link
    degree: "High School",
    logoUrl: "", // Replace with actual path to school logo if available
    start: "2012",
    end: "2020",
}
  
  ],
  projects: [
    {
      "title": "Anime Recommender System",
      "href": "https://github.com/Niketiiitd/Anime_Recommender_System.git",
      "dates": "September 2023 - October 2023",
      "active": true,
      "description": "Created a machine learning-based system to provide personalized anime recommendations. Optimized the recommendation pipeline by leveraging precomputed models and cosine similarity for scalability and fast response times.",
      "technologies": [
        "Python",
        "Flask",
        "Machine Learning",
        "React"
      ],
      "links": [
        {
          "type": "Github",
          "href": "https://github.com/Niketiiitd/Anime_Recommender_System.git",
          icon: <Icons.github className="size-3" />,
        }
      ],
      "image": "", // Add an image if available
      "video": ""  // Add a video link if available
    },
    {
      title: "Freelancing Platform for India (Freelancers Network)",
      href: "https://freelancersnetwork.com", // Update with actual link if available
      dates: "January 2024 - March 2024", // Adjust dates as needed
      active: true,
      description:
        "Developed a full-stack platform to connect experienced freelancers with new freelancers for collaboration on projects, enhancing their employment opportunities.",
      technologies: [
        "MERN Stack",
        "MongoDB",
        "Axios",
      ],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/KniteenK/HustlePe-frontend.git", // Your GitHub link
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/KniteenK/Backend_HustlePe.git", // Your GitHub link
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add an image if available
      video: "", // Add a video link if available
    },
    {
      title: "Reval: Decentralized Circular Marketplace",
      href: "https://studenthub.com", // Update with actual link if available
      dates: "June 2023 - Present", // Adjust dates as needed
      active: true,
      description:
        "Led a team of five to develop **Reval**, a decentralized circular marketplace using Node.js, React, Express, MongoDB, and Solidity, with secure transactions and transparent ownership via Ethereum smart contracts for listings, transfers, and real-time updates.",
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "Socket.io",
        "Solidity",
        "Ethereum",
      ],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/Niketiiitd/Reval-Frontend.git",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/Niketiiitd/Reval-Backend.git",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web Extension",
          href: "https://github.com/bhutanidev/reval_extension.git",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "ML Model",
          href: "https://github.com/sanyakapoor27/Recommendation-System-HackTU",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web3 Contracts",
          href: "https://github.com/KniteenK/ReVal-Contracts.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      
      image: "", // Add an image if available
      video: "", // Add a video link if available
    },
    
    {
      title: "Stick Hero Game Implementation",
      href: "https://stickhero.com", // Update with actual link if available
      dates: "September 2023 - November 2023", // Adjust dates as needed
      active: true,
      description:
        "Developed a replica of the Stick Hero game using Java OOP principles, implementing game save functionality and a user-friendly interface with SceneBuilder and JavaFX.",
      technologies: [
        "Java",
        "OOP",
        "SceneBuilder",
        "JavaFX",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Nikhil190804/StickHeroApplication.git", // Your GitHub link
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add an image if available
      video: "", // Add a video link if available
    },
    
    
],

  hackathons: [
    {
      title: "Woodpeckers Hackathon",
      dates: "July 19th - 28th, 2024",
      location: "India, Remote",
      winner: false,
      description:
        "I developed Q-GPT, a web application that processes uploaded data files using the ChatGPT API. Users can ask questions about their data, and the application generates insightful responses based on the input. This project highlights the integration of natural language processing with data analysis, making data interaction more accessible and efficient.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/66713e86a3e10_woodpeckers-hackathon.png?d=1920x557",
      links: [
        {
          title: "Frontend",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KniteenK/Q-gpt-frontend.git",
        },
        {
          title: "Backend",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KniteenK/Hustle-backend.git",
        },
      ],
    },
    {
      title: "Hack4Change",
      dates: "July 21st - August 12th, 2024",
      location: "India, Remote",
      winner: false,
      description:
        "I participated in two hackathons where I developed a web application using the ChatGPT API for data processing. In the first event, I created a tool that allows users to upload data files and ask questions to generate insights. My project was later shortlisted for mentor evaluation in a subsequent hackathon, demonstrating its potential and effectiveness in enhancing data interaction.",
      image:
        "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-06-27T08%3A37%3A57.210Z-dp%20%285%29.png",
      links: [],
    },
    {
      title: "Sparkathon",
      dates: "July 15th - Sept 20th 2024",
      location: "India, Remote",
      winner: false,
      description:
        "I participated in Sparkathon conducted by Walmart, where we developed an idea for the future of retail by integrating voice commerce into the Walmart website. Our solution aimed to simplify the shopping experience by allowing users to interact with AI, making it easier to find products just by speaking their requests, with AI suggesting relevant items based on their needs.",
      icon: "public",
      image:
        "https://media.licdn.com/dms/image/D5612AQGmfpgOyl__2A/article-cover_image-shrink_720_1280/0/1691562874573?e=2147483647&v=beta&t=HChnm6eixxOmxtXM7q5aSZMYlabj4EojBGTrKhsU57E",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/piyushvermaa/Sparkathon.git",
        },
      ],
    },
    {
      title: "Hack24",
      dates: "August 21th - 22nd, 2024",
      location: "Delhi, India",
      winner: false,
      description:
        "Developed a social media website enabling students to showcase projects, create reels, and chat in real-time, designed to function similarly to Instagram but focused on academic and creative projects.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-66c3a99c5ed11_cyfuse_logo_black__1_.png?d=200x200",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Niketiiitd/StudentHub.git",
        },
      ],
    },
    {
      title: "SIH",
      dates: "October 1st - Nov, 2024",
      winner: false,
      
      location: "Delhi, Remote",
      description:
        "Developed a full-stack platform to connect experienced freelancers with new freelancers for collaboration on projects, enhancing their employment opportunities. We made it through internal hackathons but were'nt able to make it to finals. ",
      image:
        "https://static.wixstatic.com/media/b49d96_c2029acf7fa8411e8122eb976a1e7aeb~mv2.webp",
      links: [
        {
          title: "Frontend",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KniteenK/HustlePe-frontend.git",
        },
        {
          title: "Backend",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KniteenK/Backend_HustlePe.git",
        },
      ],
    },
    {
      title: "Foodoscope FORK IT Challenge",
      dates: "Nov 3rd - Dec 14th, 2024",
      winner: true,
      
      location: "Delhi, Remote",
      description:"Developed a comprehensive application leveraging the RecipeDB and FlavourDB APIs with features including recipe search based on filters like country, continent, and protein; ingredient substitution to find alternatives; compatibility checks for ingredient pairing; dish scanning to identify dishes from images; meal recommendations based on nutritional inputs; and chatbot integration using GrokLLM to answer user queries related to recipes, ingredients, and cooking techniques.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/67208a37df86a_IIIT_Delhi_logo.jpg?d=200x200",
      links: [
        {
          title: "Frontend",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KniteenK/Dishcovery_frontend.git",
        },
        {
          title: "Backend",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KniteenK/Dichcovery_backend.git",
        },
      ],
    },{
      title: "HackTU",
      dates: "Jan 10th - Jan 11th, 2025",
      winner: false,
      
      location: "Thapar university, Punjab",
      description:"Led a team of five in developing **Reval**, a decentralized circular marketplace built with Node.js, React, Express, MongoDB, and Solidity on the Ethereum blockchain. Ensured secure transactions and transparent ownership validation through smart contract integration. Designed and deployed smart contracts to manage product listings, ownership transfers, and real-time updates, significantly enhancing platform reliability and trust.",
      image:
        "https://assets.devfolio.co/hackathons/bbc3e9ee43094b5380e919dc941d35d3/assets/logo/257.png",
      links: [
        {
          title: "Frontend",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Niketiiitd/Reval-Frontend.git",
        },
        {
          title: "Backend",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Niketiiitd/Reval-Backend.git",
        },
        {
          title: "Web Extension",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bhutanidev/reval_extension.git",
        },
        
        {
          title: "ML Model",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sanyakapoor27/Recommendation-System-HackTU",
        },
        {
          title: "Web3 Contracts",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KniteenK/ReVal-Contracts.git",
        },

      ],
    },
    
    
  ],
  positions: [
    {
      title: "Mentor at Technical Council",
      description: "Mentoring over 40 students in web development and related technologies, including GitHub, version control, and best practices. Focused on simplifying complex concepts, fostering hands-on learning, and supporting students in building real-world projects with confidence.",
      dates: "Oct 2024 - Present",
      location: "IIIT-Delhi, Delhi",
      postion: "Mentor at Technical Council",
      image: "data:image/png;base64,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", // Replace with actual path to IIIT-Delhi logo
      
    },
    {
      title: "ECell",
      description: "Leading the web development team to build and maintain platforms that support entrepreneurial initiatives, startup showcases, and flagship events. Driving the tech side of innovation by developing scalable and engaging web solutions, while mentoring junior developers in modern web technologies. Collaborating closely with design, content, and strategy teams to create impactful digital experiences that empower student entrepreneurship and startup culture on campus.",
      dates: "Oct 2024 - Present",
      location: "IIIT-Delhi, Delhi",
      postion: "Lead Web developer",
      image:
        "https://media.licdn.com/dms/image/v2/C4E0BAQEhu6BlA60Hbw/company-logo_200_200/company-logo_200_200/0/1630651052888/iiitdecell_logo?e=1749081600&v=beta&t=Fqm_hXlbWMCR9w2Cyu6r-aiMH6ixF0H-yuXW0oiFg1U",
      
      
    },
    {
      title: "Cyfuse",
      description: "Built and maintained the official CyFuse website, overseeing end-to-end development from UI/UX design to backend integration. Leading the web development team, mentoring junior developers, and ensuring smooth deployment and functionality. Collaborated with design and content teams to create a seamless and engaging digital experience for the community.",
      dates: "Aug 2024 - Present",
      location: "IIIT-Delhi, Remote",
      postion: "Lead Web developer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D0BAQHxmeHNOqyMOQ/company-logo_100_100/company-logo_100_100/0/1694672071069?e=1749081600&v=beta&t=V_duwGlWMVPKFmJgMtEm_GNevQfw_v0f4Jn4riCmMiM",
      
    },
    {
      title: "LeanIN",
      description: "Leading initiatives focused on empowering women in tech and academia by fostering a supportive and inclusive environment on campus. Organizing impactful events, peer sessions, and mentorship talks with seniors and alumni to help female students navigate college life, build confidence, and explore career opportunities. Actively working to create awareness around gender equality and promote personal and professional growth through community-driven efforts.",
      dates: "Oct 2023 - Present",
      location: "IIIT-Delhi, Remote",
      postion: "Team lead",
      image:
        "https://media.licdn.com/dms/image/v2/C4E0BAQEgeasAMd2-lg/company-logo_100_100/company-logo_100_100/0/1630635052885/lean_in_iiitd_logo?e=1749081600&v=beta&t=r9TYe6rhKC8IPJSreFMzROXOUR_3VcWGyG2MzNvfm9Y",
      
    },
  ],
} as const;
