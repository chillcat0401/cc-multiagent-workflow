/* ============================================
   DATA
   ============================================ */

/** 12 Zodiac Signs */
var zodiacData = [
  { name: '白羊座', emoji: '♈', date: '3/21 - 4/19', element: '火象', planet: '火星', traits: ['热情', '勇敢', '直率'], luckyNum: 9, luckyColor: '红色' },
  { name: '金牛座', emoji: '♉', date: '4/20 - 5/20', element: '土象', planet: '金星', traits: ['稳重', '耐心', '务实'], luckyNum: 6, luckyColor: '绿色' },
  { name: '双子座', emoji: '♊', date: '5/21 - 6/21', element: '风象', planet: '水星', traits: ['机智', '善变', '好奇'], luckyNum: 5, luckyColor: '黄色' },
  { name: '巨蟹座', emoji: '♋', date: '6/22 - 7/22', element: '水象', planet: '月亮', traits: ['温柔', '敏感', '顾家'], luckyNum: 2, luckyColor: '银色' },
  { name: '狮子座', emoji: '♌', date: '7/23 - 8/22', element: '火象', planet: '太阳', traits: ['自信', '热情', '慷慨'], luckyNum: 1, luckyColor: '金色' },
  { name: '处女座', emoji: '♍', date: '8/23 - 9/22', element: '土象', planet: '水星', traits: ['细心', '谨慎', '完美'], luckyNum: 7, luckyColor: '灰色' },
  { name: '天秤座', emoji: '♎', date: '9/23 - 10/23', element: '风象', planet: '金星', traits: ['优雅', '公正', '和谐'], luckyNum: 3, luckyColor: '粉色' },
  { name: '天蝎座', emoji: '♏', date: '10/24 - 11/22', element: '水象', planet: '冥王星', traits: ['深沉', '神秘', '执着'], luckyNum: 8, luckyColor: '深紫色' },
  { name: '射手座', emoji: '♐', date: '11/23 - 12/21', element: '火象', planet: '木星', traits: ['乐观', '自由', '冒险'], luckyNum: 4, luckyColor: '橙色' },
  { name: '摩羯座', emoji: '♑', date: '12/22 - 1/19', element: '土象', planet: '土星', traits: ['踏实', '坚韧', '野心'], luckyNum: 10, luckyColor: '棕色' },
  { name: '水瓶座', emoji: '♒', date: '1/20 - 2/18', element: '风象', planet: '天王星', traits: ['独立', '创新', '博爱'], luckyNum: 7, luckyColor: '蓝色' },
  { name: '双鱼座', emoji: '♓', date: '2/19 - 3/20', element: '水象', planet: '海王星', traits: ['浪漫', '感性', '梦幻'], luckyNum: 2, luckyColor: '海蓝色' }
];

