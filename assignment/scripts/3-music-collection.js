console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


let myCollection = [];

function addToCollection (collection, title, artist, yearPublished) {
  // your code here...
  let myrecord = {
    title: title,
    artist: artist,
    yearPublished: yearPublished

  };

  collection.push(myrecord);

  return myrecord
}
addToCollection(myCollection,"good girl gone bad", "Rihanna",2007);
addToCollection(myCollection,"a girl like me", "Rihanna",2006);
addToCollection(myCollection,"1989","Taylor Swift",2014);
addToCollection(myCollection,"Red","Taylor Swift",2012);
addToCollection(myCollection,"SO SICK"," NE-YO",2006);
addToCollection(myCollection,"MISS INDEPENDENT"," NE-YO",2008);


console.log(myCollection)



function showCollection (collection){
for (let index = 0; index < collection.length; index++) {
  const element = collection[index];
  console.log(`${element.title} by ${element.artist}, published in ${element.yearPublished}`)
}
}
showCollection(myCollection);

function findByArtist(collection,artist){
  const result = []
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];

    if (element.artist === artist){
     result.push(element)
    }
  }
return result;
}
findByArtist(myCollection,"Taylor Swift");

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
