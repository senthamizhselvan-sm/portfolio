const Projects = () => {
  const projects = [
    {
      title: 'WAREHOUSE MANAGEMENT',
      tech: 'Spring Boot, React, MySQL, Node.js',
      date: 'FEB. 2025',
      details: [
        'Optimized WMS operations for efficient, streamlined inventory management and order fulfillment.',
        'Integrated WMS with ERP systems, ensuring real-time data accuracy and improved supply chain visibility.',
        'Collaborated on API integrations, improving data flow between warehouse and ERP systems.',
      ],
    },
    {
      title: 'GAMES',
      tech: 'HTML/CSS, Java, API, JavaScript, Git, VS Code',
      details: [
        'Developed engaging gameplay mechanics using [Unity/Unreal Engine].',
        'Collaborated on designing and releasing [game type] projects.',
        'Optimized game performance, improving frame rates and load times.',
      ],
    },
    {
      title: 'UTILITY APPS',
      tech: 'Java, Dart, Flutter, C++',
      date: 'JAN. 2025 – Present',
      details: [
        'Designed and developed a user-friendly utility app to streamline everyday tasks and improve user productivity.',
        'Implemented efficient algorithms to ensure fast, accurate performance for calculations and task management.',
        'Optimized app interface for seamless navigation and a smooth user experience across different devices.',
      ],
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((proj, i) => (
        <div key={i} style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.5em', color: '#333' }}>{proj.title}</h3>
          <p style={{ fontStyle: 'italic', color: '#555' }}>{proj.tech}</p>
          {proj.date && <p style={{ color: '#888', fontSize: '0.9em', marginBottom: '10px' }}>{proj.date}</p>}
          <ul style={{ paddingLeft: '20px' }}>
            {proj.details.map((point, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
