const getZoneById = (zoneId) => {
  switch (zoneId) {
    case 1000:
      return {
        long: 'Molten Core',
        short: 'MC'
      }
    case 1001:
      return {
        long: 'Onyxia\'s Lair',
        short: 'ONY'
      }
    case 1002:
      return {
        long: 'Blackwing Lair',
        short: 'BWL'
      }
    case 1003:
      return {
        long: 'Zul Gurub',
        short: 'ZG'
      }
    default:
      return {
        long: 'Unknown Zone',
        short: '??'
      }
  }
}

export { getZoneById }
