class Helper {
    playPauseAndUpdate(song) {
      player.playPause(song);
      const trkDuration = player.prettyTime(player.getDuration());
      $('#time-control .total-time').text( trkDuration );
    }
};

const helper = new Helper();
