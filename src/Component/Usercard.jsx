import React from 'react';

const userData = [
  {
    name: "James",
    city: "New York",
    description: "Frontend Developer",
    skills: ["UI/UX", "Node.js", "Express.js", "JavaScript", "React.js", "MongoDB"],
    online: true
  },
  {
    name: "Alice",
    city: "San Francisco",
    description: "Backend Developer",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Docker", "AWS"],
    online: false
  },
  {
    name: "Ethan",
    city: "Chicago",
    description: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB", "Next.js", "TailwindCSS"],
    online: true
  },
];

function User(props) {
  return (
    <div className='card-container'>
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src='images1.jpeg' alt="User" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div>
        <button>Message</button>
        <button>Following</button>
      </div>
      <div className='skills'>
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const Usercard = () => {
  return (
    <div>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          online={user.online}
        />
      ))}
    </div>
  );
};

export default Usercard;

