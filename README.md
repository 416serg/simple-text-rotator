#Super Simple Text Rotator by Pete R (Wrapped for Meteor by Sergiy)

A light weight jQuery plugin that will allow you to add a super simple rotating text to your website with little to no markup
Created by [Pete R.](http://www.thepetedesign.com), Founder of [BucketListly](http://www.bucketlistly.com)

[![Super Simple Text Rotator](http://www.thepetedesign.com/images/simple_text_rotator_image.png "Super Simple Text Rotator")](http://www.thepetedesign.com/demos/jquery_super_simple_text_rotator_demo.html)

## Demo
[View demo](http://www.thepetedesign.com/demos/jquery_super_simple_text_rotator_demo.html)

## Usage
`meteor add 416serg:simple-text-rotator`
  
````html
Super <span class="rotate">Simple, Customizable, Light Weight, Easy</span> Text Rotator with Style
````

Put every rotating words inside the `<span class="rotate"></span>` and separate it with a comma and the script will automatically cycle through each words in order.

````javascript
Template.myTemplate.onRendered(function() {
	$(".rotate").textrotator({
	  animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
	  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
	  speed: 2000 // How many milliseconds until the next word show.
	});
}); 
````

## Other Resources
- Tests (Coming Soon)
- Tutorial (Coming Soon)