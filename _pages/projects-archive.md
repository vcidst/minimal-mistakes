---
title: Projects
layout: splash
permalink: /projects/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /images/banner-sunsetatdwarka.jpg
  caption: "Sunset at India's Westernmost Sunset Point at Dwarka, Gujarat"
web_intro: 
  - excerpt: '# Web Applications'
feature_kolam:
  - image_path: /images/project-kolam.png
    alt: " Kolam Generator "
    title: "Generative Kolam"
    excerpt: "Kolam is a traditional drawing that is part of multiple cultures in South East Asia. They can be seen outside of homes on particular occassions and all of these Kolams look different. The Kolam Generator uses symmetry & rules of a Kolam and P5.js to keep making Kolams until you close the tab"
    url: "kolam"
    btn_label: "Open Kolam Generator"
    btn_class: "btn--primary"
feature_knowyourmp:
  - image_path: /images/project-knowyourmp.png
    alt: " Know Your MP "
    title: "Know Your MP"
    excerpt: "Every 5 years India elects 543 citizens to represent interest of every region of the country. Know Your MP shows state of the nation using multiple maps each showing key personal metrics of our representatives. Built with D3.js"
    url: "knowYourMP"
    btn_label: "Open Know Your MP"
    btn_class: "btn--primary"
desktop_intro: 
  - excerpt: '# Desktop and Console Applications'
feature_bridges:
  - image_path: /images/project-bridgeconnect.png
    alt: " Know Your MP "
    title: "BridgeConnect"
    excerpt: "A simple no-nonsense ERP solution for Public Weighbridges. The application is written in C#.NET with frontend made in WPF and uses an SQLite database"
  - image_path: /images/project-syncbridge.png
    alt: " DB SyncBridge "
    title: "SyncBridge"
    excerpt: "A background service to push new transactiosn at a Weighbridge to an API. Built with C#.NET"
  - image_path: /images/sample-image-5.jpg
    alt: " Serial-To-File "
    title: "Serial-To-File"
    excerpt: "A console application that reads weight from serial communication based WeighBridge Controllers and overwrites it in a file. It adapts to all the string formats used across manufacturers. Built with C#.NET"
feature_row:
  - image_path: /images/sample-image-2.jpg
    alt: " SearchIA "
    title: "SearchIA"
    excerpt: "Command Line power tool to search Internet Archive for all media right from the Terminal. Built with Internet Archive API and Python"
  - image_path: /images/sample-image-3.jpg
    alt: " Hypernormal-Typewriter "
    title: "Hypernormal Typewriter"
    excerpt: "A command line text editor that promised distraction free research and collaboration tools. It turned out to be a vapourware and never saw the light of the day. Built with curses library and Python"
  - image_path: /images/sample-image-5.jpg
    alt: " Command Line Twitter "
    title: "Terminal Twitter"
    excerpt: "A terminal client for Twitter that also lets you find interesting users at any city. Built with Python"
ml_intro: 
  - excerpt: '# Machine Learning and Computer Vision'
feature_qualitytest:
  - image_path: /images/sample-image-4.jpg
    alt: " Quality Testing "
    title: "Machine Vision based LCD/LED Quality Testing"
    excerpt: "A software toolkit to perform automated visual inspection on displays based on LED or LCD using a camera. We've defined multiple tests that can be used to check for soldering issues, dead pixels and uneven contrast/brightness problems right on the assembly line. Built with C#.NET and OpenCV"
---

{% include feature_row id="web_intro" type="center" %}
{% include feature_row id="feature_kolam" type="left" %}
{% include feature_row id="feature_knowyourmp" type="left" %}

{% include feature_row id="desktop_intro" type="center" %}
{% include feature_row id="feature_bridges" %}
{% include feature_row %}

{% include feature_row id="ml_intro" type="center" %}
{% include feature_row id="feature_qualitytest" type="left" %}
