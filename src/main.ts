/**
 * Civic Pulse v2.0 - 2026 Election Governance Dashboard
 * Built for Promptwars Hackathon - Powered by Google Antigravity
 * Author: Kumar3421 & Antigravity AI
 * Features: Liquid Glass UI, CivicBot 2.0, WCAG 2.1 Compliance
 */
import './style.css'
import { countryData } from './electionData'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let currentCountry = 'india'
let currentLang = 'en'
let animationsEnabled = true

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  updateLanguageDropdown()
  renderContent()
  setupSettings()
  setupBot()
  setupMagneticButtons()
  registerServiceWorker()

  // Fade-in lazy images when loaded
  const markLoaded = () => {
    document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach(img => {
      if (img.classList.contains('loaded')) return
      if (img.complete && img.naturalWidth > 0) { img.classList.add('loaded'); return }
      img.addEventListener('load', () => img.classList.add('loaded'), { once: true })
      img.addEventListener('error', () => img.classList.add('loaded'), { once: true })
    })
  }
  const observer = new MutationObserver(() => markLoaded())
  observer.observe(document.body, { childList: true, subtree: true })
  // Safety: force all images visible after 2s
  setTimeout(() => {
    document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach(img => img.classList.add('loaded'))
  }, 2000)
})

// --- Update Language Options ---
function updateLanguageDropdown() {
  const langSelector = document.getElementById('lang-selector') as HTMLSelectElement
  if (!langSelector) return
  const country = countryData[currentCountry]
  langSelector.innerHTML = ''
  Object.entries(country.languages).forEach(([code, lang]) => {
    const option = document.createElement('option')
    option.value = code
    option.textContent = lang.label
    langSelector.appendChild(option)
  })
  if (!country.languages[currentLang]) {
    currentLang = Object.keys(country.languages)[0]
  }
  langSelector.value = currentLang
}

