# Sole Society

Simple sneaker storefront — backend (Java/Spark) and static frontend. Configure DATASOURCE_* env vars before running.

## ✨ Features

- **Interactive Search**: Real-time search with dropdown suggestions
- **Brand Collections**: Dedicated pages for Jordan, Yeezy, and Onitsuka Tiger
- **Responsive Design**: Optimized for desktop and mobile devices
- **Shopping Cart**: Full e-commerce functionality
- **Product Details**: Comprehensive sneaker information and images
- **Customer Reviews**: Social proof and testimonials

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript
- Tailwind CSS for styling
- Material Symbols for icons
- Responsive design principles

### Backend
- Java 11+
- Spark Framework for REST APIs
- PostgreSQL database
- HikariCP connection pooling
- Maven for dependency management

## 🚀 Quick Start

### Prerequisites
- Java 11 or higher
- Maven 3.6+
- PostgreSQL 12+
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohakkm/sole-society.git
   cd sole-society
   ```

2. **Setup Database**
   ```bash
   # Create database
   createdb solesociety
   
   # Run migrations
   psql -d solesociety -f db/migrations/001_create_tables.sql
   
   # Seed data
   psql -d solesociety -f db/seeds/001_seed_sneakers.sql
   ```

3. **Configure Backend**
   ```bash
   cd backend
   # Update database credentials in src/main/resources/application.properties
   ```

4. **Start the Application**
   ```bash
   # Build and run backend
   mvn clean package
   mvn exec:java -Dexec.mainClass="com.solesociety.app.App"
   
   # Open frontend
   # Navigate to frontend/index.html in your browser
   ```

## 📁 Project Structure

```
sole-society/
├── frontend/                 # Static frontend files
│   ├── assets/
│   │   ├── css/             # Stylesheets
│   │   ├── js/              # JavaScript files
│   │   └── img/             # Product images
│   ├── *.html               # HTML pages
├── backend/                 # Java backend
│   ├── src/main/java/       # Source code
│   ├── src/main/resources/  # Configuration
│   └── pom.xml              # Maven configuration
├── db/
│   ├── migrations/          # Database schema
│   └── seeds/               # Sample data
└── README.md
```

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/sneakers` | GET | Get sneakers by brand (`?brand=jordan`) |
| `/api/sneakers/all` | GET | Get all sneakers |
| `/api/sneakers/search` | GET | Search sneakers (`?q=air jordan`) |
| `/api/sneakers/:id` | GET | Get sneaker by ID |
| `/health` | GET | Health check |

## 🎨 Customization

### Adding New Brands
1. Add brand to `brands` table
2. Add sneakers to `sneakers` table
3. Create brand page in `frontend/`
4. Update search data in `frontend/assets/js/app.js`

### Styling
- Modify `frontend/assets/css/styles.css`
- Update Tailwind classes in HTML files
- Customize color scheme in `index.html` Tailwind config

## 🚀 Deployment

### Backend Deployment
```bash
# Build JAR file
mvn clean package

# Run with environment variables
export DATASOURCE_URL="jdbc:postgresql://your-db-host:5432/solesociety"
export DATASOURCE_USER="your-username"
export DATASOURCE_PASSWORD="your-password"
java -jar target/sole-society-backend-0.1.0.jar
```

### Frontend Deployment
- Deploy `frontend/` directory to any static hosting service
- Update API endpoints to point to your backend URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Mohakk** - Project Lead & Developer

## 📞 Support

For support, email hello@solesociety.in or join our WhatsApp group.

---

Made with ❤️ in Mumbai
