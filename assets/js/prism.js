/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+clike+php+bash+python+ruby+markdown&plugins=highlight-keywords */
self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var l in a)a.hasOwnProperty(l)&&(s[l]=a[l]);s[o]=i[o]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var l,s,o=a;o&&!e.test(o.className);)o=o.parentNode;if(o&&(l=(o.className.match(e)||[,""])[1],s=t.languages[l]),s){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var u=a.textContent;if(u){u=u.replace(/^(?:\r?\n|\r)/,"");var g={element:a,language:l,grammar:s,code:u};if(t.hooks.run("before-highlight",g),r&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){g.highlightedCode=n.stringify(JSON.parse(e.data),l),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(g.element),t.hooks.run("after-highlight",g)},c.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",g)}}},highlight:function(e,a,r){var i=t.tokenize(e,a);return n.stringify(t.util.encode(i),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var l in i)n[l]=i[l];delete n.rest}e:for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var s=n[l];s="Array"===t.util.type(s)?s:[s];for(var o=0;o<s.length;++o){var u=s[o],g=u.inside,c=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),N=[p,1];b&&N.push(b);var O=new a(l,g?t.tokenize(m,g):m,h);N.push(O),w&&N.push(w),Array.prototype.splice.apply(r,N)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}t.hooks.run("wrap",i);var s="";for(var o in i.attributes)s+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism);;
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});;
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/};;
Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/).*?(\r?\n|$))/,lookbehind:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*?(\r?\n|$)/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/(\?>|<\?php|<\?)/i,variable:/(\$\w+)\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(n){return e.tokenStack.push(n),"{{{PHP"+e.tokenStack.length+"}}}"}))}),Prism.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var n,a=0;n=e.tokenStack[a];a++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(a+1)+"}}}",Prism.highlight(n,e.grammar,"php"));e.element.innerHTML=e.highlightedCode}}),Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/}));;
Prism.languages.bash=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])(#.*?(\r?\n|$))/,lookbehind:!0},string:{pattern:/("|')(\\?[\s\S])*?\1/,inside:{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/}},keyword:/\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/}),Prism.languages.insertBefore("bash","keyword",{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/}),Prism.languages.insertBefore("bash","comment",{important:/(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/});;
Prism.languages.python={comment:{pattern:/(^|[^\\])#.*?(\r?\n|$)/,lookbehind:!0},string:/"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(\\?.)*?\1/,keyword:/\b(as|assert|break|class|continue|def|del|elf|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(True|False)\b/,number:/\b-?(0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+]|<=?|>=?|!|={1,2}|&{1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/,punctuation:/[{}[\];(),.:]/};;
Prism.languages.ruby=Prism.languages.extend("clike",{comment:/#[^\r\n]*(\r?\n|$)/,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/,builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*[?!]?\b/}),Prism.languages.insertBefore("ruby","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0},variable:/[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/,symbol:/:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/});;
Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/(^|\n)>(?:[\t ]*>)*/,lookbehind:!0,alias:"punctuation"},code:[{pattern:/(^|\n)(?: {4}|\t).+/,lookbehind:!0,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*\n(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/((?:^|\n)\s*)#+.+/,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/((?:^|\n)\s*)([*-])([\t ]*\2){2,}(?=\s*(?:\n|$))/,lookbehind:!0,alias:"punctuation"},list:{pattern:/((?:^|\n)\s*)(?:[*+-]|\d+\.)(?=[\t ].)/,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:[^>]|\\>)+>)(?:[\t ]+(?:"(?:[^"]|\\")*"|'(?:[^']|\\')*'|\((?:[^)]|\\\))*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:[^"]|\\")*"|'(?:[^']|\\')*'|\((?:[^)]|\\\))*\))$/,punctuation:/[[\]\(\)<>:]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:\n(?!\n)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*\s*$|__\s*$/}},italic:{pattern:/(^|[^\\])(?:\*(?:\n(?!\n)|.)+?\*|_(?:\n(?!\n)|.)+?_)/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:[^"]|\\")*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:[^"]|\\")*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold);;
!function(){self.Prism&&Prism.hooks.add("wrap",function(s){"keyword"===s.type&&s.classes.push("keyword-"+s.content)})}();;
