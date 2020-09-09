# Test

after clone the repo, run 
```
sudo docker-compose up --build
```
## RESTful endpoints

|  No | URL                                | Method    |
|-----| -------------                      |:---------:|
|  1  | /register                          | POST      |
|  2  | /login                             | POST      |
|  3  | /profile                           | GET       |

<br>

### Global Responses
> For all endpoints that required token

_Response (404 - Token Not Found)_
```json
{
    "message": "Token not found"
}
```
> For all endpoints

_Response (500 - Internal Server Error)_
```json
{
    "message": "Internal server error"
}
```
---
### POST /register
> Register new account

_Request Body_
```json
{
    "email": "<your email>",
    "password": "<your password>",
}
```
_Response (201 - Created)_
```
{
  "id": <given id by system>,
  "email": "<posted email>"
}
```
_Response (400 - Bad Request)_
```json
{
    "message": "Email can't be empty, Enter a valid email address, Password must be between 4 & 20 characters"
}
```
---
### POST /login
> Login using user account

_Request Body_
```json
{
    "email": "<your email>",
    "password": "<your password>",
}
```
_Response (200 - Ok)_
```
{
    "id": <given id by system>,
    "email": "<posted email>",
    "token": "<your token>"
}
```
_Response (400 - Bad Request)_
```json
{
    "message": "Username/Password not match"
}
```
_Response (404 - Not Found)_
```json
{
    "message": "Username not found"
}
```
---
### GET /profile
> get profile

_Request Header_
```json
{
    "token": "<your token>"
}
```
_Response (200 - Ok)_
```
{
    "id": <given id by system>,
    "email": "<posted email>",
}
```
---