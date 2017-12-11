sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createTodoListModel: function(){
			var oModel = new JSONModel(jQuery.sap.getModulePath("com.example.TodoListExampleTodoList") + "/model/TodoList.json");
			return oModel;
		}

	};
});