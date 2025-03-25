# 🗑️ Waste Management Automation for Dark Stores

## 🚀 Project Overview
**Waste Management Automation for Dark Stores** is an AI-powered web application designed to optimize waste tracking, reduce food wastage, and enhance sustainability in dark stores (micro-fulfillment centers). The system automates waste categorization, provides predictive analytics, and integrates with IoT sensors to monitor and reduce waste in real-time.

## 🏆 Hackathon Submission
- **Hackathon Name:** CodeClash2025
- **Problem Statement:** Waste Management Automation for Dark Stores
- **Team Name:** Coding Knights
- **Project Duration:** 24 Hours

## 🎯 Key Features
✅ **AI-Powered Waste Classification**: Automatically detects and classifies waste using image recognition.
✅ **Real-Time Waste Monitoring**: IoT-enabled sensors track waste levels and send alerts.
✅ **Predictive Analytics**: Machine learning models analyze trends to reduce wastage.
✅ **Inventory Expiry Alerts**: Prevents unnecessary waste by notifying about soon-to-expire products.
✅ **User Dashboard**: Provides waste insights, analytics, and reports.
✅ **Sustainability Score**: Tracks waste reduction performance over time.

## 🛠️ Tech Stack
### 🌐 Frontend:
- React.js (with Tailwind CSS for UI styling)
- Chart.js for data visualization

### ⚙️ Backend:
- Node.js with Express.js
- MongoDB for database storage
- Socket.io for real-time updates

### 🤖 AI & Automation:
- TensorFlow.js for waste classification
- Python (Flask) for predictive analytics
- OpenCV for image processing

## 🔧 Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/waste-mgmt-darkstores.git
   cd waste-mgmt-darkstores
   ```
2. **Install Dependencies**
   ```sh
   npm install  # Install frontend dependencies
   cd server && npm install  # Install backend dependencies
   ```
3. **Run the Application**
   ```sh
   cd client && npm start  # Start frontend
   cd server && node server.js  # Start backend
   ```

## 📊 System Architecture
```mermaid
graph TD;
  User-->Frontend;
  Frontend-->|API Calls|Backend;
  Backend-->|Database Requests|MongoDB;
  Backend-->|ML Processing|Python-Server;
  Backend-->|IoT Communication|MQTT-Broker;

```

## 🎥 Demo & Screenshots
📌 **Screenshots:**
- Dashboard View
![Screenshot 2025-03-06 074731](https://github.com/user-attachments/assets/b2e8f028-fe9f-4604-bef2-6116a4161eba)
![Screenshot 2025-03-06 074839](https://github.com/user-attachments/assets/8595700f-90cd-42a7-bede-1b8e49989037)

- Waste Classification UI
![Screenshot 2025-03-06 074901](https://github.com/user-attachments/assets/85c23e65-6878-40c4-8183-b1ad6ec750f3)
![Screenshot 2025-03-06 074943](https://github.com/user-attachments/assets/70e2e2b0-0397-41a5-af45-350ca1be3064)

- Analytics Report
![Screenshot 2025-03-06 075014](https://github.com/user-attachments/assets/cdeb3475-4041-4f80-bc0f-c485eb921614)
![Screenshot 2025-03-06 075051](https://github.com/user-attachments/assets/23d38e66-cba7-4e65-a799-e7ed5e26a28c)
![Screenshot 2025-03-06 075159](https://github.com/user-attachments/assets/f641b3f0-e114-4b1d-99e5-384d8dc630a3)
![Screenshot 2025-03-06 075307](https://github.com/user-attachments/assets/a90ca17d-184e-4f83-b1b2-0bb96d836ebe)
![Screenshot 2025-03-06 075339](https://github.com/user-attachments/assets/7dafa898-1d4d-4ada-b5c7-883b86aa2e29)
