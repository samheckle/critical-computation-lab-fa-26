# Week 12: 11/13/2026

## Agenda

1. Housekeeping
2. Presenting Assignment #7 with Tao's Class
3. Tutorial: Introduction to HTML
4. Extra Review Materials

## Housekeeping

1. Attendance
2. Set up computer for demo:
	- [Optional] Install a Text Editor
		- Marked optional because you can write HTML inside of OpenProcessing. 
		- I use [VSCodium](https://vscodium.com/), but it has issues with iCloud
		- [Sublime Text](https://www.sublimetext.com/) is a good lightweight option, [VSCode](https://code.visualstudio.com/) is a heavier lift but commonly used
	- Create a Github account 
		- *Note:* Your username will be a part of your URL
		- *Note:* You can use your newschool account, but add a backup email!
3. Upcoming assignment: #8 Part 1

## Introduction to HTML

| coding glossary |                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| HTML            | Hyper-Text Markup Language is a way of "tagging" text to define the structure of a web page                                               |
| element / tag   | in HTML, a specific item on the page, eg. `<p>`, `<a>`, `<div>`                                                                           |
| flow layout     | how HTML is displayed in the browser. it reads from the top to the bottom according to how big the page is and how much content you have. |
| attribute       | extra information for an HTML tag that always goes in the opening tag of an element. it follows the syntax `attributeName=""`             |
## Introduction to HTML

Hyper-Text Markup Langauage (HTML) isn't a programming language, but a way to taxonimize (organize) words on a page.

### Comments

The syntax of a comment in HTML is `<!-- -->`. We write comments to explain things that are happening in the code. It is good practice so that we can understand what is happening if we look at the code in the future.

```html
<!-- this is a comment in HTML -->
<!-- comments are a useful way to take notes while writing code -->
<!-- to quickly write comments, we can use the hotkey ⌘+/ (Mac) or CTRL+/ (PC) -->
```

### The HTML Tag

HTML follows a particular structure. The first tag we always use in an HTML file is `<html>`. All of our code will be written between the opening and closing tags. Every HTML tag can also be called an `element`, or the thing that exists on the page.

```html
<!-- opening -->
<html>
  <!-- closing -->
</html>
```
#### Looking at the HTML file in OpenProcessing

In the OpenProcessing Editor, change the mode to `HTML/CSS/JS`

![html-css-js](html-css-js.png)

If we open up the HTML file, we can see the web code:

![html](html.png)

### Head and Body Tags

The typical children of the `<html>` element are `<head>` and `<body>` elements.

![image](https://kagi.com/proxy/Document.jpg?c=h8JCMe5cYLVbQGUI8h4mf7rgrW8NI2w--6vBMX9vZpfXO6UiFxDqWEFyflaL0FTSB7ZUc1FYoXDOrrqAD_5mVwH157My1rt4Gr5w2EVxa08LSWT2VXbF_NqJ-W_uQUE-)

The `<head>` tag contains content and meta information about the webpage the browser might need to know, like language, character set (ie alphabet), and the `<title>` tag, which allows us to set what the name of the tab is in our browser.

It might look something like

```html
<html>
  <head>
    <title>my homepage</title>
  </head>
</html>
```

The `<body>` tag contains all the content that actually shows up in the webpage.

So the typical order of an HTML page would look like this:

```html
<html>
  <head>
    <title>my homepage</title>
  </head>
  <body></body>
</html>
```

***A note on indentation***: We always want to indent new lines in our code to make it easier for us to read. We can quickly see which tag has an opening/closing tag if we identify whether or not they have the same indentation. This is also true for *syntax highlighting*. If something looks to be a funky color, or the color does not match other parts of your code, or there is a red squiggly, there is likely something wrong with your code. 

### Content Tags

These are tags that will always live inside the `<body>` tag.

- `<p>...</p>` → paragraph
- `<h1> ... </h1>` → headings (also h2, h3, ... h6)
- `<strong>...</strong>` → bolded text
- `<em>...</em>` → italicized text
- `<small> ... </small>` → small text
- `<br />` → line break (notice that this tag doesn’t have any content and therefore is both an begin and end tag, with the slash)
- `<hr />` horizontal rule → a line break which draws a line \
- `<a href="http://...">...</a>` → a link to another page. The “`href=""`” portion is an **attribute**. Many tags have optional attributes, further details below.
- `<img>` → images, uses `src` attribute which can contain a local file path or url to an image, no closing tag
- **Grouping & information organization:**
  - `<div> ... </div>` → [Block-level](https://www.w3schools.com/html/html_blocks.asp)
  - `<span> ... </span>` → [Inline](https://www.w3schools.com/html/html_blocks.asp)
    - These will come in handy as we start working with styles and Javascript.
#### Flow Layout

The way html is structured is through the flow layout: each page comprises `block` and `inline` elements to construct each page. This is like a stack of documents, it reads from the top to the bottom according to how big the page is and how much content you have.

| block                                                                                                                                                             | inline                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `block` elements are stacked vertically, so they typically won't have content next to it. Think of it in like a word document where you have images "break" text. | `inline` elements are stacked horizontally, so they will usually have content side-by-side. In a word document, it is also called inline. |
| ![block](https://github.com/samheckle/images/blob/main/wp1/block.png?raw=true)                                                                                    | ![inline](https://github.com/samheckle/images/blob/main/wp1/inline.png?raw=true)                                                          |
| `<p>`, `<div>`                                                                                                                                                    | `<em>`, `<strong>`, `<a>`, `<span>`                                                                                                       |

#### **Attributes**

Most HTML tags can have **attributes**. In the case of the `<a>` above, `href` is an attribute which indicates the URL that the link should point to. Other common attributes are `id`, `class` or `src`

- `id` allows a specific tag/element on the page to be referenced through JavaScript or CSS
  (which we’ll cover later).
- `class` is useful when using CSS to define the design of the page.
- `src` is specific to media elements (images, audio, video, iframes) and point to the actual file being embedded into the webpage.

There are more attributes out there, most of them specific to certain tags. We will cover them as we discover other tags.


##### **Links**

You can define links in HTML using the `<a>` tag, as follows:

    <a href="http://www.google.com">Go to Google</a>

Links are the connective tissue of the web, without them every website would be an isolated island in the middle of the ocean. The example above is a link to an external website. You can also link to pages within your own website, like this:

    <a href="/page-2.html">Go to Page #2</a>

_Local links_, like the one above, need a web server in order to work (i.e. if you simply opened your `html` page in the web browser, this will not work properly.) We will cover that in the next tutorial.

_Email links_ are somewhat rare, but websites use them occasionally. They take a special value within the href property — the mailto: prefix, followed by an email address —, and clicking on them leads to the computer opening the default email client with the address filled in for the recipient field:

    <a href="mailto:sam.heckle@newschool.edu">Email Sam</a>

_Anchor links_ are used to point to a different section of the current webpage. They work in conjunction with an `id` attribute attached to a different tag on the same page.

In order to see them in action, we actually need a webpage long enough that it needs scrolling, so clicking on our anchor link will take us to the bottom of the page. The example below inserts a few filler `h1` and `br` tags, and attaches the anchor to the `p` tag at the very end of the page.

    <a href="#bottomElement"> Go to bottom of the page </a>

    <!-- Filler content, so we have a long enough page -->
    <h1> Text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <!-- End of filler content, so we have a long enough page -->

    <p id="bottomElement"> This is the end of the page </p>

Notice the syntax of the `href` attribute: a `#`, followed by the `id` of the element we want to create an anchor to.

Sometimes you will see a `Back to top` button on blogs, websites, etc. Anchors are the mechanism behind the back to top functionality.

#### **Nesting**

As you noticed in all previous examples, HTML tags are nested within each-other. For instance all of the content you want inside the body of the page is nested within the `body` start and end tags.

For example, if you want an image to act as a link, you can nest an `img` tag inside of an `a` tag, like this:

```html
<a href="http://www.google.com">
	<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" width="200"/>
</a>
```

### View Source and Inspect Element

One of the very fundamental things that made web publishing very successful in the beginning was the inclusion of a View Source feature in most web browsers. This allows people to look at the HTML of a page they are viewing so as to understand how it was constructed and learn how to do similar things themselves.

Different browsers have different ways of accessing the source — you will likely find it in the Right-Click context menu, or under the Tools or Developer menus of the browser itself.

Inspect Element is a more recent addition to web browsers, which is, in some ways, an interactive version of View Source. It’s a great prototyping tool, as it allows for on-the-fly changes to the HTML and CSS of a page. (Important note: These changes are not saved, we’re just modifying how the page is displayed.)
## Extra Review Materials

- Allison Parrish [Browser Controls](https://creative-coding.decontextualize.com/browser-controls/)
- Coding Train [HTML/CSS/DOM Playlist](https://www.youtube.com/watch?v=URSH0QpxKo8&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX) (videos 8.1-8.16)