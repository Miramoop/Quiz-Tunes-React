<a name="logo" href="" ><img align="center" src="public/img/logo/QuizTunesCardLogo.png" alt="Quiz Tunes Card Logo" style="width:100%; height: 100%"></a>

<h1 align="center" style="display: block; font-size: 2.5em; font-weight: bold; margin-block-start: 1em; margin-block-end: 1em;"> Quiz Tunes </h1>

## Introduction

<!-- Add other images/cool stuff -->

Quiz Tunes is a web application built with REACT, HTML, CSS, JavaScript, Spotify API, and the YouTube API.
It asks the user a variety of questions in the form of a quiz, then recommends the user a song on
Spotify and YouTube based on their quiz results.
I became inspired to create a web quiz after a couple of friends showed me this [cute fruit quiz](https://github.com/Gudetea/FruitCard-Odyssey) that they found online! Thanks for the inspiration [Gudetea](https://github.com/Gudetea)!
All the Images are Public Domain obtained from [rawpixel](https://www.rawpixel.com/) under the [CC0 1.0 Universal License](https://creativecommons.org/publicdomain/zero/1.0/)

<!--Add Icons to each heading -->
<!-- Add back to home link -->

## Table of Contents

- [Clone the Repo](#clone-the-repo)
- [Create an Environment File](#create-an-environment-file)
- [Obtain the Spotify API Keys](#obtain-the-spotify-api-keys)
- [Obtaining the YouTube API Key](#obtain-the-youtube-api-key)
- [Check for Node and Npm Installations](#check-for-node-and-npm-installations)
- [Make Repo into React App](#make-repo-into-react-app)

## Clone the Repo

<details>
  <summary>Click to show / hide <code>Clone the Repo</code></summary></br>
  <li>Clone the Github Repo into any directory of your choice on your local machine.</li>
  <!--Add more instructions here? -->
  <li>Here are the instructions on how to clone the repo if needed:
  <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository" target="_blank">Github Docs on Cloning a Repo</a></li>
  <!--Possibly could add the instructions in here? -->
</details>

## Create an Environment File

<details>
  <summary>Click to show / hide <code>Create an Environment File</code></summary></br>
  <li>Open the project in the code editor of your choice</li>
  <li>Create a file ending in .env at the same level of your directory as the readme.md (outside the public & src folders)</li> 
  <!--//Add a photo here --> <!--Add more instructions here? -->
  <li>Use the below formatting for the .env file, but you must enter in your own keys</li>
<br>

```
REACT_APP_CLIENT_ID=_PLACE YOUR SPOTIFY CLIENT ID CODE HERE_
REACT_APP_CLIENT_SECRET=PLACE YOUR SPOTIFY SECRET ID CODE HERE
REACT_APP_API_KEY=PLACE YOUR YOUTUBE API KEY HERE
```

</details>

## Obtain the Spotify API Keys

<details>
    <summary>Click to show / hide <code>Obtain the Spotify API Keys</code></summary></br>
    <li>These Keys are obtained at: <a href="https://developer.spotify.com/" target="_blank">Spotify Developer Dashboard</a></li>
    <i>Note: You must log in with a Spotify account (it can be either free or premium)</i>
    <li>Once logged in press your profile at the top right of the screen & select dashboard from the dropdown</li>
    <li>Then click the Create App button</li>
    <i>Note: You can choose any app name or decription</i>
    <li>Set the redirect uri to localhost:3000/</li>
    <i>Note: The redirect uri must be set to this in order for the local server to run properly using react</i>
    <li>Make sure to select the Web API within the API used category</li>
    <li>Accept Spotify's terms, then press save</li>
    <!--Add image of the proper settings-->
    <li>You can now find the keys by clicking on the app that you just created in your dashboard</li>
    <li>Click the settings button and the keys should appear</li>
    <i>Note: In order to view the client secret, you must click the view client secret button</i>
    <!--Add image of the dashboard showing keys, but blur out mine-->
    <li>Copy & Paste these images into the .env file created in the steps above</li>
</details>

## Obtain the YouTube API Key

<details>
 <summary>Click to show / hide <code>Obtain the YouTube API Key</code></summary></br>
 <li>These Keys are obtained at: <a href="https://console.cloud.google.com/apis/dashboard" target="_blank">Google API Dashboard</a></li>
 <li>Sign in or create a Google account</li>
 <li>Click on the top left button titled "Select a Project"</li>
 <li>Press the "New Project" button & Press "Create"</li>
 <i>Note: You can use any project name or organization that you'd like</i>
 <li>Once the project is created, press "Enable APIs & Services</li>
 <li>Search for "YouTube Data API v3" & Click to enable it</li>
 <li>Click on the "Credentials" button & then the "Create button"</li>
 <li>Choose the public data option & copy the API key given into the .env file created in the steps above</li>
 <!--Add Images into this to make explanation easier -->
</details>

## Check for Node and Npm Installations

<details>
<summary>Click to show / hide <code>Check for Node and Npm Installations</code></summary></br>
<li>Ensure that you have Node & Npm installed on your local machine</li>
<li>Open the command prompt & run the command below to check the version of node installed</li>
<br>
<pre> node -v </pre>
<li>Open the command prompt & run the command below to check the version of npm installed</li>
<br>
<pre> npm -v </pre>
<li>If either of these commands do not give a version or give an error, we must install them</li>
<li>The instructions for installation can be found at: <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">Docs on Installation of Node & Npm</a></li>
<!--Possibly could add the instructions in here? -->
</details>

## Make Repo into React App

<details>
<summary>Click to show / hide <code>Make Repo into React App</code></summary></br>
<li>Open the command prompt & ensure it is in the proper project directory</li>
<!--Add image here-->
<li>Run the command below to install the necessary react elements into our project</li>
<br>
<pre>npm install create-react-app</pre>
<li>Once installed we can run the project in our local development server</li>
<li>Open the command prompt & ensure that you are in the proper project directory, then run the below command to start the server:</li>
<br>
<pre>npm run start</pre>
<i>Note: To terminate the local development server, select the command prompt used to start the server & press "ctrl + c", then press y when prompted</i>

</details>
