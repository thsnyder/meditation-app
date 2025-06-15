// Meditation tracks data
const meditationTracks = [
  {
    title: "🔄 Patch Tuesday Serenity",
    description: "Updates install flawlessly. Users restart without complaint. Bliss.",
    audio: "audio/patch-tuesday-serenity.mp3",
    duration: "7:30",
    tags: ["Release", "Peace", "Acceptance"],
    coverArt: "images/patch-tuesday-serenity.png"
  },
  {
    title: "📭 The Ticket Queue is Empty",
    description: "No new tickets. No follow-ups. Just silence.",
    audio: "audio/the-ticket-queue-is-empty.mp3",
    duration: "4:45",
    tags: ["Relief", "Calm", "Gratitude"],
    coverArt: "images/the-ticket-queue-is-empty.png"
  },
  {
    title: "🛡️ No One Changed the Firewall Rules",
    description: "Feel the harmony of untouched config and unbroken access.",
    audio: "audio/no-one-changed-the-firewall-rules.mp3",
    duration: "6:15",
    tags: ["Security", "Peace", "Stability"],
    coverArt: "images/no-one-changed-the-firewall-rules.png"
  },
  {
    title: "🎯 Zero Meetings, 100% Uptime",
    description: "The perfect day. Nothing breaks. No one calls.",
    audio: "audio/zero-meetings-100-uptime.mp3",
    duration: "5:00",
    tags: ["Focus", "Calm", "Control"],
    coverArt: "images/zero-meetings-100-uptime.png"
  },
  {
    title: "🖥️ Single Pane of Glass",
    description: "All systems unified. Nothing missed. The dashboard of dreams.",
    audio: "audio/single-pane-of-glass.mp3",
    duration: "7:15",
    tags: ["Vision", "Clarity", "Control"],
    coverArt: "images/single-pane-of-glass.png"
  },
  {
    title: "📚 Users Read the Documentation",
    description: "They follow instructions. Troubleshoot themselves. You rest easy.",
    audio: "audio/users-read-the-documentation.mp3",
    duration: "6:30",
    tags: ["Vision", "Independence", "Peace"],
    coverArt: "images/users-read-the-documentation.png"
  },
  {
    title: "🔄 End User Has Turned It Off and On Again",
    description: "The classic solution works. The ticket closes itself. Bliss.",
    audio: "audio/end-user-has-turned-it-off-and-on-again.mp3",
    duration: "5:45",
    tags: ["Relief", "Simplicity", "Gratitude"]
  },
  {
    title: "🌐 Everything Pings",
    description: "All systems respond. No timeouts. Just harmony.",
    audio: "audio/everything-pings.mp3",
    duration: "6:00",
    tags: ["Stability", "Peace", "Control"]
  },
  {
    title: "🔍 DNS is Resolving Perfectly",
    description: "No more 'cannot resolve hostname'. Just smooth sailing.",
    audio: "audio/dns-is-resolving-perfectly.mp3",
    duration: "5:30",
    tags: ["Relief", "Clarity", "Gratitude"]
  }
];

// Initialize the audio player
let currentTrack = 0;
let currentCategory = 0;
let isPlaying = false;
let audio = new Audio();

// Create cards for each category
function createCards() {
  const container = document.querySelector('.container');
  
  meditationTracks.forEach((category, categoryIndex) => {
    const section = document.createElement('div');
    section.className = 'mb-16';
    
    const heading = document.createElement('h2');
    heading.className = 'text-4xl font-bold text-primary mb-12 pb-4 border-b-4 border-primary inline-block';
    heading.textContent = category.category;
    
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
    
    category.tracks.forEach((track, trackIndex) => {
      const card = document.createElement('div');
      card.className = 'card';
      
      // Check if audio file exists
      const tempAudio = new Audio(track.audio);
      let isAudioAvailable = false;
      
      tempAudio.addEventListener('loadedmetadata', () => {
        const durationSpan = card.querySelector('.duration-display');
        if (durationSpan) {
          durationSpan.textContent = formatTime(tempAudio.duration);
        }
        isAudioAvailable = true;
        updatePlayButton(card, isAudioAvailable);
      });
      
      tempAudio.addEventListener('error', () => {
        isAudioAvailable = false;
        updatePlayButton(card, isAudioAvailable);
      });
      
      card.innerHTML = `
        <div class="card-content flex flex-col h-full">
          <div class="flex-grow">
            ${track.coverArt ? `
              <div class="mb-4 rounded-lg overflow-hidden">
                <img src="${track.coverArt}" alt="${track.title}" class="w-full h-48 object-cover">
              </div>
            ` : ''}
            <h2 class="text-2xl font-bold text-primary mb-4">${track.title}</h2>
            <p class="text-gray-700 mb-4">${track.description}</p>
            <div class="flex items-center gap-2 mb-6 flex-wrap">
              <span class="duration-display flex items-center text-sm text-gray-500">
                <i class="fas fa-clock mr-1"></i><span>Loading...</span>
              </span>
              ${track.tags.map(tag => `
                <span class="tag">${tag}</span>
              `).join('')}
            </div>
          </div>
          <div class="mt-auto">
            <button class="play-button w-full" data-category="${categoryIndex}" data-track="${trackIndex}">
              <i class="fas fa-play mr-2"></i>Play
            </button>
          </div>
        </div>
      `;
      
      grid.appendChild(card);
    });
    
    section.appendChild(heading);
    section.appendChild(grid);
    container.appendChild(section);
  });
}

