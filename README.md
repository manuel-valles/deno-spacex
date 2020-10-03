# Deno | The SpaceX Launch Project

A starting point for using **Fetch** in **Deno**

- Browser Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- Deno Fetch: https://deno.land/manual/examples/fetch_data
- SpaceX:

  - General: https://www.spacex.com/
  - Github: https://github.com/r-spacex/SpaceX-API
  - Postman: https://docs.spacexdata.com/

- Allowing a specific URL: `deno run --allow-net=api.spacexdata.com mod.ts`
- Standard Logging Library: https://deno.land/std@0.72.0/log
  ```typescript
  log.debug('Hello world');
  log.info(123456);
  log.warning(true);
  log.error({ foo: 'bar', fizz: 'bazz' });
  log.critical('500 Internal server error');
  ```
