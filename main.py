from flask import Flask,request,render_template,jsonify
from flask_restful import Resource,Api

app = Flask(__name__)
api = Api(app)


@app.route('/')
def index():
	return render_template("index.html")


class Student(Resource):
	def get(self):
		return [{"rollNo":101,"name":"Clark Kent"},{"rollNo":123,"name":"Deepesh Nair"}]

class Subjects(Resource):
	def get(self):
		return [{"subjectId":90210,"subjectName":"Martial Arts"}]

api.add_resource(Student,'/api/student/getStudent')
api.add_resource(Subjects,'/api/subject/getSubject')


if __name__ == '__main__':
	app.run(debug=True)

