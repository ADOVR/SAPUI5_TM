sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sapui5grupp1.controller.Detail", {
		onEditToggleButtonPress: function() {
			var oObjectPage = this.getView().byId("ObjectPageLayout"),
				bCurrentShowFooterState = oObjectPage.getShowFooter();

			oObjectPage.setShowFooter(!bCurrentShowFooterState);
		}
	});
});