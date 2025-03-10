---
title: "macOS Setup"
date: "2024-05-24"
taxonomies:
  categories: [tech]
  tags: [mac]
---

I want to use this post as reference for setting up my macOS environment from scratch. Things like default settings, modifications, installations, etc. Time will tell, but hopefully I captured everything.

![Desktop](/images/2024-05-24/screenshot.jpg)

---

## System Settings

- iCloud
  - Sign into iCloud account.
  - Disable iCloud Drive backup for Desktop and Documents folders.

- Notifications
  - Turn off notifications for everything.

- Appearance
  - Show scroll bars: Always
  - Click in the scroll bar to: Jump to spot that's clicked

- Control Center
  - Hide everything.

- Accessibility
  - Display: Shake mouse pointer to locate: Disable

- Apple Intelligence & Siri
  - Disable Apple Intelligence
  - Disable Siri

- Spotlight
  - Help Apple Improve Search: Disable
  - Disable Spotlight for everything except Applications, Calculator, and System Settings.

- Desktop & Dock
  - Position: Left
  - Minimize windows: Genie Effect
  - Double-click a window title: Do Nothing
  - Minimize windows into application icon: Disable
  - Automatically hide and show the Dock: Enable
  - Show suggested and recent apps in Dock: Disable
  - Disable Desktop & Stage Manager: Show on Desktop
  - Click wallpaper to reveal desktop: Only in Stage Manager
  - Stage Manager: Disable
  - Widgets: Disable
  - Hot Corners: top-right: Mission Control, bottom-right: Desktop

- Game Center
  - Disable

- Keyboard
  - Key repeat rate: fastest
  - Delay until repeat: shortest
  - Press fn key to: Do Nothing

- Mouse
  - Tracking speed: 70%
  - Natural scrolling: Disable
  - Secondary click: Right Side
  - Smart zoom: Disable

## Finder Settings

- Toolbar: Back/Forward, Path, Search
- View as columns
- Sort by name
- Hide folders with `chflags hidden ~/foobar`

- General
  - Show these items on desktop: External disks
  - New Finder windows show: $HOME

- Tags
  - Turn off everything.

- Sidebar
  - Show these items in the sidebar: AirDrop, Applications, Desktop, Downloads, $HOME, External disks
  - Recent Tags: Disable

- Advanced
  - Uncheck everything except
    - Show all filename extensions: Enable
    - Keep folders on top: In windows when sorting by name
  - When performing a search: Search This Mac

## Software

