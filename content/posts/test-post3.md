---
title: Test post 3
tags: [webdev, react]
date: 2019-01-01
---

I've been meaning to write something like this for a while, going over various stumbling blocks I had built a large scale web application I _really_ shouldn't have had any business doing.

I want to quickly state that some of these mistakes can seem like no brainers and that my tips are by all means not the be all solutions. These are tips after looking back based on my personal experience.

So here goes!

## Some Background

Travel back in time to 2017 when I was a less experienced developer, a company I used to work for needed to rebuild a legacy multi-vendor e-commerce app around 15 years old. Being a small team with lots of projects on the go, I was included in this undertaking. Little did I know that I would stumble my way into being the technical lead.

I was *not* experienced enough both technically or professionally, though I was hungry and enthusiastic to climb the ranks of the company and level up my career; money was tight with a second child on the way. I also showed up so I had that going for me. This ended up taking just over a year to launch, 5-6 months of which were crunch.


## 1. Understand the Business

#### My Mistake
When I was brought onto the project, I thought I could hit the ground running. I know it's an e-commerce site using an e-commerce platform. So it would make sense to use terminology and structure that matches the platform being used.

#### My Reality
This was a legacy application that had its roots deep within the business. It had been around before any formal standard likely existed for e-commerce terminology, and some were invented out of thin air. Combining these two led to tons of confusion inside the application and in discussions.

#### My Tip
Take the time to understand how the business works and what already exists. Then afterward you can decide to fight for your life about how your terminology is way better, or if you will succumb to your overlords. In the end, everyone will at least be on the same page and your app will have that much more consistency, and you won't have to pull out a thesaurus.

This example may be a little unique, but it's important to be on the same wavelength as the business.


## 2. Pick Your Battles

#### My Mistake
For a good first portion of building the application, I more or less attempted to fulfill any task and requirement given to me. Without too much thought about larger implications it could lead to, how useful this functionality could be, or what are they looking to do and why.

You want a `<div>` tag to mount a product carousel? You got it fam.
You want a `<div>` tag to mount an entire product catalog with dynamic filters based on selected filters? EZ.
Do you want those combined into a single _widget_ that can take options to display variations of these? ...Yeah!
You want content producers to have the ability to create entire pages with typed out static HTML blocks? I *really* wish you didn't but I will give you that power.

#### My Reality
I gave a few examples of required functionality that ultimately become overused, misused, or not used at all. This resulted in immediate code debt, dependencies on a flawed product, and losing control of important presentational pieces.

#### My Tip
If you have the slightest beef or confusion with a requirement, ask what it is needed to achieve and why is it beneficial. Understanding that from the other end will help you create a more elegant solution, advise on other possible solutions, or straight up refuse them like a baller with all your might.

At the end of whatever discussion goes down, you could come out the other end with a much more mutually beneficial product. Or you'll walk away kicking your feet still doing something you don't want to, but hey you tried right?

## 3. Peer Review is Important

#### My Mistake
This might be a combination of a mistake due to the workflows of the team, but I could have easily attempted to correct this.

I was essentially given the golden keys for this repository. I was the maintainer, and nothing was going to stop me from pushing my code wherever I wanted to. It was a powerful time.

#### My Reality
I was pushing all kinds of garbage up to that repository. To my credit, I did try to maintain consistency in code style, syntax, and app structure.

However, It's very easy to let something slip by, or even be too strict and sticking with something that just isn't worth sticking to.

With other engineers around me, this was just stupid. Having active mentors and colleagues to work with and get input from is invaluable.

#### My Tip
If you don't have any regular code reviews currently happening with your team, I highly recommend you start. When you're working on a bug or a feature, It's hard to remember the code you are writing isn't just yours; it's the teams.

With this in mind, doesn't it make sense that your team can not only advise or ask questions about the additions to the collective codebase but can also have visibility on what is going on elsewhere?

But it's not just gatekeeping on your code! There's plenty to learn from your team, and you'll also be reviewing their code. So what I'm _really_ saying is that everyone can hate on each other's code and loathe each other, but you didn't hear that from me.

## 4. Check on Code Debt

#### My Mistake
Look I got features to bang out on deadlines, cause this project needs to be released at some point. I need to power through and never look back; well unless it's broken duh. It's going to take too much time and energy to improve or build it better so I'll do it after release or something.

#### My Reality
Time went on and features piled on top of eachother. Some major features even grew in some really hard to manage ways. Updates to modules and frameworks we were using were coming out that were very beneficial to the application. Unfortunately, they all piled up together which made it very hard to make the changes that were very much needed.

This also applied to how chunks of the code were written. Looking back at some areas of the code, things either evolved into something it wasn't meant to do and had been frankensteined into existence, or an experimental attempt became the solution and was built on top of.

#### My Tip
Identify when you have maybe done something pretty rushed and flimsy. Make time for yourself to revisit these chunks. Take a little bit of time to go over some older components of the application and see if it needs to be brought up to the modern-day (which is different every week if you're a front end developer).

This one can be a little tricky, but on a large project that has a long pre-release, I had this bite me in the rear one too many times.

## In Conclusion

The project was completed in the end and was released into production. The release was way less bumpy than I had anticipated and I would like to say that it was because of an early-mid stack change I was able to convince management to get on board with.

The whole experience had some good and bad takeaways that I'll try to summarize as best I can.

#### Good Stuff
* I learned a ton.
* I had made a significant contribution to the company.
* I was able to put my name towards a fairly large real-world application.
* I was promoted after some time of the release.

#### Bad Stuff
* Due to my initial inexperience - the application was fairly messy.
* Some mistakes were too ingrained into admin workflows to refactor.
* It was incredibly stressful.
* I put an insane amount of overtime in for now pay or time off.
* Post-release resulted in huge burnout.
* The business and design was something I never liked to put my name towards.

I hope my ramblings can help any beginners out there, or even remind any seniors out there for things to think about or look out for! Diving into the deep end and grinding away is a great way to grow, but be careful not to slip up and hurt yourself along the way!