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
                var oSplitApp = this.getView().byId("SplitApp");
                oSplitApp.toDetail("__xmlview0--DPPage1","side");

            },

            onSearch: function (oEvent) {

            },
    
            onSort: function () {

            },

            onListItemPress: function (oEvent) {
                var oItem = oEvent.getParameter("listItem");
                var sPath = oItem.getBindingContext("mainmodel").getPath();
                //var oView = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent();
                //var oTable = oView.byId("productsTable");
                var oTable = oEvent.getSource().getParent();
                oTable.bindElement({
                    path: sPath,
                    parameters: {
                        expand: "Supplier,Category"
                    }
                    });
            }
        })
    }
);