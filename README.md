# Express.js MVC Server by NEDI USMAN HUSSEN

A professional Express.js server built following the MVC (Model-View-Controller) pattern, showcasing modern backend development practices.

## 👨‍💻 Developer

**NEDI USMAN HUSSEN**
- 🎓 Computer Sciences Student
- 💻 Full-Stack Web Developer
- 🔐 Junior Cybersecurity Specialist
- ⏰ Available 24/7 for projects and collaborations

### 📧 Contact Information
- **Email:** nediusman92@gmail.com
- **Instagram:** [@alehmudin](https://www.instagram.com/alehmudin?igsh=MTRic210Z24zOXFwNw==)
- **Twitter:** [@nediusmanx](https://x.com/nediusmanx?t=w3uSpixDcrx-w_HjNrYKvg&s=09)
- **Telegram:** [@alehmudin](https://t.me/alehmudin)

### 🚀 Services Offered
- Full-Stack Web Development
- Backend API Development
- Cybersecurity Consulting
- Code Review & Optimization
- Technical Consultation

## 🛠️ Project Features

- ✅ Express.js server with MVC architecture
- ✅ JSON request/response handling
- ✅ Multiple endpoints (GET and POST)
- ✅ Dynamic data generation
- ✅ Request validation
- ✅ 404 error handling
- ✅ Professional developer portfolio integration
- ✅ Clean, organized code structure

## 📁 Project Structure

```
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── routes/
│   └── index.js          # Route definitions
└── controllers/
    ├── homeController.js     # Home page logic
    ├── aboutController.js    # About page logic
    ├── contactController.js  # Contact page logic
    ├── dynamicController.js  # Dynamic data logic
    └── echoController.js     # Echo endpoint logic
```

## 🚀 Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

## 🌐 API Endpoints

### GET Routes

- `GET /` - Welcome page with developer information
- `GET /about` - About developer & application details
- `GET /contact` - Contact information & social media links
- `GET /time` - Current server time
- `GET /greeting` - Personalized dynamic greeting

### POST Routes

- `POST /echo` - Echo back JSON data with metadata

## 📝 Usage Examples

### Test the echo endpoint:
```bash
curl -X POST http://localhost:4000/echo \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "message": "Hello World"}'
```

### Get developer contact info:
```bash
curl http://localhost:4000/contact
```

### Get personalized greeting:
```bash
curl http://localhost:4000/greeting
```

## 🌟 Why Choose This Developer?

- **24/7 Availability:** Always ready to work on your projects
- **Dual Expertise:** Web development + cybersecurity knowledge
- **Student Mindset:** Always learning and implementing latest technologies
- **Professional Communication:** Quick response guaranteed
- **Quality Code:** Clean, maintainable, and well-documented code

## 📞 Get In Touch

Ready to work together? Reach out through any of the contact methods above!

The server runs on `http://localhost:4000` by default.

---
*Built with ❤️ by NEDI USMAN HUSSEN*# express-mvc-server
