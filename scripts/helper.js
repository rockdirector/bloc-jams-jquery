class Helper {
    playPauseAndUpdate(song) {
      player.playPause(song);
      const trkDuration = player.prettyTime(player.currentlyPlaying.duration);
    }
};

const helper = new Helper();
