// import yargs from 'yargs'
// import {hideBin} from 'yargs/helpers'
//
// yargs(hideBin(process.argv))
//     .command('curl <url>', 'fetch the contents of the URL', ()=>{}, (argv) => {
//         console.info(argv)
//     })
//     .demandCommand(1)
//     .parse()

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
    .command('new <Note>', 'Create a new note', yargs  => {
        return yargs.positional('note', {
            type: 'string',
            description: 'The content of the note to create',
        })
    }, (argv) => {console.info(argv)})
    .option('tags', {
        alias: 't',
        type: 'string',
        description: 'Tags to add to the note'
    }
)
    .demandCommand(1)
    .parse()