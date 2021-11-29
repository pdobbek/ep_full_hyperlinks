exports.moduleList=(()=>{const e=require("ep_etherpad-lite/static/js/pad_utils").randomString,t=require("ep_etherpad-lite/static/js/underscore"),n=function(){"use strict";const e=function(e){return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function t(t){if(!t)return;if(/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(t))return;if(/%[^0-9a-f]/i.test(t))return;if(/%[0-9a-f](:?[^0-9a-f]|$)/i.test(t))return;let n=[],i="",r="",a="",l="",s="",o="";if(n=e(t),i=n[1],r=n[2],a=n[3],l=n[4],s=n[5],i&&i.length&&a.length>=0){if(r&&r.length){if(0!==a.length&&!/^\//.test(a))return}else if(/^\/\//.test(a))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(i.toLowerCase()))return o+=i+":",r&&r.length&&(o+="//"+r),o+=a,l&&l.length&&(o+="?"+l),s&&s.length&&(o+="#"+s),o}}function n(n,i){if(!t(n))return;let r=[],a="",l="",s="",o="",c="",d="",p="";if(r=e(n),a=r[1],l=r[2],s=r[3],c=r[4],d=r[5],a){if(i){if("https"!=a.toLowerCase())return}else if("http"!=a.toLowerCase())return;if(l)return/:(\d+)$/.test(l)&&(o=l.match(/:(\d+)$/)[0],l=l.replace(/:\d+$/,"")),p+=a+":",p+="//"+l,o&&(p+=o),p+=s,c&&c.length&&(p+="?"+c),d&&d.length&&(p+="#"+d),p}}function i(e){return n(e,!0)}function r(e){return n(e)||i(e)}return{is_uri:t,is_http_uri:n,is_https_uri:i,is_web_uri:r,isUri:t,isHttpUri:n,isHttpsUri:i,isWebUri:r}}(),i=(()=>{const n=(e,n)=>{const i=(e=>{const n={};return t.each(e,(e,t)=>{const i=e.data.originalLinkId;n[i]=t}),n})(e);t.each(i,(e,t)=>{$(n).find("."+t).removeClass(t).addClass(e)});return o(n)},i=(e,n)=>{const i={},l=a(e);return t.each(l,e=>{const t=r(),a=n[e];a.data.originalLinkId=e,i[t]=a}),i},r=()=>"fakelink-"+e(16),a=e=>{const n=$(e).find("span"),i=[];t.each(n,e=>{const t=$(e).attr("class"),n=/(?:^| )(lc-[A-Za-z0-9]*)/.exec(t),r=!!n&&n[1];r&&i.push(r)});return t.uniq(i)},l=e=>{const t=e.cloneContents(),n=document.createElement("div");return $(n).html(t)},o=e=>$(e).html(),c=e=>{const t=o(e);return _(t)===$(e).text()},d=(e,t,n)=>{const i=h(e,n),r=p(i,t);return $.parseHTML(`<div>${r}</div>`)},p=(e,t)=>{const n=t.commonAncestorContainer.parentNode,i=k(n);return i&&(e=u(i)+e+f(i)),e},h=(e,t)=>`<span class="link ${t}">${e.slice(0,-1)}</span>`+`<span class="link ${t}">${e.slice(-1)}</span>`,u=e=>{let t="";return e.forEach(e=>{t+=`<${e}>`}),t},f=e=>{let t="";return(e=e.reverse()).forEach(e=>{t+=`</${e}>`}),t},k=e=>{const t=[];let n;if($(e)[0].hasOwnProperty("localName"))for(;"span"!==$(e)[0].localName;){const i=$(e).prop("outerHTML"),r=/<(b|i|u|s)>/.exec(i);n=r?r[1]:"",t.push(n),e=$(e).parent()}return t},g=e=>{const n={},i=clientVars.padId,r=pad.plugins.ep_full_hyperlinks.mapOriginalLinksId,a=pad.plugins.ep_full_hyperlinks.mapFakeLinks;t.each(e,(e,t)=>{m(e,t);const i=s.generateLinkId();a[t]=i;const l=e.data.originalLinkId;r[l]=i,n[i]=e}),pad.plugins.ep_full_hyperlinks.saveLinkWithoutSelection(i,n)},m=(e,t)=>{const n={};return n.padId=clientVars.padId,n.link=e.data,n.link.linkId=t,n},_=e=>{const t=document.createElement("div");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue},w=(e,t,n,i)=>{let r=!1;for(let a=e;a<=t&&!r;a++){const l=y(a,n,e),s=x(a,n,t);L(a,l,s,i)&&(r=!0)}return r},y=(e,t,n)=>e!==n?0:t.selStart[1],x=(e,t,n)=>{let i;return i=e!==n?b(e,t):t.selEnd[1]-1,i},L=(e,n,i,r)=>{let a=!1;for(let l=n;l<=i&&!a;l++){void 0!==t.object(r.getAttributesOnPosition(e,l)).link&&(a=!0)}return a},v=(e,t)=>e!==t,b=(e,t)=>{const n=e+1,i=t.lines.offsetOfIndex(e);return t.lines.offsetOfIndex(n)-i-1};return{addTextOnClipboard:(e,t,r,s,o)=>{let p,h;if(t.callWithAce(e=>{p=e.ace_getLinkIdOnFirstPositionSelected(),h=e.ace_hasLinkOnSelection()}),h){let t;const h=r.contents()[0].getSelection().getRangeAt(0),u=l(h);let f=u;if(c(u)){const e=u[0].textContent;f=d(e,h,p)}a(f);t=i(f,o);const k=n(t,f);t=JSON.stringify(t),e.originalEvent.clipboardData.setData("text/objectLink",t),e.originalEvent.clipboardData.setData("text/html",k),e.preventDefault(),s&&r.contents()[0].execCommand("delete")}},getLinkIdOnFirstPositionSelected:function(){const e=this.documentAttributeManager,n=this.rep;return t.object(e.getAttributesOnPosition(n.selStart[0],n.selStart[1])).link},hasLinkOnSelection:function(){let e;const t=this.documentAttributeManager,n=this.rep,i=n.selStart[0],r=n.selStart[1],a=n.selEnd[1],l=n.selEnd[0];return e=v(i,l)?w(i,l,n,t):L(i,r,a,t),e},saveLinks:(e,n)=>{let i=e.originalEvent.clipboardData.getData("text/objectLink");if(i)i=JSON.parse(i),g(i);else{let i,r,a="";i=e.originalEvent.clipboardData||window.clipboardData,r=i.getData("text");const l=i.getData("text/html");if(!n.contents()[0].getSelection().getRangeAt(0))return!1;if(l){e.preventDefault();const i=document.createElement("div");i.innerHTML=l;const r=i.getElementsByTagName("a"),a={};t.each(r,e=>{const t=e.href,n=e.innerHTML,i=s.generateLinkId();e.className=i,e.id=i,a[i]={data:{author:"empty",linkId:i,timestamp:(new Date).getTime(),text:n,originalLinkId:i,hyperlink:t,headerId:null,date:new Date,formattedDate:new Date}}}),pad.plugins.ep_full_hyperlinks.saveLinkWithoutSelection(clientVars.padId,a),n.contents()[0].execCommand("insertHTML",!1,$("<div>").append($(i).clone()).html())}else if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(r)){const t=/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi,i=r.match(t),l={};if(i){for(match in i.reverse()){const e={},t=s.generateLinkId();e.link=i[match],l[t]={data:{author:"empty",linkId:t,timestamp:(new Date).getTime(),text:e.link,originalLinkId:t,hyperlink:e.link,headerId:null,date:new Date,formattedDate:new Date}},e.startsAt=r.indexOf(i[match]);const n=`<span id="${t}" class="${t}">`,a="</span>";r=[r.slice(0,e.startsAt),n,r.slice(e.startsAt)].join(""),e.endsAt=r.indexOf(i[match])+i[match].length,r=[r.slice(0,e.endsAt),a,r.slice(e.endsAt)].join("")}r=r.replace(/(?:\r\n|\r|\n)/g,"<br>"),a=$("<div></div>").html(r),n.contents()[0].execCommand("insertHTML",!1,$("<div>").append($(a).clone()).html()),pad.plugins.ep_full_hyperlinks.saveLinkWithoutSelection(clientVars.padId,l),e.preventDefault()}}}}}})(),r=(()=>{let e;const t=()=>e=e||$('iframe[name="ace_outer"]').contents(),i=()=>t().find("#linkBoxWrapper"),a=()=>i().find(".link-container").hide(),l=e=>{const t=new URL(e);let n=!1;if(t.origin!==location.origin)return!1;if(t.origin===location.origin){const e=location.pathname.split("/").indexOf("p")>0,t=clientVars.padId,i=e?"/p/"+t:"/"+t;location.pathname.substring(0,i.length)===i&&(n=!0),clientVars.ep_singlePad.active&&(n=!0)}return n},s=e=>{const t=[],n=clientVars.padId,i=e.pathname.split("/");let r=i.indexOf(n)+1;clientVars.ep_singlePad.active&&(r=0);const a=[...i].splice(r,i.length-1);return t.push(...a),t};return{showLink:e=>i().find("#"+e).show(),hideLink:t=>{i().find("#"+t).hide(),e.find("#show-form-"+t).show(),e.find("#edit-form-"+t).hide()},hideAllLinks:a,showLinkModal:(e,l,s)=>{const o=$('iframe[name="ace_outer"]').contents(),c=t().find('iframe[name="ace_inner"]'),d=l.linkId,p=0!==i().find("#"+d).length;a();let h=i().find("#"+d);p||(h=$("#linkBoxTemplate").tmpl({...l}));let u=e.clientX;u+=c.offset().left;let f=$(e.target).offset().top;f+=parseInt(c.css("padding-top").split("px")[0]),f+=parseInt(o.find("#outerdocbody").css("padding-top").split("px")[0]),h.css({width:"324px"}),h.css({left:parseInt(u)+"px"}),h.css({top:parseInt(f)+35+"px"}),h.addClass("hyperlink-display");const k=h.attr("data-loaded");p?(h.show(),l.hyperlink!==h.find("a.ep_hyperlink_title").attr("href")&&h.attr("data-loaded","false"),h.attr("data-hyperlink",l.hyperlink),h.find("input#hyperlink-url").val(l.hyperlink),h.find("a.ep_hyperlink_title").attr({title:l.hyperlink,href:l.hyperlink})):o.find("#linkBoxWrapper").append(h);const g=c.contents().find("."+d).text();if(h.find("input#hyperlink-text-hidden").val(g),h.find("input#hyperlink-text").val(g),"true"!=k){let e,t=l.hyperlink||h.attr("data-hyperlink");console.log(t);try{e=new URL(t)}catch(e){return console.error("[hyperlink]: "+e),void r.hideLink(d)}const i=h.find("#ep_hyperlink_img"),a=h.find("a.ep_hyperlink_title"),o=h.find("#card_loading_hyperlink"),c=h.find("#ep_hyperlink_description");c.text(""),a.text(t),i.hide(),a.show(),o.show(),/^http:\/\//.test(t)||/^https:\/\//.test(t)||(t="https://"+t);const p=function(e,t,n){i.attr("src",n),i.on("load",()=>{o.fadeOut(500,()=>{i.fadeIn(),a.text(t.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"")),c.text(e.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"")),h.attr({"data-loaded":!0})})})};if(!n.isUri(t)){return p(t,t,"../static/plugins/ep_full_hyperlinks/static/dist/img/nometa.png"),!1}const u=function(n){if(n.metadata.image&&n.metadata.title)p(t,n.metadata.title,n.metadata.image);else{var i="https://"+e.hostname;!0!==n.last?s.emit("metaResolver",{padId:clientVars.padId,editedHyperlink:i,last:!0},u):p(t,n.metadata.title||t,"../static/plugins/ep_full_hyperlinks/static/dist/img/nometa.png")}};switch(e.hostname){case"twitter.com":p(t,t,"../static/plugins/ep_full_hyperlinks/static/dist/img/twitter.png");break;default:s.emit("metaResolver",{padId:clientVars.padId,hyperlink:t,last:!1},u)}}},getLinksContainer:i,shouldNotCloseLink:function(e){return!!($(e.target).closest(".link").length||$(e.target).closest(".link-modal").length||$(e.target).closest(".ep_hyperlink_docs_bubble_button_edit").length||$(e.target).closest(".ep_hyperlink_docs_bubble_button_delete").length||$(e.target).closest(".ep_hyperlink_docs_bubble_button_copy").length||$(e.target).closest(".full-display-link").length||$(e.target).closest(".link-title-wrapper").length||$(e.target).closest(".link-edit-form").length||$(e.target).closest(".link-text-text").length||$(e.target).closest(".link-text-hyperlink").length)},internalLinkClick:function(e){e.preventDefault(),e.stopPropagation();const t=$(this).attr("href");if(console.log("internalLinkClick",t,l(t),s(new URL(t))),l(t)){const e=new URL(t);let n=""+e.search;const i=s(e);if(i.length>0){n=location.pathname.split("/").indexOf("p")>0?"/p":"",clientVars.ep_singlePad.active||(n+="/"+clientVars.padId),n+=`/${i.join("/")}${e.search}`}0===e.search.length&&(n=t);const r=i.length>0?"filter":"other";window.history.pushState({type:"hyperLink",href:t,target:r},document.title,n),a()}else window.open(t,"_blank");return!1}}})(),a=(()=>{const e=()=>{$("#newLink").removeClass("popup-show"),$("#newLink").find(":focus").blur(),pad.plugins.ep_full_hyperlinks.preLinkMarker.unmarkSelectedText()};return{insertNewLinkPopupIfDontExist:(t,i)=>{$("#newLink").remove(),t.linkId="";const r=$("#newLinkTemplate").tmpl(t);return r.appendTo($("#editorcontainerbox")),$("#newLink #link-cancel-btn").on("click",t=>e()),$("#newLink #link-create-btn").on("click",t=>function(t){const i=$(document).find("#newLink"),r=(e=>({text:e.find("#hyperlink-text").val(),oldText:e.find("#hyperlink-text-hidden").val(),hyperlink:e.find("#hyperlink-url").val()}))(i);return r.text.length>0&&n.isUri(r.hyperlink)?(i.find("#hyperlink-text, #hyperlink-url").removeClass("error"),e(),t(r,0)):(0===r.text.length&&i.find("#hyperlink-text").addClass("error"),n.isUri(r.hyperlink)||i.find("#hyperlink-url").addClass("error")),!1}(i)),r},showNewLinkPopup:()=>{$("#newLink").css("left",$(".toolbar .addLink").offset().left),$("#newLink").find("textarea").val(""),$("#newLink").find(".link-content, .to-value").removeClass("error"),$("#newLink").addClass("popup-show"),pad.plugins.ep_full_hyperlinks.preLinkMarker.markSelectedText(),setTimeout(()=>{$("#newLink").find(".link-content").focus().select()},500)},hideNewLinkPopup:e}})(),l=(()=>{const e="pre-selected-link",t=function(e){this.ace=e;const t=this;this.highlightSelectedText()&&setTimeout(()=>{t.unmarkSelectedText()},0)};t.prototype.highlightSelectedText=function(){return clientVars.highlightSelectedText},t.prototype.markSelectedText=function(){this.highlightSelectedText()&&this.ace.callWithAce(n,"markPreSelectedTextToLink",!0)},t.prototype.unmarkSelectedText=function(){this.highlightSelectedText()&&this.ace.callWithAce(n,"unmarkPreSelectedTextToLink",!0)},t.prototype.performNonUnduableEvent=function(e,t,n){t.startNewEvent("nonundoable"),n(),t.startNewEvent(e)},t.prototype.handleMarkText=function(e){const t=e.editorInfo,n=e.rep,i=e.callstack;this.removeMarks(t,n,i),this.addMark(t,i)},t.prototype.handleUnmarkText=function(e){const t=e.editorInfo,n=e.rep,i=e.callstack;this.removeMarks(t,n,i)},t.prototype.addMark=function(t,n){const i=n.editEvent.eventType;this.performNonUnduableEvent(i,n,()=>{t.ace_setAttributeOnSelection(e,clientVars.userId)})},t.prototype.removeMarks=function(t,n,i){const r=i.editEvent.eventType,a=n.selStart,l=n.selEnd;this.performNonUnduableEvent(r,i,()=>{const n=$('iframe[name="ace_outer"]').contents().find('iframe[name="ace_inner"]'),i=t.ace_getRepFromSelector(".pre-selected-link",n);$.each(i,(n,i)=>{t.ace_performSelectionChange(i[0],i[1],!0),t.ace_setAttributeOnSelection(e,!1)}),t.ace_performSelectionChange(a,l,!0)})};const n=()=>{};return{MARK_CLASS:e,init:e=>new t(e)}})(),s={collectContentPre:(e,t)=>{const n=/(?:^| )(lc-[A-Za-z0-9]*)/.exec(t.cls),i=/(?:^| )(fakelink-[A-Za-z0-9]*)/.exec(t.cls);if(n&&n[1]&&t.cc.doAttrib(t.state,"link::"+n[1]),i){const e=pad.plugins.ep_full_hyperlinks.getMapfakeLinks()[i[1]];t.cc.doAttrib(t.state,"link::"+e)}return[]},generateLinkId:function(){return"lc-"+e(16)}};return{validUrl:n,events:i,linkBoxes:r,newLink:a,preLinkMark:l,shared:s}})();
//# sourceMappingURL=ep.full.hyperlinks.mini.js.map
