const peopleIV = [
  {
      name: 'Emily Johnson',
      title: 'Data Scientist',
      email: 'emily.johnson@example.com',
      role: 'Lead',
      yearsOfExperience: 5,
      skills: ['Python', 'R', 'Machine Learning', 'TensorFlow', 'Keras', 'SQL'],
      resumeScore: 90,
      about: 'Emily Johnson is a proficient Data Scientist with a passion for uncovering...',
      status: "sent",
      attachments: [
          { name: 'resume_data_scientist.pdf', size: '2.5mb' },
          { name: 'coverletter_data_scientist.pdf', size: '2.2mb' }
      ],
      questions: [
          {
              question: "Can you describe a project where you used TensorFlow?",
              answer: "I developed a neural network model using TensorFlow to predict customer churn, achieving 85% accuracy."
          }
      ]
  },
  {
      name: 'Michael Brown',
      title: 'Full-stack Developer',
      email: 'michael.brown@example.com',
      role: 'Member',
      yearsOfExperience: 4,
      skills: ['JavaScript', 'Node.js', 'React', 'SQL', 'MongoDB', 'Docker'],
      resumeScore: 88,
      about: 'Michael Brown is a versatile Full-stack Developer with a solid understanding...',
      status: "taken",
      attachments: [
          { name: 'resume_full_stack_developer.pdf', size: '2.3mb' },
          { name: 'coverletter_full_stack_developer.pdf', size: '1.9mb' }
      ],
      questions: [
          {
              question: "How do you ensure the scalability of your applications?",
              answer: "I use microservices architecture and containerization with Docker to ensure scalability and easy deployment."
          }
      ]
  },
  {
      name: 'Sarah Davis',
      title: 'Project Manager',
      email: 'sarah.davis@example.com',
      role: 'Manager',
      yearsOfExperience: 10,
      skills: ['Project Management', 'Agile', 'Scrum', 'Leadership', 'Communication'],
      resumeScore: 95,
      about: 'Sarah Davis is a dedicated Project Manager with a decade of experience in...',
      status: "sent",
      attachments: [
          { name: 'resume_project_manager.pdf', size: '2.0mb' },
          { name: 'coverletter_project_manager.pdf', size: '1.7mb' }
      ],
      questions: [
          {
              question: "Can you explain your approach to handling project risks?",
              answer: "I use a proactive risk management approach, identifying potential risks early and developing mitigation strategies."
          }
      ]
  },
  {
      name: 'Lisa Anderson',
      title: 'Quality Assurance',
      email: 'lisa.anderson@example.com',
      role: 'Member',
      yearsOfExperience: 6,
      skills: ['Testing', 'Automation', 'Selenium', 'JIRA', 'Agile', 'Manual Testing'],
      resumeScore: 87,
      about: 'Lisa Anderson is a meticulous Quality Assurance professional with expertise in...',
      status: "scored",
      attachments: [
          { name: 'resume_quality_assurance.pdf', size: '2.2mb' },
          { name: 'coverletter_quality_assurance.pdf', size: '1.8mb' }
      ],
      questions: [
          {
              question: "How do you prioritize test cases?",
              answer: "I prioritize test cases based on the impact and likelihood of defects, focusing first on critical functionalities."
          }
      ]
  },
  {
      name: 'James Martinez',
      title: 'Systems Analyst',
      email: 'james.martinez@example.com',
      role: 'Senior',
      yearsOfExperience: 8,
      skills: ['System Analysis', 'SQL', 'Requirements Gathering', 'UML', 'Business Analysis'],
      resumeScore: 89,
      about: 'James Martinez is a skilled Systems Analyst with a knack for identifying system...',
      status: "sent",
      attachments: [
          { name: 'resume_systems_analyst.pdf', size: '2.1mb' },
          { name: 'coverletter_systems_analyst.pdf', size: '1.9mb' }
      ],
      questions: [
          {
              question: "Can you describe a time when you improved a system's performance?",
              answer: "I optimized a database system by normalizing tables and creating indexes, which reduced query time by 40%."
          }
      ]
  },
  {
      name: 'Patricia Harris',
      title: 'Database Administrator',
      email: 'patricia.harris@example.com',
      role: 'Member',
      yearsOfExperience: 9,
      skills: ['Database Management', 'SQL', 'Oracle', 'Backup & Recovery', 'Performance Tuning'],
      resumeScore: 91,
      about: 'Patricia Harris is a seasoned Database Administrator with extensive experience in...',
      status: "scored",
      attachments: [
          { name: 'resume_database_administrator.pdf', size: '2.3mb' },
          { name: 'coverletter_database_administrator.pdf', size: '2.0mb' }
      ],
      questions: [
          {
              question: "How do you handle database performance issues?",
              answer: "I conduct regular performance tuning, monitor slow queries, and optimize indexes to ensure database efficiency."
          }
      ]
  },
  {
      name: 'Daniel Clark',
      title: 'Mobile Developer',
      email: 'daniel.clark@example.com',
      role: 'Lead',
      yearsOfExperience: 6,
      skills: ['iOS', 'Android', 'React Native', 'Swift', 'Kotlin', 'Java'],
      resumeScore: 93,
      about: 'Daniel Clark is an innovative Mobile Developer with a strong portfolio of...',
      status: "scored",
      attachments: [
          { name: 'resume_mobile_developer.pdf', size: '2.4mb' },
          { name: 'coverletter_mobile_developer.pdf', size: '2.1mb' }
      ],
      questions: [
          {
              question: "What is your approach to cross-platform mobile development?",
              answer: "I use React Native for developing cross-platform apps, ensuring code reusability and consistent user experience."
          }
      ]
  },
  {
      name: 'Nancy Rodriguez',
      title: 'Business Analyst',
      email: 'nancy.rodriguez@example.com',
      role: 'Member',
      yearsOfExperience: 5,
      skills: ['Business Analysis', 'Requirements Analysis', 'SQL', 'Project Management', 'Agile'],
      resumeScore: 86,
      about: 'Nancy Rodriguez is a detail-oriented Business Analyst with a knack for identifying...',
      status: "scored",
      attachments: [
          { name: 'resume_business_analyst.pdf', size: '2.2mb' },
          { name: 'coverletter_business_analyst.pdf', size: '1.9mb' }
      ],
      questions: [
          {
              question: "How do you handle conflicting requirements from stakeholders?",
              answer: "I prioritize requirements based on business value and negotiate with stakeholders to reach a consensus."
          }
      ]
  },
  {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
      yearsOfExperience: 3,
      skills: ['JavaScript', 'React', 'CSS', 'HTML', 'TypeScript', 'Redux'],
      resumeScore: 85,
      about: 'Lindsay Walton is a skilled Front-end Developer with 3 years of experience in creating responsive and intuitive user interfaces. She excels in modern JavaScript frameworks and has a keen eye for design.',
      status: "sent",
      attachments: [
          { name: 'resume_lindsay_walton.pdf', size: '2.1mb' },
          { name: 'coverletter_lindsay_walton.pdf', size: '1.8mb' }
      ],
      questions: [
          {
              question: "What is your approach to ensuring cross-browser compatibility?",
              answer: "I use CSS resets and test applications on multiple browsers to ensure consistency and compatibility."
          }
      ]
  },
  {
      name: 'John Smith',
      title: 'Back-end Developer',
      email: 'john.smith@example.com',
      role: 'Senior',
      yearsOfExperience: 7,
      skills: ['Python', 'Django', 'Node.js', 'SQL', 'Docker', 'AWS'],
      resumeScore: 92,
      about: 'John Smith is an experienced Back-end Developer with a strong background in scalable web applications. He has expertise in cloud technologies and database optimization.',
      status: "taken",
      attachments: [
          { name: 'resume_john_smith.pdf', size: '2.4mb' },
          { name: 'coverletter_john_smith.pdf', size: '2.0mb' }
      ],
      questions: [
          {
              question: "How do you ensure your back-end services are scalable?",
              answer: "I use microservices architecture, deploy on AWS, and utilize Docker for containerization to ensure scalability."
          }
      ]
  },
  {
      name: 'Emily Johnson',
      title: 'UX Designer',
      email: 'emily.johnson@example.com',
      role: 'Lead',
      yearsOfExperience: 5,
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Figma', 'Sketch', 'Adobe XD'],
      resumeScore: 90,
      about: 'Emily Johnson is a creative UX Designer with a knack for crafting intuitive user experiences. She excels in user research and has a strong portfolio of successful projects.',
      status: "sent",
      attachments: [
          { name: 'resume_ux_designer.pdf', size: '2.3mb' },
          { name: 'coverletter_ux_designer.pdf', size: '2.0mb' }
      ],
      questions: [
          {
              question: "How do you incorporate user feedback into your designs?",
              answer: "I conduct regular user testing sessions and use feedback to iterate and improve designs for better usability."
          }
      ]
  }
];

export default peopleIV;