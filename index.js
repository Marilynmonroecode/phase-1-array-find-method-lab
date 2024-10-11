function superbowlWin(record) {
    // Find the Superbowl winning record for the Denver Broncos
    const win = record.find(game => game.result === 'W');
    
    // Return the year as a string if a winning record is found; otherwise return undefined
    return win ? win.year.toString(2015) : undefined;
  }

