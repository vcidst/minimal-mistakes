---
title: "Adding OpenCV 3.4.3 to your Visual Studio 2017 C++ Project"
categories:
  - tutorial
tags:
  - opencv
  - visual-studio
---

This is a step by step guide that shows the process to add OpenCV to your Visual Studio Project.

## Getting Things Ready, Download Stuff

This guide is written for people on Windows 10 but I guess not much changes for other windows versions.
I am using Visual Studio 2017 Community and OpenCV 3.4.3 but the process should work with the slightly older versions of both as well.

1. I assume you have Visual Studio with C++ features installed. If you do not, [download it here](https://visualstudio.microsoft.com/downloads/).    
2. You can download OpenCV from [OpenCV Releases](https://opencv.org/releases.html) page, go for latest 3.4.x. After downloading this, run the installer, set the path at C:\OpenCV34 and press Extract. That's all.

![](http://shailendra.me/images/opencv_extract.png)

## Make a C++ Console Project in Visual Studio

1. Open Visual Studio 2017
2. Click Create New Project. 
3. Choose Visual C++ > Windows Console Application
3. Pick a suitable name and change the location if you want to.
4. Press OK

This is a gif, click for full-res
[![](http://shailendra.me/images/vs_add.gif)](http://shailendra.me/images/vs_add.gif)

## Add OpenCV to your C++ Console Project

1. Select x64 as Solutions Platform.
2. In Solutions Explorer, select your Project > Right Click > Properties
3. Choose C/C++ > General, you should see Additional Include Directories somewhere. Good, add the path to OpenCV Include folder there. Mine was this,
> C:\OpenCV34\opencv\build\include

4. Choose Linker > General, you should see Additional Library Directories on the screen. Add the path to OpenCV libraries over there, Mine is this,
> C:\OpenCV34\opencv\build\x64\vc15\lib

5. Choose Linker > Input, select Additional Dependencies. Click on the down arrow on the far right, click on Edit and paste the .lib filename here,
> opencv_world343d.lib

6. Click OK. You're done!

Click on this gif for full-res version,
[![](http://shailendra.me/images/opencv_add.gif)](http://shailendra.me/images/opencv_add.gif)

### Troubleshooting

This might be obvious but I will write anyway. If you run into a problem, read the error. It's likely because you did either of the above steps wrong. Things to check usually,

1. Do you have x64 selected as Solutions Platform?
2. Check if the paths you have pasted are correct and if the folders exist.
3. If you have downloaded a different version of OpenCV, you will have slightly changed paths and library filename. Make suitable changes.

Improvise, Overcome, Adapt!

![](http://shailendra.me/images/overcome.jpg)
