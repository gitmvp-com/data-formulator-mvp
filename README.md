# Data Formulator MVP

A simplified MVP version of [microsoft/data-formulator](https://github.com/microsoft/data-formulator) - Create data visualizations with a drag-and-drop interface.

## Overview

This MVP focuses on the core visualization feature of Data Formulator:
- Load CSV data files
- View data in a table
- Create visualizations using drag-and-drop field encodings
- Support for bar charts, line charts, and scatter plots
- Powered by Vega-Lite for high-quality visualizations

## Features

✅ **CSV Data Loading** - Upload and parse CSV files

✅ **Data Table View** - Browse your data in a clean table interface

✅ **Drag-and-Drop Encodings** - Drag fields to X, Y, and Color channels

✅ **Multiple Chart Types** - Bar, Line, and Scatter plots

✅ **Vega-Lite Integration** - Professional-quality visualizations

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
```

### Running the App

```bash
# Start development server
npm start
# or
yarn start
```

The app will open at [http://localhost:5173](http://localhost:5173)

### Building for Production

```bash
npm run build
# or
yarn build
```

## How to Use

1. **Load Data**: Click the "Load CSV File" button and select a CSV file from your computer
2. **View Data**: Browse your data in the table on the left panel
3. **Select Chart Type**: Choose between Bar, Line, or Scatter chart in the visualization panel
4. **Drag Fields**: Drag field names from "Available Fields" to the X, Y, or Color encoding zones
5. **View Chart**: Your visualization will automatically update!

## Example CSV Format

Here's an example CSV you can use to test:

```csv
month,sales,category
Jan,100,A
Feb,150,A
Mar,120,A
Jan,80,B
Feb,90,B
Mar,110,B
```

## Tech Stack

- **React 18.2.0** - UI framework
- **TypeScript 4.9.5** - Type safety
- **Vite 5.4.19** - Build tool
- **Material-UI 7.1.1** - UI components
- **Vega-Lite 5.5.0** - Visualization grammar
- **React DnD 16.0.1** - Drag and drop functionality
- **D3 7.3.0** - Data manipulation utilities

## Differences from Original

This MVP simplifies the original Data Formulator by:

- ❌ No AI/LLM integration (no natural language queries)
- ❌ No Python backend
- ❌ No data transformation capabilities
- ❌ No Redux state management
- ❌ No advanced features (data anchoring, multi-table joins, etc.)

The MVP focuses on the **core visualization workflow** - loading data and creating charts with drag-and-drop encodings.

## Parent Repository

This project is based on [microsoft/data-formulator](https://github.com/microsoft/data-formulator).

Check out the original for advanced features like:
- AI-powered data transformation
- Natural language chart creation
- Working with large datasets (DuckDB integration)
- Multi-table joins
- Data anchoring and branching

## License

MIT License - Same as the parent repository

## Contributing

This is an educational MVP project. Feel free to fork and extend it with additional features!