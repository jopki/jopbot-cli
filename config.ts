export interface BotConfig {
  wallet: string
  features: {
    copyTrading: boolean
    telegramSniffer: boolean
    discordSniffer: boolean
    autoTrading: boolean
  }
}

export const config: BotConfig = {
  wallet: '',
  features: {
    copyTrading: true,
    telegramSniffer: true,
    discordSniffer: true,
    autoTrading: true
  }
}
