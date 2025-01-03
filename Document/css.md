# Imp 

Layer -> Margin-border-padding-text/font-size

Margin -> distnace between parent div/body to current div
padding ->

# Units (2 major units 1. Absolute 2. Relative)
`Absolute` units are fixed and do not change based on other elements. Common absolute
px(Single dot on screen), in(1 inch = 96 px), cm(1 centimeter = 37.8px), mm(1 millimeter=3.78px),
pt(1 points= 1.33px),pc(1 picas = 12 points)

`Relative` Relative units are based on the size of other elements or the viewport. Common relative : 
- em :Relative to the font-size of the element. For example, 2em means 2 times the current font size
- rem(root em): Relative to the font-size of the root element (<html>). For example, 2rem means 2 times the root font size.
- % (percentage): Relative to the parent element’s size. For example, 50% of the parent element’s width.




Here’s a list of commonly used and useful CSS properties that are essential for building web applications:

### Commonly Used CSS Properties

1. **Color and Background**
   - `color`: Sets the color of text.
   - `background-color`: Sets the background color of an element.
   - `background-image`: Applies an image as the background.

2. **Text Formatting**
   - `font-size`: Sets the size of the font.
   - `font-family`: Specifies the font type.
   - `font-weight`: Defines the thickness of the font (e.g., normal, bold).
   - `line-height`: Sets the space between lines of text.
   - `text-align`: Aligns text (left, right, center, justify).
   - `justify-content: center` 
   - `align-items: center`
   - `align-content: center;` : Vertically
   - `place-items: center;` /* Center both horizontally and vertically */

3. **Box Model**
   - `margin`: Sets the outer space around elements.
   - `padding`: Sets the inner space between the content and border.
   - `border`: Sets the border around an element.
   - `box-sizing`: Defines how the total width and height of elements are calculated (e.g., `border-box`).

4. **Layout**
   - `display`: Specifies how an element is displayed (e.g., block, inline, flex, grid).
      block -> will take entire width (we can customize block using width and height) i.e div, p, header, footer etc
      inline -> will take only specefic text (we can not customize block using width and height) space. e.g. span 
      inline-block->
      
      what display does -> changing the character i.e if it is block we can change to inline, viceversa

     `flex`: Used in flexbox layouts for flexible box layouts.
           make block horizonatal , flex-wrap -> responsive, flex=1,2-> ratio it will take entire parent block

     `grid`: Defines grid-based layouts. *** grid-template-columns: 3fr 1fr;
         /* ratio -> 1:1 for column-> 2 column */ grid-template-columns: 1fr 1fr;   
         grid-row: auto;

 
      Mostly used for Images
   - `position`: Controls the positioning of elements (static, relative, absolute, fixed).
      static -> default
      fixed -> fixed in one position -> need to provide width -> 100% 
      relative -> we can change the position relative to its previous position
      absolute -> will remove that block from parent block  (using relative we can give boundary for absolute)

   - `float`: Allows elements to be placed side by side.

5. **Dimensions**
   - `width`: Sets the width of an element.
   - `height`: Sets the height of an element.
   - `max-width` and `max-height`: Define maximum width and height limits.

6. **Responsive Design**
   - `@media`: Allows you to apply styles based on device characteristics (e.g., screen size).
      3 types -> 1. screen(mobile, desktop etc.), 2. print(when we want to prtint), 3. speech
      we can select all -> by default all
     @media(max-width=500px) { we define css code }-> means below 500px body will refer code inside media 

   - `viewport`: Controls layout on mobile devices.

7. **Transitions and Animations**
   - `transition`: Specifies the duration and properties to animate when an element changes.
   - `animation`: Applies keyframe animations to elements.
   - `psuedo class`

8. **Miscellaneous**
   - `overflow`: Controls how content that exceeds an element’s box is displayed (visible, hidden, scroll).
   - `opacity`: Sets the transparency level of an element.
   - `cursor`: Changes the cursor icon when hovering over an element.

### Additional Resources
For more detailed information and examples, you can refer to these resources:
- [MDN Web Docs - CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [W3Schools - CSS Properties](https://www.w3schools.com/cssref/css3_browsersupport.asp)

These properties will help you style web pages effectively and create visually appealing layouts.