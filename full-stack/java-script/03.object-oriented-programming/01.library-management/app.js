//Base class Media
class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      let sum = this.ratings.reduce((curr, prev) =>{
        return curr + prev;
      }, 0);
  
      //Round to one de.cimal place
      return Math.round((sum / this.ratings.length) * 10) / 10;
    }
  
    addRating(value) {
      if(value >= 1 && value <= 5){
        this._ratings.push(value);
      }
      else{
        console.log(`Incorrect rating value ${value}, rating should be between 1 and 5.`);
      }
    }
  
  }
  
  //Book class
  class Book extends Media {
    constructor (author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  //Movie class
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director  = director;
      this._runTime = runTime;
      this._movieCast = [];
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime
    }
  }
  
  //CD class
  class CD extends Media {
    constructor (artist, title, songs) {
      super(title);
      this._artist  = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  
    /**
     * Retruns randomly shuffled dongs
     * Algorithm Fisher-Yates shuffle
     */
    shuffle() {
      let  array = this.songs.concat();
      let i = array.length - 1;
      let randIndex;
  
      while(i > 0){
        randIndex = Math.floor(Math.random() * (i + 1));
        [array[randIndex], array[i]] = [array[i], array[randIndex]];
        i--;
      }
  
      return array;
    }
  }
  
  //Catalog class
  class Catalog {
    constructor() {
      this._medias = [];
    }
  
    get medias() {
      return this._medias;
    }
  
    addMedia(value) {
      this._medias.push(value);
    }
  }
  
  /**
   * Create a Book object
   * Author: 'Bill Bryson'
   * Title: 'A Short History of Nearly Everything'
   * pages: 544
   */
  console.log('=================Book===============');
  //Create a new Book object
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  //Toggle the checkstatus
  historyOfEverything.toggleCheckOutStatus();
  //Add three ratings
  const bookRatings = [4, 5, 5];
  bookRatings.forEach((v) =>{
    historyOfEverything.addRating(v);
  });
  
  //Display object information
  console.log(`Book Title   : ${historyOfEverything.title}`);
  console.log(`Book Author  : ${historyOfEverything.author}`);
  console.log(`No. Pages    : ${historyOfEverything.pages}`);
  console.log(`IsCheckedOut : ${historyOfEverything.isCheckedOut}`);
  console.log(`Avg. Rating  : ${historyOfEverything.getAverageRating()}`);
  
  /**
   * Create a Movie object
   * Director: 'Jan de Bont'
   * Title: 'Speed'
   * Runtime: 116
   */
  console.log('================Movie===============');
  //Create Movie object
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  //Toggle checkout status
  speed.toggleCheckOutStatus();
  //Add three ratings
  const movieRatings = [1, 1, 5];
  movieRatings.forEach((v) =>{
    speed.addRating(v);
  });
  
  //Display object information
  console.log(`Movie Title    : ${speed.title}`);
  console.log(`Movie Director : ${speed.director}`);
  console.log(`Run Time       : ${speed.runTime}`);
  console.log(`IsCheckedOut   : ${speed.isCheckedOut}`);
  console.log(`Avg. Rating    : ${speed.getAverageRating()}`);
  
  /**
   * Create CD object
   */
  console.log('=================CD=================');
  const songs = [
    'The Reason',
    'Why Oh Why',
    'Where is the Love',
    'Us',
    'I Hate You Then I Lov...',
    'Immortality',
    'Love Is on the Way',
    'When I Need You',
    'Just a Little Bit of Love',
    'To Love You More - R...'
  ];
  //Create CD object
  const letsTalkAboutLove = new CD('Celindion', "Let's Talk About Love", songs)
  //Add three ratings
  const cdRatings = [5, 5, 5];
  cdRatings.forEach((v) =>{
    letsTalkAboutLove.addRating(v);
  })
  
  //Display object information
  console.log(`CD Title     : ${letsTalkAboutLove.title}`);
  console.log(`CD Artist    : ${letsTalkAboutLove.artist}`);
  console.log(`IsCheckedOut : ${letsTalkAboutLove.isCheckedOut}`);
  console.log(`Avg. Rating  : ${letsTalkAboutLove.getAverageRating()}`);
  console.log('Shuffled songs:')
  letsTalkAboutLove.songs.forEach((s) => console.log(s));
  
  /**
   * Create a Catalog object and add all medias
   */
  console.log('================Catalog==============');
  const mediaCatalog = new Catalog();
  mediaCatalog.addMedia(historyOfEverything);//Add Book
  mediaCatalog.addMedia(speed);//Add Movie
  mediaCatalog.addMedia(letsTalkAboutLove);//Add CD
  
  console.log(`Total medias available: ${mediaCatalog.medias.length}`);
  
  