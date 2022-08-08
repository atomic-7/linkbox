# Linkbox

A utility to collect links.
Could be extended to synchronize bookmarks.

## REST API
```
get lb/<user>/folder/id
get lb/<user>/folder/id
post lb/<user>/folder&name=""&link=""
put lb/<user>/folder/id&name=""
delete lb/<user>/folder/
delete lb/<user>/folder/id
```

## Name
* ~~Linkbucket~~
* ~~sta.sh~~
* linkbin
* linkbox (link.box)
* linking (link.ing)

## Interaction
The utility should be usable from a webfrontend, from a browser addon as well as a command line utility.

## System Requirements
The Solution needs to keep track of the links that a user has created and retrieve them as needed. The solution should support login with github via oauth. 
The user interacts with the utility via the REST api. 
The aim is as little bloat as possible. 
The addon should allow to configure bookmark folders to keep up to date with the utility.
The addon should allow to configure a polling interval as well as to initiate a manual poll.

## Implementation
feathersjs seems to be a solution, but it might be better to use it later to practice the earlier steps. Endgame SupaBase? 
- express.js for the rest api
- vue for the web frontend and the addon?
- Need an object relationship library to interact with the database (prisma?)
- Need a library for oauth and securing the routes (passport/grant/express-oauth2-jwt-bearer?)
- Redis to check authorized users? (redis faster than sql dbs for key value lookups)
