'use strict'

// A Library has a name and a creator (both strings)
function Library(libname, creator){
    this.libname = libname;
    this.creator = creator;
    //A Library has many playlists (starts as an empty array)
    this.playlists = [];
}

//add playlist to library
Library.prototype.addPlaylist = function(){
    if(pl instanceof Playlist){
        this.playlists.push(pl);
    }
}

//Each Playlist has a name which is required upon creation
function Playlist(name){
    this.name = name;
    //A Playlist also has many tracks
    this.tracks = [];
}

//add track to playlist
Playlist.prototype.addTrack = function() {
    if(tr instanceof Track){
        this.tracks.push(tr);
    }
}

// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
Playlist.prototype.overallRating = function() {
    let sum = 0;
    this.tracks.forEach((track) => {
        sum += track.rating;
    })
    return sum / this.tracks.length;
}

// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
Playlist.prototype.totalDuration = function() {
    let total = 0;
    this.tracks.forEach((track) => {
        total += track.length;
    })
    return total;
}

//A Track has a title, a rating (an integer from 1 to 5) and 
//a length (integer in seconds) all of which are required when creating a new track
function Track(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
}

/////////////////////////////////////////////////////////////////////////////////////////////////

const musiclib = new Library("LHL","Brian");
const playlist = new Playlist("Pain");
const track = new Track("cry to death", 5, 180);

playlist.addTrack(track);
musiclib.addPlaylist(playlist);