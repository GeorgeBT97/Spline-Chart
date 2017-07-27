import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { MyCollection } from '/imports/both/MyCollection';

Meteor.startup(() => {
  const data = {
    ******THIS IS WHERE THE DATA NEEDS TO BE INSERTED INTO MONGODB******
  }
  MyCollection.remove(); // Delete all data from collection
  MyCollection.insert(data); // Load data into collection
});

Meteor.publish('someData', function publishSomeData() {
  return MyCollection.find();
});
