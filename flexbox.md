# Flexbox

## Index
- [`justify-content`](#justify-content)
- [`align-items`](#align-items)
- [`flex-grow`](#flex-grow)
- [`flex-shrink`](#flex-shrink)
- [`flex-basis`](#flex-basis)
- [`flex`](#flex)
- [`flex-wrap`](#flex-wrap)
- [`align-content`](#align-content)
- [`flex-direction`](#flex-direction)
- [`flex-flow`](#flex-flow)

---

## Notes

There are two important components to a flexbox layout: _flex containers_ and _flex items_. All children of the flex container are flex items.

Flex containers have two axes: a _main axis_ and a _cross axis_. By default, the main axis is horizontal and the cross axis is vertical.

_These properties are declared on the container:_

`display`: `flex || inline-flex`

### Justify Content
`justify-content` will position items from left to right in an _inline flex container_. Declared on the container.

values:
- `flex-start`: Positions items in order, from left of the container.
- `flex-end`: Positions items in order, with last item starting on right side of the container.
- `center`: Positions items in order, in the center of the container.
- `space-around`: Positions items with equal space before and after each item, resulting in double spaces between elements.
- `space-between`: Positions items with equal space between, but no extra space before first or after last element.

### Align Items
`align-items` will position items of a single row veritcally in a _block flex container_. Declared on the container.

values:
- `flex-start`: Positions elements at the top of the parent container.
- `flex-end`: Positions elements at the bottom of the parent container.
- `center`: Positions elements halfway between the top an dbottom of the parent container.
- `baseline`: The bottom of the content of all items will be aligned with each other.
- `stretch`: If possible, the items will stretch from top to bottom of the container. Elements with a specified height will not stretch.

### Align Content
If a flex container has multiple rows of content, we can use `align-content` to space the rows from top to bottom.

values:
- `flex-start`: Positions elements at the top of the parent container.
- `flex-end`: Positions elements at the bottom of the parent container.
- `center`: Positions elements at the center of the parent element with no space between.
- `space-between`: All rows of elements will be spaced evenly from the top to the bottom of the container with no space above the first or after the last element.
- `space-around`: All rows of elements will be spaced evenly from the top to the bottom of the container with the same amount of space at the top and bottom between each element.
- `stretch`: if a minimum height or no height is specified, the rows of elements will stretch to fill the parent container from top to bottom (default value).

### Flex Wrap
Instead of shrinking items to fit the container, the `flex-wrap` property will move flext items to the next line when necessary.

values:
- `wrap`: child elements of a flex container that don’t fit into a row will move down to the next line.
- `wrap-reverse`: Same as `wrap`, but the order of rows in a flex container is reversed.
- `nowrap`: Prevents items from wrapping. Default value.

### Flex Direction
We can interchange the main axis and cross axis with the `flex-direction` property. If we add the `flex-direction` property and give it a value of `column`, the flex items will be ordered vertically, not horizontally.

values:
- `row`: Positions elements from left to right across the parent container starting from top left corner.
- `row-reverse`: Positions elements from right to left across the parent container starting from the top right corner.
- `column`: Positions elements from top to bottom of the parent container starting from the top left corner.
- `column-reverse`: Positions elements from the bottom to the top of the parent container.

### Flex Flow
The `flex-flow` property is used to declare both the `flex-wrap` and `flex-direction` properties in one line.

```css
.oneway {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.anotherway {
    display: flex;
    flex-flow: column wrap;
}
```

---

<br>

_These properties are declared on flex items within the container:_

### Flex Grow
`flex-grow` is declared on flex items in the container. Takes a positive integer as the value. Default value is 0 if property is not declared.

### Flex Shrink
`flex-shrink` is declared on flex items in the container. Takes a positive integer as the value. Default value is 1 if property is not declared.

### Flex Basis
`flex-basis` allows us to specify the width of an item before it stretches or shrinks. Unit value is `px`.

### Flex
The `flex` property allows you to declare `flex-grow`, `flex-shrink`, and `flex-basis` all in one line.

```css
.item1 {
    flex: 2 1 150px; // flex-grow flex-shrink flex-basis
}

.item2 {
    flex: 2 150px; // flex-grow flex-basis
}

.item3 {
    flex: 1 2; // flex-grow flex-shrink
}
```

