import Ember from 'ember';

export default Ember.Controller.extend({

  url: function() {
    return 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=' +
      this.get('model.queryparams.datasetid') +
        '&locationid=' + this.get('model.queryparams.locationid') + '&startdate=' +
        this.get('model.queryparams.startdate') +
        '&enddate=' + this.get('model.queryparams.enddate') +
        '&datatypeid=' + this.get('model.queryparams.datatypeid') +
        '&limit=' + this.get('model.queryparams.limit') +
        '&offset=' + this.get('model.queryparams.offset');
  }.property('model.queryparams.{datasetid,locationid,startdate,enddate,datatypeid,limit,offset}'),

  actions: {
    call: function() {
      this.set('response', 'Loading...')
      var self = this;
      Ember.$.ajax(this.get('url'), {
        headers: {
          token: 'YIYhcknQRmtBLMjEEWBdDHFcdJJOfJhq'
        }
      }).then(function(response) {
        self.set('response', JSON.stringify(response));
      }).fail(function() {
        self.set('response', 'Server error (see console for trace)');
        console.log(arguments);
      });
    }
  }

});
