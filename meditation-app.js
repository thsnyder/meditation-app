class AudioPlayer {
  constructor() {
    this.audio = new Audio();
    this.player = document.querySelector('.audio-player');
    this.playPauseBtn = document.querySelector('.play-pause');
    this.prevBtn = document.querySelector('.prev');
    this.nextBtn = document.querySelector('.next');
    this.progressBar = document.querySelector('.progress-bar');
    this.progress = document.querySelector('.progress');
    this.currentTime = document.querySelector('.current-time');
    this.duration = document.querySelector('.duration');
    this.currentTitle = document.querySelector('.current-title');
    this.isPlaying = false;
    this.currentTrackIndex = -1;
    
    // Define available tracks
    this.tracks = [
      {
        title: 'Patch Tuesday Serenity',
        src: 'audio/patch-tuesday-serenity.mp3'
      },
      {
        title: 'The Ticket Queue is Empty',
        src: 'audio/the-ticket-queue-is-empty.mp3'
      }
    ];
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.playPauseBtn.addEventListener('click', () => this.togglePlay());
    this.prevBtn.addEventListener('click', () => this.playPrevious());
    this.nextBtn.addEventListener('click', () => this.playNext());
    this.progress.addEventListener('click', (e) => this.seek(e));
    
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
    this.audio.addEventListener('ended', () => this.onEnded());
  }

  loadTrack(track) {
    // Stop current playback if any
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    }

    this.audio.src = track.src;
    this.currentTitle.textContent = track.title;
    this.player.classList.add('visible');
    this.playPauseBtn.textContent = '▶';
    this.audio.load();
    
    // Update current track index
    this.currentTrackIndex = this.tracks.findIndex(t => t.src === track.src);
  }

  togglePlay() {
    if (this.audio.paused) {
      this.audio.play();
      this.playPauseBtn.textContent = '⏸';
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.playPauseBtn.textContent = '▶';
      this.isPlaying = false;
    }
  }

  updateProgress() {
    const percent = (this.audio.currentTime / this.audio.duration) * 100;
    this.progressBar.style.width = `${percent}%`;
    this.currentTime.textContent = this.formatTime(this.audio.currentTime);
  }

  updateDuration() {
    this.duration.textContent = this.formatTime(this.audio.duration);
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  seek(e) {
    const percent = e.offsetX / this.progress.offsetWidth;
    this.audio.currentTime = percent * this.audio.duration;
  }

  onEnded() {
    this.playPauseBtn.textContent = '▶';
    this.progressBar.style.width = '0%';
    this.isPlaying = false;
    this.playNext(); // Auto-play next track when current one ends
  }

  playPrevious() {
    if (this.currentTrackIndex > 0) {
      this.currentTrackIndex--;
      this.loadTrack(this.tracks[this.currentTrackIndex]);
      this.togglePlay();
    }
  }

  playNext() {
    if (this.currentTrackIndex < this.tracks.length - 1) {
      this.currentTrackIndex++;
      this.loadTrack(this.tracks[this.currentTrackIndex]);
      this.togglePlay();
    }
  }
}

// Initialize audio player
const player = new AudioPlayer();

// Add click handlers to all play buttons
document.querySelectorAll('.play-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const title = card.querySelector('.card-title').textContent;
    
    // Find the matching track
    const track = player.tracks.find(t => t.title === title);
    if (track) {
      player.loadTrack(track);
      player.togglePlay();
      
      // Update button state
      document.querySelectorAll('.play-button').forEach(btn => {
        btn.classList.remove('playing');
      });
      button.classList.add('playing');
    }
  });
}); 