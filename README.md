# JavaScript Explorer

> _Find the method you need without digging through the docs! ✨_

When I was first learning array and object methods, I spent a lot of time digging through the docs to find the appropriate one, and I had to search one by one. I made this resource to help people find the correct object method a bit more naturally. You can narrow down what you want to do and explore until you find what's most useful to you.

![jsexplorer-demo](https://user-images.githubusercontent.com/2281088/124360460-2e8f3e80-dbe7-11eb-918b-ec2e356b7ac9.gif)

It's been 4 years since I released the [Array](https://github.com/sdras/array-explorer) and [Object](https://github.com/sdras/object-explorer) Explorers as tools for the community. I realized it interrupts flow state to have to go to a web app to use them, so I thought a command line tool might be a better developer experience.

## Usage

I recommend installing the tool globally, so that you can make use of it no matter what project you're working on, but you can take out `-g` flag if you want to use it in particular projects instead:

```
npm i -g js-explorer
```

Then, to kick off the explorer, type:

```
jsexplorer
```

You will be guided through prompts to find your method! 

It will also allow you to save the entry at the end (optional.)

### Other commands

```
jsexplorer plain
```
Runs the tool without asking to save at the end.

```
jsexplorer -p
```
Same as above, aliased p for plain.

```
lookup [string to look up]
```
If you save an entry, you can run lookup and the string to find that entry and print it.

For example, let's say you ran the explorer and at the end when it prompts you to save, you saved `Array.slice()` as "That one I always mix up with the other one!"
You would type `lookup That one I always mix up with the other one!`

A more simple example might be `slice`, in which case you would run `lookup slice`.

```
clearlookup
```

Clears all saved jsexplorer entries.

## More information on the project

I realize that there are about a million ways that this resource can be set up, and some of the taxonomy is necessarily opinionated. I tried to focus on what I thought would have helped me learn the best, rather than industry standard delineations. If that style of learning suits you better, that's great! This resource is not set up that way. Please keep in mind that this is not meant to be as comprehensive or a replacement for full documentation, which is why the MDN docs are linked to in each method.

I based most of the longer descriptions off of the MDN documentation, altering it slightly where I felt the description was not as beginner-friendly as it could be. The examples were kept as simple as humanly possible for the purpose of scanning with the least cognitive load, you may need extra details provided in the MDN documentation for every possible usage.

**Enjoy!**
