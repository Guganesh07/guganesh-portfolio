export const PROFILE = {
  name: 'Guganesh R',
  title: 'Full Stack Developer',
  location: 'Villupuram, Tamil Nadu',
  email: 'guganguganesh0@gmail.com',
  phone: '+91 9597688310',
  phoneDial: '+919597688310',
  whatsappNumber: '919597688310',
  linkedin: 'https://www.linkedin.com/in/guganesh0706',
  github: 'https://github.com/Guganesh07',
  // Put your actual resume PDF at /public/resume.pdf — this link just points there.
  resumeUrl: '/resume.pdf',
  // Put your cutout photo (transparent background works best) at /public/profile-cutout.png
  photo: '/profile-cutout.png'
}
export const summary ={
  paragraph:"Computer Science and Engineering graduate with strong programming, analytical, and problem-solving skills."+
"Possesses a solid foundation in software development, databases, and modern technologies. Quick learner with"+
"the ability to adapt to new tools and work effectively in collaborative environments. Seeking an opportunity to"+
"contribute technical skills and grow professionally in the IT industry."
}
export const ABOUT = {
  paragraph:
    "An entry-level Full Stack Developer with hands-on internship experience " +
    "across the stack — HTML, CSS and JavaScript with React on the frontend, Java and Spring " +
    "basics on the backend, and SQL/MongoDB for data. I've built and shipped a real booking " +
    "website end-to-end, including authentication and online payments, and I'm actively looking " +
    "for a Junior Web Developer / Software Engineer role where I can keep growing as a full " +
    "stack engineer."
}

export const CREDENTIALS = [
  {
    title: 'QSpiders',
    subtitle: 'Java Full Stack Development — Training',
    points: [
      'Completed training in Java, SQL, HTML, CSS, JavaScript, React, JDBC, Hibernate and Spring.',
      'Acquired practical experience building full-stack, database-driven web applications.',
      'Worked on hands-on assignments and projects using industry-standard technologies.'
    ]
  },
  {
    title: 'Adhiparasakthi Engineering College',
    subtitle: 'B.E. — Computer Science & Engineering',
    points: ['Graduated 2025', 'CGPA: 8.35']
  },
  {
    title: 'School Education',
    subtitle: 'HSC & SSLC',
    points: [
      'HSC — Thiru Kamaraj Municipal Hr. Sec. School, 2021 — 81%',
      'SSLC — Saraswathi Matric Hr. Sec. School, 2019 — 82%'
    ]
  }
]

export const SKILLS = {
  frontend: [
    { name: 'HTML', level: 'Intermediate' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Beginner' },
    { name: 'Vite', level: 'Beginner' }
  ],
  backend: [
    { name: 'Java', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Spring', level: 'Beginner' },

  ],
  database: [
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Beginner' }
  ]
}

export const PROJECTS = [
  {
    id: 'photography',
    title: 'Photography Event Booking System',
    shortDesc: 'A full-stack booking site for a photography studio — browse, book, and pay online.',
    description:
      'A full-stack booking website for a photography studio. Visitors can browse shoot ' +
      'categories with budget tiers, sign up/log in, and confirm a booking by phone, WhatsApp, ' +
      'email, or online payment via Razorpay. Built with React + Vite, Express.js, and MongoDB ' +
      'Atlas, deployed live with a working database.',
    tags: ['React', 'Express.js', 'MongoDB Atlas'],
    demoUrl: 'https://gugan-s-visual.vercel.app/',
    repoUrl: 'https://github.com/Guganesh07',
    cover: '/projects/photography-1.png',
    screenshots: [
      '/projects/photography-1.png',
      '/projects/photography-2.png',
      '/projects/photography-3.png',
      '/projects/photography-4.png'
    ],
    hasDetail: true
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    shortDesc: 'A personal portfolio site built with React and Vite — the one you’re looking at.',
    description:
      'A personal portfolio site built with React and Vite to showcase my projects, skills and ' +
      'credentials — the same site you are looking at right now.',
    tags: ['React', 'Vite', 'CSS'],
    demoUrl: 'guganesh-portfolio-2n8h.vercel.app',
    cover: '/projects/portfolio-1.png',
    screenshots: [
      '/projects/portfolio-1.png',
      '/projects/portfolio-2.png',
      '/projects/portfolio-3.png',
      '/projects/portfolio-4.png'
    ],
    hasDetail: true
  },
  {
    id: 'smartlight',
    title: 'Smart Light Management System in Auto Brightness Adjustment',
    shortDesc: 'An automatic lighting system that senses ambient light and adjusts brightness in real time.',
    description:
      'Developed an automatic lighting system that adjusts brightness based on ambient light ' +
      'conditions '+'. This project combined basic sensor-driven ' +
      'logic with practical energy-saving design thinking.',
    tags: ['Embedded Logic', 'Automation', 'Energy Efficiency', 'Sensor-based Control'],
        demoUrl: '',
    // cover: '/projects/portfolio-1.png',
    hasDetail: false
  
  }
]

export const CERTIFICATIONS = [
  { title: 'Web Development', issuer: 'CORIZO', date: 'Oct 2024' },
  { title: 'Cyber Security & Ethical Hacking', issuer: 'Prompt Infotech', date: 'Feb 2024' },
  { title: 'Web Designing & Development', issuer: 'Prompt Infotech', date: 'Feb 2023' },
  { title: 'Data Analytics', issuer: 'IQ Math Tech', date: 'Oct 2024' },
  { title: 'Machine Learning on Datasets', issuer: 'Geneys Academy', date: 'Aug 2023' }
]

export const ACHIEVEMENTS = [
  'Scored 61.96% in TCS iON NQT, demonstrating strong aptitude in programming and problem-solving.'
]
