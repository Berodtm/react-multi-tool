# React Multi-Tool

My first React.js project. I used React Bootstrap and in the process of recreating some of my tools created in regular HTML, CSS and JavaScript. 

This repository contains a multi-web app tool built using React. It provides various functionalities and tools for web development.

See bellow for reference on how to get a React project uploaded as a static page. 

## URLs
GitHub Pages url:
https://berodtm.github.io/work-projects-lbg/multi-web-app-tool/

URL for Repo and example for config.JSON
https://github.com/Berodtm/react-multi-tool.git

## Getting Started

To get React to work on GitHub Pages, follow these steps:

1. Create a new repository on GitHub Enterprise and leave everything default. Make a note of the URL.
2. Create the folder where you want to work.
3. Open VScode and run the following commands:
    ```bash
    $ npm create vite@latest
    ```
    - Select "yes."
    - Enter the name of the project (you can use the same name as the new repo).
    - Select "react."
4. Change your working directory to the new project folder:
    ```bash
    $ cd your-new-project-folder
    ```
5. Install dependencies:
    ```bash
    $ npm install
    ```
6. Install the `gh-pages` package:
    ```bash
    $ npm install --save-dev gh-pages
    ```
7. In `package.json`, insert a homepage at the top:
    ```json
    "homepage": "https://Berodtm.github.io/react-multi-tool/"
    ```
    Note: This URL is different from the image URL. Everything is the same except for the username and the name of the project.
8. Insert the following scripts at the top of the `Scripts` section in `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
9. Switch to `vite.config.js` and insert the following at the top (above plugins):
    ```javascript
    base: "/react-multi-tool/"
    ```
10. Run the following Git commands:
    ```bash
    $ git init
    $ git add .  # (or specific files)
    $ git commit -m "commit message"
    $ git branch -M main
    $ git remote add origin https://github.com/Berodtm/react-multi-tool.git  # Use your repo link from the start, not the homepage.io link
    $ git push -u origin main
    $ npm run deploy
    ```
11. Check GitHub Actions, and the workflow should deploy. Click the URL it provides or the URL from the Pages section.

12. To make an edit to the page after adding files, enter the following commands:
    ```bash
    $ git add .
    $ npm run deploy
    $ git commit -m "first edit"
    $ git push
    ```

13. To check the preview server, enter the command:
    ```bash
    $ npm run dev
    ```

## Notes from Initial Creation of Repo

If you prefer to create a new repository via the command line, use the following steps:
```bash
echo \"# react-multi-tool\" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Berodtm/react-multi-tool.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/Berodtm/react-multi-tool.git
git branch -M main
git push -u origin main


https://berodtm.github.io/work-projects-lbg/multi-web-app-tool/

https://github.com/Berodtm/react-multi-tool.git

