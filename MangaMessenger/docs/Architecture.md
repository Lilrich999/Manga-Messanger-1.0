# Manga Messenger Architecture

## Overview

Manga Messenger is built using a component-based architecture with modern Web Components and ES Modules.

The goal is to create a scalable, maintainable, and reusable codebase.

---

## Folder Structure

```text
src/
├── assets/
├── components/
├── config/
├── core/
├── css/
├── js/
├── managers/
└── services/
```

---

## Main Layers

### Components

Reusable UI elements.

Examples:

- Sidebar
- Chat List
- Chat Window
- Message Composer
- Emotion Toolbar

---

### Core

Contains the application's foundation.

Examples:

- BaseComponent
- Router
- Utilities
- Managers

---

### Services

Responsible for communicating with external services.

Examples:

- Firebase Authentication
- Firestore
- Storage
- Calls

---

### Assets

Shared resources used across the application.

- Icons
- Images
- Fonts
- Sounds
- Themes

---

## Design Principles

- Component-Based Architecture
- Single Responsibility Principle (SRP)
- Reusability
- Accessibility
- Responsive Design
- Performance First
- Mobile First