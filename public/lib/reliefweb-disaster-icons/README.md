ReliefWeb Disaster Icons
========================

Vector fonts containing the disaster type icons used on [ReliefWeb](http://reliefweb.int).

### How to use

- Copy the css file along with the font files and add a link to the css file in the html head.
- Add a class like `icon-earthquake` to a DOM element (div for example) to display the corresponding icon.
- Set the size, color etc. of the icon through normal css font properties (`color`, `font-size` etc.).


### Generating the fonts

The SVG source file has been created using [Inkscape](inkscape.org).

Several tutorials exist, for example [here](http://www.webdesignerdepot.com/2012/01/how-to-make-your-own-icon-webfont/).

Before converting the source SVG file, it needs to be edited manually and all the occurences of `&amp;#x` replaced with `&#x`.

[freefontconverter](http://www.freefontconverter.com/) is then used to convert the `svg` to `otf`.

[fontsquirrel](http://www.fontsquirrel.com/tools/webfont-generator) is then used (in expert mode with subsetting set to `E400-E414`) to convert the `otf` to the other font formats.

