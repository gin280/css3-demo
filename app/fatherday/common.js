function getUserInfo(a){if(0==inApp){inApp=!0,a=$.isEmptyObject(a)?{}:JSON.parse(a);for(var b in a)SystemUtil.isNull(a[b])?"":userInfo[b]=$.trim(a[b]);window.inStart(userInfo),$.isFunction(initFn)?initFn():""}}function loadUserInfo(){var a=localStorage.getItem("91jyks_time"),b=(new Date).getTime();!$.isNumeric(a)||b-Number(a)>864e5?(localStorage.removeItem("91jyks_uid"),localStorage.removeItem("91jyks_token"),localStorage.removeItem("91jyks_time")):(userInfo.uid=localStorage.getItem("91jyks_uid"),userInfo.token=localStorage.getItem("91jyks_token"),window.inStart(userInfo)),$.isFunction(initFn)?initFn():""}var SystemUtil={validateWeiXin:function(){var a=navigator.userAgent.toLowerCase();return"micromessenger"==a.match(/MicroMessenger/i)},login:function(a,b,c){if(SystemUtil.isNull(b)?"":window.outStop(userInfo,$("#"+b)),this.isNull(a)||!a){var d=this.getResourceUrl()+"user/login.html";c=encodeURIComponent(this.isNull(c)?location.href:c),SystemUtil.isNull(platform)?$.modalAlert({message:"请先下载APP"}):location.replace(d+"?returnUrl="+c)}else NativeCallAction.method("login","")},jumpIn:function(a,b,c){SystemUtil.isNull(a)?"":window.outStop(userInfo,$("#"+a)),setTimeout(function(){NativeCallAction.method(b,SystemUtil.isNull(c)?"":c)},300)},jumpOut:function(a,b){SystemUtil.isNull(a)?"":window.outStop(userInfo,$("#"+a)),setTimeout(function(){SystemUtil.isNull(b)?"":location.href=b},300)},getBaseUrl:function(a){return 0==arguments.length?"http://api.91jkys.com":a?"http://api.91jkys.com:8090":"http://api.91jkys.com:8091"},getActionUrl:function(a){return this.getBaseUrl(a)+"/api/v1"},getCommunityUrl:function(){return"http://api.91jkys.com:8095"},getEvents:function(){return"http://static.91jkys.com/activity/build/"},getWebUrl:function(){return"http://web.91jkys.com/"},format:function(a,b){if(this.isNull(a))return null;var c;"number"==typeof a&&(c=new Date(a)),a instanceof Date&&(c=a);var d={"M+":c.getMonth()+1,"d+":c.getDate(),"h+":c.getHours(),"m+":c.getMinutes(),"s+":c.getSeconds(),"q+":Math.floor((c.getMonth()+3)/3),S:c.getMilliseconds()};/(y+)/.test(b)&&(b=b.replace(RegExp.$1,(c.getFullYear()+"").substr(4-RegExp.$1.length)));for(var e in d)new RegExp("("+e+")").test(b)&&(b=b.replace(RegExp.$1,1==RegExp.$1.length?d[e]:("00"+d[e]).substr((""+d[e]).length)));return b},parseDate:function(a){return new Date(a.replace(/-/g,"/"))},getResourceUrl:function(){return this.getHost()+"/activity/build/"},getHost:function(){return location.protocol+"//"+location.host},getUrlParam:function(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),c=location.search.substr(1).match(b);return null!=c?decodeURIComponent(c[2]).replace("#",""):null},isNull:function(a){var b=jQuery.type(a);return"undefined"===b||""===b||"null"===b||"null"===a||null===a||""===a||"undefined"===a},uuid:function(a,b){var c,d="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),e=[];if(b=b||d.length,a)for(c=0;a>c;c++)e[c]=d[0|Math.random()*b];else{var f;for(e[8]=e[13]=e[18]=e[23]="-",e[14]="4",c=0;36>c;c++)e[c]||(f=0|16*Math.random(),e[c]=d[19==c?3&f|8:f])}return e.join("")},isMobileNum:function(a){var b=/^1[3|5|7|8|][0-9]{9}$/;return b.test(a)},share:function(a){var b=SystemUtil.isNull(userInfo.appver)?0:userInfo.appver.replace(/\./g,"");Number(b)>=311&&inApp&&NativeCallAction.method("share",JSON.stringify(a)),setTimeout(function(){NativeCallAction.callAndroidMethodShare("share",JSON.stringify(a))},200)},versionControl:function(a){var b=SystemUtil.isNull(userInfo.appver)?0:userInfo.appver.replace(/\./g,"");return Number(b)>=a}},NativeCallAction={method:function(a,b){var c=document.createElement("IFRAME");b=b||"",c.setAttribute("src","native-call:#action:#"+a+"#"+b),document.body.appendChild(c),c.parentNode.removeChild(c)},loading:function(a){this.method("loading:",a)},loaded:function(){this.method("loaded:","")},alert:function(a){this.method("alert:",a)},log:function(a){this.method("log:",a)},callAndroidMethodShare:function(a,b){var c="native-call:#action:#"+a+"#"+b;try{window.androidInterface.androidGetUrl(c)}catch(d){}}},userInfo={uid:"-1000",uuid:"",sn:"",appver:"",chr:"h5",token:"anonymous"},startTime=(new Date).getTime(),inApp=!1,initFn,platform=SystemUtil.getUrlParam("platform")||"html";userInfo.chr=SystemUtil.isNull(platform)?userInfo.chr:platform,$(function(){SystemUtil.isNull(platform)?"":loadUserInfo(),$(".clickEvent").live("click",function(){window.clickOnEvent(userInfo,$(this))})}),function(a){a.inStart=function(a){var b=$(".inAct").attr("id"),c="page-"+b,d="http://deliver.91jkys.com/index.php/Home/Time/addbehavior",e={uid:a.uid,chr:a.chr,action:c,uuid:a.uuid,sn:a.sn,source:"888",platform:"html",appver:a.appver,address:b,start_time:startTime,behavior_status:"1",create_time:startTime,logtime:startTime};$.post(d,"param="+JSON.stringify(e),function(){})},a.clickOnEvent=function(a,b){var c=($(".inAct").attr("id"),b.attr("id")),d="event-btn-"+c,e=(new Date).getTime(),f=e-startTime,g="http://deliver.91jkys.com/index.php/Home/Time/additem",h={uid:a.uid,chr:a.chr,action:d,uuid:a.uuid,sn:a.sn,source:"888",platform:"html",appver:a.appver,address:c,end_time:e,stop_time:f,behavior_status:"2",create_time:e,logtime:e};$.post(g,"param="+JSON.stringify(h),function(){})},a.outStop=function(a,b){var c=($(".inAct").attr("id"),b.attr("id")),d="event-btn-"+c,e=(new Date).getTime(),f=e-startTime;({uid:a.uid,chr:a.chr,action:d,uuid:a.uuid,sn:a.sn,source:"888",platform:"html",appver:a.appver,address:c,end_time:e,stop_time:f,behavior_status:"2",create_time:e,logtime:e})},a.getstartstrbyspliter=function(a,b){var c=a.indexOf(b);return-1==c?-1:a.substring(0,c)},a.getendstrbyspliter=function(a,b){var c=a.indexOf(b);return-1==c?-1:a.substring(c+b.length,a.length)}}(window),function(a){a.toastTimeout=null,a.modalAlert=function(b){var c=window.screen.height,d={hasTitle:!0,message:"alert",btnMsg:"确&ensp;定",btnFn:function(){}};a.extend(d,b);var e=a("#lean_overlay"),f=a("#lean_modal"),g='<div class="lean_box">',h="http://static.91jkys.com/activity/build/";0==e.length?e=a('<div id="lean_overlay" style="height:'+c+'px;" class="lean_overlay"></div>').appendTo("body"):"",g+=d.hasTitle?'<img src="'+h+'img/logo.png" class="box_tle">':"",g+='<div class="box_ctn">'+d.message+'</div><div class="box_btn" onclick="">'+d.btnMsg+"</div></div>",0==f.length?f=a('<div id="lean_modal"></div>').insertAfter(e):f.removeClass().empty(),a("body,html").css("height",c+"px").addClass("noScroll"),e.unbind().show(),f.addClass("lean_overlay box_middle").append(g).css({"margin-left":-f.outerWidth()/2+"px","margin-top":-f.outerHeight()/2+"px"}).fadeIn(300).find(".box_btn").click(function(){a("body").removeClass("noScroll"),d.btnFn(),f.fadeOut(300,function(){e.hide(),a("body,html").removeClass("noScroll")})})},a.showLoading=function(){var b="http://static.91jkys.com/activity/build/",c=a("#lean_overlay"),d=a("#lean_modal"),e='<img class="lean_load" src="'+b+'img/load2.png">';c=0==c.length?a('<div id="lean_overlay" class="lean_overlay"></div>').appendTo("body"):c,0==d.length?d=a('<div id="lean_modal"></div>').insertAfter(c):d.hide().removeClass().empty(),c.unbind().show(),d.addClass("lean_overlay box_load").append(e).css({"margin-left":-d.outerWidth()/2+"px","margin-top":-d.outerHeight()/2+"px"}).show()},a.hideLoading=function(){return a("#lean_modal").fadeOut(300,function(){a("#lean_overlay").hide()}),this},a.modalSheet=function(b){function c(){a("body").removeClass("noScroll"),e.unbind(),f.slideUp(500,function(){e.hide()})}var d={hasMsg:!1,message:"",btnArray:[],method:function(){},timeHide:2500};a.extend(d,b);var e=a("#lean_overlay"),f=a("#lean_modal"),g="",h=a('<div class="lean_box"><div class="box_btn btn_sheet btn_cancel" onclick="">取消</div></div>'),i=d.hasMsg||d.btnArray.length>0?a('<div class="lean_box"></div>'):null;if(0==e.length?e=a('<div id="lean_overlay" class="lean_overlay" onclick=""></div>').appendTo("body"):"",a.isArray(d.btnArray))for(var j=0;j<d.btnArray.length;j++)g+='<div class="box_btn btn_sheet" sheet-data="'+j+'" onclick="">'+d.btnArray[j]+"</div>";0==f.length?f=a('<div id="lean_modal"></div>').insertAfter(e):f.hide().removeClass().empty(),a("body").addClass("noScroll"),e.unbind().show(),f.addClass("lean_overlay box_sheet").append(h),SystemUtil.isNull(i)?"":i.insertBefore(h).append(g),f.css({"margin-left":-f.outerWidth()/2+"px","margin-top":-f.outerHeight()+"px"}).slideDown(500,function(){e.bind("click",c)}).find(".btn_sheet").click(function(){d.method(a(this).attr("sheet-data"),a(this).hasClass("btn_cancel")),c()})},a.toast=function(b){var c=a("#lean_toast");clearTimeout(this.toastTimeout),0==c.length?c=a('<div id="lean_toast" class="lean_overlay"></div>').appendTo("body"):c.empty(),c.append('<div class="lean_box"><div class="box_ctn box_toast">'+b+"</div></div>").css("margin-left",-c.outerWidth()/2+"px").css({"margin-left":-c.outerWidth()/2+"px","margin-top":-c.outerHeight()/2+"px"}).fadeIn(300),this.toastTimeout=setTimeout(function(){c.fadeOut()},1800)},a.myPost=function(b,c,d,e,f){var g={url:b,type:"POST",data:c,dataType:"json",success:e};SystemUtil.isNull(d)?"":g.contentType=d,g.error=a.isFunction(f)?f:function(){a.modalAlert({message:"网络连接超时"})},a.ajax(g)},a.share=function(b,c,d){var e=SystemUtil.isNull(c)||!c?{title:"掌上糖医",message:"您的随身血糖管理专家",download:"http://server.91jkys.com/app/"}:{title:"糖医工作站",message:"专业的糖尿病院外管理平台",download:"http://server.91jkys.com/drapp/"},f=a('<div class="suspend suspend-content"></div>'),g=a('<div class="suspend suspend-tap"></div>'),h=a('<div class="suspend suspend-bg"></div>'),i="http://static.91jkys.com/activity/build/img/";f.append('<img class="suspend_logo" src="'+i+'logo.png"><div class="suspend_slogan"><span class="suspend_title">'+e.title+'</span><span class="suspend_message">'+e.message+"</span></div>"),g.append('<img class="suspend_download" src="'+i+'download.png" onclick=""><img class="suspend_close" src="'+i+'close.png" onclick="">'),a("body").append(f).append(g).append(h),setTimeout(function(){a(".suspend").slideDown(function(){b.addClass("has-suspend"),a.isFunction(d)?d():""})},1e3),a(".suspend_download").click(function(){location.href=e.download}),a(".suspend_close").click(a.hideShare)},a.hideShare=function(){a(".suspend").slideUp(function(){a(".has-suspend").removeClass("has-suspend")})},a.tipBox=function(b,c){function d(){a("body").addClass("noScroll"),e.show(),f.css("margin-left",-f.outerWidth()/2+"px").css("margin-left",-f.outerWidth()/2+"px").css({"margin-left":-f.outerWidth()/2+"px","margin-top":-f.outerHeight()/2+"px"}).fadeIn(300,function(){e.bind("click",function(){a("body").removeClass("noScroll"),e.hide().unbind(),f.fadeOut(300)})})}var e=a("#lean_overlay"),f=a("#hint_"+c);0==e.length&&(e=a('<div id="lean_overlay" class="lean_overlay"></div>').appendTo("body")),0==f.length&&(f=a('<div class="lean_overlay lean_hint" id="hint_'+c+'"></div>').insertAfter(e)),f.is(":empty")?a.get(b,function(a){f.append(a),d()}):d()}}(jQuery),function(a){a.fn.picLazyLoad=function(b){function c(){d.each(function(){var c=a(this);if(c.is("img")){if(c.attr("data-original")){var d=c.offset().top;d-b.threshold<=f+e&&(c.attr("src",c.attr("data-original")),c.removeAttr("data-original"))}}else if(c.attr("data-original")){"none"==c.css("background-image")&&c.css("background-image","url("+b.placeholder+")");var d=c.offset().top;d-b.threshold<=f+e&&(c.css("background-image","url("+c.attr("data-original")+")"),c.removeAttr("data-original"))}})}var d=a(this),e=0,f=a(window).height();b=a.extend({threshold:0,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"},b||{}),c(),a(window).on("scroll",function(){e=a(window).scrollTop(),c()}),window.onhashchange=function(){e=a(window).scrollTop(),c()}}}(jQuery),$(function(){$(window).resize(function(){var a=$("#lean_modal"),b=$("#lean_toast"),c=$(".lean_hint");a.is(":visible")?a.hasClass("box_sheet")?a.hide().css({"margin-left":-a.outerWidth()/2+"px","margin-top":-a.outerHeight()+"px"}).slideDown(500):a.css({"margin-left":-a.outerWidth()/2+"px","margin-top":-a.outerHeight()/2+"px"}):"",b.is(":visible")?b.css({"margin-left":-b.outerWidth()/2+"px","margin-top":-b.outerHeight()/2+"px"}):"",c.each(function(){var a=$(this);a.is(":visible")?a.css("margin-left",-a.outerWidth()/2+"px").css({"margin-left":-a.outerWidth()/2+"px","margin-top":-a.outerHeight()/2+"px"}):""})})});