---
title: "Thoughts on Cambridge Analytica"
categories:
  - privacy
tags:
  - data-science
  - politics
---

Professor Jonathan Albright [writes a quick run-down](https://medium.com/tow-center/cambridge-analytica-the-geotargeting-and-emotional-data-mining-scripts-bcc3c428d77f) of the scripts found from a personal Github account of a data science intern at Cambridge Analytica (CA henceforth).

It contains two scripts,

##### `Geolocation.py` [[link](https://data.world/d1gi/ca-data/workspace/file?filename=GeoLocation.py)]

On line 199,

> This function is really the purpose of this script. Essentially what it does is: 
> For each address in the addresses file, try to get an accurate lng/lat quickly (comparing available data from Aristotle/IG to the zip code file data to determine accuracy), but if we can't, we fetch it from ArcGIS.

It uses standard data science tools and frameworks. Nothing exclusive to CA. This might help in visualizing voter lists on maps and across polling booths.

##### `twitterAnalysis.py` [[link](https://data.world/d1gi/ca-data/workspace/file?filename=twitterAnalysis.py)]

> For starters, we will just get sentiment from textBlob for tweets containing keywords like "Trump", "Carson", "Cruz", "Bern", Bernie", "guns", "immigration", "immigrants", etc.  
matplotlib the results. 

Sentiments, generally, are labels extracted from a piece of text. They can be used to infer the opinion of the author. These labels can be one-dimensional on a scale of negative-neutral-positive or two-dimensional on two scales unpleasant-pleasant and subdued-active or even in higher dimensions.

A popular psychological model of an individual ranks them on five major personality traits. That would be five-dimensional.

In this case, this guy is using a python library called `textblob` that implements a sentiment analysis function. It converts the text into a pair of numbers Polarity Score(between -1 and 1) and Subjectivity Score(between 0 and 1).

Each of these scales returned by sentiment analysis adds a column to the dataset which makes it possible to divide the sample space into groups that might be representative of the kind of message they are more attentive to.

#### What CA Knows

Prof. David Carroll requested his individual data from CA through a website called personaldata.io that helps individuals ask for their own data from corporations.

[This twitter thread](https://twitter.com/profcarroll/status/846347516341837825) lists what he received. It doesn't include a psychological profile (big-five traits) so a lot of people aren't convinced this is all the data CA had on Prof. Carroll.

### Sourcing Data

Larger dataset directly translate to better psychological models of individuals. To better understand and focus on individuals, the dataset also needs to be descriptive relative to a single person or standard voting community. 

### Enters Machine Learning

Extraction of opinions or sentiment isn't completely governed by hard-coded equations or well-defined patterns for whole of population. A dataset of facebook likes of a population can be used to train a neural network that already knows the big-five personality traits of the sample space. It can then make it really good at predicting someone's personality just looking at a list of facebook pages they have liked.

### Not Just Sentiments

The usage patterns of datasets are creative and only limited by how well you can play with them. One might be able to use criminal records from district police headquarters to identify pain points in a society or identify communities more inclined for that behavior. Add numbers from census and you may have a more holistic picture. 

You can take khasra(land records) database of region to infer the wealth distribution of social segments.

### Using Swathes Of Knowledge from Consumer Behavior research

Predictive Models aren't all based on cutting-edge machine learning research. A lot of statistical models used in Consumer Behavior research can be made on computers from a decade ago and still provide useful results. Take [Propensity Models](http://blog.echen.me/2014/08/15/propensity-modeling-causal-inference-and-discovering-drivers-of-growth/) used in marketing for more than a decade. This might be helpful when you are trying to find employees who understand and speak this language. It also implies existence of a pool of useful (and cheaper) people outside the option of hiring *bright* (and *expensive*) JECRC graduates who perhaps shouldn't have written this paragraph that hurt their chances of employability.