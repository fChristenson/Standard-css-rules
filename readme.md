# Standard css rules

## What we will cover

* What are good standards in css?
* Why are they important?
* How do we make sure they are followed?

## Notes

When you work with designers there will be mistakes and missunderstandings
as you produce features.
This is normal and should not become a source of friction in your team.

The tips I will show you are methods that I have found to be very helpful
to improve my working relationship with the designers I have worked with
over the past few years.

## Method

First you need to sit down with the design team and decide on standard
values for the common things you will be producing over and over.

Examples are e.g margin, colors, font-sizes and the list goes on.

Once you have agreed what `exact` value should be assigned to what property
on what `screen size` you have a platform for working.

What this means is that now the design team can move faster without adding
the exact values for everything to each art board, they can get it `close enough`
and if something is off here and there you can simply use the closest value
for the style you are after.

As the developer you can now quickly add styles without having to check the exact
pixel values and if you do things correctly you can updated these values
accross the entire application without a lot of work.

For all of this to work you will have to leverage variables and use
them instead of hardcoded values, if you find it hard to get your
team to follow these rules add something like [stylelint]("https://github.com/stylelint/stylelint") to the project
CI and either fail the build or log warnings.

## Conclusion

The total product will be more consistent and being consistent does
a lot for the users perception of the design.

Even a slight differences like a pixel here and there will
start to become noticeable over time and this decays the quality
feel to the entire application.
