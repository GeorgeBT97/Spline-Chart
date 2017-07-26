import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { MyCollection } from '/imports/both/MyCollection';

Meteor.startup(() => {
  const data = {
  "Bill" : {
    "Soveriegn" : {
      "CAD" : {
        "Short" : {
          "Low" : {
            "High" : {
              "N" : {
                "IssueCountry_7" : {
                  "IssueName_16" : {
                    "CA130Z7821" : {
                      "Concentration" : 9,
                      "ConcentrationTier1" : 3,
                      "ConcentrationTier2" : 6,
                      "LargestTicket" : 394,
                      "Maturity" : 234,
                      "Outstanding" : 34,
                      "SmallestTicket" : 3524,
                      "Turnover" : 4,
                      "TurnoverTier1" : 1,
                      "TurnoverTier2" : 54
                    },
                    "CA150Z7241" : {
                      "Concentration" : 11,
                      "ConcentrationTier1" : 6,
                      "ConcentrationTier2" : 5,
                      "LargestTicket" : 6653,
                      "Maturity" : 535,
                      "Outstanding" : 6379,
                      "SmallestTicket" : 365,
                      "Turnover" : 175,
                      "TurnoverTier1" : 8,
                      "TurnoverTier2" : 166
                    },
                    "CA130Z7654" : {
                      "Concentration" : 4,
                      "ConcentrationTier1" : 3,
                      "ConcentrationTier2" : 1,
                      "LargestTicket" : 135,
                      "Maturity" : 666,
                      "Outstanding" : 3575,
                      "SmallestTicket" : 643,
                      "Turnover" : 23,
                      "TurnoverTier1" : 6,
                      "TurnoverTier2" : 18
                    },
                    "CA150Z7Z82" : {
                      "Concentration" : 0,
                      "ConcentrationTier1" : 0,
                      "ConcentrationTier2" : 0,
                      "LargestTicket" : 0,
                      "Maturity" : 321,
                      "Outstanding" : 2103,
                      "SmallestTicket" : 0,
                      "Turnover" : 0,
                      "TurnoverTier1" : 0,
                      "TurnoverTier2" : 0
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
  MyCollection.remove(); // Delete all data from collection
  MyCollection.insert(data); // Load data into collection
});

Meteor.publish('someData', function publishSomeData() {
  return MyCollection.find();
});
