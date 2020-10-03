const downloadLaunchData = async (): Promise<void> => {
    const response: Response = await fetch('https://api.spacexdata.com/v4/launches', {
        method: 'GET'
    })

    const launchData = await response.json()
    console.log(launchData);
}

await downloadLaunchData()