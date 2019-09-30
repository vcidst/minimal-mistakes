---
title: "How to count pages in multiple PDF files on Windows"
categories:
  - programming
tags:
  - windows
author_profile: false
---

I needed to know the total number of pages in hundreds of PDFs. Thanks to [cpdf - Coherent PDF Command Line Tools](http://community.coherentpdf.com/) I was able to get this done from the Windows Command Prompt on Windows 8.1. Here's the command I used,

```powershell
> forfiles /s /m *.pdf /c "cmd /c C:\Users\Admin\Documents\cpdf\cpdf.exe -pages @path >> C:\Users\Admin\Documents\pages.txt && echo. >> C:\Users\Admin\Documents\pages.txt"
```

This populates pages.txt with number of pages in each PDF it comes across in the directory (and sub-directories) it has been run in. You can then paste pages.txt into any spreadsheet to calculate the sum of the series. 

### How it works,

1. This tells you the number of pages in a PDF file
```powershell
> cpdf.exe -pages sample-pdf-file.pdf
```

2. `FORFILES` in Command Prompt (check `FORFILES /?` for help) lets you execute a command for a set of files. 
```powershell
> forfiles /s /m *.pdf /c "cmd /c echo @file"
# `/s` flag tells it to look into sub-directories.
# `/m *.pdf` searches only PDF files.   
# `/c "cmd /c echo @file"` tells it to run `echo @file` command in cmd.   
```

3. Use `>>` to append stdout output to pages.txt

4. In hindsight, this is unnecessary. `&& echo. >> C:\Users\Admin\Documents\pages.txt` adds a newline after each pagecount. I added this because I didn't see newlines when I checked this in notepad. But that's probably because the output probably contained a Linux line ending (line feed aka `\n`) instead of the Windows line ending (carriage return and line feed `\r\n`).