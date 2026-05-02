# Quora-Style Posts Application

A simple web application built with Node.js and Express that allows users to create, view, edit, and delete posts, similar to a social media feed or Quora.

## 🚀 Features

- **View All Posts**: See a feed of all posts with usernames and content.
- **Single Post View**: View details of a specific post.
- **Create Posts**: Add new posts with a unique ID generated using `uuid`.
- **Edit Posts**: Update the content of existing posts using `method-override` for PATCH requests.
- **Delete Posts**: Remove posts from the feed using DELETE requests.

## 🛠️ Technologies Used

- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Templating Engine**: [EJS](https://ejs.co/)
- **Styling**: Vanilla CSS
- **Utilities**: 
  - `uuid` (for unique post identifiers)
  - `method-override` (to support PATCH and DELETE in HTML forms)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anilgorade8-star/HTTPS-req-.git
   ```
2. Navigate to the project directory:
   ```bash
   cd BK-end
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🚦 Usage

1. Start the server:
   ```bash
   node index.js
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:8080/posts
   ```

## 📁 Project Structure

- `index.js`: Main entry point and API routes.
- `view/`: Contains EJS templates (`index.ejs`, `new.ejs`, `show.ejs`, `edit.ejs`).
- `public/`: Static assets like CSS files.
- `package.json`: Project dependencies and scripts.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).