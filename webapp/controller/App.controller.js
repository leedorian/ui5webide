sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/example/TodoListExampleTodoList/model/models"
], function(Controller, Models) {
	"use strict";

	return Controller.extend("com.example.TodoListExampleTodoList.controller.App", {
		onInit:function(){
			this.getView().setModel(Models.createTodoListModel(), "todoList");
		}
	});
});