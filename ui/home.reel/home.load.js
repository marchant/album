montageDefine("703617f","ui/home.reel/home",{dependencies:["montage/core/core","montage/ui/component"],factory:function(e,t){var n=e("montage/core/core").Montage,i=e("montage/ui/component").Component;t.Home=n.create(i,{handleGoSongListAction:{value:function(){this.application.facade.switchView("songlist")}},handleGoGalleryAction:{value:function(){this.application.facade.switchView("gallery")}},handleGoCreditsAction:{value:function(){this.application.facade.switchView("credits")}},handlePlayAlbumAction:{value:function(){this.application.facade.playAlbum()}}})}});