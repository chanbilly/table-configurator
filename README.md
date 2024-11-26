```markdown
# Table Configurator

This is a 3D table configurator application built with ViteJS, React, Three.js, and React Three Fiber.

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js (version 12 or above)
- npm (version 6 or above) or Yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/table-configurator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd table-configurator
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Development

To start the development server and run the application locally:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at `http://localhost:5173` (or another available port). Open this URL in your web browser to view the application.

The development server supports hot module replacement (HMR), so any changes you make to the source code will be automatically reflected in the browser without the need to manually refresh the page.

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

This command will generate an optimized and minified production build of your application in the `dist` directory.

## Running the Production Build

To run the production build locally:

```bash
npm run serve
# or
yarn serve
```

This will start a local server and serve the production build of your application. Open the provided URL in your web browser to view the application.

## Configuration

The application can be configured by modifying the files in the `src` directory. The main files and directories of interest are:

- `src/main.jsx`: The entry point of the application.
- `src/App.jsx`: The main component that sets up the scene and renders the table configurator.
- `src/components`: Contains the individual components used in the application, such as the table, legs, and camera. Also contains the UI for the configurator.
- `src/stores`: Contains the Zustand store for managing the table configuration state.

## Dependencies

The main dependencies used in this project are:

- ViteJS: A fast build tool and development server.
- React: A JavaScript library for building user interfaces.
- Three.js: A 3D graphics library for rendering 3D scenes in the browser.
- React Three Fiber: A React renderer for Three.js.
- Zustand: A small and fast state management library for React.

For a complete list of dependencies, refer to the `package.json` file.
