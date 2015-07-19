import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      queryparams: {
        datasetid: 'GHCND',
        datatypeid: 'TMIN,TMAX,PRCP',
        locationid: 'ZIP:75080',
        startdate: '2015-01-01',
        enddate: '2015-01-02',
        limit: '25',
        offset: '0'
      }
    };
  }
});
