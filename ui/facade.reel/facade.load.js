montageDefine("703617f","ui/facade.reel/facade",{dependencies:["montage/core/core","montage/ui/component"],factory:function(e,t){var a=(e("montage/core/core").Montage,e("montage/ui/component").Component);t.Facade=a.specialize({iTunes:{value:!1,serializable:!0},appData:{value:null,serializable:!0},audioLoop:{value:null,serializable:!0},slot:{value:null,serializable:!0},homeContent:{value:null,serializable:!0},galleryContent:{value:null,serializable:!0},songlistContent:{value:null,serializable:!0},songContent:{value:null,serializable:!0},creditsContent:{value:null,serializable:!0},player:{value:null,serializable:!0},playList:{value:!1,serializable:!0},currentSong:{value:null,serializable:!0},currentSection:{value:null,serializable:!0},templateDidLoad:{value:function(){this.application.facade=this}},enterDocument:{value:function(){window.iTunes&&(this.iTunes=!0,window.addEventListener("play",this,!1)),this.currentSong=this.appData.songs[0].src,document.addEventListener("touchmove",function(e){e.preventDefault()},!1),this.startApp()}},startApp:{value:function(){this.switchView("home")}},playerStopped:{value:function(){this.playNextSong()}},playSong:{value:function(e){this.currentSong=e,this.iTunes?window.iTunes.play(this.currentSong):(this.songContent.switchVisualizer(),this.player.playSong(this.currentSong))}},playNextSong:{value:function(){var e=this.getNextSong(this.currentSong);this.playSong(e)}},getNextSong:{value:function(e){for(var t=null,a=this.appData.songs,n=0,i=a.length;i>n;n++)if(a[n].src==e){t=a[n+1]?a[n+1].src:a[0].src;break}return t}},playPrevSong:{value:function(){var e=this.getPrevSong(this.currentSong);this.playSong(e)}},getPrevSong:{value:function(e){for(var t=null,a=this.appData.songs,n=0,i=a.length;i>n;n++)if(a[n].src==e){t=a[n-1]?a[n-1].src:a[i-1].src;break}return t}},buildNonLibraryPlayList:{value:function(e){for(var t=iTunes.createTempPlaylist(),a=[],n=0;e.length>n;n++){var i={};i.url=e[n].src,i.title=e[n].title,i.artist=this.appData.feature.artist,i.album=this.appData.feature.title,a.push(i)}return t.addURLs(a),t}},playSonglistSong:{value:function(e){this.songContent.backParameter="songlist",this.switchView("song"),this.playSong(e)}},playAlbum:{value:function(){if(this.songContent.backParameter="home",this.switchView("song"),this.iTunes){var e=this.buildNonLibraryPlayList(this.appData.songs);e.play()}else this.playSong(this.appData.songs[0].src)}},switchView:{value:function(e){this.currentSection=this[e+"Content"]}},goBackFrom:{value:function(){this.switchView("home")}}})}});