// --- Render Content ---
function renderContent() {
  const countryBase = countryData[currentCountry]
  const data = countryBase.languages[currentLang]
  const container = document.getElementById('timeline-container')
  const guideGrid = document.getElementById('guide-grid')
  const liveDashboard = document.getElementById('live-dashboard')
  
  if (!container || !guideGrid || !liveDashboard) return
  
  // Update SEO & Lang
  document.documentElement.lang = currentLang
  document.title = currentLang === 'hi' ? 'सिविक पल्स | इंटरएक्टिव चुनाव गाइड' : 'Civic Pulse | Interactive Election Guide'
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) {
    metaDesc.setAttribute('content', currentLang === 'hi' 
      ? 'एक इंटरएक्टिव, प्रीमियम सहायक जो उपयोगकर्ताओं को चुनाव प्रक्रिया, समयरेखा और चरणों को समझने में मदद करता है।'
      : 'An interactive, premium assistant helping users understand the election process, timelines, and steps.')
  }

  // Always Show Live Dashboard & Leadership
  liveDashboard.classList.remove('hidden')
  renderLiveStats()
  renderLeadership()
  renderReports()

  // Update Voting Site Link
  const votingLink = document.querySelector('.btn-resource-vote') as HTMLAnchorElement
  if (votingLink) {
    votingLink.href = countryBase.votingSite
  }

  // Localize UI Elements
  const setT = (id: string, text: string) => {
    const el = document.getElementById(id)
    if (el) el.textContent = text
  }

  // Hero
  const titleEl = document.querySelector('.hero-content h1')
  if (titleEl) titleEl.innerHTML = currentLang === 'hi' ? `<span>${data.ui.hero_title}</span> में मास्टर बनें` : `Master the <span>${data.ui.hero_title}</span>`
  setT('hero-p', data.ui.hero_p)
  
  const btnTEl = document.querySelector('.btn-primary')
  const btnBEl = document.querySelector('.btn-secondary')
  if (btnTEl) btnTEl.textContent = data.ui.btn_timeline
  if (btnBEl) btnBEl.textContent = data.ui.btn_bot

  // Sections
  setT('live-title', data.ui.live_title)
  setT('reports-title', data.ui.reports_title)
  setT('leadership-title', data.ui.leadership_title)
  setT('timeline-title', data.ui.timeline_title)
  setT('guide-title', data.ui.guide_title)
  setT('resources-title', data.ui.resources_title)

  // Nav
  setT('nav-live', data.ui.nav_live)
  setT('nav-reports', data.ui.nav_reports)
  setT('nav-timeline', data.ui.nav_timeline)
  setT('nav-guide', data.ui.nav_guide)

  // Resources
  setT('res-poll-title', data.ui.res_poll_title)
  setT('res-poll-p', data.ui.res_poll_p)
  setT('res-poll-btn', data.ui.res_poll_btn)
  setT('res-reg-title', data.ui.res_reg_title)
  setT('res-reg-p', data.ui.res_reg_p)
  setT('res-reg-btn', data.ui.res_reg_btn)

  // Settings
  setT('settings-title', data.ui.settings_title)
  setT('label-dark', data.ui.settings_dark)
  setT('label-glass', data.ui.settings_glass)
  setT('label-anim', data.ui.settings_anim)

  setT('hero-badge', data.ui.hero_badge)
  setT('footer-text', data.ui.footer_text)
  setT('google-badge', data.ui.google_badge)

  container.innerHTML = ''
  guideGrid.innerHTML = ''

  data.timeline.forEach((item) => {
    const itemEl = document.createElement('div')
    itemEl.className = 'timeline-item'
    itemEl.innerHTML = `
      <div class="timeline-content" id="item-${item.id}">
        <div class="badge">${item.period}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <ul class="item-details hidden">
          ${item.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        <button class="learn-more" data-id="${item.id}">${currentLang === 'hi' ? 'अधिक जानें' : 'Learn More'}</button>
      </div>
      <div class="timeline-dot"></div>
      <div style="width: 45%;"></div>
    `
    container.appendChild(itemEl)

    const card = document.createElement('div')
    card.className = 'guide-card'
    card.innerHTML = `
      <div class="card-icon">${getIconForStep(item.id)}</div>
      <h3>${item.title}</h3>
      <p>${item.description.substring(0, 80)}...</p>
      ${item.id === 5 ? `<button class="btn-primary" style="margin-top:10px" onclick="window.startVvpatSim()">${currentLang === 'hi' ? 'VVPAT सिम्युलेट करें' : 'Simulate VVPAT'}</button>` : ''}
      <button class="btn-card" onclick="scrollToSection('#item-${item.id}')">${currentLang === 'hi' ? 'देखें' : 'View'}</button>
    `
    guideGrid.appendChild(card)
  })

  document.querySelectorAll('.learn-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = (e.target as HTMLElement).getAttribute('data-id')
      const details = document.querySelector(`#item-${id} .item-details`)
      details?.classList.toggle('hidden')
      ScrollTrigger.refresh()
    })
  })

  if (animationsEnabled) initAnimations()
  renderVoterJourney()
  renderPollChecklist()
  renderMap()
}

function renderLiveStats() {
  const container = document.getElementById('live-stats-container')
  if (!container) return
  const liveData = countryData[currentCountry].live
  container.innerHTML = ''
  Object.entries(liveData).forEach(([key, state]: [string, any]) => {
    const card = document.createElement('div')
    card.className = 'state-card'
    card.innerHTML = `
      <h3>${state.name} <span class="turnout-badge">Turnout: ${state.turnout}</span></h3>
      <div class="seat-grid">
        ${Object.entries(state.leads).map(([party, count]) => `
          <div class="party-stat">
            <span class="party-name">${party}</span>
            <span class="party-count" id="count-${key}-${party}">${count}</span>
          </div>
        `).join('')}
      </div>
      <div class="seat-bar-container">
        ${Object.entries(state.leads).map(([party, count]) => {
          const percentage = ((count as number) / state.totalSeats) * 100;
          return `<div class="seat-bar ${party.toLowerCase()}" style="width: ${percentage}%" title="${party}: ${count}"></div>`;
        }).join('')}
      </div>
    `
    container.appendChild(card)
  })
  startLiveSimulation()
}

