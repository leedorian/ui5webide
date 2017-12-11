sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.example.TodoListExampleTodoList.controller.TodoList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.example.TodoListExampleTodoList.view.TodoList
		 */
			// onInit: function() {
				
			// },
			
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.example.TodoListExampleTodoList.view.TodoList
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.example.TodoListExampleTodoList.view.TodoList
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.example.TodoListExampleTodoList.view.TodoList
		 */
		//	onExit: function() {
		//
		//	}
		onAddTodo: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("AddTodo");
		},
		onFilterSelect:function(event){
			var sSelectedKey = event.getParameters().key;
			var oTodoList = this.getView().byId("todoList");
			var oTodoListBinding = oTodoList.getBinding("items");
            oTodoListBinding.aFilters = [];
            
            switch(sSelectedKey){
            	case "all":
            		oTodoListBinding.filter([]);
            		break;
            	case "active":
            		oTodoListBinding.filter(new sap.ui.model.Filter("completed", sap.ui.model.FilterOperator.EQ, false));
            		break;
            	case "completed":
            		oTodoListBinding.filter(new sap.ui.model.Filter("completed", sap.ui.model.FilterOperator.EQ, true));
            		break;
            }
		}

	});

});