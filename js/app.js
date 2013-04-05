App = Ember.Application.create({
	LOG_TRANSITIONS: true
});


App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter',
// adapter: DS.RESTAdapter.extend({
  //  url: 'rest'
  //})
});

App.Router.map(function() {
  // put your routes here
  this.resource('start');
  this.resource('url');
  this.resource('VCARD');
  this.resource('generateQR', { path: '/generateQR/:method' });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('start');
  }
});

App.QRroute = Ember.Route.extend({
	model: function() {
		return App.QRmethod.find();
	}
});

App.QRController = Ember.ObjectController.extend({
	generateQR: function() {
		console.log('QR Generation');
	}
});

App.QRCode = DS.Model.extend({
  type: DS.attr('string'),
  type: DS.attr('string'),
  width: DS.attr('string'),
  height: DS.attr('string'),
});
/**
App.Router.reopen({
  location: 'history'
});**/
