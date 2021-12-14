"use strict";
const getVoteCount = function (obj) {
  const votes = obj.upvotes - obj.downvotes;
  console.log(votes);
  return votes;
};

getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
