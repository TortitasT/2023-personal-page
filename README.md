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

```bash
docker-compose up -d --build --force-recreate
```