// Pass image URLs through - they are already correct thumbnail URLs
function toThumb(url: string): string {
  return url
}

// Create an initials fallback if image fails
function initialsFor(name: string): string {
  return name.split(' ').filter(w => w.length > 1).slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

function leaderImg(url: string, name: string, cssClass: string): string {
  const initials = initialsFor(name)
  if (!url) return `<span class="portrait-fallback ${cssClass}" style="display:flex">${initials}</span>`
  const thumb = toThumb(url)
  return `<img src="${thumb}" class="${cssClass}" alt="${name}" loading="lazy" decoding="async" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" referrerpolicy="no-referrer"><span class="portrait-fallback ${cssClass}" style="display:none">${initials}</span>`
}

function renderLeadership() {
  const container = document.getElementById('leadership-container')
  const titleEl = document.getElementById('leadership-title')
  if (!container || !titleEl) return
  const data = countryData[currentCountry].languages[currentLang].leadership
  titleEl.textContent = data.title
  container.innerHTML = ''

  const topLeaders = document.createElement('div')
  topLeaders.className = 'leadership-group'
  
  if (data.president) {
    topLeaders.innerHTML += `
      <div class="leader-card prime" style="cursor: pointer;" onclick="openPartyModal('${data.president.party}')">
        ${leaderImg(data.president.image, data.president.name, 'leader-portrait')}
        <div class="leader-info">
          <span class="leader-role">${data.president.role}</span>
          <h4>${data.president.name}</h4>
          <span class="leader-dept">${data.president.dept}</span>
          <div class="party-badge">${data.president.partyFlag} ${data.president.party}</div>
        </div>
      </div>
    `
  }

  topLeaders.innerHTML += `
    <div class="leader-card prime" style="cursor: pointer;" onclick="openPartyModal('${data.pm.party}')">
      ${leaderImg(data.pm.image, data.pm.name, 'leader-portrait')}
      <div class="leader-info">
        <span class="leader-role">${data.pm.role}</span>
        <h4>${data.pm.name}</h4>
        <span class="leader-dept">${data.pm.dept}</span>
        <div class="party-badge">${data.pm.partyFlag} ${data.pm.party}</div>
      </div>
    </div>
  `
  container.appendChild(topLeaders)

  const cabinetGroup = document.createElement('div')
  cabinetGroup.className = 'leadership-group'
  data.ministers.forEach(m => {
    cabinetGroup.innerHTML += `
      <div class="leader-card" style="cursor: pointer;" onclick="openPartyModal('${m.party}')">
        ${leaderImg(m.image, m.name, 'leader-portrait')}
        <div class="leader-info">
          <span class="leader-role">${m.role}</span>
          <h4>${m.name}</h4>
          <span class="leader-dept">${m.dept}</span>
          <div class="party-badge">${m.partyFlag} ${m.party}</div>
        </div>
      </div>
    `
  })
  container.appendChild(cabinetGroup)

  const stateTitle = document.createElement('h3')
  stateTitle.textContent = data.stateLeadersTitle
  stateTitle.style.marginTop = '40px'
  container.appendChild(stateTitle)

  const stateGroup = document.createElement('div')
  stateGroup.className = 'leadership-group state-slider'
  data.stateLeaders.forEach(s => {
    const deputiesHtml = s.deputies && s.deputies.length > 0
      ? `<div class="deputy-strip">
           <span class="deputy-strip-label">${currentLang === 'hi' ? 'उप-मुख्यमंत्री' : 'Deputy CM'}:</span>
           <div class="deputy-strip-list">
             ${s.deputies.map(dep => `
               <div class="deputy-chip">
                 <img src="${dep.image}" alt="${dep.name}" class="deputy-chip-img" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                 <span class="deputy-chip-fallback" style="display:none">${initialsFor(dep.name)}</span>
                 <span class="deputy-chip-name">${dep.name}</span>
               </div>
             `).join('')}
           </div>
         </div>`
      : '';

    stateGroup.innerHTML += `
      <div class="leader-card state-card-fixed" style="cursor: pointer;" onclick="openStateModal('${s.region}')">
        ${leaderImg(s.image, s.name, 'leader-portrait')}
        <div class="leader-info">
          <span class="leader-role">${s.region}</span>
          <h4>${s.name}</h4>
          <div class="party-badge">${s.partyFlag} ${s.party}</div>
          ${deputiesHtml}
        </div>
      </div>
    `
  })
  
  const sliderControls = document.createElement('div')
  sliderControls.className = 'slider-controls'
  sliderControls.innerHTML = `
    <button class="slider-btn prev">←</button>
    <button class="slider-btn next">→</button>
  `
  
  const sliderWrapper = document.createElement('div')
  sliderWrapper.className = 'slider-wrapper'
  sliderWrapper.appendChild(stateGroup)
  
  container.appendChild(sliderWrapper)
  container.appendChild(sliderControls)

  setupSlider(sliderWrapper, stateGroup)
}

function setupSlider(wrapper: HTMLElement, content: HTMLElement) {
  const prevBtn = wrapper.parentElement?.querySelector('.prev')
  const nextBtn = wrapper.parentElement?.querySelector('.next')
  if (!prevBtn || !nextBtn) return

  let scrollAmount = 0
  const step = 320
  
  nextBtn.addEventListener('click', () => {
    const maxScroll = content.scrollWidth - wrapper.clientWidth
    scrollAmount = Math.min(scrollAmount + step, maxScroll)
    content.style.transform = `translateX(-${scrollAmount}px)`
  })
  
  prevBtn.addEventListener('click', () => {
    scrollAmount = Math.max(scrollAmount - step, 0)
    content.style.transform = `translateX(-${scrollAmount}px)`
  })
}

function renderReports() {
  const container = document.querySelector('.reports-grid')
  if (!container) return
  const reports = countryData[currentCountry].languages[currentLang].reports
  container.innerHTML = ''
  
  reports.forEach(report => {
    const card = document.createElement('div')
    card.className = 'report-card glass-card'
    card.innerHTML = `
      <div class="report-tag">${report.tag}</div>
      <h3>${report.title}</h3>
      <p>${report.content}</p>
      <div class="report-meta">${report.meta}</div>
    `
    container.appendChild(card)
  })
}

let simulationInterval: any = null
function startLiveSimulation() {
  if (simulationInterval) clearInterval(simulationInterval)
  simulationInterval = setInterval(() => {
    const liveData = countryData[currentCountry].live
    Object.entries(liveData).forEach(([stateKey, state]: [string, any]) => {
      let total = 0
      const partyCounts: Record<string, number> = {}
      
      Object.keys(state.leads).forEach(party => {
        const el = document.getElementById(`count-${stateKey}-${party}`)
        if (el) {
          const change = Math.floor(Math.random() * 3) - 1
          const currentCount = parseInt(el.textContent || '0')
          const newCount = Math.max(0, currentCount + change)
          el.textContent = newCount.toString()
          partyCounts[party] = newCount
          total += newCount
          if (change !== 0) gsap.from(el, { scale: 1.2, color: '#38bdf8', duration: 0.3 })
        }
      })

      // Update bars
      Object.entries(partyCounts).forEach(([party, count]) => {
        const bar = document.querySelector(`.state-card:has(#count-${stateKey}-${party}) .seat-bar.${party.toLowerCase()}`) as HTMLElement
        if (bar) {
          const percentage = (count / state.totalSeats) * 100
          bar.style.width = `${percentage}%`
        }
      })
    })
  }, 4000)
}

function getIconForStep(id: number) {
  const icons = ['📝', '🗳️', '🏛️', '📢', '✅', '⚖️', '🇺🇸']
  return icons[id - 1] || '🔹'
}

function setupSettings() {
  const langSelector = document.getElementById('lang-selector') as HTMLSelectElement
  const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement
  const glassToggle = document.getElementById('glass-toggle') as HTMLInputElement
  
  langSelector?.addEventListener('change', () => {
    currentLang = langSelector.value
    renderContent()
  })
  themeToggle?.addEventListener('change', () => {
    document.body.classList.toggle('light-mode', !themeToggle.checked)
  })
  glassToggle?.addEventListener('change', () => {
    document.body.classList.toggle('no-glass', !glassToggle.checked)
  })
  document.getElementById('settings-toggle')?.addEventListener('click', () => {
    document.getElementById('settings-panel')?.classList.toggle('hidden')
  })
}

function initAnimations() {
  gsap.from('.hero-content > *', { 
    y: 60, 
    opacity: 0, 
    duration: 1.2, 
    stagger: 0.2, 
    ease: 'power4.out' 
  })
  
  gsap.from('.glass-card-3d', {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: 'expo.out'
  })

  // Reveal sections on scroll
  const sections = ['#live-dashboard', '#reports', '#leadership', '#timeline', '#guide', '#resources']
  sections.forEach(s => {
    gsap.from(`${s} > *`, {
      scrollTrigger: {
        trigger: s,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    })
  })
}

let botVisible = false
window.toggleCivicBot = () => {
  botVisible = !botVisible
  if (botVisible) {
    gsap.from('.civic-bot-container', { y: 100, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' })
  }
}

function setupBot() {
  const input = document.getElementById('bot-input-field') as HTMLInputElement
  const sendBtn = document.getElementById('send-btn')
  const suggestionsBox = document.getElementById('bot-suggestions')
  const data = countryData[currentCountry].languages[currentLang]

  const renderSuggestions = () => {
    if (!suggestionsBox) return
    const suggestions = ['voter id', 'registration', 'aadhaar', 'nsa', 'lok sabha']
    const extra = currentLang === 'hi' ? 'वोट कैसे दें?' : 'How to Vote?'
    
    suggestionsBox.innerHTML = `
      <div class="suggestion-chip special" data-action="journey">${extra}</div>
      ${suggestions.map(s => `<div class="suggestion-chip" data-query="${s}">${s}</div>`).join('')}
    `
    
    suggestionsBox.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const action = (chip as HTMLElement).getAttribute('data-action')
        const query = (chip as HTMLElement).getAttribute('data-query')
        if (action === 'journey') {
          startJourney()
        } else if (query) {
          input.value = query
          handleSend()
        }
      })
    })
  }

  const handleSend = () => {
    const text = input.value.trim().toLowerCase()
    if (!text) return
    addMessage(input.value, 'user')
    input.value = ''
    
    showThinking()
    
    const reasoningSteps = currentLang === 'hi'
      ? [
          "ECI डेटाबेस से जुड़ रहा हूँ...",
          "निर्वाचन क्षेत्र के आंकड़ों का विश्लेषण कर रहा हूँ...",
          "संवैधानिक प्रावधानों (अनुच्छेद 324) की जाँच कर रहा हूँ...",
          "अंतिम परिणाम तैयार कर रहा हूँ..."
        ]
      : [
          "Connecting to ECI decentralized database...",
          "Analyzing constituency-specific parameters...",
          "Verifying Constitutional provisions (Art. 324)...",
          "Synthesizing final response..."
        ]

    let stepIdx = 0
    const runStep = () => {
      if (stepIdx < reasoningSteps.length) {
        updateThinking(reasoningSteps[stepIdx])
        stepIdx++
        setTimeout(runStep, 800 + Math.random() * 400)
      } else {
        finalizeResponse()
      }
    }

    const finalizeResponse = () => {
      removeThinking()
      let finalResponse = currentLang === 'hi' 
        ? `मुझे इसके बारे में पक्का पता नहीं है। ये पूछने की कोशिश करें: लोक सभा, एनएसए, या किसी राज्य का नाम।`
        : `I'm not quite sure about that. Try asking about: Lok Sabha, NSA, or any State name.`

      // 1. Check Political Knowledge (National)
      const pk = (data as any).politicalKnowledge || {}
      for (const [key, val] of Object.entries(pk)) {
        if (text.includes(key.toLowerCase())) {
          finalResponse = val as string
          break
        }
      }

      // 2. Check FAQ
      for (const [key, val] of Object.entries(data.faq)) {
        if (text.includes(key)) {
          finalResponse = val;
          break;
        }
      }

      // 3. Check State Leadership (Dynamic)
      data.leadership.stateLeaders.forEach((leader: any) => {
        if (text.includes(leader.region.toLowerCase())) {
          const deps = leader.deputies ? leader.deputies.map((d: any) => d.name).join(', ') : (currentLang === 'hi' ? 'कोई नहीं' : 'None')
          finalResponse = currentLang === 'hi'
            ? `${leader.region} के मुख्यमंत्री ${leader.name} हैं। उप-मुख्यमंत्री: ${deps}।`
            : `The Chief Minister of ${leader.region} is ${leader.name}. Deputy CMs: ${deps}.`
        }
      })

      addMessage(finalResponse, 'bot')
      
      // Proactive suggestions based on response
      if (finalResponse.includes('register') || finalResponse.includes('पंजीकरण')) {
        setTimeout(() => addMessage(currentLang === 'hi' ? 'क्या आप पंजीकरण की अंतिम तिथि जानना चाहते हैं?' : 'Would you like to know the registration deadlines?', 'bot'), 1000)
      }
    }

    runStep()
  }

  const startJourney = () => {
    addMessage(currentLang === 'hi' ? 'वोट देने की प्रक्रिया क्या है?' : 'How do I cast my vote?', 'user')
    showThinking()
    setTimeout(() => {
      removeThinking()
      const journey = currentLang === 'hi'
        ? "भारतीय चुनाव में वोट देने के 5 मुख्य चरण हैं। मैंने नीचे 'मतदान यात्रा' अनुभाग को अपडेट कर दिया है। मुख्य चरणों में पंजीकरण, सत्यापन और बूथ पर जाना शामिल है।"
        : "There are 5 main stages to casting your vote in India. I've updated the 'Voter Journey' section below. Key stages include Registration, Verification, and Polling day procedures."
      addMessage(journey, 'bot')
      window.scrollToSection('#voter-journey')
    }, 1500)
  }

  const showThinking = () => {
    const container = document.getElementById('bot-messages')
    if (!container) return
    const thinking = document.createElement('div')
    thinking.className = 'message bot thinking-container'
    thinking.id = 'bot-thinking'
    thinking.innerHTML = `
      <div class="thinking-spinner"></div>
      <span class="thinking-text">${currentLang === 'hi' ? 'सोच रहा हूँ...' : 'Thinking...'}</span>
    `
    container.appendChild(thinking)
    container.scrollTop = container.scrollHeight
  }

  const updateThinking = (text: string) => {
    const el = document.querySelector('#bot-thinking .thinking-text')
    if (el) el.textContent = text
  }

  const removeThinking = () => {
    document.getElementById('bot-thinking')?.remove()
  }

  renderSuggestions()
  sendBtn?.addEventListener('click', handleSend)
  input?.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend() })

  const langSelector = document.getElementById('lang-selector')
  langSelector?.addEventListener('change', () => {
    setTimeout(renderSuggestions, 100)
  })
}

