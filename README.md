# Common Component Library

A carefully curated collection of robust, reusable React components designed for rapid application development. This library provides production-ready components with placeholder support and consistent styling.

## Features

- 🎨 Fully customizable components 
- 📱 Responsive design 
- 🔄 Placeholder support for prototyping



## Available Components

Each component is designed to be both flexible and opinionated, providing sensible defaults while allowing for customization.

### Core Components
- Button - Versatile button component with various styles and states
- Card - Container component for grouping related content
- Input - Text input with built-in validation and placeholder support
- Select - Dropdown selection component
- Modal - Accessible modal dialog
- Toast - Notification system
- Loading - Loading spinners and skeletons
- Avatar - User avatar with fallback support
- Badge - Status indicators and counters

### Layout Components
- Container - Responsive container with max-width settings
- Grid - Flexible grid system
- Stack - Vertical and horizontal stacking
- Divider - Section separator

### Form Components
- Form - Form wrapper with validation support
- Checkbox - Custom checkbox input
- Radio - Radio button group
- TextArea - Multi-line text input
- Switch - Toggle switch


### Setup

```bash
git clone https://github.com/benjaehyun/react-component-library
cd react-component-library
npm install
```

### Running Tests

```bash
npm run test        # Run all tests
npm run test:watch  # Run tests in watch mode
```

### Building

```bash
npm run build
```



## Guidelines for New Components

When adding new components:

1. Follow the existing component structure
2. Include tests
3. Document props and usage
5. Include examples
6. Add placeholder support where appropriate

---

Made with by Ben Lee