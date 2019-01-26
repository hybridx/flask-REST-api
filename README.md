# flask-REST-api 
RESTful implementation example for python3 in python flask-restful based on flask framework


from flask_restful import Resource,Api


The magic which makes it RESTful


```
class Student(Resource):
	def get(self): #GET method and we can have def post() which would be POST request and so on
		return [{"rollNo":101,"name":"Clark Kent"},{"rollNo":123,"name":"Deepesh Nair"}]

class Subjects(Resource):
	def get(self):
		return [{"subjectId":90210,"subjectName":"Martial Arts"}]

api.add_resource(Student,'/api/student/getStudent')
api.add_resource(Subjects,'/api/subject/getSubject')
```

***

Requirements:-
* Python3-
* Flask-
* Flask-RESTful

***

**Please help me add more features using ORM tools in python - (example : SqlAlchemy)**
