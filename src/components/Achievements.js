import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: 'LeetCode Problem Solver',
      duration: '2024 – Present',
      description: 'Successfully solved over 620 problems on LeetCode, demonstrating proficiency in algorithms.',
    },
    {
      title: 'CodeChef Problem Solver',
      duration: '2024 – Present',
      description: 'Completed over 420 problems on CodeChef, achieving a one-star rating and a 1005 rating.',
    },
    {
      title: 'Golden Batch Problem Solver',
      duration: 'MAR. 2025 – Present',
      description: 'Recognized as a Golden Batch Problem Solver at Coding Ninjas and Code360 for outstanding problem-solving skills.',
    },
  ];

  return (
    <section id="achievements">
      <h2>Achievements</h2>
      {achievements.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#fff',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <h3 style={{ fontSize: '1.3em', marginBottom: '5px' }}>{item.title}</h3>
          <p style={{ color: '#888', fontSize: '0.9em', marginBottom: '8px' }}>{item.duration}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