/** 22 Major Arcana */
var tarotData = [
  { id: 0,  name: '愚者',     emoji: '🃏', upright: '新的开始，冒险精神，跟随内心',         reversed: '鲁莽行事，缺乏方向，犹豫不决' },
  { id: 1,  name: '魔术师',   emoji: '🎩', upright: '创造力，技能，意志力的运用',           reversed: '欺骗，能力不足，滥用权力' },
  { id: 2,  name: '女祭司',   emoji: '📜', upright: '直觉，神秘，内在智慧的觉醒',           reversed: '隐藏的秘密，肤浅认知，情感封闭' },
  { id: 3,  name: '女皇',     emoji: '👑', upright: '丰盈富足，母性光辉，自然和谐之美',     reversed: '依赖他人，创造力受阻，情感枯竭' },
  { id: 4,  name: '皇帝',     emoji: '🏰', upright: '权威与稳定，卓越领导力，秩序井然',     reversed: '专制独断，固执己见，缺乏自律' },
  { id: 5,  name: '教皇',     emoji: '⛪', upright: '传统智慧，精神指引，信仰的力量',       reversed: '挑战传统，盲目追随，教条主义' },
  { id: 6,  name: '恋人',     emoji: '💕', upright: '真挚爱情，和谐关系，重要的抉择',       reversed: '分离之苦，背叛与欺骗，错误决定' },
  { id: 7,  name: '战车',     emoji: '⚔️', upright: '胜利在望，坚定决心，掌控全局',         reversed: '失控混乱，遭遇挫折，意气用事' },
  { id: 8,  name: '力量',     emoji: '🦁', upright: '以柔克刚，坚韧勇气，内在的力量',       reversed: '软弱无力，自我怀疑，情绪失控' },
  { id: 9,  name: '隐者',     emoji: '🏮', upright: '内省深思，寻求真理，独处的智慧',       reversed: '孤立封闭，逃避现实，偏执己见' },
  { id: 10, name: '命运之轮', emoji: '🎡', upright: '命运转机，时来运转，顺应天道',         reversed: '厄运连连，失去控制，停滞不前' },
  { id: 11, name: '正义',     emoji: '⚖️', upright: '公正裁决，真相大白，因果报应',         reversed: '不公待遇，逃避责任，偏见误判' },
  { id: 12, name: '倒吊人',   emoji: '🙃', upright: '换个视角，甘愿牺牲，静待时机',         reversed: '固执不变，无谓牺牲，深陷停滞' },
  { id: 13, name: '死神',     emoji: '💀', upright: '结束即新生，转变之时，凤凰涅槃',       reversed: '恐惧改变，沉溺过往，停滞腐朽' },
  { id: 14, name: '节制',     emoji: '🌊', upright: '平衡调和，中庸之道，耐心等待',         reversed: '极端失衡，过度放纵，缺乏节制' },
  { id: 15, name: '恶魔',     emoji: '😈', upright: '欲望束缚，物质诱惑，沉沦迷途',         reversed: '挣脱束缚，觉醒重生，重获自由' },
  { id: 16, name: '塔',       emoji: '🗼', upright: '突如崩塌，彻底颠覆，启示降临',         reversed: '侥幸逃脱，勉强维持，拒绝改变' },
  { id: 17, name: '星星',     emoji: '⭐', upright: '希望之光，心灵疗愈，灵感闪现',         reversed: '绝望失落，信心崩塌，消极沉沦' },
  { id: 18, name: '月亮',     emoji: '🌙', upright: '幻象迷雾，深层恐惧，潜意识的暗示',     reversed: '真相浮现，克服恐惧，拨云见日' },
  { id: 19, name: '太阳',     emoji: '☀️', upright: '喜悦洋溢，成功辉煌，活力四射',         reversed: '暂时阴霾，延迟的快乐，仍需等待' },
  { id: 20, name: '审判',     emoji: '📯', upright: '觉醒召唤，灵魂重生，回应使命',         reversed: '逃避召唤，内心愧疚，自我怀疑' },
  { id: 21, name: '世界',     emoji: '🌍', upright: '圆满完成，功德圆满，至高成就',         reversed: '功亏一篑，拖延未决，欠缺圆满' }
];

/** 24 Daily Horoscope Fortunes */
var horoscopePool = [
  '今天适合静心思考，灵感会在不经意间降临。',
  '贵人运旺盛，有机会结识对你事业有帮助的人。',
  '今日宜保持低调，默默努力会收获意外之喜。',
  '感情方面温暖甜蜜，适合与亲近的人共度时光。',
  '今天可能会遇到一个小挑战，但你有足够的能力应对。',
  '财运平稳上升，适合做一些长期的财务规划。',
  '今天你的创造力特别强，不妨尝试新的事物。',
  '注意休息调养，身体是承载一切梦想的基础。',
  '今天适合与老友联系，一段旧情谊可能带来新机会。',
  '工作上可能会有新的突破口，保持敏锐的观察力。',
  '今天的你魅力四射，适合参加轻松的社交活动。',
  '小心口舌是非，说话前多思考一下会让事情更顺利。',
  '今日幸运方位在东南，不妨朝这个方向散散步。',
  '今天适合整理和清理，断舍离会带来好心情。',
  '可能会收到一个令人振奋的好消息，敬请期待。',
  '今天适合学习新知识，记忆力与理解力都在最佳状态。',
  '注意饮食健康，今天肠胃可能比较敏感。',
  '今天你的直觉特别准确，相信自己的第一感觉吧。',
  '适合做一些短期计划，按部就班就能顺利达成目标。',
  '今天的好运色是紫色，穿戴紫色饰品会为你加分。',
  '适合表达感恩之心，温暖的能量会回流到你身上。',
  '可能会遇到一位久违的人，带来意想不到的惊喜与感动。',
  '今天动手能力很强，适合完成一些手工或创作类的工作。',
  '保持开放的心态，今天可能有意外的转折带来好的结果。'
];


