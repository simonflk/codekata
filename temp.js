function foundationMessage(message) {
  //split the message into its sentences
  let messagePieces = message.split(/[.?!]+/).filter((piece) => piece !== '');
  //final coded message
  let finalMessage = '';

  const createASentence = (messageArray) => {
    //create a sentence variable
    let sentence = '';
    //grab the first index of the messageArray to use as a key string
    let messageKeySentence = messageArray.slice(0, 1)[0];
    //remove the key from the bank
    messageArray.splice(0, 1);
    //split the key string into it an array, remove anything thats not a letter, filter empty elements
    let keyPieces = messageKeySentence
      .split(' ')
      .map((element) => element.replace(/[^a-zA-Z]/, ''))
      .filter((element) => element !== '');
    //loop the keys array
    keyPieces.forEach((key, index) => {
      //track the length of the key
      key = key.replace(/["',]/g, '');
      let keyLength = key.length - 1;
      console.log(
        messageArray[index]
          .split(' ')
          .filter((element) => element !== '' && element !== '-'),
      );
      let codecArray = messageArray[index]
        .split(' ')
        .filter((element) => element !== '' && element !== '-');

      let word = (
        codecArray[keyLength].replace(/[",]/g, '') +
        (index === keyPieces.length - 1 ? '.' : '')
      )
        .replace(/[",]/g, '')
        .toLowerCase();

      if (index === keyPieces.length - 1) {
        messagePieces.splice(0, index + 1);
      }
      if (index === 0) {
        let firstChar = word.charAt(0);
        let cappedWord = firstChar.toUpperCase() + word.slice(1);
        sentence = sentence + cappedWord + ' ';
      } else {
        sentence = sentence + word + ' ';
      }
    });

    finalMessage = finalMessage + sentence;
  };

  while (messagePieces.length > 0) {
    createASentence(messagePieces);
  }

  return finalMessage.trim();
}
