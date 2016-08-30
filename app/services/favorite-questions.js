import Ember from 'ember';

export default Ember.Service.extend({
  questions: null,

  init() {
    this.set('questions', []);
  },

  add(question) {
    this.get('questions').pushObject(question);
  },
  remove(question) {
    this.get('questions').removeObject(question);
  },
  empty() {
    this.get('questions').clear();
  }
});
