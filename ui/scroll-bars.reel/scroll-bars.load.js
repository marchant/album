montageDefine("703617f","ui/scroll-bars.reel/scroll-bars",{dependencies:["montage","montage/ui/component"],factory:function(e,t){var i=e("montage").Montage,a=e("montage/ui/component").Component;t.ScrollBars=i.create(a,{_verticalScroll:{value:0},_horizontalScroll:{value:0},_verticalLength:{value:0},_horizontalLength:{value:0},verticalScroll:{get:function(){return this._verticalScroll},set:function(e){this._verticalScroll=e,this.needsDraw=!0},serializable:!0},horizontalScroll:{get:function(){return this._horizontalScroll},set:function(e){this._horizontalScroll=e,this.needsDraw=!0},serializable:!0},verticalLength:{get:function(){return this._verticalLength},set:function(e){this._verticalLength=e,this.needsDraw=!0},serializable:!0},horizontalLength:{get:function(){return this._horizontalLength},set:function(e){this._horizontalLength=e,this.needsDraw=!0},serializable:!0},_opacity:{value:0},opacity:{get:function(){return this._opacity},set:function(e){this._opacity=e,this.needsDraw=!0},serializable:!0},_isDisplayUpdated:{value:!1},_displayVertical:{value:!1},displayVertical:{get:function(){return this._displayVertical},set:function(e){this._displayVertical!==e&&(this._displayVertical=e,this._isDisplayUpdated=!0,this.needsDraw=!0)},serializable:!0},_displayHorizontal:{value:!1},displayHorizontal:{get:function(){return this._displayHorizontal},set:function(e){this._displayHorizontal!==e&&(this._displayHorizontal=e,this._isDisplayUpdated=!0,this.needsDraw=!0)},serializable:!0},_top:{value:!1,serializable:!0},_bottomClip:{value:!1,serializable:!0},_bottom:{value:!1,serializable:!0},_left:{value:!1,serializable:!0},_rightClip:{value:!1,serializable:!0},_right:{value:!1,serializable:!0},_hasResizedHorizontal:{value:!1},_hasResizedVertical:{value:!1},willDraw:{value:function(){this._offsetWidth!==this._element.offsetWidth&&(this._offsetWidth=this._element.offsetWidth,this._hasResizedHorizontal=!0),this._offsetHeight!==this._element.offsetHeight&&(this._offsetHeight=this._element.offsetHeight,this._hasResizedVertical=!0)}},draw:{value:function(){var e,t,i,a;if(this._isDisplayUpdated){var n=this._displayVertical?"block":"none",s=this._displayHorizontal?"block":"none";this._top.style.display=this._bottomClip.style.display=n,this._left.style.display=this._rightClip.style.display=s,this._isDisplayUpdated=!1}this._hasResizedHorizontal&&this._displayHorizontal&&(this._rightClip.style.width=this._right.style.width=this._offsetWidth-4+"px",this._rightClip.style.clip="rect(-1px,"+(this._offsetWidth-3)+"px,6px,3px)",this._hasResizedHorizontal=!1),this._hasResizedVertical&&this._displayVertical&&(this._bottomClip.style.height=this._bottom.style.height=this._offsetHeight-4+"px",this._bottomClip.style.clip="rect(3px,6px,"+(this._offsetHeight-3)+"px,-1px)",this._hasResizedVertical=!1),this._opacity?(this._displayHorizontal&&(i=this._offsetWidth-9-(this._displayVertical?6:0),e=Math.floor(i*this._horizontalLength),a=i-e,t=1-this._horizontalLength?Math.floor(a*this._horizontalScroll/(1-this._horizontalLength)):0,0>t&&(e+=t,0>e&&(e=0),t=0),t>a&&(e+=Math.floor(a-t),0>e&&(e=0),t=i-e),this._right.style.webkitTransform="translate3d("+(e-this._offsetWidth+9)+"px,0,0)",this._left.style.webkitTransform=this._rightClip.style.webkitTransform="translate3d("+(t+2)+"px,0,0)",this._left.style.webkitTransition=this._right.style.webkitTransition="none",this._left.style.opacity=this._right.style.opacity=this._opacity),this._displayVertical&&(i=this._offsetHeight-9-(this._displayHorizontal?6:0),e=Math.floor(i*this._verticalLength),a=i-e,t=1-this._verticalLength?Math.floor(a*this._verticalScroll/(1-this._verticalLength)):0,0>t&&(e+=t,0>e&&(e=0),t=0),t>a&&(e+=Math.floor(a-t),0>e&&(e=0),t=i-e),this._bottom.style.webkitTransform="translate3d(0,"+(e-this._offsetHeight+9)+"px,0)",this._top.style.webkitTransform=this._bottomClip.style.webkitTransform="translate3d(0,"+(t+2)+"px,0)",this._top.style.webkitTransition=this._bottom.style.webkitTransition="none",this._top.style.opacity=this._bottom.style.opacity=this._opacity)):(this._displayHorizontal&&(this._left.style.webkitTransition=this._right.style.webkitTransition="300ms opacity",this._left.style.opacity=this._right.style.opacity=0),this._displayVertical&&(this._top.style.webkitTransition=this._bottom.style.webkitTransition="300ms opacity",this._top.style.opacity=this._bottom.style.opacity=0))}}})}});