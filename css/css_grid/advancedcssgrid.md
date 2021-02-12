# Advanced CSS Grid

## Index
1. [Justify Items](#justify-items)
2. [Justify Content](#justify-content)
3. [Align Items](#align-items)
4. [Align Content](#align-content)
5. [Justify Self + Align Self](#justify-self-+-align-self)
6. [Implicit Grid](#implicit-vs.-explicit-grid)


<br>

Properties:
- `grid-template-areas`
- `justify-items`
- `justify-content`
- `justify-self`
- `align-items`
- `align-content`
- `align-self`
- `grid-auto-rows`
- `grid-auto-columns`
- `grid-auto-flow`

<br>
<hr>
<br>

## Notes

<br>

Syntax example: `grid-template-areas` & `grid-area` assignment
```css
.container {
    grid-template-areas: "head head"
                         "nav nav"
                         "info services"
                         "footer footer";
    grid-template-rows: 300px 120px 800px 120px;
}

.header {
    grid-area: head;
}
```
[more on this](https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-making-a-website-responsive/modules/fecp-learn-css-grid/lessons/css-grid-ii/exercises/grid-template-areas)

<br>

### Justify Items

`justify-items` is a property that positions grid items along the inline, or row, axis within their columns.

Common values: `start`, `end`, `center`, and `stretch`.

This property is declared on grid containers. Without setting the `justify-items` property, these elements will span the width of the column they are in. 

<br>

### Justify Content

We can use `justify-content` to position the entire grid along the row axis.

Common values: `start`, `end`, `center`, `stretch`, `space-around`, `space-between`, and `space-evenly`.

<br>


```css
main {
    justify-items: center;
    justify-content: center;
}
```

### Align Items

`align-items` positions grid items along the block, or column axis. It positions items from top to bottom. This property is declared on grid containers.

common values: `start`, `end`, `center`, and `stretch`.

<br>

### Align Content

`align-content` positions the rows along the column axis, or from top to bottom.

common values: `start`, `end`, `center`, `stretch`, `space-around`, `space-between`, and `space-evenly`.

_Only relevant if # of rows and height of rows is < container height._

<br>

### Justify Self + Align Self

- The `justify-items` and `align-items` properties specify how all grid items contained within a single container will position themselves along the row and column axes, respectively.
- `justify-self` specifies how and invidual element should position itself with respect to the row axis. This property will override `justify-items` for any item on which it is declared.
- `align-self` specifies how an individual element should position itself with respect to the column axis. This property will override `align-items` for any item on which it is declared.

common values: `start`, `end`, `center`, and `stretch`.

<br>

### Implicit vs. Explicit Grid
When more content appears on page than expected, like a search results page, the _implicit_ grid takes over. The default behavior of the implicit grid is as follows: items fill up rows first, adding new rows as necessary. New grid rows will only be tall enough to contain the content within them.

<!-- ### Grid Auto Rows & Columns -->
_These properties are declared on grid containers:_

- `grid-auto-rows` specifies the height of implicity added grid rows.
- `grid-auto-columns` specifies the width of implicity added grid columns.
- `grid-auto-flow` specifies whether new elements should be added to rows or columns. _Accepts these values: `row`, `column`, and `dense`._

