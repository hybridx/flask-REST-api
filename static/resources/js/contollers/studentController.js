assignment.controller('studentController', 
		['$scope','$http','$timeout',"factoryServices", 
	function($scope,$http,$timeout,factoryServices){

	$scope.addStudent = function(){
		
		var fd = new FormData();
        fd.append('rollNo', $scope.studentInfo.rollNo);
        fd.append('name', $scope.studentInfo.name);
        
        var rollNo = $scope.studentInfo.rollNo;
        var name = $scope.studentInfo.name;
        
        factoryServices.postStudentData(fd).then(function(response) {
        	$scope.error = "";
        	$scope.students.push({
             	name:name,
             	rollNo:rollNo,
             });        	
		}, function(errResponse) {
			console.log(errResponse.statusText);
			 $scope.error = "Error Please check the details";
			 return; 
		});
            

		$scope.studentInfo.name = null;
		$scope.studentInfo.rollNo = null;

		
	};
	
	
	factoryServices.getStudentData().then(function successCallback(response){
		$scope.students=response;
		$scope.error = "";
    }, function errorCallback(response){
       $scope.error = "Error Please check the details";
    });
	
	
	$scope.removeStudent = function(student){
		
		var studentIndex = $scope.students.indexOf(student);
		$scope.students.splice(studentIndex,1);
		
        factoryServices.removeStudentData(student.rollNo);
	};
	
	
	

}]);