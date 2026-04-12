# Backend API Documentation — v1.0.0

> **Base URL:** `https://your-domain.com/api`

All endpoints accept and return `application/json`. Path parameters denoted `:id` refer to a resource ID or school/admin scope ID depending on context (see notes per section).

---

## Table of Contents

- [Admin](#admin)
- [Student](#student)
- [Teacher](#teacher)
- [Notice](#notice)
- [Class (Sclass)](#class-sclass)
- [Subject](#subject)

---

## Admin

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/AdminReg` | Register a new admin |
| `POST` | `/AdminLogin` | Admin login |
| `GET` | `/Admin/:id` | Get admin details |
| `PUT` | `/Admin/:id` | Update admin |
| `DELETE` | `/Admin/:id` | Delete admin |

### POST `/AdminReg`
Register a new admin account.

**Request body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "schoolName": "string"
}
```

**Response `201`:**
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "schoolName": "string",
  "role": "Admin"
}
```

---

### POST `/AdminLogin`
Authenticate an admin and return a token.

**Request body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response `200`:**
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "token": "string"
}
```

---

### GET `/Admin/:id`
Retrieve details of a specific admin.

**Path parameter:** `:id` — Admin ID

**Response `200`:**
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "schoolName": "string"
}
```

---

### PUT `/Admin/:id`
Update admin information.

**Path parameter:** `:id` — Admin ID

**Request body:** *(any updatable fields)*
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response `200`:**
```json
{
  "_id": "string",
  "name": "string",
  "email": "string"
}
```

---

### DELETE `/Admin/:id`
Delete an admin account.

**Path parameter:** `:id` — Admin ID

**Response `200`:**
```json
{ "message": "Admin deleted successfully" }
```

---

## Student

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/StudentReg` | Register a new student |
| `POST` | `/StudentLogin` | Student login |
| `GET` | `/Students/:id` | List all students under a school |
| `GET` | `/Student/:id` | Get student details |
| `PUT` | `/Student/:id` | Update student info |
| `PUT` | `/UpdateExamResult/:id` | Update a student's exam result |
| `PUT` | `/StudentAttendance/:id` | Mark student attendance |
| `PUT` | `/RemoveAllStudentsSubAtten/:id` | Clear all students' attendance for a subject |
| `PUT` | `/RemoveAllStudentsAtten/:id` | Clear all attendance for all students |
| `PUT` | `/RemoveStudentSubAtten/:id` | Remove a student's attendance for a subject |
| `PUT` | `/RemoveStudentAtten/:id` | Remove a student's attendance record |
| `DELETE` | `/Students/:id` | Delete all students under a school |
| `DELETE` | `/StudentsClass/:id` | Delete all students in a class |
| `DELETE` | `/Student/:id` | Delete a specific student |

### POST `/StudentReg`
Register a new student.

**Request body:**
```json
{
  "name": "string",
  "rollNum": "number",
  "password": "string",
  "className": "string",
  "adminID": "string"
}
```

**Response `201`:**
```json
{
  "_id": "string",
  "name": "string",
  "rollNum": "number",
  "sclassName": "string",
  "school": "string",
  "role": "Student"
}
```

---

### POST `/StudentLogin`
Authenticate a student.

**Request body:**
```json
{
  "rollNum": "number",
  "studentName": "string",
  "password": "string"
}
```

**Response `200`:**
```json
{
  "_id": "string",
  "name": "string",
  "token": "string"
}
```

---

### GET `/Students/:id`
List all students belonging to a school.

**Path parameter:** `:id` — Admin/School ID

**Response `200`:**
```json
[
  {
    "_id": "string",
    "name": "string",
    "rollNum": "number",
    "sclassName": "string"
  }
]
```

---

### GET `/Student/:id`
Get details of a specific student.

**Path parameter:** `:id` — Student ID

**Response `200`:**
```json
{
  "_id": "string",
  "name": "string",
  "rollNum": "number",
  "sclassName": "string",
  "examResult": [],
  "attendance": []
}
```

---

### PUT `/Student/:id`
Update student information.

**Path parameter:** `:id` — Student ID

**Request body:** *(any updatable fields)*
```json
{
  "name": "string",
  "password": "string"
}
```

---

### PUT `/UpdateExamResult/:id`
Update exam result for a student.

**Path parameter:** `:id` — Student ID

**Request body:**
```json
{
  "subName": "string",
  "marksObtained": "number"
}
```

---

### PUT `/StudentAttendance/:id`
Mark attendance for a student.

**Path parameter:** `:id` — Student ID

**Request body:**
```json
{
  "subName": "string",
  "status": "Present | Absent",
  "date": "ISO 8601 date string"
}
```

---

### PUT `/RemoveAllStudentsSubAtten/:id`
Clear attendance records of all students for a specific subject.

**Path parameter:** `:id` — Subject ID

---

### PUT `/RemoveAllStudentsAtten/:id`
Clear all attendance records for all students in a school.

**Path parameter:** `:id` — Admin/School ID

---

### PUT `/RemoveStudentSubAtten/:id`
Remove a specific student's attendance for a subject.

**Path parameter:** `:id` — Student ID

**Request body:**
```json
{
  "subName": "string"
}
```

---

### PUT `/RemoveStudentAtten/:id`
Remove all attendance records for a specific student.

**Path parameter:** `:id` — Student ID

---

### DELETE `/Students/:id`
Delete all students under a school.

**Path parameter:** `:id` — Admin/School ID

---

### DELETE `/StudentsClass/:id`
Delete all students belonging to a specific class.

**Path parameter:** `:id` — Class ID

---

### DELETE `/Student/:id`
Delete a specific student.

**Path parameter:** `:id` — Student ID

---

## Teacher

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/TeacherReg` | Register a new teacher |
| `POST` | `/TeacherLogin` | Teacher login |
| `POST` | `/TeacherAttendance/:id` | Mark teacher attendance |
| `GET` | `/Teachers/:id` | List all teachers under a school |
| `GET` | `/Teacher/:id` | Get teacher details |
| `PUT` | `/TeacherSubject` | Update teacher's assigned subject |
| `DELETE` | `/Teachers/:id` | Delete all teachers under a school |
| `DELETE` | `/TeachersClass/:id` | Delete all teachers assigned to a class |
| `DELETE` | `/Teacher/:id` | Delete a specific teacher |

### POST `/TeacherReg`
Register a new teacher.

**Request body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "adminID": "string",
  "teachSubject": "string",
  "teachSclass": "string"
}
```

**Response `201`:**
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "teachSubject": "string",
  "teachSclass": "string",
  "role": "Teacher"
}
```

---

### POST `/TeacherLogin`
Authenticate a teacher.

**Request body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response `200`:**
```json
{
  "_id": "string",
  "name": "string",
  "token": "string"
}
```

---

### POST `/TeacherAttendance/:id`
Mark attendance for a teacher.

**Path parameter:** `:id` — Teacher ID

**Request body:**
```json
{
  "status": "Present | Absent",
  "date": "ISO 8601 date string"
}
```

> **Note:** This endpoint uses `POST` while the equivalent student route uses `PUT`. Consider aligning these for consistency.

---

### GET `/Teachers/:id`
List all teachers belonging to a school.

**Path parameter:** `:id` — Admin/School ID

**Response `200`:**
```json
[
  {
    "_id": "string",
    "name": "string",
    "teachSubject": "string",
    "teachSclass": "string"
  }
]
```

---

### GET `/Teacher/:id`
Get details of a specific teacher.

**Path parameter:** `:id` — Teacher ID

---

### PUT `/TeacherSubject`
Assign or update the subject for a teacher.

**Request body:**
```json
{
  "teacherId": "string",
  "teachSubject": "string"
}
```

---

### DELETE `/Teachers/:id`
Delete all teachers under a school.

**Path parameter:** `:id` — Admin/School ID

---

### DELETE `/TeachersClass/:id`
Delete all teachers assigned to a specific class.

**Path parameter:** `:id` — Class ID

---

### DELETE `/Teacher/:id`
Delete a specific teacher.

**Path parameter:** `:id` — Teacher ID

---

## Notice

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/NoticeCreate` | Create a new notice |
| `GET` | `/NoticeList/:id` | List all notices for a school |
| `PUT` | `/Notice/:id` | Update a notice |
| `DELETE` | `/Notices/:id` | Delete all notices for a school |
| `DELETE` | `/Notice/:id` | Delete a specific notice |

### POST `/NoticeCreate`
Create a new notice.

**Request body:**
```json
{
  "title": "string",
  "details": "string",
  "date": "ISO 8601 date string",
  "adminID": "string"
}
```

**Response `201`:**
```json
{
  "_id": "string",
  "title": "string",
  "details": "string",
  "date": "string",
  "school": "string"
}
```

---

### GET `/NoticeList/:id`
List all notices for a school.

**Path parameter:** `:id` — Admin/School ID

**Response `200`:**
```json
[
  {
    "_id": "string",
    "title": "string",
    "details": "string",
    "date": "string"
  }
]
```

---

### PUT `/Notice/:id`
Update an existing notice.

**Path parameter:** `:id` — Notice ID

**Request body:**
```json
{
  "title": "string",
  "details": "string",
  "date": "ISO 8601 date string"
}
```

---

### DELETE `/Notices/:id`
Delete all notices for a school.

**Path parameter:** `:id` — Admin/School ID

---

### DELETE `/Notice/:id`
Delete a specific notice.

**Path parameter:** `:id` — Notice ID

---

## Class (Sclass)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/SclassCreate` | Create a new class |
| `GET` | `/SclassList/:id` | List all classes in a school |
| `GET` | `/Sclass/:id` | Get class details |
| `GET` | `/Sclass/Students/:id` | Get all students in a class |
| `DELETE` | `/Sclasses/:id` | Delete all classes in a school |
| `DELETE` | `/Sclass/:id` | Delete a specific class |

> **Route conflict warning:** `/Sclass/:id` and `/Sclass/Students/:id` share the same base path. Express resolves this correctly only because the static segment route is declared first. Consider refactoring to `/Sclass/:id/students` to avoid ambiguity.

### POST `/SclassCreate`
Create a new class.

**Request body:**
```json
{
  "sclassName": "string",
  "adminID": "string"
}
```

**Response `201`:**
```json
{
  "_id": "string",
  "sclassName": "string",
  "school": "string"
}
```

---

### GET `/SclassList/:id`
List all classes under a school.

**Path parameter:** `:id` — Admin/School ID

**Response `200`:**
```json
[
  {
    "_id": "string",
    "sclassName": "string"
  }
]
```

---

### GET `/Sclass/:id`
Get details of a specific class.

**Path parameter:** `:id` — Class ID

---

### GET `/Sclass/Students/:id`
Get all students enrolled in a class.

**Path parameter:** `:id` — Class ID

**Response `200`:**
```json
[
  {
    "_id": "string",
    "name": "string",
    "rollNum": "number"
  }
]
```

---

### DELETE `/Sclasses/:id`
Delete all classes under a school.

**Path parameter:** `:id` — Admin/School ID

---

### DELETE `/Sclass/:id`
Delete a specific class.

**Path parameter:** `:id` — Class ID

---

## Subject

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/SubjectCreate` | Create a new subject |
| `GET` | `/AllSubjects/:id` | List all subjects in a school |
| `GET` | `/ClassSubjects/:id` | List subjects assigned to a class |
| `GET` | `/FreeSubjectList/:id` | List subjects with no assigned teacher |
| `GET` | `/Subject/:id` | Get subject details |
| `DELETE` | `/Subject/:id` | Delete a specific subject |
| `DELETE` | `/Subjects/:id` | Delete all subjects in a school |
| `DELETE` | `/SubjectsClass/:id` | Delete all subjects assigned to a class |

### POST `/SubjectCreate`
Create a new subject.

**Request body:**
```json
{
  "subName": "string",
  "subCode": "string",
  "sessions": "number",
  "sclassName": "string",
  "adminID": "string"
}
```

**Response `201`:**
```json
{
  "_id": "string",
  "subName": "string",
  "subCode": "string",
  "sessions": "number",
  "sclassName": "string",
  "school": "string"
}
```

---

### GET `/AllSubjects/:id`
List all subjects in a school.

**Path parameter:** `:id` — Admin/School ID

---

### GET `/ClassSubjects/:id`
List all subjects assigned to a specific class.

**Path parameter:** `:id` — Class ID

---

### GET `/FreeSubjectList/:id`
List subjects that have no teacher assigned.

**Path parameter:** `:id` — Admin/School ID

---

### GET `/Subject/:id`
Get details of a specific subject.

**Path parameter:** `:id` — Subject ID

---

### DELETE `/Subject/:id`
Delete a specific subject.

**Path parameter:** `:id` — Subject ID

---

### DELETE `/Subjects/:id`
Delete all subjects in a school.

**Path parameter:** `:id` — Admin/School ID

---

### DELETE `/SubjectsClass/:id`
Delete all subjects assigned to a specific class.

**Path parameter:** `:id` — Class ID

---

## Error Responses

All endpoints may return the following error shapes:

| Status | Meaning |
|--------|---------|
| `400` | Bad request — missing or invalid fields |
| `401` | Unauthorized — invalid or missing credentials |
| `404` | Not found — resource does not exist |
| `500` | Internal server error |

**Error body:**
```json
{
  "message": "string"
}
```

---

## Known Issues & Recommendations

1. **Route ambiguity** — `/Sclass/:id` and `/Sclass/Students/:id` should be refactored to `/Sclass/:id/students`.
2. **Method inconsistency** — `TeacherAttendance` uses `POST`; `StudentAttendance` uses `PUT`. Align both to `POST` (creation) or `PUT` (update/upsert).
3. **Authentication** — No auth middleware is visible in the route file. Ensure protected routes validate tokens before reaching controllers.
4. **`:id` overloading** — The same `:id` param serves as both a school-scoping ID (on list endpoints) and a resource ID (on detail/update/delete endpoints). Consider using distinct param names like `:schoolId` vs `:id` for clarity.