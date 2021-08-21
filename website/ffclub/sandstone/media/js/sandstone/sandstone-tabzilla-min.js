var Tabzilla=(function(b){var h="1.7.1";var m;var j;var C;var d;var x=false;var w=("matchMedia" in window);var p=(document.documentMode===9);var A=(typeof console=="object");var n="wide";var q="-1";var i=null;var l;var y=function(){var D=c();if(n!==D){n=D;u()}};var c=function(){if(w&&matchMedia("(max-width: 719px)").matches){return"compact"}return"wide"};var u=function(){if(n==="wide"){e()}else{g()}};var e=function(){f();a();m.focus()};var g=function(){k();r()};var k=function(){j.find(">ul").attr("role","presentation");C.each(function(D){i(this).attr({id:"tab-"+D,"aria-controls":"panel-"+D,tabindex:q,role:"tab","aria-expanded":false})});if(!j.find("h2[tabindex=0]").length){j.find("h2:first").attr("tabindex",0)}j.find("div").each(function(D){i(this).attr({id:"panel-"+D,"aria-labeledby":"tab-"+D,role:"tabpanel"}).css("display","none")})};var f=function(){j.find(">ul").removeAttr("role");C.removeAttr("id aria-controls tabindex role aria-expanded");j.find("div").removeAttr("id aria-labeledby role style")};var r=function(){j.on("click.submenu","h2",function(D){D.preventDefault();var E=i(D.target).next("div");i(D.target).attr("aria-expanded",E.is(":hidden"));E.toggle()});j.on("keydown.submenu",function(D){var F=D.which;var E=i(D.target);if(F===13||F===32){D.preventDefault();E.trigger("click")}if(F===37||F===38){D.preventDefault();C.each(function(G){if(G>0&&i(this).attr("tabindex")===0){i(this).attr("tabindex",q);i(C[G-1]).attr("tabindex",0).focus();return false}})}if(F===40||F===39){D.preventDefault();C.each(function(G){if(G<(C.length-1)&&i(this).attr("tabindex")===0){i(this).attr("tabindex",q);i(C[G+1]).attr("tabindex",0).focus();return false}})}if(F===27&&E.is("a")){D.preventDefault();D.stopPropagation();E.parents("div").prev("h2").trigger("click").focus()}})};var a=function(){j.off(".submenu")};b.open=function(){x=true;m.toggleClass("open");var D=i("#tabzilla-contents").height();m.animate({height:D},200,function(){m.css("height","auto")});d.attr({"aria-expanded":"true"}).addClass("tabzilla-opened").removeClass("tabzilla-closed");m.focus();return m};b.close=function(){x=false;m.animate({height:0},200,function(){m.toggleClass("open")});d.attr({"aria-expanded":"false"}).addClass("tabzilla-closed").removeClass("tabzilla-opened");return d};b.opened=function(){if(A){console.warn("This call is soon going to be deprecated, please replace it with Tabzilla.open() instead.")}return b.open()};b.closed=function(){if(A){console.warn("This call is soon going to be deprecated, please replace it with Tabzilla.close() instead.")}return b.close()};var z=function(){i.extend(i.easing,{easeInOut:function(E,F,D,H,G){if((F/=G/2)<1){return H/2*F*F+D}return -H/2*((--F)*(F-2)-1)+D}})};var o=function(){window.matchMedia=window.matchMedia||(function(H,I){var F;var D=H.documentElement;var E=D.firstElementChild||D.firstChild;var G=H.createElement("body");var J=H.createElement("div");J.id="mq-test-1";J.style.cssText="position:absolute;top:-100em";G.style.background="none";G.appendChild(J);return function(K){J.innerHTML='&shy;<style media="'+K+'"> #mq-test-1 { width: 42px; }</style>';D.insertBefore(G,E);F=J.offsetWidth===42;D.removeChild(G);return{matches:F,media:K}}}(document))};var t=function(){if(0==i("#tabzilla-panel").length){i("body").prepend(s)}d=i("#tabzilla");m=i("#tabzilla-panel");j=i("#tabzilla-nav");C=j.find("h2");if(p&&!w){o();w=true}z();y();i(window).on("resize",function(){y()});m.on("keydown",function(D){if(D.which===27){D.preventDefault();close()}});d.attr("aria-label","Mozilla links");d.on("click",function(D){D.preventDefault();if(x){b.close()}else{b.open()}})};var B=function(F){var E=function(){l=window.jQuery.noConflict(true);i=l;F.call()};var D=document.createElement("script");if(D.readyState){D.onreadystatechange=function(){if(D.readyState==="loaded"||D.readyState==="complete"){D.onreadystatechange=null;E.call()}}}else{D.onload=E}D.src="//mozorg.cdn.mozilla.net/media/js/libs/jquery-"+h+".min.js";document.getElementsByTagName("head")[0].appendChild(D)};var v=function(E,D){E=(""+E).split(".");D=(""+D).split(".");while(E.length<D.length){E.push("0")}while(D.length<E.length){D.push("0")}for(var F=0;F<E.length;F++){if(E[F]>D[F]){return 1}if(E[F]<D[F]){return -1}}return 0};(function(){if(window.jQuery!==undefined&&v(window.jQuery.fn.jquery,h)!==-1){l=window.jQuery;i=l;i(document).ready(t)}else{B(t)}})();var s='<div id="tabzilla-panel" class="close-nav" tabindex="-1">  <div id="tabzilla-contents">    <div id="tabzilla-promo">    <div id="tabzilla-promo-webwewant" class="snippet">      <a href="https://webwewant.mozilla.org/?icn=tabz">        <h4>你想要什麼樣的網路？</h4>        <p>分享你的觀點</p>      </a>    </div><!-- end of promo-name -->    </div>    <!-- end of tabzilla-promo -->    <div id="tabzilla-nav">      <ul>        <li class="sitemap">          <h2>Firefox</h2>          <div>            <ul>              <li>                <a href="//mozilla.com.tw/firefox/download/" title="下載 Mozilla Firefox 中文桌面版" tabindex="-1">Firefox 免費下載</a>              </li>              <li>                <a href="//mozilla.com.tw/firefox/desktop/" title="下載 Mozilla Firefox 中文桌面版">Firefox 桌面版</a>              </li>              <li>                <a href="//mozilla.com.tw/firefox/mobile/" title="Mozilla Firefox 行動版">Firefox 行動版</a>              </li>              <li>                <a href="//mozilla.com.tw/firefox/channel/" title="Mozilla Firefox 未來發行版">Firefox 未來發行版</a>              </li>              <li>                <a href="https://addons.mozilla.org/zh-TW/firefox/" title="Firefox 附加元件">附加元件</a>              </li>              <li>                <a href="https://support.mozilla.com/zh-TW/home" title="Firefox 說明文件、支援中心">支援中心</a>              </li>            </ul>          </div>        </li>        <li class="sitemap">          <h2>Firefox OS</h2>          <div>            <ul>              <li>                <a title="Firefox OS 詳細介紹" href="//mozilla.com.tw/firefox/os/" tabindex="-1">詳細介紹</a>              </li>              <li>                <a title="Firefox OS 合作夥伴專區" href="//mozilla.com.tw/firefox/partners/" tabindex="-1">合作夥伴專區</a>              </li>              <li>                <a title="Firefox OS 支援中心" href="//support.mozilla.org/products/firefox-os" tabindex="-1">支援中心</a>              </li>              <li>                <a title="Firefox OS 常見問答集" href="//mozilla.com.tw/firefox/os/faq/" tabindex="-1">常見問答集</a>              </li>            </ul>          </div>        </li>        <li class="sitemap">          <h2>社群參與</h2>          <div>            <ul>              <li>                <a href="http://firefox.club.tw/" title="Firefox 活力軍">Firefox 設計品</a>              </li>              <li>                <a href="//mozilla.com.tw/community/student/" title="校園大使">校園大使</a>              </li>              <li>                <a href="//mozilla.com.tw/community/contribute/" title="社群專案">社群專案</a>              </li>            </ul>          </div>        </li>        <li class="sitemap">          <h2>訊息中心</h2>          <div>            <ul>              <li>                <a href="//blog.mozilla.com.tw/main" title="部落格">部落格</a>              </li>              <li>                <a href="//mozilla.com.tw/news/press/" title="新聞室">新聞室</a>              </li>              <li>                <a href="//blog.mozilla.com.tw/events-list" title="活動訊息">活動訊息</a>              </li>              <li>                <a href="//tech.mozilla.com.tw/" title="謀智台客">謀智台客</a>              </li>            </ul>          </div>        </li>        <li class="sitemap">          <h2>關於我們</h2>          <div>            <ul>              <li>                <a href="//mozilla.com.tw/about/manifesto/" title="Mozilla 宣言">Mozilla 宣言</a>              </li>              <li>                <a href="//mozilla.com.tw/about/space/" title="Mozilla Space">Mozilla Space</a>              </li>              <li>                <a href="//mozilla.com.tw/about/careers/" title="工作機會">工作機會</a>              </li>              <li>                <a href="//mozilla.com.tw/about/intern/" title="工作機會">實習機會</a>              </li>              <li>                <a href="//mozilla.com.tw/about/contact/" title="聯絡資訊">聯絡資訊</a>              </li>              <li>                <a href="//mozilla.org/en-US/" title="Mozilla (US)">Mozilla (US)</a>              </li>            </ul>          </div>        </li>        <!-- end of sitemap -->      </ul>    </div>    <!-- end of tabzilla-nav -->  </div>  <!-- end of tabzilla-content --></div><!-- end of tabzilla-panel -->';return b})(Tabzilla||{});