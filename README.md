# Red-Project-HallwayCafe
This is our final project at Red Academy, which is done with a real client. The goal is to create a website based on design provided by UI/UX team.

# Instruction on How to Add New Posts from Facebook
  1. make a PUBLIC post in facebook. Only public posts can be used here
  2. click the 3 dot button at the top right corner of the post
  3. select "Embed"
  4. copy the given URL
  5. open folder "src"
  6. open "blog.html"
  7. find "div class="blog-posts">" (hint: you can use ctrl + F to find it)
  8. move your cursor to the right side of "div class="blog-posts">"
  9. press enter
  10. paste the URL here
  11. save this file
  12. upload this file.

## Review JS

### HTML
	- page title accent on e is different than logo [é - e acute vs è - e grave]

	- use the actual characters (see above) rather than `&eacute`

	- some links are capitalized and others likely have css `text-transform: uppercase` please make everything uniform 

	- add stronger focus states to teal button (go to home page and navigate using tab to see)

	- change 'src' folder name ('src' is generally used as a master folder to contain all the content for building the website - this is to seperate it from a 'dist' folder (delivery) and package.json etc - here you don't really have a build step - so you dont need 'src'). Here your 'src' folder is really justs 'pages'

	- invalid `<br>` element about-us line 146

	- missing alt text on icons contact page

	- double `<br /> <br />` contact us line 86 [https://www.tutorialspoint.com/What-is-the-correct-way-of-using-br-br-or-br-in-HTML]

	- all forms -> look at `required` and form validation *** [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form]


### CSS

	- remove unused css (comments are good but commented out code is not)

	- were all those fonts used? removed unused references and files

### JS

	- contact response `Thanks for subscribe! ${email}` could be rewritten

	 - showSLides could be simplified with modulus (%) [look up the operator]

	 - abstract values like 3500 - store as a const

### Git

	- make sure you guys have this version saved
	
	- look up a complete git rebase to clean the repo
	
	- check the size before delivery [ current size is ~45MB due to .git/objects/pack... which has all git history]
