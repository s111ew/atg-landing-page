const text = {
  abstract: {
    body: "Batch convert image files to html tags with src and alt attributes included.",
  },
  overview: {
    title: "Overview",
    body: "Alt-Text Generator is an npm package designed to automatically generate concise and descriptive ALT text for images in a specified folder, leveraging OpenAI's API. The generated ALT text is integrated into HTML <img> tags and saved in a Markdown file for easy usage.",
  },
  keyFeatures: {
    title: "Key Features",
    body: [
      "Format Support: Compatible with .jpg, .jpeg, and .png image formats.",
      "AI-Powered ALT Text: Automatically generates accurate and descriptive ALT text for each image.",
      "HTML Output: Outputs HTML <img> tags with the generated ALT text included.",
      "User-Friendly: Simple setup and configuration.",
    ],
  },
  installation: {
    title: "Installation",
    body: "Install the package via npm: npm install alt-text-generator",
  },
  setup: {
    title: "Setup",
    subtitle: "Create a .env File",
    body: "The .env file is used to securely store your OpenAI API key. If it does not exist, create it in the root directory of your project and ensure it is listed in your .gitignore file to avoid exposing sensitive information. Add the following line to the .env file: OPENAI_API_KEY=<your-openai-api-key> Replace <your-openai-api-key> with your actual OpenAI API key.",
  },
};

export default text;
