const people = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
      yearsOfExperience: 3,
      skills: ['JavaScript', 'React', 'CSS', 'HTML', 'TypeScript', 'Redux'],
      resumeScore: 85,
      about: 'Lindsay Walton is a skilled Front-end Developer with 3 years of experience...',
      attachments: [
        { name: 'resume_front_end_developer.pdf', size: '2.1mb' },
        { name: 'coverletter_front_end_developer.pdf', size: '1.8mb' }
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
      about: 'John Smith is an experienced Back-end Developer with a strong background in...',
      attachments: [
        { name: 'resume_back_end_developer.pdf', size: '2.4mb' },
        { name: 'coverletter_back_end_developer.pdf', size: '2.0mb' }
      ]
    },
    {
      name: 'Emily Johnson',
      title: 'Data Scientist',
      email: 'emily.johnson@example.com',
      role: 'Lead',
      yearsOfExperience: 5,
      skills: ['Python', 'R', 'Machine Learning', 'TensorFlow', 'Keras', 'SQL'],
      resumeScore: 90,
      about: 'Emily Johnson is a proficient Data Scientist with a passion for uncovering...',
      attachments: [
        { name: 'resume_data_scientist.pdf', size: '2.5mb' },
        { name: 'coverletter_data_scientist.pdf', size: '2.2mb' }
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
      attachments: [
        { name: 'resume_full_stack_developer.pdf', size: '2.3mb' },
        { name: 'coverletter_full_stack_developer.pdf', size: '1.9mb' }
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
      attachments: [
        { name: 'resume_project_manager.pdf', size: '2.0mb' },
        { name: 'coverletter_project_manager.pdf', size: '1.7mb' }
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
      attachments: [
        { name: 'resume_quality_assurance.pdf', size: '2.2mb' },
        { name: 'coverletter_quality_assurance.pdf', size: '1.8mb' }
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
      attachments: [
        { name: 'resume_systems_analyst.pdf', size: '2.1mb' },
        { name: 'coverletter_systems_analyst.pdf', size: '1.9mb' }
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
      attachments: [
        { name: 'resume_database_administrator.pdf', size: '2.3mb' },
        { name: 'coverletter_database_administrator.pdf', size: '2.0mb' }
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
      attachments: [
        { name: 'resume_mobile_developer.pdf', size: '2.4mb' },
        { name: 'coverletter_mobile_developer.pdf', size: '2.1mb' }
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
      attachments: [
        { name: 'resume_business_analyst.pdf', size: '2.2mb' },
        { name: 'coverletter_business_analyst.pdf', size: '1.9mb' }
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
    attachments: [
      { name: 'resume_lindsay_walton.pdf', size: '2.1mb' },
      { name: 'coverletter_lindsay_walton.pdf', size: '1.8mb' }
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
    attachments: [
      { name: 'resume_john_smith.pdf', size: '2.4mb' },
      { name: 'coverletter_john_smith.pdf', size: '2.0mb' }
    ]
  },
  {
    name: 'Emily Johnson',
    title: 'UX Designer',
    email: 'emily.johnson@example.com',
    role: 'Lead',
    yearsOfExperience: 5,
    skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping', 'Wireframing'],
    resumeScore: 88,
    about: 'Emily Johnson is a creative UX Designer with a passion for crafting user-centered digital experiences. She has a strong background in user research and interaction design.',
    attachments: [
      { name: 'resume_emily_johnson.pdf', size: '3.2mb' },
      { name: 'portfolio_emily_johnson.pdf', size: '5.7mb' }
    ]
  },
  {
    name: 'Michael Brown',
    title: 'Full-stack Developer',
    email: 'michael.brown@example.com',
    role: 'Member',
    yearsOfExperience: 4,
    skills: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'GraphQL'],
    resumeScore: 87,
    about: 'Michael Brown is a versatile Full-stack Developer with experience in both front-end and back-end technologies. He specializes in building scalable web applications using modern JavaScript frameworks.',
    attachments: [
      { name: 'resume_michael_brown.pdf', size: '2.3mb' },
      { name: 'coverletter_michael_brown.pdf', size: '1.9mb' }
    ]
  },
  {
    name: 'Sarah Lee',
    title: 'Data Scientist',
    email: 'sarah.lee@example.com',
    role: 'Senior',
    yearsOfExperience: 6,
    skills: ['Python', 'R', 'Machine Learning', 'SQL', 'Tableau', 'TensorFlow'],
    resumeScore: 94,
    about: 'Sarah Lee is an accomplished Data Scientist with a strong background in statistical analysis and machine learning. She has experience in developing predictive models and data visualization.',
    attachments: [
      { name: 'resume_sarah_lee.pdf', size: '2.5mb' },
      { name: 'portfolio_sarah_lee.pdf', size: '4.2mb' }
    ]
  },
  {
    name: 'David Chen',
    title: 'DevOps Engineer',
    email: 'david.chen@example.com',
    role: 'Lead',
    yearsOfExperience: 8,
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible'],
    resumeScore: 91,
    about: 'David Chen is a seasoned DevOps Engineer with expertise in cloud infrastructure and automation. He has a track record of improving development workflows and system reliability.',
    attachments: [
      { name: 'resume_david_chen.pdf', size: '2.2mb' },
      { name: 'coverletter_david_chen.pdf', size: '1.7mb' }
    ]
  },
  {
    name: 'Amanda Rodriguez',
    title: 'Product Manager',
    email: 'amanda.rodriguez@example.com',
    role: 'Senior',
    yearsOfExperience: 7,
    skills: ['Agile Methodologies', 'User Stories', 'Product Strategy', 'Market Analysis', 'Jira', 'Roadmapping'],
    resumeScore: 89,
    about: 'Amanda Rodriguez is a strategic Product Manager with a passion for creating user-centric products. She has a strong background in agile methodologies and cross-functional team leadership.',
    attachments: [
      { name: 'resume_amanda_rodriguez.pdf', size: '2.6mb' },
      { name: 'product_case_study.pdf', size: '3.8mb' }
    ]
  },
  {
    name: 'Robert Taylor',
    title: 'Security Analyst',
    email: 'robert.taylor@example.com',
    role: 'Member',
    yearsOfExperience: 5,
    skills: ['Network Security', 'Penetration Testing', 'SIEM', 'Cryptography', 'Risk Assessment', 'Compliance'],
    resumeScore: 86,
    about: 'Robert Taylor is a dedicated Security Analyst with a focus on identifying and mitigating cybersecurity threats. He has experience in implementing security protocols and conducting vulnerability assessments.',
    attachments: [
      { name: 'resume_robert_taylor.pdf', size: '2.0mb' },
      { name: 'coverletter_robert_taylor.pdf', size: '1.6mb' }
    ]
  },
  {
    name: 'Jennifer Wong',
    title: 'Mobile App Developer',
    email: 'jennifer.wong@example.com',
    role: 'Senior',
    yearsOfExperience: 6,
    skills: ['iOS Development', 'Swift', 'Objective-C', 'Android Development', 'Kotlin', 'React Native'],
    resumeScore: 90,
    about: 'Jennifer Wong is an experienced Mobile App Developer with expertise in both iOS and Android platforms. She has a proven track record of delivering high-quality, user-friendly mobile applications.',
    attachments: [
      { name: 'resume_jennifer_wong.pdf', size: '2.3mb' },
      { name: 'portfolio_jennifer_wong.pdf', size: '4.5mb' }
    ]
  },
    {
        name: 'Thomas Mueller',
        title: 'AI Research Scientist',
        email: 'thomas.mueller@example.com',
        role: 'Lead',
        yearsOfExperience: 9,
        skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'PyTorch', 'TensorFlow'],
        resumeScore: 95,
        about: 'Thomas Mueller is a renowned AI Research Scientist with a focus on advancing the field of artificial intelligence. He has published numerous papers and has experience in leading cutting-edge AI projects.',
        attachments: [
        { name: 'resume_thomas_mueller.pdf', size: '2.7mb' },
        { name: 'research_publications.pdf', size: '5.2mb' }
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
      attachments: [
        { name: 'resume_lindsay_walton.pdf', size: '2.1mb' },
        { name: 'coverletter_lindsay_walton.pdf', size: '1.8mb' }
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
      attachments: [
        { name: 'resume_john_smith.pdf', size: '2.4mb' },
        { name: 'coverletter_john_smith.pdf', size: '2.0mb' }
      ]
    },
    {
      name: 'Emily Johnson',
      title: 'UX Designer',
      email: 'emily.johnson@example.com',
      role: 'Lead',
      yearsOfExperience: 5,
      skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping', 'Wireframing'],
      resumeScore: 88,
      about: 'Emily Johnson is a creative UX Designer with a passion for crafting user-centered digital experiences. She has a strong background in user research and interaction design.',
      attachments: [
        { name: 'resume_emily_johnson.pdf', size: '3.2mb' },
        { name: 'portfolio_emily_johnson.pdf', size: '5.7mb' }
      ]
    },
    {
      name: 'Michael Brown',
      title: 'Full-stack Developer',
      email: 'michael.brown@example.com',
      role: 'Member',
      yearsOfExperience: 4,
      skills: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'GraphQL'],
      resumeScore: 87,
      about: 'Michael Brown is a versatile Full-stack Developer with experience in both front-end and back-end technologies. He specializes in building scalable web applications using modern JavaScript frameworks.',
      attachments: [
        { name: 'resume_michael_brown.pdf', size: '2.3mb' },
        { name: 'coverletter_michael_brown.pdf', size: '1.9mb' }
      ]
    },
    {
      name: 'Sarah Lee',
      title: 'Data Scientist',
      email: 'sarah.lee@example.com',
      role: 'Senior',
      yearsOfExperience: 6,
      skills: ['Python', 'R', 'Machine Learning', 'SQL', 'Tableau', 'TensorFlow'],
      resumeScore: 94,
      about: 'Sarah Lee is an accomplished Data Scientist with a strong background in statistical analysis and machine learning. She has experience in developing predictive models and data visualization.',
      attachments: [
        { name: 'resume_sarah_lee.pdf', size: '2.5mb' },
        { name: 'portfolio_sarah_lee.pdf', size: '4.2mb' }
      ]
    },
    {
      name: 'David Chen',
      title: 'DevOps Engineer',
      email: 'david.chen@example.com',
      role: 'Lead',
      yearsOfExperience: 8,
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible'],
      resumeScore: 91,
      about: 'David Chen is a seasoned DevOps Engineer with expertise in cloud infrastructure and automation. He has a track record of improving development workflows and system reliability.',
      attachments: [
        { name: 'resume_david_chen.pdf', size: '2.2mb' },
        { name: 'coverletter_david_chen.pdf', size: '1.7mb' }
      ]
    },
    {
      name: 'Amanda Rodriguez',
      title: 'Product Manager',
      email: 'amanda.rodriguez@example.com',
      role: 'Senior',
      yearsOfExperience: 7,
      skills: ['Agile Methodologies', 'User Stories', 'Product Strategy', 'Market Analysis', 'Jira', 'Roadmapping'],
      resumeScore: 89,
      about: 'Amanda Rodriguez is a strategic Product Manager with a passion for creating user-centric products. She has a strong background in agile methodologies and cross-functional team leadership.',
      attachments: [
        { name: 'resume_amanda_rodriguez.pdf', size: '2.6mb' },
        { name: 'product_case_study.pdf', size: '3.8mb' }
      ]
    },
    {
      name: 'Robert Taylor',
      title: 'Security Analyst',
      email: 'robert.taylor@example.com',
      role: 'Member',
      yearsOfExperience: 5,
      skills: ['Network Security', 'Penetration Testing', 'SIEM', 'Cryptography', 'Risk Assessment', 'Compliance'],
      resumeScore: 86,
      about: 'Robert Taylor is a dedicated Security Analyst with a focus on identifying and mitigating cybersecurity threats. He has experience in implementing security protocols and conducting vulnerability assessments.',
      attachments: [
        { name: 'resume_robert_taylor.pdf', size: '2.0mb' },
        { name: 'coverletter_robert_taylor.pdf', size: '1.6mb' }
      ]
    },
    {
      name: 'Jennifer Wong',
      title: 'Mobile App Developer',
      email: 'jennifer.wong@example.com',
      role: 'Senior',
      yearsOfExperience: 6,
      skills: ['iOS Development', 'Swift', 'Objective-C', 'Android Development', 'Kotlin', 'React Native'],
      resumeScore: 90,
      about: 'Jennifer Wong is an experienced Mobile App Developer with expertise in both iOS and Android platforms. She has a proven track record of delivering high-quality, user-friendly mobile applications.',
      attachments: [
        { name: 'resume_jennifer_wong.pdf', size: '2.3mb' },
        { name: 'portfolio_jennifer_wong.pdf', size: '4.5mb' }
      ]
    },
    {
      name: 'Thomas Mueller',
      title: 'AI Research Scientist',
      email: 'thomas.mueller@example.com',
      role: 'Lead',
      yearsOfExperience: 9,
      skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'PyTorch', 'TensorFlow'],
      resumeScore: 95,
      about: 'Thomas Mueller is a renowned AI Research Scientist with a focus on advancing the field of artificial intelligence. He has published numerous papers and has experience in leading cutting-edge AI projects.',
      attachments: [
        { name: 'resume_thomas_mueller.pdf', size: '2.7mb' },
        { name: 'research_publications.pdf', size: '5.2mb' }
      ]
    }
  ];

  export default people;