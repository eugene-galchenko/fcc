// Build a Playlist Remix Engine
// In this lab, you will build a program that creates a single remix playlist from multiple playlists submitted by listeners.

// Each listener provides a list of songs they want to hear. Some songs may appear more than once, and some artists may show up too many times. Your job is to work through these playlists step by step: combine them into one list, score each song, remove duplicate songs, limit how often the same artist appears, and then create a final play order.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should create a function named flattenPlaylists that accepts an array of playlists where each playlist is an array of objects with the following properties: trackId, artist, title, votes, bpm. If the input is not an array, flattenPlaylists should return an empty array. An example playlist has been provided for you. You can use this example to test out your function.

// flattenPlaylists should return a flat array of track objects, where each object includes all the original track properties plus a source property set to an array with the playlist index and the track index indicating where the track originated.

// You should create a function named scoreTracks that accepts an array of track objects as returned by flattenPlaylists (each with trackId, artist, title, votes, bpm, and source properties) and returns a new array of track objects, each with a score property added using the formula: votes * 10 - Math.abs(bpm - 120).

// You should create a function named dedupeTracks that accepts an array of track objects as returned by scoreTracks and returns a new array with duplicate trackId entries removed, keeping only the first occurrence of each.

// You should create a function named enforceArtistQuota that accepts an array of track objects as returned by dedupeTracks and a number representing the maximum allowed occurrences per artist. The function should return a new array where no artist appears more times than the given number, keeping the earliest occurrences.

// You should create a function named buildSchedule that accepts an array of track objects as returned by enforceArtistQuota and returns a new array of { slot, trackId } objects, where slot is a 1-based index representing each track's position in the broadcast order.

// You should create a function named remixPlaylist that accepts an array of playlists and the maximum number of allowed occurrences per artist. The function should return the final broadcast schedule as an array of { slot, trackId } objects, by calling flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order.

// Tests:
// Waiting:1. You should have a function named flattenPlaylists.
// Waiting:2. You should return an empty array from flattenPlaylists when the input is not an array.
// Waiting:3. Each track returned by flattenPlaylists should include a source field that is an array containing the playlist index and the track index.
// Waiting:4. You should have a function named scoreTracks.
// Waiting:5. Each track returned by scoreTracks should include a numeric score field.
// Waiting:6. You should calculate score using a target BPM of 120 and this formula: votes * 10 - Math.abs(bpm - 120).
// Waiting:7. You should have a function named dedupeTracks.
// Waiting:8. When duplicate trackId values exist, dedupeTracks should keep only the first occurrence of the track.
// Waiting:9. You should have a function named enforceArtistQuota.
// Waiting:10. enforceArtistQuota should ensure no artist appears more than maxPerArtist times by removing extra tracks while keeping the earliest ones.
// Waiting:11. You should have a function named buildSchedule.
// Waiting:12. buildSchedule should return an array of objects with the shape { slot, trackId }, where slot starts at 1.
// Waiting:13. You should have a function named remixPlaylist.
// Waiting:14. remixPlaylist should call the helper functions in order to produce the final schedule.

const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists){
  let result = [];
  if(!Array.isArray(playlists)){
    return result;
  }

  for (let i = 0; i < playlists.length; i++){
      const playlist = playlists[i];
        for (let j = 0; j < playlist.length; j++){
          const track = playlist[j];
          result.push({
            ...track,
            source:[i,j]
          })
        }
  }
  return result;
}

function scoreTracks(tracks){
  let result = [];
  for (let i = 0; i < tracks.length; i++){
    const track = tracks[i];
    const score = track.votes * 10 - Math.abs(track.bpm - 120);
    result.push({
      ...track,
      score: score
    })
  }
  return result
}

function dedupeTracks(tracks){
  let result = [];
  
  for (const track of tracks){
    let isDuplicate = false;

      for (const existing of result){
        if(existing.trackId === track.trackId){
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate){
        result.push(track);
      }
  }
  return result;
}

function enforceArtistQuota (tracks, maxPerArtist){
  let result = [];
  let counts = {};

  for (const track of tracks){
    const artist = track.artist;
    const current = counts[artist] || 0;

    if (current < maxPerArtist){
      result.push(track);
      counts[artist] = current + 1;
    }
  }
  return result;
}

function buildSchedule(tracks){
  const result = [];

  for (let i = 0; i < tracks.length; i++){
    result.push({
      slot: i+1,
      trackId: tracks[i].trackId
    });
  }

  return result;
}

function remixPlaylist(playlists, maxPerArtist){
  const flat = flattenPlaylists(playlists);
  const scored = scoreTracks(flat);
  const deduped = dedupeTracks(scored);
  const quota = enforceArtistQuota(deduped, maxPerArtist);
  const schedule = buildSchedule(quota);

  return schedule;
}