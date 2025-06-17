# CSS Naming Conventions (BEM + SMACSS Hybrid)

A structured approach to writing scalable and maintainable CSS using BEM (Block-Element-Modifier) for components and SMACSS (Scalable Modular Architecture for CSS)for all other architecture.

The purpose  of this document in outlining the naming conventions for CSS classes is to ensure the project is scalable and cleanly executed with consistency, logical separation, maintainability and without naming conflicts.

---

## Folder Structure

Styles/          # Root folder for all CSS

├── base/        # CSS resets, variables, fonts (e.g., _reset.css, _variables.css)

├── layout/      # High-level layouts (e.g., `l-grid`, `l-header`)

├── modules/     # Reusable components (BEM syntax, e.g., `card`, `card__title`)

├── states/      # Dynamic states (e.g., `is-active`, `has-error`)

├── utilities/   # Helper (override) classes (e.g., `u-mt-10`, `u-text-center`)

├── themes/      # Theming overrides (e.g., `.theme-dark`, `theme-very-large`)

└── main.css     # Final compiled output

---

## Base (SMACCS)



---

## Layout Classes (Large Containers)

We follow the **SMACSS (Scalable Modular Architecture for CSS)** naming convention for layout:

- Prefix with l- for structural layouts (e.g., `.l-container` or `l-sidebar`)

- Used for page-wide sections like headers, sidebars, or grids

---

## Module Classes (Reusable Components - uses BEM)

We follow the **BEM (Block, Element, Modifier)** naming convention for modules (reusable components) only:

- **Block**: Standalone component (e.g., `.card` or `.button`)

- **Element**: Part of a block (e.g., `.card__title` or `.button__icon`)

- **Modifier**: Alters a block/element (e.g., `.card--dark` or `button--large`)

**Why BEM?**

- Avoids messy nested selectors (like .card div h2)

- Makes it obvious how classes relate to each other

---

### State Classes (Temporary Changes)

- Prefix with is- or has- for dynamic states only where controlled by Javascript (e.g., `.is-active`, `.is-hidden` or `.has-error`)

- If dynamic state not controlled by Javascript, use directly as pseudo-class (e.g., `.dropdown__link:hover` or `.button__icon:focus`)

- Always pair visual states with ARIA sattributes (e.g., `aria-explanded` or `aria-hidden`)

---

## Utility Classes (Quick Fixes)

- Prefix with u- for single-purpose helpers

- Use sparingly!

**Examples**

-   `.u-mt-20 {
        margin-top: 20px;
    }

-   `.u-text-center {
        text-align: center;
}    

---

## Main (Main Import File)

