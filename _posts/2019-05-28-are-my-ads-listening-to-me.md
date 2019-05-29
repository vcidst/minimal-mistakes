---
title: "Are my Ads listening to everything I say? No"
categories:
  - essay
tags:
  - explainer
  - AI
author_profile: false
---

*Rekha sees an airline ad right after a conversation with a friend about her travel plans. Was this result of a deceptive advertising-AI that was listening to all her conversations? Turns out there are simpler explanations*

---

In a conversation with her neighbour Keshav, Rekha mentions her plan to visit Kolkata next month for a music concert. Later at home, scrolling through her instagram feed, there’s an ad for a flight to Kolkata. She found it somewhat spooky. She is somewhat convinced the ad is targeted based on her conversation with Keshav, earlier. There is a lot going on about Artificial Intelligent systems around in the news anyway. A lot of my friends think along the same lines. Almost every dinner table conversation includes a reference to the spooky ad they once got after a chat.

I believe this is a case of paranoia about the state of Artificial Intelligence. Is there a simpler explanation to this incident? The exact details of audience targeting remains a secret on the end of ad publishers but a rough idea about what kind of information is used in targeting has been available publicly. [An information page by Google](https://support.google.com/google-ads/answer/1704368?hl=en) describes they make use of demographics, affinity, intent, similarity to select an audience for a specific ad. It also acknowledges of making use of user search history to aid this process. This does not include any mention of recorded voice streams from phones.

It is important for ad publishers to disclose their sources because it reinforces advertiser’s trust in the medium and justifies the cost they are paying for these ads.

![A Snoop Phone appears in the wild](/images/snoop-phone.svg)

## PURE CHANCE

If we assume that Rekha has discounted all targeting sources. That is, she did not search about her travel plans or looked at travel websites or interacted with accounts related to travel and so on the entire exhaustive list of all ad targeting sources. This leaves us with only with pure chance. I know just saying this is coincidence doesn’t cut it. For all the times this has happened to me, I would see similar ads at more than one place. One ad might be random but surely something is going on when I see multiple such ads?

Before the idea of ubiquitous surveillance was normalized this was known as frequency illusion. It can be illustrated by a thought experiment, where our protagonist, Jaideep, reads about a certain new idea, say a word “Moribund”. After a few days, he might think he has suddenly started seeing this particular idea, a word in case of Jaideep, everywhere: on billboards, newspaper editorials, magazine headlines and even in tweets by Mr Tharoor.

Jaideep might wonder how come that the word he did not even know existed until yesterday has suddenly penetrated all walks of life on this planet. He might also swell with solipsist ideas or perhaps give in to the belief that the entire world is a simulation being played in the bedroom of a bored 25 year old in the 28th century. We do not know if either of those are true, they are not falsifiable ideas and lie outside the scope of scientific method. However what is not outside the scope of scientific method is to test if indeed Jaideep's learning about the word `Moribund` played any role in making it more commonplace. We know that is not the case. The word 'Moribund' was exactly as common (or uncommon) in usage before and after Jaideep learned about it. What changed later was that now Jaideep was noticing the word which was previously ignored almost all the times.

In the same way, Rekha might be getting airline advertisements all the time for all kinds of reasons: falling air ticket sales, the airline advertised to all females under 30, an algorithm thinks females under 30 are interested in traveling etc. Yet she pressed focus on this particular advertisement forming a connection to her earlier conversation. She might have ignored prior similar ads.

There are so many possibilities that it is unfair to narrow it down to AI Paranoia. Not only it is unfair but if it existed would be the epitome of overengineering.

## TALK ABOUT TECH

Now let us assume that this was not a case of frequency illusion and your phone is indeed snooping on you. How would such a system work though? Much like any smart speaker out there but still more intensive. Such a snooper would have to,

1. Listen to all sound all the time  
2. Process this information locally; or  
3. If the processing is not done locally, send the livestream audio to the cloud for interpretation. From the perspective of data usage, this is like being on a voice call all the time.  

This is fundamentally different from Amazon Echo (or any other smart speaker) because while it is listening to you all the time, they claim to only listening to the wakeword. 

> Echo devices use on-device keyword spotting designed to detect when a customer says the wake word. This technology inspects acoustic patterns in the room to detect when the wake word has been spoken using a short, on-device buffer that is continuously overwritten.This on-device buffer exists in temporary memory (RAM); audio is not recorded to any on-device storage. The device does not stream audio to the cloud until the wake word is detected or the action button on the device is pressed. If it does not detect the wake word or if the action button is not pressed, no audio is sent to the cloud.

- *Amazon White Paper - Alexa Privacy and Data Handling Overview*

Once the information is received by whoever is going to process it, they will have to

1. Subtract all ambient noise   
2. Identify the language of the conversation   
3. Extract text from the speech   
4. Extract keywords from the text    
5. It might be embarrassing to target advertisements to Rekha for something that only Rahul talked about. To deal with this problem, this system must also ID the person from their voice. The extracted keywords are then split into groups for every speaker involved in the conversation.    
6. It might also be embarrassing to target advertisements to Rekha for something she did not talk about at all. For this, the system would need to have a really low false-positive rate. Meaning it must also attach some kind of confidence score on the keywords it has been able to extract. This score will be a metric of how confident the system is in its prediction.    
6. These groups of keywords would perhaps then be sent to the advertising engine along with the ID of their speakers and the respective confidence score of each keyword.    

The process I describe above is still minimalist to a great extent because it does not involve the system trying to gain a contextual understanding of the text. It does not also try to resolve ambiguities of spoken human language. Currently, it does not even try to get more information through other sensors in the phone like GPS, accelerometer, cameras, etc.

## PROBLEMS WITH THE TECH PLAN

1. All technology companies have denied doing this -- this includes Google or Facebook or Amazon.

1. This system would be a massive operation requiring intensive resources in terms of computing power and bandwidth. Therefore it will also be expensive to do this.

1. If Facebook/Google were doing this, they would have let ad publishers know about this and charge a premium for such advanced methods of targeting.

1. This is also bound to have a ridiculous signal to noise ratio because this is nothing more than a glorious surveillance system for ad clicks. This is not a limitation of the technology but the mere fact that people are not talking all the time, most of the conversations might not even be relevant from an advertising point of view.

1. All of the steps described above are extremely difficult technical problems.

1. Phones are usually incapable of processing so much information locally. Network inspection tells us that our audio livestream is not being uploaded to the servers of Google or Facebook continuously either.

1. We already have pretty decent targeting and recommendation engines that do much better from significantly “cheaper” data sources. This is definitely over-engineering.

## TEST THIS YOURSELF

There are simple measurable tests you can do to check if this is happening at all. These are some of the tests that anyone can do,

1. Inspect the network traffic to see if there are any audio packets being transported continuously or when you talk.

1. Measure the amount of data a voice call over internet consumes, measure it against your phone's idle internet usage.

1. Make a list of all keywords from your conversations throughout the day -- in real life or on phone. The more diverse this list the better. Maintain a daily checklist for every keyword from this list -- check if you received an advertisement about them all.

1. Design an experiment to check if your conversations impact the kind of advertisements you get with a control group. This might involve asking a lot of people to engage in a specific set of conversations and observing their advertisement history on various platforms.

## HOW DO PREDICTION SYSTEMS WORK

There are easier ways to predict people than listening to them all the time. A great example of the "mind-reading" capabilities of technology is an app called Akinator. It is like the game 20-questions except you are playing with a computer. The app asks you to think of a person (living or dead or fictional) and then asks you a series of question through which it attempts to guess the person. It makes intuitively outlandish leaps all the time and makes correct guesses almost always within 10 or so questions. It is, of course, not listening to you and waiting for you to say out loud what are you thinking of. 

Instead it stores a wide range of characters in its database along with their characteristics. Through a series of questions it tries to narrow down possible options. And when the deduction is down to just 1 option, it tells you the character.

The power of deductive reasoning lies in the fact that while scaling up these problem might be difficult for the human mind. It is in the realm of possibility for computers. That is how Akinator works. This is also how Netflix suggests you great movies or Amazon recommends you products. We see examples of this also on Spotify, Youtube, etc. Models like these are used under the hood in advertising as well to target audience or to allow advertisers to define their audience down to the tiniest detail!

---

**Thanks** to Karan Kamdar for helping to edit this and to Archit Khode, Divye Walwani for reading early drafts of this essay and their helpful inputs.   
{: .notice-info}