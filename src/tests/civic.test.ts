import { describe, it, expect } from 'vitest'
import { countryData } from '../electionData'

describe('Civic Pulse Data Integrity', () => {
  it('should have data for India', () => {
    expect(countryData.india).toBeDefined()
  })

  it('should have both English and Hindi translations', () => {
    const india = countryData.india
    expect(india.languages.en).toBeDefined()
    expect(india.languages.hi).toBeDefined()
  })

  it('should contain voter journey steps in English', () => {
    const journey = countryData.india.languages.en.voterJourney
    expect(journey.length).toBe(5)
    expect(journey[0].title).toBe('Register Online')
  })

  it('should have matching state leaders in both languages', () => {
    const enLeaders = countryData.india.languages.en.leadership.stateLeaders
    const hiLeaders = countryData.india.languages.hi.leadership.stateLeaders
    expect(enLeaders.length).toBe(hiLeaders.length)
  })
})

describe('CivicBot Simulation Logic', () => {
  it('should correctly identify state leaders from query (simulated matching)', () => {
    const query = 'who is the cm of maharashtra'
    const leaders = countryData.india.languages.en.leadership.stateLeaders
    const match = leaders.find(l => query.includes(l.region.toLowerCase()))
    expect(match).toBeDefined()
    expect(match?.name).toBe('Devendra Fadnavis')
  })
})