- [1Password](https://1password.com/): Password manager
- [Acorn](https://flyingmeat.com/acorn/): Image editor
- [AppCleaner](https://freemacsoft.net/appcleaner/): App uninstaller
- [Firefox](https://www.mozilla.org/en-US/firefox/): Web browser
- [Ghostty](https://github.com/ghostty-org/ghostty): Terminal emulator
- [Hidden Bar](https://github.com/dwarvesf/hidden): Menu bar manager
- [IINA](https://github.com/iina/iina): Media player
- [Itsycal](https://github.com/sfsam/Itsycal): Menu bar calendar
- [Keka](https://github.com/aonez/Keka): Archive manager
- [Little Snitch](https://www.obdev.at/products/littlesnitch/): Network monitor
- [Meta](https://www.nightbirdsevolve.com/meta/) and [Mp3tag](https://mp3tag.app): Audio tagger
- [Mimestream](https://mimestream.com/): Email client
- [Mullvad VPN](https://mullvad.net/en): VPN service
- [Notable](https://github.com/notable/notable): Notes manager
- [Pimosa](https://pimosa.app/): Media editor
- [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh): Shell configuration
- [Radiola](https://github.com/SokoloffA/radiola): Menu bar internet radio
- [Rectangle Pro](https://rectangleapp.com/pro): Window manager
- [Spect](http://stevenf.com/spect/): Image viewer
- [Swinsian](https://swinsian.com/): Music player

## Terminal

Install [Homebrew](https://brew.sh/) packages:

- `b2-tools`: B2 Cloud Storage Command-Line Tools
- `bat`: Clone of cat(1) with syntax highlighting and Git integration
- `catimg`: Insanely fast image printing in your terminal
- `duckdb`: Embeddable SQL OLAP Database Management System
- `exiftool`: Perl lib for reading and writing EXIF metadata
- `eza`: Modern, maintained replacement for ls
- `fastfetch`: Like neofetch, but much faster because written mostly in C
- `ffmpeg`: Play, record, convert, and stream audio and video
- `fzf`: Command-line fuzzy finder written in Go
- `gh`: GitHub command-line tool
- `git`: Distributed revision control system
- `imagemagick`: Tools and libraries to manipulate images in many formats
- `lftp`: Sophisticated file transfer program
- `magic-wormhole`: Securely transfers data between computers
- `neovim`: Ambitious Vim-fork focused on extensibility and agility
- `nnn`: Tiny, lightning fast, feature-packed file manager
- `pandoc`: Swiss-army knife of markup format conversion
- `taskwarrior-tui`: Terminal user interface for taskwarrior
- `wget`: Internet file retriever
- `yadm`: Yet Another Dotfiles Manager
- `youplot`: Command-line tool that draw plots on the terminal
- `yt-dlp`: Feature-rich command-line audio/video downloader
- `zola`: Fast static site generator in a single binary with everything built-in

## Programming

- Ensure Xcode is installed: `xcode-select -p`
- Disable accented character when holding down keys: `defaults write -g ApplePressAndHoldEnabled -bool false`
- [Docker](https://www.docker.com/): Container platforms
- [Go](https://go.dev/dl) and [R](https://cloud.r-project.org/): Programming languages
- [uv](https://docs.astral.sh/uv/) and [ruff](https://docs.astral.sh/ruff/): Python tools
- [Quarto](https://quarto.org/): Publishing system
- [Sublime Merge](https://www.sublimemerge.com/): Git client
- [Zed](https://zed.dev/), [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/): Code editors
- Go tools
  - VS Code > Install Go tools
- Python
  - Versions: `uv python install`
  - Shell autocompletion for ruff: `ruff generate-shell-completion zsh > ~/.zfunc/_ruff`
- Tools to install via `uv tool install`
  - `pre-commit`
  - `spotdl`
- Add the PATHS to `/private/etc/paths.d`.
  - Go: `/usr/local/go/bin`

## SSH Key & Github

- Generate a new SSH key and add it to ssh-agent and Github ([docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)).
- Test connection with `ssh -T git@github.com`.

## Firefox

- Enable Firefox Sync for bookmarks, addons, and settings.
- Adjust [privacy](https://github.com/allo-/ffprofile) and extension settings.
- Optional: Setup [Density](https://github.com/phil294/density-userstyle), [Github Dark](https://github.com/StylishThemes/GitHub-Dark), and use [dark theme template](https://gist.github.com/pymk/d2052d8e19634d71448bc4421136027a) for Stylus.

## Configs

My user settings are either synced in the program or through [yadm](https://github.com/yadm-dev/yadm), which is stored on my private Github repo.

- Clone the yadm repo for dot files and other configs (notes, .vimrc, .zshrc, .config/, etc).
- VS Code user settings restored through account login.

## Themes

Here are the usual themes I switch between:

- Ghostty: [GruvboxDarkHard](https://ghostty.org/docs/features/theme)
- nvim: [Kanagawa](https://github.com/rebelot/kanagawa.nvim)
- Sublime: [Kanagawa](https://github.com/CodeAndGin/kanagawa-sublime-text)
- VS Code: [GitHub Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)
- Zed: [Catppuccin Latte, Simple Darker](https://zed-themes.com/themes)
- zsh: [Custom zsh prompt](https://gist.github.com/pymk/799c73d87fdb11984d79642f42b4cf65)