/* ============================================
   DOM REFERENCES
   ============================================ */
var sectionAstrology = document.getElementById('section-astrology');
var sectionTarot     = document.getElementById('section-tarot');
var zodiacGrid       = document.getElementById('zodiacGrid');
var tarotSpread      = document.getElementById('tarotSpread');
var tabBtns          = document.querySelectorAll('.tab-btn');
var btnSingleDraw    = document.getElementById('btnSingleDraw');
var btnThreeDraw     = document.getElementById('btnThreeDraw');
var btnReset         = document.getElementById('btnReset');
var modalOverlay     = document.getElementById('modalOverlay');
var modalCard        = document.getElementById('modalCard');
var modalClose       = document.getElementById('modalClose');
var modalContent     = document.getElementById('modalContent');

/** Current state */
var currentTab = 'astrology';
var tarotDrawn = false;
var highlightedSignIndex = -1;

/** Fisher-Yates shuffle helper */
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

/** Date-based daily horoscope */
function getDailyHoroscope(signIndex) {
  var today = new Date();
  var seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate() + signIndex;
  var index = seed % horoscopePool.length;
  return horoscopePool[index];
}

/** Determine zodiac sign from month and day */
function getZodiacSign(month, day) {
  var date = month * 100 + day;
  if (date >= 321 && date <= 419) return 0;   // 白羊座
  if (date >= 420 && date <= 520) return 1;   // 金牛座
  if (date >= 521 && date <= 621) return 2;   // 双子座
  if (date >= 622 && date <= 722) return 3;   // 巨蟹座
  if (date >= 723 && date <= 822) return 4;   // 狮子座
  if (date >= 823 && date <= 922) return 5;   // 处女座
  if (date >= 923 && date <= 1023) return 6;  // 天秤座
  if (date >= 1024 && date <= 1122) return 7; // 天蝎座
  if (date >= 1123 && date <= 1221) return 8; // 射手座
  if (date >= 1222 || date <= 119) return 9;  // 摩羯座
  if (date >= 120 && date <= 218) return 10;  // 水瓶座
  if (date >= 219 && date <= 320) return 11;  // 双鱼座
  return -1;
}

/** Save tarot reading to localStorage (max 20 entries) */
function saveReadingToHistory(cardsData) {
  try {
    if (typeof localStorage === 'undefined') return;
    var history = [];
    var stored = localStorage.getItem('tarotHistory');
    if (stored) {
      history = JSON.parse(stored);
    }
    history.unshift({
      timestamp: Date.now(),
      cards: cardsData
    });
    // Max 20 entries
    if (history.length > 20) {
      history = history.slice(0, 20);
    }
    localStorage.setItem('tarotHistory', JSON.stringify(history));
  } catch (e) {
    // Silently skip if localStorage unavailable
  }
}

