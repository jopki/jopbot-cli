/**
 * JopBot CLI - Advanced Solana Trading Bot
 * 
 * Welcome to JopBot! This CLI tool is designed to optimize your Solana trading strategies.
 * 
 * Connect with our community for more information and support:
 * [Join our Discord](https://discord.gg/kVMgcaD3NR)
 * 
 * Supported Features:
 * - Copy Trading (multi-wallet support, smart copy-buy and smart copy-sell)
 * - Telegram Sniffer (scraping)
 * - Discord Sniffer (scraping)
 * - Auto-Trading (take-profit, stop-loss, scale out profits/losses)
 * - Manual Trading/Scalping
 * - Realtime Price Visualization
 * - Telegram PnL Notifications
 * - Raydium Sniping Support
 * - Pumpfun Tokens Support
 * - Sniping Pumpfun Tokens During Migration
 * - Jito Bundles Support with Dynamic Jito Fees
 * - bloXroute Transactions Support
 * - Priority Fees
 * - Freezable/Mintable/Socials/Burnt/Top-Holder Checks
 * - Anti-MEV Protection
 * - gRPC Support (copy-trading)
 * - Separate GPA/RPC Calls
 * - Cross-Platform Compatibility (Windows, Mac, Linux)
 */

import { TradeBot } from './TradeBot';
import { DiscordNotifier } from './DiscordNotifier';

/**
 * Initialize the trading bot with desired configurations.
 */
const initializeBot = (): TradeBot => {
    const bot = new TradeBot({
        copyTrading: true,
        telegramSniffer: true,
        discordSniffer: true,
        autoTrading: {
            takeProfit: true,
            stopLoss: true,
            trailingStopLoss: true,
        },
        manualTrading: true,
        realtimeVisualization: true,
        telegramPnLNotifications: true,
        raydiumSniping: true,
        pumpfunSupport: true,
        migrationSniping: true,
        jitoBundles: true,
        bloXrouteSupport: true,
        priorityFees: true,
        tokenChecks: true,
        antiMEV: true,
        grpcSupport: true,
        separateGPARPC: true,
        crossPlatform: true,
    });

    return bot;
};

/**
 * Setup Discord notifications for enhanced community engagement.
 */
const setupDiscordNotifications = (): DiscordNotifier => {
    const notifier = new DiscordNotifier('https://discord.gg/kVMgcaD3NR');
    notifier.initialize();
    return notifier;
};

/**
 * Start the trading bot and Discord notifications.
 */
const start = () => {
    const bot = initializeBot();
    const discordNotifier = setupDiscordNotifications();

    bot.start();
    discordNotifier.notify('JopBot has started successfully! Join our [Discord](https://discord.gg/kVMgcaD3NR) for more info.');
};

// Execute the start function to run the bot
start();
