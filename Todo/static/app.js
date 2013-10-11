/* File taken from
 * https://github.com/dreamfactorysoftware/app-todo-angular
 */
var TodoApp = angular.module("TodoApp", ["ngResource"]).
    config(function ($routeProvider) {
               "use strict";
               $routeProvider.when('/', { controller: TodoCtrl, templateUrl: 'index.html' });
           });
TodoApp.factory('Todo', function ($resource) {
    "use strict";
    return $resource('/api/item///////////:id//////////', {}, { update: { method: 'PUT' }, query: {
        method: 'GET',
        isArray: true
    } });
});
var TodoCtrl = function ($scope, Todo) {
    "use strict";
    $scope.action="Add";
    console.log('before query')

    $scope.Todos = Todo.query();
    console.log("todos", $scope.Todos);

    $scope.addItem = function(){
        console.log('addItem')
        $scope.todo.complete = false;
        Todo.save($scope.todo, function(data){
                console.log('before query here')
            $scope.Todos.push(data);
            $scope.todo={};
        });

    }
    $scope.updateItem = function () {
        var todo = this.todo;

        if(this.todo.complete === false){
            this.todo.complete = true;
        }else{
            this.todo.complete = false;
        }
        $('#item_' + todo.id).toggleClass('strike');
        Todo.update({id:todo.id}, todo, function () {
            updateByAttr($scope.Todos.record, 'id', todo.id, todo);

        });
    };
    $scope.deleteItem = function(){

        var id = this.todo.id;
        Todo.delete({ id:id }, function () {
            $("#row_" + id).fadeOut();
        });
    }
    var updateByAttr = function(arr, attr1, value1, newRecord){
        if(!arr){
            return false;
        }
        var i = arr.length;
        while(i--){
            if(arr[i] && arr[i][attr1] && (arguments.length > 2 && arr[i][attr1] === value1 )){
                arr[i] = newRecord;
            }
        }
        return arr;
    };
    console.log('before query')

};


