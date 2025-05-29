export const projectsData = [
{
  title: "Uthrive (Finance & Service App)",
  year: "2023", // If not specified, adjust accordingly
  image: "https://play-lh.googleusercontent.com/g4GHE7tbtiHLIgGSfhsKDngEXBZHwQjR9VJAyGSEqvVezMzDa267xDvrqAmDXrM7Mw=w240-h480-rw",
  shortDescription: "A finance app that calculates potential earnings and savings from credit card usage with exclusive premium offers.",
  fullDescription:
    "Uthrive is a finance and service platform designed to help users in the US optimize their credit card usage by calculating potential earnings and savings. Premium users gain access to exclusive bank offers. The system includes a mobile app, web dashboard, and scheduled backend processes to deliver timely insights and offers.",
  teamSize: 6,
  role: "Front-end Developer",
  duration: "over  a year", // You can add this if available
  responsibilities: [
    "Led front-end development for both mobile and web platforms",
    "Developed features in React Native and ReactJS for user interaction and offer tracking",
    "Implemented in-app purchase functionality",
    "Integrated AWS EventBridge for scheduled tasks and cron jobs",
    "Built weekly reporting and campaign systems using AWS S3, CloudWatch, Secrets Manager, and Batch Jobs"
  ],
  technologies: [
    "React Native",
    "ReactJS",
    "Redux Toolkit",
    "NestJS",
    "AWS (EventBridge, S3, CloudWatch, Secrets Manager, Batch Jobs)",
    "MySQL"
  ],
  challenges:
    "Coordinating in-app purchases with backend job scheduling and ensuring consistent user experience across platforms.",
  outcomes:
    "Delivered a robust multi-platform application to help users maximize savings with minimal effort.",
  liveUrl: "", // If available
  githubUrl: "", // If available
  slug: "uthrive-finance-app"
},
{
  title: "Bakkt Wallet (Crypto Trading App)",
  year: "2022", // Adjust if needed
  image: "https://pbs.twimg.com/media/E7QDe4rXsAQHUtA?format=jpg&name=medium",
  shortDescription: "A crypto wallet application enabling users to trade digital assets through mobile and web platforms.",
  fullDescription:
    "Bakkt Wallet is a secure cryptocurrency trading app that allows users to manage and trade digital assets across platforms. The app was developed using a monorepo architecture and GraphQL for optimized data handling. The project involved close collaboration among cross-functional teams to ensure a smooth and secure user experience.",
  teamSize: 9,
  role: "Front-end Developer",
  duration: "over  a year", // Add if available
  responsibilities: [
    "Reviewed and scored front-end tasks to maintain code quality and consistency",
    "Developed modular React Native and ReactJS components for both mobile and web interfaces",
    "Utilized GraphQL for efficient data fetching and state management",
    "Contributed to improving team workflows through agile meetings and active collaboration"
  ],
  technologies: [
    "React Native",
    "ReactJS",
    "GraphQL",
    "Context API",
    "ExpressJS",
    "Monorepo"
  ],
  challenges:
    "Maintaining synchronization across mobile and web components within a monorepo structure while optimizing GraphQL performance.",
  outcomes:
    "Delivered a seamless crypto trading experience across platforms with improved development workflow and scalable architecture.",
  liveUrl: "https://bakkt.com/", // If available
  githubUrl: "", // If available
  slug: "bakkt-wallet-crypto-app"
},
{
  title: "CBWay (Mobile Banking App)",
  year: "2023", // Adjust based on your actual timeline
  image: "https://play-lh.googleusercontent.com/4teDA96UJZ1ONVxCe00JwJNcV0Ecbmrt4pDCijS5VOkLA9B_W7qydR1KPPUL7IMtgA=w240-h480-rw",
  shortDescription: "A mobile banking app for CB Bank, offering EKYC, money transfers, and payment features via VietQR and Napas.",
  fullDescription:
    "CBWay is a mobile banking application developed for CB Bank, enabling users to perform essential financial services including electronic know-your-customer (EKYC), online video verification, money transfers, and payments via VietQR and Napas. The application integrates native modules and AI-powered image processing to provide a secure and efficient user experience.",
  teamSize: 10,
  role: "Mobile Developer",
  duration: "over  a year", // Add if known
  responsibilities: [
    "Fixed and stabilized the legacy source code to ensure smooth operation",
    "Implemented EKYC functionality with video call integration",
    "Integrated VietQR and Napas for seamless transfer and checkout processes",
    "Worked with Android and iOS native modules to extend app capabilities"
  ],
  technologies: [
    "React Native",
    "Android Native Module",
    "iOS Native Module",
    "VNPT AI (Image Processing)",
    "VietQR",
    "Napas"
  ],
  challenges:
    "Stabilizing legacy code while integrating advanced EKYC and payment features with third-party services.",
  outcomes:
    "Successfully deployed a secure and reliable mobile banking experience supporting modern verification and payment standards.",
  liveUrl: "https://play.google.com/store/apps/details?id=cbbank.vn.mobile&hl=vi", // If available
  githubUrl: "", // If available
  slug: "cbway-mobile-banking-app"
},
{
  title: "Safira (AI-Powered Blogging Platform)",
  year: "2022", // Adjust if needed
  image: "https://safira.ai/wp-content/uploads/2023/03/Safira-logo-white_small.png",
  shortDescription: "A web app that uses OpenAI APIs to generate AI-powered blog content, images, and voice synthesis.",
  fullDescription:
    "Safira is an AI-driven blogging platform that leverages OpenAI APIs to automate the creation of written content, generate visuals, and provide voice synthesis for enhanced reader engagement. The platform enables users to quickly create blog posts with minimal effort while maintaining quality and interactivity.",
  teamSize: 5,
  role: "Front-end Developer",
  duration: "over  a year", // Optional
  responsibilities: [
    "Integrated OpenAI APIs to support blog content creation, image generation, and voice synthesis",
    "Developed new features in ReactJS to improve the authoring experience",
    "Enhanced UI responsiveness for better performance and accessibility"
  ],
  technologies: [
    "ReactJS",
    "Redux Toolkit",
    "OpenAI API"
  ],
  challenges:
    "Balancing performance and responsiveness while integrating heavy AI features like voice synthesis and image generation.",
  outcomes:
    "Delivered an intelligent blogging solution that boosts content creation speed with AI enhancements.",
  liveUrl: "https://safira.ai/", // If available
  githubUrl: "", // If available
  slug: "safira-ai-blogging-platform"
},
{
  title: "Cannivas (E-commerce Platform)",
  year: "2024", // Adjust if known
  image: "https://medical.cannvisa.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedical-landing-banner-image.f6d22928.jpg&w=640&q=75",
  shortDescription: "A web-based e-commerce platform designed to offer a smooth shopping experience with optimized performance.",
  fullDescription:
    "Cannivas is an e-commerce web application built to provide users with a seamless online shopping experience. The platform includes core features like product listings, shopping cart, and a smooth checkout flow. Focused on UI/UX, the system is optimized for performance and responsiveness using modern front-end technologies.",
  teamSize: 6,
  role: "Front-end Developer",
  duration: "over  a year", // Optional
  responsibilities: [
    "Built core front-end features such as checkout, shopping cart, and product display components",
    "Optimized user interface and user experience for better engagement and faster load times"
  ],
  technologies: [
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Webpack"
  ],
  challenges:
    "Delivering a responsive and performant shopping experience across a wide range of devices.",
  outcomes:
    "Successfully delivered a stable and engaging e-commerce platform with fast interactions and modern UI.",
  liveUrl: "https://medical.cannvisa.com/en", // If available
  githubUrl: "", // If available
  slug: "cannivas-ecommerce-platform"
},
{
  title: "HubCV (Professional Networking Platform)",
  year: "2021", // Adjust if known
  image: "https://media.licdn.com/dms/image/v2/C560BAQHLBWn6Bfp8cw/company-logo_200_200/company-logo_200_200/0/1630658552774?e=1753920000&v=beta&t=sgrOrM2hidasSh1WUbowF8iaPKLai7v162u7fJarK48",
  shortDescription: "A professional social platform where users can upload CVs, create courses, and join seminars.",
  fullDescription:
    "HubCV is a professional networking web application that allows users to build a profile, upload CVs, create and enroll in courses, and attend virtual seminars. The platform emphasizes responsive design and a clean, intuitive interface to foster professional engagement and learning.",
  teamSize: 4,
  role: "Front-end Developer",
  duration: "over  a year", // Optional
  responsibilities: [
    "Developed a fully responsive professional networking interface",
    "Converted Figma designs into reusable, responsive React components",
    "Collaborated with the team to integrate dynamic course and seminar features"
  ],
  technologies: [
    "ReactJS",
    "Redux",
    "Redux-Saga",
    "Ant Design"
  ],
  challenges:
    "Ensuring UI responsiveness and maintaining design consistency across different modules of the networking platform.",
  outcomes:
    "Delivered a sleek, responsive, and functional platform that supports professional networking and skill development.",
  liveUrl: "https://www.hubcv.com/", // If available
  githubUrl: "", // If available
  slug: "hubcv-networking-platform"
},
{
  title: "Glowie (Music Contest Platform)",
  year: "2022", // Adjust if known
  image: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/472375209_976459684502939_1847886176704236380_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH2xoyaR0oeUccca--QZl-0dHvBqGJzrAd0e8GoYnOsB_GIsrvzNLm8GWyZk8RoYL3IvPOpxb88S8Aizhz1juFg&_nc_ohc=cvv1OsdD4sgQ7kNvwFEzfxQ&_nc_oc=AdlLHYrPPzCf_P7Uy50CQfJ268jTp0xy2ABG_pdWI32dFK0BEZ0WnYzLAIL8zlBSB4Dd1VHWv_RGxfc8HHu-5IpT&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=mb7ngd1jRIkfA1WmcmdMwA&oh=00_AfLezwBZwxQRIVh8KzwqKJ964ofZ0Ab1hWAOqyqdlPoxZg&oe=683941BC",
  shortDescription: "A social music platform for online singing contests with ranking, voting, and gifting features.",
  fullDescription:
    "Glowie is an interactive music contest platform where users can participate in singing competitions, vote for their favorite performers, and send virtual gifts. The platform promotes musical talent through a community-driven ranking system and dynamic user interactions.",
  teamSize: 6,
  role: "Front-end Developer",
  duration: "6 months", // Optional
  responsibilities: [
    "Maintained and enhanced key features of the social music contest platform",
    "Implemented ranking, voting, and virtual gifting components",
    "Collaborated closely with testers and back-end developers to ensure feature quality"
  ],
  technologies: [
    "ReactJS",
    "Redux",
    "Redux Toolkit"
  ],
  challenges:
    "Designing intuitive voting and ranking flows while ensuring performance under high user interaction.",
  outcomes:
    "Delivered a highly engaging music contest experience that supports real-time user participation and recognition.",
  liveUrl: "https://www.facebook.com/glowieapp/", // If available
  githubUrl: "", // If available
  slug: "glowie-music-contest-platform"
}

]