// Update play button state based on audio availability
function updatePlayButton(card, isAvailable) {
  const button = card.querySelector('.play-button');
  if (!button) return;
  
  if (isAvailable) {
    button.classList.remove('opacity-50', 'cursor-not-allowed');
    button.classList.add('cursor-pointer');
    button.innerHTML = '<i class="fas fa-play mr-2"></i>Play';
    button.disabled = false;
  } else {
    button.classList.add('opacity-50', 'cursor-not-allowed');
    button.classList.remove('cursor-pointer');
    button.innerHTML = '<i class="fas fa-clock mr-2"></i>Coming Soon';
    button.disabled = true;
  }
}

// Initialize the audio player UI
function initAudioPlayer() {
  const audioPlayer = document.querySelector('.audio-player');
  const playPauseBtn = document.querySelector('.play-pause');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const progressBar = document.querySelector('.progress-bar');
  const currentTimeSpan = document.querySelector('.current-time');
  const durationSpan = document.querySelector('.duration');
  const currentTitleSpan = document.querySelector('.current-title');
  
  // Update progress bar
  audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
    currentTimeSpan.textContent = formatTime(audio.currentTime);
  });
  
  // Update duration
  audio.addEventListener('loadedmetadata', () => {
    durationSpan.textContent = formatTime(audio.duration);
  });
  
  // Play/Pause button
  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  
  // Previous button
  prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + meditationTracks[currentCategory].tracks.length) % meditationTracks[currentCategory].tracks.length;
    playTrack(currentCategory, currentTrack);
  });
  
  // Next button
  nextBtn.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % meditationTracks[currentCategory].tracks.length;
    playTrack(currentCategory, currentTrack);
  });
  
  // Progress bar click
  document.querySelector('.progress').addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pos * audio.duration;
  });

  // Handle audio state changes
  audio.addEventListener('play', () => {
    const playButton = playPauseBtn.querySelector('i');
    playButton.classList.remove('fa-play');
    playButton.classList.add('fa-pause');
  });

  audio.addEventListener('pause', () => {
    const playButton = playPauseBtn.querySelector('i');
    playButton.classList.remove('fa-pause');
    playButton.classList.add('fa-play');
  });

  audio.addEventListener('ended', () => {
    const playButton = playPauseBtn.querySelector('i');
    playButton.classList.remove('fa-pause');
    playButton.classList.add('fa-play');
    audioPlayer.classList.add('hidden');
    audioPlayer.classList.remove('visible');
  });
}

// Play a specific track
function playTrack(categoryIndex, trackIndex) {
  const track = meditationTracks[categoryIndex].tracks[trackIndex];
  if (!track.audio) {
    console.log('No audio available for this track');
    return;
  }

  currentTrack = trackIndex;
  currentCategory = categoryIndex;
  audio.src = track.audio;
  
  // Show the audio player
  const audioPlayer = document.querySelector('.audio-player');
  audioPlayer.classList.remove('hidden');
  audioPlayer.classList.add('visible');
  
  // Update the current title
  document.querySelector('.current-title').textContent = track.title;
  
  // Reset the progress bar
  document.querySelector('.progress-bar').style.width = '0%';
  document.querySelector('.current-time').textContent = '0:00';
  document.querySelector('.duration').textContent = '0:00';
  
  // Play the audio
  audio.play().catch(error => {
    console.error('Error playing audio:', error);
    // If there's an error, hide the audio player
    audioPlayer.classList.add('hidden');
    audioPlayer.classList.remove('visible');
  });
}

// Format time in MM:SS
function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  createCards();
  initAudioPlayer();
  
  // Add click handlers for play buttons
  document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', () => {
      const categoryIndex = parseInt(button.dataset.category);
      const trackIndex = parseInt(button.dataset.track);
      playTrack(categoryIndex, trackIndex);
    });
  });
}); 