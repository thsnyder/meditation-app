// App configuration
const appConfig = {
  title: "CISO Meditation Suite",
  subtitle: "Existential Security & Risk Management",
  description: "A collection of guided meditations for the perpetually vigilant. Because sometimes the only thing between you and a breach is your ability to breathe.",
  categories: [
    {
      name: "Risk Management Serenity",
      description: "Find peace in the chaos of compliance and audits."
    },
    {
      name: "Board Room Calm",
      description: "Navigate the treacherous waters of executive communication."
    },
    {
      name: "Incident Response Recovery",
      description: "Recover from the trauma of security incidents."
    },
    {
      name: "Compliance Meditation",
      description: "Embrace the eternal cycle of documentation and verification."
    },
    {
      name: "Existential Security",
      description: "Question everything, trust nothing, find peace in paranoia."
    }
  ]
};

// Meditation tracks data
const meditationTracks = [
  {
    category: "Risk Management Serenity",
    tracks: [
      {
        title: "🔒 No One's Asking for MFA Exceptions Today",
        description: "User resistance has stopped. You are finally the threat model.",
        audio: "audio/mfa-exceptions.mp3",
        duration: "7:30",
        tags: ["Compliance", "Control", "Acceptance"],
        coverArt: "images/mfa-exceptions.png"
      },
      {
        title: "📊 Audit Complete, Findings: Minor",
        description: "You've passed. Somehow. Sleep now, warrior.",
        audio: "audio/audit-complete.mp3",
        duration: "6:45",
        tags: ["Relief", "Validation", "Exhaustion"],
        coverArt: "images/audit-complete.png"
      },
      {
        title: "🌙 No Breaches Reported Overnight",
        description: "SIEM is quiet. Or is it lying? Either way, rest for now.",
        audio: "audio/no-breaches.mp3",
        duration: "8:15",
        tags: ["Vigilance", "Paranoia", "Peace"],
        coverArt: "images/no-breaches.png"
      }
    ]
  },
  {
    category: "Board Room Calm",
    tracks: [
      {
        title: "👥 You Made the Board Care (Briefly)",
        description: "They nodded. They asked a follow-up. You felt... seen.",
        audio: "audio/board-care.mp3",
        duration: "5:30",
        tags: ["Validation", "Recognition", "Momentary Peace"],
        coverArt: "images/board-care.png"
      },
      {
        title: "📈 Budget Approved, No Questions Asked",
        description: "The impossible has happened. Breathe it in.",
        audio: "audio/budget-approved.mp3",
        duration: "4:45",
        tags: ["Victory", "Relief", "Disbelief"],
        coverArt: "images/budget-approved.png"
      },
      {
        title: "🎯 Risk Metrics All Green (For Now)",
        description: "The dashboard lies. But let's pretend it doesn't.",
        audio: "audio/risk-metrics.mp3",
        duration: "6:00",
        tags: ["Control", "Illusion", "Peace"],
        coverArt: "images/risk-metrics.png"
      }
    ]
  },
  {
    category: "Incident Response Recovery",
    tracks: [
      {
        title: "🔍 The Intern Didn't Open the Phishing Email",
        description: "Awareness training... worked?",
        audio: "audio/intern-phishing.mp3",
        duration: "5:15",
        tags: ["Success", "Disbelief", "Relief"],
        coverArt: "images/intern-phishing.png"
      },
      {
        title: "🛡️ All Endpoints Are Patched (Allegedly)",
        description: "Believe. Or don't. What matters is the illusion of control.",
        audio: "audio/endpoints-patched.mp3",
        duration: "7:00",
        tags: ["Control", "Paranoia", "Acceptance"],
        coverArt: "images/endpoints-patched.png"
      },
      {
        title: "🔐 Zero Critical Vulnerabilities Today",
        description: "The scanner says you're safe. The scanner might be wrong.",
        audio: "audio/zero-vulns.mp3",
        duration: "6:30",
        tags: ["Relief", "Suspicion", "Peace"],
        coverArt: "images/zero-vulns.png"
      }
    ]
  },
  {
    category: "Compliance Meditation",
    tracks: [
      {
        title: "📜 GDPR Documentation Complete",
        description: "The paperwork is done. The auditors are satisfied. For now.",
        audio: "audio/gdpr-complete.mp3",
        duration: "8:00",
        tags: ["Compliance", "Relief", "Temporary Peace"],
        coverArt: "images/gdpr-complete.png"
      },
      {
        title: "🔍 SOC 2 Controls Verified",
        description: "Everything is documented. Everything is evidence.",
        audio: "audio/soc2-verified.mp3",
        duration: "7:15",
        tags: ["Compliance", "Control", "Validation"],
        coverArt: "images/soc2-verified.png"
      },
      {
        title: "📋 Vendor Security Assessment Passed",
        description: "Third-party risk is contained. For this moment.",
        audio: "audio/vendor-assessment.mp3",
        duration: "6:45",
        tags: ["Risk", "Control", "Relief"],
        coverArt: "images/vendor-assessment.png"
      }
    ]
  },
  {
    category: "Existential Security",
    tracks: [
      {
        title: "🌐 The Firewall is Your Friend",
        description: "It blocks. It allows. It judges. It protects.",
        audio: "audio/firewall-friend.mp3",
        duration: "7:30",
        tags: ["Security", "Trust", "Paranoia"],
        coverArt: "images/firewall-friend.png"
      },
      {
        title: "🔐 Encryption is Working (Probably)",
        description: "The math is sound. The implementation is... acceptable.",
        audio: "audio/encryption-working.mp3",
        duration: "6:15",
        tags: ["Security", "Trust", "Doubt"],
        coverArt: "images/encryption-working.png"
      },
      {
        title: "📊 Threat Intel is Quiet",
        description: "No new APTs. No zero-days. Just... silence.",
        audio: "audio/threat-intel.mp3",
        duration: "5:45",
        tags: ["Vigilance", "Peace", "Suspicion"],
        coverArt: "images/threat-intel.png"
      },
      {
        title: "🛡️ The Security Stack is Complete",
        description: "You have all the tools. They might even work.",
        audio: "audio/security-stack.mp3",
        duration: "6:30",
        tags: ["Control", "Paranoia", "Acceptance"],
        coverArt: "images/security-stack.png"
      },
      {
        title: "🔍 Logs Show Nothing Suspicious",
        description: "Either you're secure, or they're really good.",
        audio: "audio/logs-clean.mp3",
        duration: "5:15",
        tags: ["Vigilance", "Paranoia", "Peace"],
        coverArt: "images/logs-clean.png"
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

// PANIC CALM™ Functionality
const panicButton = document.getElementById('panicButton');
const panicModal = document.getElementById('panicModal');
const panicSession = document.getElementById('panicSession');
const beginCalmButton = document.getElementById('beginCalm');
const panicOptions = document.querySelectorAll('.panic-option');
const progressBar = document.querySelector('.progress-bar');
const affirmationElement = document.querySelector('.affirmation');

const affirmations = [
  "The logs will tell the story. Eventually.",
  "At least it's not a Friday deployment.",
  "The backup of the backup has a backup.",
  "This is why we have insurance.",
  "The cloud is someone else's computer. They'll fix it.",
  "The incident response plan exists for a reason.",
  "The board doesn't know what DNS is anyway.",
  "This is why we get paid the big bucks.",
  "The audit will find someone else to blame.",
  "At least it's not a zero-day. Yet."
];

let selectedTrigger = null;
let sessionInterval = null;

// Open modal
panicButton.addEventListener('click', () => {
  panicModal.classList.add('active');
});

// Handle option selection
panicOptions.forEach(option => {
  option.addEventListener('click', () => {
    panicOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    selectedTrigger = option.dataset.trigger;
    beginCalmButton.disabled = false;
  });
});

// Begin calm session
beginCalmButton.addEventListener('click', () => {
  panicModal.classList.remove('active');
  panicSession.classList.add('active');
  
  let progress = 0;
  let affirmationIndex = 0;
  
  sessionInterval = setInterval(() => {
    progress += 1;
    progressBar.style.width = `${progress}%`;
    
    if (progress % 10 === 0) {
      affirmationElement.textContent = affirmations[affirmationIndex];
      affirmationIndex = (affirmationIndex + 1) % affirmations.length;
    }
    
    if (progress >= 100) {
      clearInterval(sessionInterval);
      setTimeout(() => {
        panicSession.classList.remove('active');
        progressBar.style.width = '0%';
        selectedTrigger = null;
        beginCalmButton.disabled = true;
        panicOptions.forEach(opt => opt.classList.remove('selected'));
      }, 1000);
    }
  }, 90); // 90 seconds total
});

// Share functionality
document.querySelector('.share-button.slack').addEventListener('click', () => {
  const message = `Launched Panic Calm™ after ${selectedTrigger === '2fa' ? '2FA was bypassed' :
    selectedTrigger === 'cve' ? 'a critical CVE dropped' :
    selectedTrigger === 'slack' ? 'seeing a "quick question" in Slack' :
    'opening Jira'}.`;
  // Implement Slack sharing
  console.log('Share to Slack:', message);
});

document.querySelector('.share-button.linkedin').addEventListener('click', () => {
  const message = `Launched Panic Calm™ after ${selectedTrigger === '2fa' ? '2FA was bypassed' :
    selectedTrigger === 'cve' ? 'a critical CVE dropped' :
    selectedTrigger === 'slack' ? 'seeing a "quick question" in Slack' :
    'opening Jira'}.`;
  // Implement LinkedIn sharing
  console.log('Share to LinkedIn:', message);
});

// Patch Notes for the Soul
const patchNotes = [
  {
    version: '🛠 v3.2.1 – "Please Hold" Release',
    changes: [
      'Paused intrusive thoughts during Zoom updates',
      'Reduced severity of Slack messages sent after 10pm',
      'Added grace period for coffee delays'
    ],
    meditation: 'You Made the Board Care (Briefly)'
  },
  {
    version: '🔐 v5.0.0 – "Zero Trust, Full Burnout" Patch',
    changes: [
      'Hardened mental defenses against vague Jira tickets',
      'Removed unnecessary emotional logging',
      'Finally accepted that no one reads the SOC2 report'
    ],
    meditation: 'The Audit is Coming (From Within)'
  },
  {
    version: '🧘 v6.9.4 – "Spiritual Hotfix"',
    changes: [
      'Mitigated mild imposter syndrome via deep breathing',
      'Upgraded patience module (temporary)',
      'Rate-limited eye twitch to 5 per hour'
    ],
    meditation: 'Finding Zen in the Logs'
  },
  {
    version: '🔄 v4.2.0 – "Incident Response" Update',
    changes: [
      'Implemented emergency coffee protocol',
      'Reduced alert fatigue by 42%',
      'Added support for 3am existential crises'
    ],
    meditation: 'The On-Call Never Ends'
  },
  {
    version: '🔒 v7.1.3 – "Security Theater" Release',
    changes: [
      'Enhanced compliance documentation visualization',
      'Optimized security awareness training avoidance',
      'Added new layer of security by obscurity'
    ],
    meditation: 'Compliance is a State of Mind'
  }
];

let currentPatchIndex = 0;
const patchNoteCard = document.querySelector('.patch-note-card');
const sharePatchButton = document.querySelector('.share-patch');
const savePatchButton = document.querySelector('.save-patch');

function updatePatchNote() {
  const patch = patchNotes[currentPatchIndex];
  
  patchNoteCard.innerHTML = `
    <div class="patch-note-header">
      <h3 class="version">${patch.version}</h3>
      <div class="patch-actions">
        <button class="share-patch" title="Share to Slack or LinkedIn">🔁</button>
        <button class="save-patch" title="Save to Favorites">💾</button>
      </div>
    </div>
    <ul class="patch-changes">
      ${patch.changes.map(change => `<li>${change}</li>`).join('')}
    </ul>
    <div class="patch-footer">
      <a href="#" class="suggested-meditation">
        🎧 Suggested meditation: "${patch.meditation}"
      </a>
    </div>
  `;
  
  // Reattach event listeners
  attachPatchNoteListeners();
}

function attachPatchNoteListeners() {
  const shareButton = patchNoteCard.querySelector('.share-patch');
  const saveButton = patchNoteCard.querySelector('.save-patch');
  const meditationLink = patchNoteCard.querySelector('.suggested-meditation');
  
  shareButton.addEventListener('click', () => {
    const patch = patchNotes[currentPatchIndex];
    const message = `📄 Patch Notes for the Soul\n\n${patch.version}\n\n${patch.changes.join('\n')}\n\n🎧 Suggested meditation: "${patch.meditation}"`;
    
    // Create share modal
    const shareModal = document.createElement('div');
    shareModal.className = 'share-modal';
    shareModal.innerHTML = `
      <div class="share-modal-content">
        <h3>Share Patch Notes</h3>
        <div class="share-options">
          <button class="share-button slack">Share to Slack</button>
          <button class="share-button linkedin">Share to LinkedIn</button>
        </div>
        <button class="close-modal">×</button>
      </div>
    `;
    
    document.body.appendChild(shareModal);
    
    // Handle share options
    shareModal.querySelector('.share-button.slack').addEventListener('click', () => {
      console.log('Share to Slack:', message);
      shareModal.remove();
    });
    
    shareModal.querySelector('.share-button.linkedin').addEventListener('click', () => {
      console.log('Share to LinkedIn:', message);
      shareModal.remove();
    });
    
    shareModal.querySelector('.close-modal').addEventListener('click', () => {
      shareModal.remove();
    });
  });
  
  saveButton.addEventListener('click', () => {
    const patch = patchNotes[currentPatchIndex];
    // Implement save functionality
    console.log('Save patch:', patch);
    saveButton.textContent = '✓';
    setTimeout(() => {
      saveButton.textContent = '💾';
    }, 2000);
  });
  
  meditationLink.addEventListener('click', (e) => {
    e.preventDefault();
    const patch = patchNotes[currentPatchIndex];
    // Implement meditation navigation
    console.log('Navigate to meditation:', patch.meditation);
  });
}

// Rotate patch notes every 30 seconds
setInterval(() => {
  currentPatchIndex = (currentPatchIndex + 1) % patchNotes.length;
  updatePatchNote();
}, 30000);

// Initial patch note
updatePatchNote();

// Release Notes Modal
const releaseNotesButton = document.querySelector('.release-notes-button');
const releaseNotesModal = document.querySelector('.release-notes-modal');
const modalCloseButton = releaseNotesModal.querySelector('.close-modal');

releaseNotesButton.addEventListener('click', () => {
  releaseNotesModal.classList.add('active');
  // Reset to first patch note when opening
  currentPatchIndex = 0;
  updatePatchNote();
});

modalCloseButton.addEventListener('click', () => {
  releaseNotesModal.classList.remove('active');
});

// Close modal when clicking outside
releaseNotesModal.addEventListener('click', (e) => {
  if (e.target === releaseNotesModal) {
    releaseNotesModal.classList.remove('active');
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && releaseNotesModal.classList.contains('active')) {
    releaseNotesModal.classList.remove('active');
  }
}); 