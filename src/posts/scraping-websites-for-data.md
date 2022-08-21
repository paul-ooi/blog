---
layout: posts.njk
title: Scraping Websites for Data
metaDescription: There are websites out there that have the data you want, but not in the format you need. Try using Postman to cherry pick the data you want to save, and leave the rest.
tag: ["coding", "website-developer"]
permalink: "blog/{{ title | slugify}}/index.html"
publishedDate:
---

I've begun to tinker around in the <a rel="noreferrer noopener" href="https://www.postman.com/" target="_blank">Postman application</a> a bit more and have discovered how to use it to scrape website data. The data that you want to scrape doesn't even have to all be on the same page. Make multiple requests crawling through a website and gather the data you need.

First you need to create a collection, where you store each of your requests. Then setup the array of Parks include the unique URL that will allow you to go to each Park webpage and scavenge for further data.

Using the pre-test tab, you can modify the request URL, or prep any variables for your local use. Using the test tab, you can cherry pick the elements on the requested page, and save the data to your environment variable.

In the Postman application, they don't include jQuery, but they do have <a href="https://cheerio.js.org/" target="_blank" rel="noreferrer noopener">Cheerio JS</a> that you can require in your script and use just like jQuery to target and traverse over the HTML Elements.

Setup the next request so that you can create your own iterative loop and crawl through the website.

Since the environment variables are global within your collection of requests, you can keep adding to your dataset with each new request made. 