/** Load tarot reading history from localStorage */
function loadReadingHistory() {
  try {
    if (typeof localStorage === 'undefined') return [];
    var stored = localStorage.getItem('tarotHistory');
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}

/** Render history list */
function renderHistoryList() {
  var historyArea = document.getElementById('tarotHistoryArea');
  if (!historyArea) return;
  var history = loadReadingHistory();
  var list = historyArea.querySelector('.history-list');
  if (!list) return;

  list.innerHTML = '';
  if (history.length === 0) {
    list.innerHTML = '<p class="history-empty">暂无历史记录</p>';
    return;
  }

  history.forEach(function (entry, entryIdx) {
    var d = new Date(entry.timestamp);
    var dateStr = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' +
                  String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
    var cardNames = entry.cards.map(function (c) { return c.name; }).join('、');

    var li = document.createElement('li');
    li.className = 'history-entry';

    var header = document.createElement('div');
    header.className = 'history-entry-header';
    header.innerHTML =
      '<span class="history-entry-date">' + dateStr + '</span>' +
      '<span class="history-entry-cards">' + cardNames + '</span>';

    var detail = document.createElement('div');
    detail.className = 'history-entry-detail';

    entry.cards.forEach(function (card) {
      var orientClass = card.isUpright ? 'upright' : 'reversed';
      var orientText = card.isUpright ? '正位' : '逆位';
      detail.innerHTML +=
        '<div class="history-detail-card">' +
          '<p class="history-detail-name">' + card.name + '</p>' +
          '<span class="history-detail-orientation ' + orientClass + '">' + orientText + '</span>' +
          '<p class="history-detail-meaning">' + card.meaning + '</p>' +
        '</div>';
    });

    li.appendChild(header);
    li.appendChild(detail);

    li.addEventListener('click', function () {
      if (li.classList.contains('expanded')) {
        li.classList.remove('expanded');
      } else {
        li.classList.add('expanded');
      }
    });

    list.appendChild(li);
  });
}

/** Toggle history visibility */
function toggleHistory() {
  var historyArea = document.getElementById('tarotHistoryArea');
  if (!historyArea) return;
  if (historyArea.style.display === 'none' || historyArea.style.display === '') {
    historyArea.style.display = 'block';
    renderHistoryList();
    var toggleBtn = document.getElementById('btnHistoryToggle');
    if (toggleBtn) toggleBtn.textContent = '收起历史';
  } else {
    historyArea.style.display = 'none';
    var toggleBtn = document.getElementById('btnHistoryToggle');
    if (toggleBtn) toggleBtn.textContent = '历史';
  }
}

/** Show a brief toast message */
function showToast(message) {
  var toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('active');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(function () {
    toast.classList.remove('active');
  }, 1800);
}

/** Attempt to share text. Falls back to clipboard + toast. */
function shareContent(text) {
  if (navigator.share) {
    navigator.share({ text: text }).catch(function () {});
  } else {
    // Clipboard fallback
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast('已复制');
      }).catch(function () {
        showToast('分享失败');
      });
    } else {
      // Legacy fallback
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast('已复制');
      } catch (e) {
        showToast('分享失败');
      }
      document.body.removeChild(ta);
    }
  }
}

/** DOM reference for birth date input (set after DOM ready) */
var birthDateInput = null;


/* ============================================
   INIT
   ============================================ */
function init() {
  birthDateInput = document.getElementById('birthDateInput');
  renderZodiacGrid();
  renderTarotFan();
  bindEvents();
}

function bindEvents() {
  // Tab switching
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      switchTab(btn.getAttribute('data-tab'));
    });
  });

  // Modal close
  modalClose.addEventListener('click', closeZodiacModal);
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
      closeZodiacModal();
    }
  });

  // Escape key closes modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeZodiacModal();
    }
  });

  // Birth date input
  if (birthDateInput) {
    birthDateInput.addEventListener('change', function () {
      var val = birthDateInput.value;
      if (!val) {
        clearHighlightedSign();
        return;
      }
      var parts = val.split('-');
      var month = parseInt(parts[1], 10);
      var day = parseInt(parts[2], 10);
      var signIndex = getZodiacSign(month, day);
      if (signIndex >= 0) {
        highlightZodiacCard(signIndex);
      }
    });
  }

  // History toggle button
  var btnHistory = document.getElementById('btnHistoryToggle');
  if (btnHistory) {
    btnHistory.addEventListener('click', toggleHistory);
  }

  // Tarot draw buttons
  btnSingleDraw.addEventListener('click', drawSingleCard);
  btnThreeDraw.addEventListener('click', drawThreeCards);
  btnReset.addEventListener('click', resetTarot);
}


/* ============================================
   TAB SWITCHING
   ============================================ */
