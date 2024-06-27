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

- Siri & Spotlight
  - Disable Siri
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

## Install

- [1Password](https://1password.com/)
- [Acorn](https://flyingmeat.com/acorn/)
- [Alacritty](https://alacritty.org/)
- [Docker](https://www.docker.com/)
- [Firefox](https://www.mozilla.org/en-US/firefox/)
- [Go](https://go.dev/)
- [Hidden Bar](https://github.com/dwarvesf/hidden)
- [IINA](https://iina.io/)
- [Itsycal](https://github.com/sfsam/Itsycal)
- [Keka](https://github.com/aonez/Keka)
- [Little Snitch](https://www.obdev.at/products/littlesnitch/)
- [Meta](https://www.nightbirdsevolve.com/meta/)
- [Mimestream](https://mimestream.com/)
- [Mullvad VPN](https://mullvad.net/en)
- [Notable](https://notable.app/)
- [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)
- [Quarto](https://quarto.org/)
- [Radiola](https://github.com/SokoloffA/radiola)
- [Rectangle Pro](https://rectangleapp.com/pro)
- [RStudio](https://posit.co/download/rstudio-desktop/)
- [Sublime Merge](https://www.sublimemerge.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Terminal

- Ensure Xcode is installed: `xcode-select -p`.
- Disable accented character when holding down keys: `defaults write -g ApplePressAndHoldEnabled -bool false`
- Install [Homebrew](https://brew.sh/) and packages.
  - b2-tools: B2 Cloud Storage Command-Line Tools
  - bat: Clone of cat(1) with syntax highlighting and Git integration
  - catimg: Insanely fast image printing in your terminal
  - cmus: Music player with an ncurses based interface
  - eza: Modern, maintained replacement for ls
  - fastfetch: Like neofetch, but much faster because written mostly in C
  - fzf: Command-line fuzzy finder written in Go
  - gh: GitHub command-line tool
  - git: Distributed revision control system
  - lftp: Sophisticated file transfer program
  - magic-wormhole: Securely transfers data between computers
  - miller: Like sed, awk, cut, join & sort for name-indexed data such as CSV
  - neovim: Ambitious Vim-fork focused on extensibility and agility
  - nnn: Tiny, lightning fast, feature-packed file manager
  - pipx: Execute binaries from Python packages in isolated environments
  - pyenv: Python version management
  - taskwarrior-tui: Terminal user interface for taskwarrior
  - wget: Internet file retriever
  - yadm: Yet Another Dotfiles Manager
  - yt-dlp: Feature-rich command-line audio/video downloader
  - zola: Fast static site generator in a single binary with everything built-in
- Install custom [zsh prompt](https://gist.github.com/pymk/799c73d87fdb11984d79642f42b4cf65).
- Install Kanagawa theme for [nvim](https://github.com/rebelot/kanagawa.nvim), [Sublime](https://github.com/CodeAndGin/kanagawa-sublime-text), VS Code (synced in account), and Alacritty (`kanagawa_wave`).
- VS Code: Install Go tools.
- pipx: Install poetry, uv.
- pyenv: Install latest and set as global.
- Add the PATHS to `/private/etc/paths.d` for
  - pyenv: $HOME/.pyenv/shims
  - pipx: $HOME/.local/bin
  - go: /usr/local/go/bin

## SSH Key & Github

- Generate a new SSH key and add it to ssh-agent and Github ([docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)).
- Test connection with `ssh -T git@github.com`.

## Firefox

- Sign to Firefox.
- Adjust privacy, search, and extension settings.
- Setup [custom userChrome.css](https://gist.github.com/pymk/b9624ed1c4038648b2508df287d3616c).
- Setup [Density](https://github.com/phil294/density-userstyle), [Github Dark](https://github.com/StylishThemes/GitHub-Dark), and use [dark theme template](https://gist.github.com/pymk/d2052d8e19634d71448bc4421136027a) for Stylus.

## Configs

My user settings are either synced in the program or through [yadm](https://yadm.io/), which is stored on my private Github repo.

- Sign to VS Code.
- Clone the yadm repo for other configs (notes, .vimrc, .zshrc, .config/, etc).

