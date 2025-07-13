const build = 2310130;
var version, showSideMenu, hideSideMenu;
(function () {
    var _0x111C0 = ["gota.io", "", ":", "split", "/", "://", "href", "location", ",", "length", ".", "error", "3.6.5", "#", "display", "css", "none", "slideDown", "block", "slideUp", "each", "children", "#main-right", "PIXI", "Container", "EMPTY", "Texture", "Sprite", "addChild", "PI", "https://discord.com/channels/166703751053312000/630428963889741854", "GoogleAuthProvider", "auth", "https://accounts.gota.io", "halloween2023", "enabled", "endDate", "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM", "accounts.gota.io", "https://gota-io.firebaseio.com", "gota-io", "gota-io.appspot.com", "570450309042", "1:570450309042:web:380ab6c94d44de2f", "initializeApp", "All", "Party", "ALL", "AUTO", "NONE", "ULTRA", "DEFAULT", "2", "360px", "250px", "stringify", "parse", "assign", "is_touch_device", "ontouchstart", "documentElement", "rgb(255, 255, 255)", "rgba(22, 22, 22, 0.8)", "rgba(255, 255, 255, .2)", "#2A2A2A", "#404040", "#363636", "#444444", "#121212", "#ff0000", "#ffaaaa", "#ffff00", "#00ffff", "#00ff00", "canvas", "getElementById", "minimap-canvas", "2d", "getContext", "#main", "#party-panel", ".hud-panel", "score-panel", "#main-scrimmage", "#context-menu", "chat-container", "chat-input", "#leaderboard-header", "#scrimmage-custom", "mouseFrozenDiv", "pMouse", "playerScore", "span", "querySelector", "pScore", "playerMass", "pMass", "playerCells", "pCells", "playerFps", "pFps", "resetInfo", "#extra-reset-timer", "resetTime", "#resetTime", "respawnInfo", "#extra-respawn-cooldown", "respawnCooldown", "#respawnCooldown", "spectatorCount", "#spectatorCount", "playerCellCount", "minimapCoords", "#minimap-coordinates", "partyPanel", "friendOnlineCount", "#social-online-friends-count", "body", "attach", "joystick_manager", "joystick", "static", "10%", "20%", "red", "create", "cHideChat", "cHideLeaderboard", "touchstart", "opacity", "style", "target", "kSplit", "handleKey", "addEventListener", "button_split", "touchend", "sendEjectMass", "sendPacket", "button_eject", "kDoubleSplit", "button_double", "kTripleSplit", "button_triple", "move", "mouseRawX", "distance", "force", "radian", "angle", "cos", "innerWidth", "mouseRawY", "sin", "innerHeight", "on", "onmousemove", "clientX", "clientY", "onmousedown", "button", "preventDefault", ":focus", "is", "input", "onmouseup", "kEjectMass", "onwheel", "id", "wheelDelta", "deltaY", "mouseZoom", "onkeydown", "which", "keyCode", "charCode", "#popup-profile", "#popup-account-username", "onkeyup", "onblur", "cDisablePersistEjectMass", "contextmenu", "&", "join", "slice", "toLowerCase", "toUpperCase", "name", "region", "value", "val", "version", "Woah! Version ", " is now available. Press Ctrl+R to update!", "selfMsg", "motd", "listRefresh", "titles", "/game", "ref", "database", "GET", "json", "/api/v1/utilities/servers", "servers", "players", "bots", "playersMax", "*", "address", "gamemode", "ssl", "order", "push", "sort", "ajax", "eu", "Vendetta", "unload", "init", "sRenderType", "CANVAS", "cDisableAA", "autoDetectRenderer", "resize", "now", "Welcome to Gota.io!", "width", "resolution", "height", "renderer", "x", "position", "stage", "y", "Graphics", "beginFill", "drawCircle", "endFill", "HIGH", "MSAA_QUALITY", "devicePixelRatio", "RenderTexture", "Matrix", "render", "framebuffer", "blit", "destroy", "charAt", "u", "rAnimationDelay", "min", "scale", "cDisableAutoFoodHiding", "cHideFood", "visible", "foodObjects", "steps", "animate", "handleFood", "bucket", "handle", "myCells", "size", "centerX", "centerY", "centerSteps", "cDisableAutoZoom", "scale_base", "max", "pow", "centerX_", "centerY_", "pivot", "isConnected", "mouseFrozen", "sendMouse", "cHideMinimap", "cShowCoordinates", "update", "buffHolder", "innerHTML", "resetType", "serverData", "floor", "html", "ceil", "NEVER", "handleUpdatedPlayers", "playerRegistry", "cShowBorder", "border", "removeChild", "parent", "rBorderSize", "toHexString", "uiGameBorderColor", "string2hex", "utils", "lineStyle", "left", "top", "drawRect", "uiForegroundColor", "X: ", "toFixed", " Y: ", "clearRect", "font", "12px Calibri", "party", "state", "ALIVE", "playerId", "mmColor", "x_", "y_", "#fefefe", "socket", "currentServer", "currentServerName", "spectate", "scale_", "offsetX", "offsetY", "mouseX", "mouseY", "partyIds", "subPanelOverride", "score", "customGameMap", "accountListeners", "clearStats", "bind", "sendPing", "prototype", "stats", "An unnamed cell", "play", "No server selected!", "#name-box", "#pServer span", "ip", "setName", "connect", "spec", "sendSpectate", "nextUrl", "disconnect", "Connecting to ", "cHideServer", "***Hidden***", "wss://", "ws://", "binaryType", "arraybuffer", "onopen", "onConnect", "onmessage", "onMessage", "onclose", "reset", "You have been disconnected from the server. Reason: ", "reason", "Unknown", "onerror", "rReconnectPeriod", "Error connecting to server... Retrying every ", " second(s).", "hide-captcha-badge", "add", "classList", "close", "clearBuckets", "onDelete", "clear", "clearParty", "clearBuffs", "hasSentSubPanel", "autosplits", "#pId span", "sendKey", "kToggleSpec", "kQuadSplit", "kHexaSplit", "kFreezeMouse", "kContextMenu", "readyState", "send", "connectionStart", "sendOptions", "currentUser", "catch", "sendAuthToken", "then", "getIdToken", "td", "createElement", "color", "#DDDD00", "[System] ", "appendChild", "SYSTEM", "selfMsgWithJoinCode", "pointerEvents", "all", "userSelect", "partyLeader", "partyIndex", "handleCustomGameLeave", "partyCode", "page", " ", "pushState", "history", "isPartyLeader", "getServerMaxCells", "maxCells", "bonusMaxCells", "data", "getUint8", "offset", "handleUpdate", "handlePosition", "handleStats", "showSubPanel", "updateSubPanel", "handleInvite", "handlePartyInfo", "handlePartyData", "handlePartyJoinCode", "handleLeaderboard", "handleLeaderboardCustom", "handleRespawnCooldown", "handleMapData", "handleClearNodes", "handleUpdateBorder", "handleResetTime", "handleSpectators", "handleSystemMsg", "handlePing", "handleChat", "handleWhisper", "handleEditMessage", "handleShowScrimmageMenu", "handleQueueData", "handleQueueLeave", "handleMatchState", "handleScrimmageData", "handleCustomGameShow", "handleCustomGameUpdate", "handleShowCustomGameLobbies", "handleAddBuff", "handleRemoveBuff", "handleClearBuffs", "handleAuthenticated", "handleProfile", "getUint16", "remove", "type", "keys", "cAutoRespawn", "GOT_gota-io_336x280", "refresh", "cmd", "getPlayer", "cellColor", "setSkin", "setFlags", "flags", "nameColor", "parseEffect", "nameFont", "updatePlayer", "setType", "getInt16", "setX", "setY", "setSize", "skin", "rainbow", "buff", "onCreate", "updateX", "updateY", "size_", "sortCells", "getFloat32", "getFloat64", "updateCellCounter", "sendPartyJoin", "#scrimmage-btn-leave", "right", "bottom", "spectators", "updateSpectators", "leaderboard-canvas", "Leaderboard", "text", "getUint32", "16px Calibri", "fillStyle", "uiLeaderboardHighlightSelf", "uiLeaderboardHighlightParty", ". ", "fillText", "cColoredPing", "#pPing span", "uiGameColorSuccess", "uiGameColorWarning", "uiGameColorError", "ms", "rgb(", ")", "includes", "byteLength", "getBigInt64", "PARTY", "Admin", "ADMIN", " - ", "msgid", "dataset", "[", "] ", "innerText", "className", "chat-name", "oncontextmenu", ": ", "chat-content", " > ", "WHISPER", ".chat-table td[data-msgid=\'", "\'] .chat-content", "tr", "closest", "\']", "SUCCESS", "Invalid authentication token! Please logout and try again!", "FAILURE", "cAutoDecline", "sendInviteResponse", "popup-party-text", " has invited you to a party.", "#popup-party", "isLeader", "cache", "team", "UNKNOWN", "checkLeader", "drawParty", "getInt32", "#popup-party-code-content input", "show", "#popup-party-code", "alive", "eatenFood", "eatenEject", "eatenVirus", "eatenPlayer", "gainFood", "gainEject", "gainVirus", "gainPlayer", "#main-stats", "empty", "<span>Name: ", " (", ")</span><br>", "append", "<span>Alive: ", "</span><br>", "<span>Food eaten: ", "<span>Ejected mass eaten: ", "<span>Viruses eaten: ", "<span>Player cells eaten: ", "uid", "onAddBuff", "onRemoveBuff", "parentCell", "updateScorePanel", "getRealMass", "toLocaleString", "cColoredCellCount", "cHidePartyPanel", "party-canvas", "measureText", "scoreText", "DEAD", "SPECTATE", "SPEC", "uiPartyLeaderColor", "Total:", "stop", "Queue", "Mode: ", "Time: ", "Queued players: ", "You have left the queue for [", "]", "A match has been found. Good luck and have fun!", "#scrimmage-mode-select", "#scrimmage-mode-info", "option", "div", "scrimmage-info-", "modes", "sizes", "startmass", "respawnDelay", "teams", "maps", "#scrimmage-custom-btn-container", "#scrimmage-map", "<option value=\'", "\'>", "</option>", "change", "trigger", "selectedIndex", "prop", "updateMap", "MAP", "updateMode", "MODE", "updateSize", "SIZE", "updateStartMass", "STARTMASS", "updateLock", "LOCK", "updatePlayerById", "PLAYER_UPDATE", "updatePlayers", "PLAYER_LIST", "updateVirusDensity", "VIRUS_DENSITY", "updateRespawnDelay", "RESPAWN_DELAY", "updateAutoSplit", "AUTOSPLIT", "updatePublic", "PUBLIC", "updatePassword", "PASSWORD", "updateName", "NAME", ".scrimmage-full", "#scrimmage-menu", "#scrimmage-lobbies", "#scrimmage-lobbies-tbody", "leaderId", "leaderName", "map", "mode", "maxSize", "hasPasscode", "<div class=\'scrimmage-lock\'></div>", "<tr partyId=\'", "\'><td><span>", "</span></td><td><span>", "</span></td></tr>", "click", "custom-game-selected", "removeClass", ".custom-game-selected", "partyId", "attr", "addClass", "#scrimmage-lobbies-tbody tr", "#scrimmage-name", "selected", "#scrimmage-map option[value=\'", "#scrimmage-mapmode", "#scrimmage-mapsize", "placeholder", "#scrimmage-startmass", "#scrimmage-mapmode option[value=\'", "#scrimmage-mapsize option[value=\'", "#scrimmage-virusDensity", "#scrimmage-respawnDelay", "checked", "#scrimmage-autoSplit", "#scrimmage-public", "#scrimmage-password", "#scrimmage-lockteams", "checkLock", "disabled", "#cgp-", "removeAttr", ".custom-game", " option[value=\'", "#cgp-name-", "#scrimmage-custom-players", "<tr><td><span id=\'cgp-name-", "</span></td>", "getTeamOptions", "</tr>", "\\d+", "match", "option:selected", "find", "sendCustomGameUpdate", "<td><select class=\'custom-game\' id=\'cgp-", "\'><option value=\'0\'>Spectator</option>", "\' class=\'t", "</select></td>", "nameCache", "massLastAmount", "getMass", "getSizeCache", "massType", "toShortString", "toString", "getNumber", "cacheContainer", "getSizeCacheSprite", "texture", "clearCacheContainer", "K", "M", "B", "sprites", "spritesIndex", "buildSizeCache", "0", "1", "3", "4", "5", "6", "7", "8", "9", "T", "Verdana", "bold", "#fff", "black", "textOutlineSize", "Text", "needsPixiUpdate", "sprite", "set", "anchor", "cThemeEnabled", "tint", "getPlayerById", "SELF", "cellSprite", "container", "skinSprite", "massSprite", "nameSprite", "cacheUpdate", "getNameCache", "spiked", "aCustomSpike", "aCustomMother", "levelSkins", "getSkin", "isGif", "getTexture", "cDisableAutoNameHiding", "levelNames", "lowerName", "effect", "nameEffectSprite", "cShowMass", "debuffSprite", "shieldSprite", "motherCustomEnabled", "cDisableEventSkins", "motherCustom", "setDefaultSpriteAnchor", "defaultData", "updatedPlayers", "shift", "skinCache", "normal", "outlineColor", "fontFamily", "stroke", "fontWeight", "fontSize", "fill", "updateText", "LOADING", ".gif", "endsWith", "loadFromFrameData", "LOADED", "crossOrigin", "load", "beginPath", "arc", "closePath", "clip", "drawImage", "from", "ERROR", "src", "Gota Web ", "setUint8", "cSilentLogin", "setInt32", "setUint16", "sendChat", "sendPartyAction", "setUint32", "sendShowProfile", "sendWhisper", "sendSubPanel", "skinName", "r", "g", "b", "chatColor", "sendLockedNameChange", "rViewDistance", "sendQueue", "sendCustomGame", "sendLeaveMatch", "sendShowLobbies", "sendJoinLobby", "sendCaptcha", "setInt16", "sendCustomGameUpdateString", "charCodeAt", "fromCharCode", "message", "code", "This account has been permanently suspended by an administrator.", "auth/user-disabled", "auth/popup-closed-by-user", "white", "STAFF", "Gota.io Staff", "build", "royalblue", "VERIFIED", "Verified Player", "check_circle", "i", "material-icons", "user-badge", "data-balloon", "data-balloon-pos", "setAttribute", "up", "li", "user-embed menu-sub-bg2", "backgroundColor", "uiMenuHeaderBackgroundColor", "img", "avatar", "alt", "username", "info", "server", "presence", "timestamp", "getTime", "status offline", "Not playing on any server", "status ", "status", "ONLINE", "online", "Playing ", "Spectating ", " on ", " (ID ", "status pending", "Pending Friend Request", "actions", "#main-social", "Join Server", "\'s ID is ", "done", "Add as Friend", "isHandlingRequest", "/api/v1/social/friends", "POST", "application/json", "Remove Friend", "Are you sure you want to remove \"", "\" as your friend?", "off", "callbacks", "elements", "#profile-username", "#profile-avatar", "Level ", "level", "levelData", "&nbsp;&nbsp;&nbsp;[", "xp_current", "xp_needed", "#profile-level", "title", "#profile-title", "#profile-name", "hide", "cursor", "pointer", "default", "spin", "#profile-close-btn", "#social-friends .user-list", "#social-uid", "title-text center", "You have no friends 😥", "pendingFriends", "replaceChild", "forEach", "profiles", "/api/v1/social/friends/pending", "/users/", "timestamps", "indexOf", " online", "#social-friends-count", "/friendships/", "hasOwnProperty", "balloon", "event-", "key", "toggleClass", ".server-tab", "incrementPlay", "undefined", "startPreRoll", "player", "#btn-play", "main-servers", "#btn-servers", "main-options", "#btn-options", "main-hotkeys", "#btn-hotkeys", "main-themes", "#btn-themes", "main-subpanel", "#btn-cellpanel", "https://www.reddit.com/r/PlayGotaIO/", "_blank", "open", "#btn-reddit", "https://gota.io/discord", "#btn-discord", "keypress", "#btn-spec", "keyup", "#autocomplete-panel", "startsWith", "<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>", "substring", "findIndex", "triggers", "<tr><td>", "</td><td>", "description", "</td></tr>", "#autocomplete-panel tbody", "values", "filter", "<h3>Emotes</h3>", "<img name=\'", "\' title=\'", "\' src=\'https://gota.io/emotes/", ".png\' />", "<h3>Gifs</h3>", "\' src=\'https://gota.io/emotes/gifs/", ".gif\' />", "nodeName", "TD", "parentElement", "focus", "#chat-input", "IMG", "nodeValue", "attributes", "#animationDelay", "#rAnimationDelay", "#reconnectPeriod", "#rReconnectPeriod", "#viewDistance", "#rViewDistance", "rUiScale", "parseFloat", "#uiScale", "#rUiScale", "transform", "scale(", ".ui-scale", "background-image", "url(https://gota.io/emotes/", "random", ".png)", "#chat-emote-btn", "toggle", "#emote-panel", "#emote-panel ul li img", "chat-panel", "mousedown", "chat-resize", "getComputedStyle", "defaultView", "mousemove", "mouseup", "px", "removeEventListener", ".checkbox-options", ".options-container select", ".options-container input[type=range]", "#popup-changelog", "#btn-changelog", "#btn-close-changelog", "#btn-accept", "#btn-decline", "select", "Copy", "execCommand", "#popup-party-code-content button", "#menu-invite", "/t ", "#menu-whisper", "#menu-profile", "Private", "#menu-pu_pr span", "Public", "#menu-pu_pr", "#menu-promote", "#menu-kick", "#menu-spectate", "#menu-block", "chat-emote-btn", "popup-party-code", "#popup-chat-tab-editor", "#aEditChatTabs", "#cte-tab-selector", "#btn-chat-tab-editor-add", "#btn-chat-tab-editor-remove", "#btn-chat-tab-editor-update", "#popup-asset-skinner .title-text", "asset", "#input-asset-skinner", "#popup-asset-skinner", ".custom-asset-skinner", "a", "#popup-asset-skinner .back-button", "#btn-custom-asset-set", "#btn-custom-asset-clear", "drop", "originalEvent", "test", "result", "readAsDataURL", "dragover", "#popup-food-colors", "#btn-food-colors", "theme.json", "text/plain", "#btn-theme-export", "#theme-import", "#btn-theme-import", "files", "#main-themes .options-container", "/api/v1/options/setFlags", "#cGlobalLeaderboard", "consented", "signOut", "users/", "#account-loader", "#authed", "display: flex;", "#account-avatar", "#account-username", "&nbsp;&nbsp;&nbsp;&nbsp;", " XP", "#account-level", "%", ".xp-meter > span", "loadServers", "port", "?", "servers/account/", "DISCORD_LINKED", "loadDiscord", "exists", "Your account is linked with ", "discrim", "#discordLinkStatus", "#discordLink", "#discordUnlink", "padding", "15px", ".discord-login-container", "30px", "onSnapshot", "doc", "discord", "collection", "firestore", "tokens", "getMonth", "setMonth", "#redeem-tokens", "You have 0 tokens.", "#token-amount", "You have ", " tokens, maximum expiry date: ", "#redeem-spend", "#account-titles", "loadPrivateData", "<option value=\'0\'>Default Title</option>", "inline-block", "content", "read", "#popup-message-title", "#popup-message-content", "#popup-message", "private/", "#guest", "#no_cookie_consent", "onAuthStateChanged", "signInWithPopup", "#account-login", "#account-logout", "https://store.gota.io/", "#account-shop", "#account-social", "#social-back-button", "#account-profile", "#food-colors-close-btn", "Set", "...", "/api/v1/options/setTitle", "/api/v1/options/markAsRead", "#popup-message-read-btn", "#account-username-input", "trim", "Please provide a username!", "/api/v1/social/username", "#account-set-username-btn", ".popup-panel .back-button", "https://accounts.gota.io/api/v1/options/discord/redirect?token=", "popup", "width=600,height=700", "/api/v1/options/discord/unlink", "By redeeming, you are agreeing the locked name rules linked below the form.\x0A\x0AABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\x0A\x0APress OK to redeem.", "#redeem-name", "/api/v1/options/redeem", "submit", ".error-banner", "Enter friend\'s UID (found above add friend button)", "replace", "string", "Please enter a valid UID", "#btn-add-friend", "tagName", "activeElement", "INPUT", "setSelectionRange", "blur", "beforeunload", "Are you sure you want to leave Gota.io?", "keybinds-btn-selected", ".keybinds-btn", "#btn-reset-keybinds", "#scrimmage-info-", "#btn-queue", "#btn-leave-match", "#btn-custom-create", "#btn-custom-return", "#btn-custom-start", "#btn-custom-lobbies", "#btn-lobbies-refresh", "Enter the password to join this game", "#btn-lobbies-join", "#btn-lobbies-return", "Enter a password to join your game (32 max characters)", "Enter a new name for your game (32 max characters)", "grecaptcha", "ready", "6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", "login", "execute", "hex", "toRgbString", "spectrum", "showAlpha", "#uiGameBackgroundColor", "#uiGameBorderColor", "Add", "_FoodColors", "#pFoodColors", "#food-color-list", "<div c=\'", "\' style=\'background:", ";color:", ";\'><span>", "</span><div><button class=\'btn-food-color\'>X</button></div></div>", "c", "eq", "parents", "splice", ".btn-food-color", ".keybinds-btn-selected", "first", "&nbsp;", "logo", "backgroundImage", "url(\'images/logo.png\')", "url(\'images/events/", "/logo.png\')", "<li><img name=\'", ".png\' /></li>", ".emote-list", ".gif\' /></li>", ".gif-list", "<option value=\"", "\">", "#spEffect", "images/ejected_mass_skins/", ".png", "index", "customEjectedMass", "images/events/", "/ejected_mass.png", "images/effects/", "/spike_mother_happy.png", "images", "/spike_mother.png", "/spike.png", "table-row", "#performance-refresh", "cHideId", "pId", "pServer", "alpha", "cTransCells", "#chat-panel", "#minimap-panel", "flex", "sScorePanel", "#leaderboard-panel", "cHideExtraPanel", "#extra-panel", "disable", "enable", "cResizableChat", "#chat-resize", "sShowNames", "sShowSkins", "sMassType", "sTextOutlines", "strokeThickness", "sQuality", ".fg-interface-color", ".interface-color", "border-color", ".gota-btn", ".popup-panel", ".main", ".main-bottom-stats", "background-color", ".hud-panel .interface-color", ".ui-pane", "#chat-tab-container", ".chat-tab", ".main-panel", ".options-container", ".menu-title", ".menu-sub-bg", ".server-active", "#server-content", ".menu-sub-bg2", ".server-table tbody", "#social-friends-online-count", "background", "#borderSize", "rBackgroundOpacity", "#backgroundOpacity", "canvas-background", "url(\'", "\')", "backgroundSize", "100% 100%", "Unable to load custom theme virus.", "Unable to load custom theme mother cell.", "#minimap-canvas", "2px solid rgba(255, 255, 255, .2)", "270px", "Enter new locked name!", "Please enter a valid name!", "Locked names must be 2 or more characters long.", "Locked names must be 20 or less characters long.", "You are about to change your locked name to: \'", "\'.\x0ALocked names can only be changed once per week.\x0A\x0AAre you sure you wish to continue?", "#btn-chg-ln", "#btn-updateSP", "rules", "#btn-subpanel-rules", "rgb", "#spNameColor", "#spChatColor", "#spSkinName", "#spLowerName", "#spEffect select", "#spNameFont select", "toRgb", "get", "#spNameFont", ".subpanel-name-dashboard", "#subpanel-rules", "#subpanel-content", "loadSubPanel", "locked", "#main-subpanel", "#spLockedName", "lastChange", "Last Changed: ", "expiry", "seconds", "#spExpiry", "Never", "accounts", "playerText", "#servers-body-eu", "#servers-body-na", "#servers-body-ap", " title=\"Players: ", "&#10;Bots: ", "\"", "<tr id=\"s_", "\" class=\"server-row\" server=\"", "\"><td class=\"server-table-name\">", "</td><td class=\"server-table-players\"", ">", "</td><td class=\"server-table-mode\">", "#servers-body-", "\" class=\"account-server server-row\" server=\"", "</td><td class=\"server-table-players\">", "prepend", ".server-row", "server-selected", "#s_", "#server-tab-", "inherit", "server-active", "#server-tab-container", "uiMenuSubBackgroundColor", "#servers-", "_ChatTabs", "#chat-body-", " tr", "maxMessages", " tr:first-child", "cloneNode", "chat-body-", "#chat-container-", "scrollHeight", "scrollTop", "outerHeight", "action", "Invalid command!", "#chat-container", "Unnamed", "<li class=\'chat-tab\' id=\'chat-tab-", "\' name=\'", "\'><span>", "</span></li>", "<div class=\'chat-inner-container\' id=\'chat-container-", "\'><table class=\'chat-table\'><tbody id=\'chat-body-", "\'></tbody></table></div>", "uiBorderColor", "#chat-tab-", "<span>", "</span>", "chat-active-tab", "chat-active-container", ".chat-inner-container", "#cte-tab-name", "#cte-type-", "#cte-max-messages", "New", "context-name", ".context-action", "&gt;", "&lt;", "main", "iChatWidth", "iChatHeight", "options", "setItem", "localStorage", "keybinds", "theme", "subpanel", "getItem", "isInteger", "s", "lockedName", "readAsText", "#cThemeEnabled", "<img src=\"https://gota.io/emotes/", ".png\" height=\"17\" width=\"17\" alt=\"", "<img src=\"https://gota.io/emotes/gifs/", ".gif\" height=\"17\" width=\"17\" alt=\"", "Random", "Maximum Cells Upgrade", "extracells", "MODIFIER", "Extra Consumable Slot", "extraconsumable", "Merge", "merge", "PASSIVE", "Grow", "grow", "Speed", "speed", "Shield", "shield", "Virus", "spike", "CONSUMABLE", "Disrupt", "disrupt", "Teleport", "teleport", "_disrupt", "DEBUFF", "Silver", "phoenix", "Consumable Shield", "_shield", "Magnet", "magnet", "Decay", "decay", "_decay", "image", "images/powerups/", "images/shield.png", "images/debuff.png", "passiveBuffs", "passiveSortedBuffs", "consumableBuffs", "nextCacheUpdate", "sortPassiveBuffs", "onPassiveBuffsUpdate", "markCacheForUpdate", "Recieved buff: ", "powerup", "Lost buff: ", "stack", "updateCache", "#222", "bold 16pt Calibri", "draw", "startTime", "expireTime", "getCooldown", "#000", "moveTo", "globalAlpha", "hearts", "delay", "frames", "getFrame", "getLength", "getImage", "frameInfo", "foodColors", "#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614", "You cannot block that player.", "Unblocked player with ID: ", "Blocked player with ID: ", "Whisper a player by ID", "whisper", "t", "w", "Invalid player id.", "Reply to previous whisper", "reply", "/r ", "Send a message to other party members", "p", "/p ", "Invite a player to the party", "invite", "Invalid ID.", "Leave your current party", "leave", "l", "Promote a party member to leader", "promote", "Kick a player from the party", "kick", "Clear the chat", "getAttribute", "getElementsByClassName", "firstChild", "Get your current ID", "Your id is ", "You need to be connected to a server to use this command.", "Show the scrimmage menu", "scrimmenu", "Join a party with a code", "j", "Set the party to private", "private", "Allow players to join the party without an invite", "public", "Reset chat size", "resetchat", "Reset chat tab settings", "resetchattabs", "Spectate a player", "Disconnect from the server", "Get Account UID", "account", "You are not logged in.", "UID: ", "Block or unblock a player by ID", "4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP", "Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap", "A", "C", "D", "E", "F", "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", "BACK_SPACE", "TAB", "CLEAR", "ENTER", "ENTER_SPECIAL", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", ";", "<", "=", "AT", "G", "H", "I", "J", "L", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "CONTEXT_MENU", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "META", "ALTGR", "WIN_ICO_HELP", "WIN_ICO_00", "WIN_ICO_CLEAR", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "PA1", "WIN_OEM_CLEAR", "heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "fire", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon", "cat", "cupid", "sword", "tornado", "radioactive", "rocket", "wave", "letter_a", "letter_b", "letter_c", "letter_d", "letter_e", "letter_f", "letter_g", "letter_h", "letter_i", "letter_j", "letter_k", "letter_l", "letter_m", "letter_n", "letter_o", "letter_p", "letter_q", "letter_r", "letter_s", "letter_t", "letter_u", "letter_v", "letter_w", "letter_x", "letter_y", "letter_z", "number_0", "number_1", "number_2", "number_3", "number_4", "number_5", "number_6", "number_7", "number_8", "number_9", "0:00", "_", "Invalid HEX color.", "#000000", "items", "dataTransfer", "kind", "file", "getAsFile", "msSaveOrOpenBlob", "navigator", "createObjectURL", "download", "revokeObjectURL", "URL", "regex", "Spectator", "Blue", "Red", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "#25f", "#f31", "green", "yellow", "purple", "orange", "ampad", "burnstown", "chlorinar", "Facon", "archistico", "breakaway", "conformity", "electroharmonix", "PWJoyeuxNoel", "leckerli-one", "IceCaps", "#00c9ff", "BrazierFlame", "#e25822", "\" style=\"font-family:", "Notification", "permission", "granted", "Your match has started.", "https://gota.io/assets/images/favicon.png", "policyID", "CP_0918_01", "policyLink", "https://gota.io/policies/privacy.html?v=", "#cookies", "consentOption", "#cc_acceptCookies", "consentCookie", "cookieConsent", "yes+", "/web", "cookieBanner", "#cookie-banner", "#declineCookies", "#acceptCookies", "backwardsCompatable", "consentHandler", "getConsentCookie", "showCookieBanner", "deleteConsentCookie", "createConsentCookie", "handlersBound", "bindBannerHandlers", "banner", "decline", "accept", " <a href=\"", "\" target=\"_blank\">Our Cookie Policy!</a>", "#cookie-banner .description", "exdays", "setTime", "expires=", "toUTCString", "cookie", ";path=", "path", "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=", "cookieconsent_status", "allow", "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;", "playCounter", "Advertisement Loading...", "preroll"];

    function _0x111D7(_0x11205, _0x11261, _0x1124A) {
        if (!_0x11205) {
            return
        };
        var _0x1121C = this[_0x111C0[7]][_0x111C0[6]][_0x111C0[3]](_0x111C0[5])[1][_0x111C0[3]](_0x111C0[4])[0][_0x111C0[3]](_0x111C0[2])[0];
        var _0x111D7 = _0x11205[_0x111C0[3]](_0x111C0[8]);
        for (var _0x11233 = 0; _0x11233 < _0x111D7[_0x111C0[9]]; _0x11233++) {
            var _0x111EE = _0x111D7[_0x11233];
            if (_0x111EE == _0x1121C) {
                return
            };
            if (!_0x11261) {
                continue
            };
            _0x111EE = _0x1121C[_0x111C0[3]](_0x111C0[10] + _0x111EE);
            if (_0x111EE[_0x111C0[9]] == 2 && !_0x111EE[1]) {
                return
            }
        };
        throw (_0x1124A || _0x111C0[11])
    }

    function _0x111EE(_0x111EE) {
        var _0x111D7 = $("#" + _0x111EE);
        if (_0x111D7.css("display") == "none") {
            _0x11205();
            _0x111D7.slideDown(500)
        }
    }

    function _0x11205() {
        $("#main-right").children().each(function () {
            if ($(this).css("display") == "block") {
                $(this).slideUp(500)
            }
        })
    }

    function _0x1121C() {
        var _0x1204E = window.PIXI;
        const _0x1214B = _0x1204E;
        window.PIXI = null;
        var _0x12162;
        const _0x12179 = new _0x1214B.Container();
        const _0x1128F = new _0x1214B.Container();
        const _0x11302 = new _0x1214B.Container();
        const _0x11EC7 = new _0x1214B.Container();
        const _0x11907 = new _0x1214B.Container();
        const _0x1145B = new _0x1214B.Container();
        const _0x12231 = new _0x1214B.Sprite(_0x1214B.Texture.EMPTY);
        var _0x112EB;
        _0x11EC7.addChild(_0x11302);
        _0x11EC7.addChild(_0x11907);
        _0x11EC7.addChild(_0x1145B);
        _0x12179.addChild(_0x1128F);
        _0x12179.addChild(_0x11EC7);
        _0x12179.addChild(_0x12231);
        var _0x1138C, _0x11EF5, _0x11F23, _0x12190, _0x12065, _0x11CFB, _0x125E0, _0x125F7, _0x12134, _0x1263C, _0x12653, _0x1266A, _0x12470, _0x12459, _0x11EDE, _0x12106, _0x11BB9, _0x11D29, _0x123E6, _0x11627, _0x11489, _0x12836, _0x11838, _0x11278, _0x123CF, _0x1173B, _0x11724, _0x123B8, _0x11D12, _0x11EB0 = false,
        _0x11991 = 0,
            _0x1197A = 0,
            _0x1281F = null,
            _0x12808 = null,
            _0x11B01 = false,
            _0x12767 = {
                elements: [],
                callbacks: [],
                pendingFriends: [],
                timestamps: []
            },
            _0x112BD = [],
            _0x119A8 = false,
            _0x113BA = null,
            _0x11C43 = true,
            _0x117AE;
        const _0x1211D = Math.PI * 2;
        const _0x11416 = 128,
            _0x113E8 = _0x11416 * 2,
            _0x113FF = (_0x11416 + 6) * 2,
            _0x1142D = _0x11416 / 2;
        var _0x11444, _0x11821, _0x118F0;
        const _0x117C5 = {};
        const _0x1277E = "https://discord.com/channels/166703751053312000/630428963889741854";
        const _0x1124A = new firebase.auth.GoogleAuthProvider();
        const _0x111D7 = "https://accounts.gota.io";
        var _0x11894 = {
            key: "xmas",
            foodColors: [0xee8d1c, 0xab4422, 0x903e6f, 0x602749],
            customEjectedMass: false,
            motd: "",
            endDate: 1730505600000,
            enabled: false,
            motherCustomEnabled: false,
            motherCustom: function (_0x111C0) {},
            happyMotherCells: []
        };
        _0x11894.enabled = new Date() < _0x11894.endDate;
        // === СИНХРОНИЗАЦИЯ МЫШИ МЕЖДУ ВКЛАДКАМИ ===
        let isActiveTab = document.hasFocus();

        window.addEventListener('focus', () => { isActiveTab = true; });
        window.addEventListener('blur',  () => { isActiveTab = false; });

        document.addEventListener('mousemove', function(e) {
            if (isActiveTab) {
                localStorage.setItem('shared-mouse', JSON.stringify({
                    x: e.clientX,
                    y: e.clientY,
                    t: Date.now()
                }));
            }
        });

        window.addEventListener('storage', function(e) {
            if (e.key === 'shared-mouse' && !isActiveTab) {
                try {
                    var data = JSON.parse(e.newValue);
                    if (data && typeof data.x === 'number' && typeof data.y === 'number') {
                        // Обновляем все переменные, которые используются для движения и камеры
                        _0x12190.mouseRawX = data.x;
                        _0x12190.mouseRawY = data.y;
                        // Если есть mouseX/mouseY — тоже обновить!
                        _0x12190.mouseX = data.x;
                        _0x12190.mouseY = data.y;
                        // Отправляем на сервер
                        _0x12190.sendPacket(new _0x12065.sendMouse(data.x, data.y));
                    }
                } catch (err) {}
            }
        });
        firebase.initializeApp({
            apiKey: "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM",
            authDomain: "accounts.gota.io",
            databaseURL: "https://gota-io.firebaseio.com",
            projectId: "gota-io",
            storageBucket: "gota-io.appspot.com",
            messagingSenderId: "570450309042",
            appId: "1:570450309042:web:380ab6c94d44de2f"
        });
        var _0x124FA = {};
        var _0x11205 = {};
        var _0x12037 = {
            levelNames: 3,
            levelSkins: 3,
            textOutlineSize: 0,
            resolution: 1
        };
        var _0x11752 = [{
            name: "All",
            flags: 255,
            maxMessages: 100
        }, {
            name: "Party",
            flags: 2,
            maxMessages: 100
        }];
        var _0x12442 = 0;
        var _0x11472 = [];
        var _0x1242B = -1;
        var _0x12020 = {
            cDisableAA: false,
            cAutoRespawn: false,
            cHideId: false,
            cHideServer: false,
            cRainbowFood: false,
            sShowNames: "ALL",
            sShowSkins: "ALL",
            sRenderType: "AUTO",
            sTextOutlines: "NONE",
            sQuality: "ULTRA",
            sMassType: "DEFAULT",
            cTransCells: false,
            cShowMass: false,
            cShowBorder: false,
            cSilentLogin: false,
            cHideChat: false,
            cHideMinimap: false,
            sScorePanel: _0x111C0[52],
            cShowCoordinates: false,
            cHideFood: false,
            cColoredPing: false,
            cColoredCellCount: false,
            cThemeEnabled: false,
            cDisableAutoZoom: false,
            cAutoDecline: false,
            cDisableEventSkins: false,
            cResizableChat: false,
            cDisableAutoNameHiding: false,
            cDisableAutoFoodHiding: false,
            cDisablePersistEjectMass: false,
            iChatWidth: "360px",
            iChatHeight: "250px",
            rUiScale: 1.0,
            rReconnectPeriod: 5,
            rAnimationDelay: 90,
            rViewDistance: 150,
            _ChatTabs: JSON.parse(JSON.stringify(_0x11752))
        };
        var _0x11CB6 = {
            kContextMenu: 3,
            kEjectMass: 87,
            kSplit: 32,
            kToggleSpec: 81,
            kDoubleSplit: -1,
            kTripleSplit: -1,
            kQuadSplit: -1,
            kHexaSplit: -1,
            kFreezeMouse: -1
        };
        var _0x11C9F = false;
        const _0x11769 = Object.assign({}, _0x11CB6);
        const _0x1270B = 2;
        window[_0x111C0[58]] = _0x111C0[59] in document[_0x111C0[60]];
        const _0x126F4 = {
            version: _0x1270B,
            uiForegroundColor: "rgb(255, 255, 255)",
            uiBackgroundColor: "rgba(22, 22, 22, 0.8)",
            uiBorderColor: "rgba(255, 255, 255, .2)",
            uiMenuBackgroundColor: "#2A2A2A",
            uiMenuTitleBackgroundColor: "#404040",
            uiMenuSubBackgroundColor: "#363636",
            uiMenuSubBackground2Color: "#404040",
            uiButtonColor: "#444444",
            uiGameBackgroundColor: "#121212",
            uiGameBorderColor: "#ff0000",
            uiLeaderboardHighlightSelf: "#ffaaaa",
            uiLeaderboardHighlightParty: "#ffff00",
            uiPartyLeaderColor: "#00ffff",
            uiGameColorSuccess: "#00ff00",
            uiGameColorWarning: "#ffff00",
            uiGameColorError: "#ff0000",
            _FoodColors: [],
            aCustomBackground: "",
            aCustomSpike: "",
            aCustomMother: "",
            rBorderSize: 32,
            rBackgroundOpacity: 1
        };
        const _0x11797 = {};
        for (var _0x11C88 in _0x126F4) {
            _0x11797[_0x11C88] = _0x126F4[_0x11C88]
        };
        const _0x116C8 = {
            aCustomSpike: null,
            aCustomMother: null
        };
        var _0x116DF = [];
        var _0x126C6 = {
            rules: false,
            nameColor: {
                r: 0,
                g: 255,
                b: 255
            },
            chatColor: 0,
            lowerName: false,
            skinName: "",
            effect: 0,
            nameFont: 0
        };
        var _0x11C15 = null;
        var _0x124E3 = null;
        var _0x11D40 = 0;

        function _0x12681() {
            _0x1138C = document.getElementById("canvas");
            _0x11EF5 = document.getElementById("minimap-canvas");
            _0x11F23 = _0x11EF5.getContext("2d");
            _0x11EDE = $("#main");
            _0x12106 = $("#party-panel");
            _0x11BB9 = $(".hud-panel");
            _0x123B8 = document.getElementById(_0x111C0[82]);
            _0x123E6 = $(_0x111C0[83]);
            _0x11627 = $(_0x111C0[84]);
            chatContainer = document.getElementById(_0x111C0[85]);
            _0x11489 = document.getElementById(_0x111C0[86]);
            _0x11D29 = $(_0x111C0[87]);
            _0x11724 = $(_0x111C0[88]);
            _0x117C5[_0x111C0[89]] = document.getElementById(_0x111C0[90]);
            _0x117C5.playerScore = document.getElementById(_0x111C0[94])[_0x111C0[93]]("span");
            _0x117C5[_0x111C0[95]] = document.getElementById(_0x111C0[96])[_0x111C0[93]]("span");
            _0x117C5.playerCells = document.getElementById(_0x111C0[98])[_0x111C0[93]]("span");
            _0x117C5[_0x111C0[99]] = document.getElementById(_0x111C0[100])[_0x111C0[93]]("span");
            _0x117C5.resetInfo = $("#extra-reset-timer");
            _0x117C5.resetTime = $("#resetTime");
            _0x117C5.respawnInfo = $("#extra-respawn-cooldown");
            _0x117C5.respawnCooldown = $("#respawnCooldown");
            _0x117C5.spectatorCount = $("#spectatorCount");
            _0x117C5.playerCellCount = 0;
            _0x117C5.minimapCoords = $("#minimap-coordinates");
            _0x117C5.partyPanel = _0x12106;
            _0x117C5.friendOnlineCount = $("#social-online-friends-count");
            _0x11B46();
            _0x12836 = false;
            FastClick[_0x111C0[118]](document["body"]);
            if (window[_0x111C0[58]]) {
                window[_0x111C0[119]] = nipplejs[_0x111C0[125]]({
                    zone: document.getElementById(_0x111C0[120]),
                    mode: _0x111C0[121],
                    position: {
                        left: _0x111C0[122],
                        bottom: _0x111C0[123]
                    },
                    color: _0x111C0[124],
                    size: 100,
                    restOpacity: 0.5,
                    dynamicPage: true
                });
                _0x12020.cHideChat = true;
                _0x12020.cHideLeaderboard = true;
                document.getElementById(_0x111C0[135]).addEventListener(_0x111C0[128], function (_0x111D7) {
                    _0x111D7[_0x111C0[131]].style.opacity = 1.0;
                    _0x12190.handleKey(_0x11CB6.kSplit)
                });
                document.getElementById(_0x111C0[135]).addEventListener(_0x111C0[136], function (_0x111D7) {
                    _0x111D7[_0x111C0[131]].style.opacity = 0.3
                });
                document.getElementById(_0x111C0[139]).addEventListener(_0x111C0[128], function (_0x111D7) {
                    _0x111D7[_0x111C0[131]].style.opacity = 1.0;
                    _0x12836 = true;
                    if (_0x12190) {
                        _0x12190.sendPacket(new _0x12065.sendEjectMass(true))
                    }
                });
                document.getElementById(_0x111C0[139]).addEventListener(_0x111C0[136], function (_0x111D7) {
                    _0x111D7[_0x111C0[131]].style.opacity = 0.3;
                    _0x12836 = false;
                    if (_0x12190) {
                        _0x12190.sendPacket(new _0x12065.sendEjectMass(false))
                    }
                });
                document.getElementById(_0x111C0[141]).addEventListener(_0x111C0[128], function (_0x111D7) {
                    _0x111D7[_0x111C0[131]].style.opacity = 1.0;
                    _0x12190.handleKey(_0x11CB6.kDoubleSplit)
                });
                document.getElementById(_0x111C0[141]).addEventListener(_0x111C0[136], function (_0x111D7) {
                    _0x111D7[_0x111C0[131]].style.opacity = 0.3
                });
                document.getElementById(_0x111C0[143]).addEventListener(_0x111C0[128], function (_0x111D7) {
                    _0x111D7[_0x111C0[131]].style.opacity = 1;
                    _0x12190.handleKey(_0x11CB6.kTripleSplit)
                });
                document.getElementById(_0x111C0[143]).addEventListener(_0x111C0[136], function (_0x111D7) {
                    _0x111D7[_0x111C0[131]].style.opacity = 0.3
                });
                window[_0x111C0[119]].on(_0x111C0[144], function (_0x111EE, _0x111D7) {
                    _0x12190.mouseRawX = (_0x111D7[_0x111C0[146]] * _0x111D7[_0x111C0[147]]) * Math[_0x111C0[150]](_0x111D7[_0x111C0[149]][_0x111C0[148]]) + window.innerWidth / 2;
                    _0x12190.mouseRawY = (_0x111D7[_0x111C0[146]] * _0x111D7[_0x111C0[147]]) * Math[_0x111C0[153]](-_0x111D7[_0x111C0[149]][_0x111C0[148]]) + window.innerHeight / 2
                })
            } else {
                window[_0x111C0[156]] = function (_0x111D7) {
                    _0x12190.mouseRawX = _0x111D7.clientX;
                    _0x12190.mouseRawY = _0x111D7.clientY
                    if (activetab && !_0x12190.mouseFrozen) {
                        const now = Date.now();
                        if (now - lastSendTime > sendInterval) {
                            localStorage.setItem('shared-mouse', JSON.stringify({x: _0x12190.mouseRawX, y: _0x12190.mouseRawY, t: now}));
                            lastSendTime = now;
                            console.log('[ACTIVE TAB] mouse sent:', _0x12190.mouseRawX, _0x12190.mouseRawY);
                        }
                    }
                };
                window[_0x111C0[159]] = function (_0x111D7) {
                    var _0x111EE = _0x111D7[_0x111C0[160]] + 1;
                    if (_0x11C9F) {
                        _0x112A6(_0x111EE);
                        _0x111D7.preventDefault();
                        return
                    };
                    if ($("input").is(":focus") || _0x11EDE.css("display") != "none") {
                        return
                    };
                    _0x12190.handleKey(_0x111EE)
                };
                window[_0x111C0[165]] = function (_0x111D7) {
                    var _0x111EE = _0x111D7[_0x111C0[160]] + 1;
                    if (_0x111EE == _0x11CB6.kEjectMass) {
                        _0x12836 = false;
                        if (_0x12190) {
                            _0x12190.sendPacket(new _0x12065.sendEjectMass(false))
                        }
                    }
                };
                window[_0x111C0[167]] = function (_0x111EE) {
                    if (_0x11EDE.css("display") == "none" && _0x111EE.target.id == "canvas") {
                        var _0x111D7 = _0x111EE[_0x111C0[169]] || (_0x111EE[_0x111C0[170]] * -1);
                        if (_0x111D7 > 0) {
                            _0x12190.mouseZoom *= 1.1
                        } else {
                            _0x12190.mouseZoom *= 0.9
                        };
                        _0x12190.mouseZoom = _0x12190.mouseZoom > 5 ? 5 : (_0x12190.mouseZoom < 0.1 ? 0.1 : _0x12190.mouseZoom)
                    }
                }
            };
            window[_0x111C0[172]] = function (_0x111D7) {
                var _0x111EE = _0x111D7[_0x111C0[173]] || _0x111D7.keyCode || _0x111D7[_0x111C0[175]];
                if (_0x111EE <= 5) {
                    return
                };
                if (_0x11C9F) {
                    _0x112A6(_0x111EE);
                    _0x111D7.preventDefault();
                    return
                };
                if ($("input").is(":focus")) {
                    return
                };
                if (_0x111EE == 27) {
                    _0x12750(_0x11EDE);
                    if (_0x11C71($("#popup-profile") || _0x11C71($("#popup-account-username")))) {
                        _0x11B5D($("#popup-profile"));
                        _0x11B5D($("#popup-account-username"))
                    }
                };
                if (_0x11EDE.css("display") != "none") {
                    return
                };
                _0x12190.handleKey(_0x111EE)
            };
            window[_0x111C0[178]] = function (_0x111D7) {
                var _0x111EE = _0x111D7[_0x111C0[173]] || _0x111D7.keyCode || _0x111D7[_0x111C0[175]];
                if (_0x111EE == _0x11CB6.kEjectMass) {
                    _0x12836 = false;
                    if (_0x12190) {
                        _0x12190.sendPacket(new _0x12065.sendEjectMass(false))
                    }
                }
            };
            window[_0x111C0[179]] = function (_0x111D7) {
                if (_0x12836 && _0x12020[_0x111C0[180]]) {
                    _0x12836 = false;
                    if (_0x12190) {
                        _0x12190.sendPacket(new _0x12065.sendEjectMass(false))
                    }
                }
            };
            document.addEventListener(_0x111C0[181], function (_0x111D7) {
                _0x111D7.preventDefault()
            });
            _0x11D9C();
            _0x11D85();
            var _0x1121C = window.location.href.split("#").slice(1).join("#").split("&");
            var _0x1124A = "";
            if (_0x1121C[0]) {
                _0x1124A = _0x1121C[0].toLowerCase()
            };
            if (_0x1121C[1]) {
                _0x11278 = _0x1121C[1]
            };
            if (_0x1124A != null && _0x1124A != "") {
                _0x1124A = _0x1124A[0].toUpperCase() + _0x1124A.slice(1);
                _0x124E3 = function () {
                    var _0x111D7 = null;
                    if ((_0x111D7 = _0x11A77(_0x1124A)) != null) {
                        _0x1249E(_0x111D7.name);
                        _0x12487(_0x111D7.region)
                    } else {
                        _0x111EE()
                    }
                }
            } else {
                _0x124E3 = _0x111EE
            };
            firebase.database().ref("/game").on("value", function (_0x1121C) {
                var _0x111D7 = _0x1121C.val();
                if (_0x111D7.version !== version) {
                    _0x12190.selfMsg("Woah! Version " + _0x111D7.version + " is now available. Press Ctrl+R to update!")
                };
                if (_0x11D12 != _0x111D7.motd && _0x111D7.motd !== "") {
                    _0x11D12 = _0x111D7.motd;
                    _0x12190.selfMsg(_0x111D7.motd)
                };
                if (_0x111D7.listRefresh != _0x11D40) {
                    _0x11D40 = _0x111D7.listRefresh;
                    _0x124FA = {};
                    _0x11205(_0x124E3);
                    clearInterval(_0x11C15);
                    _0x11C15 = setInterval(() => {
                        _0x11205()
                    }, _0x111D7.listRefresh)
                };
                for (var _0x111EE in _0x111D7.titles) {
                    _0x12739[_0x111EE] = _0x111D7.titles[_0x111EE]
                }
            });

            function _0x11205(_0x111EE) {
                jQuery.ajax({
                    type: "POST",
                    dataType: "json",
                    url: _0x111D7 + "/api/v1/utilities/servers",
                    success: function (_0x111D7) {
                        for (var _0x1124A of _0x111D7) {
                            var _0x11278 = [];
                            for (var _0x1121C of _0x1124A.servers) {
                                _0x1121C.players = parseInt(_0x1121C.players);
                                _0x1121C.bots = _0x1121C.bots || 0;
                                var _0x11233 = (_0x1121C.players + _0x1121C.bots) + "/" + _0x1121C.playersMax;
                                if (_0x1121C.bots > 0) {
                                    _0x11233 += "*"
                                };
                                var _0x11261 = new _0x124CC(_0x1121C.name, _0x1121C.address, _0x1121C.players, _0x1121C.bots, _0x11233, _0x1121C.gamemode, _0x1124A.region, _0x1121C.ssl, _0x1121C.order);
                                _0x11278.push(_0x11261)
                            };
                            _0x11278.sort((_0x111D7, _0x111EE) => {
                                return _0x111D7.order - _0x111EE.order
                            });
                            _0x124FA[_0x1124A.region] = {};
                            for (var _0x11205 = 0; _0x11205 < _0x11278.length; _0x11205++) {
                                var _0x11261 = _0x11278[_0x11205];
                                _0x124FA[_0x1124A.region][_0x11261.name] = _0x11261
                            }
                        };
                        _0x11E0F();
                        if (_0x111EE != null) {
                            _0x111EE()
                        } else {
                            if (_0x12470 != null) {
                                _0x1249E(_0x12470.name)
                            }
                        }
                    },
                    error: function (_0x111C0) {
                        _0x11E0F()
                    }
                })
            }

            function _0x111EE() {
                if (_0x12470 != null) {
                    _0x1249E(_0x12470.name);
                    return
                };
                _0x12487("eu");
                _0x1249E("Vendetta")
            }
            _0x125E0 = {};
            _0x125F7 = {};
            _0x11E99();
            $(window).unload(_0x11FDB);
            _0x12190 = new _0x115CB();
            _0x12065 = new _0x1207C();
            window.addEventListener('storage', function(e) {
                if (e.key === 'shared-mouse' && !activetab) {
                    try {
                        var data = JSON.parse(e.newValue);
                        if (data && typeof data.x === 'number' && typeof data.y === 'number') {
                            if (!_0x12190.mouseFrozen) {
                                _0x12190.mouseRawX = data.x;
                                _0x12190.mouseRawY = data.y;
                                // Обновляем mouseX/mouseY, если они есть
                                if ('mouseX' in _0x12190) _0x12190.mouseX = data.x;
                                if ('mouseY' in _0x12190) _0x12190.mouseY = data.y;
                                _0x12190.sendPacket(new _0x12065.sendMouse(data.x, data.y));
                                console.log('[PASSIVE TAB] mouse received and sent:', data.x, data.y);
                            } else {
                                console.log('[PASSIVE TAB] mouseFrozen, not updating coords');
                            }
                        }
                    } catch (err) {}
                }
            });
            _0x11D57();
            _0x1163E.init();
            _0x12317();
            var _0x11233 = {
                view: _0x1138C,
                backgroundAlpha: 0,
                forceCanvas: _0x12020.sRenderType === "CANVAS",
                antialias: !_0x12020.cDisableAA
            };
            _0x12162 = {
                renderer: _0x1214B.autoDetectRenderer(_0x11233),
                stage: _0x12179
            };
            _0x11444 = _0x11683(_0x11416);
            _0x11821 = _0x11683(32);
            _0x118F0 = _0x11683(8);
            $(window).resize(_0x11FF2);
            _0x11FF2();
            _0x11CFB = Date.now();
            fps = 0;
            _0x12190.selfMsg("Welcome to Weyno Gota.io mode!");
            if (_0x11894.enabled && _0x11894.motd !== "") {
                _0x12190.selfMsg(_0x11894.motd)
            };
            _0x127C3();
            requestAnimationFrame(_0x12722)
        }

        function _0x11FF2() {
            _0x1138C.width = window.innerWidth * _0x12037.resolution;
            _0x1138C.height = window.innerHeight * _0x12037.resolution;
            _0x12162.renderer.resize(_0x1138C.width, _0x1138C.height);
            _0x12162.stage.position.x = (window.innerWidth * _0x12037.resolution) / 2;
            _0x12162.stage.position.y = (window.innerHeight * _0x12037.resolution) / 2
        }

        function _0x11683(_0x111EE) {
            var _0x111D7 = new _0x1214B.Graphics();
            _0x111D7.beginFill(16777215);
            _0x111D7.drawCircle(0, 0, _0x11416);
            _0x111D7.endFill();
            var _0x11205 = _0x1214B.RenderTexture.create({
                width: _0x111D7.width,
                height: _0x111D7.height,
                multisample: _0x1214B[_0x111C0[240]][_0x111C0[239]],
                resolution: window[_0x111C0[241]]
            });
            _0x12162.renderer.render(_0x111D7, {
                renderTexture: _0x11205,
                transform: new _0x1214B[_0x111C0[243]](1, 0, 0, 1, _0x111D7.width / 2, _0x111D7.height / 2)
            });
            if (_0x12162.renderer.framebuffer) {
                _0x12162.renderer.framebuffer.blit()
            };
            _0x111D7.destroy(true);
            return _0x11205
        }

        function _0x11935(_0x111D7) {
            for (var _0x111EE in _0x126F4) {
                if (_0x111EE.charAt(0) == "u") {
                    _0x111D7(_0x111EE)
                }
            }
        }

        function _0x12722() {
            var _0x11205 = (Date.now() - _0x11CFB);
            _0x11CFB = Date.now();
            var _0x111EE = Math.min(_0x11205 / _0x12020.rAnimationDelay, 1.0);
            _0x11991 += _0x11205;
            if ((_0x12190.scale > 0.12 || _0x12020.cDisableAutoFoodHiding) && !_0x12020.cHideFood) {
                _0x11907.visible = true;
                for (var _0x1121C in _0x12190.foodObjects) {
                    _0x112A6 = _0x12190.foodObjects[_0x1121C];
                    if (_0x112A6.steps > 0) {
                        _0x112A6.animate(_0x111EE)
                    };
                    _0x112A6.handleFood()
                }
            } else {
                _0x11907.visible = false
            };
            for (var _0x1121C in _0x12190.bucket) {
                _0x112A6 = _0x12190.bucket[_0x1121C];
                if (_0x112A6.steps > 0) {
                    _0x112A6.animate(_0x111EE)
                };
                _0x112A6.handle()
            };
            var _0x11278 = 0,
                _0x1128F = 0,
                _0x111D7 = 0,
                _0x112D4 = 0,
                _0x112A6 = null;
            for (var _0x1121C in _0x12190.myCells) {
                _0x112A6 = _0x12190.myCells[_0x1121C];
                if (_0x112A6 != null) {
                    _0x11278 += _0x112A6.x;
                    _0x1128F += _0x112A6.y;
                    _0x112D4 += _0x112A6.size;
                    _0x111D7++
                }
            };
            if (_0x111D7 != 0) {
                _0x12190.centerX = _0x11278 / _0x111D7;
                _0x12190.centerY = _0x1128F / _0x111D7;
                _0x12190.centerSteps = 0;
                if (_0x12020.cDisableAutoZoom) {
                    _0x12190.scale_base = 0.2 * Math.max(_0x1138C.height / 1080, _0x1138C.width / 1920)
                } else {
                    _0x12190.scale_base = Math.pow(Math.min(32.0 / _0x112D4, 1), 0.4) * Math.max(_0x1138C.height / 1080, _0x1138C.width / 1920)
                }
            };
            if (_0x12190.centerSteps > 0) {
                _0x12190.centerX += (_0x12190.centerX_ - _0x12190.centerX) * _0x111EE;
                _0x12190.centerY += (_0x12190.centerY_ - _0x12190.centerY) * _0x111EE
            };
            var _0x11261 = _0x12190[_0x111C0[268]] * _0x12190[_0x111C0[171]];
            _0x12190.scale = (9 * _0x12190.scale + _0x11261) / 10;
            _0x11EC7.scale[_0x111C0[231]] = _0x12190.scale;
            _0x11EC7.scale[_0x111C0[234]] = _0x12190.scale;
            _0x11EC7.pivot.x = _0x12190[_0x111C0[264]];
            _0x11EC7.pivot.y = _0x12190[_0x111C0[265]];
            if (_0x12190[_0x111C0[274]]() && _0x11EDE[_0x111C0[15]](_0x111C0[14]) == _0x111C0[16]) {
                if (!_0x12190[_0x111C0[275]]) {
                    var _0x11233 = _0x11EC7.pivot.x - (_0x12162.stage.position.x / _0x12190.scale) + ((_0x12190.mouseRawX * _0x12037.resolution) / _0x12190.scale);
                    var _0x1124A = _0x11EC7.pivot.y - (_0x12162.stage.position.y / _0x12190.scale) + ((_0x12190.mouseRawY * _0x12037.resolution) / _0x12190.scale);
                    _0x12190[_0x111C0[138]](new _0x12065[_0x111C0[276]](_0x11233,_0x1124A))
                }
            };
            if (!_0x12020.cHideMinimap) {
                _0x1180A(_0x111EE)
            };
            if (_0x12020.cShowCoordinates) {
                _0x117F3()
            };
            _0x12190.buffHolder.update();
            _0x12162.renderer.render(_0x12162.stage);
            _0x1197A++;
            if (_0x11991 >= 1000) {
                _0x117C5.playerFps.html = _0x1197A;
                var _0x112EB = Date.now();
                if (_0x12190.serverData.resetType > 0 && _0x12190.serverData.resetTime > 0) {
                    _0x117C5.resetInfo.css("display", "block");
                    var _0x112BD = Math.max(0, Math.floor((_0x12190.serverData.resetTime - _0x112EB) / 1000));
                    _0x117C5.resetTime.html(_0x11963(_0x112BD))
                } else {
                    _0x117C5.resetInfo.css("display", "none")
                };
                if (_0x12190.respawnCooldown > 0 && _0x12190.respawnCooldown >= _0x112EB) {
                    _0x117C5.respawnInfo.css("display", "block");
                    var _0x112BD = Math.max(0, Math.ceil((_0x12190.respawnCooldown - _0x112EB) / 1000));
                    _0x117C5.respawnCooldown.html(_0x11963(_0x112BD))
                } else {
                    if (_0x12190.respawnCooldown < 0) {
                        _0x117C5.respawnInfo.css("display", "block");
                        _0x117C5.respawnCooldown.html("NEVER")
                    } else {
                        _0x117C5.respawnInfo.css("display", "none")
                    }
                };
                _0x11991 = 0;
                _0x1197A = 0
            };
            _0x12190.playerRegistry.handleUpdatedPlayers();
            requestAnimationFrame(_0x12722)
        }

        function _0x11AD3() {
            if (_0x12020.cShowBorder && _0x12190.serverData.border.enabled) {
                if (_0x112EB != null) {
                    _0x112EB.parent.removeChild(_0x112EB);
                    _0x112EB.destroy();
                    _0x112EB = null
                };
                _0x112EB = new _0x1214B.Graphics();
                _0x112EB.lineStyle(_0x126F4.rBorderSize, _0x1214B.utils.string2hex(tinycolor(_0x126F4.uiGameBorderColor).toHexString()));
                _0x112EB.drawRect(_0x12190.serverData.border.left, _0x12190.serverData.border.top, _0x12190.serverData.border.width, _0x12190.serverData.border.height);
                _0x11302.addChild(_0x112EB);
                _0x112EB.visible = true
            } else {
                if (_0x112EB != null) {
                    _0x112EB.parent.removeChild(_0x112EB);
                    _0x112EB.destroy();
                    _0x112EB = null
                }
            }
        }

        function _0x117F3() {
            _0x117C5.minimapCoords.css({
                "color": _0x126F4.uiForegroundColor
            });
            _0x117C5.minimapCoords.html("X: " + _0x12190.centerX.toFixed(0) + " Y: " + _0x12190.centerY.toFixed(0))
        }

        function _0x1180A(_0x111D7) {
            if (!_0x12190.serverData.border.enabled) {
                return
            };
            _0x11F23.clearRect(0, 0, _0x11EF5.width, _0x11EF5.height);
            _0x11F23.font = "12px Calibri";
            for (var _0x111EE = 0; _0x111EE < _0x12190.party.length; _0x111EE++) {
                var _0x11205 = _0x12190.party[_0x111EE];
                if (_0x11205.state === _0x120EF.ALIVE && _0x11205.id != _0x12190.playerId) {
                    _0x11F3A(_0x11F23, _0x11205.name, _0x11205.x, _0x11205.y, 4, _0x11205.mmColor, true);
                    _0x11205.x += (_0x11205.x_ - _0x11205.x) * _0x111D7;
                    _0x11205.y += (_0x11205.y_ - _0x11205.y) * _0x111D7
                }
            };
            _0x11F3A(_0x11F23, _0x12190.name, _0x12190.centerX, _0x12190.centerY, 6, "#fefefe", false)
        }

        function _0x11FDB() {
            _0x123A1()
        }

        function _0x115CB() {
            this.socket = null;
            this.currentServer = null;
            this.currentServerName = null;
            this.spectate = false;
            this.name = "";
            this.playerId = 0;
            this.bucket = {};
            this.foodObjects = {};
            this.myCells = {};
            this.playerRegistry = new _0x121BE();
            this.buffHolder = new _0x11347();
            this.centerX = 0;
            this.centerY = 0;
            this.centerX_ = 0;
            this.centerY_ = 0;
            this.centerSteps = 0;
            this.scale = 0.5;
            this.scale_ = 0.5;
            this.scale_base = 0.5;
            this.mouseZoom = 1.0;
            this.offsetX = 0;
            this.offsetY = 0;
            this.mouseRawX = 0;
            this.mouseRawY = 0;
            this.mouseX = 0;
            this.mouseY = 0;
            this.mouseFrozen = false;
            this.party = [];
            this.partyIds = {};
            this.subPanelOverride = false;
            this.serverData = {
                hasSentSubPanel: false,
                border: {},
                maxCells: 16
            };
            this.score = 0;
            this.respawnCooldown = 0;
            this.customGameMap = null;
            this.accountListeners = {};
            this.clearStats();
            setInterval(this.sendPing.bind(this), 30000)
        }
        _0x115CB.prototype.clearStats = function () {
            this.stats = {
                name: "An unnamed cell",
                alive: 0,
                eatenFood: 0,
                eatenEject: 0,
                eatenVirus: 0,
                eatenPlayer: 0,
                gainFood: 0,
                gainEject: 0,
                gainVirus: 0,
                gainPlayer: 0
            }
        };
        _0x115CB.prototype.play = function () {
            if (_0x12470 == null) {
                this.selfMsg("No server selected!");
                return
            };
            this.name = $("#name-box").val();
            this.spectate = false;
            this.currentServerName = _0x12470.name;
            _0x123B8[_0x111C0[93]](_0x111C0[341]).innerHTML = this.currentServerName;
            _0x11DF8();
            if (this.isConnected() && this.currentServer == _0x12470.ip) {
                this.sendPacket(new _0x12065.setName(this.name))
            } else {
                this.connect(_0x12470.ip)
            };
            _0x1256D();
            _0x11B5D(_0x11EDE);
            if (window[_0x111C0[58]]) {
                touch_controls.style["display"] = "block"
            }
        };
        _0x115CB.prototype.spec = function () {
            if (_0x12470 == null) {
                this.selfMsg("No server selected!");
                return
            };
            this.spectate = true;
            _0x11DF8();
            if (this.isConnected() && this.currentServer == _0x12470.ip) {
                this.sendPacket(new _0x12065.sendSpectate())
            } else {
                this.connect(_0x12470.ip)
            };
            _0x1256D();
            _0x11B5D(_0x11EDE)
        };
        _0x115CB.prototype.connect = function (_0x111EE) {
            if (this.socket != null) {
                this.socket.nextUrl = _0x111EE;
                this.disconnect(_0x111EE);
                return
            };
            this.currentServer = _0x111EE;
            this.currentServerName = _0x12470.name;
            this.selfMsg("Connecting to " + (_0x12020.cHideServerDisplay ? _0x111C0[351] : this.currentServerName));
            if (_0x12470.ssl == 1) {
                this.socket = new WebSocket("wss://" + _0x111EE)
            } else {
                this.socket = new WebSocket("ws://" + _0x111EE)
            };
            this.socket.binaryType = "arraybuffer";
            var _0x111D7 = this;
            this.socket.onopen = this.onConnect.bind(this);
            this.socket.onmessage = this.onMessage.bind(this);
            this.socket.onclose = function (_0x111EE) {
                _0x111D7.reset();
                _0x111D7.selfMsg("You have been disconnected from the server. Reason: " + (_0x111EE.reason === "" ? _0x111C0[364] : _0x111EE.reason));
                if (this.nextUrl != null) {
                    _0x111D7.connect(this.nextUrl)
                }
            };
            this.socket.onerror = function (_0x11205) {
                _0x111D7.reset();
                this.nextUrl = null;
                if (_0x12020[_0x111C0[366]] > 0) {
                    _0x111D7.selfMsg(_0x111C0[367] + _0x12020[_0x111C0[366]] + _0x111C0[368]);
                    setTimeout(function () {
                        if (_0x111D7.isConnected() == false && _0x111D7.socket == null) {
                            _0x111D7.connect(_0x111EE)
                        }
                    }, _0x12020[_0x111C0[366]] * 1000)
                }
            };
            document.body.classList.add("hide-captcha-badge")
        };
        _0x115CB.prototype.disconnect = function (_0x111D7) {
            if (this.socket != null) {
                this.socket.close()
            }
        };
        _0x115CB.prototype.clearBuckets = function () {
            for (var _0x111D7 in this.bucket) {
                this.bucket[_0x111D7].onDelete();
                delete this.bucket[_0x111D7]
            };
            for (var _0x111D7 in this.foodObjects) {
                this.foodObjects[_0x111D7].onDelete();
                delete this.foodObjects[_0x111D7]
            }
        };
        _0x115CB.prototype.reset = function () {
            this.clearBuckets();
            this.myCells = {};
            this.playerRegistry["clear"]();
            this.playerId = 0;
            this.score = 0;
            this.respawnCooldown = 0;
            this.customGameMap = null;
            this.currentServer = null;
            this.clearStats();
            this.clearParty();
            this.buffHolder.clearBuffs();
            this.serverData.hasSentSubPanel = false;
            this.serverData.resetType = 0;
            this.serverData.autosplits = false;
            if (this.socket != null) {
                this.socket = null
            };
            _0x123B8[_0x111C0[93]](_0x111C0[380]).innerHTML = this.playerId;
            if (this.subPanelOverride) {
                this.subPanelOverride = false;
                _0x127F1()
            }
        };
        _0x115CB.prototype.handleKey = function(_0x111EE) {
            if (_0x111EE == _0x11CB6.kEjectMass) {
                _0x12836 = true;
                this[_0x111C0[138]](new _0x12065[_0x111C0[137]](true))
            } else {
                if (_0x111EE == _0x11CB6[_0x111C0[132]]) {
                    this[_0x111C0[138]](new _0x12065[_0x111C0[381]](17))
                } else {
                    if (_0x111EE == _0x11CB6[_0x111C0[382]]) {
                        this[_0x111C0[138]](new _0x12065[_0x111C0[381]](18))
                    } else {
                        if (_0x111EE == _0x11CB6[_0x111C0[140]]) {
                            this[_0x111C0[138]](new _0x12065[_0x111C0[381]](17));
                            this[_0x111C0[138]](new _0x12065[_0x111C0[381]](17))
                        } else {
                            if (_0x111EE == _0x11CB6[_0x111C0[142]]) {
                                for (var _0x111D7 = 0; _0x111D7 < 3; _0x111D7++) {
                                    this[_0x111C0[138]](new _0x12065[_0x111C0[381]](17))
                                }
                            } else {
                                if (_0x111EE == _0x11CB6[_0x111C0[383]]) {
                                    for (var _0x111D7 = 0; _0x111D7 < 4; _0x111D7++) {
                                        this[_0x111C0[138]](new _0x12065[_0x111C0[381]](17))
                                    }
                                } else {
                                    if (_0x111EE == _0x11CB6[_0x111C0[384]]) {
                                        for (var _0x111D7 = 0; _0x111D7 < 6; _0x111D7++) {
                                            this[_0x111C0[138]](new _0x12065[_0x111C0[381]](17))
                                        }
                                    } else {
                                        if (_0x111EE == 38) {
                                            this[_0x111C0[171]] *= 1.05;
                                            this[_0x111C0[171]] = _0x12190[_0x111C0[171]] > 5 ? 5 : (this[_0x111C0[171]] < 0.1 ? 0.1 : this[_0x111C0[171]])
                                        } else {
                                            if (_0x111EE == 40) {
                                                this[_0x111C0[171]] *= 0.95;
                                                this[_0x111C0[171]] = _0x12190[_0x111C0[171]] > 5 ? 5 : (this[_0x111C0[171]] < 0.1 ? 0.1 : this[_0x111C0[171]])
                                            } else {
                                                if (_0x111EE == _0x11CB6[_0x111C0[385]]) {
                                                    this[_0x111C0[275]] = !this[_0x111C0[275]];
                                                    if (this[_0x111C0[275]]) {
                                                        _0x117C5[_0x111C0[89]][_0x111C0[130]][_0x111C0[14]] = _0x111C0[18]
                                                    } else {
                                                        _0x117C5[_0x111C0[89]][_0x111C0[130]][_0x111C0[14]] = _0x111C0[16]
                                                    }
                                                } else {
                                                    if (_0x111EE == _0x11CB6[_0x111C0[386]]) {
                                                        _0x1156F()
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        ;
        _0x115CB.prototype.isConnected = function () {
            if (this.socket == null) {
                return false
            } else {
                return this.socket.readyState == 1
            }
        };
        _0x115CB.prototype.sendPacket = function (_0x111D7) {
            if (this.isConnected()) {
                this.socket.send(_0x111D7)
            }
        };
        _0x115CB.prototype.onConnect = function () {
            _0x112BD = [];
            _0x118C2();
            this.sendPacket(new _0x12065.connectionStart());
            this.sendPing();
            this.sendOptions();
            if (firebase.auth().currentUser !== null) {
                firebase.auth().currentUser.getIdToken(true).then((_0x111D7) => {
                    _0x12190.sendPacket(new _0x12065.sendAuthToken(_0x111D7))
                }).catch((_0x111C0) => {
                    return _0x11AEA(_0x111C0, true)
                });
                return
            } else {
                if (!this.spectate) {
                    this.sendPacket(new _0x12065.setName(this.name))
                } else {
                    this.sendPacket(new _0x12065.sendSpectate())
                }
            }
        };
        _0x115CB.prototype.sendPing = function () {
            if (this.isConnected()) {
                _0x12134 = +new Date;
                this.sendPacket(new _0x12065.sendPing())
            }
        };
        _0x115CB.prototype.sendOptions = function () {
            if (this.isConnected()) {
                this.sendPacket(new _0x12065.sendOptions())
            }
        };
        _0x115CB.prototype.selfMsg = function (_0x111EE) {
            var _0x111D7 = document.createElement("td");
            var _0x11205 = document.createElement("span");
            _0x11205.style.color = "#DDDD00";
            _0x11205.innerHTML = "[System] " + _0x120C1(_0x111EE);
            _0x111D7.appendChild(_0x11205);
            _0x1121C(_0x11541.SYSTEM, _0x111D7)
        };
        _0x115CB.prototype.selfMsgWithJoinCode = function (_0x11233, _0x111D7) {
            var _0x11205 = document.createElement("td");
            var _0x1124A = document.createElement("span");
            _0x1124A.style.color = "#DDDD00";
            _0x1124A.innerHTML = "[System] " + _0x120C1(_0x11233);
            _0x11205.appendChild(_0x1124A);
            var _0x111EE = document.createElement("span");
            _0x111EE.style.color = "#DDDD00";
            _0x111EE.innerHTML = _0x111D7;
            _0x111EE.style.pointerEvents = "all";
            _0x111EE.style.userSelect = "all";
            _0x11205.appendChild(_0x111EE);
            _0x1121C(_0x11541.SYSTEM, _0x11205)
        };
        _0x115CB.prototype.clearParty = function (_0x111D7) {
            this.party = [];
            this.partyIds = {};
            this.partyLeader = -1;
            this.partyIndex = -1;
            $("#party-panel").css("display", "none");
            if (_0x11724.css("display") == "block") {
                this.handleCustomGameLeave()
            };
            if (this.partyCode != null || _0x11278 != null) {
                this.partyCode = _0x11278 = null;
                window.history.pushState("page", "", " ")
            }
        };
        _0x115CB.prototype.isPartyLeader = function () {
            return this.partyLeader == this.playerId
        };
        _0x115CB.prototype.getServerMaxCells = function () {
            return this.serverData.maxCells + this.buffHolder.bonusMaxCells
        };
        _0x115CB.prototype.onMessage = function (_0x111EE) {
            var _0x111D7 = new DataView(_0x111EE.data);
            var _0x11205 = _0x111D7.getUint8(0);
            _0x111D7.offset = 1;
            switch (_0x11205) {
            case 2:
                this.handleUpdate(_0x111D7);
                break;
            case 10:
                this.handlePosition(_0x111D7);
                break;
            case 21:
                this.handleStats(_0x111D7);
                break;
            case 22:
                this.showSubPanel(_0x111D7);
                break;
            case 23:
                this.updateSubPanel(_0x111D7);
                break;
            case 40:
                this.handleInvite(_0x111D7);
                break;
            case 41:
                this.handlePartyInfo(_0x111D7);
                break;
            case 45:
                this.handlePartyData(_0x111D7);
                break;
            case 43:
                this.handlePartyJoinCode(_0x111D7);
                break;
            case 49:
                this.handleLeaderboard(_0x111D7);
                break;
            case 50:
                this.handleLeaderboardCustom(_0x111D7);
                break;
            case 63:
                this.handleRespawnCooldown(_0x111D7);
                break;
            case 64:
                this.handleMapData(_0x111D7);
                break;
            case 65:
                this.handleClearNodes();
                break;
            case 66:
                this.handleUpdateBorder(_0x111D7);
                break;
            case 68:
                this.handleResetTime(_0x111D7);
                break;
            case 69:
                this.handleSpectators(_0x111D7);
                break;
            case 70:
                this.handleSystemMsg(_0x111D7);
                break;
            case 71:
                this.handlePing();
                break;
            case 72:
                this.handleChat(_0x111D7);
                break;
            case 73:
                this.handleWhisper(_0x111D7);
                break;
            case 74:
                this.handleEditMessage(_0x111D7);
                break;
            case 80:
                this.handleShowScrimmageMenu();
                break;
            case 81:
                this.handleQueueData(_0x111D7);
                break;
            case 82:
                this.handleQueueLeave(_0x111D7);
                break;
            case 83:
                this.handleMatchState(_0x111D7);
                break;
            case 90:
                this.handleScrimmageData(_0x111D7);
                break;
            case 91:
                this.handleCustomGameShow(_0x111D7);
                break;
            case 92:
                this.handleCustomGameUpdate(_0x111D7);
                break;
            case 93:
                this.handleCustomGameLeave();
                break;
            case 94:
                this.handleShowCustomGameLobbies(_0x111D7);
                break;
            case 100:
                this.handleAddBuff(_0x111D7);
                break;
            case 101:
                this.handleRemoveBuff(_0x111D7);
                break;
            case 102:
                this.handleClearBuffs(_0x111D7);
                break;
            case 103:
                this.handleAuthenticated(_0x111D7);
                break;
            case 104:
                this.handleProfile(_0x111D7);
                break
            }
        };
        _0x115CB.prototype.handleUpdate = function (_0x1128F) {
            var _0x111D7 = _0x1128F.getUint16(_0x1128F.offset, true);
            _0x1128F.offset += 2;
            while (_0x111D7 > 0) {
                var _0x1121C = _0x1128F.getUint16(_0x1128F.offset, true);
                _0x1128F.offset += 2;
                _0x12190.playerRegistry.remove(_0x1121C);
                _0x111D7--
            };
            _0x111D7 = _0x1128F.getUint16(_0x1128F.offset, true);
            _0x1128F.offset += 2;
            while (_0x111D7 > 0) {
                var _0x1121C = _0x1128F.getUint16(_0x1128F.offset, true);
                _0x1128F.offset += 2;
                var _0x11233 = this.bucket[_0x1121C] || this.foodObjects[_0x1121C];
                if (_0x11233 != null) {
                    if (_0x11233.type == 6) {
                        delete this.foodObjects[_0x1121C]
                    } else {
                        delete this.bucket[_0x1121C]
                    };
                    if (_0x11233.playerId == this.playerId) {
                        delete this.myCells[_0x1121C];
                        if (Object.keys(this.myCells).length == 0) {
                            if (_0x12020.cAutoRespawn) {
                                if ($("#main").css("display") == "none") {
                                    _0x12190.play()
                                }
                            } else {
                                if (_0x123E6.css("display") != "block") {
                                    _0x12584(_0x11EDE)
                                };
                                aiptag.cmd["display"].push(function () {
                                    aipDisplayTag.refresh("GOT_gota-io_336x280")
                                })
                            }
                        }
                    };
                    _0x11233.onDelete()
                };
                _0x111D7--
            };
            while (true) {
                var _0x1121C = _0x1128F.getUint16(_0x1128F.offset, true);
                _0x1128F.offset += 2;
                if (_0x1121C == 0) {
                    break
                };
                var _0x1124A = this.playerRegistry.getPlayer(_0x1121C);
                var _0x11205 = false;
                if (_0x1124A == null) {
                    _0x1124A = new _0x121A7(_0x1121C)
                } else {
                    _0x11205 = true
                };
                _0x1124A.cellColor = (_0x1128F.getUint8(_0x1128F.offset++) << 16) + (_0x1128F.getUint8(_0x1128F.offset++) << 8) + _0x1128F.getUint8(_0x1128F.offset++);
                if (_0x1124A.playerId === this.playerId) { _0x1124A.rainbow = _0x12020.cRainbowFood; }
                _0x1124A.name = _0x122E9(_0x1128F);
                _0x1124A.setSkin(_0x12300(_0x1128F));
                _0x1124A.setFlags(_0x1128F.getUint8(_0x1128F.offset++));
                if ((_0x1124A.flags & 2) == 2) {
                    _0x1124A.nameColor = "#" + _0x11375(_0x1128F.getUint8(_0x1128F.offset++)) + _0x11375(_0x1128F.getUint8(_0x1128F.offset++)) + _0x11375(_0x1128F.getUint8(_0x1128F.offset++));
                    _0x1124A.parseEffect(_0x1128F.getUint8(_0x1128F.offset++));
                    _0x1124A.nameFont = _0x1128F.getUint8(_0x1128F.offset++)
                };
                if (!_0x11205) {
                    _0x12190.playerRegistry.add(_0x1124A)
                } else {
                    _0x12190.playerRegistry.updatePlayer(_0x1124A)
                }
            };
            while (true) {
                var _0x11278 = _0x1128F.getUint8(_0x1128F.offset++);
                var _0x11261 = 0;
                if (_0x11278 == 0) {
                    break
                };
                while (true) {
                    if (_0x11278 == 2 && _0x11261 == 0) {
                        _0x11261 = _0x1128F.getUint16(_0x1128F.offset, true);
                        _0x1128F.offset += 2;
                        if (_0x11261 == 0) {
                            break
                        }
                    };
                    var _0x1121C = _0x1128F.getUint16(_0x1128F.offset, true);
                    _0x1128F.offset += 2;
                    if (_0x1121C == 0) {
                        if (_0x11278 == 2) {
                            _0x11261 = 0;
                            continue
                        } else {
                            break
                        }
                    };
                    var _0x11233 = new _0x113D1(_0x1121C);
                    _0x11233.setType(_0x11278);
                    _0x11233.setX(_0x1128F.getInt16(_0x1128F.offset, true));
                    _0x11233.setY(_0x1128F.getInt16(_0x1128F.offset + 2, true));
                    _0x1128F.offset += 4;
                    switch (_0x11278) {
                    case 6:
                        _0x11233.color = _0x11A49(_0x11233.id);
                        break;
                    case 1:
                        _0x11233.setSize(_0x1128F.getUint16(_0x1128F.offset, true));
                        _0x1128F.offset += 2;
                        _0x11233.color = (_0x1128F.getUint8(_0x1128F.offset++) << 16) + (_0x1128F.getUint8(_0x1128F.offset++) << 8) + _0x1128F.getUint8(_0x1128F.offset++);
                        var _0x111EE = _0x1128F.getUint8(_0x1128F.offset++);
                        _0x11233.skin = (_0x111EE & 0x7f) - 1;
                        _0x11233.rainbow = _0x12020.cRainbowFood;
                        break;
                    case 2:
                        _0x11233.setSize(_0x1128F.getUint16(_0x1128F.offset, true));
                        _0x1128F.offset += 2;
                        _0x11233.playerId = _0x11261;
                        break;
                    case 3:
                        _0x11233.setSize(_0x1128F.getUint16(_0x1128F.offset, true));
                        _0x1128F.offset += 2;
                        break;
                    case 4:
                        _0x11233.setSize(_0x1128F.getUint16(_0x1128F.offset, true));
                        _0x1128F.offset += 2;
                        break;
                    case 5:
                        _0x11233.setSize(_0x1128F.getUint16(_0x1128F.offset, true));
                        _0x1128F.offset += 2;
                        _0x11233[_0x111C0[481]] = _0x1128F.getUint8(_0x1128F.offset++);
                        break
                    };
                    _0x11233.onCreate(this)
                }
            };
            while (true) {
                var _0x11278 = _0x1128F.getUint8(_0x1128F.offset++);
                if (_0x11278 == 0) {
                    break
                };
                while (true) {
                    var _0x1121C = _0x1128F.getUint16(_0x1128F.offset, true);
                    _0x1128F.offset += 2;
                    if (_0x1121C == 0) {
                        break
                    };
                    var _0x112A6 = _0x1128F.getInt16(_0x1128F.offset, true);
                    var _0x112BD = _0x1128F.getInt16(_0x1128F.offset + 2, true);
                    _0x1128F.offset += 4;
                    var _0x11233;
                    if (_0x11278 == 6) {
                        _0x11233 = this.foodObjects[_0x1121C]
                    } else {
                        _0x11233 = this.bucket[_0x1121C]
                    };
                    if (_0x11233 == null) {
                        _0x11233 = new _0x113D1(_0x1121C);
                        _0x11233.setType(_0x11278);
                        _0x11233.setSize(10);
                        _0x11233.setX(_0x112A6);
                        _0x11233.setY(_0x112BD);
                        _0x11233.onCreate(this)
                    } else {
                        _0x11233.updateX(_0x112A6);
                        _0x11233.updateY(_0x112BD)
                    };
                    switch (_0x11278) {
                    case 2:
                        _0x11233.size_ = _0x1128F.getUint16(_0x1128F.offset, true);
                        _0x1128F.offset += 2;
                        break;
                    case 3:
                        _0x11233.size_ = _0x1128F.getUint16(_0x1128F.offset, true);
                        _0x1128F.offset += 2;
                        break;
                    case 4:
                        _0x11233.size_ = _0x1128F.getUint16(_0x1128F.offset, true);
                        _0x1128F.offset += 2;
                        break
                    };
                    _0x11233.steps = 30
                }
            };
            this.sortCells()
        };
        _0x115CB.prototype.handlePosition = function (_0x111D7) {
            this.centerX_ = _0x111D7.getFloat32(_0x111D7.offset, true);
            _0x111D7.offset += 4;
            this.centerY_ = _0x111D7.getFloat32(_0x111D7.offset, true);
            _0x111D7.offset += 4;
            this.centerSteps = 30;
            if (!_0x12020.cDisableAutoZoom) {
                this.scale_base = _0x111D7.getFloat32(_0x111D7.offset, true)
            }
        };
        _0x115CB.prototype.handleRespawnCooldown = function (_0x111EE) {
            var _0x111D7 = _0x111EE.getFloat64(_0x111EE.offset, true);
            this.respawnCooldown = _0x111D7
        };
        _0x115CB.prototype.handleMapData = function (_0x111D7) {
            this.playerId = _0x111D7.getUint16(_0x111D7.offset, true);
            _0x111D7.offset += 2 + 1;
            this.handleUpdateBorder(_0x111D7);
            this.serverData.maxCells = _0x111D7.getUint16(_0x111D7.offset, true);
            _0x111D7.offset += 2;
            _0x12300(_0x111D7);
            this.serverData.autosplits = _0x111D7.getUint8(_0x111D7.offset++);
            _0x123B8[_0x111C0[93]](_0x111C0[380]).innerHTML = this.playerId;
            this.updateCellCounter(0, true);
            if (_0x11278 != null) {
                _0x12190.sendPacket(new _0x12065.sendPartyJoin(_0x11278))
            };
            _0x123E6.css("display", "none");
            $("#scrimmage-btn-leave").css("display", "none")
        };
        _0x115CB.prototype.handleUpdateBorder = function (_0x111D7) {
            this.serverData.border = {};
            this.serverData.border.left = _0x111D7.getInt16(_0x111D7.offset, true);
            this.serverData.border.top = _0x111D7.getInt16(_0x111D7.offset + 2, true);
            this.serverData.border.right = _0x111D7.getInt16(_0x111D7.offset + 4, true);
            this.serverData.border.bottom = _0x111D7.getInt16(_0x111D7.offset + 6, true);
            _0x111D7.offset += 8;
            this.serverData.border.width = this.serverData.border.right - this.serverData.border.left;
            this.serverData.border.height = this.serverData.border.bottom - this.serverData.border.top;
            this.serverData.border.enabled = this.serverData.border.width != 0 && this.serverData.border.height != 0;
            _0x11AD3()
        };
        _0x115CB.prototype.handleResetTime = function (_0x11205) {
            var _0x111EE = _0x11205.getUint8(_0x11205.offset++);
            var _0x111D7 = _0x11205.getFloat64(_0x11205.offset, true);
            this.serverData.resetType = _0x111EE;
            this.serverData.resetTime = _0x111D7
        };
        _0x115CB.prototype.handleSpectators = function (_0x111D7) {
            this.spectators = _0x111D7.getUint16(_0x111D7.offset, true);
            this.updateSpectators()
        };
        _0x115CB.prototype.handleClearNodes = function (_0x111D7) {
            this.clearBuckets()
        };
        _0x115CB.prototype.handleLeaderboard = function (_0x11278) {
            var _0x11233 = document.getElementById("leaderboard-canvas");
            var _0x111EE = _0x11233.getContext("2d");
            _0x11D29.text("Leaderboard");
            var _0x111D7 = _0x11278.getUint32(_0x11278.offset, true);
            _0x11278.offset += 4;
            _0x11233.width = 200;
            _0x11233.height = (20 * _0x111D7) + 5;
            _0x111EE.font = "16px Calibri";
            var _0x11261 = 20;
            for (var _0x11205 = 0; _0x11205 < _0x111D7; _0x11205++) {
                var _0x1121C = _0x11278.getUint16(_0x11278.offset, true);
                _0x11278.offset += 2;
                var _0x1124A = _0x122E9(_0x11278) || "An unnamed cell";
                if (_0x1121C == this.playerId) {
                    _0x111EE.fillStyle = _0x126F4.uiLeaderboardHighlightSelf
                } else {
                    if (this.partyIds[_0x1121C] != null) {
                        _0x111EE.fillStyle = _0x126F4.uiLeaderboardHighlightParty
                    } else {
                        _0x111EE.fillStyle = _0x126F4.uiForegroundColor
                    }
                };
                _0x111EE.fillText((_0x11205 + 1) + ". " + _0x1124A, 10, _0x11261);
                _0x11261 += 20
            }
        };
        _0x115CB.prototype.handleLeaderboardCustom = function (_0x1128F) {
            var _0x11233 = document.getElementById("leaderboard-canvas");
            var _0x11205 = _0x11233.getContext("2d");
            _0x11D29.html("Leaderboard");
            var _0x111D7 = _0x1128F.getUint16(_0x1128F.offset, true);
            var _0x111EE = _0x1128F.getUint8(_0x1128F.offset + 2, true);
            var _0x11278 = _0x1128F.getUint8(_0x1128F.offset + 3, true);
            _0x1128F.offset += 4;
            _0x11233.width = 200;
            _0x11233.height = (20 * _0x111D7) + 5;
            _0x11205.font = "16px Calibri";
            var _0x11261 = 20;
            for (var _0x1121C = 0; _0x1121C < _0x111D7; _0x1121C++) {
                var _0x1124A = _0x12300(_0x1128F);
                if (_0x1121C == _0x111EE) {
                    _0x11205.fillStyle = _0x126F4.uiLeaderboardHighlightSelf
                } else {
                    _0x11205.fillStyle = _0x126F4.uiForegroundColor
                };
                _0x11205.fillText(_0x1124A, 5, _0x11261);
                _0x11261 += 20
            }
        };
        _0x115CB.prototype.handlePing = function () {
            var _0x111D7 = +new Date - _0x12134;
            if (!_0x12020.cColoredPing) {
                if (_0x111D7 < 100) {
                    _0x123B8[_0x111C0[93]](_0x111C0[507]).style.color = _0x126F4.uiGameColorSuccess
                } else {
                    if (_0x111D7 < 200) {
                        _0x123B8[_0x111C0[93]](_0x111C0[507]).style.color = _0x126F4.uiGameColorWarning
                    } else {
                        _0x123B8[_0x111C0[93]](_0x111C0[507]).style.color = _0x126F4.uiGameColorError
                    }
                }
            } else {
                _0x123B8[_0x111C0[93]](_0x111C0[507]).style.color = _0x126F4.uiForegroundColor
            };
            _0x123B8[_0x111C0[93]](_0x111C0[507]).innerHTML = _0x111D7 + _0x111C0[511]
        };
        _0x115CB.prototype.handleChat = function (_0x1135E) {
            var _0x111D7 = _0x1135E.getUint8(_0x1135E.offset++);
            var _0x112D4 = "rgb(" + _0x1135E.getUint8(_0x1135E.offset++) + "," + _0x1135E.getUint8(_0x1135E.offset++) + "," + _0x1135E.getUint8(_0x1135E.offset++) + ")";
            var _0x11205 = _0x1135E.getUint8(_0x1135E.offset++);
            var _0x11302 = _0x1135E.getUint16(_0x1135E.offset, true);
            _0x1135E.offset += 2;
            if (_0x112BD.includes(_0x11302)) {
                return
            };
            var _0x11330 = _0x122E9(_0x1135E);
            _0x1135E.getUint8(_0x1135E.offset++);
            var _0x112A6 = _0x120C1(_0x122E9(_0x1135E)) || "An unnamed cell";
            var _0x11278 = _0x120C1(_0x122E9(_0x1135E));
            var _0x11233 = _0x11541["ALL"];
            var _0x1128F = _0x1135E.offset < _0x1135E.byteLength ? _0x1135E.getBigInt64(_0x1135E.offset, true) : 0;
            var _0x111EE;
            switch (_0x111D7) {
            case 1:
                _0x111EE = "Party";
                _0x11233 = _0x11541.PARTY;
                break;
            case 2:
                _0x111EE = "Admin";
                _0x11233 = _0x11541.ADMIN;
                break;
            default:
                _0x111EE = "All";
                break
            };
            if (_0x11330.length > 0) {
                _0x120C1(_0x111EE += " - " + _0x11330)
            };
            var _0x11261 = document.createElement("td");
            if (_0x1128F != 0) {
                _0x11261.dataset.msgid = _0x1128F
            };
            var _0x11319 = document.createElement("span");
            _0x11319.innerHTML = "[" + _0x111EE + "] ";
            _0x11261.appendChild(_0x11319);
            var _0x112EB = document.createElement("span");
            _0x112EB.innerText = _0x112A6;
            _0x112EB.dataset.playerId = _0x11302;
            _0x112EB.style.color = _0x112D4;
            _0x112EB.className = "chat-name";
            _0x112EB.oncontextmenu = _0x114B7;
            _0x11261.appendChild(_0x112EB);
            var _0x1124A = document.createElement("span");
            _0x1124A.innerHTML = ": ";
            _0x11261.appendChild(_0x1124A);
            var _0x11347 = document.createElement("span");
            _0x11347.className = "chat-content";
            _0x11347.style.color = _0x114A0[_0x11205];
            _0x11347.innerHTML = _0x120AA(_0x11278);
            _0x11261.appendChild(_0x11347);
            _0x1121C(_0x11233, _0x11261)
        };
        _0x115CB.prototype.handleWhisper = function (_0x11319) {
            var _0x1128F = _0x120C1(_0x122E9(_0x11319)) || "An unnamed cell";
            var _0x112D4 = _0x11319.getUint16(_0x11319.offset, true);
            _0x11319.offset += 2;
            if (_0x112BD.includes(_0x112D4)) {
                return
            };
            var _0x112A6 = "rgb(" + _0x11319.getUint8(_0x11319.offset++) + "," + _0x11319.getUint8(_0x11319.offset++) + "," + _0x11319.getUint8(_0x11319.offset++) + ")";
            var _0x11233 = _0x120C1(_0x122E9(_0x11319)) || "An unnamed cell";
            var _0x11261 = _0x11319.getUint16(_0x11319.offset, true);
            _0x11319.offset += 2;
            var _0x1124A = "rgb(" + _0x11319.getUint8(_0x11319.offset++) + "," + _0x11319.getUint8(_0x11319.offset++) + "," + _0x11319.getUint8(_0x11319.offset++) + ")";
            var _0x11205 = _0x120C1(_0x122E9(_0x11319));
            var _0x111EE = document.createElement("td");
            var _0x112EB = document.createElement("span");
            _0x112EB.innerText = _0x1128F;
            _0x112EB.dataset.playerId = _0x112D4;
            _0x112EB.style.color = _0x112A6;
            _0x112EB.className = "chat-name";
            _0x112EB.oncontextmenu = _0x114B7;
            _0x111EE.appendChild(_0x112EB);
            var _0x111D7 = document.createElement("span");
            _0x111D7.innerHTML = _0x111C0[531];
            _0x111EE.appendChild(_0x111D7);
            var _0x11278 = document.createElement("span");
            _0x11278.innerText = _0x11233;
            _0x11278.dataset.playerId = _0x11261;
            _0x11278.style.color = _0x1124A;
            _0x11278.className = "chat-name";
            _0x11278.oncontextmenu = _0x114B7;
            _0x111EE.appendChild(_0x11278);
            var _0x11302 = document.createElement("span");
            _0x11302.innerHTML = ": " + _0x120AA(_0x11205);
            _0x111EE.appendChild(_0x11302);
            _0x1121C(_0x11541[_0x111C0[532]], _0x111EE)
        };
        _0x115CB.prototype.handleEditMessage = function (_0x11205) {
            var _0x111EE = _0x11205.getBigInt64(_0x11205.offset, true);
            _0x11205.offset += 8;
            var _0x111D7 = _0x120C1(_0x122E9(_0x11205));
            if (_0x111D7.length > 0) {
                $(".chat-table td[data-msgid='" + _0x111EE + "'] .chat-content").html(_0x120AA(_0x111D7))
            } else {
                $(".chat-table td[data-msgid='" + _0x111EE + "']").closest("tr").remove()
            }
        };
        _0x115CB.prototype.handleSystemMsg = function (_0x111EE) {
            var _0x111D7 = _0x122E9(_0x111EE);
            this.selfMsg(_0x111D7)
        };
        _0x115CB.prototype.handleAuthenticated = function (_0x111EE) {
            var _0x111D7 = _0x111EE.getUint8(1);
            switch (_0x111D7) {
            case _0x11261.SUCCESS:
                break;
            case _0x11261.FAILURE:
                this.selfMsg("Invalid authentication token! Please logout and try again!");
                break
            };
            if (!this.spectate) {
                this.sendPacket(new _0x12065.setName(this.name))
            } else {
                this.sendPacket(new _0x12065.sendSpectate())
            }
        };
        _0x115CB.prototype.handleProfile = function (_0x11205) {
            var _0x111D7 = _0x12300(_0x11205);
            var _0x111EE = JSON.parse(_0x111D7);
            _0x11DE1(_0x111EE)
        };
        _0x115CB.prototype.handleInvite = function (_0x11205) {
            if (_0x12020.cAutoDecline) {
                _0x12190.sendPacket(new _0x12065.sendInviteResponse(false))
            } else {
                var _0x111EE = _0x120C1(_0x122E9(_0x11205));
                var _0x111D7 = document.getElementById("popup-party-text");
                _0x111D7.innerText = _0x111EE + " has invited you to a party.";
                _0x12584($("#popup-party"))
            }
        };
        _0x115CB.prototype.handlePartyInfo = function (_0x1128F) {
            var _0x11233 = {};
            var _0x11261 = [];
            var _0x1124A = -1;
            var _0x111D7 = _0x1128F.getUint16(_0x1128F.offset, true);
            _0x1128F.offset += 2;
            for (var _0x11205 = 0; _0x11205 < _0x111D7; _0x11205++) {
                var _0x1121C = {};
                var _0x111EE = _0x1128F.getUint8(_0x1128F.offset++);
                _0x1121C.id = _0x1128F.getUint16(_0x1128F.offset, true);
                _0x11233[_0x1121C.id] = _0x11205;
                _0x1128F.offset += 2;
                if (_0x111EE == 1) {
                    _0x1124A = _0x1121C.id;
                    _0x1121C.isLeader = true
                } else {
                    _0x1121C.isLeader = false
                };
                _0x1121C.name = _0x122E9(_0x1128F) || "An unnamed cell";
                _0x1121C.x = 0;
                _0x1121C.y = 0;
                _0x1121C.x_ = 0;
                _0x1121C.y_ = 0;
                _0x1121C.score = 0;
                _0x1121C.team = -1;
                _0x1121C.state = 0;
                _0x1121C.state = _0x120EF.UNKNOWN;
                if (this.partyIds[_0x1121C.id] != null) {
                    var _0x11278 = this.party[this.partyIds[_0x1121C.id]];
                    _0x1121C.x = _0x11278.x;
                    _0x1121C.y = _0x11278.y;
                    _0x1121C.x_ = _0x11278.x_;
                    _0x1121C.y_ = _0x11278.y_;
                    _0x1121C.state = _0x11278.state;
                    _0x1121C.score = _0x11278.score;
                    _0x1121C.team = _0x11278.team;
                    _0x1121C.mmColor = _0x11278.mmColor
                } else {
                    _0x1121C.mmColor = _0x11A32(_0x1121C.id)
                };
                _0x11261.push(_0x1121C)
            };
            this.party = _0x11261;
            this.partyIds = _0x11233;
            if (this.partyLeader != _0x1124A) {
                this.partyLeader = _0x1124A;
                if (_0x11724.css("display") == "block") {
                    ScrimmageHelper.checkLeader()
                }
            };
            if (_0x111D7 > 0) {
                this.drawParty()
            } else {
                this.clearParty()
            }
        };
        _0x115CB.prototype.handlePartyData = function (_0x1121C) {
            var _0x111D7 = _0x1121C.getUint16(_0x1121C.offset, true);
            _0x1121C.offset += 2;
            if (_0x111D7 != this.party.length) {
                return
            };
            for (var _0x111EE = 0; _0x111EE < _0x111D7; _0x111EE++) {
                var _0x11205 = this.party[_0x111EE];
                _0x11205.state = _0x1121C.getUint8(_0x1121C.offset++);
                if (_0x11205.state === _0x120EF.ALIVE) {
                    _0x11205.x_ = _0x1121C.getInt16(_0x1121C.offset, true);
                    _0x11205.y_ = _0x1121C.getInt16(_0x1121C.offset + 2, true);
                    _0x11205.score = _0x1121C.getInt32(_0x1121C.offset + 4, true);
                    _0x1121C.offset += 8
                }
            };
            this.drawParty()
        };
        _0x115CB.prototype.handlePartyJoinCode = function (_0x11205) {
            var _0x111D7 = _0x12300(_0x11205);
            this.partyCode = _0x12300(_0x11205);
            if (this.partyCode.length != 0) {
                this.selfMsgWithJoinCode(_0x111D7, this.partyCode);
                $("#popup-party-code-content input").val(this.partyCode);
                $("#popup-party-code").show();
                var _0x111EE = "#" + this.currentServerName + "&" + this.partyCode;
                window.history.pushState("page", "", _0x111EE)
            } else {
                this.selfMsg(_0x111D7);
                this.partyCode = null;
                window.history.pushState("page", "", " ")
            }
        };
        _0x115CB.prototype.handleStats = function (_0x11205) {
            var _0x111D7 = _0x11205.getUint16(_0x11205.offset, true);
            _0x11205.offset += 2;
            this.stats.name = _0x122E9(_0x11205) || "An unnamed cell";
            this.stats.alive += _0x11205.getUint32(_0x11205.offset, true);
            _0x11205.offset += 4;
            this.stats.eatenFood += _0x11205.getUint32(_0x11205.offset, true);
            _0x11205.offset += 4;
            this.stats.eatenEject += _0x11205.getUint32(_0x11205.offset, true);
            _0x11205.offset += 4;
            this.stats.eatenVirus += _0x11205.getUint32(_0x11205.offset, true);
            _0x11205.offset += 4;
            this.stats.eatenPlayer += _0x11205.getUint32(_0x11205.offset, true);
            _0x11205.offset += 4;
            this.stats.gainFood += _0x11205.getUint32(_0x11205.offset, true);
            _0x11205.offset += 4;
            this.stats.gainEject += _0x11205.getUint32(_0x11205.offset, true);
            _0x11205.offset += 4;
            this.stats.gainVirus += _0x11205.getUint32(_0x11205.offset, true);
            _0x11205.offset += 4;
            this.stats.gainPlayer += _0x11205.getUint32(_0x11205.offset, true);
            _0x11205.offset += 4;
            var _0x111EE = $("#main-stats");
            _0x111EE.empty();
            _0x111EE.append("<span>Name: " + this.stats.name + " (" + _0x111D7 + ")</span><br>");
            _0x111EE.append("<span>Alive: " + _0x11963(this.stats.alive) + _0x111C0[572]);
            _0x111EE.append("<span>Food eaten: " + this.stats.eatenFood + " (" + this.stats.gainFood + ")</span><br>");
            _0x111EE.append("<span>Ejected mass eaten: " + this.stats.eatenEject + " (" + this.stats.gainEject + ")</span><br>");
            _0x111EE.append("<span>Viruses eaten: " + this.stats.eatenVirus + " (" + this.stats.gainVirus + ")</span><br>");
            _0x111EE.append("<span>Player cells eaten: " + this.stats.eatenPlayer + " (" + this.stats.gainPlayer + ")</span><br>")
        };
        _0x115CB.prototype.showSubPanel = function (_0x111EE) {
            var _0x111D7 = _0x111EE.getUint8(_0x111EE.offset++) == 1;
            this.subPanelOverride = _0x111D7;
            _0x127F1();
            if (_0x111D7) {
                if (!this.serverData.hasSentSubPanel) {
                    _0x127DA();
                    this.serverData.hasSentSubPanel = true
                };
                document.body.classList.add("hide-captcha-badge")
            }
        };
        _0x115CB.prototype.updateSubPanel = function (_0x111D7) {
            if (_0x1281F) {
                _0x11D6E(_0x1281F.uid)
            }
        };
        _0x115CB.prototype.updateSpectators = function () {
            _0x117C5.spectatorCount.html(this.spectators)
        };
        _0x115CB.prototype.handleAddBuff = function (_0x1121C) {
            var _0x111D7 = _0x1121C.getUint8(_0x1121C.offset++);
            var _0x11205 = _0x1121C.getUint8(_0x1121C.offset++);
            var _0x111EE = _0x1121C.getFloat64(_0x1121C.offset, true);
            _0x1121C.offset += 8;
            this.buffHolder.onAddBuff(_0x111D7, _0x11205, _0x111EE)
        };
        _0x115CB.prototype.handleRemoveBuff = function (_0x111EE) {
            var _0x111D7 = _0x111EE.getUint8(_0x111EE.offset++);
            this.buffHolder.onRemoveBuff(_0x111D7)
        };
        _0x115CB.prototype.handleClearBuffs = function (_0x111EE) {
            var _0x111D7 = _0x111EE.getUint8(_0x111EE.offset++) == 1 ? true : false;
            this.buffHolder.clearBuffs(_0x111D7)
        };
        _0x115CB.prototype.sortCells = function () {
            _0x1145B.children.sort(function (_0x111D7, _0x111EE) {
                return _0x111D7.parentCell.size - _0x111EE.parentCell.size
            });
            this.updateScorePanel()
        };
        _0x115CB.prototype.updateScorePanel = function () {
            var _0x111EE = 0;
            var _0x111D7 = 0;
            for (var _0x11205 in this.myCells) {
                var _0x1121C = this.myCells[_0x11205];
                _0x111EE += _0x1121C.getRealMass();
                _0x111D7++
            };
            _0x117C5[_0x111C0[95]].innerHTML = _0x111EE.toLocaleString();
            if (_0x111EE > this.score) {
                this.score = _0x111EE;
                _0x117C5.playerScore.innerHTML = this.score.toLocaleString()
            };
            this.updateCellCounter(_0x111D7)
        };
        _0x115CB.prototype.updateCellCounter = function (_0x111D7, _0x111EE) {
            if (_0x117C5.playerCellCount != _0x111D7 || _0x111EE) {
                _0x117C5.playerCellCount = _0x111D7;
                _0x117C5.playerCells.innerHTML = _0x111D7 + "/" + this.getServerMaxCells();
                if (!_0x12020.cColoredCellCount) {
                    var _0x11205 = _0x111D7 / this.getServerMaxCells();
                    if (_0x11205 >= 1.0) {
                        _0x117C5.playerCells.style.color = _0x126F4.uiGameColorError
                    } else {
                        if (_0x11205 >= 0.5) {
                            _0x117C5.playerCells.style.color = _0x126F4.uiGameColorWarning
                        } else {
                            _0x117C5.playerCells.style.color = _0x126F4.uiGameColorSuccess
                        }
                    }
                } else {
                    _0x117C5.playerCells.style.color = _0x126F4.uiForegroundColor
                }
            }
        };
        _0x115CB.prototype.drawParty = function () {
            if (this.party.length == 0) {
                return
            };
            if (_0x12020.cHidePartyPanel) {
                _0x117C5.partyPanel.css("display", "none")
            } else {
                if (_0x117C5.partyPanel.css("display") == "none" && _0x11BB9.css("display") != "none") {
                    _0x117C5.partyPanel.css("display", "block")
                }
            };
            var _0x11278 = document.getElementById("party-canvas");
            var _0x111D7 = _0x11278.getContext("2d");
            _0x111D7.font = "16px Calibri";
            var _0x11205 = 0;
            var _0x1121C = 0;
            var _0x112A6 = 0;
            for (var _0x111EE = 0; _0x111EE < this.party.length; _0x111EE++) {
                var _0x11233 = this.party[_0x111EE];
                if (_0x11233.team == -1) {
                    _0x11233.team = _0x111D7.measureText((_0x111EE + 1) + ". " + _0x11233.name).width
                };
                if (_0x11233.team > _0x11205) {
                    _0x11205 = _0x11233.team
                };
                if (_0x11233.state === _0x120EF.ALIVE || _0x11233.state === _0x120EF.UNKNOWN) {
                    _0x11233.scoreText = _0x11233.score.toLocaleString();
                    _0x112A6 += _0x11233.score
                } else {
                    if (_0x11233.state === _0x120EF.DEAD) {
                        _0x11233.scoreText = "RIP"
                    } else {
                        if (_0x11233.state === _0x120EF.SPECTATE) {
                            _0x11233.scoreText = "Spec"
                        }
                    }
                };
                var _0x1128F = _0x111D7.measureText(_0x11233.scoreText).width;
                if (_0x1128F > _0x1121C) {
                    _0x1121C = _0x1128F
                }
            };
            var _0x112BD = _0x112A6.toLocaleString();
            _0x1121C = Math.max(_0x1121C, _0x111D7.measureText(_0x112BD).width);
            _0x11278.width = 15 + _0x11205 + 50 + _0x1121C;
            _0x11278.height = (20 * this.party.length) + 5 + (this.party.length > 1 ? 20 : 0);
            _0x111D7.font = "16px Calibri";
            var _0x11261 = 20;
            var _0x1124A = 5 + _0x11205 + 50;
            for (var _0x111EE = 0; _0x111EE < this.party.length; _0x111EE++) {
                var _0x11233 = this.party[_0x111EE];
                _0x111D7.fillStyle = _0x11233.isLeader ? _0x126F4.uiPartyLeaderColor : _0x126F4.uiForegroundColor;
                _0x111D7.fillText((_0x111EE + 1) + ". " + _0x11233.name, 5, _0x11261);
                _0x111D7.fillText(_0x11233.scoreText, _0x1124A, _0x11261);
                _0x11261 += 20
            };
            if (this.party.length > 1) {
                _0x111D7.fillStyle = _0x126F4.uiForegroundColor;
                _0x111D7.fillText("Total:", 5, _0x11261);
                _0x111D7.fillText(_0x112BD, _0x1124A, _0x11261)
            }
        };
        _0x115CB.prototype.handleShowScrimmageMenu = function () {
            _0x11EDE.stop(true, false);
            _0x11EDE.css("display", "none");
            _0x123E6.css("display", "block");
            $("#scrimmage-btn-leave").css("display", "none");
            _0x12190.serverData.border.enabled = false
        };
        _0x115CB.prototype.handleQueueData = function (_0x11261) {
            var _0x11205 = _0x12300(_0x11261);
            var _0x1124A = _0x11261.getUint32(_0x11261.offset, true);
            _0x11261.offset += 4;
            var _0x11233 = _0x11261.offset < _0x11261.byteLength ? _0x11261.getUint8(_0x11261.offset) : -1;
            var _0x111EE = document.getElementById("leaderboard-canvas");
            var _0x111D7 = _0x111EE.getContext("2d");
            _0x11D29.html("Queue");
            _0x111EE.width = 200;
            _0x111EE.height = (20 * (2 + (_0x11233 != -1 ? 1 : 0))) + 5;
            _0x111D7.font = "16px Calibri";
            var _0x1121C = 20;
            _0x111D7.fillStyle = _0x126F4.uiForegroundColor;
            _0x111D7.fillText("Mode: " + _0x11205, 5, _0x1121C);
            _0x1121C += 20;
            _0x111D7.fillText("Time: " + _0x11963(_0x1124A), 5, _0x1121C);
            if (_0x11233 != -1) {
                _0x1121C += 20;
                _0x111D7.fillText("Queued players: " + _0x11233, 5, _0x1121C)
            }
        };
        _0x115CB.prototype.handleQueueLeave = function (_0x11205) {
            var _0x111EE = _0x12300(_0x11205);
            var _0x111D7 = document.getElementById("leaderboard-canvas");
            _0x111D7.width = 0;
            _0x111D7.height = 0;
            this.selfMsg("You have left the queue for [" + _0x111EE + "]")
        };
        _0x115CB.prototype.handleMatchState = function (_0x111EE) {
            var _0x111D7 = _0x111EE.byteLength == 1 ? 0 : _0x111EE.getUint8(_0x111EE.offset++);
            if (_0x111D7 == 0) {
                this.selfMsg("A match has been found. Good luck and have fun!");
                _0x124B5()
            } else {
                if (_0x111D7 == 1) {
                    $("#scrimmage-btn-leave").css("display", "block")
                }
            }
        };
        _0x115CB.prototype.handleScrimmageData = function (_0x112D4) {
            var _0x111D7 = _0x112D4.getUint8(_0x112D4.offset++);
            var _0x1128F = $("#scrimmage-mode-select");
            var _0x11278 = $("#scrimmage-mode-info");
            var _0x112BD = parseInt(_0x1128F.val());
            _0x1128F.empty();
            _0x11278.empty();
            var _0x111EE = {};
            while (_0x111D7 > 0) {
                var _0x11233 = _0x112D4.getUint8(_0x112D4.offset++);
                var _0x112A6 = _0x12300(_0x112D4);
                var _0x1124A = _0x12300(_0x112D4);
                var _0x11205 = document.createElement("option");
                _0x11205.innerHTML = _0x112A6;
                _0x11205["value"] = _0x11233;
                _0x1128F.append(_0x11205);
                _0x11205 = document.createElement("div");
                _0x11205.innerHTML = _0x1124A;
                _0x11205.id = "scrimmage-info-" + _0x11233;
                _0x11205.style["display"] = "none";
                _0x11278.append(_0x11205);
                _0x111EE[_0x11233] = true;
                _0x111D7--
            };
            _0x123CF = {
                "modes": {},
                "sizes": {},
                "maps": []
            };
            if (_0x112D4.byteLength - 1 > _0x112D4.offset) {
                _0x111D7 = _0x112D4.getUint8(_0x112D4.offset++);
                while (_0x111D7 > 0) {
                    var _0x11233 = _0x112D4.getUint8(_0x112D4.offset++);
                    var _0x112A6 = _0x12300(_0x112D4);
                    _0x123CF.modes[_0x11233] = {
                        "id": _0x11233,
                        "name": _0x112A6
                    };
                    _0x111D7--
                };
                _0x111D7 = _0x112D4.getUint8(_0x112D4.offset++);
                while (_0x111D7 > 0) {
                    var _0x11233 = _0x112D4.getUint8(_0x112D4.offset++);
                    var _0x112A6 = _0x12300(_0x112D4);
                    _0x123CF.sizes[_0x11233] = {
                        "id": _0x11233,
                        "name": _0x112A6
                    };
                    _0x111D7--
                };
                _0x111D7 = _0x112D4.getUint8(_0x112D4.offset++);
                while (_0x111D7 > 0) {
                    var _0x112A6 = _0x12300(_0x112D4);
                    var _0x11261 = {
                        "name": _0x112A6,
                        "startmass": 0,
                        "teams": 0,
                        "modes": [],
                        "sizes": []
                    };
                    var _0x1121C = _0x112D4.getUint8(_0x112D4.offset++);
                    while (_0x1121C > 0) {
                        _0x11261.modes.push(_0x112D4.getUint8(_0x112D4.offset++));
                        _0x1121C--
                    };
                    var _0x1121C = _0x112D4.getUint8(_0x112D4.offset++);
                    while (_0x1121C > 0) {
                        _0x11261.sizes.push(_0x112D4.getUint8(_0x112D4.offset++));
                        _0x1121C--
                    };
                    _0x11261.startmass = _0x112D4.getUint16(_0x112D4.offset, true);
                    _0x112D4.offset += 2;
                    _0x11261.respawnDelay = _0x112D4.getInt16(_0x112D4.offset, true);
                    _0x112D4.offset += 2;
                    _0x11261.teams = _0x112D4.getUint8(_0x112D4.offset++);
                    _0x123CF.maps.push(_0x11261);
                    _0x111D7--
                }
            };
            $("#scrimmage-custom-btn-container").css("display", _0x123CF.maps.length == 0 ? "none" : "block");
            $("#scrimmage-map").empty();
            for (var _0x1121C = 0; _0x1121C < _0x123CF.maps.length; _0x1121C++) {
                $("#scrimmage-map").append("<option value='" + _0x1121C + "'>" + _0x123CF.maps[_0x1121C].name + "</option>")
            };
            if (_0x111EE[_0x112BD] != null) {
                _0x1128F.val(_0x112BD);
                _0x1128F.trigger("change")
            } else {
                _0x1128F.prop("selectedIndex", 0);
                _0x1128F.trigger("change")
            }
        };
        _0x115CB.prototype.handleCustomGameUpdate = function (_0x11233) {
            var _0x11205 = _0x11233.getUint8(_0x11233.offset++);
            switch (_0x11205) {
            case _0x1170D.MAP:
                ScrimmageHelper.updateMap(_0x11233.getUint8(_0x11233.offset++));
                break;
            case _0x1170D.MODE:
                ScrimmageHelper.updateMode(_0x11233.getUint8(_0x11233.offset++));
                break;
            case _0x1170D.SIZE:
                ScrimmageHelper.updateSize(_0x11233.getUint8(_0x11233.offset++));
                break;
            case _0x1170D.STARTMASS:
                ScrimmageHelper.updateStartMass(_0x11233.getUint16(_0x11233.offset, true));
                _0x11233.offset += 2;
                break;
            case _0x1170D.LOCK:
                ScrimmageHelper.updateLock(_0x11233.getUint8(_0x11233.offset++) === 1 ? true : false);
                break;
            case _0x1170D.PLAYER_UPDATE:
                var _0x111EE = _0x11233.getUint8(_0x11233.offset++);
                var _0x1121C = _0x11233.getUint8(_0x11233.offset++);
                _0x12190.party[_0x111EE].state = _0x1121C;
                ScrimmageHelper.updatePlayerById(_0x111EE);
                break;
            case _0x1170D.PLAYER_LIST:
                var _0x111D7 = _0x11233.getUint8(_0x11233.offset++);
                var _0x111EE = 0;
                while (_0x111D7 > 0) {
                    _0x12190.party[_0x111EE].state = _0x11233.getUint8(_0x11233.offset++);
                    _0x111D7--;
                    _0x111EE++
                };
                ScrimmageHelper.updatePlayers();
                break;
            case _0x1170D.VIRUS_DENSITY:
                ScrimmageHelper.updateVirusDensity(_0x11233.getUint16(_0x11233.offset, true));
                _0x11233.offset += 2;
                break;
            case _0x1170D.RESPAWN_DELAY:
                ScrimmageHelper.updateRespawnDelay(_0x11233.getInt16(_0x11233.offset, true));
                _0x11233.offset += 2;
                break;
            case _0x1170D.AUTOSPLIT:
                ScrimmageHelper.updateAutoSplit(_0x11233.getUint8(_0x11233.offset++) === 1 ? true : false);
                break;
            case _0x1170D.PUBLIC:
                ScrimmageHelper.updatePublic(_0x11233.getUint8(_0x11233.offset++) === 1 ? true : false);
                break;
            case _0x1170D.PASSWORD:
                ScrimmageHelper.updatePassword(_0x11233.getUint8(_0x11233.offset++) === 1 ? true : false);
                break;
            case _0x1170D.NAME:
                ScrimmageHelper.updateName(_0x122E9(_0x11233));
                break
            }
        };
        _0x115CB.prototype.handleCustomGameShow = function (_0x112EB) {
            $(".scrimmage-full").css("display", "none");
            $(_0x111C0[88]).css("display", "block");
            var _0x11261 = _0x122E9(_0x112EB);
            var _0x11233 = _0x112EB.getUint8(_0x112EB.offset++);
            var _0x1124A = _0x112EB.getUint8(_0x112EB.offset++);
            var _0x112BD = _0x112EB.getUint8(_0x112EB.offset++);
            var _0x112D4 = _0x112EB.getUint16(_0x112EB.offset, true);
            _0x112EB.offset += 2;
            var _0x11302 = _0x112EB.getUint16(_0x112EB.offset, true);
            _0x112EB.offset += 2;
            var _0x112A6 = _0x112EB.getInt16(_0x112EB.offset, true);
            _0x112EB.offset += 2;
            var _0x111EE = _0x112EB.getUint8(_0x112EB.offset++) === 1 ? true : false;
            var _0x1121C = _0x112EB.getUint8(_0x112EB.offset++) === 1 ? true : false;
            var _0x1128F = _0x112EB.getUint8(_0x112EB.offset++) === 1 ? true : false;
            var _0x11278 = _0x112EB.getUint8(_0x112EB.offset++) === 1 ? true : false;
            var _0x111D7 = _0x112EB.getUint8(_0x112EB.offset++);
            var _0x11205 = 0;
            while (_0x111D7 > 0) {
                _0x12190.party[_0x11205].state = _0x112EB.getUint8(_0x112EB.offset++);
                _0x111D7--;
                _0x11205++
            };
            ScrimmageHelper.updateName(_0x11261);
            ScrimmageHelper.updateMap(_0x11233);
            ScrimmageHelper.updateMode(_0x1124A);
            ScrimmageHelper.updateSize(_0x112BD);
            ScrimmageHelper.updateStartMass(_0x112D4);
            ScrimmageHelper.updateVirusDensity(_0x11302);
            ScrimmageHelper.updateLock(_0x1121C);
            ScrimmageHelper.updateRespawnDelay(_0x112A6);
            ScrimmageHelper.updateAutoSplit(_0x111EE);
            ScrimmageHelper.updatePublic(_0x1128F);
            ScrimmageHelper.updatePassword(_0x11278);
            ScrimmageHelper.updatePlayers();
            ScrimmageHelper.checkLeader()
        };
        _0x115CB.prototype.handleCustomGameLeave = function () {
            $(".scrimmage-full").css("display", "none");
            $(_0x111C0[649]).css("display", "block")
        };
        _0x115CB.prototype.handleShowCustomGameLobbies = function (_0x11233) {
            $(".scrimmage-full").css("display", "none");
            $("#scrimmage-menu").css("display", "block");
            _0x1173B = {};
            var _0x1121C = $("#scrimmage-lobbies-tbody");
            _0x1121C.empty();
            while (true) {
                var _0x11205 = _0x11233.getUint32(_0x11233.offset, true);
                _0x11233.offset += 4;
                if (_0x11205 == 0) {
                    break
                };
                var _0x111D7 = {};
                _0x111D7.id = _0x11205;
                _0x111D7.name = _0x122E9(_0x11233);
                _0x111D7.leaderId = _0x11233.getUint32(_0x11233.offset);
                _0x11233.offset += 4;
                _0x111D7.leaderName = _0x122E9(_0x11233) || "An unnamed cell";
                _0x111D7.map = _0x11233.getUint8(_0x11233.offset++);
                _0x111D7.mode = _0x11233.getUint8(_0x11233.offset++);
                _0x111D7.size = _0x11233.getUint16(_0x11233.offset, true);
                _0x11233.offset += 2;
                _0x111D7.maxSize = _0x11233.getUint16(_0x11233.offset, true);
                _0x11233.offset += 2;
                _0x111D7.hasPasscode = _0x11233.getUint8(_0x11233.offset++) == 1 ? true : false;
                _0x1173B[_0x111D7.id] = _0x111D7;
                var _0x111EE = _0x111D7.hasPasscode ? _0x111C0[658] : "";
                _0x1121C.append("<tr partyId='" + _0x111D7.id + "'><td><span>" + _0x111EE + _0x120C1(_0x111D7.name) + _0x111C0[661] + _0x120C1(_0x111D7.leaderName) + _0x111C0[661] + _0x123CF.maps[_0x111D7.map].name + _0x111C0[661] + _0x123CF.modes[_0x111D7.mode].name + _0x111C0[661] + _0x111D7.size + "/" + _0x111D7.maxSize + _0x111C0[662])
            };
            $("#scrimmage-lobbies-tbody tr").on("click", function () {
                $(".custom-game-selected").removeClass("custom-game-selected");
                _0x12459 = $(this).attr("partyId");
                $(this).addClass("custom-game-selected")
            })
        };
        ScrimmageHelper = {
            updateName: function (_0x111D7) {
                $("#scrimmage-name").text(_0x111D7)
            },
            updateMap: function (_0x111EE) {
                $("#scrimmage-map option[value='" + _0x111EE + "']").prop("selected", true);
                var _0x11205 = _0x123CF.maps[_0x111EE];
                $("#scrimmage-mapmode").empty();
                for (var _0x111D7 = 0; _0x111D7 < _0x11205.modes.length; _0x111D7++) {
                    var _0x1121C = _0x123CF.modes[_0x11205.modes[_0x111D7]];
                    $("#scrimmage-mapmode").append("<option value='" + _0x111D7 + "'>" + _0x1121C.name + "</option>")
                };
                $("#scrimmage-mapsize").empty();
                for (var _0x111D7 = 0; _0x111D7 < _0x11205.sizes.length; _0x111D7++) {
                    var _0x11233 = _0x123CF.sizes[_0x11205.sizes[_0x111D7]];
                    $("#scrimmage-mapsize").append("<option value='" + _0x111D7 + "'>" + _0x11233.name + "</option>")
                };
                ScrimmageHelper.updateMode(0);
                ScrimmageHelper.updateSize(0);
                ScrimmageHelper.updateStartMass(_0x11205.startmass);
                $("#scrimmage-startmass").attr("placeholder", _0x11205.startmass);
                ScrimmageHelper.updateRespawnDelay(_0x11205.respawnDelay);
                $("#scrimmage-map").attr("data", _0x111EE);
                _0x12190.customGameMap = _0x11205
            },
            updateMode: function (_0x111D7) {
                $("#scrimmage-mapmode option[value='" + _0x111D7 + "']").prop("selected", true);
                $("#scrimmage-mapmode").attr("data", _0x111D7)
            },
            updateSize: function (_0x111D7) {
                $("#scrimmage-mapsize option[value='" + _0x111D7 + "']").prop("selected", true);
                $("#scrimmage-mapsize").attr("data", _0x111D7)
            },
            updateStartMass: function (_0x111D7) {
                $("#scrimmage-startmass").val(_0x111D7);
                $("#scrimmage-startmass").attr("data", _0x111D7)
            },
            updateVirusDensity: function (_0x111D7) {
                $("#scrimmage-virusDensity").val(_0x111D7);
                $("#scrimmage-virusDensity").attr("data", _0x111D7)
            },
            updateRespawnDelay: function (_0x111D7) {
                $("#scrimmage-respawnDelay").val(_0x111D7);
                $("#scrimmage-respawnDelay").attr("data", _0x111D7)
            },
            updateAutoSplit: function (_0x111D7) {
                $("#scrimmage-autoSplit").prop("checked", _0x111D7)
            },
            updatePublic: function (_0x111D7) {
                $("#scrimmage-public").prop("checked", _0x111D7)
            },
            updatePassword: function (_0x111D7) {
                $("#scrimmage-password").prop("checked", _0x111D7)
            },
            updateLock: function (_0x111D7) {
                $("#scrimmage-lockteams").prop("checked", _0x111D7);
                ScrimmageHelper.checkLock()
            },
            checkLock: function () {
                if ($("#scrimmage-lockteams").prop("checked") && !_0x12190.isPartyLeader()) {
                    $("#cgp-" + _0x12190.partyIndex).attr("disabled", "disabled")
                } else {
                    $("#cgp-" + _0x12190.partyIndex).removeAttr("disabled")
                }
            },
            checkLeader: function () {
                if (_0x12190.isPartyLeader()) {
                    $(".custom-game").removeAttr("disabled")
                } else {
                    $(".custom-game").attr("disabled", "disabled");
                    ScrimmageHelper.checkLock()
                }
            },
            updatePlayerById: function (_0x111D7) {
                var _0x111EE = _0x12190.party[_0x111D7];
                $("#cgp-" + _0x111D7 + " option[value='" + _0x111EE.state + "']").prop("selected", true);
                $("#cgp-name-" + _0x111D7).text(_0x111EE.name);
                $("#cgp-name-" + _0x111D7).css("color", _0x116F6[_0x111EE.state])
            },
            updatePlayers: function () {
                $(_0x111C0[694]).empty();
                for (var _0x111D7 = 0; _0x111D7 < _0x12190.party.length; _0x111D7++) {
                    var _0x111EE = _0x12190.party[_0x111D7];
                    if (_0x111EE.id == _0x12190.playerId) {
                        _0x12190.partyIndex = _0x111D7
                    };
                    $(_0x111C0[694]).append(_0x111C0[695] + _0x111D7 + "'>" + _0x111EE.name + _0x111C0[696] + ScrimmageHelper[_0x111C0[697]](_0x111D7, _0x12190.customGameMap.teams) + _0x111C0[698]);
                    $("#cgp-" + _0x111D7 + " option[value='" + _0x111EE.state + "']").prop("selected", true);
                    $("#cgp-name-" + _0x111D7).css("color", _0x116F6[_0x111EE.state]);
                    $("#cgp-" + _0x111D7).on("change", function (_0x111EE) {
                        var _0x11205 = parseInt($(this).attr("id").match("\\d+")[0]);
                        var _0x1121C = $(this).find("option:selected").val();
                        $("#cgp-" + _0x111D7 + " option[value='" + $(this).attr("data") + "']").prop("selected", true);
                        _0x12190.sendPacket(new _0x12065.sendCustomGameUpdate(_0x1170D.PLAYER_UPDATE, _0x11205, _0x1121C))
                    })
                };
                ScrimmageHelper.checkLeader()
            },
            getTeamOptions: function (_0x111EE, _0x1121C) {
                var _0x11205 = "";
                if (_0x1121C != null && _0x1121C > 1) {
                    _0x11205 = "<td><select class='custom-game' id='cgp-" + _0x111EE + "'><option value='0'>Spectator</option>";
                    for (var _0x111D7 = 1; _0x111D7 <= _0x1121C; _0x111D7++) {
                        _0x11205 += "<option value='" + _0x111D7 + "' class='t" + _0x111D7 + "'>" + _0x123FD[_0x111D7] + "</option>"
                    };
                    _0x11205 += "</select></td>"
                };
                return _0x11205
            }
        };
        function _0x113D1(_0x111D7) {
            this.id = _0x111D7;
            this.type = 0;
            this.nameCache = null;
            this.skin = null;
            this.playerId = 0;
            this.color = null;
            this.x = 0;
            this.y = 0;
            this.x_ = 0;
            this.y_ = 0;
            this.size = 0;
            this.size_ = 0;
            this.steps = 0;
            this.massLastAmount = -1;
            this.team = null
        }
        _0x113D1.prototype.setType = function (_0x111D7) {
            this.type = _0x111D7
        };
        _0x113D1.prototype.setX = function (_0x111D7) {
            this.x_ = _0x111D7;
            this.x = _0x111D7
        };
        _0x113D1.prototype.setY = function (_0x111D7) {
            this.y_ = _0x111D7;
            this.y = _0x111D7
        };
        _0x113D1.prototype.updateX = function (_0x111D7) {
            this.x_ = _0x111D7
        };
        _0x113D1.prototype.updateY = function (_0x111D7) {
            this.y_ = _0x111D7
        };
        _0x113D1.prototype.setSize = function (_0x111D7) {
            this.size_ = _0x111D7;
            this.size = _0x111D7
        };
        _0x113D1.prototype.getMass = function () {
            return (this.size * this.size) / 25 >> 0
        };
        _0x113D1.prototype.getRealMass = function () {
            return (this.size_ * this.size_) / 25 >> 0
        };
        _0x113D1.prototype.animate = function (_0x111D7) {
            this.x += ((this.x_ - this.x) * _0x111D7);
            this.y += ((this.y_ - this.y) * _0x111D7);
            this.size += ((this.size_ - this.size) * _0x111D7);
            this.steps--
        };
        _0x113D1.prototype.getSizeCache = function () {
            var _0x1124A = this.getMass();
            if (_0x1124A != this.massLastAmount || this.massLastAmount < 0) {
                var _0x11261;
                if (_0x12037.massType == 1) {
                    _0x11261 = this.toShortString(_0x1124A)
                } else {
                    _0x11261 = _0x1124A.toString()
                };
                var _0x1128F = 0;
                var _0x11205 = 0;
                for (var _0x1121C = 0; _0x1121C < _0x11261.length; _0x1121C++) {
                    var _0x111D7 = _0x11261.charAt(_0x1121C);
                    var _0x11233 = _0x125C9.getNumber(_0x111D7);
                    _0x1128F += _0x11233.width - 2;
                    _0x11205 = Math.max(_0x11233.height, _0x11205)
                };
                if (this.team == null) {
                    this.team = _0x1214B.RenderTexture.create(_0x1128F, _0x11205)
                } else {
                    if (_0x1128F != this.team.width || _0x11205 != this.team.height) {
                        this.team.destroy({
                            children: true,
                            texture: true,
                            baseTexture: true
                        });
                        this.team = _0x1214B.RenderTexture.create(_0x1128F, _0x11205)
                    }
                };
                var _0x111EE = _0x125C9.cacheContainer;
                var _0x11278 = 0;
                for (var _0x1121C = 0; _0x1121C < _0x11261.length; _0x1121C++) {
                    var _0x111D7 = _0x11261.charAt(_0x1121C);
                    var _0x11233 = _0x125C9.getSizeCacheSprite();
                    _0x11233.texture = _0x125C9.getNumber(_0x111D7).texture;
                    _0x11233.position.x.x = _0x11278;
                    _0x111EE.addChild(_0x11233);
                    _0x11278 += _0x11233.width - 2
                };
                _0x12162.renderer.render(_0x111EE, {
                    renderTexture: this.team,
                    clear: true
                });
                _0x125C9.clearCacheContainer();
                this.massLastAmount = _0x1124A
            };
            return this.team
        };
        _0x113D1.prototype.toShortString = function (_0x111EE) {
            if (_0x111EE < 1000) {
                return _0x111EE.toString()
            } else {
                if (_0x111EE < 1000000) {
                    var _0x111D7 = Math.floor(_0x111EE / 100) / 10;
                    return _0x111D7.toFixed(1) + "K"
                } else {
                    if (_0x111EE < 1000000000) {
                        var _0x111D7 = Math.floor(_0x111EE / 100000) / 10;
                        return _0x111D7.toFixed(1) + "M"
                    } else {
                        if (_0x111EE >= 1000000000) {
                            var _0x111D7 = Math.floor(_0x111EE / 100000000) / 10;
                            return _0x111D7.toFixed(1) + "B"
                        }
                    }
                }
            };
            return _0x111EE.toString()
        };
        function _0x125B2() {
            this.team = {};
            this.cacheContainer = new _0x1214B.Container();
            this.sprites = [];
            this.spritesIndex = 0;
            this.getNumber = function (_0x111D7) {
                return this.team[_0x111D7]
            };
            this.clearCacheContainer = function () {
                while (this.cacheContainer.children[0]) {
                    this.cacheContainer.removeChild(this.cacheContainer.children[0])
                };
                this.spritesIndex = 0
            };
            this.getSizeCacheSprite = function () {
                while (this.spritesIndex >= this.sprites.length) {
                    this.sprites.push(new _0x1214B.Sprite())
                };
                return this.sprites[this.spritesIndex++]
            };
            this.buildSizeCache = function () {
                var _0x111D7 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "K", "M", "B", "T"];
                for (var _0x111EE of _0x111D7) {
                    var _0x11205 = new _0x1214B.Text(_0x111EE, {
                        fontFamily: "Verdana",
                        fontWeight: "bold",
                        fontSize: 54,
                        fill: "#fff",
                        stroke: "black",
                        strokeThickness: _0x12037.textOutlineSize
                    });
                    this.team[_0x111EE] = _0x11205
                }
            }
        }
        const _0x125C9 = new _0x125B2();
        _0x113D1.prototype.handleFood = function () {
            if (this.needsPixiUpdate && this.sprite.visible) {
                this.sprite.texture = _0x118F0;
                this.sprite.anchor.set(0.5);
                this.sprite.width = 12;
                this.sprite.height = 12;
                if (_0x12020.cThemeEnabled && _0x116DF.length > 0) {
                    this.sprite.tint = _0x11A60(this.id)
                } else {
                    this.sprite.tint = this.color
                };
                this.needsPixiUpdate = false
            };
            this[_0x111C0[743]][_0x111C0[232]][_0x111C0[744]](this[_0x111C0[231]], this[_0x111C0[234]])
        };
        _0x113D1.prototype.handle = function () {
            switch (this.type) {
            case 0:
                break;
            case 1:
                if (this.needsPixiUpdate) {
                    if (this.skin >= 0 && this.skin < _0x11866.length) {
                        this.sprite.texture = _0x11866[this.skin]
                    } else {
                        this.sprite.texture = _0x11821
                    };
                    this.sprite.tint = this.color;
                    this.sprite.width = this.size * 2;
                    this.sprite.height = this.size * 2;
                    this.needsPixiUpdate = false
                };
                if (this.rainbow) {
                    this.sprite.tint = _0x12276[Math.floor((_0x11CFB % _0x1228D) / 100)]
                };
                this[_0x111C0[743]][_0x111C0[232]][_0x111C0[744]](this[_0x111C0[231]], this[_0x111C0[234]]);
                break;
            case 2:
                var _0x11205 = _0x12190.playerRegistry[_0x111C0[748]](this.playerId);
                var _0x1121C = _0x121D5["ALL"];
                if (_0x12190.playerId == this.playerId) {
                    _0x1121C = _0x121D5[_0x111C0[749]]
                } else {
                    if (_0x12190.partyIds[this.playerId] != null) {
                        _0x1121C = _0x121D5.PARTY
                    }
                };
                let _0x111D7 = this.needsPixiUpdate;
                if (this.needsPixiUpdate) {
                    this.cellSprite = new _0x1214B.Sprite(_0x1214B.Texture.EMPTY);
                    this.cellSprite.anchor.set(0.5);
                    this.cellSprite.width = _0x113E8;
                    this.cellSprite.height = _0x113E8;
                    this.container.addChild(this.cellSprite);
                    this.skinSprite = new _0x1214B.Sprite(_0x1214B.Texture.EMPTY);
                    this.skinSprite.anchor.set(0.5);
                    this.skinSprite.width = _0x113E8;
                    this.skinSprite.height = _0x113E8;
                    this.container.addChild(this.skinSprite);
                    this.massSprite = new _0x1214B.Sprite(_0x1214B.Texture.EMPTY);
                    this.container.addChild(this.massSprite);
                    if (_0x11205.name.length > 0) {
                        this.nameSprite = new _0x1214B.Sprite(_0x1214B.Texture.EMPTY);
                        this.container.addChild(this.nameSprite)
                    };
                    this.needsPixiUpdate = false
                };
                if (_0x11205.cacheUpdate || _0x111D7) {
                    if (this.nameSprite) {
                        this.nameSprite.texture = _0x11205[_0x111C0[756]](_0x11205.cacheUpdate).texture;
                        this.nameSprite.texture.update()
                    };
                    if (_0x11205.spiked == 1) {
                        if (_0x116C8.aCustomSpike) {
                            this.cellSprite.texture = _0x116C8.aCustomSpike
                        } else {
                            this.cellSprite.texture = _0x1263C
                        };
                        this.cellSprite.tint = 16777215
                    } else {
                        if (_0x11205.spiked == 2) {
                            if (_0x116C8.aCustomMother) {
                                this.cellSprite.texture = _0x116C8.aCustomMother
                            } else {
                                this.cellSprite.texture = _0x12653
                            };
                            this.cellSprite.tint = 16777215
                        } else {
                            this.cellSprite.texture = _0x11444;
                            this.cellSprite.tint = _0x11205.cellColor
                        }
                    }
                };
                this.skinSprite.visible = _0x12037.levelSkins >= _0x1121C && _0x11205.spiked == 0;
                if (this.skinSprite.visible) {
                    var _0x11261 = _0x11205.getSkin();
                    if (_0x11261 != null) {
                        if (!_0x11261.isGif) {
                            if (_0x11261 !== this.skinSprite.texture) {
                                this.skinSprite.texture = _0x11261
                            }
                        } else {
                            this.skinSprite.texture = _0x11261.getTexture()
                        }
                    } else {
                        this.skinSprite.visible = false
                    }
                };
                var _0x11233 = 4 / this.size;
                var _0x11278 = Math.max(_0x11233, 0.16) * 4;
                var _0x1124A = _0x12190.scale >= _0x11233 * 4 || _0x12020.cDisableAutoNameHiding;
                if (this.nameSprite) {
                    this.nameSprite.visible = _0x12037.levelNames >= _0x1121C && _0x1124A;
                    if (this.nameSprite.visible) {
                        this.nameSprite.scale.set(_0x11278);
                        this.nameSprite.x = -(this.nameSprite.width / 2);
                        if (!_0x11205.lowerName) {
                            this.nameSprite.y = -(this.nameSprite.height / 2)
                        } else {
                            this.nameSprite.y = _0x1142D - (this.nameSprite.height / 2)
                        };
                        if (_0x11205.effect == 1 && _0x11F51[0] != null) {
                            if (!this.nameEffectSprite) {
                                this.nameEffectSprite = new _0x1214B.Sprite(_0x1214B.Texture.EMPTY);
                                this.nameSprite.addChild(this.nameEffectSprite)
                            };
                            var _0x1128F = _0x11F51[0].getTexture();
                            this.nameEffectSprite.scale.set(this.nameSprite.texture.width / _0x1128F.width, this.nameSprite.texture.height / _0x1128F.height);
                            this.nameEffectSprite.texture = _0x1128F
                        }
                    }
                };
               if (_0x12020.cShowMass && (_0x1121C <= _0x121D5.PARTY || _0x12190.serverData.autosplits) && _0x1124A) {
                    var _0x111EE = this.getSizeCache();
                    this.massSprite.texture = _0x111EE;
                    this.massSprite.scale.set(_0x11278);
                    this.massSprite.x = -(this.massSprite.width / 2);
                    if (this.nameSprite != null && this.nameSprite.visible) {
                        this.massSprite.y = this.nameSprite.y + this.nameSprite.height
                    } else {
                        this.massSprite.y = -(this.massSprite.height / 2)
                    };
                    this.massSprite.visible = true
                } else {
                    this.massSprite.visible = false
                };
                if ((_0x11205.flags & 4) == 4) {
                    if (!this.debuffSprite) {
                        this.debuffSprite = new _0x1214B.Sprite(_0x12203);
                        this.debuffSprite.anchor.set(0.5);
                        this.debuffSprite.width = _0x113FF;
                        this.debuffSprite.height = _0x113FF;
                        this.container.addChild(this.debuffSprite)
                    }
                } else {
                    if (this.debuffSprite) {
                        this.debuffSprite.parent.removeChild(this.debuffSprite);
                        this.debuffSprite.destroy();
                        this.debuffSprite = null
                    }
                };
                if ((_0x11205.flags & 1) == 1) {
                    if (!this.shieldSprite) {
                        this.shieldSprite = new _0x1214B.Sprite(_0x1221A);
                        this.shieldSprite.anchor.set(0.5);
                        this.shieldSprite.width = _0x113FF;
                        this.shieldSprite.height = _0x113FF;
                        this.container.addChild(this.shieldSprite)
                    }
                } else {
                    if (this.shieldSprite) {
                        this.shieldSprite.parent.removeChild(this.shieldSprite);
                        this.shieldSprite.destroy();
                        this.shieldSprite = null
                    }
                };
                this[_0x111C0[751]][_0x111C0[252]][_0x111C0[744]](this[_0x111C0[263]] / _0x11416);
                this[_0x111C0[751]][_0x111C0[232]][_0x111C0[744]](this[_0x111C0[231]], this[_0x111C0[234]]);
                break;
            case 3:
                if (this.needsPixiUpdate) {
                    this.sprite.anchor.set(0.5);
                    this.sprite.width = 128;
                    this.sprite.height = 128;
                    if (_0x116C8.aCustomSpike) {
                        this.sprite.texture = _0x116C8.aCustomSpike
                    } else {
                        this.sprite.texture = _0x1263C
                    };
                    this.needsPixiUpdate = false
                };
                this[_0x111C0[743]][_0x111C0[252]][_0x111C0[744]](this[_0x111C0[263]] / 256);
                this[_0x111C0[743]][_0x111C0[232]][_0x111C0[744]](this[_0x111C0[231]], this[_0x111C0[234]]);
                break;
            case 4:
                if (this.needsPixiUpdate) {
                    if (_0x116C8.aCustomMother) {
                        this.sprite.texture = _0x116C8.aCustomMother
                    } else {
                        this.sprite.texture = _0x12653
                    };
                    if (_0x11894.enabled && _0x11894.motherCustomEnabled && !_0x12020.cDisableEventSkins && !_0x116C8.aCustomMother) {
                        _0x11894.motherCustom(this)
                    } else {
                        this.setDefaultSpriteAnchor()
                    };
                    this.needsPixiUpdate = false
                };
                if (!_0x116C8.aCustomMother && _0x11894.enabled) {
                    if (this.size >= 100 && !_0x12020.cDisableEventSkins) {
                        this.sprite.texture = _0x1266A
                    } else {
                        this.sprite.texture = _0x12653
                    }
                };
                this[_0x111C0[743]][_0x111C0[252]][_0x111C0[744]](this[_0x111C0[263]] / 256);
                this[_0x111C0[743]][_0x111C0[232]][_0x111C0[744]](this[_0x111C0[231]], this[_0x111C0[234]]);
                break;
            case 5:
                if (this.needsPixiUpdate) {
                    this.sprite.texture = _0x12248[this[_0x111C0[481]]].texture;
                    this.sprite.width = this.size * 2;
                    this.sprite.height = this.size * 2;
                    this.needsPixiUpdate = false
                };
                this[_0x111C0[743]][_0x111C0[232]][_0x111C0[744]](this[_0x111C0[231]], this[_0x111C0[234]]);
                break
            }
        }
        ;
        _0x113D1.prototype.setDefaultSpriteAnchor = function () {
            this.sprite.anchor.set(0.5);
            this.sprite.width = 128;
            this.sprite.height = 128
        };
        _0x113D1.prototype.onCreate = function (_0x111D7) {
            if (this.type == 2) {
                if (this.container) {
                    return
                };
                this.container = new _0x1214B.Container();
                this.container.parentCell = this;
                this.needsPixiUpdate = true;
                _0x1145B.addChild(this.container)
            } else {
                if (this.sprite) {
                    return
                };
                this.sprite = new _0x1214B.Sprite(_0x1214B.Texture.EMPTY);
                this.sprite.parentCell = this;
                this.sprite.anchor.set(0.5);
                this.needsPixiUpdate = true;
                if (this.type != 0) {
                    _0x1145B.addChild(this.sprite)
                } else {
                    _0x11907.addChild(this.sprite)
                }
            };
            if (this.type == 6) {
                _0x111D7.foodObjects[this.id] = this
            } else {
                _0x111D7.bucket[this.id] = this
            };
            if (this.playerId == _0x111D7.playerId) {
                _0x111D7.myCells[this.id] = this
            }
        };
        _0x113D1.prototype.onDelete = function () {
            if (this.container) {
                this.container.parent.removeChild(this.container);
                this.container.parentCell = null;
                this.container.destroy({
                    children: true
                });
                this.container = null
            } else {
                if (this.sprite) {
                    this.sprite.parent.removeChild(this.sprite);
                    this.sprite.parentCell = null;
                    this.sprite.destroy({
                        children: true
                    });
                    this.sprite = null
                }
            };
            if (this.team) {
                this.team.destroy();
                this.team = null
            }
        };
        function _0x121BE() {
            this.bucket = {};
            this.defaultData;
            this.updatedPlayers = [];
            this.init = function () {
                this.defaultData = new _0x121A7(0);
                this.defaultData.name = "";
                this.defaultData.cellColor = 0xaaaaaa
            };
            this.add = function (_0x111D7) {
                this.bucket[_0x111D7.id] = _0x111D7
            };
            this.remove = function (_0x111D7) {
                this.bucket[_0x111D7].onDelete();
                delete this.bucket[_0x111D7]
            };
            this["clear"] = function () {
                for (var _0x111D7 in this.bucket) {
                    this.remove(_0x111D7)
                }
            };
            this.getPlayer = function (_0x111D7) {
                return this.bucket[_0x111D7]
            };
            this[_0x111C0[748]] = function (_0x111EE) {
                var _0x111D7 = this.bucket[_0x111EE];
                return _0x111D7 != null ? _0x111D7 : this.defaultData
            };
            this.updatePlayer = function (_0x111D7) {
                _0x111D7.cacheUpdate = true;
                this.updatedPlayers.push(_0x111D7)
            };
            this.handleUpdatedPlayers = function () {
                while (this.updatedPlayers.length > 0) {
                    var _0x111D7 = this.updatedPlayers.shift();
                    _0x111D7.cacheUpdate = false
                }
            };
            this.init()
        }
        function _0x121A7(_0x111D7) {
            this.id = _0x111D7;
            this.name;
            this.skin;
            this.skinCache;
            this.cellColor;
            this.nameColor = "#fff";
            this.flags = 0;
            this.effect = 0;
            this.nameFont = 0;
            this.lowerName = false;
            this.nameCache = null;
            this.cacheUpdate = false;
            this.spiked = 0;
            this.setFlags = function (_0x111D7) {
                this.flags = _0x111D7;
                if ((this.flags & 8) == 8) {
                    this.spiked = 1
                } else {
                    if ((this.flags & 16) == 16) {
                        this.spiked = 2
                    } else {
                        this.spiked = 0
                    }
                }
            };
            this.parseEffect = function (_0x111D7) {
                if (_0x111D7 >= 64) {
                    _0x111D7 -= 64;
                    this.lowerName = true
                } else {
                    this.lowerName = false
                };
                this.effect = _0x111D7
            };
            this[_0x111C0[756]] = function (_0x111D7) {
                if (_0x111D7 || this.nameCache == null) {
                    var _0x111EE = _0x11A04(this.nameFont);
                    var _0x1121C, _0x11205;
                    if (_0x111EE == _0x11780) {
                        _0x1121C = "bold";
                        _0x11205 = _0x12037.textOutlineSize
                    } else {
                        _0x1121C = "normal";
                        _0x11205 = 9
                    };
                    if (!this.nameCache) {
                        this.nameCache = new _0x1214B.Text(this.name, {
                            fontFamily: _0x111EE.font,
                            fontWeight: _0x1121C,
                            fontSize: _0x111EE.size,
                            fill: this.nameColor,
                            stroke: _0x111EE.outlineColor,
                            strokeThickness: _0x11205
                        })
                    } else {
                        this.nameCache.text = this.name;
                        this.nameCache.style.fontFamily = _0x111EE.font;
                        this.nameCache.style.stroke = _0x111EE.outlineColor;
                        this.nameCache.style.fontWeight = _0x1121C;
                        this.nameCache.style.fontSize = _0x111EE.size;
                        this.nameCache.style.fill = this.nameColor;
                        this.nameCache.updateText()
                    };
                    this.nameCache.width
                };
                return this.nameCache
            };
            this.setSkin = function (_0x111D7) {
                if (_0x111D7.length == 0) {
                    this.skin = null;
                    this.skinCache = null
                } else {
                    if (_0x111D7 !== this.skin) {
                        this.skin = _0x111D7;
                        this.skinCache = null
                    }
                }
            };
            this.getSkin = function () {
                if (this.skinCache != null) {
                    return this.skinCache
                };
                if (this.skin != null) {
                    if (!_0x125F7[this.skin]) {
                        _0x125F7[this.skin] = _0x1260E.LOADING;
                        if (this.skin.endsWith(".gif")) {
                            var _0x11205 = this.skin;
                            var _0x111D7 = this;
                            gifFrames({
                                url: _0x11205,
                                frames: "all",
                                cumulative: false,
                                outputType: "canvas"
                            }).then(function (_0x111D7) {
                                var _0x111EE = new _0x11AA5();
                                _0x111EE.loadFromFrameData(_0x111D7);
                                _0x125F7[_0x11205] = _0x1260E.LOADED;
                                _0x125E0[_0x11205] = _0x111EE
                            }).catch(function (_0x111EE) {
                                _0x111D7.skin = null
                            })
                        } else {
                            var _0x111EE = new Image();
                            _0x111EE.crossOrigin = "";
                            var _0x11205 = this.skin;
                            _0x111EE.addEventListener("load", function () {
                                var _0x111D7 = document.createElement("canvas");
                                _0x111D7.width = 512;
                                _0x111D7.height = 512;
                                var _0x1121C = _0x111D7.getContext("2d");
                                _0x1121C.beginPath();
                                _0x1121C.arc(256, 256, 256, 0, _0x1211D, false);
                                _0x1121C.closePath();
                                _0x1121C.clip();
                                _0x1121C.drawImage(_0x111EE, 0, 0, 512, 512);
                                var _0x11233 = _0x1214B.Texture.from(_0x111D7);
                                _0x125F7[_0x11205] = _0x1260E.LOADED;
                                _0x125E0[_0x11205] = _0x11233
                            });
                            _0x111EE.addEventListener("error", function () {
                                _0x125F7[_0x11205] = _0x1260E.ERROR
                            });
                            _0x111EE.src = _0x11205
                        }
                    } else {
                        if (_0x125F7[this.skin] == _0x1260E.LOADED) {
                            this.skinCache = _0x125E0[this.skin];
                            return this.skinCache
                        } else {
                            if (_0x125F7[this.skin] == _0x1260E.ERROR) {
                                this.skin = null
                            }
                        }
                    }
                };
                return null
            };
            this.onDelete = function () {
                if (this.nameCache) {
                    this.nameCache.destroy()
                }
            }
        }
        function _0x1207C() {}
        _0x1207C.prototype.connectionStart = function() {
            var _0x111EE = "Gota Web " + version;
            var _0x111D7 = new ArrayBuffer(1 + _0x111EE.length + 1 + 1);
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, 255);
            _0x11205.setUint8(1, 6);
            _0x12864(2, _0x11205, _0x111EE);
            return _0x111D7
        };
        _0x1207C.prototype.setName = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1 + 1 + ((_0x111EE.length + 1) * 2));
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, 0);
            _0x1284D(1, _0x11205, _0x111EE);
            if (_0x12020.cSilentLogin) {
                _0x11205.setUint8(2 + (_0x111EE.length * 2) + 1, 1)
            };
            return _0x111D7
        };
        _0x1207C.prototype.sendKey = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1);
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, _0x111EE);
            return _0x111D7
        };
        _0x1207C.prototype.sendMouse = function (_0x11205, _0x1121C) {
            var _0x111D7 = new ArrayBuffer(9);
            var _0x111EE = new DataView(_0x111D7);
            _0x111EE.setUint8(0, 16);
            _0x111EE.setInt32(1, _0x11205, true);
            _0x111EE.setInt32(5, _0x1121C, true);
            return _0x111D7
        };
        _0x1207C.prototype.sendEjectMass = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1);
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, _0x111EE ? 3 : 4);
            return _0x111D7
        };
        _0x1207C.prototype.sendPing = function () {
            var _0x111D7 = new ArrayBuffer(1);
            var _0x111EE = new DataView(_0x111D7);
            _0x111EE.setUint8(0, 71);
            return _0x111D7
        };
        _0x1207C.prototype.sendSpectate = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1 + 2);
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, 1);
            if (_0x111EE) {
                _0x11205.setUint16(1, _0x111EE, true)
            };
            return _0x111D7
        };
        _0x1207C.prototype.sendChat = function (_0x11205, _0x111EE) {
            var _0x111D7 = new ArrayBuffer(1 + 1 + ((_0x11205.length + 1) * 2));
            var _0x1121C = new DataView(_0x111D7);
            _0x1121C.setUint8(0, 72);
            _0x1121C.setUint8(1, _0x111EE);
            _0x1284D(2, _0x1121C, _0x11205);
            return _0x111D7
        };
        _0x1207C.prototype.sendInviteResponse = function (_0x111D7) {
            var _0x111EE = new ArrayBuffer(2);
            var _0x11205 = new DataView(_0x111EE);
            _0x11205.setUint8(0, 41);
            _0x11205.setUint8(1, _0x111D7 ? 1 : 0);
            return _0x111EE
        };
        _0x1207C.prototype.sendPartyAction = function (_0x111D7, _0x11205) {
            var _0x111EE = new ArrayBuffer(6);
            var _0x1121C = new DataView(_0x111EE);
            _0x1121C.setUint8(0, 40);
            _0x1121C.setUint8(1, _0x111D7);
            _0x1121C.setUint32(2, _0x11205, true);
            return _0x111EE
        };
        _0x1207C.prototype.sendPartyJoin = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1 + _0x111EE.length + 1);
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, 42);
            _0x12864(1, _0x11205, _0x111EE);
            return _0x111D7
        };
        _0x1207C.prototype.sendShowProfile = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1 + 2);
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, 103);
            _0x11205.setUint16(1, _0x111EE, true);
            return _0x111D7
        };
        _0x1207C.prototype.sendWhisper = function (_0x111EE, _0x11205) {
            var _0x111D7 = new ArrayBuffer(5 + ((_0x11205.length + 1) * 2));
            var _0x1121C = new DataView(_0x111D7);
            _0x1121C.setUint8(0, 73);
            _0x1121C.setUint32(1, _0x111EE, true);
            _0x1284D(5, _0x1121C, _0x11205);
            return _0x111D7
        };
        _0x1207C.prototype.sendSubPanel = function () {
            var _0x111D7 = new ArrayBuffer(1 + 7 + (_0x126C6.skinName.length + 1));
            var _0x111EE = new DataView(_0x111D7);
            _0x111EE.setUint8(0, 10);
            _0x111EE.setUint8(1, _0x126C6.nameColor.r);
            _0x111EE.setUint8(2, _0x126C6.nameColor.g);
            _0x111EE.setUint8(3, _0x126C6.nameColor.b);
            _0x111EE.setUint8(4, _0x126C6.chatColor);
            _0x111EE.setUint8(5, _0x126C6.effect);
            _0x111EE.setUint8(6, _0x126C6.lowerName ? 1 : 0);
            _0x12864(7, _0x111EE, _0x126C6.skinName);
            _0x111EE.setUint8(8 + _0x126C6.skinName.length, _0x126C6.nameFont);
            return _0x111D7
        };
        _0x1207C.prototype.sendLockedNameChange = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1 + (_0x111EE.length + 1));
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, 11);
            _0x12864(1, _0x11205, _0x111EE);
            return _0x111D7
        };
        _0x1207C.prototype.sendOptions = function () {
            var _0x111D7 = new ArrayBuffer(1 + 2);
            var _0x111EE = new DataView(_0x111D7);
            _0x111EE.setUint8(0, 104);
            _0x111EE.setUint16(1, _0x12020.rViewDistance, true);
            return _0x111D7
        };
        _0x1207C.prototype.sendQueue = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1 + 4);
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, 80);
            _0x11205.setUint8(1, _0x111EE);
            _0x11205.setUint8(2, 0);
            _0x11205.setUint16(3, 0);
            return _0x111D7
        };
        _0x1207C.prototype.sendCustomGame = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1 + 1);
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, 90);
            _0x11205.setUint8(1, _0x111EE);
            return _0x111D7
        };
        _0x1207C.prototype.sendLeaveMatch = function () {
            var _0x111D7 = new ArrayBuffer(1);
            var _0x111EE = new DataView(_0x111D7);
            _0x111EE.setUint8(0, 81);
            return _0x111D7
        };
        _0x1207C.prototype.sendShowLobbies = function () {
            var _0x111D7 = new ArrayBuffer(1 + 1);
            var _0x111EE = new DataView(_0x111D7);
            _0x111EE.setUint8(0, 93);
            return _0x111D7
        };
        _0x1207C.prototype.sendJoinLobby = function (_0x111EE, _0x11205) {
            var _0x111D7 = new ArrayBuffer(1 + 4 + (_0x11205.length * 2) + 2);
            var _0x1121C = new DataView(_0x111D7);
            _0x1121C.setUint8(0, 94);
            _0x1121C.setUint32(1, _0x111EE, true);
            _0x1284D(5, _0x1121C, _0x11205);
            return _0x111D7
        };
        _0x1207C.prototype.sendCaptcha = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1 + (_0x111EE.length + 1));
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, 100);
            _0x12864(1, _0x11205, _0x111EE);
            return _0x111D7
        };
        _0x1207C.prototype.sendAuthToken = function (_0x111EE) {
            var _0x111D7 = new ArrayBuffer(1 + (_0x111EE.length + 1));
            var _0x11205 = new DataView(_0x111D7);
            _0x11205.setUint8(0, 101);
            _0x12864(1, _0x11205, _0x111EE);
            return _0x111D7
        };
        _0x1207C.prototype.sendCustomGameUpdate = function (_0x111EE, _0x11205, _0x1121C) {
            var _0x111D7 = new ArrayBuffer(1 + 3);
            var _0x11233 = new DataView(_0x111D7);
            _0x11233.setUint8(0, 91);
            _0x11233.setUint8(1, _0x111EE);
            if (_0x111EE == _0x1170D.STARTMASS || _0x111EE == _0x1170D.VIRUS_DENSITY) {
                _0x11233.setUint16(2, _0x11205, false)
            } else {
                if (_0x111EE == _0x1170D.RESPAWN_DELAY) {
                    _0x11233[_0x111C0[827]](2, _0x11205, false)
                } else {
                    _0x11233.setUint8(2, _0x11205);
                    _0x11233.setUint8(3, _0x1121C)
                }
            };
            return _0x111D7
        };
        _0x1207C.prototype.sendCustomGameUpdateString = function (_0x111EE, _0x11205) {
            var _0x111D7 = new ArrayBuffer(1 + 3 + (_0x11205.length * 2));
            var _0x1121C = new DataView(_0x111D7);
            _0x1121C.setUint8(0, 92);
            _0x1121C.setUint8(1, _0x111EE);
            _0x1284D(2, _0x1121C, _0x11205);
            return _0x111D7
        };
        function _0x12864(_0x111EE, _0x1121C, _0x11205) {
            for (var _0x111D7 = 0; _0x111D7 < _0x11205.length; _0x111D7++) {
                _0x1121C.setUint8(_0x111EE, _0x11205.charCodeAt(_0x111D7));
                _0x111EE++
            };
            _0x1121C.setUint8(_0x111EE, 0)
        }

        function _0x1284D(_0x111EE, _0x1121C, _0x11205) {
            for (var _0x111D7 = 0; _0x111D7 < _0x11205.length; _0x111D7++) {
                _0x1121C.setUint16(_0x111EE, _0x11205.charCodeAt(_0x111D7), true);
                _0x111EE += 2
            }
        }

        function _0x12300(_0x11205) {
            var _0x111EE = "";
            while (true) {
                var _0x111D7 = _0x11205.getUint8(_0x11205.offset);
                _0x11205.offset++;
                if (_0x111D7 == 0) {
                    break
                };
                _0x111EE += String.fromCharCode(_0x111D7)
            };
            return _0x111EE
        }
        function _0x122E9(_0x11205) {
            var _0x111EE = "";
            while (true) {
                var _0x111D7 = _0x11205.getUint16(_0x11205.offset, true);
                _0x11205.offset += 2;
                if (_0x111D7 == 0) {
                    break
                };
                _0x111EE += String.fromCharCode(_0x111D7)
            };
            return _0x111EE
        }

        function _0x12625(_0x111EE) {
            while (true) {
                var _0x111D7 = _0x111EE.getUint16(_0x111EE.offset, true);
                _0x111EE.offset += 2;
                if (_0x111D7 == 0) {
                    break
                }
            }
        }
        function _0x11AEA(_0x111D7, _0x111EE) {
            console["error"](_0x111D7.message, _0x111D7.code);
            if (_0x111EE) {
                switch (_0x111D7.code) {
                case "auth/user-disabled":
                    alert("This account has been permanently suspended by an administrator.");
                    break;
                case "auth/popup-closed-by-user":
                    break;
                default:
                    alert(_0x111D7.message + " (" + _0x111D7.code + ")");
                    break
                }
            }
        }
        function _0x113A3(_0x111D7) {
            return _0x111D7.charAt(0).toUpperCase() + _0x111D7.slice(1)
        }
        function _0x1169A(_0x1124A, _0x11233) {
            var _0x11205 = "";
            var _0x1121C = "";
            var _0x111EE = "white";
            if (_0x11233.flags.STAFF) {
                _0x1121C = "Gota.io Staff";
                _0x11205 = "build";
                _0x111EE = "royalblue"
            } else {
                if (_0x11233.flags.VERIFIED) {
                    _0x1121C = "Verified Player";
                    _0x11205 = "check_circle"
                } else {
                    return
                }
            };
            var _0x111D7 = document.createElement("i");
            _0x111D7.className = "material-icons";
            _0x111D7.id = "user-badge";
            _0x111D7.innerText = _0x11205;
            _0x111D7.style.color = _0x111EE;
            $(_0x111D7).attr("data-balloon", _0x1121C);
            $(_0x111D7).attr("data-balloon-pos", "right");
            $(_0x1124A).append(_0x111D7)
        }
        function _0x1166C(_0x111EE, _0x11205) {
            var _0x111D7 = document.createElement("i");
            _0x111D7.className = "material-icons";
            _0x111D7.innerText = _0x111EE;
            _0x111D7.setAttribute("data-balloon", _0x11205);
            _0x111D7.setAttribute("data-balloon-pos", "up");
            return _0x111D7
        }
        function _0x116B1(_0x11302, _0x11330, _0x11278, _0x11205) {
            var _0x1124A = document.createElement("li");
            _0x1124A.className = "user-embed menu-sub-bg2";
            _0x1124A.style.backgroundColor = _0x126F4.uiMenuHeaderBackgroundColor;
            var _0x11233 = document.createElement("img");
            _0x11233.src = _0x11302.avatar;
            _0x11233.alt = _0x11302.username;
            _0x1124A.appendChild(_0x11233);
            var _0x11261 = document.createElement("div");
            _0x11261.className = "info";
            var _0x11319 = document.createElement("div");
            _0x11319.className = "username";
            _0x11319.innerText = _0x11302.username;
            _0x11261.appendChild(_0x11319);
            _0x1169A(_0x11319, _0x11302);
            var _0x112EB = document.createElement("div");
            var _0x1128F = false;
            var _0x112D4 = null;
            if (_0x11278) {
                _0x112D4 = _0x113A3(_0x11302.presence["server"]);
                if ((_0x11302.presence.timestamp + (1000 * 60)) < new Date().getTime() || _0x11302.presence.id === undefined) {
                    _0x112EB.className = "status offline";
                    _0x112EB.innerText = "Not playing on any server"
                } else {
                    _0x1128F = true;
                    _0x112EB.className = "status " + (_0x11302.presence.status === "ONLINE" ? "online" : "spectate");
                    _0x112EB.innerText = (_0x11302.presence.status === "ONLINE" ? "Playing " : "Spectating ") + _0x11302.presence.gamemode + " on " + _0x112D4 + " (ID " + _0x11302.presence.id + ")"
                }
            } else {
                _0x112EB.className = "status pending";
                _0x112EB.innerText = "Pending Friend Request"
            };
            _0x11261.appendChild(_0x112EB);
            var _0x111EE = document.createElement("div");
            _0x111EE.className = "actions";
            _0x11319.addEventListener("click", function (_0x111D7) {
                _0x11DE1(_0x11302, $("#main-social"))
            });
            if (_0x11278 && _0x1128F) {
                var _0x112A6 = _0x1166C("input", "Join Server");
                _0x112A6.addEventListener("click", function (_0x111D7) {
                    _0x1249E(_0x112D4);
                    _0x12190.play();
                    _0x12190.selfMsg(_0x11302.username + "'s ID is " + _0x11302.presence.id);
                    _0x11B5D($("#main-social"))
                });
                _0x111EE.appendChild(_0x112A6)
            };
            if (!_0x11278) {
                var _0x1121C = _0x1166C("done", "Add as Friend");
                _0x1121C.isHandlingRequest = false;
                _0x1121C.addEventListener("click", function (_0x111EE) {
                    if (_0x1121C.isHandlingRequest) {
                        return
                    };
                    _0x1121C.isHandlingRequest = true;
                    firebase.auth().currentUser.getIdToken().then((_0x111EE) => {
                        fetch(_0x111D7 + "/api/v1/social/friends", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                token: _0x111EE,
                                target: _0x11302.uid,
                                action: 2
                            })
                        }).then((_0x111D7) => {
                            return _0x111D7["json"]()
                        }).then((_0x111D7) => {
                            if (_0x111D7.code !== 200) {
                                alert(_0x111D7.message)
                            };
                            _0x1121C.isHandlingRequest = false
                        }).catch((_0x111D7) => {
                            alert(_0x111D7);
                            _0x1121C.isHandlingRequest = false
                        })
                    }).catch((_0x111D7) => {
                        _0x11AEA(_0x111D7, true);
                        _0x1121C.isHandlingRequest = false
                    })
                });
                _0x111EE.appendChild(_0x1121C)
            };
            var _0x112BD = _0x1166C("block", "Remove Friend");
            _0x112BD.isHandlingRequest = false;
            _0x112BD.addEventListener("click", function (_0x111EE) {
                if (_0x112BD.isHandlingRequest || !confirm('Are you sure you want to remove "' + _0x11302.username + '" as your friend?')) {
                    return
                };
                _0x112BD.isHandlingRequest = true;
                firebase.auth().currentUser.getIdToken().then((_0x111EE) => {
                    fetch(_0x111D7 + "/api/v1/social/friends", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: _0x111EE,
                            target: _0x11302.uid,
                            action: 4
                        })
                    }).then((_0x111D7) => {
                        return _0x111D7["json"]()
                    }).then((_0x111D7) => {
                        alert(_0x111D7.message);
                        if (_0x111D7.code === 200) {
                            firebase.database().ref(_0x12767.callbacks[_0x11302.uid]).off();
                            _0x12767.elements[_0x11302.uid].remove();
                            delete _0x12767.callbacks[_0x11302.uid];
                            delete _0x12767.elements[_0x11302.uid]
                        };
                        _0x112BD.isHandlingRequest = false
                    }).catch((_0x111D7) => {
                        alert(_0x111D7);
                        _0x112BD.isHandlingRequest = false
                    })
                }).catch((_0x111D7) => {
                    _0x11AEA(_0x111D7, true);
                    _0x112BD.isHandlingRequest = false
                })
            });
            _0x111EE.appendChild(_0x112BD);
            _0x1124A.appendChild(_0x11261);
            _0x1124A.appendChild(_0x111EE);
            if (_0x11205) {
                return _0x11330.appendChild(_0x1124A)
            } else {
                return _0x1124A
            }
        }
        function _0x11DE1(_0x11205, _0x111EE, _0x111D7) {
            if (_0x111EE) {
                _0x11B5D(_0x111EE)
            };
            $("#profile-username").text(_0x11205.username);
            $("#profile-avatar").attr("src", _0x11205.avatar);
            $("#profile-avatar").attr("alt", _0x11205.username);
            $("#profile-level").html("Level " + _0x11205.levelData.level + "&nbsp;&nbsp;&nbsp;[" + _0x1194C(_0x11205.levelData.xp_current) + "/" + _0x1194C(_0x11205.levelData.xp_needed) + "]");
            if (_0x11205.title && _0x11205.title > 0 && _0x12739[_0x11205.title]) {
                $("#profile-title").text(_0x12739[_0x11205.title])
            } else {
                $("#profile-title").text("")
            };
            $("#profile-name").off("click");
            if (_0x11205.uid == _0x1281F.uid) {
                $("#profile-name").on("click", function () {
                    $("#popup-profile").hide();
                    _0x12750($("#popup-account-username"))
                });
                $("#profile-name").css(_0x111C0[905], _0x111C0[906])
            } else {
                $("#profile-name").css(_0x111C0[905], _0x111C0[907])
            };
            if (_0x11205.flags.STAFF) {
                $("#profile-avatar").addClass(_0x111C0[908])
            } else {
                $("#profile-avatar").removeClass(_0x111C0[908])
            };
            _0x1169A($("#profile-username"), _0x11205);
            $(_0x111C0[909]).off("click");
            $(_0x111C0[909]).on("click", function () {
                if (_0x111EE) {
                    _0x12584(_0x111EE)
                };
                _0x11B5D($("#popup-profile"))
            });
            _0x12584($("#popup-profile"))
        }

        function _0x11E26(_0x111EE) {
            if (_0x11B01) {
                return
            };
            var _0x11205 = $("#social-friends .user-list")[0];
            var _0x1121C = $("#social-friends .user-list")[1];
            $("#social-uid").text(_0x111EE.uid);
            firebase.database().ref("/friendships/" + _0x111EE.uid).on("value", function (_0x11261) {
                if (_0x11261.val() === null) {
                    var _0x11278 = document.createElement("div");
                    var _0x1128F = document.createElement("span");
                    _0x11278.className = "title-text center";
                    _0x1128F.innerText = "You have no friends 😥";
                    _0x11278.appendChild(_0x1128F);
                    _0x11205.appendChild(_0x11278);
                    return
                };
                var _0x111EE = 0;
                var _0x11233 = _0x11261.val();
                var _0x1124A = false;
                Object.keys(_0x11233).map((_0x11261) => {
                    var _0x11278 = _0x11233[_0x11261];
                    if (!_0x11278 && !_0x1124A) {
                        _0x1124A = true;
                        firebase.auth().currentUser.getIdToken().then((_0x111EE) => {
                            fetch(_0x111D7 + _0x111C0[918], {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    token: _0x111EE
                                })
                            }).then((_0x111D7) => {
                                return _0x111D7["json"]()
                            }).then((_0x111D7) => {
                                if (_0x111D7.code === 200) {
                                    _0x111D7.profiles.forEach((_0x111EE) => {
                                        if (!_0x12767.pendingFriends.includes(_0x111EE)) {
                                            _0x12767.pendingFriends.push(_0x111EE.uid)
                                        };
                                        if (_0x12767.elements[_0x111EE.uid]) {
                                            var _0x111D7 = _0x116B1(_0x111EE, _0x12767.elements[_0x111EE.uid], false, false);
                                            _0x1121C.replaceChild(_0x111D7, _0x12767.elements[_0x111EE.uid]);
                                            _0x12767.elements[_0x11261] = _0x111D7;
                                            return
                                        };
                                        _0x12767.elements[_0x111EE.uid] = _0x116B1(_0x111EE, _0x1121C, false, true)
                                    })
                                }
                            })
                        }).catch((_0x111C0) => {
                            return _0x11AEA(_0x111C0, false)
                        });
                        return
                    };
                    if (!_0x12767.callbacks[_0x11261]) {
                        var _0x1128F = "/users/" + _0x11261;
                        _0x12767.callbacks[_0x11261] = _0x1128F;
                        firebase.database().ref(_0x1128F).on("value", function (_0x1121C) {
                            if (_0x1121C.val() === null) {
                                return
                            };
                            var _0x111EE = _0x1121C.val();
                            _0x12767.timestamps[_0x111EE.uid] = _0x111EE.presence.timestamp;
                            if (_0x12767.pendingFriends.includes(_0x11261)) {
                                _0x12767.pendingFriends.slice(_0x12767.pendingFriends.indexOf(_0x11261), 1);
                                _0x12767.elements[_0x11261].remove();
                                var _0x111D7 = _0x116B1(_0x111EE, _0x12767.elements[_0x11261], true, false);
                                _0x11205.appendChild(_0x111D7);
                                _0x12767.elements[_0x11261] = _0x111D7;
                                return
                            };
                            if (_0x12767.elements[_0x11261]) {
                                var _0x111D7 = _0x116B1(_0x111EE, _0x12767.elements[_0x11261], true, false);
                                _0x11205.replaceChild(_0x111D7, _0x12767.elements[_0x11261]);
                                _0x12767.elements[_0x11261] = _0x111D7;
                                return
                            };
                            _0x12767.elements[_0x11261] = _0x116B1(_0x111EE, _0x11205, true, true);
                            _0x117C5.friendOnlineCount.text(_0x11A1B() + " online")
                        })
                    };
                    if (_0x11278) {
                        _0x111EE++
                    }
                });
                $("#social-friends-count").text(_0x111EE)
            });
            setInterval(function () {
                for (var _0x111D7 in _0x12767.timestamps) {
                    if (!_0x12767.timestamps.hasOwnProperty(_0x111D7)) {
                        return
                    };
                    var _0x1121C = _0x12767.timestamps[_0x111D7];
                    if ((_0x1121C + (1000 * 60)) < new Date().getTime() || _0x1121C === undefined) {
                        var _0x11205 = _0x12767.elements[_0x111D7].children[1].children[1];
                        _0x11205.innerText = "Not playing on any server";
                        _0x11205.className = "status offline";
                        var _0x111EE = _0x12767.elements[_0x111D7].children[2].children[0];
                        if (_0x111EE.dataset.balloon === "Join Server") {
                            _0x111EE.remove()
                        }
                    }
                }
            }, 1000 * 60);
            _0x11B01 = true
        }
        function _0x11A1B() {
            var _0x11205 = 0;
            var _0x111D7 = new Date().getTime();
            for (var _0x111EE in _0x12767.timestamps) {
                var _0x1121C = _0x12767.timestamps[_0x111EE];
                if ((_0x1121C + (1000 * 60)) < _0x111D7 || _0x1121C === undefined) {} else {
                    _0x11205++
                }
            }
            return _0x11205
        }
        function _0x11E99() {
            if (_0x11894.enabled && !_0x12020.cDisableEventSkins) {
                $("body").toggleClass("event-" + _0x11894.key)
            };
            $(".server-tab").on("click", function () {
                var _0x111D7 = $(this).attr("region");
                _0x12487(_0x111D7)
            });
            $("#btn-play").on("click", function () {
                if (_0x12470 == null || Date.now() < _0x117AE) {
                    return
                };
                if (Object.keys(_0x12190.myCells).length != 0 && this.currentServerName == _0x12470.name) {
                    _0x11B5D(_0x11EDE);
                    return
                };
                _0x12190.spectate = false;
                if (_0x12698.incrementPlay() && typeof adplayer != "undefined") {
                    aiptag.cmd.display.push(function () {
                        adplayer.startPreRoll()
                    });
                    _0x11B5D(_0x11EDE);
                    _0x11B46();
                    _0x117AE = Date.now() + 2000
                } else {
                    _0x12190.play()
                }
            });
            $("#btn-servers").on("click", function () {
                _0x111EE("main-servers")
            });
            $("#btn-options").on("click", function () {
                _0x111EE("main-options")
            });
            $("#btn-hotkeys").on("click", function () {
                _0x111EE("main-hotkeys")
            });
            $("#btn-themes").on("click", function () {
                _0x111EE("main-themes")
            });
            $("#btn-cellpanel").on("click", function () {
                _0x111EE("main-subpanel")
            });
            $("#btn-reddit").on("click", function () {
                window.open("https://www.reddit.com/r/PlayGotaIO/", "_blank")
            });
            $("#btn-discord").on("click", function () {
                window.open("https://gota.io/discord", "_blank")
            });
            $("#name-box").keypress(function (_0x111D7) {
                if (_0x111D7.keyCode == 13 && $(this).is(":focus")) {
                    _0x12190.play()
                }
            });
            $("#btn-spec").on("click", function () {
                if (_0x12470 == null || Date.now() < _0x117AE) {
                    return
                };
                if (_0x12190.spectate && this.currentServerName == _0x12470.name) {
                    _0x11B5D(_0x11EDE);
                    return
                };
                _0x12190.spectate = true;
                if (_0x12698.incrementPlay() && typeof adplayer != "undefined") {
                    aiptag.cmd.display.push(function () {
                        adplayer.startPreRoll()
                    });
                    _0x11B5D(_0x11EDE);
                    _0x11B46();
                    _0x117AE = Date.now() + 2000
                } else {
                    _0x12190.spec()
                }
            });
            _0x11489.addEventListener(_0x111C0[954], function (_0x111D7) {
                var _0x1121C = _0x111D7[_0x111C0[131]]["value"];
                var _0x11233 = _0x1121C.split(" ");
                if (_0x111D7.keyCode == 38 && $(this).is(":focus")) {
                    if (_0x1242B == -1) {
                        _0x1242B = _0x11472.length - 1
                    } else {
                        if (_0x1242B > 1) {
                            _0x1242B--
                        }
                    };
                    if (_0x1242B <= 0) {
                        _0x1242B = 0
                    };
                    _0x12511(_0x11472[_0x1242B]);
                    return
                } else {
                    if (_0x111D7.keyCode == 40 && $(this).is(":focus")) {
                        if (_0x1242B == -1) {
                            _0x1242B = 0
                        } else {
                            if (_0x1242B < _0x11472.length - 1) {
                                _0x1242B++
                            }
                        };
                        if (_0x1242B >= _0x11472.length - 1) {
                            _0x1242B = _0x11472.length - 1
                        };
                        _0x12511(_0x11472[_0x1242B]);
                        return
                    }
                };
                if (_0x111D7.keyCode == 13 && $(this).is(":focus")) {
                    _0x1187D($(this).val())
                };
                if (_0x1121C.length == 0 || _0x1121C.endsWith(" ") || _0x111D7.keyCode == 13) {
                    $("#autocomplete-panel").html("");
                    $("#autocomplete-panel").hide()
                } else {
                    if (_0x1121C.startsWith("/")) {
                        if (_0x11233.length > 1) {
                            return
                        };
                        $("#autocomplete-panel").html("<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>");
                        var _0x1124A = -1;
                        Object[_0x111C0[966]](_0x11610).map((_0x111D7) => {
                            if ((_0x1124A = _0x111D7.triggers.findIndex((_0x111D7) => {
                                    return _0x111D7.toLowerCase().startsWith(_0x11233[0].substring(1).toLowerCase())
                                })) > -1) {
                                $("#autocomplete-panel tbody").append("<tr><td>" + _0x111D7.triggers[_0x1124A] + "</td><td>" + _0x111D7.triggers + "</td><td>" + _0x111D7.description + "</td></tr>")
                            }
                        });
                        if ($("#autocomplete-panel tbody").children().length == 0) {
                            $("#autocomplete-panel").hide()
                        } else {
                            $("#autocomplete-panel").show()
                        }
                    } else {
                        if (_0x11233[_0x11233.length - 1].startsWith(":")) {
                            $("#autocomplete-panel").html("");
                            var _0x111EE = Object.keys(_0x11838).filter((_0x111D7) => {
                                return _0x111D7.toLowerCase().includes(_0x11233[_0x11233.length - 1].substring(1).toLowerCase())
                            });
                            var _0x11205 = Object.keys(gifEmoteList).filter((_0x111D7) => {
                                return _0x111D7.toLowerCase().includes(_0x11233[_0x11233.length - 1].substring(1).toLowerCase())
                            });
                            if (_0x111EE.length === 0 && _0x11205.length === 0) {
                                $("#autocomplete-panel").html("");
                                $("#autocomplete-panel").hide();
                                return
                            } else {
                                $("#autocomplete-panel").show()
                            };
                            if (_0x111EE.length > 0) {
                                $("#autocomplete-panel").append("<h3>Emotes</h3>");
                                _0x111EE.forEach((_0x111D7) => {
                                    $("#autocomplete-panel").append("<img name='" + _0x111D7 + "' title='" + _0x111D7 + "' src='https://gota.io/emotes/" + _0x111D7 + ".png' />")
                                })
                            };
                            if (_0x11205.length > 0) {
                                $("#autocomplete-panel").append("<h3>Gifs</h3>");
                                _0x11205.forEach((_0x111D7) => {
                                    $("#autocomplete-panel").append("<img name='" + _0x111D7 + "' title='" + _0x111D7 + "' src='https://gota.io/emotes/gifs/" + _0x111D7 + ".gif' />")
                                })
                            }
                        }
                    }
                };
                _0x1242B = -1
            });
            $("#autocomplete-panel").on("click", function (_0x111D7) {
                var _0x111EE = _0x119D6().split(" ");
                if (_0x111D7.target.nodeName === "TD") {
                    _0x12511("/" + _0x111D7.target.parentElement.children[0].innerHTML + " ");
                    $("#autocomplete-panel").html("");
                    $("#autocomplete-panel").hide();
                    $("#chat-input").focus()
                } else {
                    if (_0x111D7.target.nodeName === "IMG") {
                        _0x12511(_0x119D6().substring(0, (_0x119D6().length - _0x111EE[_0x111EE.length - 1].length)) + _0x111D7.target.attributes.name.nodeValue + " ");
                        $("#autocomplete-panel").html("");
                        $("#autocomplete-panel").hide();
                        $("#chat-input").focus()
                    }
                }
            });
            $("#animationDelay").on("change", function () {
                var _0x111D7 = parseInt($(this).val());
                if (isNaN(_0x111D7)) {
                    _0x111D7 = 90
                };
                _0x12020.rAnimationDelay = Math.min(Math.max(_0x111D7, 1), 250);
                $("#animationDelay").val(_0x12020.rAnimationDelay);
                $("#rAnimationDelay").val(_0x12020.rAnimationDelay)
            });
            $("#viewDistance").on("change", function () {
                var _0x111D7 = parseInt($(this).val());
                if (isNaN(_0x111D7)) {
                    _0x111D7 = 150
                };
                _0x12020rViewDistance = Math.min(Math.max(_0x111D7, 50), 150);
                $("#viewDistance").val(_0x12020rViewDistance);
                $("#rViewDistance").val(_0x12020rViewDistance);
                _0x12190.sendOptions()
            });
            $("#uiScale").on("change", function () {
                var _0x111D7 = parseInt($(this).val());
                if (isNaN(_0x111D7)) {
                    _0x111D7 = 100
                };
                _0x111D7 *= 0.01;
                _0x12020.rUiScale = Math.min(Math.max(_0x111D7, 0.5), 1.25);
                $("#uiScale").val(Number.parseFloat(_0x12020.rUiScale * 100).toFixed(0));
                $("#rUiScale").val(_0x12020.rUiScale);
                $(".ui-scale").css("transform", "scale(" + _0x12020.rUiScale + ")")
            });
            $("#chat-emote-btn").css("background-image", "url(https://gota.io/emotes/" + _0x122D2[Math.floor(Math.random() * _0x122D2.length)] + ".png)");
            $("#chat-emote-btn").on("click", function () {
                $("#emote-panel").toggle()
            });
            $("#emote-panel ul li img").on("click", function (_0x111D7) {
                _0x11233(_0x111D7.target.name + " ");
                $("#chat-input").focus()
            });
            (function () {
                var _0x111D7 = document.getElementById("chat-panel");
                document.getElementById("chat-resize").addEventListener("mousedown", _0x11205, false);
                var _0x1124A, _0x11261, _0x11233, _0x1121C;

                function _0x11205(_0x11205) {
                    _0x1124A = _0x11205.clientX;
                    _0x11261 = _0x11205.clientY;
                    _0x11233 = parseInt(document.defaultView.getComputedStyle(_0x111D7).width, 10);
                    _0x1121C = parseInt(document.defaultView.getComputedStyle(_0x111D7).height, 10);
                    document[_0x111C0[60]].addEventListener("mousemove", _0x111EE, false);
                    document[_0x111C0[60]].addEventListener("mouseup", _0x11278, false)
                }

                function _0x111EE(_0x111EE) {
                    _0x111D7.style.width = (_0x11233 + _0x111EE.clientX - _0x1124A) + "px";
                    _0x111D7.style.height = (_0x1121C - (_0x111EE.clientY - _0x11261)) + "px"
                }

                function _0x11278(_0x111D7) {
                    document[_0x111C0[60]][_0x111C0[1013]]("mousemove", _0x111EE, false);
                    document[_0x111C0[60]][_0x111C0[1013]]("mouseup", _0x11278, false)
                }
            })();
            $(".checkbox-options").on("change", function (_0x111C0) {
                _0x11586($(this));
            });
            // === RAINBOW FOOD INTENSITY & CHECKBOX INTEGRATION ===
            (function() {
                // Слушаем изменения localStorage для мгновенного отклика между вкладками
                window.addEventListener('storage', function(e) {
                    if (e.key === 'weyno-rainbow-food') {
                        applyRainbowFoodSetting();
                    }
                    if (e.key === 'weyno-rainbow-intensity') {
                        startRainbowInterval();
                    }
                });

                window.addEventListener('rainbow-food-changed', function() {
                    applyRainbowFoodSetting();
                });

                // Применяем настройку Rainbow Food из localStorage
                function applyRainbowFoodSetting() {
                    var enabled = localStorage.getItem('weyno-rainbow-food') === 'true';
                    _0x12020.cRainbowFood = enabled;
                    // Обновляем все клетки игрока (если нужно)
                    if (window._0x12190 && window._0x12190.myCells) {
                    Object.values(window._0x12190.myCells).forEach(cell => {
                            if (cell) cell.rainbow = enabled;
                        });
                    }
                }

                // Интервал для радужной еды
                var rainbowInterval = null;
                function startRainbowInterval() {
                    if (rainbowInterval) clearInterval(rainbowInterval);
                    var intensity = parseInt(localStorage.getItem('weyno-rainbow-intensity'), 10);
                    if (isNaN(intensity) || intensity < 1) intensity = 5;
                    var speed = Math.max(20, 400 / intensity); // Чем выше intensity, тем быстрее
                    rainbowInterval = setInterval(function() {
                        if (window._0x12020 && window._0x12190 && window._0x12190.foodObjects) {
                            Object.values(window._0x12190.foodObjects).forEach(cell => {
                                if (cell && window._0x12020.cRainbowFood) {
                                    // Меняем цвет на радужный
                                    var now = Date.now();
                                    var hue = (now / speed) % 360;
                                    cell.color = 'hsl(' + hue + ',100%,50%)';
                                }
                            });
                        }
                    }, speed);
                }

                // Связываем cRainbowFood с localStorage и автоприменением
                if (window._0x12020) {
                    Object.defineProperty(window._0x12020, 'cRainbowFood', {
                        set: function(val) {
                            this._cRainbowFood = val;
                            startRainbowInterval();
                        },
                        get: function() {
                            return this._cRainbowFood;
                        }
                    });
                }

                // Инициализация при загрузке
                applyRainbowFoodSetting();
                startRainbowInterval();

                // Если чекбокс всё же есть в DOM (например, в старом UI), синхронизируем его с localStorage
                var rainbowCheckbox = document.getElementById('cRainbowFood');
                if (rainbowCheckbox) {
                    rainbowCheckbox.checked = localStorage.getItem('weyno-rainbow-food') === 'true';
                    rainbowCheckbox.addEventListener('change', function() {
                        localStorage.setItem('weyno-rainbow-food', rainbowCheckbox.checked ? 'true' : 'false');
                        applyRainbowFoodSetting();
                    });
                }
            })();
            $(".options-container select").on("change", function (_0x111C0) {
                _0x115B4($(this))
            });
            $(".options-container input[type=range]").on("change", function (_0x111C0) {
                _0x1159D($(this))
            });
            $("#btn-changelog").on("click", function () {
                _0x11B5D($("#popup-changelog"));
                _0x12584(_0x11EDE);
                window.open(_0x1277E, "_blank")
            });
            $("#btn-close-changelog").on("click", function () {
                _0x11B5D($("#popup-changelog"));
                _0x12584(_0x11EDE)
            });
            $("#btn-accept").on("click", function () {
                _0x12190.sendPacket(new _0x12065.sendInviteResponse(true));
                _0x11B5D($("#popup-party"))
            });
            $("#btn-decline").on("click", function () {
                _0x12190.sendPacket(new _0x12065.sendInviteResponse(false));
                _0x11B5D($("#popup-party"))
            });
            $("#popup-party-code-content button").on("click", function () {
                $("#popup-party-code-content input").select();
                document.execCommand("Copy");
                $("#popup-party-code").hide()
            });
            $("#menu-invite").on("click", function () {
                var _0x111D7 = _0x11627.data("selected");
                _0x12190.sendPacket(new _0x12065.sendPartyAction(0, _0x111D7))
            });
            $("#menu-whisper").on("click", function () {
                var _0x111D7 = _0x11627.data("selected");
                var _0x111EE = $("#chat-input").val();
                $("#chat-input").val("/t " + _0x111D7 + " " + _0x111EE)
            });
            // Добавляем кнопку Track в контекстное меню (если еще нет)
            if (!document.getElementById('menu-track')) {
                var trackBtn = document.createElement('li');
                trackBtn.id = 'menu-track';
                trackBtn.className = 'context-action';
                trackBtn.innerHTML = '<span>Track</span>';
                var whisperBtn = document.getElementById('menu-whisper');
                if (whisperBtn && whisperBtn.parentNode) {
                    whisperBtn.parentNode.insertBefore(trackBtn, whisperBtn.nextSibling);
                }
            }
            // Обработчик для кнопки Track
            $(document).on('click', '#menu-track', function () {
                var playerId = _0x11627.data('selected');
                var player = _0x12190.playerRegistry.getPlayer(playerId);
                
                // If tracking is already active, stop it
                if (window.trackInterval) {
                    clearInterval(window.trackInterval);
                    window.trackInterval = null;
                    // Reset counter text
                    var counter = document.getElementById('cell-counter');
                    if (counter) {
                        counter.textContent = 'Tracked: None';
                    }
                    console.log('Track stopped');
                    return;
                }
                
                if (player) {
                    var lastCellCount = 0;
                    // Start tracking
                    window.trackInterval = setInterval(function() {
                        // Проверяем, включён ли Autorev
                        var autorevEnabled = localStorage.getItem('weyno-autorev-enabled') === 'true';
                        if (!autorevEnabled) return;
                        var id = player.id;
                        var name = player.name;
                        var cellsCount = 0;
                        
                        // Count cells in main bucket
                        for (var cellId in _0x12190.bucket) {
                            var cell = _0x12190.bucket[cellId];
                            if (cell.playerId === playerId && cell.type !== 6) {
                                cellsCount++;
                            }
                        }
                        
                        // Count cells in food objects
                        for (var cellId in _0x12190.foodObjects) {
                            var cell = _0x12190.foodObjects[cellId];
                            if (cell.playerId === playerId && cell.type !== 6) {
                                cellsCount++;
                            }
                        }
                        
                        // Update cell counter display
                        var counter = document.getElementById('cell-counter');
                        if (counter) {
                            counter.textContent = 'Tracked: ' + name + ' - Cells: ' + cellsCount;
                        }
                        
                        // Получаем значение TriggerCells из localStorage (по умолчанию 8)
                        var triggerCells = parseInt(localStorage.getItem('weyno-autorev-triggercells'), 10);
                        if (isNaN(triggerCells) || triggerCells < 1) triggerCells = 8;

                        // Check if cell count changed к TriggerCells
                        if (cellsCount === triggerCells && lastCellCount !== triggerCells) {
                            var event = new KeyboardEvent('keydown', { key: ' ', code: 'Space', keyCode: 32, which: 32, bubbles: true });
                            document.dispatchEvent(event);

                            var delay = parseInt(localStorage.getItem('weyno-autorev-delay'), 10);
                            if (isNaN(delay) || delay < 0) delay = 50;

                            setTimeout(function() {
                                document.dispatchEvent(event);
                                // Останавливаем трекинг после двойного пробела
                                if (window.trackInterval) {
                                    clearInterval(window.trackInterval);
                                    window.trackInterval = null;
                                    var counter = document.getElementById('cell-counter');
                                    if (counter) {
                                        counter.textContent = 'Tracked: None';
                                    }
                                    console.log('Track auto-stopped after double space');
                                }
                            }, delay);
                        }
                
                        lastCellCount = cellsCount;
                    }, 10);
                
                    console.log('Track started');
                } else {
                    console.log('Track: игрок не найден', playerId);
                }
            });
            $("#menu-profile").on("click", function () {
                var _0x111D7 = _0x11627.data("selected");
                _0x12190.sendPacket(new _0x12065.sendShowProfile(_0x111D7))
            });
            $("#menu-pu_pr").on("click", function () {
                if (_0x12190.partyCode == undefined) {
                    _0x12190.sendPacket(new _0x12065.sendPartyAction(4, 0));
                    $("#menu-pu_pr span").text("Private")
                } else {
                    _0x12190.sendPacket(new _0x12065.sendPartyAction(4, 1));
                    $("#menu-pu_pr span").text("Public")
                }
            });
            $("#menu-promote").on("click", function () {
                var _0x111D7 = _0x11627.data("party") + 1;
                if (_0x111D7 >= 0) {
                    _0x12190.sendPacket(new _0x12065.sendPartyAction(2, _0x111D7))
                }
            });
            $("#menu-kick").on("click", function () {
                var _0x111D7 = _0x11627.data("party") + 1;
                if (_0x111D7 >= 0) {
                    _0x12190.sendPacket(new _0x12065.sendPartyAction(1, _0x111D7))
                }
            });
            $("#menu-spectate").on("click", function () {
                var _0x111D7 = _0x11627.data("selected");
                if (_0x111D7 >= 0) {
                    _0x12190.sendPacket(new _0x12065.sendSpectate(_0x111D7))
                }
            });
            $("#menu-block").on("click", function () {
                var _0x111EE = parseInt(_0x11627.data("selected"));
                var _0x111D7 = _0x112D4(_0x111EE);
                _0x12190.selfMsg(_0x111D7)
            });
            $(document).on("click", function (_0x111D7) {
                _0x11627.hide();
                if (_0x111D7.target.id !== _0x111C0[1038]) {
                    $("#emote-panel").hide()
                };
                if ($("#popup-party-code").css("display") !== "none" && _0x111D7.target.id !== "popup-party-code") {
                    $("#popup-party-code").hide()
                }
            });
            $("#aEditChatTabs").on("click", function (_0x111D7) {
                _0x1135E();
                _0x11B5D(_0x11EDE);
                _0x12584($("#popup-chat-tab-editor"))
            });
            $("#cte-tab-selector").on("change", _0x114FC);
            $("#btn-chat-tab-editor-add").on("click", _0x114CE);
            $("#btn-chat-tab-editor-remove").on("click", _0x114E5);
            $("#btn-chat-tab-editor-update").on("click", _0x1152A);
            $(".custom-asset-skinner").on("click", function () {
                $("#popup-asset-skinner .title-text").text($(this).text());
                $("#input-asset-skinner").attr("asset", $(this).attr("id")).val("");
                _0x11B5D(_0x11EDE);
                _0x12584($("#popup-asset-skinner"))
            });
            $("#btn-custom-asset-set").on("click", function () {
                if (!_0x12020.cThemeEnabled) {
                    _0x1191E()
                };
                var _0x111EE = $("#input-asset-skinner").val();
                if (_0x111EE) {
                    var _0x111D7 = $("#input-asset-skinner").attr("asset");
                    if (_0x111D7.charAt(0) == "a" && _0x126F4[_0x111D7] != null) {
                        _0x12528(_0x111D7, _0x111EE)
                    }
                };
                $("#popup-asset-skinner .back-button").trigger("click")
            });
            $("#btn-custom-asset-clear").on("click", function () {
                if (!_0x12020.cThemeEnabled) {
                    _0x1191E()
                };
                var _0x111D7 = $("#input-asset-skinner").attr("asset");
                if (_0x111D7.charAt(0) == "a" && _0x126F4[_0x111D7] != null) {
                    _0x12528(_0x111D7, "")
                }
            });
            $("#popup-asset-skinner").on("dragover", false).on("drop", function (_0x111D7) {
                if (!_0x12020.cThemeEnabled) {
                    _0x1191E()
                };
                var _0x11205 = $("#input-asset-skinner").attr("asset");
                if (_0x11205.charAt(0) == "a" && _0x126F4[_0x11205] != null) {
                    var _0x111EE = _0x119ED(_0x111D7.originalEvent);
                    if (/\.(jpe?g|png|gif)$/i.test(_0x111EE.name)) {
                        var _0x1121C = new FileReader();
                        _0x1121C.addEventListener("load", function () {
                            _0x12528(_0x11205, thisresult)
                        }, false);
                        _0x1121C.readAsDataURL(_0x111EE)
                    }
                }
                ;return false
            });
            $("#btn-food-colors").on("click", function () {
                _0x12795();
                _0x11B5D(_0x11EDE);
                _0x12584($("#popup-food-colors"))
            });
            $("#btn-theme-export").on("click", function () {
                if (!_0x12020.cThemeEnabled) {
                    return
                };
                var _0x111EE = "theme.json";
                var _0x111D7 = JSON.stringify(_0x126F4, null, 2);
                _0x117DC(_0x111EE, _0x111D7, "text/plain")
            });
            $("#btn-theme-import").on("click", function () {
                $("#theme-import").trigger("click")
            });
            $("#theme-import").on("change", function () {
                var _0x111EE = $(this).prop("files");
                if (_0x111EE.length > 0) {
                    var _0x111D7 = _0x111EE[0];
                    _0x11E82(_0x111D7)
                }
            });
            $("#main-themes .options-container").on("dragover", false).on("drop", function (_0x111D7) {
                var _0x111EE = _0x119ED(_0x111D7.originalEvent);
                _0x11E82(_0x111EE);
                return false
            });
            $("#cGlobalLeaderboard").on("change", function () {
                if (!_0x1281F || _0x119A8) {
                    return
                };
                _0x119A8 = true;
                firebase.auth().currentUser.getIdToken().then((_0x111EE) => {
                    fetch(_0x111D7 + "/api/v1/options/setFlags", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0x111EE
                        })
                    }).then(((_0x111D7) => {
                        return _0x111D7["json"]()
                    })).then((_0x111D7) => {
                        _0x119A8 = false;
                        $(this).prop("checked", _0x111D7.message)
                    }).catch((_0x111D7) => {
                        console["error"](_0x111D7);
                        _0x119A8 = false;
                        alert(_0x111D7)
                    })
                }).catch((_0x111C0) => {
                    _0x11AEA(_0x111C0, true);
                    _0x119A8 = false
                })
            });
            firebase.auth().onAuthStateChanged(function (_0x111D7) {
                if (_0x111D7) {
                    if (!_0x1163E.consented) {
                        firebase.auth().signOut().then(function () {});
                        return
                    };
                    _0x12556();
                    if (_0x12190.isConnected() && firebase.auth().currentUser !== null) {
                        firebase.auth().currentUser.getIdToken(true).then((_0x111D7) => {
                            _0x12190.sendPacket(new _0x12065.sendAuthToken(_0x111D7))
                        }).catch((_0x111C0) => {
                            return _0x11AEA(_0x111C0, true)
                        })
                    };
                    var _0x111EE = firebase.database().ref("users/" + _0x111D7.uid);
                    var _0x1121C = false;
                    _0x111EE.on("value", function (_0x1128F) {
                        var _0x11233 = _0x1128F.val();
                        if (!_0x11233) {
                            return
                        };
                        if (!_0x1121C) {
                            $("#account-loader").hide();
                            $("#authed").show();
                            $("#authed").attr("style", "display: flex;");
                            $("#cGlobalLeaderboard").removeAttr("disabled");
                            $("#cGlobalLeaderboard").prop("checked", _0x11233.flags.PUBLIC);
                            _0x1121C = true
                        };
                        _0x1281F = _0x11233;
                        $("#account-avatar").attr("src", _0x11233.avatar);
                        $("#account-username").text(_0x11233.username);
                        if (_0x11233.flags.STAFF) {
                            chatContainer.style.userSelect = _0x111C0[498]
                        };
                        _0x1169A($("#account-username"), _0x11233);
                        $("#account-level").html("Level " + _0x11233.levelData.level + "&nbsp;&nbsp;&nbsp;&nbsp;" + _0x1194C(_0x11233.levelData.xp_current) + "/" + _0x1194C(_0x11233.levelData.xp_needed) + " XP");
                        $(".xp-meter > span").each(function () {
                            var _0x111D7 = ((_0x11233.levelData.xp_current / _0x11233.levelData.xp_needed) * 100);
                            $(this).animate({
                                width: _0x111D7 + _0x111C0[1083]
                            }, 1200)
                        });
                        if (!_0x12190.accountListeners.loadServers) {
                            _0x12190.accountListeners.loadServers = firebase.database().ref("servers/account/" + _0x1281F.uid).on("value", function (_0x11233) {
                                var _0x111D7 = _0x11233.val();
                                if (!_0x111D7) {
                                    return
                                };
                                _0x11205 = {};
                                for (var _0x111EE in _0x111D7) {
                                    var _0x1121C = _0x111D7[_0x111EE];
                                    if (_0x1121C["up"]) {
                                        _0x11205[_0x1121C.name] = new _0x124CC(_0x1121C.name, _0x1121C.ip + ":" + _0x1121C.port, 0, 0, "?", _0x1121C.gamemode, _0x1121C.region, _0x1121C.ssl, 0)
                                    }
                                };
                                _0x11E0F();
                                if (_0x12470 != null) {
                                    _0x1249E(_0x12470.name)
                                }
                            })
                        };
                        if (_0x11233.flags.DISCORD_LINKED && !_0x12190.accountListeners.loadDiscord) {
                            _0x12190.accountListeners.loadDiscord = firebase.firestore().collection("discord").doc(_0x1281F.uid).onSnapshot((_0x111D7) => {
                                if (_0x111D7.exists) {
                                    $("#discordLinkStatus").text("Your account is linked with " + _0x111D7.data().username + "#" + _0x111D7.data().discrim);
                                    $("#discordLinkStatus").show();
                                    $("#discordLink").hide();
                                    $("#discordUnlink").show();
                                    $(".discord-login-container").css("padding", "15px")
                                } else {
                                    $("#discordLinkStatus").hide();
                                    $("#discordUnlink").hide();
                                    $("#discordLink").show();
                                    $(".discord-login-container").css("padding", "30px")
                                }
                            })
                        };
                        if (_0x11233.tokens !== undefined) {
                            var _0x11261 = new Date();
                            _0x11261.setMonth(_0x11261.getMonth() + _0x11233.tokens);
                            if (_0x11233.tokens == 0) {
                                $("#redeem-tokens").hide();
                                $("#token-amount").text("You have 0 tokens.")
                            } else {
                                $("#redeem-tokens").show();
                                $("#token-amount").text("You have " + _0x11233.tokens + " tokens, maximum expiry date: " + _0x11261.toString());
                                $("#redeem-spend").attr("max", _0x11233.tokens)
                            }
                        } else {
                            $("#token-amount").text("You have 0 tokens.")
                        };
                        if (_0x1281F.title && _0x1281F.title > 0 && _0x12808 && _0x12808.titles && _0x12808.titles.length > 0) {
                            var _0x111EE = $("#account-titles");
                            var _0x11278 = 0;
                            for (var _0x1124A = 0; _0x1124A < _0x12808.titles.length; _0x1124A++) {
                                if (_0x12808.titles[_0x1124A] == _0x1281F.title) {
                                    _0x11278 = _0x1124A + 1
                                }
                            };
                            if (_0x11278 > 0) {
                                _0x111EE.val(_0x11278)
                            }
                        };
                        if (!_0x12190.accountListeners[_0x111C0[1116]]) {
                            _0x12190.accountListeners[_0x111C0[1116]] = firebase.database().ref(_0x111C0[1124] + _0x111D7.uid).on("value", function (_0x11233) {
                                var _0x111EE = _0x11233.val();
                                if (!_0x111EE) {
                                    return
                                };
                                _0x12808 = _0x111EE;
                                if (_0x12808.titles && _0x12808.titles.length > 0) {
                                    var _0x111D7 = $("#account-titles");
                                    var _0x1121C = 0;
                                    _0x111D7.empty();
                                    _0x111D7.append("<option value='0'>Default Title</option>");
                                    for (var _0x11205 = 0; _0x11205 < _0x111EE.titles.length; _0x11205++) {
                                        _0x111D7.append("<option value='" + (_0x11205 + 1) + "'>" + _0x12739[_0x12808.titles[_0x11205]] + "</option>");
                                        if (_0x12808.titles[_0x11205] == _0x1281F.title) {
                                            _0x1121C = _0x11205 + 1
                                        }
                                    };
                                    if (_0x1121C > 0) {
                                        _0x111D7.val(_0x1121C)
                                    };
                                    _0x111D7.css("display", "inline-block")
                                } else {
                                    $("#account-titles").css("display", "none")
                                };
                                if (_0x12808.message && _0x12808.message.title && _0x12808.message.content && !_0x12808.message.read) {
                                    $("#popup-message-title").text(_0x12808.message.title);
                                    $("#popup-message-content").html(_0x12808.message.content);
                                    _0x12584($("#popup-message"));
                                    _0x11B5D(_0x11EDE)
                                }
                            })
                        };
                        if (_0x11B01) {
                            _0x11E26(_0x1281F)
                        };
                        _0x11D6E(_0x111D7.uid)
                    })
                } else {
                    $("#cGlobalLeaderboard").attr("disabled");
                    if (!_0x1163E.consented) {
                        $("#authed").hide();
                        $("#account-loader").hide();
                        $("#guest").hide();
                        $("#no_cookie_consent").show()
                    } else {
                        $("#authed").hide();
                        $("#account-loader").hide();
                        $("#no_cookie_consent").hide();
                        $("#guest").show()
                    }
                }
            });
            $("#account-login").on("click", function () {
                if (_0x1163E.consented) {
                    firebase.auth().signInWithPopup(_0x1124A).then(function (_0x111C0) {}).catch((_0x111C0) => {
                        return _0x11AEA(_0x111C0, true)
                    })
                }
            });
            $("#account-logout").on("click", function () {
                firebase.auth().signOut().then(function () {
                    $("#authed").hide(500);
                    $("#guest").show();
                    $("#discordLinkStatus").hide();
                    $(".discord-login-container").show()
                }).catch((_0x111C0) => {
                    return _0x11AEA(_0x111C0, true)
                })
            });
            $("#account-shop").on("click", function () {
                window.open("https://store.gota.io/", "_blank")
            });
            $("#account-social").on("click", function () {
                if (!_0x1281F) {
                    return
                };
                _0x11E26(_0x1281F);
                _0x12584($("#main-social"));
                _0x11B5D($(_0x11EDE))
            });
            $("#social-back-button").on("click", function () {
                _0x11B5D($("#main-social"));
                _0x12584($(_0x11EDE))
            });
            $("#account-profile").on("click", function () {
                _0x11DE1(_0x1281F, _0x11EDE)
            });
            $("#food-colors-close-btn").on("click", function () {
                _0x12750(_0x11EDE);
                _0x11B5D($("#popup-food-colors"))
            });
            function _0x1121C(_0x111EE, _0x111D7) {
                if (_0x111EE) {
                    $(_0x111D7).prop("disabled", false);
                    $(_0x111D7).text("Set");
                    return
                };
                $(_0x111D7).prop("disabled", true);
                $(_0x111D7).text("...")
            }
            $("#account-titles").on("change", function () {
                if (_0x119A8) {
                    return
                };
                var _0x111EE = parseInt($(this).val());
                _0x119A8 = true;
                firebase.auth().currentUser.getIdToken().then((_0x11205) => {
                    fetch(_0x111D7 + "/api/v1/options/setTitle", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0x11205,
                            title: _0x111EE
                        })
                    }).then(((_0x111D7) => {
                        return _0x111D7["json"]()
                    })).then((_0x111C0) => {
                        _0x119A8 = false
                    }).catch((_0x111D7) => {
                        console["error"](_0x111D7);
                        _0x119A8 = false
                    })
                }).catch((_0x111C0) => {
                    _0x11AEA(_0x111C0, true);
                    _0x119A8 = false
                })
            });
            $("#popup-message-read-btn").on("click", function () {
                if (_0x119A8) {
                    return
                };
                _0x11B5D($("#popup-message"));
                _0x12750(_0x11EDE);
                _0x119A8 = true;
                firebase.auth().currentUser.getIdToken().then((_0x111EE) => {
                    fetch(_0x111D7 + "/api/v1/options/markAsRead", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0x111EE
                        })
                    }).then(((_0x111D7) => {
                        return _0x111D7["json"]()
                    })).then((_0x111C0) => {
                        _0x119A8 = false
                    }).catch((_0x111D7) => {
                        console["error"](_0x111D7);
                        _0x119A8 = false
                    })
                }).catch((_0x111C0) => {
                    _0x11AEA(_0x111C0, true);
                    _0x119A8 = false
                })
            });
            $("#account-set-username-btn").on("click", function () {
                if (!_0x1281F) {
                    return
                };
                _0x1121C(false, this);
                var _0x111EE = $("#account-username-input").val();
                if (!_0x111EE || _0x111EE == "" || _0x111EE.trim() == "") {
                    alert("Please provide a username!");
                    _0x1121C(true, this);
                    return
                };
                firebase.auth().currentUser.getIdToken().then((_0x11205) => {
                    fetch(_0x111D7 + "/api/v1/social/username", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0x11205,
                            username: _0x111EE
                        })
                    }).then((_0x111D7) => {
                        return _0x111D7["json"]()
                    }).then((_0x111D7) => {
                        _0x1121C(true, this);
                        if (_0x111D7.code == 200) {
                            _0x12750(_0x11EDE);
                            $("#popup-account-username").hide();
                            return
                        };
                        alert(_0x111D7.message)
                    }).catch((_0x111D7) => {
                        console["error"](_0x111D7);
                        alert(_0x111D7);
                        _0x1121C(true, this)
                    })
                }).catch((_0x111C0) => {
                    _0x1121C(true, this);
                    _0x11AEA(_0x111C0, true)
                })
            });
            $(".popup-panel .back-button").on("click", function () {
                _0x11B74();
                _0x12750(_0x11EDE)
            });
            $("#discordLink").on("click", function () {
                if (!_0x1281F) {
                    return
                };
                firebase.auth().currentUser.getIdToken().then((_0x111D7) => {
                    window.open("https://accounts.gota.io/api/v1/options/discord/redirect?token=" + _0x111D7, "popup", "width=600,height=700")
                })
            });
            $("#discordUnlink").on("click", function () {
                if (!_0x1281F) {
                    return
                };
                firebase.auth().currentUser.getIdToken().then((_0x111EE) => {
                    fetch(_0x111D7 + "/api/v1/options/discord/unlink", {
                        method: "POST",
                        body: JSON.stringify({
                            token: _0x111EE
                        }),
                        headers: {
                            'Content-Type': "application/json"
                        }
                    }).then((_0x111D7) => {
                        return _0x111D7["json"]()
                    }).then((_0x111D7) => {
                        alert(_0x111D7.message)
                    })
                }).catch((_0x111C0) => {
                    return _0x11AEA(_0x111C0)
                })
            });
            $("#redeem-tokens").submit(function (_0x111EE) {
                _0x111EE.preventDefault();
                if (!_0x1281F) {
                    return
                };
                if (!confirm(_0x111C0[1152])) {
                    return
                };
                var _0x11205 = $("#redeem-name").val();
                var _0x1121C = $("#redeem-spend").val();
                firebase.auth().currentUser.getIdToken().then((_0x111EE) => {
                    fetch(_0x111D7 + "/api/v1/options/redeem", {
                        method: "POST",
                        body: JSON.stringify({
                            token: _0x111EE,
                            name: _0x11205,
                            spend: parseInt(_0x1121C)
                        }),
                        headers: {
                            'Content-Type': "application/json"
                        }
                    }).then((_0x111D7) => {
                        return _0x111D7["json"]()
                    }).then((_0x111D7) => {
                        alert(_0x111D7.message);
                        if (_0x111D7.code === 200) {
                            _0x11D6E(_0x1281F.uid)
                        }
                    })
                }).catch((_0x111C0) => {
                    return _0x11AEA(_0x111C0)
                })
            });
            $(".error-banner").on("click", function () {
                $(this).hide()
            });
            $("#btn-add-friend").on("click", function (_0x111EE) {
                _0x111EE.preventDefault();
                if (!_0x1281F) {
                    return
                };
                var _0x1121C = prompt("Enter friend's UID (found above add friend button)");
                if (!_0x1121C) {
                    return
                };
                var _0x11205 = _0x1121C.replace(/\s/g, "");
                if (typeof _0x1121C !== "string" || _0x11205.length === 0) {
                    return alert("Please enter a valid UID")
                };
                firebase.auth().currentUser.getIdToken().then((_0x111EE) => {
                    fetch(_0x111D7 + "/api/v1/social/friends", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: _0x111EE,
                            target: _0x11205,
                            action: 1
                        })
                    }).then((_0x111D7) => {
                        return _0x111D7["json"]()
                    }).then((_0x111D7) => {
                        alert(_0x111D7.message)
                    })
                }).catch((_0x111C0) => {
                    return _0x11AEA(_0x111C0, true)
                })
            });
            document.getElementById("party-canvas").oncontextmenu = _0x120D8;
            $(document).keyup(function (_0x111D7) {
                if (_0x111D7.keyCode == 13) {
                    var _0x111EE = $("#chat-input");
                    if (document.activeElement.tagName != "INPUT") {
                        var _0x11205 = _0x111EE[0];
                        if (_0x11205) {
                            _0x11205.setSelectionRange(_0x11205["value"].length, _0x11205["value"].length)
                        };
                        _0x111EE.focus()
                    } else {
                        if (_0x111EE.is(":focus")) {
                            _0x111EE.blur()
                        }
                    }
                }
            });
            $(window).bind("beforeunload", function () {
                return "Are you sure you want to leave Gota.io?"
            });
            _0x12373();
            $(".keybinds-btn").on("click", function () {
                $(".keybinds-btn").removeClass("keybinds-btn-selected");
                $(this).addClass("keybinds-btn-selected");
                _0x11C9F = true
            });
            $("#btn-reset-keybinds").on("click", function () {
                $(".keybinds-btn").each(function () {
                    var _0x111D7 = $(this);
                    var _0x111EE = _0x111D7.attr("id");
                    if (_0x11769[_0x111EE] != null) {
                        _0x11CB6[_0x111EE] = _0x11769[_0x111EE];
                        _0x127AC(_0x111D7)
                    }
                })
            });
            $("#scrimmage-mode-select").on("change", function () {
                $("#scrimmage-mode-info").children().css("display", "none");
                $("#scrimmage-info-" + $(this).val()).css("display", "block")
            });
            $("#btn-queue").on("click", function () {
                var _0x111D7 = parseInt($("#scrimmage-mode-select").val());
                var _0x111EE = isNaN(_0x111D7) ? 0 : Math.min(Math.max(_0x111D7, 0), 100);
                _0x12190.sendPacket(new _0x12065.sendQueue(_0x111EE));
                $(this).blur()
            });
            $("#btn-leave-match").on("click", function () {
                _0x12190.sendPacket(new _0x12065.sendLeaveMatch())
            });
            $("#btn-custom-create").on("click", function () {
                _0x12190.sendPacket(new _0x12065.sendCustomGame(0));
                $(this).blur()
            });
            $("#btn-custom-return").on("click", function () {
                _0x12190.sendPacket(new _0x12065.sendCustomGame(1))
            });
            $("#btn-custom-start").on("click", function () {
                _0x12190.sendPacket(new _0x12065.sendCustomGame(2))
            });
            $("#btn-custom-lobbies").on("click", function () {
                _0x12190.sendPacket(new _0x12065.sendShowLobbies())
            });
            $("#btn-lobbies-refresh").on("click", function () {
                _0x12190.sendPacket(new _0x12065.sendShowLobbies())
            });
            $("#btn-lobbies-join").on("click", function () {
                if (_0x12459 === 0) {
                    return
                };
                var _0x111EE = _0x12459;
                var _0x11205 = "";
                var _0x111D7 = _0x1173B[_0x111EE];
                if (_0x111D7 == null) {
                    return
                };
                if (_0x111D7.hasPasscode) {
                    _0x11205 = prompt("Enter the password to join this game", "")
                };
                if (_0x11205 == null) {
                    _0x11205 = ""
                };
                _0x12190.sendPacket(new _0x12065.sendJoinLobby(_0x111EE, _0x11205))
            });
            $("#btn-lobbies-return").on("click", function () {
                $(".scrimmage-full").css("display", "none");
                $(_0x111C0[649]).css("display", "block")
            });
            $("#scrimmage-map").on("change", function (_0x111EE) {
                var _0x11205 = $(this).find("option:selected").val();
                var _0x111D7 = $(this).attr("data");
                if (_0x11205 != _0x111D7) {
                    $("#scrimmage-map option[value='" + _0x111D7 + "']").prop("selected", true);
                    _0x12190.sendPacket(new _0x12065.sendCustomGameUpdate(_0x1170D.MAP, _0x11205))
                }
            });
            $("#scrimmage-mapmode").on("change", function (_0x111EE) {
                var _0x11205 = $(this).find("option:selected").val();
                var _0x111D7 = $(this).attr("data");
                if (_0x11205 != _0x111D7) {
                    $("#scrimmage-mapmode option[value='" + _0x111D7 + "']").prop("selected", true);
                    _0x12190.sendPacket(new _0x12065.sendCustomGameUpdate(_0x1170D.MODE, _0x11205))
                }
            });
            $("#scrimmage-mapsize").on("change", function (_0x111EE) {
                var _0x11205 = $(this).find("option:selected").val();
                var _0x111D7 = $(this).attr("data");
                if (_0x11205 != _0x111D7) {
                    $("#scrimmage-mapsize option[value='" + _0x111D7 + "']").prop("selected", true);
                    _0x12190.sendPacket(new _0x12065.sendCustomGameUpdate(_0x1170D.SIZE, _0x11205))
                }
            });
            $("#scrimmage-startmass").on("change", function (_0x111EE) {
                var _0x11205 = $(this).val();
                var _0x111D7 = $(this).attr("data");
                if (isNaN(_0x11205)) {
                    $(this).val(_0x111D7);
                    return
                };
                _0x11205 = Math.max(1, Math.min(parseInt(_0x11205), 32000));
                if (_0x11205 != _0x111D7) {
                    $(this).val(_0x111D7);
                    _0x12190.sendPacket(new _0x12065.sendCustomGameUpdate(_0x1170D.STARTMASS, _0x11205))
                }
            });
            $("#scrimmage-virusDensity").on("change", function (_0x111EE) {
                var _0x11205 = $(this).val();
                var _0x111D7 = $(this).attr("data");
                if (isNaN(_0x11205)) {
                    $(this).val(_0x111D7);
                    return
                };
                _0x11205 = Math.max(0, Math.min(parseInt(_0x11205), 1000));
                if (_0x11205 != _0x111D7) {
                    $(this).val(_0x111D7);
                    _0x12190.sendPacket(new _0x12065.sendCustomGameUpdate(_0x1170D.VIRUS_DENSITY, _0x11205))
                }
            });
            $(_0x111C0[680])[_0x111C0[155]](_0x111C0[618], function(_0x111EE) {
                var _0x11205 = $(this)[_0x111C0[190]]();
                var _0x111D7 = $(this)[_0x111C0[668]](_0x111C0[419]);
                if (isNaN(_0x11205)) {
                    $(this)[_0x111C0[190]](_0x111D7);
                    return
                }
                ;_0x11205 = Math[_0x111C0[269]](0, Math[_0x111C0[251]](parseInt(_0x11205), 1000));
                if (_0x11205 != _0x111D7) {
                    $(this)[_0x111C0[190]](_0x111D7);
                    _0x12190[_0x111C0[138]](new _0x12065[_0x111C0[703]](_0x1170D[_0x111C0[637]],_0x11205))
                }
            });
            $("#scrimmage-respawnDelay").on("change", function (_0x111EE) {
                var _0x11205 = $(this).val();
                var _0x111D7 = $(this).attr("data");
                if (isNaN(_0x11205)) {
                    $(this).val(_0x111D7);
                    return
                };
                _0x11205 = Math.max(-1, Math.min(parseInt(_0x11205), 600));
                if (_0x11205 != _0x111D7) {
                    $(this).val(_0x111D7);
                    _0x12190.sendPacket(new _0x12065.sendCustomGameUpdate(_0x1170D.RESPAWN_DELAY, _0x11205))
                }
            });
            $("#scrimmage-lockteams").on("change", function (_0x111D7) {
                var _0x111EE = $(this).prop("checked");
                $(this).prop("checked", !_0x111EE);
                _0x12190.sendPacket(new _0x12065.sendCustomGameUpdate(_0x1170D.LOCK, _0x111EE == true ? 1 : 0))
            });
            $("#scrimmage-autoSplit").on("change", function (_0x111D7) {
                var _0x111EE = $(this).prop("checked");
                $(this).prop("checked", !_0x111EE);
                _0x12190.sendPacket(new _0x12065.sendCustomGameUpdate(_0x1170D.AUTOSPLIT, _0x111EE == true ? 1 : 0))
            });
            $("#scrimmage-public").on("change", function (_0x111D7) {
                var _0x111EE = $(this).prop("checked");
                $(this).prop("checked", !_0x111EE);
                _0x12190.sendPacket(new _0x12065.sendCustomGameUpdate(_0x1170D.PUBLIC, _0x111EE == true ? 1 : 0))
            });
            $("#scrimmage-password").on("change", function (_0x111D7) {
                var _0x11205 = $(this).prop("checked");
                $(this).prop("checked", !_0x11205);
                var _0x111EE = "";
                if (_0x11205) {
                    _0x111EE = prompt("Enter a password to join your game (32 max characters)", "")
                };
                if (_0x111EE == null) {
                    _0x111EE = ""
                };
                _0x12190.sendPacket(new _0x12065.sendCustomGameUpdateString(_0x1170D.PASSWORD, _0x111EE))
            });
            $("#scrimmage-name").on("click", function (_0x111D7) {
                if (!_0x12190.isPartyLeader()) {
                    return
                };
                var _0x111EE = prompt("Enter a new name for your game (32 max characters)", $(this).text());
                if (_0x111EE != null) {
                    _0x12190.sendPacket(new _0x12065.sendCustomGameUpdateString(_0x1170D.NAME, _0x111EE))
                }
            })
        }
        function _0x11DF8() {
            if (window.grecaptcha === undefined) {
                return
            };
            _0x113BA = window.grecaptcha;
            window.grecaptcha = undefined;
            _0x113BA.ready(function () {})
        }

        function _0x118C2() {
            _0x113BA.execute("6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", {
                action: "login"
            }).then(function (_0x111D7) {
                _0x12190.sendPacket(new _0x12065.sendCaptcha(_0x111D7));
                document.body.classList.add("hide-captcha-badge");
                if (!_0x12190.spectate) {
                    _0x12190.play()
                } else {
                    _0x12190.spec()
                }
            })
        }
        function _0x11D57() {
            _0x11935(function (_0x111D7) {
                $("#" + _0x111D7).spectrum({
                    color: _0x126F4[_0x111D7],
                    preferredFormat: "hex",
                    showInput: true,
                    showAlpha: true,
                    clickoutFiresChange: false,
                    change: function (_0x111EE) {
                        _0x126F4[_0x111D7] = _0x111EE.toRgbString();
                        _0x1238A(_0x111D7, _0x126F4[_0x111D7])
                    }
                })
            });
            $("#uiGameBackgroundColor").spectrum("option", "showAlpha", false);
            $("#uiGameBorderColor").spectrum("option", "showAlpha", false);
            $("#pFoodColors").spectrum({
                preferredFormat: "hex",
                showInput: true,
                chooseText: "Add",
                flat: true,
                clickoutFiresChange: false,
                change: function (_0x111D7) {
                    if (!_0x12020.cThemeEnabled) {
                        _0x1191E()
                    };
                    var _0x111EE = _0x111D7.toHexString();
                    if (!_0x126F4._FoodColors.includes(_0x111EE)) {
                        _0x126F4._FoodColors.push(_0x111EE);
                        _0x12795()
                    }
                }
            })
        }
        function _0x12795() {
            var _0x11205 = $("#food-color-list");
            _0x11205.empty();
            if (_0x126F4._FoodColors.length == 0) {
                _0x12345();
                return
            };
            try {
                for (var _0x111EE in _0x126F4._FoodColors) {
                    var _0x111D7 = _0x126F4._FoodColors[_0x111EE];
                    _0x11205.append("<div c='" + _0x111D7 + "' style='background:" + _0x111D7 + ";color:" + _0x11C2C(_0x111D7) + ";'><span>" + _0x111D7 + "</span><div><button class='btn-food-color'>X</button></div></div>")
                };
                $(".btn-food-color").on("click", function () {
                    var _0x11205 = $(this).parents().eq(1).attr("c");
                    var _0x111D7, _0x111EE;
                    while ((_0x111D7 = _0x126F4._FoodColors.indexOf(_0x11205)) !== -1) {
                        _0x126F4._FoodColors.splice(_0x111D7, 1);
                        _0x111EE = true
                    };
                    if (_0x111EE) {
                        _0x12795()
                    }
                })
            } catch (e) {
                _0x126F4._FoodColors = [];
                _0x11205.empty()
            };
            _0x12345()
        }
        function _0x12345() {
            _0x116DF = [];
            for (var _0x111D7 of _0x126F4._FoodColors) {
                _0x116DF.push(_0x1214B.utils.string2hex(_0x111D7))
            };
            for (var _0x111EE in _0x12190.foodObjects) {
                _0x12190.foodObjects[_0x111EE].needsPixiUpdate = true
            }
        }

        function _0x112A6(_0x11205) {
            var _0x111EE = $(_0x111C0[1210]);
            _0x11C9F = false;
            if (_0x111EE.size() == 0) {
                return
            };
            var _0x111D7 = _0x111EE[_0x111C0[1211]]();
            _0x111EE.removeClass("keybinds-btn-selected");
            if (_0x11205 != 27) {
                _0x11CB6[_0x111D7.attr("id")] = _0x11205
            } else {
                _0x11CB6[_0x111D7.attr("id")] = -1
            };
            _0x127AC(_0x111D7)
        }

        function _0x127AC(_0x111D7) {
            var _0x111EE = _0x11CB6[_0x111D7.attr("id")];
            _0x111D7.html(_0x11CE4(_0x111EE))
        }

        function _0x11CE4(_0x111D7) {
            return _0x111D7 > 0 ? _0x11CCD[_0x111D7].toUpperCase() :"&nbsp;"
        }

        function _0x11D9C() {
            var _0x111D7 = document.getElementById("logo");
            if (_0x12020.cDisableEventSkins || !_0x11894.enabled) {
                _0x111D7.style.backgroundImage = "url('images/logo.png')"
            } else {
                if (_0x11894.enabled) {
                    _0x111D7.style.backgroundImage = "url('images/events/" + _0x11894.key + "/logo.png')"
                }
            }
        }
        function _0x11D85() {
            _0x11E3D();
            _0x11838 = {};
            gifEmoteList = {};
            for (var _0x111EE in _0x122D2) {
                var _0x111D7 = _0x122D2[_0x111EE];
                $(".emote-list").append("<li><img name='" + _0x111D7 + "' title='" + _0x111D7 + "' src='https://gota.io/emotes/" + _0x111D7 + ".png' /></li>");
                _0x11838[_0x111D7] = true
            };
            for (var _0x111EE in _0x11A8E) {
                var _0x111D7 = _0x11A8E[_0x111EE];
                $(".gif-list").append("<li><img name='" + _0x111D7 + "' title='" + _0x111D7 + "' src='https://gota.io/emotes/gifs/" + _0x111D7 + ".gif' /></li>");
                gifEmoteList[_0x111D7] = true
            };
            for (var _0x111EE = 0; _0x111EE < _0x1184F.length; _0x111EE++) {
                var _0x11233 = _0x1184F[_0x111EE];
                $("#spEffect").append('<option value="' + (_0x111EE + 1) + '">' + _0x11FAD(_0x11233) + "</option>");
                _0x11866[_0x111EE] = _0x11821;
                var _0x1121C = new Image();
                _0x1121C.src = "images/ejected_mass_skins/" + _0x11233 + ".png";
                _0x1121C.index = _0x111EE;
                _0x1121C.addEventListener("load", function () {
                    _0x11866[this.index] = _0x1214B.Texture.from(this)
                })
            };
            if (_0x11894.enabled && _0x11894.customEjectedMass) {
                _0x118AB = new Image();
                _0x118AB.src = "images/events/" + _0x11894.key + "/ejected_mass.png"
            };
            _0x11DCA();
            for (var _0x111EE = 0; _0x111EE < _0x11F68.length; _0x111EE++) {
                var _0x11205 = _0x111EE;
                gifFrames({
                    url: "images/effects/" + _0x11F68[_0x11205] + ".gif",
                    frames: "all",
                    cumulative: false,
                    outputType: "canvas"
                }).then(function (_0x111D7) {
                    var _0x111EE = new _0x11AA5();
                    _0x111EE.loadFromFrameData(_0x111D7);
                    _0x11F51[_0x11205] = _0x111EE
                })
            }
        }
        function _0x11E3D() {
            var _0x111D7, _0x11233;
            if (!_0x12020.cDisableEventSkins && _0x11894.enabled) {
                _0x111D7 = "images/events/" + _0x11894.key;
                _0x11233 = "/spike_mother_happy.png"
            } else {
                _0x111D7 = "images";
                _0x11233 = "/spike_mother.png"
            };
            var _0x111EE = new Image();
            _0x111EE.addEventListener("load", function () {
                _0x1263C = _0x1214B.Texture.from(_0x111EE);
                if (_0x12190) {
                    for (var _0x111D7 in _0x12190.bucket) {
                        var _0x11205 = _0x12190.bucket[_0x111D7];
                        if (_0x11205.type == 3) {
                            _0x11205.needsPixiUpdate = true
                        }
                    }
                }
            });
            var _0x11205 = new Image();
            _0x11205.addEventListener("load", function () {
                _0x12653 = _0x1214B.Texture.from(_0x11205);
                if (_0x12190) {
                    for (var _0x111D7 in _0x12190.bucket) {
                        var _0x111EE = _0x12190.bucket[_0x111D7];
                        if (_0x111EE.type == 4) {
                            _0x111EE.needsPixiUpdate = true
                        }
                    }
                }
            });
            var _0x1121C = new Image();
            _0x1121C.addEventListener("load", function () {
                _0x1266A = _0x1214B.Texture.from(_0x1121C);
                if (_0x12190) {
                    for (var _0x111D7 in _0x12190.bucket) {
                        var _0x111EE = _0x12190.bucket[_0x111D7];
                        if (_0x111EE.type == 4) {
                            _0x111EE.needsPixiUpdate = true
                        }
                    }
                }
            });
            _0x111EE.src = _0x111D7 + "/spike.png";
            _0x11205.src = _0x111D7 + "/spike_mother.png";
            _0x1121C.src = _0x111D7 + _0x11233
        }
        const _0x11558 = {
            "cDisableAA": function () {
                if (_0x12162) {
                    $("#performance-refresh").css("display", "table-row")
                }
            },
            "sRenderType": function () {
                if (_0x12162) {
                    $("#performance-refresh").css("display", "table-row")
                }
            },
            "cHideId": function () {
                var _0x111D7 = _0x12020.cHideId ? "none" : "block";
                document.getElementById(_0x111C0[1240]).style["display"] = _0x111D7
            },
            "cHideServer": function () {
                var _0x111D7 = _0x12020.cHideServerDisplay ? "none" : "block";
                document.getElementById(_0x111C0[1241]).style["display"] = _0x111D7
            },
            
            "cTransCells": function () {
                _0x1145B.alpha = _0x12020.cTransCells ? 0.5 : 1.0
            },
            "cColoredCellCount": function () {
                _0x12190.updateCellCounter(_0x117C5.playerCellCount, true)
            },
            "cHideChat": function () {
                var _0x111D7 = _0x12020.cHideChat ? "none" : "block";
                $("#chat-panel").css("display", _0x111D7)
            },
            "cHideMinimap": function () {
                var _0x111D7 = _0x12020.cHideMinimap ? "none" : "block";
                $("#minimap-panel").css("display", _0x111D7)
            },
            "sScorePanel": function () {
                switch (_0x12020[_0x111C0[1247]]) {
                case "0":
                    _0x123B8.style["display"] = "none";
                    break;
                case _0x111C0[727]:
                    _0x123B8.style["display"] = _0x111C0[1246];
                    break;
                case _0x111C0[52]:
                    _0x123B8.style["display"] = "inline-block";
                    break
                }
            },
            "cHideLeaderboard": function () {
                var _0x111D7 = _0x12020.cHideLeaderboard ? "none" : "block";
                $("#leaderboard-panel").css("display", _0x111D7)
            },
            "cHideExtraPanel": function () {
                var _0x111D7 = _0x12020.cHideExtraPanel ? "none" : "block";
                $("#extra-panel").css("display", _0x111D7)
            },
            "cShowCoordinates": function () {
                var _0x111D7 = _0x12020.cShowCoordinates ? "block" : "none";
                $("#minimap-coordinates").css("display", _0x111D7);
                _0x12373()
            },
            "cDisableAutoZoom": function () {
                if (_0x12020.cDisableAutoZoom) {
                    _0x12190.scale_base = 0.2 * Math.max(_0x1138C.height / 1080, _0x1138C.width / 1920)
                }
            },
            "cThemeEnabled": function () {
                if (!_0x12020.cThemeEnabled) {
                    _0x1235C();
                    _0x11935(function (_0x111D7) {
                        $("#" + _0x111D7).spectrum("disable")
                    })
                } else {
                    _0x11935(function (_0x111D7) {
                        $("#" + _0x111D7).spectrum("enable")
                    })
                }
            },
            "cShowBorder": function () {
                _0x11AD3()
            },
            "cDisableEventSkins": function () {
                if (_0x11894.enabled) {
                    $("body").toggleClass("event-" + _0x11894.key)
                };
                _0x11E3D();
                _0x11D9C()
            },
            "cResizableChat": function () {
                $("#chat-resize").css("display", _0x12020.cResizableChat ? "block" : "none")
            },
            "sShowNames": function () {
                _0x12037.levelNames = _0x121D5[_0x12020.sShowNames]
            },
            "sShowSkins": function () {
                _0x12037.levelSkins = _0x121D5[_0x12020.sShowSkins]
            },
            "sMassType": function () {
                _0x12037.massType = _0x11F0C[_0x12020.sMassType]
            },
            "sTextOutlines": function () {
                _0x12037.textOutlineSize = _0x126DD[_0x12020.sTextOutlines];
                for (var _0x111D7 in _0x12190.playerRegistry.bucket) {
                    var _0x111EE = _0x12190.playerRegistry.bucket[_0x111D7];
                    if (_0x111EE.nameCache) {
                        _0x111EE.nameCache.style.strokeThickness = _0x12037.textOutlineSize
                    };
                    _0x12190.playerRegistry.updatePlayer(_0x111EE)
                };
                _0x125C9.buildSizeCache()
            },
            "sQuality": function () {
                var _0x111D7 = _0x12037.resolution;
                _0x12037.resolution = _0x11ABC[_0x12020.sQuality];
                if (_0x111D7 !== _0x12037.resolution) {
                    $(window).trigger("resize")
                }
            },
            "uiForegroundColor": function (_0x111D7) {
                if (_0x12190) {
                    _0x12190.drawParty()
                };
                $(".fg-interface-color").css("color", _0x111D7);
                $(".interface-color").css("color", _0x111D7);
                $(".gota-btn").css("color", _0x111D7).css("border-color", _0x111D7);
                $(".popup-panel").css("color", _0x111D7);
                $(".main").css("color", _0x111D7);
                $(".main-bottom-stats").css("border-color", _0x111D7)
            },
            "uiBackgroundColor": function (_0x111D7) {
                $(".hud-panel .interface-color").css("background-color", _0x111D7)
            },
            "uiButtonColor": function (_0x111D7) {
                $(".gota-btn").css("background-color", _0x111D7)
            },
            "uiBorderColor": function (_0x111D7) {
                $(".ui-pane").css("border-color", _0x111D7);
                $("#chat-tab-container").css("border-color", _0x111D7);
                $(".chat-tab").css("border-color", _0x111D7)
            },
            "uiMenuBackgroundColor": function (_0x111D7) {
                $(".main-panel").css("background-color", _0x111D7);
                $(".popup-panel").css("background-color", _0x111D7);
                $(".options-container").css("background-color", _0x111D7)
            },
            "uiMenuTitleBackgroundColor": function (_0x111D7) {
                $(".menu-title").css("background-color", _0x111D7)
            },
            "uiMenuSubBackgroundColor": function (_0x111D7) {
                $(".menu-sub-bg").css("background-color", _0x111D7);
                $(".server-active").css("background-color", _0x111D7);
                $("#server-content").css("background-color", _0x111D7)
            },
            "uiMenuSubBackground2Color": function (_0x111D7) {
                $(".menu-sub-bg2").css("background-color", _0x111D7);
                $(".server-table tbody").css("background-color", _0x111D7)
            },
            "uiPartyLeaderColor": function (_0x111D7) {
                if (_0x12190) {
                    _0x12190.drawParty()
                }
            },
            "uiGameColorSuccess": function (_0x111D7) {
                $("#social-friends-online-count").css("color", _0x111D7)
            },
            "uiGameBackgroundColor": function (_0x111D7) {
                document["body"].style.background = _0x111D7
            },
            "uiGameBorderColor": function () {
                _0x11AD3()
            },
            "rUiScale": function (_0x111D7) {
                _0x12020.rUiScale = Math.min(Math.max(_0x111D7, 0.5), 1.25);
                $("#uiScale").val(Number.parseFloat(_0x12020.rUiScale * 100).toFixed(0));
                $(".ui-scale").css("transform", "scale(" + _0x12020.rUiScale + ")")
            },
            "rReconnectPeriod": function (_0x111D7) {
                _0x12020[_0x111C0[366]] = Math.min(Math.max(_0x111D7, 0), 10);
                $(_0x111C0[986]).val(_0x12020[_0x111C0[366]])
            },
            "rAnimationDelay": function (_0x111D7) {
                _0x12020.rAnimationDelay = Math.min(Math.max(_0x111D7, 1), 250);
                $("#animationDelay").val(_0x12020.rAnimationDelay)
            },
            "rViewDistance": function (_0x111D7) {
                _0x12020rViewDistance = Math.min(Math.max(_0x111D7, 50), 150);
                $("#viewDistance").val(_0x12020rViewDistance);
                _0x12190.sendOptions()
            },
            "rBorderSize": function (_0x111D7) {
                _0x126F4.rBorderSize = Math.min(Math.max(_0x111D7, 1), 256);
                $("#borderSize").text(_0x126F4.rBorderSize);
                _0x11AD3()
            },
            "rBackgroundOpacity": function (_0x111D7) {
                _0x126F4.rBackgroundOpacity = Math.min(Math.max(_0x111D7, 0), 1);
                $("#backgroundOpacity").text(Number.parseFloat(_0x126F4.rBackgroundOpacity * 100).toFixed(0));
                document.getElementById("canvas-background").style.opacity = _0x126F4.rBackgroundOpacity
            },
            "aCustomBackground": function (_0x111D7) {
                document.getElementById("canvas-background").style.backgroundImage = "url('" + _0x111D7 + "')";
                document.getElementById("canvas-background").style.backgroundSize = "100% 100%"
            },
            "aCustomSpike": function (_0x1121C) {
                if (_0x116C8.aCustomSpike) {
                    _0x116C8.aCustomSpike.destroy()
                };
                _0x116C8.aCustomSpike = null;
                for (var _0x111EE in _0x12190.bucket) {
                    var _0x11205 = _0x12190.bucket[_0x111EE];
                    if (_0x11205.type == 3) {
                        _0x11205.needsPixiUpdate = true
                    }
                };
                if (_0x1121C.length == 0) {
                    return
                };
                var _0x111D7 = new Image();
                _0x111D7.crossOrigin = "";
                _0x111D7.addEventListener("load", function () {
                    _0x116C8.aCustomSpike = _0x1214B.Texture.from(_0x111D7)
                });
                _0x111D7.addEventListener("error", function () {
                    _0x12190.selfMsg(_0x111C0[1291])
                });
                _0x111D7.src = _0x1121C
            },
            "aCustomMother": function (_0x1121C) {
                if (_0x116C8.aCustomMother) {
                    _0x116C8.aCustomMother.destroy()
                };
                _0x116C8.aCustomMother = null;
                for (var _0x111EE in _0x12190.bucket) {
                    var _0x11205 = _0x12190.bucket[_0x111EE];
                    if (_0x11205.type == 4) {
                        _0x11205.needsPixiUpdate = true
                    }
                };
                if (_0x1121C.length == 0) {
                    return
                };
                var _0x111D7 = new Image();
                _0x111D7.crossOrigin = "";
                _0x111D7.addEventListener("load", function () {
                    _0x116C8.aCustomMother = _0x1214B.Texture.from(_0x111D7)
                });
                _0x111D7.addEventListener("error", function () {
                    _0x12190.selfMsg("Unable to load custom theme mother cell.")
                });
                _0x111D7.src = _0x1121C
            }
        };
        function _0x12373() {
            if (!_0x12020.cShowCoordinates) {
                $("#minimap-canvas").css({
                    "border-top": "0"
                });
                $("#minimap-panel").css({
                    "height": "250px"
                })
            } else {
                $("#minimap-canvas").css({
                    "border-top": "2px solid rgba(255, 255, 255, .2)"
                });
                $("#minimap-panel").css({
                    "height": "270px"
                })
            }
        }

        function _0x11E54() {
            _0x1253F();
            $("#btn-chg-ln").on("click", function () {
                if (!_0x11EB0) {
                    return
                };
                var _0x111EE = prompt("Enter new locked name!");
                if (!_0x111EE) {
                    return
                };
                var _0x111D7 = null;
                if (typeof _0x111EE !== "string") {
                    _0x111D7 = "Please enter a valid name!"
                };
                if (_0x111EE.length < 2) {
                    _0x111D7 = "Locked names must be 2 or more characters long."
                };
                if (_0x111EE.length > 20) {
                    _0x111D7 = "Locked names must be 20 or less characters long."
                };
                if (_0x111D7 !== null) {
                    alert(_0x111D7);
                    return
                };
                _0x111EE = _0x111EE.trim();
                if (confirm("You are about to change your locked name to: '" + _0x111EE + "'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?")) {
                    _0x12190.sendPacket(new _0x12065.sendLockedNameChange(_0x111EE))
                }
            });
            $("#btn-updateSP").on("click", function () {
                _0x127DA()
            });
            $("#btn-subpanel-rules").on("click", function () {
                _0x126C6.rules = true;
                _0x127F1()
            })
        }
        function _0x1253F() {
            _0x127F1();
            $("#spNameColor").spectrum({
                color: _0x126C6.nameColor,
                showAlpha: false,
                showInput: true,
                preferredFormat: "rgb"
            });
            $("#spChatColor").spectrum({
                showPaletteOnly: true,
                showPalette: true,
                color: _0x114A0[_0x126C6.chatColor],
                palette: _0x114A0
            });
            $("#spSkinName").val(_0x126C6.skinName);
            $("#spLowerName").prop("checked", _0x126C6.lowerName);
            $("#spEffect select").val(_0x126C6.effect);
            $("#spNameFont select").val(_0x126C6.nameFont)
        }

        function _0x127DA(_0x1121C) {
            _0x126C6.skinName = $("#spSkinName").val().toLowerCase();
            _0x126C6.lowerName = $("#spLowerName").prop("checked");
            _0x126C6.nameColor = $("#spNameColor").spectrum("get").toRgb();
            var _0x111EE = $("#spChatColor").spectrum("get").toHexString().toUpperCase();
            var _0x111D7 = 0;
            for (var _0x11205 = 0; _0x11205 < _0x114A0.length; _0x11205++) {
                if (_0x114A0[_0x11205] == _0x111EE) {
                    _0x111D7 = _0x11205;
                    break
                }
            };
            _0x126C6.chatColor = _0x111D7;
            _0x126C6.effect = parseInt($("#spEffect").val());
            _0x126C6.nameFont = parseInt($("#spNameFont").val());
            _0x12190.sendPacket(new _0x12065.sendSubPanel(_0x1121C))
        }
        function _0x127F1() {
            if (_0x11EB0 || _0x12190.subPanelOverride) {
                $("#btn-cellpanel").prop("disabled", false);
                if (_0x11EB0) {
                    $(".subpanel-name-dashboard").css("display", "")
                } else {
                    $(".subpanel-name-dashboard").css("display", "none")
                };
                if (_0x126C6.rules) {
                    $("#subpanel-rules").css("display", "none");
                    $("#subpanel-content").css("display", "block")
                } else {
                    $("#subpanel-content").css("display", "none");
                    $("#subpanel-rules").css("display", "block")
                }
            } else {
                $("#btn-cellpanel").prop("disabled", true)
            }
        }
        function _0x11D6E(_0x111D7) {
            if (!_0x12190.accountListeners.loadSubPanel) {
                _0x12190.accountListeners.loadSubPanel = firebase.firestore().collection("accounts").doc(_0x111D7).onSnapshot((_0x111D7) => {
                    if (!_0x111D7.exists || !_0x111D7.data().locked) {
                        _0x11EB0 = false;
                        if ($("#main-subpanel").css("display") !== "none") {
                            _0x111EE("main-servers")
                        }
                    } else {
                        _0x11EB0 = true;
                        $("#spLockedName").html(_0x111D7.data().name);
                        if (_0x111D7.data().lastChange !== undefined) {
                            $("#btn-chg-ln").attr("title", "Last Changed: " + new Date(_0x111D7.data().lastChange).toLocaleString())
                        };
                        if (_0x111D7.data().expiry !== null) {
                            $("#spExpiry").html(new Date(_0x111D7.data().expiry.seconds * 1000).toLocaleString())
                        } else {
                            $("#spExpiry").html(_0x111C0[1328])
                        }
                    };
                    _0x127F1();
                    _0x12190.accountListeners.loadSubPanel();
                    _0x12190.accountListeners.loadSubPanel = null
                }, (_0x111D7) => {
                    _0x12190.accountListeners.loadSubPanel();
                    _0x12190.accountListeners.loadSubPanel = null
                })
            }
        }
        function _0x124CC(_0x1121C, _0x111EE, _0x1124A, _0x111D7, _0x11261, _0x11205, _0x11278, _0x1128F, _0x11233) {
            this.name = _0x1121C;
            this.ip = _0x111EE;
            this.players = _0x1124A;
            this.bots = _0x111D7;
            this.playerText = _0x11261;
            this.mode = _0x11205;
            this.region = _0x11278;
            this.ssl = _0x1128F;
            this.order = _0x11233
        }
        function _0x11E0F() {
            $("#servers-body-eu").html("");
            $("#servers-body-na").html("");
            $("#servers-body-ap").html("");
            for (var _0x111D7 in _0x124FA) {
                for (var _0x111EE in _0x124FA[_0x111D7]) {
                    var _0x1121C = _0x124FA[_0x111D7][_0x111EE];
                    var _0x11233 = _0x1121C.bots > 0 ? ' title="Players: ' + _0x1121C.players + "&#10;Bots: " + _0x1121C.bots + '"' : "";
                    $("#servers-body-" + _0x1121C.region).append('<tr id="s_' + _0x1121C.name + '" class="server-row" server="' + _0x1121C.name + '"><td class="server-table-name">' + _0x1121C.name + '</td><td class="server-table-players"' + _0x11233 + ">" + _0x1121C.playerText + '</td><td class="server-table-mode">' + _0x1121C.mode + "</td></tr>")
                }
            };
            for (var _0x111EE in _0x11205) {
                var _0x1121C = _0x11205[_0x111EE];
                $("#servers-body-" + _0x1121C.region).prepend('<tr id="s_' + _0x1121C.name + '" class="account-server server-row" server="' + _0x1121C.name + '"><td class="server-table-name">' + _0x1121C.name + '</td><td class="server-table-players">' + _0x1121C.playerText + '</td><td class="server-table-mode">' + _0x1121C.mode + "</td></tr>")
            };
            $(".server-row").on("click", function () {
                _0x1249E($(this).attr("server"))
            })
        }
        function _0x119BF(_0x111D7) {
            for (var _0x111EE in _0x11205) {
                if (_0x111D7.toLowerCase() === _0x111EE.toLowerCase()) {
                    return _0x11205[_0x111EE]
                }
            };
            return null
        }
        function _0x11A77(_0x111D7) {
            for (var _0x111EE in _0x124FA) {
                for (var _0x11205 in _0x124FA[_0x111EE]) {
                    if (_0x11205.toLowerCase() === _0x111D7.toLowerCase()) {
                        return _0x124FA[_0x111EE][_0x11205]
                    }
                }
            };
            return null
        }
        function _0x1249E(_0x111D7) {
            if (_0x12470 != null) {
                $("#s_" + _0x12470.name).removeClass("server-selected")
            };
            _0x12470 = _0x11A77(_0x111D7) || (Object.keys(_0x11205).length > 0 ? _0x119BF(_0x111D7) : null);
            if (_0x12470 != null) {
                $("#s_" + _0x12470.name).addClass("server-selected")
            }
        }
        function _0x12487(_0x111D7) {
            _0x111D7 = _0x111D7.toLowerCase();
            var _0x111EE = $("#server-tab-" + _0x111D7);
            $(".server-active").css("background-color", "inherit");
            $("#server-tab-container").children().removeClass("server-active");
            _0x111EE.addClass("server-active");
            $(".server-active").css("background-color", _0x126F4.uiMenuSubBackgroundColor);
            $("#server-content").children().css("display", "none");
            $("#servers-" + _0x111D7).css("display", "block")
        }
        function _0x1121C(_0x111EE, _0x1124A) {
            var _0x1121C = 0;
            for (tab in _0x12020._ChatTabs) {
                var _0x11278 = _0x12020._ChatTabs[tab];
                if ((_0x111EE & _0x11278.flags) != _0x111EE) {
                    continue
                };
                var _0x11233 = $("#chat-body-" + tab + " tr").length;
                if (_0x11233 >= _0x11278.maxMessages) {
                    $("#chat-body-" + tab + " tr:first-child").remove()
                };
                var _0x111D7 = _0x1121C > 0 ? _0x1124A.cloneNode(true) : _0x1124A;
                _0x1121C++;
                var _0x11261 = document.createElement("tr");
                _0x11261.appendChild(_0x111D7);
                document.getElementById("chat-body-" + tab).appendChild(_0x11261);
                var _0x11205 = $("#chat-container-" + tab);
                if (_0x11205[0].scrollHeight - _0x11205[0].scrollTop < _0x11205.outerHeight() + 150) {
                    _0x11205.scrollTop(_0x11205[0].scrollHeight)
                }
            }
        }
        function _0x1187D(_0x111D7) {
            if (_0x111D7.length == 0) {
                return
            } else {
                if (_0x111D7.charAt(0) == "/") {
                    _0x12093(_0x111D7)
                } else {
                    _0x12190.sendPacket(new _0x12065.sendChat(_0x111D7, 0));
                    _0x12511("")
                }
            };
            if (_0x11472.length > 20) {
                _0x11472.shift()
            };
            _0x11472.push(_0x111D7)
        }
        function _0x12511(_0x111D7) {
            $("#chat-input").val(_0x111D7)
        }

        function _0x11233(_0x111D7) {
            $("#chat-input").val(_0x119D6() + _0x111D7)
        }

        function _0x119D6() {
            return $("#chat-input").val()
        }

        function _0x12093(_0x1121C) {
            var _0x11233 = _0x1121C.split(" ");
            var _0x111EE = _0x11233[0];
            var _0x111D7 = _0x111EE.substring(1);
            _0x12511("");
            var _0x11205 = false;
            Object.keys(_0x11610).findIndex((_0x111EE) => {
                if (_0x11610[_0x111EE].triggers.findIndex((_0x111EE) => {
                        return _0x111EE.toUpperCase() === _0x111D7.toUpperCase()
                    }) > -1 && _0x11205 == false) {
                    _0x11610[_0x111EE][_0x111C0[1367]](_0x11233.slice(1));
                    _0x11205 = true;
                    return
                }
            });
            if (_0x11205 == false) {
                _0x12190.selfMsg("Invalid command!")
            }
        }
        function _0x12317() {
            var _0x111EE = $("#chat-tab-container");
            var _0x111D7 = $("#chat-container");
            _0x111EE.empty();
            _0x111D7.empty();
            for (var _0x11205 in _0x12020._ChatTabs) {
                var _0x1121C = _0x12020._ChatTabs[_0x11205];
                if (_0x1121C.name.length == 0) {
                    _0x1121C.name = "Unnamed"
                };
                _0x111EE.append("<li class='chat-tab' id='chat-tab-" + _0x11205 + "' name='" + _0x11205 + "'><span>" + _0x1121C.name + "</span></li>");
                _0x111D7.append("<div class='chat-inner-container' id='chat-container-" + _0x11205 + "'><table class='chat-table'><tbody id='chat-body-" + _0x11205 + "'></tbody></table></div>")
            };
            $(".chat-tab").on("click", function () {
                _0x12414($(this).attr("name"))
            }).css("border-color", _0x126F4.uiBorderColor);
            if (_0x12442 >= 0 && _0x12442 < _0x12020._ChatTabs.length) {
                _0x12414(_0x12442)
            } else {
                _0x12414(0)
            }
        }
        function _0x1232E() {
            for (var _0x111D7 in _0x12020._ChatTabs) {
                var _0x111EE = _0x12020._ChatTabs[_0x111D7];
                if (!_0x111EE) {
                    continue
                };
                if (_0x111EE.name.length == 0) {
                    _0x111EE.name = "Unnamed"
                };
                var _0x11205 = $("#chat-tab-" + _0x111D7);
                if (_0x11205) {
                    _0x11205.html("<span>" + _0x111EE.name + "</span>")
                }
            }
        }
        function _0x12414(_0x111D7) {
            $(".chat-tab").removeClass("chat-active-tab");
            $(".chat-inner-container").removeClass("chat-active-container").css("display", "none");
            _0x12442 = _0x111D7;
            var _0x111EE = _0x12020._ChatTabs[_0x111D7];
            if (!_0x111EE) {
                return
            };
            $("#chat-tab-" + _0x111D7).addClass("chat-active-tab");
            $("#chat-container-" + _0x111D7).addClass("chat-active-container").css("display", "block")
        }
        function _0x1135E(_0x11205 = 0) {
            var _0x111D7 = $("#cte-tab-selector");
            _0x111D7.empty();
            for (var _0x111EE in _0x12020._ChatTabs) {
                _0x111D7.append("<option value='" + _0x111EE + "'>" + _0x12020._ChatTabs[_0x111EE].name + "</option>")
            };
            _0x111D7.prop("selectedIndex", _0x11205);
            _0x111D7.trigger("change")
        }
        function _0x114FC(_0x11205) {
            var _0x1124A = $("#cte-tab-selector").val();
            var _0x11233 = {
                name: "",
                flags: 0,
                maxMessages: 0
            };
            var _0x111EE = _0x12020._ChatTabs[_0x1124A];
            if (_0x111EE) {
                for (var _0x1121C in _0x11233) {
                    _0x11233[_0x1121C] = _0x111EE[_0x1121C]
                }
            };
            $("#cte-tab-name").val(_0x11233.name);
            for (var _0x11261 in _0x11541) {
                var _0x111D7 = (_0x11541[_0x11261] & _0x11233.flags) == _0x11541[_0x11261];
                $("#cte-type-" + _0x11261.toLowerCase()).prop("checked", _0x111D7)
            };
            $("#cte-max-messages").val(_0x11233.maxMessages)
        }
        function _0x1152A(_0x111D7) {
            var _0x1121C = $("#cte-tab-selector").val();
            var _0x11278 = _0x12020._ChatTabs[_0x1121C];
            if (!_0x11278) {
                return
            };
            var _0x11261 = _0x11278.name;
            var _0x1124A = $("#cte-tab-name").val();
            if (_0x1124A.length == 0) {
                return
            };
            var _0x11205 = _0x1124A != _0x11261;
            var _0x111EE = 0;
            var _0x11233 = parseInt($("#cte-max-messages").val());
            for (var _0x1128F in _0x11541) {
                if ($("#cte-type-" + _0x1128F.toLowerCase()).prop("checked")) {
                    _0x111EE += _0x11541[_0x1128F]
                }
            };
            _0x11278.name = _0x1124A;
            _0x11278.flags = _0x111EE;
            _0x11278.maxMessages = _0x11233;
            if (_0x11205) {
                _0x1135E(_0x1121C);
                _0x1232E()
            }
        }
        function _0x114CE() {
            var _0x111D7 = {
                name: "New",
                flags: 0,
                maxMessages: 100
            };
            _0x12020._ChatTabs.push(_0x111D7);
            _0x1135E(_0x12020._ChatTabs.length - 1);
            _0x12317()
        }
        function _0x114E5() {
            var _0x111D7 = $("#cte-tab-selector").val();
            var _0x111EE = _0x12020._ChatTabs[_0x111D7];
            if (!_0x111EE) {
                return
            };
            _0x12020._ChatTabs.splice(_0x111D7, 1);
            _0x1135E();
            _0x12317()
        }
        function _0x11513(_0x11233) {
            var _0x111D7 = parseInt($("#cte-tab-selector").val());
            var _0x1121C = _0x12020._ChatTabs[_0x111D7];
            if (!_0x1121C) {
                return
            };
            var _0x111EE;
            if (_0x11233) {
                _0x111EE = _0x111D7 - 1
            } else {
                _0x111EE = _0x111D7 + 1
            };
            var _0x11205 = _0x12020._ChatTabs[_0x111EE];
            if (!_0x11205) {
                return
            };
            var _0x11205 = _0x12020._ChatTabs[_0x111EE];
            if (!_0x11205) {
                return
            };
            _0x12020._ChatTabs[_0x111D7] = _0x11205;
            _0x12020._ChatTabs[_0x111EE] = _0x1121C;
            _0x1135E(_0x111EE);
            _0x1232E();
            _0x12414(_0x111EE)
        }
        var _0x114B7 = function (_0x111D7) {
            _0x12009(_0x111D7, this.innerText, this.dataset.playerId, -1)
        };
        var _0x120D8 = function (_0x111D7) {
            var _0x1121C = _0x111D7.offsetY;
            var _0x11205 = Math.floor(_0x1121C / 20);
            if (_0x1121C % 20 < 5) {
                return
            };
            var _0x111EE = _0x12190.party[_0x11205];
            if (_0x111EE == null) {
                return
            };
            _0x12009(_0x111D7, _0x111EE.name, _0x111EE.id, _0x11205)
        };
        function _0x12009(_0x111D7, _0x11205, _0x111EE, _0x11233) {
            var _0x1121C = document.getElementById(_0x111C0[1389]);
            _0x1121C.innerText = _0x11205 || "An unnamed cell";
            _0x11627.data("selected", _0x111EE);
            _0x11627.data("party", _0x11233);
            $(_0x111C0[1390]).css("display", "none");
            if (_0x11233 == -1) {
                $("#menu-invite").css("display", "block");
                $("#menu-whisper").css("display", "block");
                $("#menu-track").css("display", "block");
                $("#menu-block").css("display", "block");
                $("#menu-profile").css("display", "block")
            } else {
                $("#menu-whisper").css("display", "block");
                $("#menu-track").css("display", "block");
                $("#menu-profile").css("display", "block");
                if (_0x12190.isPartyLeader()) {
                    $("#menu-pu_pr").css("display", "block");
                    $("#menu-promote").css("display", "block");
                    $("#menu-kick").css("display", "block")
                }
            };
            if (_0x12190.spectate) {
                $("#menu-spectate").css("display", "block")
            };
            _0x11627.css("display", "block");
            _0x11627.css("left", Math.min(_0x12190.mouseRawX, window.innerWidth - _0x11627.width()));
            _0x11627.css("top", Math.min(_0x12190.mouseRawY, window.innerHeight - _0x11627.height()))
        }
        function _0x120C1(_0x111D7) {
            return _0x111D7.replace(/</g, _0x111C0[1392]).replace(/>/g, _0x111C0[1391])
        }
        function _0x11F3A(_0x111EE, _0x1124A, _0x112BD, _0x112D4, _0x112A6, _0x111D7, _0x11233) {
            var _0x11205 = ((_0x112BD - _0x12190.serverData.border.left) / _0x12190.serverData.border.width) * _0x11EF5.width;
            var _0x1121C = ((_0x112D4 - _0x12190.serverData.border.top) / _0x12190.serverData.border.height) * _0x11EF5.height;
            _0x111EE.beginPath();
            _0x111EE.arc(_0x11205, _0x1121C, _0x112A6, 0, _0x1211D, false);
            _0x111EE.fillStyle = _0x111D7;
            _0x111EE.fill();
            if (_0x11233) {
                var _0x1128F = (_0x111EE.measureText(_0x1124A).width / 2);
                var _0x11261 = _0x11205 - _0x1128F;
                var _0x11278 = _0x1121C - 5;
                _0x111EE.fillText(_0x1124A, _0x11261, _0x11278)
            }
        }
        function _0x1156F(_0x111EE) {
            var _0x112A6 = _0x11EC7.pivot.x - (_0x12162.stage.position.x / _0x12190.scale) + ((_0x12190.mouseRawX * _0x12037.resolution) / _0x12190.scale);
            var _0x112BD = _0x11EC7.pivot.y - (_0x12162.stage.position.y / _0x12190.scale) + ((_0x12190.mouseRawY * _0x12037.resolution) / _0x12190.scale);
            var _0x11278 = null;
            var _0x11233;
            for (var _0x11205 in _0x12190[_0x111C0[260]]) {
                _0x11233 = _0x12190[_0x111C0[260]][_0x11205];
                if (_0x11233[_0x111C0[263]] < 25) {
                    continue
                };
                var _0x1128F = _0x11233[_0x111C0[234]] - _0x11233[_0x111C0[263]];
                var _0x111D7 = _0x11233[_0x111C0[234]] + _0x11233[_0x111C0[263]];
                var _0x1121C = _0x11233[_0x111C0[231]] - _0x11233[_0x111C0[263]];
                var _0x11261 = _0x11233[_0x111C0[231]] + _0x11233[_0x111C0[263]];
                if (_0x112BD > _0x111D7) {
                    continue
                }
                ;if (_0x112BD < _0x1128F) {
                    continue
                }
                ;if (_0x112A6 > _0x11261) {
                    continue
                }
                ;if (_0x112A6 < _0x1121C) {
                    continue
                }
                ;_0x11278 = _0x11233;
                break
            }
            if (_0x11278 != null && _0x11278.playerId != 0 && (!_0x111EE || _0x111EE.target.id == "canvas")) {
                var _0x1124A = _0x12190.playerRegistry.getPlayer(_0x11278.playerId);
                if (_0x1124A != null) {
                    _0x12009(_0x111EE, _0x1124A.name, _0x11278.playerId, -1)
                }
            }
        }
        function _0x12584(_0x111D7) {
            if (_0x111D7.attr("id") == _0x111C0[1393] && window[_0x111C0[58]]) {
                touch_controls.style["display"] = "none"
            };
            if (_0x111D7.css("display") == "none") {
                _0x111D7.css("display", "block");
                _0x111D7.animate({
                    opacity: 1
                }, 500)
            }
        }
        function _0x11B5D(_0x111D7) {
            if (_0x111D7.attr("id") == _0x111C0[1393] && window[_0x111C0[58]]) {
                touch_controls.style["display"] = "block"
            };
            if (_0x111D7.css("display") == "block" && _0x111D7.css("opacity") == 1) {
                _0x111D7.animate({
                    opacity: 0
                }, 500, function () {
                    _0x111D7.css("display", "none")
                })
            }
        }
        function _0x12750(_0x111D7) {
            if (_0x111D7.css("display") == "block" && _0x111D7.css("opacity") == 1) {
                _0x11B5D(_0x111D7)
            } else {
                if (_0x111D7.css("display") == "none") {
                    _0x12584(_0x111D7)
                }
            }
        }
        function _0x11B74() {
            $(".popup-panel").each(function () {
                _0x11B5D($(this))
            })
        }
        function _0x11C71(_0x111D7) {
            return _0x111D7.css("display") === "none"
        }
        function _0x1256D() {
            _0x11BB9.show();
            if (_0x12190.party.length == 0 || _0x12020.cHidePartyPanel) {
                _0x117C5.partyPanel.css("display", "none")
            };
            if (_0x12020.cHideChat) {
                $("#chat-panel").css("display", "none")
            };
            if (_0x12020.cHideMinimap) {
                $("#minimap-panel").css("display", "none")
            }
        }
        function _0x11B46() {
            _0x11BB9.hide()
        }
        function _0x12556() {
            $("#guest").hide();
            $("#account-loader").show()
        }
        function _0x11B2F() {
            $("#authed").hide();
            $("#account-loader").hide();
            $("#no_cookie_consent").hide();
            $("#guest").show()
        }
        function _0x11586(_0x111D7) {
            var _0x111EE = _0x111D7.attr("id");
            _0x12020[_0x111EE] = _0x111D7.prop("checked");
            _0x1238A(_0x111EE)
        }
        function _0x115B4(_0x111D7) {
            var _0x111EE = _0x111D7.attr("id");
            _0x12020[_0x111EE] = _0x111D7.val();
            _0x1238A(_0x111EE, _0x111D7.val())
        }
        function _0x1159D(_0x111D7) {
            var _0x111EE = _0x111D7.attr("id");
            _0x1238A(_0x111EE, _0x111D7.val())
        }
        function _0x1238A(_0x111D7, _0x111EE) {
            var _0x111C0 = _0x11558[_0x111D7];
            if (_0x111C0 != null) {
                _0x111C0(_0x111EE)
            }
        }
        function _0x12528(_0x111C0, _0x111D7) {
            if (_0x111D7 != null) {
                _0x126F4[_0x111C0] = _0x111D7;
                _0x1238A(_0x111C0, _0x111D7)
            }
        }
        function _0x123A1() {
            if (!_0x1163E.consented) {
                return
            };
            _0x12020.iChatWidth = $("#chat-panel").css("width");
            _0x12020.iChatHeight = $("#chat-panel").css("height");
            window.localStorage.setItem("options", JSON.stringify(_0x12020));
            window.localStorage.setItem("keybinds", JSON.stringify(_0x11CB6));
            window.localStorage.setItem("name", $("#name-box").val());
            window.localStorage.setItem("theme", JSON.stringify(_0x126F4));
            window.localStorage.setItem("subpanel", JSON.stringify(_0x126C6))
        }
        function _0x11DB3() {
            if (!_0x1163E.consented) {
                return
            };
            var _0x112A6 = window.localStorage.getItem("theme");
            if (_0x112A6) {
                _0x11E6B(_0x112A6)
            };
            var _0x11233 = window.localStorage.getItem("keybinds");
            if (_0x11233) {
                _0x11233 = JSON.parse(_0x11233);
                for (var _0x11205 in _0x11233) {
                    if (_0x11233[_0x11205] != null && Number.isInteger(_0x11233[_0x11205])) {
                        _0x11CB6[_0x11205] = _0x11233[_0x11205];
                        _0x127AC($("#" + _0x11205))
                    }
                }
            };
            var _0x11261 = window.localStorage.getItem("options");
            if (_0x11261) {
                _0x11261 = JSON.parse(_0x11261);
                for (var _0x1121C in _0x12020) {
                    if ((_0x1121C in _0x11261) === false) {
                        _0x11261[_0x1121C] = _0x12020[_0x1121C]
                    }
                }
            } else {
                _0x11261 = _0x12020
            };
            ;for (var _0x1121C in _0x11261) {
                var _0x111EE = _0x1121C[_0x111C0[248]](0);
                if (_0x111EE == _0x111C0[1205]) {
                    if (_0x11261[_0x1121C] == true) {
                        var _0x111D7 = $(_0x111C0[13] + _0x1121C);
                        _0x111D7[_0x111C0[621]](_0x111C0[682], _0x11261[_0x1121C]);
                        _0x11586(_0x111D7)
                    }
                } else {
                    if (_0x111EE == "s") {
                        var _0x11278 = $("#" + _0x1121C);
                        _0x11278.val(_0x11261[_0x1121C]);
                        _0x115B4(_0x11278)
                    } else {
                        if (_0x111EE == "i") {
                            _0x12020[_0x1121C] = _0x11261[_0x1121C]
                        } else {
                            if (_0x111EE == "r") {
                                _0x12020[_0x1121C] = _0x11261[_0x1121C];
                                $("#" + _0x1121C).val(_0x12020[_0x1121C]);
                                _0x1159D($("#" + _0x1121C))
                            } else {
                                _0x12020[_0x1121C] = _0x11261[_0x1121C]
                            }
                        }
                    }
                }
            };
            $("#chat-panel").css("width", _0x12020.iChatWidth);
            $("#chat-panel").css("height", _0x12020.iChatHeight);
            if (!_0x12020.cThemeEnabled) {
                _0x1238A("cThemeEnabled")
            };
            var _0x1124A = window.localStorage.getItem("name");
            if (_0x1124A != null) {
                $("#name-box").val(_0x1124A)
            };
            var _0x1128F = window.localStorage.getItem("subpanel");
            if (_0x1128F) {
                _0x1128F = JSON.parse(_0x1128F);
                for (var _0x1121C in _0x1128F) {
                    if (!_0x1128F[_0x1121C]) {
                        continue
                    };
                    if (_0x1128F[_0x1121C].length != 0) {
                        _0x126C6[_0x1121C] = _0x1128F[_0x1121C]
                    }
                }
            };
            _0x126C6.lockedName = "";
            _0x127F1()
        }
        function _0x1235C() {
            for (var _0x111EE in _0x11797) {
                var _0x111D7 = _0x111EE[_0x111C0[248]](0);
                if (_0x111D7 == _0x111C0[815]) {
                    $(_0x111C0[13] + _0x111EE)[_0x111C0[190]](_0x11797[_0x111EE]);
                    _0x1159D($(_0x111C0[13] + _0x111EE))
                } else {
                    if (_0x111D7 == _0x111C0[249]) {
                        _0x126F4[_0x111EE] = _0x11797[_0x111EE];
                        $(_0x111C0[13] + _0x111EE)[_0x111C0[1192]](_0x111C0[744], _0x126F4[_0x111EE]);
                        _0x1238A(_0x111EE, _0x126F4[_0x111EE])
                    } else {
                        if (_0x111D7 == _0x111C0[1051]) {
                            _0x12528(_0x111EE, _0x111C0[1])
                        } else {
                            _0x126F4[_0x111EE] = _0x11797[_0x111EE]
                        }
                    }
                }
            }
            ;_0x126F4[_0x111C0[1197]] = []
        }
        function _0x11E6B(_0x111D7) {
            try {
                var _0x1121C = JSON.parse(_0x111D7);
                if (_0x1121C.version == null || _0x1121C.version != _0x1270B) {
                    _0x1235C();
                    return
                };
                for (var _0x11205 in _0x1121C) {
                    if (_0x126F4[_0x11205] != null && _0x1121C[_0x11205].length != 0) {
                        _0x126F4[_0x11205] = _0x1121C[_0x11205];
                        var _0x111EE = _0x11205.charAt(0);
                        if (_0x111EE == "u") {
                            $("#" + _0x11205).spectrum("set", _0x126F4[_0x11205]);
                            _0x1238A(_0x11205, _0x126F4[_0x11205])
                        } else {
                            if (_0x111EE == "r") {
                                $("#" + _0x11205).val(_0x126F4[_0x11205]);
                                _0x1159D($("#" + _0x11205))
                            } else {
                                if (_0x111EE == "a") {
                                    _0x12528(_0x11205, _0x126F4[_0x11205])
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                _0x1235C()
            } finally {
                _0x12345()
            }
        }
        function _0x11E82(_0x111D7) {
            if (/\.(json)$/i.test(_0x111D7.name)) {
                var _0x111EE = new FileReader();
                _0x111EE.addEventListener("load", function () {
                    if (!_0x12020.cThemeEnabled) {
                        _0x1191E()
                    };
                    _0x1235C();
                    _0x11E6B(thisresult)
                }, false);
                _0x111EE.readAsText(_0x111D7)
            }
        }

        function _0x1191E() {
            $(_0x111C0[1407]).prop("checked", true).trigger("change")
        }
        function _0x120AA(_0x11205) {
            var _0x1121C = _0x11205.split(" ");
            var _0x111EE = "";
            var _0x11233 = null;
            for (var _0x111D7 = 0; _0x111D7 < _0x1121C.length; _0x111D7++) {
                if (_0x111D7 != 0) {
                    _0x111EE += " "
                };
                _0x11233 = _0x1121C[_0x111D7];
                if (_0x11838[_0x11233] != null) {
                    if (_0x11233.startsWith(":") && _0x11233.endsWith(":")) {
                        _0x11233 = _0x11233.substring(1, _0x11233.length - 1)
                    };
                    _0x111EE += '<img src="https://gota.io/emotes/' + _0x11233 + '.png" height="17" width="17" alt="' + _0x11233 + '">'
                } else {
                    if (gifEmoteList[_0x11233] != null) {
                        if (_0x11233.startsWith(":") && _0x11233.endsWith(":")) {
                            _0x11233 = _0x11233.substring(1, _0x11233.length - 1)
                        };
                        _0x111EE += '<img src="https://gota.io/emotes/gifs/' + _0x11233 + '.gif" height="17" width="17" alt="' + _0x11233 + '">'
                    } else {
                        _0x111EE += _0x11233
                    }
                }
            };
            return _0x111EE
        }
        const _0x1225F = {
            MODIFIER: 1,
            PASSIVE: 2,
            CONSUMABLE: 3,
            DEBUFF: 4,
            NONE: 0
        };
        var _0x12203, _0x1221A;
        var _0x12248 = {
            0: new _0x121EC("Random", "random", _0x1225F["NONE"]),
            1: new _0x121EC("Maximum Cells Upgrade", "extracells", _0x1225F.MODIFIER),
            2: new _0x121EC("Extra Consumable Slot", "extraconsumable", _0x1225F.MODIFIER),
            3: new _0x121EC("Merge", "merge", _0x1225F.PASSIVE),
            4: new _0x121EC("Grow", "grow", _0x1225F.PASSIVE),
            5: new _0x121EC("Speed", "speed", _0x1225F.PASSIVE),
            6: new _0x121EC("Shield", "shield", _0x1225F.PASSIVE),
            7: new _0x121EC("Virus", "spike", _0x1225F.CONSUMABLE),
            8: new _0x121EC("Disrupt", "disrupt", _0x1225F.CONSUMABLE),
            9: new _0x121EC("Teleport", "teleport", _0x1225F.CONSUMABLE),
            10: new _0x121EC("Disrupt", "_disrupt", _0x1225F.DEBUFF),
            11: new _0x121EC("Silver", "phoenix", _0x1225F.MODIFIER),
            12: new _0x121EC("Consumable Shield", "_shield", _0x1225F.CONSUMABLE),
            13: new _0x121EC("Magnet", "magnet", _0x1225F.PASSIVE),
            14: new _0x121EC("Decay", "decay", _0x1225F.CONSUMABLE),
            15: new _0x121EC("Decay", "_decay", _0x1225F.DEBUFF)
        };
        function _0x121EC(_0x111EE, _0x111D7, _0x11205) {
            this.name = _0x111EE;
            this["img"] = _0x111D7;
            this.type = _0x11205;
            this.image = null;
            this.texture = null
        }
        function _0x11DCA() {
            for (var _0x111EE in _0x12248) {
                var _0x111D7 = _0x12248[_0x111EE];
                var _0x1121C = "images/powerups/" + _0x111D7["img"] + ".png";
                var _0x11205 = new Image();
                _0x11205.addEventListener("load", function (_0x111D7, _0x111EE) {
                        _0x111D7.texture = _0x1214B.Texture.from(_0x111EE)
                    }
                    .bind(null, _0x111D7, _0x11205));
                _0x11205.src = _0x1121C;
                _0x111D7.image = _0x11205
            };
            _0x1221A = _0x1214B.Texture.from("images/shield.png");
            _0x12203 = _0x1214B.Texture.from("images/debuff.png")
        }
        function _0x11347() {
            this.passiveBuffs = {};
            this.passiveSortedBuffs = [];
            this.consumableBuffs = [];
            this.team = null;
            this.nextCacheUpdate = 0;
            this.texture = null;
            this.bonusMaxCells = 0;
            this.onAddBuff = function(_0x11205, _0x1121C, _0x111EE) {
                var _0x111D7 = null;
                var _0x11233 = _0x12248[_0x11205].type;
                if (_0x11233 != _0x1225F.CONSUMABLE) {
                    _0x111D7 = this.passiveBuffs[_0x11205];
                    if (_0x111D7) {
                        _0x111D7.update(_0x1121C, _0x111EE)
                    } else {
                        _0x111D7 = new _0x11330(_0x11205, _0x1121C, _0x111EE);
                        this.passiveBuffs[_0x11205] = _0x111D7;
                        this.sortPassiveBuffs()
                    };
                    this.onPassiveBuffsUpdate();
                    this.markCacheForUpdate()
                } else {
                    _0x111D7 = new _0x11330(_0x11205, _0x1121C, _0x111EE);
                    this.consumableBuffs.push(_0x111D7);
                    this.markCacheForUpdate()
                };
                if (_0x111D7) {
                    _0x12190.selfMsg("Recieved buff: " + _0x111D7.powerup.name)
                }
            };
            this[_0x111C0[579]] = function(_0x11205) {
                var _0x111D7 = null;
                var _0x1121C = _0x12248[_0x11205].type;
                if (_0x1121C != _0x1225F.CONSUMABLE) {
                    _0x111D7 = this.passiveBuffs[_0x11205];
                    if (_0x111D7) {
                        delete this.passiveBuffs[_0x11205];
                        this.sortPassiveBuffs();
                        this.markCacheForUpdate();
                        this.onPassiveBuffsUpdate()
                    }
                } else {
                    for (var _0x111EE = 0; _0x111EE < this.consumableBuffs.length; _0x111EE++) {
                        _0x111D7 = this.consumableBuffs[_0x111EE];
                        if (_0x111D7.id == _0x11205) {
                            this.consumableBuffs.splice(_0x111EE, 1);
                            this.markCacheForUpdate();
                            break
                        }
                    }
                };
                if (_0x111D7) {
                    _0x12190.selfMsg(_0x111C0[1458] + _0x111D7[_0x111C0[1457]][_0x111C0[187]])
                }
            }
            ;
            this.clearBuffs = function (_0x1121C) {
                if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
                    return
                };
                var _0x11205 = _0x1121C ? _0x1121C : false;
                for (var _0x111EE in this.passiveBuffs) {
                    var _0x111D7 = this.passiveBuffs[_0x111EE];
                    if (_0x11205 && _0x111D7.powerup.type == _0x1225F.MODIFIER) {} else {
                        delete this.passiveBuffs[_0x111EE]
                    }
                };
                this.sortPassiveBuffs();
                this.onPassiveBuffsUpdate();
                this.consumableBuffs = [];
                this.markCacheForUpdate()
            };
            this.sortPassiveBuffs = function () {
                this.passiveSortedBuffs = [];
                if (this.passiveBuffs.length == 0) {
                    return
                };
                for (var _0x111EE in this.passiveBuffs) {
                    var _0x111D7 = this.passiveBuffs[_0x111EE];
                    if (_0x111D7.powerup.type == _0x1225F.MODIFIER) {
                        this.passiveSortedBuffs.splice(0, 0, _0x111EE)
                    } else {
                        this.passiveSortedBuffs.push(_0x111EE)
                    }
                }
            };
            this.onPassiveBuffsUpdate = function () {
                this.bonusMaxCells = 0;
                if (this.passiveBuffs[1] != null) {
                    var _0x111D7 = this.passiveBuffs[1];
                    this.bonusMaxCells = _0x111D7.stack * 16
                }
            };
            this.update = function () {
                if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
                    _0x12231.visible = false;
                    return
                };
                if (Date.now() >= this.nextCacheUpdate) {
                    this.updateCache();
                    this.nextCacheUpdate = Date.now() + 1000
                };
                if (!this.texture) {
                    this.texture = _0x1214B.Texture.from(this.team["canvas"]);
                    _0x12231.texture = this.texture;
                    _0x12231.anchor.set(0)
                };
                _0x12231.position.x.x = _0x123B8.style.width + 20 - _0x12162.stage.position.x;
                _0x12231.position.x.y = 15 - _0x12162.stage.position.y;
                _0x12231.visible = true
            };
            this.updateCache = function () {
                var _0x111EE = (this.team == null || this.team["canvas"] == null) ? document.createElement("canvas") : this.team["canvas"];
                var _0x1121C = Math.max(this.passiveSortedBuffs.length, this.consumableBuffs.length);
                _0x111EE.width = 55 * _0x1121C;
                _0x111EE.height = 105;
                this.team = _0x111EE.getContext("2d");
                this.team.fillStyle = "#222";
                this.team.font = "bold 16pt Calibri";
                var _0x11233 = 0,
                    _0x1124A = 0;
                for (var _0x11205 = 0; _0x11205 < this.passiveSortedBuffs.length; _0x11205++) {
                    var _0x111D7 = this.passiveBuffs[this.passiveSortedBuffs[_0x11205]];
                    _0x111D7.draw(this.team, _0x11233, _0x1124A);
                    _0x11233 += 55
                };
                _0x11233 = 0;
                _0x1124A = 55;
                for (var _0x11205 = 0; _0x11205 < this.consumableBuffs.length; _0x11205++) {
                    var _0x111D7 = this.consumableBuffs[_0x11205];
                    _0x111D7.draw(this.team, _0x11233, _0x1124A);
                    _0x11233 += 55
                };
                if (this.texture) {
                    this.texture.update()
                };
                this.nextCacheUpdate = Date.now() + 1000
            };
            this.markCacheForUpdate = function () {
                this.nextCacheUpdate = 0
            }
        }
        const _0x11319 = Math.PI * 1.5;
        function _0x11330(_0x111EE, _0x11205, _0x111D7) {
            this.id = _0x111EE;
            this.powerup = _0x12248[_0x111EE];
            this.startTime = Date.now();
            this.expireTime = _0x111D7;
            this.stack = _0x11205;
            this.update = function (_0x111EE, _0x111D7) {
                this.startTime = Date.now();
                this.expireTime = _0x111D7;
                this.stack = _0x111EE
            };
            this.getCooldown = function () {
                if (Date.now() >= this.expireTime) {
                    return 2.0 * Math.PI
                } else {
                    var _0x111EE = this.expireTime - Date.now();
                    var _0x11205 = this.expireTime - this.startTime;
                    var _0x111D7 = Math.min(_0x111EE / _0x11205, 1.0) * 2.0;
                    return _0x111D7 * Math.PI
                }
            };
            this.draw = function (_0x111D7, _0x111EE, _0x11205) {
                _0x111D7.drawImage(this.powerup.image, _0x111EE, _0x11205, 50, 50);
                if (this.stack > 1) {
                    _0x111D7.fillStyle = "#000";
                    _0x111D7.fillText(this.stack, _0x111EE + 35, _0x11205 + 17)
                };
                if (this.expireTime > 0) {
                    _0x111D7.beginPath();
                    _0x111D7.moveTo(_0x111EE + 25, _0x11205 + 25);
                    _0x111D7.arc(_0x111EE + 25, _0x11205 + 25, 25, _0x11319, _0x11319 - this.getCooldown(), false);
                    _0x111D7.closePath();
                    _0x111D7.globalAlpha = 0.75;
                    _0x111D7.fillStyle = "#222";
                    _0x111D7.fill();
                    _0x111D7.globalAlpha = 1.0
                }
            }
        }
        const _0x11F68 = ["hearts"];
        var _0x11F51 = [];
        function _0x11AA5() {
            this.delay = 0;
            this.frames = [];
            this.isGif = true;
            this.push = function (_0x111D7) {
                this.frames.push(_0x111D7)
            };
            this.getFrame = function (_0x111D7) {
                return this.frames[_0x111D7]
            };
            this.getLength = function () {
                return this.frames.length
            };
            this.getTexture = function () {
                return this.getFrame(Math.floor(_0x11CFB / this.delay) % (this.getLength()))
            };
            this.loadFromFrameData = function (_0x11278) {
                if (_0x11278.length === 0) {
                    return
                };
                const _0x112A6 = document.createElement("canvas");
                const _0x112BD = _0x112A6.getContext("2d");
                const _0x11205 = document.createElement("canvas");
                const _0x1121C = _0x11205.getContext("2d");
                const _0x1124A = _0x11278[0].getImage();
                this.delay = _0x11278[0].frameInfo.delay * 10;
                _0x112A6.width = _0x1124A.width;
                _0x112A6.height = _0x1124A.height;
                _0x11205.width = _0x1124A.width;
                _0x11205.height = _0x1124A.height;
                for (const _0x11261 of _0x11278) {
                    _0x112BD.clearRect(0, 0, _0x112A6.width, _0x112A6.height);
                    _0x112BD.drawImage(_0x11205, 0, 0);
                    const _0x111D7 = _0x11261.getImage();
                    const _0x111EE = _0x111D7.getContext("2d");
                    _0x1121C.drawImage(_0x111D7, 0, 0);
                    _0x111EE.clearRect(0, 0, _0x111D7.width, _0x111D7.height);
                    _0x111EE.drawImage(_0x11205, 0, 0);
                    const {frameInfo} = _0x11261;
                    const {disposal} = frameInfo;
                    if (disposal === 2) {
                        _0x1121C.clearRect(frameInfo[_0x111C0[231]], frameInfo[_0x111C0[234]], frameInfo.width, frameInfo.height)
                    } else {
                        if (disposal === 3) {
                            _0x1121C.clearRect(0, 0, _0x11205.width, _0x11205.height);
                            _0x1121C.drawImage(_0x112A6, 0, 0)
                        }
                    };
                    this.push(_0x1214B.Texture.from(_0x111D7))
                }
            }
        }
        function _0x11A49(_0x111D7) {
            return _0x122A4[_0x111D7 % _0x122A4.length]
        }

        function _0x11A32(_0x111D7) {
            return _0x122BB[_0x111D7 % _0x122BB.length]
        }

        function _0x11A60(_0x111D7) {
            return _0x116DF[_0x111D7 % _0x116DF.length]
        }

        function _0x1259B(_0x111D7) {
            for (var _0x111EE = _0x111D7.length - 1; _0x111EE > 0; _0x111EE--) {
                var _0x11205 = Math.floor(Math.random() * (_0x111EE + 1));
                var _0x1121C = _0x111D7[_0x111EE];
                _0x111D7[_0x111EE] = _0x111D7[_0x11205];
                _0x111D7[_0x11205] = _0x1121C
            };
            return _0x111D7
        }
        var _0x11B8B = [];
        var _0x11BA2 = [];
        for (var _0x11BD0 = 0; _0x11BD0 < 180; _0x11BD0++) {
            var _0x115E2 = tinycolor({
                h: (_0x11BD0 * 2),
                s: 97.25,
                v: 100
            });
            var _0x115F9 = _0x115E2.toRgb();
            _0x11B8B[_0x11BD0] = (_0x115F9.r << 16) + (_0x115F9.g << 8) + _0x115F9.b;
            _0x11BA2[_0x11BD0] = _0x115E2.toHexString()
        };
        const _0x122A4 = _0x1259B(_0x11B8B.slice(0));
        const _0x122BB = _0x1259B(_0x11BA2.slice(0));
        delete _0x11B8B;
        delete _0x11BA2;
        if (_0x11894.enabled && _0x11894.foodColors) {
            _0x11A49 = function (_0x111D7) {
                return _0x11894.foodColors[_0x111D7 % _0x11894.foodColors.length]
            }
        };
        const _0x114A0 = ["#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614"];
        const _0x12739 = {};
        function _0x112D4(_0x111D7) {
            if (_0x111D7 === 0 || _0x111D7 === _0x12190.playerId) {
                return "You cannot block that player."
            };
            if (_0x112BD.includes(_0x111D7)) {
                delete _0x112BD[_0x111D7];
                return "Unblocked player with ID: " + _0x111D7
            };
            _0x112BD.push(_0x111D7);
            return "Blocked player with ID: " + _0x111D7
        }
        const _0x11610 = {
            whisper: {
                description: "Whisper a player by ID",
                triggers: ["whisper", "t", "w"],
                action: function (_0x111D7) {
                    var _0x111EE = parseInt(_0x111D7[0]);
                    if (isNaN(_0x111EE)) {
                        _0x12190.selfMsg("Invalid player id.");
                        return
                    };
                    var _0x11205 = _0x111D7.slice(1).join(" ");
                    if (_0x11205.length != 0) {
                        _0x12190.sendPacket(new _0x12065.sendWhisper(_0x111EE, _0x11205))
                    };
                    _0x12511("/t " + _0x111EE + " ")
                }
            },
            reply_whisper: {
                description: "Reply to previous whisper",
                triggers: ["reply", "r"],
                action: function (_0x111D7) {
                    var _0x111EE = _0x111D7.join(" ");
                    if (_0x111EE.length != 0) {
                        _0x12190.sendPacket(new _0x12065.sendWhisper(0, _0x111EE))
                    };
                    _0x12511("/r ")
                }
            },
            party_chat: {
                description: "Send a message to other party members",
                triggers: ["party", "p"],
                action: function (_0x111D7) {
                    var _0x111EE = _0x111D7.join(" ");
                    if (_0x111EE.length != 0) {
                        _0x12190.sendPacket(new _0x12065.sendChat(_0x111EE, 1))
                    };
                    _0x12511("/p ")
                }
            },
            invite: {
                description: "Invite a player to the party",
                triggers: ["invite", "i"],
                action: function (_0x111D7) {
                    var _0x111EE = parseInt(_0x111D7[0]);
                    if (!isNaN(_0x111EE)) {
                        _0x12190.sendPacket(new _0x12065.sendPartyAction(0, _0x111EE))
                    } else {
                        _0x12190.selfMsg("Invalid ID.")
                    }
                }
            },
            leave: {
                description: "Leave your current party",
                triggers: ["leave", "l"],
                action: function (_0x111D7) {
                    _0x12190.sendPacket(new _0x12065.sendPartyAction(3, 0))
                }
            },
            promote: {
                description: "Promote a party member to leader",
                triggers: ["promote"],
                action: function (_0x111D7) {
                    var _0x111EE = parseInt(_0x111D7[0]);
                    if (!isNaN(_0x111EE)) {
                        _0x12190.sendPacket(new _0x12065.sendPartyAction(2, _0x111EE))
                    } else {
                        _0x12190.selfMsg("Invalid ID.")
                    }
                }
            },
            kick: {
                description: "Kick a player from the party",
                triggers: ["kick"],
                action: function (_0x111D7) {
                    var _0x111EE = parseInt(_0x111D7[0]);
                    if (!isNaN(_0x111EE)) {
                        _0x12190.sendPacket(new _0x12065.sendPartyAction(1, _0x111EE))
                    } else {
                        _0x12190.selfMsg("Invalid ID.")
                    }
                }
            },
            clear: {
                description: "Clear the chat",
                triggers: ["clear"],
                action: function (_0x111D7) {
                    var _0x11205 = document[_0x111C0[1521]]("chat-active-tab")[0][_0x111C0[1520]]("name");
                    var _0x111EE = document.getElementById("chat-body-" + _0x11205);
                    while (_0x111EE.firstChild != null) {
                        _0x111EE.removeChild(_0x111EE.firstChild)
                    }
                }
            },
            info: {
                description: "Get your current ID",
                triggers: ["info"],
                action: function (_0x111D7) {
                    if (_0x12190.playerId > 0) {
                        _0x12190.selfMsg("Your id is " + _0x12190.playerId)
                    } else {
                        _0x12190.selfMsg("You need to be connected to a server to use this command.")
                    }
                }
            },
            scrimmenu: {
                description: "Show the scrimmage menu",
                triggers: ["scrimmenu"],
                action: function (_0x111D7) {
                    _0x123E6.css("display", _0x123E6.css("display") == "none" ? "block" : "none")
                }
            },
            join: {
                description: "Join a party with a code",
                triggers: ["join", "j"],
                action: function (_0x111D7) {
                    var _0x111EE = _0x111D7[0];
                    if (_0x111EE != null && _0x111EE.length != 0) {
                        _0x12190.sendPacket(new _0x12065.sendPartyJoin(_0x111EE))
                    }
                }
            },
            private: {
                description: "Set the party to private",
                triggers: ["private"],
                action: function (_0x111D7) {
                    _0x12190.sendPacket(new _0x12065.sendPartyAction(4, 1))
                }
            },
            public: {
                description: "Allow players to join the party without an invite",
                triggers: ["public"],
                action: function (_0x111D7) {
                    _0x12190.sendPacket(new _0x12065.sendPartyAction(4, 0))
                }
            },
            reset_chat: {
                description: "Reset chat size",
                triggers: ["resetchat"],
                action: function (_0x111D7) {
                    $("#chat-panel").css("width", "360px");
                    $("#chat-panel").css("height", "250px")
                }
            },
            reset_chat_tabs: {
                description: "Reset chat tab settings",
                triggers: ["resetchattabs"],
                action: function (_0x111D7) {
                    _0x12020._ChatTabs = JSON.parse(JSON.stringify(_0x11752));
                    _0x1135E();
                    _0x12317()
                }
            },
            spectate: {
                description: "Spectate a player",
                triggers: ["spectate", "s"],
                action: function (_0x111D7) {
                    var _0x111EE = parseInt(_0x111D7[0]);
                    if (!isNaN(_0x111EE)) {
                        _0x12190.sendPacket(new _0x12065.sendSpectate(_0x111EE))
                    } else {
                        _0x12190.selfMsg("Invalid ID.")
                    }
                }
            },
            disconnect: {
                description: "Disconnect from the server",
                triggers: ["disconnect"],
                action: function (_0x111D7) {
                    _0x12190.disconnect()
                }
            },
            account: {
                description: "Get Account UID",
                triggers: ["account"],
                action: function (_0x111D7) {
                    if (_0x1281F === null) {
                        _0x12190.selfMsg("You are not logged in.");
                        return
                    };
                    _0x12190.selfMsg("UID: " + _0x1281F.uid)
                }
            },
            block: {
                description: "Block or unblock a player by ID",
                triggers: ["block", "b"],
                action: function (_0x111D7) {
                    var _0x11205 = parseInt(_0x111D7[0]);
                    if (!isNaN(_0x11205)) {
                        var _0x111EE = _0x112D4(_0x11205);
                        _0x12190.selfMsg(_0x111EE)
                    }
                }
            }
        };
        const _0x122D2 = ["4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP"];
        const _0x11A8E = ["Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap"];
        const _0x11B18 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        const _0x11CCD = ["", "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", "", "BACK_SPACE", "TAB", "", "", "CLEAR", "ENTER", "ENTER_SPECIAL", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""];
        var _0x1184F = ["heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "fire", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon", "cat", "cupid", "sword", "shield", "tornado", "radioactive", "rocket", "wave", "letter_a", "letter_b", "letter_c", "letter_d", "letter_e", "letter_f", "letter_g", "letter_h", "letter_i", "letter_j", "letter_k", "letter_l", "letter_m", "letter_n", "letter_o", "letter_p", "letter_q", "letter_r", "letter_s", "letter_t", "letter_u", "letter_v", "letter_w", "letter_x", "letter_y", "letter_z", "number_0", "number_1", "number_2", "number_3", "number_4", "number_5", "number_6", "number_7", "number_8", "number_9"];
        var _0x11866 = [];
        var _0x118AB = null;
        const _0x12276 = [16708096, 13294378, 9356863, 3847498, 42578, 42612, 108702, 43973, 44527, 36821, 29371, 21669, 3027346, 6696593, 9578383, 12393101, 15532172, 15468916, 15537243, 15538497, 15538980, 15951139, 16225309, 16761359];
        const _0x1228D = (_0x12276.length * 100) - 1;
        
        function _0x11375(_0x111C0) {
            return _0x11B18[(_0x111C0 >> 4) & 0x0f] + _0x11B18[_0x111C0 & 0x0f]
        }
        function _0x11963(_0x1121C) {
            if (_0x1121C <= 0) {
                return _0x111C0[1842]
            };
            var _0x111D7 = Math.floor(_0x1121C / 3600);
            var _0x111EE = Math.floor((_0x1121C - (_0x111D7 * 3600)) / 60);
            var _0x11205 = _0x1121C - (_0x111D7 * 3600) - (_0x111EE * 60);
            if (_0x111EE < 10 && _0x111D7 > 0) {
                _0x111EE = "0" + _0x111EE
            };
            if (_0x11205 < 10) {
                _0x11205 = "0" + _0x11205
            };
            return (_0x111D7 > 0 ? _0x111D7 + ":" : "") + _0x111EE + ":" + _0x11205
        }

        function _0x1194C(_0x111EE) {
            var _0x111D7 = _0x111EE.toString().split(".");
            _0x111D7[0] = _0x111D7[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return _0x111D7.join(".")
        }

        function _0x11FAD(_0x1121C) {
            var _0x111EE = _0x1121C.split("");
            for (var _0x11205 = 0; _0x11205 < _0x111EE.length; _0x11205++) {
                var _0x111D7 = _0x111EE[_0x11205];
                if (_0x111D7 == _0x111C0[1843]) {
                    if (_0x11205 + 1 < _0x111EE.length) {
                        _0x111EE[_0x11205 + 1] = _0x111EE[_0x11205 + 1].toUpperCase()
                    };
                    _0x111EE[_0x11205] = " "
                };
                if (_0x11205 == 0) {
                    _0x111EE[_0x11205] = _0x111EE[_0x11205].toUpperCase()
                }
            };
            return _0x111EE.join("")
        }
        function _0x11C2C(_0x11205) {
            if (_0x11205.indexOf("#") === 0) {
                _0x11205 = _0x11205.slice(1)
            };
            if (_0x11205.length === 3) {
                _0x11205 = _0x11205[0] + _0x11205[0] + _0x11205[1] + _0x11205[1] + _0x11205[2] + _0x11205[2]
            };
            if (_0x11205.length !== 6) {
                throw new Error("Invalid HEX color.")
            };
            var _0x1121C = parseInt(_0x11205.slice(0, 2), 16),
                _0x111EE = parseInt(_0x11205.slice(2, 4), 16),
                _0x111D7 = parseInt(_0x11205.slice(4, 6), 16);
            return (_0x1121C * 0.299 + _0x111EE * 0.587 + _0x111D7 * 0.114) > 186 ? "#000000" : "#FFFFFF"
        }

        function _0x119ED(_0x111D7) {
            if (_0x111D7.dataTransfer.items) {
                for (var _0x11205 = 0; _0x11205 < _0x111D7.dataTransfer.items.length; _0x11205++) {
                    if (_0x111D7.dataTransfer.items[_0x11205].kind === "file") {
                        var _0x111EE = _0x111D7.dataTransfer.items[_0x11205].getAsFile();
                        return _0x111EE
                    }
                }
            } else {
                for (var _0x11205 = 0; _0x11205 < _0x111D7[_0x111C0[1847]]["files"].length; _0x11205++) {
                    return _0x111D7[_0x111C0[1847]]["files"][_0x11205]
                }
            }
        }
        function _0x117DC(_0x1121C, _0x111EE, _0x11233) {
            var _0x11205 = new Blob([_0x111EE], {
                type: _0x11233
            });
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(_0x11205, _0x1121C)
            } else {
                var _0x111D7 = document.createElement("a"),
                    _0x1124A = URL.createObjectURL(_0x11205);
                _0x111D7.href = _0x1124A;
                _0x111D7.download = _0x1121C;
                document["body"].appendChild(_0x111D7);
                _0x111D7["click"]();
                setTimeout(function () {
                    document["body"].removeChild(_0x111D7);
                    window.URL.revokeObjectURL(_0x1124A)
                }, 0)
            }
        }

        function _0x11C5A(_0x111D7) {
            return !!_0x111D7.match(_0x11C5A[_0x111C0[1857]])
        }
        _0x11C5A[_0x111C0[1857]] = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
        const _0x121D5 = {
            ALL: 3,
            PARTY: 2,
            SELF: 1,
            NONE: 0
        };
        const _0x11F0C = {
            DEFAULT: 0,
            SHORT: 1
        };
        const _0x126DD = {
            THICK: 9,
            THIN: 2,
            NONE: 0
        };
        const _0x11ABC = {
            ULTRA: 1.0,
            HIGH: 0.8,
            MEDIUM: 0.7,
            LOW: 0.5,
            VERYLOW: 0.25
        };
        const _0x1170D = {
            MAP: 0,
            MODE: 1,
            SIZE: 2,
            STARTMASS: 3,
            LOCK: 4,
            PLAYER_UPDATE: 5,
            PLAYER_LIST: 6,
            VIRUS_DENSITY: 7,
            PUBLIC: 8,
            PASSWORD: 9,
            NAME: 10,
            RESPAWN_DELAY: 11,
            AUTOSPLIT: 12
        };
        const _0x123FD = {
            0: "Spectator",
            1: "Blue",
            2: "Red",
            3: "Green",
            4: "Yellow",
            5: "Purple",
            6: "Orange",
            7: "Pink",
            8: "Brown"
        };
        const _0x11261 = {
            FAILURE: 1,
            SUCCESS: 0
        };
        const _0x1260E = {
            ERROR: -1,
            NOT_LOADED: 0,
            LOADING: 1,
            LOADED: 2
        };
        const _0x11541 = {
            ALL: 0x01,
            PARTY: 0x02,
            WHISPER: 0x04,
            SYSTEM: 0x08,
            ADMIN: 0x10
        };
        const _0x120EF = {
            UNKNOWN: -1,
            ALIVE: 0,
            DEAD: 1,
            SPECTATE: 2
        };
        var _0x116F6 = ["white", "#25f", "#f31", "green", "yellow", "purple", "orange"];

        function _0x11F7F(_0x111EE, _0x11205, _0x111D7) {
            this.font = _0x111EE;
            this.size = _0x11205;
            this.outlineColor = _0x111D7 ? _0x111D7 : "#000"
        }
        const _0x11F96 = {
            0: new _0x11F7F("Verdana", 54),
            1: new _0x11F7F("ampad", 75),
            2: new _0x11F7F("burnstown", 81),
            3: new _0x11F7F("chlorinar", 75),
            4: new _0x11F7F("Facon", 75),
            5: new _0x11F7F("archistico", 75),
            6: new _0x11F7F("breakaway", 81),
            7: new _0x11F7F("conformity", 81),
            8: new _0x11F7F("electroharmonix", 70),
            9: new _0x11F7F("PWJoyeuxNoel", 70),
            10: new _0x11F7F("leckerli-one", 75),
            101: new _0x11F7F("IceCaps", 81, "#00c9ff"),
            102: new _0x11F7F("BrazierFlame", 81, "#e25822")
        };
        const _0x11780 = _0x11F96[0];

        function _0x11A04(_0x111C0) {
            return _0x111C0 > 0 && _0x11F96[_0x111C0] ? _0x11F96[_0x111C0] : _0x11780
        }
        for (var _0x11BE7 in _0x11F96) {
            var _0x118D9 = _0x11F96[_0x11BE7];
            var _0x11FC4 = new FontFaceObserver(_0x118D9.font);
            _0x11FC4["load"](null, 10000).then(() => {}, () => {});
            if (_0x11BE7 > 0 && _0x11BE7 < 64) {
                $("#spNameFont").append('<option value="' + (_0x11BE7) + '" style="font-family:' + _0x118D9.font + '">' + _0x118D9.font.charAt(0).toUpperCase() + _0x118D9.font.slice(1) + "</option>")
            }
        };
        function _0x127C3() {
            if (!_0x1163E.consented) {
                return
            };
            var _0x111EE = localStorage.getItem("version");
            var _0x111D7 = version.split(".");
            if (_0x111EE === null) {
                localStorage.setItem("version", version);
                return
            };
            _0x111EE = _0x111EE.split(".");
            if (_0x111D7[0] != _0x111EE[0] || _0x111D7[1] != _0x111EE[1]) {
                localStorage.setItem("version", version);
                _0x11B5D(_0x11EDE);
                _0x12584($("#popup-changelog"))
            }
        }
        $(window).focus(function () {
            _0x11C43 = true
        });
        $(window).blur(function () {
            _0x11C43 = false
        });
        function _0x124B5() {
            if (_0x11C43) {
                return
            };
            if (!("Notification" in window)) {
                return
            };
            if (Notification.permission === "granted") {
                var _0x111D7 = new Notification("Your match has started.", {
                    icon: "https://gota.io/assets/images/favicon.png"
                })
            }
        }
        var _0x1163E = new _0x11655();
        function _0x11655() {
            this.consented = false;
            this.policyID = "CP_0918_01";
            this.policyLink = "https://gota.io/policies/privacy.html?v=" + this.policyID + "#cookies";
            this.consentOption = $("#cc_acceptCookies");
            this.consentCookie = {
                name: "cookieConsent",
                value: "yes+" + this.policyID,
                exdays: 365 * 2,
                path: "/web"
            };
            this.cookieBanner = {
                banner: $("#cookie-banner"),
                decline: $("#declineCookies"),
                accept: $("#acceptCookies"),
                handlersBound: false
            };
            this.init = function () {
                this.backwardsCompatable();
                this.consentOption.on("change", function (_0x111D7) {
                    _0x1163E.consentHandler($(this).prop("checked"))
                });
                var _0x111D7 = this.getConsentCookie();
                if (_0x111D7 === this.consentCookie["value"]) {
                    this.consentHandler(true);
                    this.showCookieBanner(false)
                } else {
                    this.consentHandler(false);
                    this.showCookieBanner(true)
                }
            };
            this.consentHandler = function (_0x111D7) {
                this.consented = _0x111D7;
                aiptag.consented = _0x111D7;
                this.consentOption.prop("checked", _0x111D7);
                if (!_0x111D7) {
                    this.deleteConsentCookie();
                    if (firebase.auth().currentUser !== null) {
                        firebase.auth().signOut().then(function () {}).catch((_0x111C0) => {})
                    };
                    $("#authed").hide();
                    $("#account-loader").hide();
                    $("#guest").hide();
                    $("#no_cookie_consent").show();
                    this.showCookieBanner(true)
                } else {
                    this.createConsentCookie();
                    this.showCookieBanner(false);
                    _0x11DB3();
                    _0x11E54();
                    $("#no_cookie_consent").hide();
                    if ($("#account-loader").css("display") !== "none") {
                        $("#guest").hide()
                    } else {
                        $("#guest").show()
                    }
                }
            };
            this.showCookieBanner = function (_0x111D7) {
                if (_0x111D7) {
                    if (!this.cookieBanner.handlersBound) {
                        this.bindBannerHandlers();
                        this.cookieBanner.handlersBound = true
                    };
                    this.cookieBanner.banner.slideDown()
                } else {
                    this.cookieBanner.banner.slideUp()
                }
            };
            this.bindBannerHandlers = function () {
                this.cookieBanner.decline.on("click", function (_0x111D7) {
                    _0x1163E.consentHandler(false);
                    _0x1163E.showCookieBanner(false)
                });
                this.cookieBanner.accept.on("click", function (_0x111D7) {
                    _0x1163E.consentHandler(true);
                    _0x1163E.showCookieBanner(false)
                });
                $("#cookie-banner .description").append(' <a href="' + this.policyLink + '" target="_blank">Our Cookie Policy!</a>')
            };
            this.createConsentCookie = function () {
                var _0x111D7 = new Date();
                _0x111D7.setTime(_0x111D7.getTime() + (this.consentCookie.exdays * 24 * 60 * 60 * 1000));
                var _0x111EE = "expires=" + _0x111D7.toUTCString();
                document.cookie = this.consentCookie.name + "=" + this.consentCookie["value"] + ";" + _0x111EE + ";path=" + this.consentCookie.path + ";"
            };
            this.deleteConsentCookie = function () {
                document.cookie = this.consentCookie.name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + this.consentCookie.path + ";"
            };
            this.getConsentCookie = function () {
                var _0x11233 = this.consentCookie.name + "=";
                var _0x11205 = decodeURIComponent(document.cookie);
                var _0x111EE = _0x11205.split(";");
                for (var _0x1121C = 0; _0x1121C < _0x111EE.length; _0x1121C++) {
                    var _0x111D7 = _0x111EE[_0x1121C];
                    while (_0x111D7.charAt(0) == " ") {
                        _0x111D7 = _0x111D7.substring(1)
                    };
                    if (_0x111D7.indexOf(_0x11233) == 0) {
                        return _0x111D7.substring(_0x11233.length, _0x111D7.length)
                    }
                };
                return false
            };
            this.backwardsCompatable = function () {
                var _0x11233 = _0x111C0[1930] + "=";
                var _0x11205 = decodeURIComponent(document.cookie);
                var _0x111EE = _0x11205.split(";");
                var _0x1124A = null;
                for (var _0x1121C = 0; _0x1121C < _0x111EE.length; _0x1121C++) {
                    var _0x111D7 = _0x111EE[_0x1121C];
                    while (_0x111D7.charAt(0) == " ") {
                        _0x111D7 = _0x111D7.substring(1)
                    };
                    if (_0x111D7.indexOf(_0x11233) == 0) {
                        _0x1124A = _0x111D7.substring(_0x11233.length, _0x111D7.length)
                    }
                };
                if (_0x1124A === "allow") {
                    this.createConsentCookie();
                    document.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;"
                } else {
                    document.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;"
                }
            }
        }
        var _0x12698 = new _0x126AF();
        function _0x126AF() {
            this.playCounter = 0;
            this.incrementPlay = function () {
                if (_0x11EB0) {
                    return false
                }
                this.playCounter++;
                if (this.playCounter % 5 == 1) {
                    return true
                } else {
                    return false
                }
            }
        }
        function _0x11BFE() {
            if (typeof aipPlayer != "undefined") {
                aiptag.cmd.display.push(function () {
                    adplayer = new aipPlayer({
                        AD_WIDTH: 960,
                        AD_HEIGHT: 540,
                        AD_CENTERPLAYER: false,
                        LOADING_TEXT: "Advertisement Loading...",
                        PREROLL_ELEM: document.getElementById("preroll"),
                        AIP_COMPLETE: function () {
                            if (!_0x12190.spectate) {
                                _0x12190.play()
                            } else {
                                _0x12190.spec()
                            }
                        }
                    })
                })
            } else {}
        }
        _0x11BFE();
        _0x12681()
    }
    showSideMenu = _0x111EE;
    hideSideMenu = _0x11205;
    (_0x111D7)("gota.io", 1, "");
    version = "3.6.5";
    window.version = version;
    $(_0x1121C)
})()
