# Letterboxd Sort by Rating Extension

## Description

The **Letterboxd Sort by Rating** extension is a Chrome extension that automatically sorts movies by rating on Letterboxd actor, director, and producer pages. It enhances your browsing experience on Letterboxd by instantly organizing movies based on their ratings.

## Features

- Automatically sorts movies by rating on Letterboxd actor, director, producer, writer, and cinematography pages.
- Improves navigation and efficiency by saving you time from manually sorting movies.

## Installation

1. Download the extension ZIP file from the [GitHub repository](https://github.com/your-username/letterboxd-sort-by-rating).
2. Extract the ZIP file to a directory of your choice.
3. Open Google Chrome and go to the Extensions page (`chrome://extensions`).
4. Enable the **Developer mode** toggle in the top-right corner.
5. Click on the **Load unpacked** button and select the directory where you extracted the extension files.
6. The extension should now be installed and active in your browser.

## Usage

1. Open Letterboxd in your Chrome browser.
2. Navigate to an actor, director, producer, writer, or cinematography page.
3. The extension will automatically sort the movies on the page by rating.
4. Enjoy browsing movies with the convenience of sorted ratings!

## Permissions

- `activeTab`: Required permission to access the current active tab and modify the URL.

## Manifest File

```json
{
  "manifest_version": 3,
  "name": "Letterboxd Sort by Rating",
  "version": "1.0",
  "description": "Automatically sorts movies by rating on Letterboxd actor, director, and producer pages",
  "permissions": ["activeTab"],
  "content_scripts": [
    {
      "matches": [
        "https://letterboxd.com/actor/*",
        "https://letterboxd.com/director/*",
        "https://letterboxd.com/producer/*",
        "https://letterboxd.com/writer/*",
        "https://letterboxd.com/cinematography/*"
      ],
      "js": ["sortByRating.js"]
    }
  ]
}
```

## Contributing

Contributions to this project are welcome. If you encounter any issues or have ideas for improvements, please open an issue on the GitHub repository.