function setupMagneticButtons() {
  const btns = document.querySelectorAll('.btn-primary, .btn-secondary, .civic-bot-toggle')
  btns.forEach(btn => {
    btn.addEventListener('mousemove', (e: any) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      })
    })
  })
}

function renderVoterJourney() {
  const container = document.getElementById('voter-journey-container')
  const titleEl = document.getElementById('journey-title')
  if (!container || !titleEl) return
  const data = countryData[currentCountry].languages[currentLang]
  titleEl.textContent = data.ui.journey_title
  container.innerHTML = ''

  data.voterJourney.forEach((step, index) => {
    const card = document.createElement('div')
    card.className = 'journey-card glass-card-mini'
    card.style.animationDelay = `${index * 0.1}s`
    card.innerHTML = `
      <div class="journey-number">${step.id}</div>
      <div class="journey-icon">${step.icon}</div>
      <h4>${step.title}</h4>
      <p>${step.desc}</p>
      ${step.id === 5 ? `<button class="btn-primary" style="margin-top:10px; width: 100%;" onclick="window.startVvpatSim()">${currentLang === 'hi' ? 'VVPAT सिम्युलेट करें' : 'Simulate VVPAT'}</button>` : ''}
    `
    container.appendChild(card)
  })
}

function renderMap() {
  const container = document.getElementById('india-map')
  const infoPanel = document.getElementById('map-info')
  if (!container || !infoPanel) return
  
  const data = countryData[currentCountry].languages[currentLang]
  container.innerHTML = ''
  
  // High-performance abstract constellation map
  data.leadership.stateLeaders.forEach((leader, index) => {
    const node = document.createElement('div')
    node.className = 'map-node'
    node.setAttribute('aria-label', `State: ${leader.region}, CM: ${leader.name}`)
    node.setAttribute('role', 'button')
    node.setAttribute('tabindex', '0')
    
    // Position logic for abstract India shape
    const row = Math.floor(index / 6)
    const col = index % 6
    node.style.left = `${15 + col * 14}%`
    node.style.top = `${10 + row * 15}%`
    
    node.addEventListener('click', () => {
      selectState(leader)
    })
    
    node.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') selectState(leader)
    })

    container.appendChild(node)
  })
}

