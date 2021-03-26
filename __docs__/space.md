# Witruimte

Gebruik de design tokens voor witruimte alleen voor onderlinge afstanden, niet om afmetingen van objecten te bepalen.

## Inline spacing

Use inline spacing before and after text. In CSS you can use the following properties:

- `margin-inline-start`
- `margin-inline-end`
- `padding-inline-start`
- `padding-inline-end`

| Demo                                                                                                 | CSS variable                    |
| ---------------------------------------------------------------------------------------------------- | ------------------------------- |
| ☑️<div class="utrecht-inline-space-demo" style="width: var(--utrecht-space-inline-1);"></div>Example | `var(--utrecht-space-inline-1)` |
| ☑️<div class="utrecht-inline-space-demo" style="width: var(--utrecht-space-inline-2);"></div>Example | `var(--utrecht-space-inline-2)` |
| ☑️<div class="utrecht-inline-space-demo" style="width: var(--utrecht-space-inline-3);"></div>Example | `var(--utrecht-space-inline-3)` |
| ☑️<div class="utrecht-inline-space-demo" style="width: var(--utrecht-space-inline-4);"></div>Example | `var(--utrecht-space-inline-4)` |
| ☑️<div class="utrecht-inline-space-demo" style="width: var(--utrecht-space-inline-5);"></div>Example | `var(--utrecht-space-inline-5)` |
| ☑️<div class="utrecht-inline-space-demo" style="width: var(--utrecht-space-inline-6);"></div>Example | `var(--utrecht-space-inline-6)` |
| ☑️<div class="utrecht-inline-space-demo" style="width: var(--utrecht-space-inline-7);"></div>Example | `var(--utrecht-space-inline-7)` |
| ☑️<div class="utrecht-inline-space-demo" style="width: var(--utrecht-space-inline-8);"></div>Example | `var(--utrecht-space-inline-8)` |

## Block

Use block spacing before and after and between layout blocks. In CSS you can use the following properties:

- `margin-block-start`
- `margin-block-end`
- `padding-block-start`
- `padding-block-end`
- `margin-inline-start`
- `margin-inline-end`

| Demo                                                                                                                                                                                 | CSS variable                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| <div>Lorem ipsum...</div><div class="utrecht-block-space-demo" style="width: var(--utrecht-space-block-1); height: var(--utrecht-space-block-1)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-block-1)` |
| <div>Lorem ipsum...</div><div class="utrecht-block-space-demo" style="width: var(--utrecht-space-block-2); height: var(--utrecht-space-block-2)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-block-2)` |
| <div>Lorem ipsum...</div><div class="utrecht-block-space-demo" style="width: var(--utrecht-space-block-3); height: var(--utrecht-space-block-3)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-block-3)` |
| <div>Lorem ipsum...</div><div class="utrecht-block-space-demo" style="width: var(--utrecht-space-block-4); height: var(--utrecht-space-block-4)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-block-4)` |
| <div>Lorem ipsum...</div><div class="utrecht-block-space-demo" style="width: var(--utrecht-space-block-5); height: var(--utrecht-space-block-5)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-block-5)` |
| <div>Lorem ipsum...</div><div class="utrecht-block-space-demo" style="width: var(--utrecht-space-block-6); height: var(--utrecht-space-block-6)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-block-6)` |
| <div>Lorem ipsum...</div><div class="utrecht-block-space-demo" style="width: var(--utrecht-space-block-7); height: var(--utrecht-space-block-7)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-block-7)` |
| <div>Lorem ipsum...</div><div class="utrecht-block-space-demo" style="width: var(--utrecht-space-block-8); height: var(--utrecht-space-block-8)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-block-8)` |

### Rows

- `margin-block-start`
- `margin-block-end`
- `padding-block-start`
- `padding-block-end`

| Demo                                                                                                                                                                           | CSS variable                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| <div>Lorem ipsum...</div><div class="utrecht-row-space-demo" style="width: var(--utrecht-space-row-1); height: var(--utrecht-space-row-1)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-row-1)` |
| <div>Lorem ipsum...</div><div class="utrecht-row-space-demo" style="width: var(--utrecht-space-row-2); height: var(--utrecht-space-row-2)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-row-2)` |
| <div>Lorem ipsum...</div><div class="utrecht-row-space-demo" style="width: var(--utrecht-space-row-3); height: var(--utrecht-space-row-3)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-row-3)` |
| <div>Lorem ipsum...</div><div class="utrecht-row-space-demo" style="width: var(--utrecht-space-row-4); height: var(--utrecht-space-row-4)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-row-4)` |
| <div>Lorem ipsum...</div><div class="utrecht-row-space-demo" style="width: var(--utrecht-space-row-5); height: var(--utrecht-space-row-5)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-row-5)` |
| <div>Lorem ipsum...</div><div class="utrecht-row-space-demo" style="width: var(--utrecht-space-row-6); height: var(--utrecht-space-row-6)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-row-6)` |
| <div>Lorem ipsum...</div><div class="utrecht-row-space-demo" style="width: var(--utrecht-space-row-7); height: var(--utrecht-space-row-7)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-row-7)` |
| <div>Lorem ipsum...</div><div class="utrecht-row-space-demo" style="width: var(--utrecht-space-row-8); height: var(--utrecht-space-row-8)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-row-8)` |

### Columns

- `margin-inline-start`
- `margin-inline-end`
- `padding-inline-start`
- `padding-inline-end`

| Demo                                                                                                                                                                                    | CSS variable                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| <div>Lorem ipsum...</div><div class="utrecht-column-space-demo" style="width: var(--utrecht-space-row-1); height: var(--utrecht-space-column-1)"></div><div>...dolor sit amet.</div>    | `var(--utrecht-space-column-1)` |
| <div>Lorem ipsum...</div><div class="utrecht-column-space-demo" style="width: var(--utrecht-space-column-2); height: var(--utrecht-space-column-2)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-column-2)` |
| <div>Lorem ipsum...</div><div class="utrecht-column-space-demo" style="width: var(--utrecht-space-column-3); height: var(--utrecht-space-column-3)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-column-3)` |
| <div>Lorem ipsum...</div><div class="utrecht-column-space-demo" style="width: var(--utrecht-space-column-4); height: var(--utrecht-space-column-4)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-column-4)` |
| <div>Lorem ipsum...</div><div class="utrecht-column-space-demo" style="width: var(--utrecht-space-column-5); height: var(--utrecht-space-column-5)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-column-5)` |
| <div>Lorem ipsum...</div><div class="utrecht-column-space-demo" style="width: var(--utrecht-space-column-6); height: var(--utrecht-space-column-6)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-column-6)` |
| <div>Lorem ipsum...</div><div class="utrecht-column-space-demo" style="width: var(--utrecht-space-column-7); height: var(--utrecht-space-column-7)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-column-7)` |
| <div>Lorem ipsum...</div><div class="utrecht-column-space-demo" style="width: var(--utrecht-space-column-8); height: var(--utrecht-space-column-8)"></div><div>...dolor sit amet.</div> | `var(--utrecht-space-column-8)` |
