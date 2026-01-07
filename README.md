# 📚 Book Manager

A full-stack TypeScript application for managing your personal book collection with a clean, modern interface.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)

## ✨ Features

- **CRUD Operations** - Add, view, update, and delete books
- **Read Status Tracking** - Toggle and visually distinguish read/unread books
- **Smart Sorting** - Unread books displayed first automatically
- **Persistent Storage** - JSON-based data persistence
- **RESTful API** - Clean REST architecture with TypeScript
- **Responsive UI** - Mobile-friendly design with modern aesthetics

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development mode (with hot-reload)
npm run dev

# Production build
npm run build
npm start
```

Server runs at `http://localhost:3000`

## � API Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `GET` | `/books` | Get all books | - |
| `POST` | `/books` | Add new book | `{ title, author, sites }` |
| `PUT` | `/books/:id` | Toggle read status | - |
| `DELETE` | `/books/:id` | Delete book | - |

**Example:**
```bash
# Add a book
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{"title":"1984","author":"George Orwell","sites":328}'
```

## 📁 Project Structure

```
Book-Manager/
├── src/
│   ├── app.ts       # Express routes & API
│   ├── server.ts    # Server entry point
│   ├── storage.ts   # Data persistence
│   ├── type.ts      # TypeScript types
│   └── script.ts    # Frontend logic
├── public/
│   ├── index.html   # UI markup
│   └── style.css    # Styling
├── books.json       # Data storage
└── package.json
```

## 🛠️ Tech Stack

**Backend:** Express.js 5.2.1, TypeScript 5.9.3, UUID 13.0.0  
**Frontend:** Vanilla JavaScript, HTML5, CSS3  
**Dev Tools:** ts-node-dev, @types/express, @types/node

## 📝 Data Model

```typescript
interface Book {
  title: string;
  author: string;
  id: string;      // UUID
  read: boolean;
  sites: number;   // Page count
}
```

## 🎨 UI Design

- **Color Scheme:** Soft earth tones with green accents
- **Typography:** Merriweather & Lato (Google Fonts)
- **Layout:** Responsive grid (mobile-first)
- **Interactions:** Hover effects, smooth transitions
- **States:** Read books visually grayed out

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open Pull Request

## 📄 License

ISC License

## 👤 Author

**AdyanMidzic08** - [GitHub](https://github.com/AdyanMidzic08)

**Raghav Handa** - [GitHub](https://github.com/Raghav-Handa)


---

⭐ Star this repo if you find it helpful!
