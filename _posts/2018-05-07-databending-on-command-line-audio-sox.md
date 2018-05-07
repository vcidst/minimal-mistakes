---
title: "Databending images with a command line audio processing utlity"
categories:
  - Tutorial
tags:
  - new-media-art
  - glitch
---

Interesting things happen when you edit images like music. Glitchet lists some resources for how to get started on databending. Using Audacity to databend images is somewhat cumbersome and that is when I found [sox](hhttps://sourceforge.net/projects/sox/). It is called "the Swiss Army knife of audio manipulation" on its [man page](https://linux.die.net/man/1/sox). Thanks to the sox mailing list where Mr. Rullgård helped me with the commands!

#Prerequisites

* Sox, I am using v14.4.2 downloaded from [Sourceforge](https://sourceforge.net/projects/sox/files/sox/)
* Added to PATH[^1], you'll need to do this to use sox as a command on Command Prompt
* [ImageMagick](https://www.imagemagick.org/script/download.php), to make gif from a bunch of images with 'convert'

#Process

In this tutorial, I will use sox to databend an image and then we'll make 100 versions of that image to make a gif. Everything inside the shell. I am on a Windows 10 computer so I will be using the Command Prompt. I am starting with this image, you can start with any image in any uncompressed image format.

![alt text](/images/water.bmp)

Our idea here is to ask sox to apply an audio effect to the image. Sox commands will look like 'sox [input] [output] [effects]'. We need to make sure the files are treated as raw data and also make sure the BMP header is left untouched.

```
sox -t ul -c 1 -r 48k water.bmp -t ul water_out.bmp trim 0 100s : echo 0.8 0.88 60 0.5
```

There are a couple of things happening here, let me break it down:

* '-t ul' -- We don't want sox to infer filetype from the filename so this sets the filetype to a headerless raw format 'ul'. The name 'ul' is an abbreviation of μ-law which is an algorithm used in PCM systems.
* '-c 1' -- Sets number of channels as 1. Although this is default for all raw formats, it doesn't hurt to set it explicitly.
* '-r 48k' --  Sets the sample rate to 48k
* 'trim 0 100s :' -- Skip first 100 samples
* 'echo 0.8 0.88 60 0.5' -- This follows the format taken from man page, echo gain-in gain-out <delay decay>

We get this image, 'water_out.bmp'

![alt text](/images/water_out.bmp)

Let's extend this to make 10 images with a simple loop inside the command prompt, using a for-loop [^2]

```
for /l %i in (1,1,10) do sox -t ul -c 1 -r 48k water.bmp -t ul water%i.bmp trim 0 100s : echo 0.8 0.88 %i 0.5
```

We can also take this further and create a gif with ImageMagick 'convert' command,
```
for /l %i in (1,1,100) do sox -t ul -c 1 -r 48k water.bmp -t ul water%i.bmp trim 0 100s : echo 0.8 0.88 %i 0.5

convert -delay 10 -loop 0 water*.bmp animate_water.gif
```

This is the end result,
<div style='position:relative;padding-bottom:76%'><iframe src='https://gfycat.com/ifr/SolidJollyElver' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

[^1]: You can do this from command line too, open command prompt and type 'setx path "%path%;C:\Program Files (x86)\sox-14-4-2"' check the directory name to make sure it exists and the version number is correct.

[^2]: Check 'help for' inside Command Prompt for the help page. It is also available [here](https://ss64.com/nt/for_cmd.html). When iterating through a list of numbers, the syntax is 'for /l %i in (start, step, end) do <cmd>'