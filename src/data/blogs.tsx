export interface IBlogDetailsProps {
  title: string;
  description: string;
  date: string;
  views: number;
  imageSrc: string;
  blogLink: string;
  createdAt: string;
}

export const blogs: IBlogDetailsProps[] = [
  {
    title: "The Rise of JavaScript Frameworks.",
    date: "2024-09-20",
    views: 150,
    imageSrc: "/images/blog/javascript-frameworks.jpg",
    blogLink: "the-rise-of-javascript-frameworks",
    description:
      "Explore how JavaScript frameworks have evolved and why they're essential for modern web development.",
    createdAt: "2024-09-20",
  },

  {
    title: "Understanding React Hooks.",
    date: "2024-10-05",
    views: 230,
    imageSrc: "/blog.webp",
    blogLink: "understanding-react-hooks",
    description:
      "Learn the fundamentals of React Hooks and how they simplify state management in functional components.",
    createdAt: "2024-10-05",
  },
  {
    title: "How to Improve Web Performance?",
    date: "2024-08-15",
    views: 180,
    imageSrc: "/optimized.png",
    blogLink: "improve-web-performance",
    description:
      "In today's fast-paced digital world, web performance is more critical than ever. Users expect websites to load quickly and run smoothly across all devices, whether they're using high-speed broadband or a mobile network. Poor performance can lead to high bounce rates, lower search engine rankings, and a decrease in user satisfaction, all of which can significantly impact your website's success. This blog post will guide you through essential strategies and best practices for improving web performance, ensuring your site delivers a seamless and efficient user experience.",
    createdAt: "2024-08-15",
  },
  {
    title: "Next.js: The Future of Server-side Rendering.",
    date: "2024-09-10",
    views: 320,
    imageSrc: "/images/blog/nextjs-ssr.jpg",
    blogLink: "nextjs-server-side-rendering",
    description:
      "An in-depth look at how Next.js is revolutionizing server-side rendering for high-performance web applications.",
    createdAt: "2024-09-10",
  },
];
