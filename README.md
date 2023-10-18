# 2023-personal-page

## Deployment

Set remote host (need private key on keychain):

- Powershell

```powershell
$env:DOCKER_HOST = 'ssh://server@jonion.duckdns.org'
```

- Bash

```bash
export DOCKER_HOST='ssh://server@jonion.duckdns.org'
```

Build and deploy:

Remember to have a working .env file in the root directory locally so that it gets copied to the server.

```bash
docker-compose up -d --build --force-recreate --remove-orphans

crontab -e
```

Add the following line to the crontab:

```bash
0 5 1 */2 *  /usr/local/bin/docker-compose up -f /root/2023-personal-page/docker-compose.yaml certbot
```