function selectState(leader: any) {
  const infoPanel = document.getElementById('map-info')
  const nameEl = document.getElementById('selected-state-name')
  const statsEl = document.getElementById('state-quick-stats')
  const viewBtn = document.getElementById('btn-view-state')
  
  if (!infoPanel || !nameEl || !statsEl || !viewBtn) return
  
  infoPanel.classList.remove('hidden')
  nameEl.textContent = leader.region
  statsEl.innerHTML = `
    <div class="stat-line"><strong>CM:</strong> ${leader.name}</div>
    <div class="stat-line"><strong>Party:</strong> ${leader.partyFlag} ${leader.party}</div>
  `
  
  // @ts-ignore
  viewBtn.onclick = () => window.openStateModal(leader.region)
  
}

function addMessage(text: string, sender: 'user' | 'bot') {
  const container = document.getElementById('bot-messages')
  if (!container) return
  const msg = document.createElement('div')
  msg.className = `message ${sender}`
  msg.textContent = text
  container.appendChild(msg)
  container.scrollTop = container.scrollHeight
}

window.scrollToSection = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

declare global {
  interface Window {
    toggleCivicBot: () => void;
    scrollToSection: (selector: string) => void;
    openPartyModal: (partyName: string) => void;
  }
}

// Add window method for State/Party Modal
;(window as any).openPartyModal = (partyName: string) => {
  showPartyInfo(partyName);
  document.getElementById('modal-deputies')!.classList.add('hidden');
  document.getElementById('party-modal')!.classList.remove('hidden');
}

