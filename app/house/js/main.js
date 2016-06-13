(function () {
	var animationSvg = Snap('#cd-animated-svg'),
	loadingSvg  = animationSvg.select('#cd-loading'),
	playBtn = animationSvg.select('#cd-play-btn'),
	pauseBtn = animationSvg.select('#cd-pause-btn'),
	loadingCircle = animationSvg.select('#cd=loading-circle-filled'),
	buildingBase1 = animationSvg.select('#cd-home-1-base'),
	buildingDoor1 = animationSvg.select('#cd-home-1-door'),
	buildingRoof1 = animationSvg.select('#cd-home-1-roof'),
	buildingWindow1 = animationSvg.select('#cd-home-1-roof'),
	buildingChimny = animationSvg.select('#cd-home-1-chimney'),
	buildingBase2 = animationSvg.select('#cd-home-2-base'),
	buildingDoor2 = animationSvg.select('#cd-home-2-door'),
	buildingRoof2 =animationSvg.select('#cd-home-2-roof'),
	buildingWindow2 = animationSvg.select('#cd-home-2-window'),
	buildingBase3 = animationSvg.select('#cd-home-3-base'),
	buildingRoof3 = animationSvg.select('#cd-home-3-roof'),
	buildingWindow3 = animationSvg.select('#cd-home-3-window'),
	floor = animationSvg.select('#cd-floor'),
	clouds1 = animationSvg.select('#cd-cloud-1'),
	clouds2 = animationSvg.select('#cd-clond-2');
})

var circumf = Math.PI * (loadingCircle.attr('r') * 2)

var globalAnimation;