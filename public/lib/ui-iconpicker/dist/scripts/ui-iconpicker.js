/**
 * ui-iconpicker
 *
 * @version   v0.1.4
 * @author    Justin Lau <justin@tclau.com>
 * @copyright Copyright (c) 2014 Justin Lau <justin@tclau.com>
 * @license   The MIT License (MIT)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("values/icon-groups-map", ["angular"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/values/icon-groups-map", []);
    return module.value("iconGroupsMap", {
      "bootstrap": {
        prefix: "glyphicon glyphicon-",
        classes: ["asterisk", "plus", "euro", "minus", "cloud", "envelope", "pencil", "glass", "music", "search", "heart", "star", "star-empty", "user", "film", "th-large", "th", "th-list", "ok", "remove", "zoom-in", "zoom-out", "off", "signal", "cog", "trash", "home", "file", "time", "road", "download-alt", "download", "upload", "inbox", "play-circle", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "indent-left", "indent-right", "facetime-video", "picture", "map-marker", "adjust", "tint", "edit", "share", "check", "move", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-sign", "minus-sign", "remove-sign", "ok-sign", "question-sign", "info-sign", "screenshot", "remove-circle", "ok-circle", "ban-circle", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "share-alt", "resize-full", "resize-small", "exclamation-sign", "gift", "leaf", "fire", "eye-open", "eye-close", "warning-sign", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder-close", "folder-open", "resize-vertical", "resize-horizontal", "hdd", "bullhorn", "bell", "certificate", "thumbs-up", "thumbs-down", "hand-right", "hand-left", "hand-up", "hand-down", "circle-arrow-right", "circle-arrow-left", "circle-arrow-up", "circle-arrow-down", "globe", "wrench", "tasks", "filter", "briefcase", "fullscreen", "dashboard", "paperclip", "heart-empty", "link", "phone", "pushpin", "usd", "gbp", "sort", "sort-by-alphabet", "sort-by-alphabet-alt", "sort-by-order", "sort-by-order-alt", "sort-by-attributes", "sort-by-attributes-alt", "unchecked", "expand", "collapse-down", "collapse-up", "log-in", "flash", "log-out", "new-window", "record", "save", "open", "saved", "import", "export", "send", "floppy-disk", "floppy-saved", "floppy-remove", "floppy-save", "floppy-open", "credit-card", "transfer", "cutlery", "header", "compressed", "earphone", "phone-alt", "tower", "stats", "sd-video", "hd-video", "subtitles", "sound-stereo", "sound-dolby", "sound-5-1", "sound-6-1", "sound-7-1", "copyright-mark", "registration-mark", "cloud-download", "cloud-upload", "tree-conifer", "tree-deciduous"]
      },
      "font-awesome": {
        prefix: "fa fa-lg fa-",
        classes: ["glass", "music", "search", "envelope-o", "heart", "star", "star-o", "user", "film", "th-large", "th", "th-list", "check", "times", "search-plus", "search-minus", "power-off", "signal", "gear", "cog", "trash-o", "home", "file-o", "clock-o", "road", "download", "arrow-circle-o-down", "arrow-circle-o-up", "inbox", "play-circle-o", "rotate-right", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "dedent", "outdent", "indent", "video-camera", "picture-o", "pencil", "map-marker", "adjust", "tint", "edit", "pencil-square-o", "share-square-o", "check-square-o", "arrows", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-circle", "minus-circle", "times-circle", "check-circle", "question-circle", "info-circle", "crosshairs", "times-circle-o", "check-circle-o", "ban", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "mail-forward", "share", "expand", "compress", "plus", "minus", "asterisk", "exclamation-circle", "gift", "leaf", "fire", "eye", "eye-slash", "warning", "exclamation-triangle", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder", "folder-open", "arrows-v", "arrows-h", "bar-chart-o", "twitter-square", "facebook-square", "camera-retro", "key", "gears", "cogs", "comments", "thumbs-o-up", "thumbs-o-down", "star-half", "heart-o", "sign-out", "linkedin-square", "thumb-tack", "external-link", "sign-in", "trophy", "github-square", "upload", "lemon-o", "phone", "square-o", "bookmark-o", "phone-square", "twitter", "facebook", "github", "unlock", "credit-card", "rss", "hdd-o", "bullhorn", "bell", "certificate", "hand-o-right", "hand-o-left", "hand-o-up", "hand-o-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-circle-down", "globe", "wrench", "tasks", "filter", "briefcase", "arrows-alt", "group", "users", "chain", "link", "cloud", "flask", "cut", "scissors", "copy", "files-o", "paperclip", "save", "floppy-o", "square", "bars", "list-ul", "list-ol", "strikethrough", "underline", "table", "magic", "truck", "pinterest", "pinterest-square", "google-plus-square", "google-plus", "money", "caret-down", "caret-up", "caret-left", "caret-right", "columns", "unsorted", "sort", "sort-down", "sort-asc", "sort-up", "sort-desc", "envelope", "linkedin", "rotate-left", "undo", "legal", "gavel", "dashboard", "tachometer", "comment-o", "comments-o", "flash", "bolt", "sitemap", "umbrella", "paste", "clipboard", "lightbulb-o", "exchange", "cloud-download", "cloud-upload", "user-md", "stethoscope", "suitcase", "bell-o", "coffee", "cutlery", "file-text-o", "building-o", "hospital-o", "ambulance", "medkit", "fighter-jet", "beer", "h-square", "plus-square", "angle-double-left", "angle-double-right", "angle-double-up", "angle-double-down", "angle-left", "angle-right", "angle-up", "angle-down", "desktop", "laptop", "tablet", "mobile-phone", "mobile", "circle-o", "quote-left", "quote-right", "spinner", "circle", "mail-reply", "reply", "github-alt", "folder-o", "folder-open-o", "smile-o", "frown-o", "meh-o", "gamepad", "keyboard-o", "flag-o", "flag-checkered", "terminal", "code", "reply-all", "mail-reply-all", "star-half-empty", "star-half-full", "star-half-o", "location-arrow", "crop", "code-fork", "unlink", "chain-broken", "question", "info", "exclamation", "superscript", "subscript", "eraser", "puzzle-piece", "microphone", "microphone-slash", "shield", "calendar-o", "fire-extinguisher", "rocket", "maxcdn", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-circle-down", "html5", "css3", "anchor", "unlock-alt", "bullseye", "ellipsis-h", "ellipsis-v", "rss-square", "play-circle", "ticket", "minus-square", "minus-square-o", "level-up", "level-down", "check-square", "pencil-square", "external-link-square", "share-square", "compass", "toggle-down", "caret-square-o-down", "toggle-up", "caret-square-o-up", "toggle-right", "caret-square-o-right", "euro", "eur", "gbp", "dollar", "usd", "rupee", "inr", "cny", "rmb", "yen", "jpy", "ruble", "rouble", "rub", "won", "krw", "bitcoin", "btc", "file", "file-text", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-numeric-asc", "sort-numeric-desc", "thumbs-up", "thumbs-down", "youtube-square", "youtube", "xing", "xing-square", "youtube-play", "dropbox", "stack-overflow", "instagram", "flickr", "adn", "bitbucket", "bitbucket-square", "tumblr", "tumblr-square", "long-arrow-down", "long-arrow-up", "long-arrow-left", "long-arrow-right", "apple", "windows", "android", "linux", "dribbble", "skype", "foursquare", "trello", "female", "male", "gittip", "sun-o", "moon-o", "archive", "bug", "vk", "weibo", "renren", "pagelines", "stack-exchange", "arrow-circle-o-right", "arrow-circle-o-left", "toggle-left", "caret-square-o-left", "dot-circle-o", "wheelchair", "vimeo-square", "turkish-lira", "try", "plus-square-o"]
      },
      "font-humanitarian": {
        prefix: "fa fa-lg icon-",
        classes: ["ocha-sector-registration","ocha-sector-security","ocha-sector-recovery","ocha-sector-education","ocha-sector-telecommunication","ocha-sector-foodsecurity","ocha-sector-health","ocha-sector-logistic","ocha-sector-wash","ocha-sector-agriculture","ocha-sector-coordination","ocha-sector-protection","ocha-sector-campmanagement","ocha-sector-livelihood","ocha-sector-sgbv","ocha-sector-community","ocha-sector-shelter","ocha-sector-childprotection","ocha-sector-cash","ocha-affected-population","ocha-affected-man","ocha-affected-woman","ocha-affected-elderly","ocha-affected-baby","ocha-affected-child","ocha-affected-disabled","ocha-affected-dead","child_soldier","individual","ocha-item-blanket","ocha-item-bucket","ocha-item-clothing","ocha-item-food","ocha-item-kitchenset","ocha-item-mattress","ocha-item-vaccine","ocha-item-plasticsheeting","ocha-item-reliefgood","ocha-item-stove","ocha-item-tarpaulin","ocha-item-tent","ocha-item-mosquitonet","ocha-item-nonfooditem","ocha-cash","event-bluehelmet","event-force","event-collaborate","event-foodshortage","event-judge","event-protest","event-cashwork","event-handshake","event-abduction","event-papercontrol","event-lecturer","event-hit","event-gardening","event-register","event-violence","ocha-security","unhcr-office","unhcr-locations-camp","unhcr-locations-settlement","unhcr-location-accommodation","unhcr-locations-dispersed-population","unhcr-locations-centre","unhcr-locations-urban","unhcr-location","unhcr-reception-centre","unhcr-detention-centre","unhcr-entry-facility-centre","unhcr-separated-children-centre","unhcr-open-shelter","unhcr-governement-office-linked-to-rsd","unhcr-government-office-linked-to-reception-centre","office-government","office-diplomatic","office-united-nations","office-ngo","orga-acp","orga-amnesty-international","orga-care-international","orga-caritas-internationalis","orga-civil-defence","orga-ecowas","orga-ecre","orga-european-commission","orga-fao","orga-gichd","orga-human-rights-watch","orga-icrc","orga-icva","orga-ifrc","orga-iftdh","orga-ilo","orga-interaction","orga-iom","orga-irc","orga-itu","orga-iucn","orga-loas","orga-lwf","orga-mdm","orga-nato","orga-ocha","orga-ohchr","orga-oic","orga-osagi","orga-osce","orga-oxfam","orga-international-save-the-child-alliance","orga-union-of-africa","orga-unaids","orga-undp","orga-unece","orga-unep","orga-unesco","orga-unfpa","orga-unhcr","orga-unhsp","orga-unicef","orga-unitair","orga-undoc","orga-unops","orga-unrwa","orga-unv","orga-voice","orga-wcc","orga-wfp","orga-who","orga-wipo","orga-wmo","orga-word-bank","orga-msf","orga-unog","orga-cartong"]
      },
      "relief-web": {
        prefix: "fa fa-lg ",
        classes: ["icon-cold-wave","icon-drought","icon-earthquake","icon-epidemic","icon-extratropical-cyclone","icon-fire","icon-flash-flood","icon-flood","icon-heat-wave","icon-insect-infestation","icon-land-slide","icon-MS","icon-mud-slide","icon-other","icon-severe-local-storm","icon-snow-avalanche","icon-storm-surge","icon-technological-disaster","icon-tropical-cyclone","icon-tsunami","icon-volcano","icon-wild-fire"]      
      },
      "all": {
        prefix: "",
        classes: ["glyphicon glyphicon-asterisk", "glyphicon glyphicon-plus", "glyphicon glyphicon-euro", "glyphicon glyphicon-minus", "glyphicon glyphicon-cloud", "glyphicon glyphicon-envelope", "glyphicon glyphicon-pencil", "glyphicon glyphicon-glass", "glyphicon glyphicon-music", "glyphicon glyphicon-search", "glyphicon glyphicon-heart", "glyphicon glyphicon-star", "glyphicon glyphicon-star-empty", "glyphicon glyphicon-user", "glyphicon glyphicon-film", "glyphicon glyphicon-th-large", "glyphicon glyphicon-th", "glyphicon glyphicon-th-list", "glyphicon glyphicon-ok", "glyphicon glyphicon-remove", "glyphicon glyphicon-zoom-in", "glyphicon glyphicon-zoom-out", "glyphicon glyphicon-off", "glyphicon glyphicon-signal", "glyphicon glyphicon-cog", "glyphicon glyphicon-trash", "glyphicon glyphicon-home", "glyphicon glyphicon-file", "glyphicon glyphicon-time", "glyphicon glyphicon-road", "glyphicon glyphicon-download-alt", "glyphicon glyphicon-download", "glyphicon glyphicon-upload", "glyphicon glyphicon-inbox", "glyphicon glyphicon-play-circle", "glyphicon glyphicon-repeat", "glyphicon glyphicon-refresh", "glyphicon glyphicon-list-alt", "glyphicon glyphicon-lock", "glyphicon glyphicon-flag", "glyphicon glyphicon-headphones", "glyphicon glyphicon-volume-off", "glyphicon glyphicon-volume-down", "glyphicon glyphicon-volume-up", "glyphicon glyphicon-qrcode", "glyphicon glyphicon-barcode", "glyphicon glyphicon-tag", "glyphicon glyphicon-tags", "glyphicon glyphicon-book", "glyphicon glyphicon-bookmark", "glyphicon glyphicon-print", "glyphicon glyphicon-camera", "glyphicon glyphicon-font", "glyphicon glyphicon-bold", "glyphicon glyphicon-italic", "glyphicon glyphicon-text-height", "glyphicon glyphicon-text-width", "glyphicon glyphicon-align-left", "glyphicon glyphicon-align-center", "glyphicon glyphicon-align-right", "glyphicon glyphicon-align-justify", "glyphicon glyphicon-list", "glyphicon glyphicon-indent-left", "glyphicon glyphicon-indent-right", "glyphicon glyphicon-facetime-video", "glyphicon glyphicon-picture", "glyphicon glyphicon-map-marker", "glyphicon glyphicon-adjust", "glyphicon glyphicon-tint", "glyphicon glyphicon-edit", "glyphicon glyphicon-share", "glyphicon glyphicon-check", "glyphicon glyphicon-move", "glyphicon glyphicon-step-backward", "glyphicon glyphicon-fast-backward", "glyphicon glyphicon-backward", "glyphicon glyphicon-play", "glyphicon glyphicon-pause", "glyphicon glyphicon-stop", "glyphicon glyphicon-forward", "glyphicon glyphicon-fast-forward", "glyphicon glyphicon-step-forward", "glyphicon glyphicon-eject", "glyphicon glyphicon-chevron-left", "glyphicon glyphicon-chevron-right", "glyphicon glyphicon-plus-sign", "glyphicon glyphicon-minus-sign", "glyphicon glyphicon-remove-sign", "glyphicon glyphicon-ok-sign", "glyphicon glyphicon-question-sign", "glyphicon glyphicon-info-sign", "glyphicon glyphicon-screenshot", "glyphicon glyphicon-remove-circle", "glyphicon glyphicon-ok-circle", "glyphicon glyphicon-ban-circle", "glyphicon glyphicon-arrow-left", "glyphicon glyphicon-arrow-right", "glyphicon glyphicon-arrow-up", "glyphicon glyphicon-arrow-down", "glyphicon glyphicon-share-alt", "glyphicon glyphicon-resize-full", "glyphicon glyphicon-resize-small", "glyphicon glyphicon-exclamation-sign", "glyphicon glyphicon-gift", "glyphicon glyphicon-leaf", "glyphicon glyphicon-fire", "glyphicon glyphicon-eye-open", "glyphicon glyphicon-eye-close", "glyphicon glyphicon-warning-sign", "glyphicon glyphicon-plane", "glyphicon glyphicon-calendar", "glyphicon glyphicon-random", "glyphicon glyphicon-comment", "glyphicon glyphicon-magnet", "glyphicon glyphicon-chevron-up", "glyphicon glyphicon-chevron-down", "glyphicon glyphicon-retweet", "glyphicon glyphicon-shopping-cart", "glyphicon glyphicon-folder-close", "glyphicon glyphicon-folder-open", "glyphicon glyphicon-resize-vertical", "glyphicon glyphicon-resize-horizontal", "glyphicon glyphicon-hdd", "glyphicon glyphicon-bullhorn", "glyphicon glyphicon-bell", "glyphicon glyphicon-certificate", "glyphicon glyphicon-thumbs-up", "glyphicon glyphicon-thumbs-down", "glyphicon glyphicon-hand-right", "glyphicon glyphicon-hand-left", "glyphicon glyphicon-hand-up", "glyphicon glyphicon-hand-down", "glyphicon glyphicon-circle-arrow-right", "glyphicon glyphicon-circle-arrow-left", "glyphicon glyphicon-circle-arrow-up", "glyphicon glyphicon-circle-arrow-down", "glyphicon glyphicon-globe", "glyphicon glyphicon-wrench", "glyphicon glyphicon-tasks", "glyphicon glyphicon-filter", "glyphicon glyphicon-briefcase", "glyphicon glyphicon-fullscreen", "glyphicon glyphicon-dashboard", "glyphicon glyphicon-paperclip", "glyphicon glyphicon-heart-empty", "glyphicon glyphicon-link", "glyphicon glyphicon-phone", "glyphicon glyphicon-pushpin", "glyphicon glyphicon-usd", "glyphicon glyphicon-gbp", "glyphicon glyphicon-sort", "glyphicon glyphicon-sort-by-alphabet", "glyphicon glyphicon-sort-by-alphabet-alt", "glyphicon glyphicon-sort-by-order", "glyphicon glyphicon-sort-by-order-alt", "glyphicon glyphicon-sort-by-attributes", "glyphicon glyphicon-sort-by-attributes-alt", "glyphicon glyphicon-unchecked", "glyphicon glyphicon-expand", "glyphicon glyphicon-collapse-down", "glyphicon glyphicon-collapse-up", "glyphicon glyphicon-log-in", "glyphicon glyphicon-flash", "glyphicon glyphicon-log-out", "glyphicon glyphicon-new-window", "glyphicon glyphicon-record", "glyphicon glyphicon-save", "glyphicon glyphicon-open", "glyphicon glyphicon-saved", "glyphicon glyphicon-import", "glyphicon glyphicon-export", "glyphicon glyphicon-send", "glyphicon glyphicon-floppy-disk", "glyphicon glyphicon-floppy-saved", "glyphicon glyphicon-floppy-remove", "glyphicon glyphicon-floppy-save", "glyphicon glyphicon-floppy-open", "glyphicon glyphicon-credit-card", "glyphicon glyphicon-transfer", "glyphicon glyphicon-cutlery", "glyphicon glyphicon-header", "glyphicon glyphicon-compressed", "glyphicon glyphicon-earphone", "glyphicon glyphicon-phone-alt", "glyphicon glyphicon-tower", "glyphicon glyphicon-stats", "glyphicon glyphicon-sd-video", "glyphicon glyphicon-hd-video", "glyphicon glyphicon-subtitles", "glyphicon glyphicon-sound-stereo", "glyphicon glyphicon-sound-dolby", "glyphicon glyphicon-sound-5-1", "glyphicon glyphicon-sound-6-1", "glyphicon glyphicon-sound-7-1", "glyphicon glyphicon-copyright-mark", "glyphicon glyphicon-registration-mark", "glyphicon glyphicon-cloud-download", "glyphicon glyphicon-cloud-upload", "glyphicon glyphicon-tree-conifer", "glyphicon glyphicon-tree-deciduous", "fa fa-lg fa-glass", "fa fa-lg fa-music", "fa fa-lg fa-search", "fa fa-lg fa-envelope-o", "fa fa-lg fa-heart", "fa fa-lg fa-star", "fa fa-lg fa-star-o", "fa fa-lg fa-user", "fa fa-lg fa-film", "fa fa-lg fa-th-large", "fa fa-lg fa-th", "fa fa-lg fa-th-list", "fa fa-lg fa-check", "fa fa-lg fa-times", "fa fa-lg fa-search-plus", "fa fa-lg fa-search-minus", "fa fa-lg fa-power-off", "fa fa-lg fa-signal", "fa fa-lg fa-gear", "fa fa-lg fa-cog", "fa fa-lg fa-trash-o", "fa fa-lg fa-home", "fa fa-lg fa-file-o", "fa fa-lg fa-clock-o", "fa fa-lg fa-road", "fa fa-lg fa-download", "fa fa-lg fa-arrow-circle-o-down", "fa fa-lg fa-arrow-circle-o-up", "fa fa-lg fa-inbox", "fa fa-lg fa-play-circle-o", "fa fa-lg fa-rotate-right", "fa fa-lg fa-repeat", "fa fa-lg fa-refresh", "fa fa-lg fa-list-alt", "fa fa-lg fa-lock", "fa fa-lg fa-flag", "fa fa-lg fa-headphones", "fa fa-lg fa-volume-off", "fa fa-lg fa-volume-down", "fa fa-lg fa-volume-up", "fa fa-lg fa-qrcode", "fa fa-lg fa-barcode", "fa fa-lg fa-tag", "fa fa-lg fa-tags", "fa fa-lg fa-book", "fa fa-lg fa-bookmark", "fa fa-lg fa-print", "fa fa-lg fa-camera", "fa fa-lg fa-font", "fa fa-lg fa-bold", "fa fa-lg fa-italic", "fa fa-lg fa-text-height", "fa fa-lg fa-text-width", "fa fa-lg fa-align-left", "fa fa-lg fa-align-center", "fa fa-lg fa-align-right", "fa fa-lg fa-align-justify", "fa fa-lg fa-list", "fa fa-lg fa-dedent", "fa fa-lg fa-outdent", "fa fa-lg fa-indent", "fa fa-lg fa-video-camera", "fa fa-lg fa-picture-o", "fa fa-lg fa-pencil", "fa fa-lg fa-map-marker", "fa fa-lg fa-adjust", "fa fa-lg fa-tint", "fa fa-lg fa-edit", "fa fa-lg fa-pencil-square-o", "fa fa-lg fa-share-square-o", "fa fa-lg fa-check-square-o", "fa fa-lg fa-arrows", "fa fa-lg fa-step-backward", "fa fa-lg fa-fast-backward", "fa fa-lg fa-backward", "fa fa-lg fa-play", "fa fa-lg fa-pause", "fa fa-lg fa-stop", "fa fa-lg fa-forward", "fa fa-lg fa-fast-forward", "fa fa-lg fa-step-forward", "fa fa-lg fa-eject", "fa fa-lg fa-chevron-left", "fa fa-lg fa-chevron-right", "fa fa-lg fa-plus-circle", "fa fa-lg fa-minus-circle", "fa fa-lg fa-times-circle", "fa fa-lg fa-check-circle", "fa fa-lg fa-question-circle", "fa fa-lg fa-info-circle", "fa fa-lg fa-crosshairs", "fa fa-lg fa-times-circle-o", "fa fa-lg fa-check-circle-o", "fa fa-lg fa-ban", "fa fa-lg fa-arrow-left", "fa fa-lg fa-arrow-right", "fa fa-lg fa-arrow-up", "fa fa-lg fa-arrow-down", "fa fa-lg fa-mail-forward", "fa fa-lg fa-share", "fa fa-lg fa-expand", "fa fa-lg fa-compress", "fa fa-lg fa-plus", "fa fa-lg fa-minus", "fa fa-lg fa-asterisk", "fa fa-lg fa-exclamation-circle", "fa fa-lg fa-gift", "fa fa-lg fa-leaf", "fa fa-lg fa-fire", "fa fa-lg fa-eye", "fa fa-lg fa-eye-slash", "fa fa-lg fa-warning", "fa fa-lg fa-exclamation-triangle", "fa fa-lg fa-plane", "fa fa-lg fa-calendar", "fa fa-lg fa-random", "fa fa-lg fa-comment", "fa fa-lg fa-magnet", "fa fa-lg fa-chevron-up", "fa fa-lg fa-chevron-down", "fa fa-lg fa-retweet", "fa fa-lg fa-shopping-cart", "fa fa-lg fa-folder", "fa fa-lg fa-folder-open", "fa fa-lg fa-arrows-v", "fa fa-lg fa-arrows-h", "fa fa-lg fa-bar-chart-o", "fa fa-lg fa-twitter-square", "fa fa-lg fa-facebook-square", "fa fa-lg fa-camera-retro", "fa fa-lg fa-key", "fa fa-lg fa-gears", "fa fa-lg fa-cogs", "fa fa-lg fa-comments", "fa fa-lg fa-thumbs-o-up", "fa fa-lg fa-thumbs-o-down", "fa fa-lg fa-star-half", "fa fa-lg fa-heart-o", "fa fa-lg fa-sign-out", "fa fa-lg fa-linkedin-square", "fa fa-lg fa-thumb-tack", "fa fa-lg fa-external-link", "fa fa-lg fa-sign-in", "fa fa-lg fa-trophy", "fa fa-lg fa-github-square", "fa fa-lg fa-upload", "fa fa-lg fa-lemon-o", "fa fa-lg fa-phone", "fa fa-lg fa-square-o", "fa fa-lg fa-bookmark-o", "fa fa-lg fa-phone-square", "fa fa-lg fa-twitter", "fa fa-lg fa-facebook", "fa fa-lg fa-github", "fa fa-lg fa-unlock", "fa fa-lg fa-credit-card", "fa fa-lg fa-rss", "fa fa-lg fa-hdd-o", "fa fa-lg fa-bullhorn", "fa fa-lg fa-bell", "fa fa-lg fa-certificate", "fa fa-lg fa-hand-o-right", "fa fa-lg fa-hand-o-left", "fa fa-lg fa-hand-o-up", "fa fa-lg fa-hand-o-down", "fa fa-lg fa-arrow-circle-left", "fa fa-lg fa-arrow-circle-right", "fa fa-lg fa-arrow-circle-up", "fa fa-lg fa-arrow-circle-down", "fa fa-lg fa-globe", "fa fa-lg fa-wrench", "fa fa-lg fa-tasks", "fa fa-lg fa-filter", "fa fa-lg fa-briefcase", "fa fa-lg fa-arrows-alt", "fa fa-lg fa-group", "fa fa-lg fa-users", "fa fa-lg fa-chain", "fa fa-lg fa-link", "fa fa-lg fa-cloud", "fa fa-lg fa-flask", "fa fa-lg fa-cut", "fa fa-lg fa-scissors", "fa fa-lg fa-copy", "fa fa-lg fa-files-o", "fa fa-lg fa-paperclip", "fa fa-lg fa-save", "fa fa-lg fa-floppy-o", "fa fa-lg fa-square", "fa fa-lg fa-bars", "fa fa-lg fa-list-ul", "fa fa-lg fa-list-ol", "fa fa-lg fa-strikethrough", "fa fa-lg fa-underline", "fa fa-lg fa-table", "fa fa-lg fa-magic", "fa fa-lg fa-truck", "fa fa-lg fa-pinterest", "fa fa-lg fa-pinterest-square", "fa fa-lg fa-google-plus-square", "fa fa-lg fa-google-plus", "fa fa-lg fa-money", "fa fa-lg fa-caret-down", "fa fa-lg fa-caret-up", "fa fa-lg fa-caret-left", "fa fa-lg fa-caret-right", "fa fa-lg fa-columns", "fa fa-lg fa-unsorted", "fa fa-lg fa-sort", "fa fa-lg fa-sort-down", "fa fa-lg fa-sort-asc", "fa fa-lg fa-sort-up", "fa fa-lg fa-sort-desc", "fa fa-lg fa-envelope", "fa fa-lg fa-linkedin", "fa fa-lg fa-rotate-left", "fa fa-lg fa-undo", "fa fa-lg fa-legal", "fa fa-lg fa-gavel", "fa fa-lg fa-dashboard", "fa fa-lg fa-tachometer", "fa fa-lg fa-comment-o", "fa fa-lg fa-comments-o", "fa fa-lg fa-flash", "fa fa-lg fa-bolt", "fa fa-lg fa-sitemap", "fa fa-lg fa-umbrella", "fa fa-lg fa-paste", "fa fa-lg fa-clipboard", "fa fa-lg fa-lightbulb-o", "fa fa-lg fa-exchange", "fa fa-lg fa-cloud-download", "fa fa-lg fa-cloud-upload", "fa fa-lg fa-user-md", "fa fa-lg fa-stethoscope", "fa fa-lg fa-suitcase", "fa fa-lg fa-bell-o", "fa fa-lg fa-coffee", "fa fa-lg fa-cutlery", "fa fa-lg fa-file-text-o", "fa fa-lg fa-building-o", "fa fa-lg fa-hospital-o", "fa fa-lg fa-ambulance", "fa fa-lg fa-medkit", "fa fa-lg fa-fighter-jet", "fa fa-lg fa-beer", "fa fa-lg fa-h-square", "fa fa-lg fa-plus-square", "fa fa-lg fa-angle-double-left", "fa fa-lg fa-angle-double-right", "fa fa-lg fa-angle-double-up", "fa fa-lg fa-angle-double-down", "fa fa-lg fa-angle-left", "fa fa-lg fa-angle-right", "fa fa-lg fa-angle-up", "fa fa-lg fa-angle-down", "fa fa-lg fa-desktop", "fa fa-lg fa-laptop", "fa fa-lg fa-tablet", "fa fa-lg fa-mobile-phone", "fa fa-lg fa-mobile", "fa fa-lg fa-circle-o", "fa fa-lg fa-quote-left", "fa fa-lg fa-quote-right", "fa fa-lg fa-spinner", "fa fa-lg fa-circle", "fa fa-lg fa-mail-reply", "fa fa-lg fa-reply", "fa fa-lg fa-github-alt", "fa fa-lg fa-folder-o", "fa fa-lg fa-folder-open-o", "fa fa-lg fa-smile-o", "fa fa-lg fa-frown-o", "fa fa-lg fa-meh-o", "fa fa-lg fa-gamepad", "fa fa-lg fa-keyboard-o", "fa fa-lg fa-flag-o", "fa fa-lg fa-flag-checkered", "fa fa-lg fa-terminal", "fa fa-lg fa-code", "fa fa-lg fa-reply-all", "fa fa-lg fa-mail-reply-all", "fa fa-lg fa-star-half-empty", "fa fa-lg fa-star-half-full", "fa fa-lg fa-star-half-o", "fa fa-lg fa-location-arrow", "fa fa-lg fa-crop", "fa fa-lg fa-code-fork", "fa fa-lg fa-unlink", "fa fa-lg fa-chain-broken", "fa fa-lg fa-question", "fa fa-lg fa-info", "fa fa-lg fa-exclamation", "fa fa-lg fa-superscript", "fa fa-lg fa-subscript", "fa fa-lg fa-eraser", "fa fa-lg fa-puzzle-piece", "fa fa-lg fa-microphone", "fa fa-lg fa-microphone-slash", "fa fa-lg fa-shield", "fa fa-lg fa-calendar-o", "fa fa-lg fa-fire-extinguisher", "fa fa-lg fa-rocket", "fa fa-lg fa-maxcdn", "fa fa-lg fa-chevron-circle-left", "fa fa-lg fa-chevron-circle-right", "fa fa-lg fa-chevron-circle-up", "fa fa-lg fa-chevron-circle-down", "fa fa-lg fa-html5", "fa fa-lg fa-css3", "fa fa-lg fa-anchor", "fa fa-lg fa-unlock-alt", "fa fa-lg fa-bullseye", "fa fa-lg fa-ellipsis-h", "fa fa-lg fa-ellipsis-v", "fa fa-lg fa-rss-square", "fa fa-lg fa-play-circle", "fa fa-lg fa-ticket", "fa fa-lg fa-minus-square", "fa fa-lg fa-minus-square-o", "fa fa-lg fa-level-up", "fa fa-lg fa-level-down", "fa fa-lg fa-check-square", "fa fa-lg fa-pencil-square", "fa fa-lg fa-external-link-square", "fa fa-lg fa-share-square", "fa fa-lg fa-compass", "fa fa-lg fa-toggle-down", "fa fa-lg fa-caret-square-o-down", "fa fa-lg fa-toggle-up", "fa fa-lg fa-caret-square-o-up", "fa fa-lg fa-toggle-right", "fa fa-lg fa-caret-square-o-right", "fa fa-lg fa-euro", "fa fa-lg fa-eur", "fa fa-lg fa-gbp", "fa fa-lg fa-dollar", "fa fa-lg fa-usd", "fa fa-lg fa-rupee", "fa fa-lg fa-inr", "fa fa-lg fa-cny", "fa fa-lg fa-rmb", "fa fa-lg fa-yen", "fa fa-lg fa-jpy", "fa fa-lg fa-ruble", "fa fa-lg fa-rouble", "fa fa-lg fa-rub", "fa fa-lg fa-won", "fa fa-lg fa-krw", "fa fa-lg fa-bitcoin", "fa fa-lg fa-btc", "fa fa-lg fa-file", "fa fa-lg fa-file-text", "fa fa-lg fa-sort-alpha-asc", "fa fa-lg fa-sort-alpha-desc", "fa fa-lg fa-sort-amount-asc", "fa fa-lg fa-sort-amount-desc", "fa fa-lg fa-sort-numeric-asc", "fa fa-lg fa-sort-numeric-desc", "fa fa-lg fa-thumbs-up", "fa fa-lg fa-thumbs-down", "fa fa-lg fa-youtube-square", "fa fa-lg fa-youtube", "fa fa-lg fa-xing", "fa fa-lg fa-xing-square", "fa fa-lg fa-youtube-play", "fa fa-lg fa-dropbox", "fa fa-lg fa-stack-overflow", "fa fa-lg fa-instagram", "fa fa-lg fa-flickr", "fa fa-lg fa-adn", "fa fa-lg fa-bitbucket", "fa fa-lg fa-bitbucket-square", "fa fa-lg fa-tumblr", "fa fa-lg fa-tumblr-square", "fa fa-lg fa-long-arrow-down", "fa fa-lg fa-long-arrow-up", "fa fa-lg fa-long-arrow-left", "fa fa-lg fa-long-arrow-right", "fa fa-lg fa-apple", "fa fa-lg fa-windows", "fa fa-lg fa-android", "fa fa-lg fa-linux", "fa fa-lg fa-dribbble", "fa fa-lg fa-skype", "fa fa-lg fa-foursquare", "fa fa-lg fa-trello", "fa fa-lg fa-female", "fa fa-lg fa-male", "fa fa-lg fa-gittip", "fa fa-lg fa-sun-o", "fa fa-lg fa-moon-o", "fa fa-lg fa-archive", "fa fa-lg fa-bug", "fa fa-lg fa-vk", "fa fa-lg fa-weibo", "fa fa-lg fa-renren", "fa fa-lg fa-pagelines", "fa fa-lg fa-stack-exchange", "fa fa-lg fa-arrow-circle-o-right", "fa fa-lg fa-arrow-circle-o-left", "fa fa-lg fa-toggle-left", "fa fa-lg fa-caret-square-o-left", "fa fa-lg fa-dot-circle-o", "fa fa-lg fa-wheelchair", "fa fa-lg fa-vimeo-square", "fa fa-lg fa-turkish-lira", "fa fa-lg fa-try", "fa fa-lg fa-plus-square-o", "ocha-sector-registration", "fa fa-lg icon-ocha-sector-security", "fa fa-lg icon-ocha-sector-recovery", "fa fa-lg icon-ocha-sector-education", "fa fa-lg icon-ocha-sector-telecommunication", "fa fa-lg icon-ocha-sector-foodsecurity", "fa fa-lg icon-ocha-sector-health", "fa fa-lg icon-ocha-sector-logistic", "fa fa-lg icon-ocha-sector-wash", "fa fa-lg icon-ocha-sector-agriculture", "fa fa-lg icon-ocha-sector-coordination", "fa fa-lg icon-ocha-sector-protection", "fa fa-lg icon-ocha-sector-campmanagement", "fa fa-lg icon-ocha-sector-livelihood", "fa fa-lg icon-ocha-sector-sgbv", "fa fa-lg icon-ocha-sector-community", "fa fa-lg icon-ocha-sector-shelter", "fa fa-lg icon-ocha-sector-childprotection", "fa fa-lg icon-ocha-sector-cash", "fa fa-lg icon-ocha-affected-population", "fa fa-lg icon-ocha-affected-man", "fa fa-lg icon-ocha-affected-woman", "fa fa-lg icon-ocha-affected-elderly", "fa fa-lg icon-ocha-affected-baby", "fa fa-lg icon-ocha-affected-child", "fa fa-lg icon-ocha-affected-disabled", "fa fa-lg icon-ocha-affected-dead", "fa fa-lg icon-child_soldier", "fa fa-lg icon-individual", "fa fa-lg icon-ocha-item-blanket", "fa fa-lg icon-ocha-item-bucket", "fa fa-lg icon-ocha-item-clothing", "fa fa-lg icon-ocha-item-food", "fa fa-lg icon-ocha-item-kitchenset", "fa fa-lg icon-ocha-item-mattress", "fa fa-lg icon-ocha-item-vaccine", "fa fa-lg icon-ocha-item-plasticsheeting", "fa fa-lg icon-ocha-item-reliefgood", "fa fa-lg icon-ocha-item-stove", "fa fa-lg icon-ocha-item-tarpaulin", "fa fa-lg icon-ocha-item-tent", "fa fa-lg icon-ocha-item-mosquitonet", "fa fa-lg icon-ocha-item-nonfooditem", "fa fa-lg icon-ocha-cash", "fa fa-lg icon-event-bluehelmet", "fa fa-lg icon-event-force", "fa fa-lg icon-event-collaborate", "fa fa-lg icon-event-foodshortage", "fa fa-lg icon-event-judge", "fa fa-lg icon-event-protest", "fa fa-lg icon-event-cashwork", "fa fa-lg icon-event-handshake", "fa fa-lg icon-event-abduction", "fa fa-lg icon-event-papercontrol", "fa fa-lg icon-event-lecturer", "fa fa-lg icon-event-hit", "fa fa-lg icon-event-gardening", "fa fa-lg icon-event-register", "fa fa-lg icon-event-violence", "fa fa-lg icon-ocha-security", "fa fa-lg icon-unhcr-office", "fa fa-lg icon-unhcr-locations-camp", "fa fa-lg icon-unhcr-locations-settlement", "fa fa-lg icon-unhcr-location-accommodation", "fa fa-lg icon-unhcr-locations-dispersed-population", "fa fa-lg icon-unhcr-locations-centre", "fa fa-lg icon-unhcr-locations-urban", "fa fa-lg icon-unhcr-location", "fa fa-lg icon-unhcr-reception-centre", "fa fa-lg icon-unhcr-detention-centre", "fa fa-lg icon-unhcr-entry-facility-centre", "fa fa-lg icon-unhcr-separated-children-centre", "fa fa-lg icon-unhcr-open-shelter", "fa fa-lg icon-unhcr-governement-office-linked-to-rsd", "fa fa-lg icon-unhcr-government-office-linked-to-reception-centre", "fa fa-lg icon-office-government", "fa fa-lg icon-office-diplomatic", "fa fa-lg icon-office-united-nations", "fa fa-lg icon-office-ngo", "fa fa-lg icon-orga-acp", "fa fa-lg icon-orga-amnesty-international", "fa fa-lg icon-orga-care-international", "fa fa-lg icon-orga-caritas-internationalis", "fa fa-lg icon-orga-civil-defence", "fa fa-lg icon-orga-ecowas", "fa fa-lg icon-orga-ecre", "fa fa-lg icon-orga-european-commission", "fa fa-lg icon-orga-fao", "fa fa-lg icon-orga-gichd", "fa fa-lg icon-orga-human-rights-watch", "fa fa-lg icon-orga-icrc", "fa fa-lg icon-orga-icva", "fa fa-lg icon-orga-ifrc", "fa fa-lg icon-orga-iftdh", "fa fa-lg icon-orga-ilo", "fa fa-lg icon-orga-interaction", "fa fa-lg icon-orga-iom", "fa fa-lg icon-orga-irc", "fa fa-lg icon-orga-itu", "fa fa-lg icon-orga-iucn", "fa fa-lg icon-orga-loas", "fa fa-lg icon-orga-lwf", "fa fa-lg icon-orga-mdm", "fa fa-lg icon-orga-nato", "fa fa-lg icon-orga-ocha", "fa fa-lg icon-orga-ohchr", "fa fa-lg icon-orga-oic", "fa fa-lg icon-orga-osagi", "fa fa-lg icon-orga-osce", "fa fa-lg icon-orga-oxfam", "fa fa-lg icon-orga-international-save-the-child-alliance", "fa fa-lg icon-orga-union-of-africa", "fa fa-lg icon-orga-unaids", "fa fa-lg icon-orga-undp", "fa fa-lg icon-orga-unece", "fa fa-lg icon-orga-unep", "fa fa-lg icon-orga-unesco", "fa fa-lg icon-orga-unfpa", "fa fa-lg icon-orga-unhcr", "fa fa-lg icon-orga-unhsp", "fa fa-lg icon-orga-unicef", "fa fa-lg icon-orga-unitair", "fa fa-lg icon-orga-undoc", "fa fa-lg icon-orga-unops", "fa fa-lg icon-orga-unrwa", "fa fa-lg icon-orga-unv", "fa fa-lg icon-orga-voice", "fa fa-lg icon-orga-wcc", "fa fa-lg icon-orga-wfp", "fa fa-lg icon-orga-who", "fa fa-lg icon-orga-wipo", "fa fa-lg icon-orga-wmo", "fa fa-lg icon-orga-word-bank", "fa fa-lg icon-orga-msf", "fa fa-lg icon-orga-unog", "fa fa-lg icon-orga-cartong", "fa fa-lg icon-cold-wave", "fa fa-lg icon-drought", "fa fa-lg icon-earthquake", "fa fa-lg icon-epidemic", "fa fa-lg icon-extratropical-cyclone", "fa fa-lg icon-fire", "fa fa-lg icon-flash-flood", "fa fa-lg icon-flood", "fa fa-lg icon-heat-wave", "fa fa-lg icon-insect-infestation", "fa fa-lg icon-land-slide", "fa fa-lg icon-MS", "fa fa-lg icon-mud-slide", "fa fa-lg icon-other", "fa fa-lg icon-severe-local-storm", "fa fa-lg icon-snow-avalanche", "fa fa-lg icon-storm-surge", "fa fa-lg icon-technological-disaster", "fa fa-lg icon-tropical-cyclone", "fa fa-lg icon-tsunami", "fa fa-lg icon-volcano", "fa fa-lg icon-wild-fire"]      
      },
    });
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("services/IconGroupCollection", ["angular", "values/icon-groups-map"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/services/IconGroupCollection", ["ui-iconpicker/values/icon-groups-map"]);
    return module.factory("IconGroupCollection", [
      "iconGroupsMap", function(iconGroupsMap) {
        var IconGroupCollection;
        return IconGroupCollection = (function() {
          function IconGroupCollection(groupIdLiteral) {
            if (groupIdLiteral == null) {
              groupIdLiteral = "bootstrap";
            }
            this.iconGroupsMap = {};
            this.includeGroups(groupIdLiteral);
          }

          IconGroupCollection.prototype.filterByGroups = function(groupIdLiteral) {
            var group, groupId, groupIds, _ref;
            if (groupIdLiteral == null) {
              groupIdLiteral = "bootstrap";
            }
            if (groupIdLiteral !== "all") {
              groupIds = groupIdLiteral.split(" ");
              _ref = this.iconGroupsMap;
              for (groupId in _ref) {
                group = _ref[groupId];
                if (groupIds.indexOf(groupId) !== -1) {
                  delete this.iconGroupsMap[groupId];
                }
              }
            }
            return this;
          };

          IconGroupCollection.prototype.includeGroups = function(groupIdLiteral) {
            var group, groupId, groupIds;
            if (groupIdLiteral == null) {
              groupIdLiteral = "bootstrap";
            }
            groupIds = groupIdLiteral.split(" ");
            for (groupId in iconGroupsMap) {
              group = iconGroupsMap[groupId];
              if (this.iconGroupsMap[groupId] == null) {
                if (groupIdLiteral === "all" || groupIds.indexOf(groupId) !== -1) {
                  this.iconGroupsMap[groupId] = group;
                }
              }
            }
            return this;
          };

          IconGroupCollection.prototype.getClassArray = function() {
            var classes, group, iconClass, id, _i, _len, _ref, _ref1;
            classes = [];
            _ref = this.iconGroupsMap;
            for (id in _ref) {
              group = _ref[id];
              _ref1 = group.classes;
              for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                iconClass = _ref1[_i];
                classes.push(group.prefix + iconClass);
              }
            }
            return classes;
          };

          return IconGroupCollection;

        })();
      }
    ]);
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("templates/iconpicker", ["angular", "angular-bootstrap"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/templates/iconpicker", ["ui.bootstrap"]);
    return module.run([
      "$templateCache", function($templateCache) {
        return $templateCache.put("templates/iconpicker.html", "<span class=\"btn-group ui-iconpicker\" ng-class=\"{ disabled: disabled }\">\n	<button type=\"button\" class=\"btn btn-default dropdown-toggle\"><i class=\"{{ iconClass }}\"></i><span class=\"caret\"></span>\n	</button>\n	<ul class=\"dropdown-menu\" role=\"menu\">\n		<li ng-repeat=\"class in availableIconClasses track by $index \">\n			<button class=\"btn btn-default\" type=\"button\" ng-click=\"$parent.iconClass = class\"><span class=\"{{ class }}\"></span></button>\n		</li>\n	</ul>\n	<input name=\"{{ name }}\" type=\"hidden\" value=\"{{ iconClass }}\" ng-if=\"name\" />\n</span>");
      }
    ]);
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("directives/ui-iconpicker", ["angular", "services/IconGroupCollection", "templates/iconpicker"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/directives/ui-iconpicker", ["ui-iconpicker/services/IconGroupCollection", "ui-iconpicker/templates/iconpicker"]);
    return module.directive("uiIconpicker", [
      "IconGroupCollection", function(IconGroupCollection) {
        return {
          replace: true,
          restrict: "E",
          scope: {
            name: "@",
            model: "=?ngModel"
          },
          templateUrl: "templates/iconpicker.html",
          link: function($scope, $element, attrs) {
            var _ref;
            $scope.availableIconClasses = (new IconGroupCollection(attrs.groups)).getClassArray();
            $scope.iconClass = (_ref = attrs.value) != null ? _ref : $scope.availableIconClasses[0];
            if (attrs.ngModel) {
              $scope.model = $scope[attrs.ngModel];
              $scope.$watch("iconClass", function() {
                return $scope.model = $scope.iconClass;
              });
              $scope.$watch("model", function() {
                return $scope.iconClass = $scope.model;
              });
            }
            $scope.$dropdownButton = $element.find("button").eq(0);
            return $scope.disabled = attrs.disabled != null;
          }
        };
      }
    ]);
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("ui-iconpicker", ["angular", "directives/ui-iconpicker"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    return angular.module("ui-iconpicker", ["ui-iconpicker/directives/ui-iconpicker"]);
  });

}).call(this);

