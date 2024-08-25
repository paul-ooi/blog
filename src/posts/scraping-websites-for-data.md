---
layout: posts.njk
title: Scraping Websites for Data
metaDescription: There are websites out there that have the data you want, but not in the format you need. Try using Postman to cherry pick the data you want to save, and leave the rest.
tag: ["coding", "website-developer"]
permalink: "blog/{{ title | slugify}}/index.html"
publishedDate: 2021-05-01
---

I've begun to tinker around in the <a rel="noreferrer noopener" href="https://www.postman.com/">Postman application</a> a bit more and have discovered how to use it to scrape website data. The data that you want to scrape doesn't even have to all be on the same page. Make multiple requests crawling through a website and gather the data you need.

The reason I started down this path was because of the inconsistency of the data I was trying to amass for Splashpads in Toronto. Their Open Dataset was not current/up to date. So I wanted a way to use the data found on their public facing web pages to populate my own dataset and have a service that I could rely on when planning and searching for available nearby splashpads. 

Firstly, I needed to create a Postman Collection, it's where each custom request can be stored and re-used while various variables can be changed. I setup an array of Parks with their unique URL to be used within a <a href="https://learning.postman.com/docs/collections/running-collections/intro-to-collection-runs/">Collection Runner</a>, which would allow each Park webpage to be crawled and scavenge for further data.

Using <a href="https://learning.postman.com/docs/writing-scripts/pre-request-scripts/">Pre-Request Scripts</a>, we can modify the request URL, or prep any variables for your local use. Using the Tests tab, I wrote scripts to cherry pick the elements on the requested page, and save the data to an environment variable, which I then use to populate my own app's dataset. 

In the Postman application, they don't include jQuery, but they do have <a href="https://cheerio.js.org/" rel="noreferrer noopener">Cheerio JS</a> that you can add to your Test script, use similarly to jQuery to quickly target and traverse over the HTML Elements you're looking for.

When trying this for yourself, if the targeted pages have different markup nuances, you might need to make adjustments to the Test script that pulls the data from the page. Then make futhur Requests so that you can loop and crawl through the whole website. Since the Postman Environment Variables are global within your collection of requests, you can keep adding to your dataset with each new request from the Collection Runner. Of course this is not an ideal way to scrape data, since there are many panels to contend with and code isn't versioned and saved somewhere like Git. Ideally, it'd be better to run a utility script without having to interact with a GUI but this was a good way to learn the different steps involved using Postman.
