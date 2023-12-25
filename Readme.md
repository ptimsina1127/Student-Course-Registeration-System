Student Course Registration System

Overview

This Django project serves as a Student Course Registration System with features for managing student details, courses, and registrations. It includes a simple web interface and exposes API endpoints for CRUD operations.

Features

- View, add, update, and delete student records.
- View, add courses.
- Register students for courses.
- Simple web interface and API endpoints for interaction.

Installation

1. Clone the repository:

   git clone https://github.com/your-username/student-course-registration.git

2. Navigate to the project directory:

   cd student-course-registration

3. Install dependencies:

   pip install -r requirements.txt

4. Apply migrations:

   python manage.py migrate

5. Run the development server:

   python manage.py runserver

   The application will be accessible at http://127.0.0.1:8000/.

Usage

- Access the web interface at http://127.0.0.1:8000/ to interact with the application.
- Utilize the provided API endpoints for programmatic access.

API Endpoints

- GET /students/: Retrieve a list of all students.
- POST /students/: Add a new student.
- DELETE /students/: Delete a student by ID.
- PUT /students/: Update a student by ID.
- GET /courses/: Retrieve a list of all courses.
- POST /courses/: Add a new course.
- GET /registeration/: Retrieve registration information.
- POST /registeration/: Register a student for a course.

Django Admin

The Django admin interface can be accessed at http://127.0.0.1:8000/admin/. Use the admin credentials to log in and manage models directly.