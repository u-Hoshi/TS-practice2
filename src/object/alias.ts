export default function typeAliasSample(): void {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'tokyo',
    language: 'japanese',
    name: 'japan',
  }
  console.log(japan)

  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  type Adventure = Knight | Wizard

  type Paladin = Knight & Wizard

  const adeventure1: Adventure = {
    hp: 300,
    sp: 39,
    weapon: '黒の剣',
    swordSkill: '三連切り',
  }

  const adeventure2: Adventure = {
    hp: 300,
    mp: 30,
    weapon: '杖',
    magicSkill: 'ファイアボール',
  }

  const paladin: Paladin = {
    hp: 3999,
    mp: 333,
    sp: 333,
    weapon: '魔法の剣',
    swordSkill: '三連切り',
    magicSkill: 'ファイアボール',
  }
  console.log(adeventure1)
  console.log(adeventure2)
  console.log(paladin)
}
