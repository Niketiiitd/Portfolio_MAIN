import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
export const DATA = {
  name: "Niket Agarwal",
  initials: "DV",
  url: "https://yourdomain.com",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
  "Aspiring full-stack developer with a focus on machine learning and web development actively engaged in various technical projects and research.",
  summary:
    "Aspiring full-stack developer passionate about machine learning and web development. Currently a student at IIIT-Delhi, I actively engage in diverse technical projects and research to broaden my expertise and drive innovation.",
  avatarUrl: "/me.png",
  skills: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "C++",
    "Java",
    "SQL",
    "MongoDB",
    "Postgres",
    "Express.js",
    "Flask",
    "Socket.io",
    "Git",
    "Linux",
    "JavaFX",
    "Axios"
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
        name: "Resume",
        url: "https://www.overleaf.com/read/knhnfkjypbtg#f10ef7",
        icon: "Resume",
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
      degree: "B.Tech in Computer Science and Biosciences",
      logoUrl: "data:image/png;base64,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", // Replace with actual path to IIIT-Delhi logo
      start: "2022",
      end: "2026", // Adjust this according to your expected graduation year
  },
  {
      school: "Nav Uday Sr. Sec. School",
      href: "https://navudaysrsec.com", // Adjust URL if there's a specific link
      degree: "High School, Percentage: 89%",
      logoUrl: "/navuday-logo.png", // Replace with actual path to school logo if available
      start: "2016",
      end: "2022",
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
          "type": "Source",
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
          type: "Source Frontend",
          href: "https://github.com/KniteenK/HustlePe-frontend.git", // Your GitHub link
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source Backend",
          href: "https://github.com/KniteenK/Backend_HustlePe.git", // Your GitHub link
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add an image if available
      video: "", // Add a video link if available
    },
    {
      title: "Integrated Social Media Platform for Students",
      href: "https://studenthub.com", // Update with actual link if available
      dates: "June 2023 - Present", // Adjust dates as needed
      active: true,
      description:
        "Developed a social media website enabling students to showcase projects, create reels, and chat in real-time, designed to function similarly to Instagram but focused on academic and creative projects.",
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "Socket.io",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://studenthub.com", // Update with actual link
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Niketiiitd/StudentHub.git", // Your GitHub link
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
          type: "Source",
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
    }
    
    
  ],
  positions: [
    {
      title: "Mentor at Technical Council",
      dates: "Oct 2024 - Present",
      location: "IIIT-Delhi, Delhi",
      postion: "Core Technical Team Member",
      image: "data:image/png;base64,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", // Replace with actual path to IIIT-Delhi logo
      
    },
    {
      title: "ECell",
      dates: "Oct 2024 - Present",
      location: "IIIT-Delhi, Delhi",
      postion: "Core Technical Team Member",
      image:
        "https://media.licdn.com/dms/image/v2/C4E0BAQEhu6BlA60Hbw/company-logo_100_100/company-logo_100_100/0/1630651052888/iiitdecell_logo?e=1736985600&v=beta&t=1O32YQ1JWdNgqv3YnCeZshhyqyYg7MWoy7AGKiBF534",
      
    },
    {
      title: "Cyfuse",
      dates: "Aug 2024 - Present",
      location: "IIIT-Delhi, Remote",
      postion: "Core Technical Team Member",
      image:
        "https://media.licdn.com/dms/image/v2/D4D0BAQHxmeHNOqyMOQ/company-logo_100_100/company-logo_100_100/0/1694672071069?e=1736985600&v=beta&t=Z_7xOVoWTZ01K3208IMWMyxxtGnwTlIPS3seWWXU4FE",
      
    },
    {
      title: "LeanIN",
      dates: "Oct 2023 - Present",
      location: "IIIT-Delhi, Remote",
      postion: "Team lead",
      image:
        "https://media.licdn.com/dms/image/v2/C4E0BAQEgeasAMd2-lg/company-logo_100_100/company-logo_100_100/0/1630635052885/lean_in_iiitd_logo?e=1736985600&v=beta&t=0iQzFfyOAaLeXOVM2W-KviiEZR5IwaxLfpgsVRw6aOQ",
      
    },
  ],
} as const;
