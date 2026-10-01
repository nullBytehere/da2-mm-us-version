/* ==========================================================
   REPO BASE LINKS
   The common "front part" of your GitHub release links, kept
   here once. If a repo is renamed or you move releases to a
   different repo, change the link here and every button below
   updates automatically — no need to touch each item.
   ========================================================== */
var REPO = {
  da2ppl: "https://github.com/nullBytehere/da2ppl/",
  latRe: "/releases/latest"
};

/* ==========================================================
   WEBSITE CONFIG  (only edit this file to change content)
   ========================================================== */
window.SITE_CONFIG = {

  site: {
    name: "DA2 MM PPL Edition"
  },

  /* 1. COLOR PALETTE */
  colors: {
    "--bg": "#0b0c0e",
    "--container": "#0f1114",
    "--container-open": "#171a1e",
    "--card": "#13161a",
    "--card-2": "#1b1f24",
    "--pill": "#1c2127",
    "--line": "rgba(255,255,255,.08)",
    "--text": "#ffffff",
    "--muted": "#8a9099",
    "--accent": "#10b981",
    "--accent-strong": "#1ed760",
    "--accent-glow": "rgba(30,215,96,.35)"
  },

  /* 2. IMAGES (put files inside assets/images/) */
  images: {
    logo: "assets/images/avatar.png",
    discordAvatar: "assets/images/discord.png",
    heroBg: "assets/images/hero.jpg"
  },

  /* 3. NAVBAR LINKS ("#/..." = inside site, full URL = external) */
  nav: [{
      label: "Home",
      href: "#/"
    },
    {
      label: "Browse",
      href: "#/browse"
    },
    {
      label: "Discord",
      href: "https://nullbytehere.github.io/zerosrv/",
      external: true,
      pill: true
    }
  ],

  hero: {
    welcome: "Welcome To DA2 MM PPL",
    title: [{
        text: "DOODLE ARMY 2",
        color: "accent"
      },
      {
        text: "MINI MILITIA PPL",
        color: "white"
      },
      {
        text: "EDITION",
        color: "accent"
      }
    ],
    buttonText: "Download"
  },

  /* 4. ALL THINGS SECTION */
  allThings: {
    visibleCount: 3,
    showText: "Show Extra Library",
    hideText: "Hide Extra Library"
  },

  /* Add as many items as you like. The first 3 are visible,
     the rest appear under the "Show Extra Library" button.
     The first item gets the green button, the rest get gray.
     button.url = "" makes the button non-clickable. */
  things: [

    {
      icon: "assets/images/da2Logo.png",
      title: "DA2 MM PPL",
      subtitle: "Game APK",
      meta: [{
          label: "Date Added",
          value: "30/09/2026"
        },
        {
          label: "Version",
          value: "4.0.36.555"
        },
        {
          label: "Link Type",
          value: "Direct APK"
        }
      ],
      button: {
        text: "Donwload",
        url: REPO.da2ppl + "releases/download/v4.0.36.555/Mini.Military.PPL_4.0.36.apk"
      }
    },
    {
      // icon: "assets/images/VPPreInstalledRom.jpg",
      icon: "assets/images/VPPreInstalledRom1.jpg",
      title: "VPhoneOS ROM",
      subtitle: "Game PreInstalled Rom",
      meta: [{
          label: "Date Added",
          value: "30/09/2026"
        },
        {
          label: "Version",
          value: "4.13.2"
        },
        {
          label: "Link Type",
          value: "Direct Rom"
        }
      ],
      button: {
        text: "Donwload",
        url: REPO.da2ppl + "releases/download/v4.0.36.555/da2_mm_ppl_4.0.36.555_4.13.2.7z"
      }
    },
    {
      icon: "assets/images/vphoneos.png",
      title: "VPhoneOS",
      subtitle: "Android Emulator",
      meta: [{
          label: "Date Added",
          value: "30/09/2026"
        },
        {
          label: "Version",
          value: "As per PlayStore"
        },
        {
          label: "Link Type",
          value: "PlayStore Link"
        }
      ],
      button: {
        text: "Donwload",
        url: "https://play.google.com/store/apps/details?id=com.yoyo.snake.rush&pcampaignid=web_share"
      }
    },
    {
      icon: "assets/images/vphoneosOld.png",
      title: "VPhoneOS",
      subtitle: "Android Emulator",
      meta: [{
          label: "Date Added",
          value: "30/09/2026"
        },
        {
          label: "Version",
          value: "4.13.2"
        },
        {
          label: "Link Type",
          value: "Direct XAPK"
        }
      ],
      button: {
        text: "Donwload",
        url: REPO.da2ppl + "releases/download/v4.0.36.555/VPhoneOS_4.13.2.xapk"
      }
    },
    {
      icon: "assets/images/universalInstaller.png",
      title: "Universal Installer",
      subtitle: "XAPK Installer",
      meta: [{
          label: "Date Added",
          value: "30/09/2026"
        },
        {
          label: "Version",
          value: "As Per Devloper"
        },
        {
          label: "Link Type",
          value: "Latest Releases"
        }
      ],
      button: {
        text: "Donwload",
        url: "https://github.com/pass-with-high-score/universal-installer" + REPO.latRe,
      }
    },
    {
      icon: "assets/images/saiLogo.png",
      title: "Split APKs Installer",
      subtitle: "XAPK Installer",
      meta: [{
          label: "Date Added",
          value: "30/09/2026"
        },
        {
          label: "Version",
          value: "4.5"
        },
        {
          label: "Link Type",
          value: "Direct APK"
        }
      ],
      button: {
        text: "Donwload",
        url: REPO.da2ppl + "/releases/download/v4.0.36.555/Split.APKs.Installer-4.5.apk"
      }
    },

  ],

  /* 5. BROWSE PAGE (ARCHIVE)
     Each group = one bordered section with a header.
     title style: "accent" = green, "u" = underline (combine: "accent u").
     Add a new group by copying a { header, items } block.
     Add an item by copying an item block inside "items".
     Optional: button: { ..., primary: true } makes that button green. */
  archive: {
    title: [{
      text: "Archive",
      style: "accent u"
    }],
    groups: [
      // Content 1 start here
      {
        header: "Install with options Method",
        items: [
          // item 1 start here
          {
            icon: "assets/images/shizukuNext.png",
            title: "Shizuku Next",
            subtitle: "Shizuku",
            meta: [{
                label: "Date Added",
                value: "1/10/2026"
              },
              {
                label: "Version",
                value: "As Per Devloper"
              },
              {
                label: "Link Type",
                value: "Latest Releases"
              }
            ],
            button: {
              text: "Download",
              url: "https://github.com/rushiranpise/Shizuku-Next/" + REPO.latRe,
            }
          },
          // item 1 end here
          // item 2 start here
          {
            icon: "assets/images/shizukuNext.png",
            title: "Shizuku Next",
            subtitle: "Shizuku",
            meta: [{
                label: "Date Added",
                value: "1/10/2026"
              },
              {
                label: "Version",
                value: "14.0.9"
              },
              {
                label: "Link Type",
                value: "Direct APK"
              }
            ],
            button: {
              text: "Download",
              url: REPO.da2ppl + "releases/download/v4.0.36.555/shizuku-v14.0.9-next.apk",
            }
          },
          // item 2 end here
          // item 3 start here
          {
            icon: "assets/images/installWithOptions.webp",
            title: "Install with Options",
            subtitle: "Install with Options",
            meta: [{
                label: "Date Added",
                value: "1/10/2026"
              },
              {
                label: "Version",
                value: "0.9.2"
              },
              {
                label: "Link Type",
                value: "Direct APK"
              }
            ],
            button: {
              text: "Download",
              url: REPO.da2ppl + "releases/download/v4.0.36.555/InstallWithOptions_0.9.2.apk"
            }
          },
          // item 3 end here
        ]
      },
      // Content 1 end here
      // Content 2 start here
      {
        header: "DA2 MM PPL 4.2.8",
        items: [
          // item 1 start here
          {
            icon: "assets/images/da2Logo.png",
            title: "DA2 MM PPL",
            subtitle: "Game APK",
            meta: [{
                label: "Date Added",
                value: "19/04/2026"
              },
              {
                label: "Version",
                value: "4.2.8"
              },
              {
                label: "Link Type",
                value: "Direct APK"
              }
            ],
            button: {
              text: "Download",
              url: REPO.da2ppl + "releases/download/v4.2.8.555/da2-mm-4.2.8.555.apk"
            }
          },
          // item 1 end here
        ]
      },
      // Content 2 end here
    ]
  },



  /* 6. DOWNLOAD MESSAGE (shown top-right when a download button is clicked) */
  toast: {
    text: "Download started",
    duration: 10000, // milliseconds
    retryHint: "Didn't start?",
    retryText: "Retry"
  },

  /* 7. LOADING SCREEN (shown until the whole site is loaded) */
  loader: {
    text: "Loading...",
    minTime: 800, // minimum time to show (ms)
    maxTime: 10000 // safety: hide after this time even if something is slow (ms)
  },

  footer: {
    prefix: "Made With Love",
    heart: "\u2764\uFE0F",
    authorName: "@Shishir",
    authorUrl: "https://github.com/nullBytehere"
  }
};

/* ==========================================================
   DOWNLOAD RETRY LINK
   Adds "Didn't start? Retry" inside the download message.
   The Retry link points to the exact item that was clicked.
   (Self-contained: delete this block to remove the feature.)
   ========================================================== */
(function () {
  var T = window.SITE_CONFIG.toast || {};
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('a.btn-pill');
    if (!btn || !btn.href) return;

    var box = document.getElementById('toasts');
    var toast = box && box.lastElementChild;
    var text = toast && toast.querySelector('.toast-text');
    if (!text) return;

    var retry = document.createElement('a');
    retry.href = btn.href;
    retry.target = '_blank';
    retry.rel = 'noopener noreferrer';
    retry.textContent = T.retryText || 'Retry';
    retry.style.cssText = 'color:var(--accent-strong);font-weight:700;text-decoration:underline;cursor:pointer;pointer-events:auto';

    var line = document.createElement('span');
    line.appendChild(document.createTextNode((T.retryHint || "Didn't start?") + ' '));
    line.appendChild(retry);
    text.appendChild(line);
  });
})();