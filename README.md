# Generated README.md

This is a node application:

- In this, we ask the questions.
- User gives the answers.
- Everything is stored in a new README called as generatedREADME.md.

## Description

This is our first project in node.js. We have followed the below steps to create a generated-README.md:

- First step is to create an index.js file and write init() in it.
- Then create a generateMarkdown.js file.
- Get the package.json files using terminal.
- Create an object in index.js within init and declare an array named questions.
- Declare objects within that array like name, type and message.
- We have defined a function to answer all the questions and generic function to get answers for questions.
- Finally, we have created a function to write the README file.
- In generateMarkdown file, we create a function in which we declare all the answers by using template string and ${} sign.
- It is mandatory to declare the license badge, else we need to pass an empty string.
- After doing the above thing, we move to terminal:
  1. Move to package.json and within "script", specify a new term "start": which includes "node index.js" file.
  2. After that, come to terminal and write "npm run start".
  3. then your questions will start coming up. User need to give the reply of every question.
  4. In the end, a generated-README.md file will store all the rendered information.

## Link to the github profile

https://github.com/Etipriya/readme-generator

## Link to the video

https://drive.google.com/file/d/1rtEt939q5olwfrffJfPTi8p1jAeGqlyN/view?usp=sharing
