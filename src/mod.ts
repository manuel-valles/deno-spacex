import * as log from 'https://deno.land/std/log/mod.ts';
import * as _ from 'https://deno.land/x/lodash@4.17.15-es/lodash.js';

interface Launch {
    flightNumber: number
    mission: string
    rocket: string
    customers: string[]
}

interface Payload {
    customers: string[]
}

const launches = new Map<number, Launch>()

const downloadLaunchData = async (): Promise<void> => {
    log.info('Downloading launch data...')
    const response: Response = await fetch('https://api.spacexdata.com/v3/launches', {
        method: 'GET'
    })

    if (!response.ok) {
        log.warning('Problem downloading launch data')
        throw new Error('Launch data download failed.')
    }

    const launchData = await response.json()
    for (const launch of launchData) {
        const payloads: Payload[] = launch.rocket.second_stage.payloads
        const customers: string[] = _.flatMap(payloads, (payload: Payload) => payload.customers)
        const flightData: Launch = {
            flightNumber: launch.flight_number,
            mission: launch.mission_name,
            rocket: launch.rocket.rocket_name,
            customers
        }

        launches.set(flightData.flightNumber, flightData)
        log.info(JSON.stringify(flightData))
    }
}

await downloadLaunchData()
