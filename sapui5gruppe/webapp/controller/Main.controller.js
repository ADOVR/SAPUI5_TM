sap.ui.define([
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox',
	'sap/f/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,_JSONModel, Filter, FilterOperator, Sorter, MessageBox, fioriLibrary) {
        "use strict";

        return Controller.extend("sapui5gruppe.controller.Main", {
            onInit: function () {
                //var oSplitApp = this.getView().byId("SplitApp");
                //oSplitApp.toDetail("__xmlview0--DPPage1","side");
                var oModel = new sap.ui.model.json.JSONModel();
                this.getView().setModel(oModel, "detailModel");

            },

            onSearch: function (oEvent) {

            },
    
            onSort: function () {

            },

            onListItemPress: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("listItem");
                var oBindingContext = oSelectedItem.getBindingContext();
                var oDetailModel = this.getView().getModel("detailModel");

                oDetailModel.setProperty("/SelectedItem", oBindingContext.getObject());
            }
        })
    }
);