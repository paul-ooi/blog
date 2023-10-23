const skills = {
  "Languages & Frameworks": [
    "HTML5",
    "CSS/Sass",
    "Kubernetes",
    "Amazon Web Services",
    "JavaScript(ES6)",
    "PHP",
    "Cypress",
    "Webpack",
    "XML",
    "MySQL/Oracle SQL",
    "Bootstrap toolkit",
    "C#",
    "English",
    "French" 
  ],
  Software : [
    "Visual Studio Code",
    "Git & Github",
    "Oracle SQL Developer",
    "Visual Studio",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Google Sketchup",
  ],
  "Soft skills": [
    "Responsible",
    "Adaptable",
    "Self-Motivated",
    "Professional",
    "Team Player",
    "Patient Communicator",
  ]
}

const network = [
  {
    name: "Github",
    text: "My code is on Github",
    url: "https://github.com/paul-ooi",
    icon: "/assets/images/github-mark.svg"
  },
  {
    name: "LinkedIn",
    text: "Connect with me on LinkedIn",
    url: "https://linkedin.com/in/paulooi",
    icon: "/assets/images/LinkedIn-Logo-R.png"
  },
]

const education = [
  {
    name: 'Understanding Accessible Experiences',
    date: '2023',
    organization: 'Essential Accessibility (Level Access)'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    date: '2021',
    organization: 'Amazon Web Services (AWS)'
  },
  {
    name: 'Web Development Post-Graduate Certificate',
    date: '2018',
    organization: 'Humber College, (Toronto, Ontario)'
  },
  {
    name: 'Various Certifications',
    date: 'Ongoing',
    organization: 'Free Code Camp (Online)'
  },
  {
    name: 'Freelance Website Development Certificate',
    date: '2017',
    organization: 'Codecademy Intensive, (Online)'
  },
  {
    name: 'Bachelor of Industrial Design Co-op with Honours',
    date: '2008',
    organization: 'Humber College, (Toronto, Ontario)'
  },
]

const projects = [
  {
    name: 'Happy Trails (Database-Driven Web App)',
    date: '2018',
    organization: 'Humber College, (Toronto, Ontario)',
    details: [
      'Combined data from Google Maps API, Open Weather Map API, Wikipedia API to provide location and weather information',
      'Developed & designed with PHP, HTML, CSS, JavaScript, MySQL'
    ]
  },
  {
    name: 'Space Colonies (Two-Player JavaScript Browser Game)',
    date: '2018',
    organization: 'Humber College, (Toronto, Ontario)',
    details: [
      'Front-end developer and designer of a JavaScript browser game',
      'Developed the HUD display, splash page, and planet mouseover'
    ]
  },
  {
    name: 'Seasoning Shack (Restaurant Website)',
    date: '2017',
    organization: 'Humber College, (Toronto, Ontario)',
    details: [
      'Developed a promo slider, live store hour feedback, accordion gallery, booking form pop-up modal using vanilla JavaScript',
      'Designed colour palette and logo'
    ]
  },
  {
    name: 'Animated House (CSS interactive animation)',
    date: '2017',
    organization: 'Humber College, (Toronto, Ontario)',
    details: [
      'Designed and developed an engaging interactive and responsive experience',
      'Used HTML5 form with JavaScript to animate and manipulate shapes made with CSS'
    ]
  }
];

const jobs = [
  {
    name: 'Software Engineer',
    date: '2021 - Present',
    organization: 'System1 Canada ULC, (Guelph, Ontario)',
    details: [
      'Advocate and lead Web Accessibility improvements across all digital properties',
      'Build modern accessible web components for internal and external users',
      'Setup automated testing suite',
    ]
  },
  {
    name: 'HTML & CSS Instructor',
    date: '2020',
    organization: 'Humber College, (Toronto, Ontario)',
    details: [
      'Prepare and present <a href="https://paul-ooi.github.io/dgas-webdesign/">Web Development and Design concepts</a> (HTML and CSS, server Hosting, Web Accessibility)',
      'Engage students with various learning styles',
      'Demonstrate industry best practices in web development building multi-page websites',
    ]
  },
  {
    name: 'Full Stack Web Developer',
    date: '2018 - 2020',
    organization: 'Simplistics Web Design Inc., (Toronto, Ontario)',
    details: [
      'Web Accessibility advocate; auditing\testing and fixing sites',
      'Build highly customized WordPress themes and plugins with PHP, HTML, SCSS, JS, Gulp, Node JS, Yii framework',
      'Search engine optimization site assessment and remediation',
      'Setup, analyze and report with Google analytics, Search Console, Google Data Studio',
    ]
  },
  {
    name: 'Web Development Peer Tutor',
    date: '2017 - 2018',
    organization: 'Humber College, (Toronto, Ontario)',
    details: [
      'Presented web concepts in simple, easy to understand ways to a variety of student learners',
      'Critiqued and gave feedback on front-end (HTML, CSS, JavaScript) and database (Oracle SQL) code',
      'Tailored instructional strategies according to the learning styles of student learners using front-end code and Adobe CC products',
    ]
  },
  {
    name: 'Graphic Designer',
    date: '2012 - 2017',
    organization: 'Korhani Home, (Concord, Ontario)',
    details: [
      'Prepared web collateral and managed CMS content',
      'Coordinated with outside web development team',
      'Resized, sliced and combined images for web and print with Adobe',
      'Prepared posters, product labels, POP, and advertisements for print',
      'Supervised and trained new designers in software and procedures',
    ]
  },
  {
    name: 'Kitchen Designer',
    date: '2010 - 2012',
    organization: 'Muti Kitchen & Bath (Woodbridge, Ontario)',
  },
  {
    name: 'Design Assistant',
    date: '2008 - 2009',
    organization: 'Dayspring Landscape Design (Pickering, Ontario)',
  },
  {
    name: 'Graphic Designer',
    date: '2007 - 2008',
    organization: 'Humber Student Federation (Toronto, Ontario)',
  },
  {
    name: 'Industrial Design Intern',
    date: 'Summer 2007',
    organization: 'Shape Products (Pickering, Ontario)',
  },
  {
    name: 'Front Desk Lead',
    date: '2005 - 2007',
    organization: 'Humber College Residence (Toronto, Ontario)',
  },
]

const volunteer = [
  {
    name: 'Youth Group Facilitator/Trustee',
    date: '2010 - 2018',
    organization: 'Fusion Toronto Community Services (Rexdale, Ontario)',
    details: [
      'Led games, activities, and music by playing guitar or cajón',
      'Facilitated group discussions for children grades 6 and up',
      'Contributed to yearly improvement plans in annual board meetings',
    ]
  },
  {
    name: 'Graphic Designer',
    date: '2017',
    organization: 'Habitat for Humanity (Halton-Mississauga, Ontario)',
    details: [
      'Create 3D model rendering from architectural drawings'
    ]
  },
]

const awards = [
  {
    name: '2nd Place ACIDO Rocket Show',
    date: '2008',
  },
  {
    name: '2nd Place Shape Products Award',
    date: '2006',
  },
  {
    name: '1st Place Cosmoda "Let\'s do Lunch" Award',
    date: '2006',
  },
  {
    name: '1st Place Umbra Award',
    date: '2005',
  },
]

module.exports = {
  skills,
  network,
  projects,
  jobs,
  volunteer,
  awards,
  education,
}