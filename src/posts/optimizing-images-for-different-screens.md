---
layout: posts.njk
title: Optimizing images for different screens
metaDescription: Get your site content to visitors quickly and efficiently, by correctly using the srcset and sizes attributes in the image tag. Used incorrectly, can cost your users unnecessarily large data usage and a poor user experience.
tag: ["web-optimization", "html5", "career", "website-developer"]
permalink: "blog/{{ title | slugify}}/index.html"
publishedDate: 2019-12-29
---
<p>In this blog we're going to look at how you can optimize your images for your visitor's device, primarily with the <code>srcset</code> and <code>sizes</code> attributes in the <code>img</code> tag.</p>

<p>Why does this matter?</p>

<p>Although many reading this blog may have unlimited high speed data connections on your mobile device, there are still a number of people around the world that do not. If that's not your audience, don't tune out just yet. Maybe your user is someone living in a city with underground transit without internet service, that only ever surfaces for brief moments to reconnect to their service towers to download content. However, even if your user does have high speed data service underground, wouldn't you want your page to load faster than your competitor's so you have more eyes on your content? This information is for you.</p>

<p>Initially I came across these attributes when using WordPress' <code>wp_get_attachment_image()</code> <a href="https://developer.wordpress.org/reference/functions/wp_get_attachment_image/" target="_blank" rel="noreferrer noopener" aria-label="function (opens in a new tab)">function</a>. I would set some basic values just to get the image to display:</p>

```php
echo wp_get_attachment_image($post_id, "square", false, array());
```

<p>Which would give you an output similar to the below HTML markup. It has 2 values for the srcset attribute, that tells the browser that it can choose to use the most efficient image, in the space it's given, that would fill a 150px wide space, and a 50px wide space.</p>

```html
<img width="150" height="150" 
src="https://www.YourSite.com/wp-content/uploads/2019/11/FeaturedImage.jpg" 
class="attachment-thumbnail size-square" 
alt="" 
srcset="https://www.YourSite.com/wp-content/uploads/2019/11/FeaturedImage.jpg 150w, https://www.YourSite.com/wp-content/uploads/2019/11/FeaturedImage-50x50.jpg 50w" 
sizes="(max-width: 150px) 100vw, 150px" >
```

<h2>What is the srcset attribute</h2>

<p>Considering that a 150 px square image is likely under 100kb in filesize, it's not that big of a deal. But what about 4 times or 20 times that size (and yes, I've seen clients upload really large images), a high resolution image that you want crisp and clear, not pixelated and distorted? This is where you want to make sure you have multiples of the same image at different sizes handy, and defined in the srcset attribute. Each value is separated by a comma and contains the path to the image and the native width of the image in px units, I like to think of this as the original width of the image without code being applied to modify its size.</p>

<h2>Customize our PHP code</h2>

```php
echo wp_get_attachment_image($post_id, "square", false, array(
'class' => 'img-fluid', // Add your own space-separated classes
'sizes' => '(max-width: 400px) 200px, (max-width: 768px) 400px, (max-width: 1024px) 350px, (max-width: 1600px) 700px, 400px' // to indicate the size of the image, you can use vw units. pixels is required for screen widths for the media-queries
));
```

<p>By customizing our PHP in WordPress, we'll get closer to optimizing our image for various screens by adding values to the sizes property. As an added bonus, you can add classes to your image with the class property in your array.</p>

<p>In this next example, the markup shows 6 different sizes of images that the browser can pick from. So if your visitor's browser width is up to 400px, then the browser will load the most appropriately sized image to fill 200px wide area. If the browser width is between 401px and 768px then it'll serve the image file suitable for a 400px width area, and so on. The final size in the list is provided as a default size if none of the media queries are met. </p>

<p>This saves on data transfer for them and gets your content loaded faster. If your visitor hits your site in landscape mode or on a wider screen, then shrinks the window, your larger image is already cached in the browser and won't bother downloading the smaller image since it already has an adequate image file to display within the give space. </p>

```html
<img width="426" height="426" 
src="https://www.YourSite.com/wp-content/uploads/2019/11/FeaturedImage.png"
class="img-fluid" 
alt="FeaturedImage" 
sizes="(max-width: 400px) 200px,(max-width: 768px) 400px,(max-width: 1024px) 350px,(max-width: 1600px) 700px, 400px" 
srcset="https://www.YourSite.com/wp-content/uploads/2019/11/FeaturedImage.png 426w, 
https://www.YourSite.com/wp-content/uploads/2019/11/FeaturedImage-150x150.png 150w, 
https://www.YourSite.com/wp-content/uploads/2019/11/FeaturedImage-250x250.png 250w, 
https://www.YourSite.com/wp-content/uploads/2019/11/FeaturedImage-120x120.png 120w, 
https://www.YourSite.com/wp-content/uploads/2019/11/FeaturedImage-400x400.png 400w, 
https://www.YourSite.com/wp-content/uploads/2019/11/FeaturedImage-200x200.png 200w" >
```

<p>The trick with this though is that WordPress, or whatever framework you're using won't know how you intend to display the image on various screen sizes, and neither will the browser unless you instruct it. The sizes attribute is how you tell the browser which images would be ideal in a given screen width.</p>

<h2>Sizes attribute and Media queries</h2>

<p>If you're familiar with media queries in CSS, then the sizes attribute will be simple. If you're not, you should <a href="https://css-tricks.com/logic-in-media-queries/#article-header-id-2" target="_blank" rel="noreferrer noopener" aria-label="familiarize yourself with them (opens in a new tab)">familiarize yourself with them</a>, they are an essential concept for modern responsive web development. </p>

<p>Identify the width of the screen as the media query, followed by the width of the space the image would fill for that media query. I've found it nicely flexible to use View Width units to define the image's width for a given media query condition.</p>
