import {Telegraf, Markup} from 'telegraf'

const token = '7969811316:AAHrZlX_x2om-x_1ZuFGyrW4i16stm4JzAQ'
const webAppUrl = 'https://lizard-clicker-1232a.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply('Привет дорогой друг!', Markup.inlineKeyboard([
        Markup.button.webApp('Open mini-app', `${webAppUrl}?ref=${ctx.payload}`)
    ]))
})

bot.launch()