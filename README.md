- pg_ctl -D /usr/local/var/postgres -l logfile start (start Postgres)
- brew services start redis (start Redis)


change Node version

- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
- export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
- command -v nvm
- nvm install 11.10.1


npm registry

- npm config set registry https://registry.npmjs.org/

Mail

- asuspeg@mail.ru
- woody27allen