function switchTab(tab) {
  if (currentTab === tab) return;
  currentTab = tab;

  // Update tab buttons
  tabBtns.forEach(function (btn) {
    if (btn.getAttribute('data-tab') === tab) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  // Show/hide sections
  if (tab === 'astrology') {
    sectionAstrology.classList.add('active');
    sectionTarot.classList.remove('active');
  } else {
    sectionAstrology.classList.remove('active');
    sectionTarot.classList.add('active');
  }

  // Close modal if open when switching tabs
  closeZodiacModal();
}


/* ============================================
   ZODIAC GRID
   ============================================ */
function renderZodiacGrid() {
  zodiacGrid.innerHTML = '';

  zodiacData.forEach(function (sign, i) {
    var card = document.createElement('div');
    card.className = 'zodiac-card';
    card.style.animationDelay = (i * 0.12) + 's';

    var emoji = document.createElement('span');
    emoji.className = 'zodiac-emoji';
    emoji.textContent = sign.emoji;

    var name = document.createElement('span');
    name.className = 'zodiac-name';
    name.textContent = sign.name;

    var yourLabel = document.createElement('span');
    yourLabel.className = 'your-sign-label';
    yourLabel.textContent = '你的星座';

    card.appendChild(emoji);
    card.appendChild(name);
    card.appendChild(yourLabel);

    (function (s) {
      card.addEventListener('click', function () {
        openZodiacModal(s);
      });
    })(sign);

    zodiacGrid.appendChild(card);
  });
}

function highlightZodiacCard(signIndex) {
  clearHighlightedSign();
  highlightedSignIndex = signIndex;
  var cards = zodiacGrid.querySelectorAll('.zodiac-card');
  if (cards[signIndex]) {
    cards[signIndex].classList.add('highlighted');
    cards[signIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function clearHighlightedSign() {
  if (highlightedSignIndex >= 0) {
    var cards = zodiacGrid.querySelectorAll('.zodiac-card');
    if (cards[highlightedSignIndex]) {
      cards[highlightedSignIndex].classList.remove('highlighted');
    }
  }
  highlightedSignIndex = -1;
}


/* ============================================
   ZODIAC MODAL
   ============================================ */
function openZodiacModal(sign) {
  // Find sign index for date-based horoscope
  var signIndex = -1;
  for (var i = 0; i < zodiacData.length; i++) {
    if (zodiacData[i].name === sign.name) {
      signIndex = i;
      break;
    }
  }
  var horoscope = getDailyHoroscope(signIndex);

  var traitsHtml = sign.traits.map(function (t) {
    return '<span class="modal-trait-tag">' + t + '</span>';
  }).join('');

  var shareText = '✨ 今日' + sign.name + '运势：' + horoscope;

  modalContent.innerHTML =
    '<div class="modal-zodiac-emoji">' + sign.emoji + '</div>' +
    '<h2 class="modal-zodiac-name" id="modalTitle">' + sign.name + '</h2>' +
    '<p class="modal-zodiac-date">' + sign.date + '</p>' +
    '<div class="modal-info-row">' +
      '<div class="modal-info-item">' +
        '<p class="modal-info-label">元素</p>' +
        '<p class="modal-info-value">' + sign.element + '</p>' +
      '</div>' +
      '<div class="modal-info-item">' +
        '<p class="modal-info-label">守护星</p>' +
        '<p class="modal-info-value">' + sign.planet + '</p>' +
      '</div>' +
    '</div>' +
    '<div class="modal-traits">' + traitsHtml + '</div>' +
    '<div class="modal-lucky-row">' +
      '<div class="modal-lucky-item">' +
        '<p class="modal-lucky-label">幸运数字</p>' +
        '<p class="modal-lucky-value">' + sign.luckyNum + '</p>' +
      '</div>' +
      '<div class="modal-lucky-item">' +
        '<p class="modal-lucky-label">幸运颜色</p>' +
        '<p class="modal-lucky-value">' + sign.luckyColor + '</p>' +
      '</div>' +
    '</div>' +
    '<div class="modal-divider"></div>' +
    '<p class="modal-horoscope-title">今日运势</p>' +
    '<p class="modal-horoscope-text">' + horoscope + '</p>' +
    '<button class="btn-share" id="btnShareZodiac">分享</button>';

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Bind share button
  var btnShare = document.getElementById('btnShareZodiac');
  if (btnShare) {
    btnShare.addEventListener('click', function () {
      shareContent(shareText);
    });
  }
}

function closeZodiacModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}


/* ============================================
   TAROT FAN (decorative spread of card backs)
   ============================================ */
function renderTarotFan() {
  tarotSpread.innerHTML = '';
  btnReset.style.display = 'none';
  btnSingleDraw.style.display = '';
  btnThreeDraw.style.display = '';

  var rotations = [-18, -10, -2, 5, 12];
  var offsets = [-95, -42, 5, 44, 88];

  for (var i = 0; i < 5; i++) {
    var card = document.createElement('div');
    card.className = 'tarot-fan-card';
    card.style.transform = 'rotate(' + rotations[i] + 'deg) translateX(' + offsets[i] + 'px)';
    card.style.zIndex = (i === 2 ? 3 : (i === 1 || i === 3 ? 2 : 1));

    var back = document.createElement('div');
    back.className = 'card-back';
    card.appendChild(back);

    tarotSpread.appendChild(card);
  }

  // DOM rebuild complete, safe to allow draws
  tarotDrawn = false;
}


/* ============================================
   SINGLE CARD DRAW
   ============================================ */
function drawSingleCard() {
  if (tarotDrawn) return;

  var card = tarotData[Math.floor(Math.random() * tarotData.length)];
  var isUpright = Math.random() < 0.5;

  tarotDrawn = true;

  // Clear fan
  tarotSpread.innerHTML = '';
  btnSingleDraw.style.display = 'none';
  btnThreeDraw.style.display = 'none';

  // Create result area
  var resultArea = document.createElement('div');
  resultArea.className = 'tarot-single-result';

  // Flip container
  var flipContainer = document.createElement('div');
  flipContainer.className = 'flip-container single-card-container';

  var flipInner = document.createElement('div');
  flipInner.className = 'flip-inner';

  // Front (card back)
  var flipFront = document.createElement('div');
  flipFront.className = 'flip-front';

  var frontBack = document.createElement('div');
  frontBack.className = 'card-back';
  flipFront.appendChild(frontBack);

  // Back (card face)
  var flipBack = document.createElement('div');
  flipBack.className = 'flip-back';
  flipBack.innerHTML =
    '<span style="font-size:28px">' + card.emoji + '</span>' +
    '<span style="font-size:12px;font-weight:600;margin-top:2px">' + card.name + '</span>';

  flipInner.appendChild(flipFront);
  flipInner.appendChild(flipBack);
  flipContainer.appendChild(flipInner);
  resultArea.appendChild(flipContainer);

  // Card info
  var infoArea = document.createElement('div');
  infoArea.className = 'single-card-meaning';

  var orientationClass = isUpright ? 'upright' : 'reversed';
  var orientationText = isUpright ? '正位' : '逆位';
  var activeMeaning = isUpright ? card.upright : card.reversed;
  var otherMeaning = isUpright ? card.reversed : card.upright;
  var otherLabel = isUpright ? '逆位' : '正位';

  var shareText = '🃏 我的塔罗指引：' + card.name + '（' + orientationText + '）— ' + activeMeaning;

  infoArea.innerHTML =
    '<h3 class="card-name">' + card.name + '</h3>' +
    '<span class="drawn-card-orientation ' + orientationClass + '">' + orientationText + '</span>' +
    '<p class="meaning-text" style="margin-top:8px">' + activeMeaning + '</p>' +
    '<p class="meaning-other">' + otherLabel + '：' + otherMeaning + '</p>' +
    '<button class="btn-share btn-share-small" id="btnShareSingle">分享</button>';

  resultArea.appendChild(infoArea);
  tarotSpread.appendChild(resultArea);

  // Flip after a short delay
  setTimeout(function () {
    flipInner.classList.add('flipped');
  }, 350);

  btnReset.style.display = 'block';

  // Bind share button
  var btnShare = document.getElementById('btnShareSingle');
  if (btnShare) {
    btnShare.addEventListener('click', function () {
      shareContent(shareText);
    });
  }

  // Add AI reading interaction
  infoArea.insertAdjacentHTML('beforeend', createAIInteractionHTML('s'));
  var btnAISingle = document.getElementById('btnAI-s');
  var resultAISingle = document.getElementById('aiResult-s');
  var questionAISingle = document.getElementById('aiQuestion-s');
  (function (cn, ce, iu) {
    if (btnAISingle && resultAISingle) {
      btnAISingle.addEventListener('click', function () {
        requestAIReading(cn, ce, iu, '', btnAISingle, resultAISingle, questionAISingle);
      });
    }
  })(card.name, card.emoji, isUpright);

  // Save to localStorage history
  saveReadingToHistory([{
    name: card.name,
    isUpright: isUpright,
    meaning: activeMeaning
  }]);
}


/* ============================================
   THREE-CARD SPREAD
   ============================================ */
function drawThreeCards() {
  if (tarotDrawn) return;

  // Pick 3 unique cards (Fisher-Yates shuffle)
  var shuffled = shuffle(tarotData);
  var cards = shuffled.slice(0, 3);
  var orientations = [Math.random() < 0.5, Math.random() < 0.5, Math.random() < 0.5];
  var labels = ['过去', '现在', '未来'];

  tarotDrawn = true;

  // Clear fan
  tarotSpread.innerHTML = '';
  btnSingleDraw.style.display = 'none';
  btnThreeDraw.style.display = 'none';

  var row = document.createElement('div');
  row.className = 'tarot-drawn-row';

  var flipInners = [];

  for (var i = 0; i < 3; i++) {
    (function (card, isUpright, label, idx) {
      var wrapper = document.createElement('div');
      wrapper.className = 'drawn-card-wrapper';

      // Label
      var labelEl = document.createElement('span');
      labelEl.className = 'drawn-label';
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);

      // Flip container
      var flipContainer = document.createElement('div');
      flipContainer.className = 'flip-container';
      flipContainer.style.width = '72px';
      flipContainer.style.height = '112px';

      var flipInner = document.createElement('div');
      flipInner.className = 'flip-inner';

      // Front (card back)
      var flipFront = document.createElement('div');
      flipFront.className = 'flip-front';
      var frontBack = document.createElement('div');
      frontBack.className = 'card-back';
      flipFront.appendChild(frontBack);

      // Back (card face)
      var flipBack = document.createElement('div');
      flipBack.className = 'flip-back';
      flipBack.innerHTML =
        '<span style="font-size:22px">' + card.emoji + '</span>' +
        '<span style="font-size:10px;font-weight:600;margin-top:1px">' + card.name + '</span>';

      flipInner.appendChild(flipFront);
      flipInner.appendChild(flipBack);
      flipContainer.appendChild(flipInner);
      wrapper.appendChild(flipContainer);

      // Info below card
      var info = document.createElement('div');
      info.className = 'drawn-card-info';
      var orientationClass = isUpright ? 'upright' : 'reversed';
      var orientationText = isUpright ? '正位' : '逆位';
      var activeMeaning = isUpright ? card.upright : card.reversed;
      var otherMeaning = isUpright ? card.reversed : card.upright;
      var otherLabelText = isUpright ? '逆位' : '正位';

      var shareText = '🃏 我的塔罗指引：' + card.name + '（' + orientationText + '）— ' + activeMeaning;

      info.innerHTML =
        '<p class="drawn-card-name">' + card.name + '</p>' +
        '<span class="drawn-card-orientation ' + orientationClass + '">' + orientationText + '</span>' +
        '<p class="drawn-card-meaning">' + activeMeaning + '</p>' +
        '<p class="drawn-card-meaning other">' + otherLabelText + '：' + otherMeaning + '</p>' +
        '<button class="btn-share btn-share-small" data-share-text="' + shareText.replace(/"/g, '&quot;') + '">分享</button>';

      wrapper.appendChild(info);

      // Add AI reading interaction for this card
      info.insertAdjacentHTML('beforeend', createAIInteractionHTML(String(idx)));
      var btnAI = document.getElementById('btnAI-' + idx);
      var resultAI = document.getElementById('aiResult-' + idx);
      var questionAI = document.getElementById('aiQuestion-' + idx);
      if (btnAI && resultAI) {
        btnAI.addEventListener('click', function () {
          requestAIReading(card.name, card.emoji, isUpright, label, btnAI, resultAI, questionAI);
        });
      }

      row.appendChild(wrapper);
      flipInners.push({ el: flipInner, delay: 300 + idx * 350 });
    })(cards[i], orientations[i], labels[i], i);
  }

  tarotSpread.appendChild(row);

  // Staggered flip
  flipInners.forEach(function (item) {
    setTimeout(function () {
      item.el.classList.add('flipped');
    }, item.delay);
  });

  btnReset.style.display = 'block';

  // Bind share buttons on three-card results
  setTimeout(function () {
    var shareBtns = tarotSpread.querySelectorAll('.btn-share-small[data-share-text]');
    shareBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        shareContent(btn.getAttribute('data-share-text'));
      });
    });
  }, 100);

  // Save to localStorage history
  var historyCards = [];
  for (var h = 0; h < 3; h++) {
    historyCards.push({
      name: cards[h].name,
      isUpright: orientations[h],
      meaning: orientations[h] ? cards[h].upright : cards[h].reversed
    });
  }
  saveReadingToHistory(historyCards);
}


