sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.example.TodoListExampleTodoList.controller.AddTodo", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.example.TodoListExampleTodoList.view.AddTodo
		 */
			// onInit: function() {
				
			// },

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.example.TodoListExampleTodoList.view.AddTodo
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.example.TodoListExampleTodoList.view.AddTodo
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.example.TodoListExampleTodoList.view.AddTodo
		 */
		//	onExit: function() {
		//
		//	}
		onNavBack:function(){
			this._reset();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TodoList");
		},
		onSave: function(){
			var oTextInput = this.getView().byId("textInput");
			var oCompletedCheckbox = this.getView().byId("completedChekbox");
			var sText = oTextInput.getValue();
			var bCompleted = oCompletedCheckbox.getSelected();
			var oTodoListModel = this.getView().getModel("todoList");
			var aTodoListData = oTodoListModel.getProperty("/todos");
			if(sText){
				aTodoListData.push({
					text: sText,
					completed: bCompleted
				});
				oTodoListModel.refresh();
				
				this.onNavBack();
			}
		},
		_reset: function(){
			var oTextInput = this.getView().byId("textInput");
			var oCompletedCheckbox = this.getView().byId("completedChekbox");
			oTextInput.setValue("");
			oCompletedCheckbox.setSelected(false);
		}
	});

});