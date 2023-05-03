# react-blog

Micro-CMS system for a personal use blog using React JS and local storage
## Installation

To install Micro-CMS, first clone the repository to your local machine:

```
git clone https://github.com/EdCasCal/react-blog.git
```

Then, navigate to the project directory and install the dependencies:

```
cd react-blog
npm install
```

## Usage

To start the development server, run:

```
npm start
```

This will launch the application in your browser at `http://localhost:3000`.

To build the application for production, run:

```
npm run build
```

This will create a `build` folder containing optimized production-ready code.

## Components

Micro-CMS follows the Atomic Design pattern, which means its components are organized into five categories: atoms, molecules, organisms, templates, and pages. Here is a brief overview of each category:

### Atoms

Atoms are the smallest building blocks of the design system. They are the basic HTML elements, such as inputs, buttons, and textareas.

The atoms in Micro-CMS:
- `BlogLogo`
- `Button`
- `Input`
- `TextArea`

### Molecules

Molecules are groups of atoms that form a small functional unit. They can be simple or complex, but should always have a clear and specific purpose.

The molecules in Micro-CMS:
- `ImageGallery`
- `ImageHero`
- `MainMenu`
- `Post`
- `SearchBar`

### Organisms

Organisms are groups of molecules and atoms that form a section of the UI. They are larger and more complex than molecules, and often represent a complete feature or function.

The organisms in Micro-CMS:
- `ContactForm`
- `Header`
- `PostForm`
- `PostList`

### Templates

Templates are the basic page-level structures that hold the organisms together. They define the overall layout of the page and provide a framework for the content.

The template in Micro-CMS:
- `MainLayout`

### Pages

Pages are specific instances of templates, populated with actual content. They represent the final output of the design system and are what the users see and interact with.

Examples of pages in Micro-CMS:
- `AboutPage`
- `BlogPage`
- `ContactPage`
- `HomePage`
- `PostEditPage`
- `PostViewPage`

## License

This project is licensed under the MIT License. See the LICENSE file for details.