/* ============================================
   RESET TAROT
   ============================================ */
function resetTarot() {
  // Prevent draw during reset
  tarotDrawn = true;
  renderTarotFan();
  // renderTarotFan sets tarotDrawn = false after DOM rebuild
}


/* ============================================
   AI TAROT READING
   ============================================ */

/** Build AI interaction HTML (question input + button + result container) */
function createAIInteractionHTML(suffix) {
  var s = suffix || 's';
  return '<div class="ai-interaction-area">' +
    '<input type="text" class="ai-question-input" id="aiQuestion-' + s + '" placeholder="想问什么？（可选）" maxlength="100">' +
    '<button class="btn-ai-reading" id="btnAI-' + s + '"><span class="ai-sparkle">✨</span> AI 深度解读</button>' +
    '<div class="ai-reading-card" id="aiResult-' + s + '" style="display:none;"></div>' +
    '</div>';
}

/** Escape HTML entities */
function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/** Request AI-powered deep tarot reading from backend */
function requestAIReading(cardName, cardEmoji, isUpright, position, buttonEl, resultEl, questionEl) {
  // Prevent double-click
  if (buttonEl.disabled) return;

  var question = questionEl ? questionEl.value.trim() : '';
  var orientation = isUpright ? '正位' : '逆位';

  // Disable button and show loading text
  buttonEl.disabled = true;
  buttonEl.innerHTML = '解读中...';

  // Show result container with loading skeleton
  resultEl.style.display = 'block';
  resultEl.classList.remove('ai-reading-error');
  resultEl.innerHTML = '' +
    '<div class="ai-reading-loading">' +
      '<div class="shimmer-bar" style="width:100%"></div>' +
      '<div class="shimmer-bar" style="width:75%"></div>' +
      '<div class="shimmer-bar" style="width:55%"></div>' +
    '</div>';

  // Scroll result into view
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // 15-second timeout via AbortController
  var controller = new AbortController();
  var timeoutId = setTimeout(function () { controller.abort(); }, 15000);

  fetch('http://localhost:8081/api/tarot-reading', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      card_name: cardName,
      card_emoji: cardEmoji,
      orientation: orientation,
      position: position || '',
      question: question
    }),
    signal: controller.signal
  })
    .then(function (response) { return response.json(); })
    .then(function (data) {
      clearTimeout(timeoutId);
      if (data.reading) {
        resultEl.classList.remove('ai-reading-error');
        resultEl.innerHTML = '<div class="ai-reading-content">' + escapeHtml(data.reading) + '</div>';
        // Re-enable button so user can request again
        buttonEl.disabled = false;
        buttonEl.innerHTML = '<span class="ai-sparkle">✨</span> AI 深度解读';
      } else if (data.error) {
        resultEl.classList.add('ai-reading-error');
        resultEl.innerHTML = '<div class="ai-reading-error">' + escapeHtml(data.error) + '</div>';
        buttonEl.disabled = false;
        buttonEl.innerHTML = '<span class="ai-sparkle">✨</span> AI 深度解读';
      }
    })
    .catch(function (err) {
      clearTimeout(timeoutId);
      resultEl.classList.add('ai-reading-error');
      if (err.name === 'AbortError') {
        resultEl.innerHTML = '<div class="ai-reading-error">AI 解读超时，请重试</div>';
      } else if (err.message && (err.message.indexOf('Failed to fetch') !== -1 || err.message.indexOf('NetworkError') !== -1)) {
        resultEl.innerHTML = '<div class="ai-reading-error">AI 解读服务未启动，请运行 python server.py</div>';
      } else {
        resultEl.innerHTML = '<div class="ai-reading-error">AI 解读暂不可用，请稍后重试</div>';
      }
      // Re-enable button so user can retry
      buttonEl.disabled = false;
      buttonEl.innerHTML = '<span class="ai-sparkle">✨</span> AI 深度解读';
    });
}


/* ============================================
   START
   ============================================ */
document.addEventListener('DOMContentLoaded', init);
