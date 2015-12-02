
# Javascript Comments and Formatting

After the lesson, you'll understand:
+ importance of comments, formatting, and documentation
+ how to write well commented, well formatted JavaScript

## Motivation:
Look in the `samples` folder in the Github repository. Both files do exactly the same thing, but one makes sense and the other doesn't.

What would you do if you had to fix a bug in one of these programs?

The code that is easier to read is much easier to work with! In the software industry, readability and clarity is one of the key metrics of code quality. So, what kind of things make code 'good'? In particular, what differences do you notice between these examples?

+ Indentation
+ Spacing
+ Colors (code highlighting)
+ Variable and function Names
+ Comments
+ Consistency
+ Case
+ DRY

+ Line Length
+ Folder structure
+ Over-commenting
+ Comments before code

## Comments
In html, things should be named well, indented clearly, and commented when needed with:  
```
<!-- HTML comment  -->
```
In CSS, we formatted nicely, reused what we could, and wrote comments like this:
```
/* this can go on a single line */
/*
   or
   on
   for
   many
   lines
*/
```
In JavaScript, comments will be even more important! Unlike HTML and CSS, which just describe the page, JavaScript takes actions - it will be harder to understand what something is from just looking at it. Let's see what JavaScript comments look like:
```
// this is a JavaScript comment
/* this is a JavaScript comment
as well! It goes until the */
```

##Naming
Meaningful names for variables and functions are even more important than good comments in your code. Naming is also one of the hardest parts about coding!
> "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
> Jeff Atwood, cofounder of StackOverflow

####Rules of thumb
+ look up the rules for case syntax with variable and function names (JavaScript tends to use camelCase)
+ give variables and parameters meaningful names
  + think about what the variable represents, where it is coming from, what its role is
  + consider whether your name should be plural or singular - is `name_array` or `names` better?
+ be consistent!
+ take your time! Variable names matter, so it's okay to spend time thinking about it!

<a href='https://learn.co/lessons/cssi-2.9-comments-and-formatting' data-visibility='hidden'>View this lesson on Learn.co</a>
