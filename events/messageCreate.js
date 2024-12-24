const levelSystem = require('../utils/levelSystem');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.author.bot) return;

        const guildId = message.guild.id;
        const userId = message.author.id;

        const result = await levelSystem.addXP(userId, guildId, 10, message.client); // 10 XP pro Nachricht
        if (result.levelUp) {
            console.log(`${message.author.username} hat Level ${result.newLevel} erreicht.`);
        }
    }
};
