import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Pappy Van Winkle",
  question: "What is whiskey?",
  notes: "I'm not sure what the difference is between burbon and scotch."
}, {
  id: 2,
  author: "Buffalo Trace",
  question: "How is whiskey made?",
  notes: "Making whiskey seems very complicated."
}, {
  id: 3,
  author: "Bullet",
  question: "Why are some whiskey's more expensive than others?",
  notes: "There is such a large spread of prices."

}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
