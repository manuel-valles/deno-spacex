import * as log from 'https://deno.land/std/log/mod.ts';

const downloadLaunchData = async (): Promise<void> => {
    log.info('Downloading launch data...')
    const response: Response = await fetch('https://api.spacexdata.com/v4/launches', {
        method: 'GET'
    })

    if (!response.ok) {
        log.warning('Problem downloading launch data')
        throw new Error('Launch data download failed.')
    }

    const launchData = await response.json()
    // console.log(launchData);
}

await downloadLaunchData()