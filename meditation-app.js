// Meditation tracks data
const meditationTracks = [
  {
    category: "Daily De-Stress Sessions",
    tracks: [
      {
        title: "🔄 Patch Tuesday Serenity",
        description: "Updates install flawlessly. Users restart without complaint. Bliss.",
        audio: "audio/patch-tuesday-serenity.mp3",
        duration: "7:30",
        tags: ["Release", "Peace", "Acceptance"]
      },
      {
        title: "📭 The Ticket Queue is Empty",
        description: "No new tickets. No follow-ups. Just silence.",
        audio: "audio/the-ticket-queue-is-empty.mp3",
        duration: "4:45",
        tags: ["Relief", "Calm", "Gratitude"]
      },
      {
        title: "🛡️ No One Changed the Firewall Rules",
        description: "Feel the harmony of untouched config and unbroken access.",
        audio: "audio/no-one-changed-the-firewall-rules.mp3",
        duration: "6:15",
        tags: ["Security", "Peace", "Stability"]
      }
    ]
  },
  {
    category: "Crisis Calming Interventions",
    tracks: [
      {
        title: "🌐 DNS is Resolving Perfectly",
        description: "Names become IPs. Fast. Effortless. Divine.",
        audio: "audio/dns-is-resolving-perfectly.mp3",
        duration: "5:30",
        tags: ["Emergency", "Focus", "Resolution"]
      },
      {
        title: "📡 Everything Pings",
        description: "Every server. Every time. Echo replies of peace.",
        audio: "audio/everything-pings.mp3",
        duration: "4:15",
        tags: ["Network", "Relief", "Stability"]
      },
      {
        title: "🔄 End User Has Turned It Off and On Again",
        description: "Without being asked. Harmony has been achieved.",
        audio: "audio/restart.mp3",
        duration: "3:45",
        tags: ["Quick Fix", "Relief", "Gratitude"]
      }
    ]
  },
  {
    category: "Vision Boards for Ideal IT States",
    tracks: [
      {
        title: "📊 Zero Meetings, 100% Uptime",
        description: "Slack is silent. Zoom is down. But everything just works.",
        audio: "audio/zero-meetings-100-uptime.mp3",
        duration: "8:00",
        tags: ["Vision", "Peace", "Productivity"],
        coverArt: "images/zero-meetings-100-uptime.png"
      },
      {
        title: "🖥️ Single Pane of Glass",
        description: "All systems unified. Nothing missed. The dashboard of dreams.",
        audio: "audio/single-pane.mp3",
        duration: "7:15",
        tags: ["Vision", "Clarity", "Control"]
      },
      {
        title: "📚 Users Read the Documentation",
        description: "They follow instructions. Troubleshoot themselves. You rest easy.",
        audio: "audio/users-read-docs.mp3",
        duration: "6:30",
        tags: ["Vision", "Independence", "Peace"]
      }
    ]
  },
  {
    category: "Emergency Grounding Tracks",
    tracks: [
      {
        title: "🧘 The Outage is Not Your Fault",
        description: "Let go of guilt. Accept the chaos. You didn't break it.",
        audio: "audio/not-your-fault.mp3",
        duration: "5:45",
        tags: ["Emergency", "Acceptance", "Release"]
      },
      {
        title: "👑 The CEO Forgot Their Password Again",
        description: "It's okay. Reset it. Repeat the cycle. Smile.",
        audio: "audio/ceo-password.mp3",
        duration: "4:30",
        tags: ["Emergency", "Patience", "Humor"]
      },
      {
        title: "🔒 VPN Just Works",
        description: "Remote users log in. No calls. No complaints. Just peace.",
        audio: "audio/vpn-works.mp3",
        duration: "5:15",
        tags: ["Emergency", "Relief", "Stability"]
      }
    ]
  },
  {
    category: "Bonus Tracks",
    tracks: [
      {
        title: "🖥️ Zen and the Art of Server Maintenance",
        description: "The fans whisper. The logs are clean. The Zen flows.",
        audio: "audio/server-maintenance.mp3",
        duration: "8:30",
        tags: ["Maintenance", "Peace", "Flow"]
      },
      {
        title: "⌨️ Ctrl + Alt + Delete Your Stress",
        description: "Reboot your soul. Force quit your anxiety.",
        audio: "audio/ctrl-alt-delete.mp3",
        duration: "6:45",
        tags: ["Quick Fix", "Release", "Reset"]
      },
      {
        title: "🔑 Esc… Just Esc",
        description: "The escape key is a path to enlightenment.",
        audio: "audio/just-esc.mp3",
        duration: "4:00",
        tags: ["Quick Fix", "Release", "Simplicity"]
      },
      {
        title: "🔔 Let That Alert Go",
        description: "You've seen the log. You've acknowledged it. Let it float away.",
        audio: "audio/let-alert-go.mp3",
        duration: "5:15",
        tags: ["Release", "Acceptance", "Peace"]
      },
      {
        title: "📶 Ping. Pong. Peace.",
        description: "Find rhythm in uptime. Back and forth. Connection eternal.",
        audio: "audio/ping-pong.mp3",
        duration: "4:45",
        tags: ["Rhythm", "Connection", "Flow"]
      },
      {
        title: "📈 SLA Nirvana",
        description: "99.999% uptime. Promised. Delivered. Enlightenment guaranteed.",
        audio: "audio/sla-nirvana.mp3",
        duration: "7:00",
        tags: ["Achievement", "Success", "Peace"]
      }
    ]
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
            <div class="flex items-center mb-4">
              <span class="text-sm text-gray-500">
                <i class="fas fa-clock mr-1"></i><span class="duration-display">Loading...</span>
              </span>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
              ${track.tags.map(tag => `
                <span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">${tag}</span>
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