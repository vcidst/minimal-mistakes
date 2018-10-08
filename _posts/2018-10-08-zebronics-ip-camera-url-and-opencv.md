---
title: "Zebronics CCTV Or IP Camera RTSP URL and OpenCV"
categories:
  - info
tags:
  - cctv
  - opencv
---

I bought a Zebronics ZEB-IP1MB18L20M IP Camera a few days ago. I was trying to get it working with OpenCV but couldn't figure out the URL. To find out the IP Camera URL (usually begins with `rtsp://...`) I used the open source iSpyConnect's CCTV wizard. It is a good starting point but it literally gave me a few dozen options which had to be tried one by one.

This is the default URL that works for this model, it will likely work for other Zebronics Cameras as well

```
rtsp://admin:admin@192.168.1.168:554/h264_stream
```

The URL is in the format, `rtsp://<user>:<pwd>@192.168.1.168:554/h264_stream`
You can try to test this with VLC or ffmpeg, on VLC paste this URL in :: Media >> Open Network Stream. Or if you have ffmpeg installed, try this on command line

```
ffplay -rtsp_transport tcp rtsp://admin:admin@192.168.1.168:554/h264_stream 
```

The `rtsp-transport` flag forces TCP over UDP. I used it because I couldn't get it working with default UDP. To get these cameras working with your OpenCV program should only require the URL. OpenCV uses ffmpeg in background to connect to the camera and it already forces TCP.

Example OpenCV Application for a Video Source,

```
#include <opencv2/core/core.hpp>
#include <opencv2/highgui/highgui.hpp>

int main(int argc, char* argv[])
{
	cv::VideoCapture capture("rtsp://admin:admin@192.168.1.168:554/h264_stream");

	if (!capture.isOpened()) {
		//Error
		return -1;
	}

	cv::namedWindow("TEST", CV_WINDOW_AUTOSIZE);
	
	while (1) {
		if (!capture.read(frame)) {
			//Error
		}
		
		cv::imshow("TEST", frame);
		cv::waitKey(30);
	}
}
```