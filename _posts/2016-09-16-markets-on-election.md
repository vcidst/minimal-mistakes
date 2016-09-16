---
title: "How does the Lok Sabha Elections effect Sensex?"
categories:
  - analysis
tags:
  - finance
  - analysis
excerpt: "Addressing questions about elections and BSE Sensex with data"
---

{% include toc title="Contents" icon="file-text" %}

**Sourcecode** You can also read [another version of this post](http://shailendra.me/analysis/markets-on-election-code/) that also has all the R code I used for analysis and generating plots.
{: .notice} 

Source
------

I came across a [time series analysis of German
Market](http://rpubs.com/sumtxt/dax-volatility) in the light of federal
elections and decided to try the same for BSE SENSEX(Bombay Stock
Exchange Sensitive Index), which is a stock market index of 30 companies
listed at Dalal Street, and Indian Lok Sabha Elections.

Getting Data
------------

I downloaded the dataset from
[BSEIndia.com](http://www.bseindia.com/indices/IndexArchiveData.aspx). I
believe this should also be available on Quandl.

Lok Sabha Election Dates
------------------------

The election date I chose is the date of counting of votes. When I
couldn't find that date, I picked the dates when the next Lok Sabha
started. There's usually a gap of couple of days when the last Lok Sabha
is dissolved and new Lok Sabha sworns in.

    elections <- as.Date(c("1980-01-18", 
                           "1984-12-31", 
                           "1989-12-02", 
                           "1991-06-20", 
                           "1996-03-10", 
                           "1998-03-10", 
                           "1999-10-06", 
                           "2004-05-13", 
                           "2009-05-16", 
                           "2014-05-16"), format = "%Y-%m-%d")

Rolling Variance
----------------

Here I also calculate something called rolling variance. Rolling
variance can be also called moving variance. It is variance calculated
on overlapping windows of time. Example, if window width is fixed at 10
then variance will be calculated on time values from 1-10 then 2-11 then
3-12 then 4-13.

I'm not completely convinced by using rolling variance as a measure of
volatility so I will also explore other quantities.

![](/images/figure-markdown_strict/plot-1.png)

I see two things here,

1.  Sensex has become very volatile over time.
2.  There is a slight hint that market is effected by the results,
    however it can only be seen in 2004, 2009 and 2014 elections.

### Zoom In

Sensex volatality(in terms of rolling variance) 100 days before and
after the election results.

![](/images/figure-markdown_strict/zoom%20in-1.png)

I see a sign that markets have started becoming nervous around the
elections and that volatality has increased.

Need for Normalization
----------------------

There's still a problem here. Some large values in rolling variance are
making it harder to see the complete picture. We need a measure that
normalizes the data. Daily differences when measured in percentages
might prove to be a good candidate here. They're generally called
returns.

Return on *i* day *r*<sub>*i*</sub> is calculated as,

$$ r\_i = \\frac{p\_i - p\_{i-1}}{p\_{i-1}} $$

where *p*<sub>*i*</sub> is the price on day *i*

![](/images/figure-markdown_strict/lagging-1.png)

This is a complete mess! I cannot infer anything from daily values. This
calls for aggregation!

### Aggregating Data

If this also shows the variations then it would imply that the elections
effect market for more than a day or two.

![](/images/figure-markdown_strict/bse%20index%20by%20month-1.png)

There's a clear linear trend visible. This is an example of a
non-stationary time-series. We can detrend it to make it stationary, in
other words make it horizontal.

To detrend a time series, remove the upward linear trend from the series
without effecting it's shape at all. Or subtract the linear trend from
the time series.

Linear model or linear trend is essentially a line that best explains
the series. For each point on x-axis, there's a point on y-axis
corresponding to the line. These set of points on y-axis are called
fitted values. To detrend, I just need to subtract the data from the
fitted values for the whole x-axis.

*y*<sub>*i*</sub> − (*β*<sub>1</sub>*x*<sub>*i*</sub>+*β*<sub>2</sub>)

*β*<sub>1</sub> and *β*<sub>2</sub> are parameters from the linear
model. This difference is called residuals in regression theory.

1.  Make a linear model with variables on y and x axis.
2.  Plot the residuals

![](/images/figure-markdown_strict/detrending-1.png)

I should plot the returns to see the effect more pronounced

![](/images/figure-markdown_strict/unnamed-chunk-1-1.png)

Whoa a 20% crash in 2008!

I need to look in the daily charts for this,

![](/images/figure-markdown_strict/2008-1.png)

I'm thinking mean change(in percent) for the month might be better able
to represent the volatility through the month.

2008 has surely been a rough year. The 10% fall visible in the month of
October is the [largest crash
ever](http://www.rediff.com/money/2008/oct/24bcrisis10.htm) from BSE
Sensex. Let's check how other years compare to this.

![](/images/figure-markdown_strict/volatility%20in%20other%20years-1.png)

Look at the 5th month! The results came out on 16th May, 2004 and
clearly the market was more nervous than anytime in the year! If I'm not
wrong, I should see a similar trend in the year 2009.

*Trivia*: Stable governments imply date of elections do not change.
Results for general elections have been coming out exactly around 3rd
week of May every 5 years in 21st century.

I can set the y-axis scale free to adjust itself for the values in each
facet but that wouldn't emphasize the difference between May and other
months.

![](/images/figure-markdown_strict/changes%20in%20year%202009-1.png)

> "Investors rejoiced the coming of a stable government in power. Bulls
> got encouraged as investors were screaming to buy in apprehension that
> stability will come in the economic policies," brokerage firm Unicorn
> Financial CEO G Nagpal said.

There's a very clear spike of massive 15%. Market looks like in
indifference till the results are announced followed by a sigh of
relief. Markets like political stabiity. 2009 elections meant 5 more
years of nearly the same economic policy. \[1\]

Back to the election spike, Is this statistically significant? Is that
even a right question to ask?

I'm exciting to see how does Narendra Modi's election look like. If I
remember correctly Congress never even looked like they had a chance.
There was some nervousness about a messy coalition government involving
the 3rd front but market would have loved as one party got the required
majority to make the government.

![](/images/figure-markdown_strict/changes%20in%20year%202014-1.png)

Look at the 5th panel, this is interesting! I was completely wrong!
There's no sign of nervousness for the chance of a coalition government,
which is odd.

Log-Returns
-----------

Financial analysts [love
log-returns](https://quantivity.wordpress.com/2011/02/21/why-log-returns/).
Paul Teetor mentions in R Cookbook that volatility is measured as the
standard deviation of daily log-returns.

This makes log-returns very relevant to the subject of this post. In my
quest to find "How does Lok Sabha Election effect Sensex", I've failed
to find a direct correlation between the two. Using log-returns I can
check if it makes the market volatile or, in a way, nervous.

Let's plot a couple of graphs to see where do they take us.

![](/images/figure-markdown_strict/log-returns-1.png)![](/images/figure-markdown_strict/log-returns-2.png)

I need a grid to see the volatility around elections!

![](/images/figure-markdown_strict/unnamed-chunk-2-1.png)

This looks like the conclusive graph I was looking for. Sensex was
nervous when an economist became the prime minister. Hah!

So, does the Lok Sabha election makes Sensex a nervous?
-------------------------------------------------------

Well, it only made them nervous in 2004 and 2009. There's a kind of
apparent indifference that is widespread elsewhere.

Addressing the real oddity in the room,
---------------------------------------

Why was market so indifferent to general elections before 2000? (and
even 2014)

One simple explanation is that market doesn't care about elections at
all and 2004, 2009 were plain coincidences.

Another explanation might be that indifference *is* a negative reaction.
I'm probably missing something substantial as 1991 was a crucial year
for Indian Economy but the market charts don't show that at all!

Grid of charts,

![](/images/figure-markdown_strict/grid-1.png)

When I switch to daily variations,

![](/images/figure-markdown_strict/daily%20changes%20grid-1.png)

This isn't all that very helpful. There's something important that's
still missing. We need insights!

Other Analysis Methods I Missed
-------------------------------

### Changepoints Analysis

Changepoint algorithms find abrupt variations in the series. \[2\]

![](/images/figure-markdown_strict/bse%20index%202004-1.png)

I can also add changepoints to this mix,

Add the segments, and a vertical blue line to show election

![](/images/figure-markdown_strict/changepoint%20plot-1.png)

### Decomposition

I just learnt that base R supports a time series class that can be
initialized with `ts()`. It has some cool functions, one being
decompose. Decomposition of BSE Sensex values since 2000

![](/images/figure-markdown_strict/unnamed-chunk-3-1.png)

### Intervention Analysis

There's something called intervention analysis that was referred by a
lot of people in [this question at Research
Gate](https://www.researchgate.net/post/Time_series_analysis_with_events_can_anyone_help).
Someone there also mentions introducing dummy variables which I also
didn't understood.

Feedback
--------

This post was my attempt to learn more about analysis of data and time
series. Please let me know your thoughts and if I missed something!

Footnotes
---------

1.  That makes me think how much difference is really there in the
    financial policies of UPA and NDA governments, is it possible to
    measure?
2.  [changepoint: An R Package for Changepoint
    Analysis](http://www.lancs.ac.uk/~killick/Pub/KillickEckley2011.pdf),
    Rebecca Killick and Idris A. Eckley, 2013
