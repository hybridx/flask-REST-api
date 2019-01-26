# flask-REST-api 
RESTful implementation example for python3 in python flask-restful based on flask framework



***

 __**The magic which makes it RESTful**__ 

***
```
from flask import Flask
from flask_restful import Resource,Api

app = Flask(__name__)
api = Api(app)


class Student(Resource):
	def get(self): #GET method and we can have def post() which would be POST request and so on
		return [{"rollNo":101,"name":"Clark Kent"},{"rollNo":123,"name":"Deepesh Nair"}]


api.add_resource(Student,'/api/student/getStudent') # You'll find JSON data at this location once your run the application http://localhost:5000/api/student/getStudent 


if __name__ == '__main__':
	app.run(debug=True)

```

***

Requirements:-
* Python3-
* Flask-
* Flask-RESTful

***

**Please help me add more features using ORM tools in python - (example : SqlAlchemy)**
