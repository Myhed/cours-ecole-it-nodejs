export const commandsInfos = {
    privateMessage: {
        name: 'privateMessage',
        regex: /^\/privateMessage ([0-9]+) ([\w]+)/i,
        command: '/privateMessage'
    },
    kickUser: {
        name: 'kick',
        regex: /\/kickUser ([0-9]+)/i,
        command: '/kick'
    }
}