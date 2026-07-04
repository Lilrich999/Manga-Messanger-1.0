# Coding Standards

These standards help keep Manga Messenger consistent, readable, and maintainable.

---

## HTML

- Use semantic HTML elements whenever possible.
- Use accessibility attributes (`aria-label`, `role`, etc.) when appropriate.
- Use lowercase file names.
- Keep components modular and reusable.

---

## CSS

- Follow the **BEM** (Block Element Modifier) naming convention.
- Use CSS variables from `variables.css`.
- Avoid inline styles.
- One responsibility per CSS file.

Example:

```css
.sidebar {}
.sidebar__button {}
.sidebar__button--active {}
```

---

## JavaScript

- Use ES Modules.
- Prefer `const` and `let`; avoid `var`.
- One class per file where practical.
- Keep functions focused on a single responsibility.
- Write descriptive method and variable names.

Example:

```javascript
loadMessages()
sendMessage()
toggleTheme()
```

---

## Components

Every major UI component should have its own folder.

Example:

```text
components/
└── sidebar/
    ├── sidebar.html
    ├── sidebar.css
    ├── sidebar.js
    └── index.js
```

---

## Git

- One feature = One commit.
- Write clear commit messages.

Examples:

- Add sidebar component
- Create icon system
- Implement chat layout
- Fix router navigation

---

## General Principles

- Keep code clean.
- Avoid duplication.
- Think about scalability.
- Write code that future-you can understand.