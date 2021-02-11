# CSS Grid

## Index

### Properties
- `grid-template-columns`
- `grid-template-rows`
- `grid-template`
- `grid-gap`
- `grid-row-start` & `grid-row-end`
- `grid-column-start` & `grid-column-end`
- `grid-area`

---

#### Examples

Declare grid type on container, inside divs will auto-fill entiner container.
```css
.grid {
  display: grid;
}
```

Set number of rows / columns and declare sizes in container.
```css
.grid {
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 20% 50%;
}
```

Or declare rows / columns via `grid-template`
```css
.grid {
  display: grid;
  grid-template: 200px 300px / 20% 10% 70%;
}
```

`fr` units will divide into fractions
```css
.grid {
  display: grid;
  grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr;
}
```

Of course, let's not forget `grid-gap`, `grid-row-gap`, or `grid-column-gap`. Shown here as `grid-column-gap`. 
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
}