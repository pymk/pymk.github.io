---
title: "macOS Setup"
date: "2024-05-24"
taxonomies:
  categories: [tech]
  tags: [mac]
---

I want to use this post as reference for setting up my macOS environment from scratch. Things like default settings, modifications, installations, etc. Time will tell, but hopefully I have captured everything.

![Desktop](/images/2024-05-24/screenshot.jpg)

---

## System Settings

- iCloud
  - Sign into iCloud account
  - Disable iCloud Drive backup for Desktop and Documents folders

- Notifications
  - Turn off notifications for everything

- Appearance
  - Show scroll bars: Always
  - Click in the scroll bar to: Jump to spot that's clicked

- Control Center
  - Hide everything

- Accessibility
  - Display: Shake mouse pointer to locate: Disable
  - Display: Reduce transparency: Enable

- Apple Intelligence & Siri
  - Disable Apple Intelligence
  - Disable Siri

- Spotlight
  - Help Apple Improve Search: Disable
  - Disable Spotlight for everything except Applications, Calculator, and System Settings

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
- Hide folders with `chflags hidden <directory>`

- General
  - Show these items on desktop: External disks
  - New Finder windows show: $HOME

- Tags
  - Turn off everything

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
- [ForkLift](https://binarynights.com/): FTP client
- [Ghostty](https://github.com/ghostty-org/ghostty): Terminal emulator
- [Hidden Bar](https://github.com/dwarvesf/hidden): Menu bar manager
- [IINA](https://github.com/iina/iina): Media player
- [Itsycal](https://github.com/sfsam/Itsycal): Menu bar calendar
- [Keka](https://github.com/aonez/Keka): Archive manager
- [Little Snitch](https://www.obdev.at/products/littlesnitch/): Network monitor
- [Meta](https://www.nightbirdsevolve.com/meta/) and [Mp3tag](https://mp3tag.app): Audio tagger
- [Mimestream](https://mimestream.com/): Email client
- [Mullvad VPN](https://mullvad.net/en): VPN service
- [Nota](https://nota.md/): Notes manager
- [Pimosa](https://pimosa.app/): Media editor
- [Radiola](https://github.com/SokoloffA/radiola): Menu bar internet radio
- [Rectangle Pro](https://rectangleapp.com/pro): Window manager
- [Spect](http://stevenf.com/spect/): Image viewer and organizer
- [Swinsian](https://swinsian.com/) and [Tiny Player](https://www.catnapgames.com/tiny-player-for-mac/): Music players

## Terminal

Install [Homebrew](https://brew.sh/) and packages:

- 1password-cli: Command-line interface for 1Password
- atuin: Improved shell history for zsh, bash, fish and nushell
- b2-tools: B2 Cloud Storage Command-Line Tools
- bat: Clone of cat(1) with syntax highlighting and Git integration
- catimg: Insanely fast image printing in your terminal
- claude-code (--cask): Terminal-based AI coding assistant
- duckdb: Embeddable SQL OLAP Database Management System
- exiftool: Perl lib for reading and writing EXIF metadata
- eza: Modern, maintained replacement for ls
- f2: Command-line batch renaming tool
- fastfetch: Like neofetch, but much faster because written mostly in C
- ffmpeg: Play, record, convert, and stream audio and video
- folderify: Generate pixel-perfect macOS folder icons in the native style
- gemini-cli: Interact with Google Gemini AI models from the command-line
- gh: GitHub command-line tool
- git: Distributed revision control system
- imagemagick: Tools and libraries to manipulate images in many formats
- lftp: Sophisticated file transfer program
- magic-wormhole: Securely transfers data between computers
- neovim: Ambitious Vim-fork focused on extensibility and agility
- pandoc: Swiss-army knife of markup format conversion
- starship: Cross-shell prompt for astronauts
- wget: Internet file retriever
- yadm: Yet Another Dotfiles Manager
- yt-dlp: Feature-rich command-line audio/video downloader
- zola: Fast static site generator in a single binary with everything built-in

## Programming

- Ensure Xcode is installed with `xcode-select -p`
- Disable accented character when holding down keys:
  - `defaults write -g ApplePressAndHoldEnabled -bool false`
- [Docker](https://www.docker.com/): Container platforms
- [Go](https://go.dev/dl) and [R](https://cloud.r-project.org/): Programming languages
- [MarkEdit](https://github.com/MarkEdit-app/MarkEdit): Markdown editor and Preview pane extension
- [Quarto](https://quarto.org/): Publishing system
- [Sublime Text](https://www.sublimetext.com/): Text editor
- [uv](https://docs.astral.sh/uv/) and [ruff](https://docs.astral.sh/ruff/): Python tool
- [Zed](https://zed.dev/) and [Positron](https://positron.posit.co/): Code editors
- Go tools
  - Update Go tools: `gup` (custom function in the .zfunc file)
- Python versions to install with `uv python install <version>`
- Tools to install with `uv tool install <tool>`
  - [ty](https://github.com/astral-sh/ty): Python type checker and language server
  - [pre-commit](https://github.com/pre-commit/pre-commit): A framework for managing pre-commit hooks
  - [spotdl](https://github.com/spotDL/spotify-downloader): CLI for downloading Spotify playlists
  - [gallery-dl](https://github.com/mikf/gallery-dl/): CLI for downloading image galleries (needs `--with yt-dlp` flag)
- Add the PATHS to "/private/etc/paths.d"
  - Go: "/usr/local/go/bin"
  - Quarto: "/Applications/quarto/bin"

## SSH Key and Github

- Generate a new SSH key and store in [1Password](https://support.1password.com/developer/)
- Add the SSH key to the [ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- Add public key to Github (both Authentication and Signing key types)
- Test connection with `ssh -T git@github.com`

## Firefox

- Enable Firefox Sync for bookmarks, addons, and settings
  - Extensions: [Kagi](https://github.com/kagisearch/browser_extensions), [Stylus](https://github.com/openstyles/stylus), [Temporary Containers](https://github.com/stoically/temporary-containers), [uBlock Origin](https://github.com/gorhill/uBlock), [Vimium](https://github.com/philc/vimium)
- Optional: Setup [Density](https://github.com/phil294/density-userstyle) for Stylus

## Configs

My user settings are either synced in the program or through [yadm](https://github.com/yadm-dev/yadm), which is stored on my private Github repo.

- Clone the dotfile repo for settings and configs (.zsh*, .zfunc/, .config/, etc)
- 1Password for keys, tokens, etc

## Themes

- eza: [Custom minimal theme](https://gist.github.com/pymk/9a3591e5ada0e964b4e5b5b744fcb85b)
- Ghostty: Default theme with [custom minimal Starship config](https://gist.github.com/pymk/799c73d87fdb11984d79642f42b4cf65)
- macOS: custom folder icons with [folderify](https://github.com/lgarron/folderify)
- nvim: [Paper Color](https://github.com/NLKNguyen/papercolor-theme)
- Sublime: [GitHub Adaptive](https://github.com/mauroreisvieira/github-sublime-theme/)
- Zed: [Custom minimal theme](https://gist.github.com/pymk/7c4bd04dee69c864115ae2b1d534da60)
