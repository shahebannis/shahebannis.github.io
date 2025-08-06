# IoT Smart System Project

This IoT Smart System project demonstrates the integration of hardware sensors, actuators, and web technologies to create a connected, intelligent environment similar to a modern smart home. Leveraging an MQTT server for real-time communication, the system enables seamless interaction between physical devices and a custom-built web interface.

## Features

- **Web-Based Control:** Users can manage and monitor all connected devices through an intuitive website, providing remote access and real-time feedback.
- **Smart Lighting:** The system includes a light that can be manually controlled via the website. It also features automatic activation based on ambient light levels, ensuring optimal illumination at all times.
- **Environmental Monitoring:** Integrated humidity and temperature sensors continuously track environmental conditions, displaying live data on the web dashboard.
- **Personalized Authentication:** A keycard scanner authenticates users and remembers their preferred settings, delivering a personalized experience for each individual.
- **Automated Fan Control:** Motors act as fans, which can be operated manually or set to activate automatically when the temperature exceeds a predefined threshold.
- **Email Notifications & Automation:** The system sends automated email alerts for critical events, such as low temperature or new user logins. Users can respond to these emails (e.g., reply "yes" to reactivate cooling), enabling two-way communication and remote system management.
- **Security & Access Alerts:** Whenever a new user logs in or the light intensity changes significantly, the system sends notification emails to keep users informed of important activities.

## Technologies Used

- **MQTT Protocol:** Facilitates efficient, real-time communication between devices and the web server.
- **Custom Web Interface:** Built for device control, monitoring, and user interaction.
- **Sensor Integration:** Utilizes temperature, humidity, and light sensors for environmental awareness.
- **Actuator Control:** Manages motors and lighting based on sensor data and user input.
- **Email Automation:** Implements notification and response handling for enhanced user engagement and system reliability.

---

