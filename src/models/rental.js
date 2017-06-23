import Backbone from 'backbone';

var Rental = Backbone.Model.extend({
  sync: function(method, model, options) {
      if (method=='create'){
          options.url = model.collection.url + '/' + options.title + '/check-out';
      }
      console.log('OPTIONS', options.url);
      return Backbone.sync(method, model, options);
  }
});

export default Rental;
