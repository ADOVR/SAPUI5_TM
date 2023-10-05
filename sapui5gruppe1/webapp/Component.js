sap.ui.define([
	'sap/ui/core/UIComponent'
], function(UIComponent) {
	'use strict';

	return UIComponent.extend('sapui5gruppe1.Component', {

		metadata: {
			manifest: 'json'
		},

		/*init: function () {
			var oProductsModel;

			UIComponent.prototype.init.apply(this, arguments);

			// set products demo model on this sample
			oProductsModel = new JSONModel(sap.ui.require.toUrl('sap/ui/demo/mock') + '{mainmodel}');
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');
		}*/
	});
});