;(window as any).openStateModal = (region: string) => {
  const langData = countryData[currentCountry].languages[currentLang];
  const stateLeader = langData.leadership.stateLeaders.find(s => s.region === region);
  if (!stateLeader) return;
  
  showPartyInfo(stateLeader.party);
  
  const deputiesDiv = document.getElementById('modal-deputies');
  const deputiesGrid = document.getElementById('deputies-grid');
  if (stateLeader.deputies && stateLeader.deputies.length > 0) {
    deputiesDiv!.classList.remove('hidden');
    deputiesGrid!.innerHTML = '';
    stateLeader.deputies.forEach(dep => {
      deputiesGrid!.innerHTML += `
        <div class="deputy-card">
          <img src="${dep.image}" alt="${dep.name}" class="deputy-img" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/330px-Unknown_person.jpg'">
          <div class="deputy-info">
            <span class="deputy-name">${dep.name}</span>
          </div>
        </div>
      `;
    });
  } else {
    deputiesDiv!.classList.add('hidden');
  }
  
  document.getElementById('party-modal')!.classList.remove('hidden');
}

function showPartyInfo(partyName: string) {
  const langData = countryData[currentCountry].languages[currentLang]
  // @ts-ignore
  const partyData = langData.partyKnowledge
  if(!partyData || !partyData[partyName]) return
  
  const info = partyData[partyName]
  document.getElementById('modal-party-name')!.textContent = partyName
  document.getElementById('modal-party-desc')!.textContent = info.desc
  
  const ideologyPrefix = currentLang === 'hi' ? 'विचारधारा: ' : 'Ideology: '
  const foundedPrefix = currentLang === 'hi' ? 'स्थापना: ' : 'Founded: '
  
  document.getElementById('modal-party-ideology')!.textContent = ideologyPrefix + info.ideology
  document.getElementById('modal-party-founded')!.textContent = foundedPrefix + info.founded
}

