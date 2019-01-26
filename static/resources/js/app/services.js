assignment.factory('factoryServices', ["$http", function($http) {

	var service = {};
	var urlGetStudents = 'api/student/getStudent';
	var urlAddStudents = 'api/student/addStudent';
	var urlGetSubjects = 'api/subject/getSubject';
	var urlAddSubjects = 'api/subject/addSubject';
	var urlGetMarks = 'api/marks/getMarks';
	var urlAddMarks = 'api/marks/addMarks';
	var urlRemoveStudent = "api/student/deleteStudent";
	
	service.getStudentData = function(){
		return $http.get(urlGetStudents).then(function(data){
				/*console.log("THIS IS GET!");
				console.log(data.data);*/
				return data.data;
			});
		};
		
	service.postStudentData = function(fd){
		return $http.post(urlAddStudents,fd, {
	          transformRequest: angular.identity,
	          headers: {'Content-Type': undefined}
	       })};
	
	
	
	service.getSubjectData = function(){
		return $http.get(urlGetSubjects).then(function(data){
				return data.data;
			});
		};
		
	service.postSubjectData = function(fd){
		return $http.post(urlAddSubjects,fd, {
		        transformRequest: angular.identity,
		        headers: {'Content-Type': undefined}
		     }).then(function(response) {
		    	 console.log("Sucessful");
				/*console.log(response);*/
			}, function(errResponse) {
				console.log(errResponse.statusText);
			});
		};
		
	service.getMarksData = function(){
		return $http.get(urlGetMarks).then(function(data){
				/*console.log("THIS IS GET!");
				console.log(data.data);*/
				return data.data;
			});
		};
		
	service.postMarksData = function(fd){
		return $http.post(urlAddMarks,fd, {
			      transformRequest: angular.identity,
			      headers: {'Content-Type': undefined}
			   }).then(function(response) {
				   console.log("Sucessful");
					/*console.log(response);*/
			}, function(errResponse) {
				console.log(errResponse.statusText);
			});
		};
	
		
	service.removeStudentData = function(rollNo){
		return $http.delete(urlRemoveStudent+'/'+rollNo).then(function(response) {
			   console.log("Sucessful");
		}, function(errResponse) {
			console.log(errResponse.statusText);
		});
	};
		
	
	return service;
		
}]);
