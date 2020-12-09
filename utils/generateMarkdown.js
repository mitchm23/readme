// function to generate markdown for README
function generateMarkdown(data) {
  console.log(`# ${data.projectTitle}
  
  `)
  return `# ${data.projectTitle}
This project was created by ${data.name}.
When this project is run, ${data.goal}.
If you would like to keep up with the progress of this project, our github name is ${data.githubName}.
Our mission statement for this project is ${data.missionStatement}.
Our future plans for this project involve ${data.future}.
We hope you enjoy this project, and if you have any questions, please reach out at ${data.email}.
`;
}

module.exports = generateMarkdown;