// Close Modal Logic
document.getElementById('close-modal')?.addEventListener('click', () => {
  document.getElementById('party-modal')?.classList.add('hidden')
})
document.getElementById('party-modal')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('party-modal')) {
    document.getElementById('party-modal')?.classList.add('hidden')
  }
})
function renderPollChecklist() {
  const countryBase = countryData[currentCountry]
  const data = countryBase.languages[currentLang]
  const container = document.getElementById('checklist-container')
  const title = document.getElementById('checklist-title')
  if (!container || !title || !data.pollChecklist) return

  title.textContent = data.pollChecklist.title
  container.innerHTML = ''

  data.pollChecklist.items.forEach((item, index) => {
    const itemEl = document.createElement('div')
    itemEl.className = 'checklist-item glass-card'
    itemEl.innerHTML = `
      <div class="check-box"></div>
      <p>${item}</p>
    `
    itemEl.addEventListener('click', () => {
      itemEl.classList.toggle('checked')
      gsap.from(itemEl.querySelector('.check-box'), { scale: 0.5, opacity: 0, duration: 0.3 })
    })
    container.appendChild(itemEl)
  })
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW registration failed:', err))
    })
  }
}

// @ts-ignore
window.startVvpatSim = () => {
  const modal = document.getElementById('vvpat-modal')
  const slip = document.querySelector('.vvpat-slip')
  const timer = document.getElementById('vvpat-timer')
  const status = document.getElementById('vvpat-status')
  
  if (!modal || !slip || !timer || !status) return
  
  modal.classList.remove('hidden')
  slip.classList.remove('dropped')
  
  let count = 7
  timer.textContent = `${count}s`
  status.textContent = (document.documentElement.lang === 'hi') ? 'पर्ची प्रिंट हो रही है...' : 'Printing slip...'
  
  setTimeout(() => {
    slip.classList.add('visible')
    const interval = setInterval(() => {
      count--
      timer.textContent = `${count}s`
      if (count === 0) {
        clearInterval(interval)
        status.textContent = (document.documentElement.lang === 'hi') ? 'सत्यापित! पर्ची गिर रही है...' : 'Verified! Dropping slip...'
        setTimeout(() => {
          slip.classList.add('dropped')
          setTimeout(() => {
            modal.classList.add('hidden')
            slip.classList.remove('visible')
          }, 1000)
        }, 1000)
      }
    }, 1000)
  }, 500)
}
