const countingGame = require('../commands/countingGame'); // Pfad anpassen
const levelSystem = require('../utils/levelSystem');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.author.bot) return; // Bots ignorieren

        // 1. Counting-Spiel ausführen
        try {
            await countingGame.countingHandler(message);
        } catch (error) {
            console.error('[ERROR] Fehler im Counting-Spiel:', error);
        }

        // 2. Level-System ausführen
        try {
            const guildId = message.guild.id;
            const userId = message.author.id;

            const result = await levelSystem.addXP(userId, guildId, 10, message.client); // 10 XP pro Nachricht
            if (result.levelUp) {
                console.log(`${message.author.username} hat Level ${result.newLevel} erreicht.`);

                // Level-Up-Nachricht senden
                const levelUpMessage = `🎉 ${message.author} hat Level ${result.newLevel} erreicht!`;
                await message.channel.send(levelUpMessage);
            }
        } catch (error) {
            console.error('[ERROR] Fehler im Level-System:', error);
        }
    },
};
